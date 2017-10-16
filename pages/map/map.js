//map.js
//获取应用实例
const app = getApp()

Page({
  data: {
    icon_navi: "../../images/icon/navi.png",
    markers: [{
      iconPath:"../../images/icon/marker.png",
      id: 0,
      latitude: 31.770560,
      longitude: 120.023960,
      width: 32,
      height: 32,
      callout:{
        content:"常州市新动力创业中心22幢A单元",
        display:"ALWAYS",
        padding:3,
        fontSzie:30,
        borderRadius:5
      }
    }]
  },
  regionchange(e) {
    console.log(e.type)
  },
  markertap(e) {
    console.log(e.markerId)
    
  },
  controltap(e) {
    console.log(e.controlId)
  },
  navito:function(){
    wx.openLocation({
      latitude: 31.770560,
      longitude: 120.023960,
      scale: 28,
      name:"常州市灵丹机械配件有限公司",
      address:"常州市新动力创业中心22幢A单元"
    })
  }
})