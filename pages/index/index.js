//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    desc:false,
    imgUrls: [
      '../../images/swiper_4.jpg',
      '../../images/swiper_2.jpeg',
      '../../images/swiper_3.jpeg'
    ],
    icon_aboutus:"../../images/icon/aboutus.png",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000
  },
  onLoad: function () {
  },
  // 展开介绍
  showDesc: function () {
    this.setData({
      desc: true
    })
  },
  // 关闭介绍
  hideDesc: function () {
    this.setData({
      desc: false
    })
  },
})
