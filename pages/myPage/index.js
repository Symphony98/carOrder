const app = getApp()
Page({
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
        show: false,
        evaShow: false,
        myShow: false,
    },
    onLoad: function (options) {

    },
    toShipOrder: function (e) {
        this.setData({
            show: true
        })
    },
    toShipEvaluate: function (e) {
        this.setData({
            evaShow: true
        })
    },
    toMyEvaluate: function (e) {
        this.setData({
            myShow: true
        })
    },
    close: function (e) {
        this.setData({
            show: false,
            evaShow: false,
            myShow: false,
        })
    }
})