Page({
    data: {
        value: '',
        value1: 0,
        option1: [{
                text: '南京港',
                value: 0
            },
            {
                text: '新款商品',
                value: 1
            },
            {
                text: '活动商品',
                value: 2
            },
        ],
    },
    onLoad: function (options) {

    },
    click: function(e) {
        console.log(111);
    }
})