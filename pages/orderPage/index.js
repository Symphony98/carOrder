const app = getApp()
Page({
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
        writeShow: false,
    },
    onLoad: function (options) {

    },
    openWrite: function (e) {
        this.setData({
            writeShow: true,
        })
    },
    close: function (e) {
        this.setData({
            writeShow: false
        })
    }
})