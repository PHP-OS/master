Page({
  data: {
    array: ['请选择','张三', '李四', '王五'],
    objectArray: [
      {
        id: 0,
        name: '请选择'
      },
      {
        id: 1,
        name: '张三'
      },
      {
        id: 2,
        name: '李四'
      },
      {
        id: 3,
        name: '王五'
      },
    ],
    index: 0,
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  onLoad: function (options) {

  },
  onLoad(option) {
    wx.navigateBack({
      delta: 1
    })
  }

})