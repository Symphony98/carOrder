const app = getApp()
Component({
    properties: {
        show: {
            type: Boolean
        }
    },
    data: {
        navBarHeight: app.globalData.navBarHeight, //导航栏高度
        myShow: false,
        shipName: '船名',
        time: '预计到达时间',
        port: '港口',
        trade: '贸易属性',
        dateTime: false,

        currentDate: new Date().getTime(),
        minDate: new Date().getTime(),
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
        ],
        targetIndex: 0,
        value: '',
    },
    methods: {
        // 关闭评价页
        close() {
            this.setData({
                myShow: false,
            })
        },
        goBack() {
            this.triggerEvent('handleClose')
        },
        toMyEvaluate() {
            this.setData({
                myShow: true,
            })
        },
        inputFocus() {
            this.setData({
                dateTime: true,
            })
        },
        cancel() {
            this.setData({
                dateTime: false,
            })
        },
        closeDropdown() {
            this.selectComponent('#time').toggle(false);
            this.setData({
                dateTime: false,
            })
        },
        fatherTap(event) {
            let id = event.target.dataset.id
            this.setData({
                targetIndex: id
            })
        }
    }
})