Page({
  data: {
    date: '请选择>',
    array: ['请选择>', '男', '女'],
    objectArray: [
      {
        id: 0,
        name: '请选择>'
      },
      {
        id: 1,
        name: '男'
      },
      {
        id: 2,
        name: '女'
      },
    ],
    index: 0,
    mzArray: [
      {
        index: 0,
        title: '民族',
        option: ['请选择>', '汉族','壮族', '藏族', '裕固族', '彝族', '瑶族', '锡伯族', '乌孜别克族', '维吾尔族', '佤族', '土家族', '土族', '塔塔尔族', '塔吉克族', '水族', '畲族', '撒拉族', '羌族', '普米族', '怒族', '纳西族', '仫佬族', '苗族', '蒙古族', '门巴族', '毛南族', '满族', '珞巴族', '僳僳族', '黎族', '拉祜族', '柯尔克孜族', '景颇族', '京族', '基诺族', '回族', '汉族', '赫哲族', '哈萨克族', '哈尼族', '仡佬族', '高山族', '鄂温克族', '俄罗斯族', '鄂伦春族', '独龙族', '东乡族', '侗族', '德昂族', '傣族', '达斡尔族', '朝鲜族', '布依族', '保安族', '布朗族', '白族', '阿昌族',],
      },
    ],
    whArray:[ 
      {
        index: 0,
        title: '文化程度',
        option: ['请选择>', '学龄前','小学', '初中','高中','专科','本科','以上'],
      }
    ],
    Array: [
      {
        index: 0,
        title: '婚姻状况',
        option: ['请选择>', '已婚', '未婚'],
      },
      {
        index: 0,
        title: '血型',
        option: ['请选择>', 'A', 'B', 'AB','O'],
      },
      {
        index: 0,
        title: 'RH',
        option: ['请选择>', '阳性', '阴性'],
      },
      {
        index: 0,
        title: '医保类型',
        option: ['请选择>', '城镇医保', '农村医保'],
      },
    ],
  },

  staticData: {
  },

  sub:function (){
    console.log(this.data.staticData)
    wx.request({
      url: 'http://192.168.31.219:8764/xhDangan/update',
      method:"POST",
      header: { "Content-Type": "application/x-www-form-urlencoded" },
      data: this.data.staticData,
    })
  },
  

  bindPickerChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      index: e.detail.value
    })
  },
  
  bindDateChange(e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      date: e.detail.value
    })
    //this.staticData.birthday = this.data.birthdayArray[0].option[this.data.birthdayArray[0].index];
  },
  bindChange_select: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.Array[curindex].index = ev.detail.value
    this.setData({
      Array: this.data.Array
    })
  },
  bindChange_select2: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.mzArray[curindex].index = ev.detail.value
    this.setData({
      mzArray: this.data.mzArray
    })
  },
  bindChange_select3: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.whArray[curindex].index = ev.detail.value
    this.setData({
      whArray: this.data.whArray
    })
  },

  //修改文本框数据事件
  bindchange1: function (e) {
    this.setData({
      'staticData.name': e.detail.value
    })
  },
  bindchangeidentitycode: function (e) {
    this.setData({
      'staticData.identitycode': e.detail.value
    })
  },
  bindchangetelephone: function (e) {
    this.setData({
      'staticData.telephone': e.detail.value
    })
  },
  bindchangework: function (e) {
    this.setData({
      'staticData.work': e.detail.value
    })
  },
  bindchangezhiye: function (e) {
    this.setData({
      'staticData.zhiye': e.detail.value
    })
  },
  onShow: function () {
    var that = this;
    wx.request({
      url: 'http://192.168.31.219:8764/xhDangan/getByUserId/1',
      method: "GET",
      header: {
        'content-type': 'application/json' // 默认值
      },
      success(res) {
        console.log(res)
        that.setData({
          staticData:res.data.result
        })
        if (res.data.result.sex==='男'){
          that.setData({
            index: 1
          })
        }
        if (res.data.result.sex === '女') {
          that.setData({
            index: 2
          })
        }

        that.setData({
          whArray: [{
            index: res.data.result.xueli,
            title: '文化程度',
            option: ['请选择>', '学龄前', '小学', '初中', '高中', '专科', '本科', '以上'],
          }]
        })

        that.setData({
          Array: [
            {
              index: res.data.result.xuexing,
              title: '血型',
              option: ['请选择>', 'A', 'B', 'AB', 'O'],
            },
            {
              index: res.data.result.hunyin,
              title: '婚姻状况',
              option: ['请选择>', '已婚', '未婚'],
            },
            {
              index: res.data.result.rhtype,
            title: 'RH',
            option: ['请选择>', '阳性', '阴性'],
            },
            {
              index: res.data.result.yibao,
              title: '医保类型',
              option: ['请选择>', '城镇医保', '农村医保'],
            }
          ]
        })

        that.setData({
          whArray: [{
            index: res.data.result.minzu,
            title: '民族',
            option: ['请选择>', '汉族', '壮族', '藏族', '裕固族', '彝族', '瑶族', '锡伯族', '乌孜别克族', '维吾尔族', '佤族', '土家族', '土族', '塔塔尔族', '塔吉克族', '水族', '畲族', '撒拉族', '羌族', '普米族', '怒族', '纳西族', '仫佬族', '苗族', '蒙古族', '门巴族', '毛南族', '满族', '珞巴族', '僳僳族', '黎族', '拉祜族', '柯尔克孜族', '景颇族', '京族', '基诺族', '回族', '汉族', '赫哲族', '哈萨克族', '哈尼族', '仡佬族', '高山族', '鄂温克族', '俄罗斯族', '鄂伦春族', '独龙族', '东乡族', '侗族', '德昂族', '傣族', '达斡尔族', '朝鲜族', '布依族', '保安族', '布朗族', '白族', '阿昌族',],
          }]
        })

      }
    })
  },
  onLoad: function (options) {},
  // onLoad(option) {
  //   wx.navigateBack({
  //     delta: 1
  //   })
  // }
  

})