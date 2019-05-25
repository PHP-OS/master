Page({
  data: {
    array: [],
    dateList: [],
    report:{},
    index:0
  },
  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  bindTimeChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      time: e.detail.value
    })
  },

  onShow:function(){
    var myThis=this
    wx.request({
      url: 'http://localhost:8764/xhTijianport/getTheFirst/1',
      data:{},
      method:'GET',
      success:function(res){
        myThis.data.dateList.push(res.data.testDate);
        myThis.data.array.push(res.data.menzhenId);
        myThis.setData({
          dateList:myThis.data.dateList,
          report:JSON.parse(res.data.testValue)
        })

        console.log(myThis.data.dateList[myThis.data.index])
      }
    })
  }
})