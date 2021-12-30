const app = getApp()
Component({
    properties: {
        evaShow: {
            type: Boolean
        }
    },
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
    },
    methods: {
        goBack() {
            this.triggerEvent('handleClose')
        }
    }
})