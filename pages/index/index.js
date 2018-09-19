//index.js
//获取应用实例
const app = getApp()
var util = require('../../utils/util.js');

Page({
  data: {
    doList: [],
    notList:[],
    NotList:[],
    notToDo:[],
    dataList:{},
    num:0,
    showView:0
  },
  onLoad: function () {
    var time = util.formatTime(new Date());
    this.setData({
      time: time,
      dataList : app.globalData.dataList,
      num: app.globalData.num
    })
    console.log(this.data.dataList)
    for(var i in app.globalData.dataList){
      var doOrNot = this.data.dataList[i].完成情况;
      var taskName = this.data.dataList[i].任务名称;
      var task = {
        name:taskName,
        key:i
      }
      if(doOrNot){
        this.data.doList.push(task)
       }else{
        this.data.notList.push(task)
       }
    }
    this.setData({
      doList:this.data.doList,
      notList:this.data.notList
    })
    console.log(this.data.doList)
  },
   btn: function () {
    var that = this;
    var notToDo= [];
    that.setData({
      showView: (!that.data.showView),
      notToDo:this.data.showView?that.data.NotList:that.data.notList
    })
  }
})
