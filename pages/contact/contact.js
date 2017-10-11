//contact.js
//获取应用实例
const app = getApp()

Page({
  data: {
    userinfo: {},
    contactListInfo: [
      {
        index:0,
        icon: '../../images/icon/wechat.png',
        text: '微信号',
        marginleft:280,
        num:"yanzi056855",
        arrow:false
      }, {
        index: 1,
        icon: '../../images/icon/phone.png',
        text: '客服电话',
        marginleft: 250,
        num:"13775059933",
        arrow: false
      }, {
        index: 2,
        icon: '../../images/icon/addr.png',
        text: '公司地址',
        marginleft: 180,
        num:"",
        arrow: true
      }],
   
  },
  onLoad: function () {
    var that = this;
    //调用应用实例的方法获取全局数据
    app.getUserInfo(function (userInfo) {
      //更新数据
      that.setData({
        userInfo:userInfo
      })
    })

    // wx.showModal({
    //   title: '拨打客服电话',
    //   content: '15051990811',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
          
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // })
  },
  onShow: function () {
  },
  contactDetail:function(e){
    var data = e.currentTarget.dataset
    var index = data.index;
    if (1 == index){
      wx.makePhoneCall({
        phoneNumber: '13775059933' 
      })
    }else if(2 == index){
      wx.navigateTo({
        url: '../map/map',
      })
    }
  }
})
