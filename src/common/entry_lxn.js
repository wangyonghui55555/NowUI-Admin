const list = [{
    store: require('../store/dashboard').default,
    router: require('../router/dashboard').default
}, {
    store: require('../store/code').default,
    router: require('../router/code').default
}, {
    store: require('../store/base/app').default,
    router: require('../router/base/app').default
}, {
    store: require('../store/base/message').default,
    router: require('../router/base/message').default
}, {
    store: require('../store/wechat/wechatMini').default,
    router: require('../router/wechat/wechatMini').default
}
    //会员信息模块
    , {
        store: require('../store/lxn/member').default,
        router: require('../router/lxn/member').default
    }
    , {
        store: require('../store/lxn/memberWechat').default,
        router: require('../router/lxn/memberWechat').default
    }
    , {
        store: require('../store/lxn/memberShipping').default,
        router: require('../router/lxn/memberShipping').default
    }
    , {
        store: require('../store/lxn/memberCart').default,
        router: require('../router/lxn/memberCart').default
    }
    , {
        store: require('../store/lxn/memberPay').default,
        router: require('../router/lxn/memberPay').default
    }

    //商品管理模块
    , {
        store: require('../store/lxn/goodsCategory').default,
        router: require('../router/lxn/goodsCategory').default
    }
    , {
        store: require('../store/lxn/goods').default,
        router: require('../router/lxn/goods').default
    }
    , {
        store: require('../store/lxn/goodsNextDay').default,
        router: require('../router/lxn/goodsNextDay').default
    }
    , {
        store: require('../store/lxn/goodsCycle').default,
        router: require('../router/lxn/goodsCycle').default
    }
    , {
        store: require('../store/lxn/goodsNavigation').default,
        router: require('../router/lxn/goodsNavigation').default
    }, {
        store: require('../store/lxn/goodsHot').default,
        router: require('../router/lxn/goodsHot').default
    }
];

export default {
    list: list
};