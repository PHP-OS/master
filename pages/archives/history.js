Page({
  data: {
    selected: true,
    selected1: false,
    selected2: false,
    selected3: false,
    selected4: false,
    selected5: false
  },
  selected: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected: true
    })
  },
  selected1: function (e) {
    this.setData({
      selected: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected1: true
    })
  },
  selected2: function (e) {
    this.setData({
      selected1: false,
      selected: false,
      selected3: false,
      selected4: false,
      selected5: false,
      selected2: true
    })
  },
  selected3: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected: false,
      selected4: false,
      selected5: false,
      selected3: true
    })
  },
  selected4: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected: false,
      selected5: false,
      selected4: true
    })
  },
  selected5: function (e) {
    this.setData({
      selected1: false,
      selected2: false,
      selected3: false,
      selected4: false,
      selected: false,
      selected5: true
    })
  },
  staticData: [{
    type:1,
    info1: "",
    info2: "",
    info3: ""
  }, {
      type: 2,
      info1: "",
      info2: "",
      info3: ""
    }, {
      typeid: 3,
      info1: "",
      info2: "",
      info3: ""
    }, {
      type:4,
      info1: "",
      info2: "",
      info3: ""
    }, {
      type:5,
      info1: "",
      info2: "",
      info3: ""
    }, {
      type:6,
      info1: "",
      info2: "",
      info3: ""
      }],
  handleAllergySituation:function(e){
    this.staticData[0].info1 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleAllergyDrug:function(e){
    this.staticData[0].info2 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleAllergyRemarks:function(e){
    this.staticData[0].info3 = e.detail.value;
    console.log(e.detail.value);
  },

  handleMedicationSituation: function (e) {
    this.staticData[1].info1 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleMedicationDrug: function (e) {
    this.staticData[1].info2 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleMedicationRemarks: function (e) {
    this.staticData[1].info3 = e.detail.value;
    // console.log(e.detail.value);
  },

  handleDiseaseSituation: function (e) {
    this.staticData[2].info1 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleDiseaseName: function (e) {
    this.staticData[2].info2 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleDiseaseRemarks: function (e) {
    this.staticData[2].info3 = e.detail.value;
    // console.log(e.detail.value);
  },

  handleOperationSituation: function (e) {
    this.staticData[3].info1 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleOperationName: function (e) {
    this.staticData[3].info2 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleOperationRemarks: function (e) {
    this.staticData[3].info3 = e.detail.value;
    // console.log(e.detail.value);
  },

  handleBloodSituation: function (e) {
    this.staticData[4].info1 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleBloodDrug: function (e) {
    this.staticData[4].info2 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleBloodRemarks: function (e) {
    this.staticData[4].info3 = e.detail.value;
    // console.log(e.detail.value);
  },

  handleInheritSituation: function (e) {
    this.staticData[5].info1 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleInheritDrug: function (e) {
    this.staticData[5].info2 = e.detail.value;
    // console.log(e.detail.value);
  },
  handleInheritRemarks: function (e) {
    this.staticData[5].info3 = e.detail.value;
    console.log(e.detail.value);
  },


  handleSubmit: function () {
    for(var i=0;i<6;i++){
      if(this.staticData[i].info1!=""){
        wx.request({
          url: 'http://192.168.31.219:8764/xhHistoryinfo/addByUserId/1',
          data: this.staticData[i],
          method: "POST",
          header: { 'Content-Type': "application/x-www-form-urlencoded" },
          success:function(res){
            console.log(res),
            wx.redirectTo({
              url: '../archives/index',
            })
          }
          
          
        })
      }
      
    }
    
  }
})