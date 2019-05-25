Page({
  data: {
    showModal: false,
    time: '15:45',//默认起始时间  
    time2: '16:00',//默认结束时间 
  },
  submit: function () {
    this.setData({
      showModal: true
    })
  },
  preventTouchMove: function () { },
  go: function () {
    this.setData({
      showModal: false
    })
  },
  onShow(options) {
    let self = this;
    let aShow = JSON.parse(sessionStorage.getItem('aShow')) || '';
    if (aShow) {
      wx.showModal({
        title: 'hahahahah',
        success: function (res) {
          sessionStorage.setItem('aShow', false);
          if (res.confirm) {
            console.log('用户点击确定')
          } else if (res.cancel) {
            console.log('用户点击取消')
          }
        }
      })
    }
  },
  // 时间段选择  
  bindTimeChange(e) {
    let that = this;
    console.log(e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },
  bindTimeChange2(e) {
    let that = this;
    that.setData({
      time2: e.detail.value,
    })
  }
})