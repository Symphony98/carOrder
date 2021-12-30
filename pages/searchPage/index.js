const app = getApp()
Page({
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
        value: '',

        shipName: '集港/疏港',
        time: '预约日期',
        port: '港口',
        trade: '状态',
        dateTime: false,

        currentDate: new Date().getTime(),
        formatter(type, value) {
            if (type === 'year') {
                return `${value}年`;
            }
            if (type === 'month') {
                return `${value}月`;
            }
            return value;
        },
        portList: [{
                name: "不限",
                id: 0,
            },
            {
                name: "南京港",
                id: 1,
            },
            {
                name: "镇江港",
                id: 2,
            },
            {
                name: "扬州港",
                id: 3,
            },
            {
                name: "泰州港",
                id: 4,
            },
        ], // 港口下拉框list
        targetIndex: 0, // 港口下拉框选中的icon图标

        shipNameBtn: 0,
        timeBtn: 0,
        tradeBtn: 0,
        selectShow: false,
        targetCarId: 1, // 车辆进出选中项 1 进出查询 2 预约查询
    },
    onLoad: function (options) {

    },
    // 点击其他区域关闭弹窗
    closeModle(e) {
        const tagNname = e.target.dataset.name
        if (tagNname !== "showSelect") {
            setTimeout(() => {
                this.setData({
                    selectShow: false,
                })
            }, 300);
        }
    },
    showSelect() {
        this.setData({
            selectShow: !this.data.selectShow
        })
    },
    choseCar(e) {
        this.setData({
            targetCarId: e.target.dataset.id,
        })
        setTimeout(() => {
            this.setData({
                selectShow: false,
            })
        }, 300);
    },
    // 弹窗内取消按钮
    closeDropdown() {
        this.selectComponent('#shipName').toggle(false);
        this.selectComponent('#time').toggle(false);
        this.selectComponent('#port').toggle(false);
        this.selectComponent('#trade').toggle(false);
        this.setData({
            dateTime: false,
        })
    },
    // 选择日期聚焦
    inputFocus() {
        this.setData({
            dateTime: true,
        })
    },
    // 日期组件取消
    dateCancel() {
        this.setData({
            dateTime: false,
        })
    },
    // 日期组件确认
    dateConfirm(val) {
        const time = val.detail
        let date = new Date(time)
        const year = date.getFullYear()
        const month = date.getMonth() + 1
        const day = date.getDate()
        console.log(`${year}年-${month}月-${day}日`);
    },
    // 集港/疏港按钮点击
    choseType(e) {
        this.setData({
            shipNameBtn: e.target.dataset.id
        })
    },
    choseType2(e) {
        this.setData({
            timeBtn: e.target.dataset.id
        })
    },
    choseType3(e) {
        this.setData({
            tradeBtn: e.target.dataset.id
        })
    },
    // 港口选择
    fatherTap(event) {
        let id = event.target.dataset.id
        this.setData({
            targetIndex: id
        })
    },
    // 关闭
    shipClose() {
        this.setData({
            shipNameBtn: 0
        })
    },
    timeClose() {
        this.setData({
            timeBtn: 0,
            dateTime: false,
        })
    },
    portClose() {
        this.setData({
            targetIndex: 0,
        })
    },
    tradeClose() {
        this.setData({
            tradeBtn: 0
        })
    }
})