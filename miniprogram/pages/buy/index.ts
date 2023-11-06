// pages/buy/index.ts
Page({

  /**
   * 页面的初始数据
   */
  data: {
    method: 0, // 0按照次数 1 按照时间
    activeId: 1, //套餐的id
    activePrice: 0, //选中套餐的price
    content: [
      [
        {
          id: 1,
          detail: '一个月',
          currentPrice: 18,
          deletePrice: 38,
        },
        {
          id: 2,
          detail: '一年',
          currentPrice: 128,
          deletePrice: 216,
        },
      ],
      [
        {
          id: 3,
          detail: '10次',
          currentPrice: 5,
          deletePrice: 5,
        },
        {
          id: 4,
          detail: '20次',
          currentPrice: 8,
          deletePrice: 10,
        },
        {
          id: 5,
          detail: '40次',
          currentPrice: 15,
          deletePrice: 20,
        },
      ]
    ],
  },

  changeMethod(event: any) {
    const method = Number(event.currentTarget.dataset.method);
    const activeId = this.data.content[method][0].id
    this.setData({ method, activeId })
    this.changePrice(activeId)
  },

  selectMethod(event: any) {
    const activeId = Number(event.currentTarget.dataset.id);
    this.setData({ activeId })
    this.changePrice(activeId)
  },

  changePrice(activeId: number) {
    const arr = this.data.content.flat()
    const target = arr.find(item => {
      return item.id === activeId
    })
    this.setData({ activePrice: target!.currentPrice })
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
    this.changePrice(1)
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