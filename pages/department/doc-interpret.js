
Page({
  data:{
    objArrayM: [],
    index: 0,
    jiuzhenren:[],
    jiedu:{
      userid: 0,
      doctorid: 0,
      money: 0,
      content: "",
      picurls: "",
      createtime:""
    },
    objArray: [
      {
        index: 0,
        title: '就诊人',
        option: ['请选择>','我', '丹丹'],
      },
      {
        index: 0,
        title: '既往史',
        option: ['请选择>','过敏史', '遗传史','输血史','用药史','疾病史','手术史','输血史'],
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

  sendmessage:function(e){
    var jc = 'jiedu.content';

    this.setData({
      [jc] : e.detail.value
    })
  },

  handleSubmit:function(){

    var ju = 'jiedu.userid';
//    var jt = 'jiedu.createtime';
    var myThis = this

    this.setData({
      [ju]: this.data.objArrayM[this.data.index].id,
//      [jt]: new Date()
    })

    if (this.data.jiedu.userid!= 0 ){

      var date = new Date();
      this.setData({
        'jiedu.createtime' : date
      })

      console.log(this.data.jiedu)

      wx.request({
        url: 'http://localhost:8764/xhJiedu',
        data: myThis.data.jiedu,
        method: 'POST',
        success:function(res){
          wx.redirectTo({
            url: '../archives/index',
          })
        }
      })
    }

  },

  onShow:function(){
    var myThis = this
    wx.request({
      url: 'http://localhost:8764/xhJiuzhenren/findByOperator?operatorid=1',
      data:{},
      method:'GET',
      success:function(res){
        if(res.data.status == 200){
          myThis.setData({
            jiuzhenren:res.data.rows
          })

          var jentity = [{
            id: 0,
            name: '请选择>'
          }];

          for(var i = 0; i < myThis.data.jiuzhenren.length; i++){
            var jid = myThis.data.jiuzhenren[i].id;
            var jname = myThis.data.jiuzhenren[i].username;
            
            jentity.push({ id: jid, name : jname});
          }

          myThis.setData({
            objArrayM: jentity
          })

        }
      }
    })
  }
})