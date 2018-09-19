//app.js
App({
  onLoad: function () {
    dataList = (wx.getStorage({
      key: 'all',
      success: function (res) { },
    }))||({task0:{"任务名称":任务名称,"任务内容":任务内容,"任务标签":任务标签}}),
    num = wx.getStorage({
      key: 'count',
      success: function(res) {},
    })
  },
  globalData: {
    userInfo: null,
    dataList:{},
    num:1
  },
  onHide:function(){
    wx.setStorage({
      key: 'all',
      data: dataList,
    })
    wx.setStorage({
      key: 'count',
      data: num,
    })
  }
})
