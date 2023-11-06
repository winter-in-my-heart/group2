// my/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    // opts: [
    //   '订购',
    //   '创作记录',
    //   '常见问题',
    //   '联系客服',
    //   '关于',
    //   '分享有礼',
    // ],
  },
  goToRecord() {
    wx.navigateTo({
      url: '/pages/record/index',
    })
  },

  goToBuy() {
    wx.navigateTo({
      url: '/pages/buy/index',
    })
  },

  goToWorksRecord() {
    wx.navigateTo({
      url: '/pages/works-record/index',
    })
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad() {

  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload() {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh() {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage() {

  }
})