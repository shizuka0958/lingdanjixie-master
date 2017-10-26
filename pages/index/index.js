//index.js
//获取应用实例
const app = getApp()

Page({
  data: {
    desc:false,
    imgUrls: [
      '../../images/swiper_1.jpg',
      '../../images/swiper_2.jpeg',
      '../../images/swiper_3.jpeg'
    ],
    icon_aboutus:"../../images/icon/aboutus.png",
    icon_hot: "../../images/icon/hot.png",
    indicatorDots: true,
    autoplay: true,
    interval: 5000,
    duration: 1000,
    goods:[
      {
        image:"../../images/goods/goods_1.jpg",
        title:"单电机罩壳",
        price:"20.00"
      },
      {
        image: "../../images/goods/goods_2.jpg",
        title: "双电机罩壳",
        price: "35.00"
      },
      {
        image: "../../images/goods/goods_3.jpg",
        title: "电脑箱单孔",
        price: "85.00"
      },
      {
        image: "../../images/goods/goods_4.jpg",
        title: "可调壳铜片",
        price: "2.00"
      },
      {
        image: "../../images/goods/goods_5.jpg",
        title: "碳刷支架",
        price: "4.00"
      },
      {
        image: "../../images/goods/goods_6.jpg",
        title: "花边机铁片冲压",
        price: "3.00"
      },
      {
        image: "../../images/goods/goods_7.jpg",
        title: "锦面铜片冲压一次成型",
        price: "0.80"
      },
      {
        image: "../../images/goods/goods_8.jpg",
        title: "新功率散热片",
        price: "20.00"
      },
      {
        image: "../../images/goods/goods_9.jpg",
        title: "电机上支架",
        price: "15.00"
      },
      {
        image: "../../images/goods/goods_10.jpg",
        title: "可调壳注塑",
        price: "5.00"
      },
      {
        image: "../../images/goods/goods_11.jpg",
        title: "功率板110",
        price: "15.00"
      }
    ]
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
  onShareAppMessage: function (res) {
    if (res.from === 'button') {
      // 来自页面内转发按钮
      console.log(res.target)
    }
    return {
      title: '常州市灵丹机械配件',
      path: '/pages/index/index',
      success: function (res) {
        // 转发成功
      },
      fail: function (res) {
        // 转发失败
      }
    }
  }
})
