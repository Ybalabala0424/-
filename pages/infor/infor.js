// pages/infor/infor.js
const app = getApp()

Page({

  /**
   * 页面的初始数据
   */
  data: {
    task:{},
    taskName:"",
    taskLabel:"",
    taskDo:"",
    taskInfor:"",
    key:""
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    var key = options.key;
    var isTrue = 0;
    this.data.task = app.globalData.dataList[key]
    isTrue = this.data.task.完成情况
    var TaskDo = isTrue?'未完成':'已完成'
    var label = this.data.task.任务标签
    var TaskLabel="任务标签(选填)"
    if(label == TaskLabel){
      label = ""
    }
    this.setData({
      key:key,
      task:this.data.task,
      taskName: this.data.task.任务名称,
      taskInfor: this.data.task.任务内容,
      taskLabel: label,
      taskDo: TaskDo
    })
    console.log(this.data.task)
  },
  deleteTask:function(e){
    delete app.globalData.dataList[this.data.key],
    wx.navigateTo({
      url: '../index/index',
    })
  },
  doTask:function(e1){
    app.globalData.dataList[this.data.key].完成情况 = 0
    wx.navigateTo({
      url: '../index/index',
    })
  }
})