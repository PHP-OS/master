// pages/appointment/appointment.js
Page({
  data: {

  },
  onLoad: function (options) {

  },
  onLoad(option) {
    wx.navigateBack({
      delta: 1
    })
  },

  onShow:function(){
    var myThis = this;
    wx.request({
      
      url: 'http://192.168.31.219:8764/xhYuyueorders/listByUserId/1',
      method:"GET",
      success:function(res){
        
        myThis.setData({
          records:res.data.rows
        })
        console.log(myThis.data.records);
      }
    })
  },
  

})