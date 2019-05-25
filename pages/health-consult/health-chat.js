
Page({
  data: {
    showModal: false
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
  }
})