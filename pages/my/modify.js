// pages/my/modify.js
Page({
  data: {},
  staticData:{
    content:""
  },
  handleInfo:function(e){
    this.staticData.content = e.detail.value;
    console.log(e.detail.value)
  },
  handleSubmit:function(){
    wx.switchTab({
      url: './index',
    })
    wx.request({
      url: "http://192.168.31.219:8764/xhMemberModifyInfo/add",
      method: "POST",
      header: { "Content-Type": "application/x-www-form-urlencoded" }, 
      data: this.staticData,
    })
  },
  goBack: function () {
    wx.switchTab({
      url: '../my/index',
    })
  }
})