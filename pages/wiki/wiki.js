Page({

  data:{
    scroll: [],
    article:[],
    page: 1,
    pages: 1,
    articles: [],
    isrec:true,
    typeid:''
  },

  rec:function(e){
    var myThis = this
    this.setData({
      isrec:true,
      typeid:'',
      page:1,
      article:[]
    })
    this.getArticlesTest(1,true,'')
  },

  typearticle:function(e){
    var typeid = e.target.dataset.name;
    var myThis = this
    this.setData({
      isrec: false,
      typeid: typeid,
      page: 1,
      article:[]
    })
    this.getArticlesTest(1,false,typeid)
  },
  

  onShow() {
    var myThis = this
    wx.request({
      url: 'http://192.168.31.219:8764/xhArticletype/all',
      data:{},
      method: "GET",
      success: function(res){
        myThis.setData({
          scroll : res.data.rows
        })
      }
    })
    this.getArticlesTest(1,true,'')
  },

  
  //下拉刷新
  
  onReachBottom() {
    // 下拉触底，先判断是否有请求正在进行中
    // 以及检查当前请求页数是不是小于数据总页数，如符合条件，则发送请求
    if (!this.loading && this.data.page <= this.data.pages) {
      this.getArticlesTest(this.data.page + 1,this.data.isrec,this.data.typeid)
    }
  },
  onPullDownRefresh() {
    // 下拉刷新
    if (!this.loading) {
      this.fetchArticleList(1, true).then(() => {
        // 处理完成后，终止下拉刷新
        wx.stopPullDownRefresh()
      })
    }
  },
  

  

  
  

  
  getArticlesTest:function(pageNo, isrec, typeid) {
    var myThis = this
    wx.request({
      url: 'http://192.168.31.219:8764/xhArticle/list?offset=' + pageNo + '&isrec=' + isrec + '&typeid=' + typeid,
      data: {},
      method: "GET",
      success: function (res) {
        //        console.log(res);
        var rows = res.data.rows;

        var nowtime = new Date();
        //        console.log(nowtime);
        for (var i = 0; i < rows.length; i++) {
          var t1 = rows[i].createtime;
          var d1 = t1.replace(/\-/g, "/").replace(/T/g, " ").substring(0, 17);
          var date1 = new Date(d1);
          var min = parseInt((nowtime - date1) / 1000);
          if (min < 60) {
            rows[i].createtime = min + "秒";
          } else if (min >= 60 && min < 3600) {
            rows[i].createtime = parseInt(min / 60) + "分钟";
          } else if (min >= 3600 && min < 86400) {
            rows[i].createtime = parseInt(min / 3600) + "小时";
          } else if (min >= 86400 && min < 2592000) {
            rows[i].createtime = parseInt(min / 86400) + "天";
          }
          //          console.log(rows[i].createtime);
        }
        
        
        myThis.setData({
          page:pageNo,
          pages:res.data.total,
          article: myThis.data.article.concat(rows)
        })
 //       console.log(myThis.data.article)

        //        console.log(myThis.data.article); 

      }
    })
  }
})
