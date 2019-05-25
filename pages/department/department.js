
Page({

  data: {
    desctions: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

   /**
   * 生命周期函数--监听页面显示
   */
  onShow(options) {
    var myThis = this;
    wx.request({
      url: 'http://192.168.31.219:8764/xhDsection/all',
      method: "GET",
      header: { 'Content-Type': 'application/json' },
      data:{},
      success:function(res) {
        myThis.setData({ 
          dsections: res.data.rows
          })
        console.log(myThis.data.dsections);
      }
    })
  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  },
})