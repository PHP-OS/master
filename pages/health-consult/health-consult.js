// pages/news/news.js
Page({
  
  data: {
    showModal: false,
    doctorList:[],
    page:1,
    pages:1
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () {},
  go: function () {
    this.setData({
      showModal: false
    })
  },
  goBack:function(){
    wx.switchTab({
      url: '../my/index',
    })
  },
  onShow(options) {
    // 
    this.getDoctors(1)
  },
  onReachBottom(){
    if (!this.loading && this.data.page <= this.data.pages) {
      this.getDoctors(this.data.page + 1)
    }
  },
  getDoctors:function(pageNo){
    let self = this;
    wx.request({

      url: 'http://192.168.31.219:8764/xhDoctoruser/list?offset='+pageNo,
      data: {},
      method: "GET",
      success: function (res) {
        console.log(res.data.status)
        if (res.data.status === 200) {
          self.setData({
            doctorList: self.data.doctorList.concat(res.data.rows),
            pages:res.data.total,
            page:pageNo
          })
          console.log(self.data.doctorList)
        }
      }
    })
  }
})