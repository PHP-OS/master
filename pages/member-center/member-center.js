  Page({
    staticData:{},
    
    onShow:function(){
      var that = this
      wx.request({
        
        url: 'http://192.168.31.219:8764/xhMember/1',
        method:'GET',
        header: { 'content-type': 'application/json' },
        success(res) {
          console.log(res)
          that.setData({ staticData: res.data.result })
        }
      })
    },
    backToMy:function(){
      wx.switchTab({
        url: '../my/index',
      })
    }
  })