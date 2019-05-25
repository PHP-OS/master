Page({
  data: {
    // 前台显示list
    showlist: [],
    // 当前页
    pageNumber: 1,
    // 总页数
    totalPage: 1,

    sexArray: [
      {
        index: 0,
        title: '性别',
        option: ['请选择您的性别', '男', '女'],
      },
    ],
    objArray: [
      {
        index: 0,
        title: '年龄',
        option: ['请选择您的年龄', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16','17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32','33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49','50','51','52','53','54','55'],
      },
    ],
  },
  staticData: {
    username:"",
    age: "",
    identitycode: "",
    sex:"",
    telephone:""
  },
  bindChange_select1: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.sexArray[curindex].index = ev.detail.value
    this.setData({
      sexArray: this.data.sexArray
    })
    this.staticData.sex = this.data.sexArray[0].option[this.data.sexArray[0].index];
//    console.log(this.data.sexArray);
  },
  bindChange_select: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.objArray[curindex].index = ev.detail.value
    this.setData({
      objArray: this.data.objArray
    })
    this.staticData.age = this.data.objArray[0].option[this.data.objArray[0].index];
//    console.log(this.data.objArray);
  },
  handleName:function(e){
    this.staticData.username = e.detail.value;
    // console.log(e.detail.value);
  },
  handleIdCard:function(e){
    this.staticData.identitycode = e.detail.value;
    // console.log(e.detail.value);
    // console.log(this.staticData.idCard);
  },
  handlePhone:function(e){
    this.staticData.telephone = e.detail.value;
    // console.log(e.detail.value);
  },
  handleSubmit:function(){
    if (!this.staticData.username) {
      wx.showToast({
        title: '请填写姓名',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if (!this.staticData.identitycode) {
      wx.showToast({
        title: '请填写身份证号',
        icon: 'loading',
        duration: 1000
      })
      return;
    }
    if(!this.staticData.telephone){
      wx.showToast({
        title: '请填写手机号码',
        icon: 'loading',
        duration: 1000
      })
      return;
    }

    wx.request({
      url: "http://192.168.31.219:8764/xhJiuzhenren",
      method: "POST",
      header: { "Content-Type": "application/x-www-form-urlencoded" },   //必填
      data: this.staticData,
      
    })
  },

  onLoad: function (options) {
    var self = this;
    // 请求后台 
    // 获取第一页的list及总页数
    wx.request({
      url: '',
      data: {

      },
      success: function (res) {
        self.setData({
          showlist: res.data.list,
          totalPage: res.data.totalPage,
        })
      },
      fail: function (res) {

      }
    })
  },
  onReachBottom: function () {
    var self = this;
    // 当前页+1
    var pageNumber = self.data.pageNumber + 1;

    self.setData({
      pageNumber: pageNumber,
    })

    if (pageNumber <= self.data.totalPage) {
      wx.showLoading({
        title: '加载中',
      })
      // 请求后台，获取下一页的数据。
      wx.request({
        url: '',
        data: {
          pageNumber: pageNumber,
        },
        success: function (res) {
          wx.hideLoading()
          // 将新获取的数据 res.data.list，concat到前台显示的showlist中即可。
          self.setData({
            showlist: self.data.showlist.concat(res.data.list)
          })
        },
        fail: function (res) {
          wx.hideLoading()
        }
      })
    }

  }


})