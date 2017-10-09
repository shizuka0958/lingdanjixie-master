//product.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userinfo: "",
    imgUrls: [
      '../../images/swiper_4.jpg',
      '../../images/swiper_2.jpeg',
      '../../images/swiper_3.jpeg'
    ],

  },
  onLoad: function () {
  },
  // 展开介绍
  showDesc: function () {
    this.setData({
      desc: true
    })
  }
})