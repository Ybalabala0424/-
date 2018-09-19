// pages/add/add.js
const app = getApp()
var Num = app.globalData.num;
var num = parseInt(Num);

Page({

  /**
   * 页面的初始数据
   */
  data: {
    taskName:"",
    taskInfor:"",
    array:['任务标签(选填)','学习','生活','工作'],
    index:0,
    taskLabel:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  taskNameInput: function (e1) {
    const that = this;
    that.setData({
      taskName: e1.detail.value
    })
  },
  taskInforInput: function (e2) {
    const that = this;
    that.setData({
      taskInfor: e2.detail.value
    })
  },
  bindPickerChange:function(e3){
    const that = this;
    that.setData({
      index:e3.detail.value
    })
  },
  refresh:function(e){
    if(this.data.taskName == ""){
      wx.showLoading({
        title: '请输入任务名',
        duration:1000
      })
    }else{
      var name = "task" + num++
      app.globalData.dataList[name]={
        任务名称: this.data.taskName,
        任务内容: this.data.taskInfor,
        任务标签: this.data.array[this.data.index],
        完成情况: 1
      }
      wx.navigateTo({
        url: '../index/index',
      })
      }
    }
    
})