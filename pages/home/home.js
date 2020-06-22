// pages/home/home.js
import http from '../../server/network.js'
Page({

  /**
   * 页面的初始数据
   */
  data: {
    banners:[],
    recommends:[]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    //在这里请求数据，因为没有接口，我只是模仿一下，数据全部为静态的
    http({
      url:'/home/multidata',
      method:'get'
    }).then((res)=>{
      this.setData({
        banners:res.data.data.banner.list,
        recommends:res.data.data.recommend.list
      })
    })
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})