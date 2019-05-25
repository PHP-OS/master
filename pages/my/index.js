Page({
  data:{},
  staticData: {
    username: "",
    wxcode: "",
    avatar: "",
    name: "",
    grade:""
  },
  onShow:function(){
    console.log("1");
    var that = this;
    wx.request({
      url: 'http://192.168.31.219:8764/xhMember/1',
      method: "GET",
      header: { 'content-type': 'application/json'}, 
      success(res) {
        that.setData({staticData:res.data.result})
      }
    })
  },
  goMyInfo:function(){
    wx.navigateTo({
      url: '../my/info',
    })
  },
  goVip: function () {
    wx.redirectTo({
      url: '../member-center/member-center'
    })
  },
  
  goAdvRecord: function () {
    wx.redirectTo({
      url: '../advisory-record/advisory-record'
    })
  },
  goApponRecord: function () {
    wx.redirectTo({
      url: '../appointment/appointment-record'
    })
  },

})