//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    imgUrls: [
      '../image/001.jpg',
      '../image/002.jpg',
      '../image/003.jpg'
    ],
    indicatorDots: false,
    autoplay: false,
    interval: 5000,
    duration: 1000,
    classify:[
      { src:"../image/fruit1.png",  names:"拼团"  },
      { src: "../image/fruit2.png", names: "新品" },
      { src: "../image/fruit3.png", names: "限时特惠" },
      { src: "../image/fruit4.png", names: "砍价" },
      { src: "../image/fruit5.png", names: "特卖" }, 
      { src: "../image/fruit6.png", names: "预约" },
      { src: "../image/fruit7.png", names: "优惠券" },
      { src: "../image/fruit8.png", names: "爆款" }
    ],
    visible1: false,
    actions1: [
      {
        name: '13063415502',
      },
      // {
      //   name: '去分享',
      //   icon: 'share',
      //   openType: 'share'
      // }
    ],
  },
  //事件处理函数
  bindViewTap: function() {
    
    // wx.navigateTo({
    //   url: '../logs/logs'
    // })
  },
  finds (e) {
      console.log(e)
  },
  callphone(){
    wx.makePhoneCall({
      phoneNumber: '13063415502'
    })
  },
  handleCancel1() {
    this.setData({
      visible1: false
    });
  },
  handleClickItem1( {detail} ) {
    const tell = this.data.actions1[detail.index].name;

  },

  onLoad: function () {
    // if (app.globalData.userInfo) {
    //   this.setData({
    //     userInfo: app.globalData.userInfo,
    //     hasUserInfo: true
    //   })
    // } else if (this.data.canIUse){
    //   // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
    //   // 所以此处加入 callback 以防止这种情况
    //   app.userInfoReadyCallback = res => {
    //     this.setData({
    //       userInfo: res.userInfo,
    //       hasUserInfo: true
    //     })
    //   }
    // } else {
    //   // 在没有 open-type=getUserInfo 版本的兼容处理
    //   wx.getUserInfo({
    //     success: res => {
    //       app.globalData.userInfo = res.userInfo
    //       this.setData({
    //         userInfo: res.userInfo,
    //         hasUserInfo: true
    //       })
    //     }
    //   })
    // }
  },
  getUserInfo: function(e) {
    // console.log(e)
    // app.globalData.userInfo = e.detail.userInfo
    // this.setData({
    //   userInfo: e.detail.userInfo,
    //   hasUserInfo: true
    // })
  }
})
