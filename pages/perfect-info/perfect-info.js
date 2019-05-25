Page({
  data: {
    objArray: [
      {
        index: 0,
        title: '年龄',
        option: ['请选择', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36', '37', '38', '39', '40', '41', '42', '43', '44', '45', '46', '47', '48', '49', '50', '51', '52', '53', '54', '55'],
      },
      {
        index: 0,
        title: '性别',
        option: ['女', '男'],
      },
      {
        index: 0,
        title: '警种',
        option: ['交警', '武警'],
      },
      {
        index: 0,
        title: '警衔',
        option: ['二级', '一级'],
      },
      {
        index: 0,
        title: '职级',
        option: ['二级', '一级'],
      },
    ],
    stArray: [
      {
        index: 0,
        title: '身体状况',
        option: ['亚健康', '健康', '疾病'],
      },
    ],
  },
  bindChange_select: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.objArray[curindex].index = ev.detail.value
    this.setData({
      objArray: this.data.objArray
    })
  },
  bindChange_select1: function (ev) {
    const curindex = ev.target.dataset.current
    this.data.stArray[curindex].index = ev.detail.value
    this.setData({
      stArray: this.data.stArray
    })
  }
})