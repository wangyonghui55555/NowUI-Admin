const list = [{
    store: require('../store/dashboard').default,
    router: require('../router/dashboard').default
}, {
    store: require('../store/code').default,
    router: require('../router/code').default
}
    // 运维管理模块
    , {
        store: require('../store/ebike/operators').default,
        router: require('../router/ebike/operators').default
    }, {
        store: require('../store/ebike/operatorsSupplier').default,
        router: require('../router/ebike/operatorsSupplier').default
    }, {
        store: require('../store/ebike/operatorsMaintenanceMember').default,
        router: require('../router/ebike/operatorsMaintenanceMember').default
    }, {
        store: require('../store/ebike/operatorsMaintenanceRecord').default,
        router: require('../router/ebike/operatorsMaintenanceRecord').default
    }, {
        store: require('../store/ebike/operatorsMaintenanceFault').default,
        router: require('../router/ebike/operatorsMaintenanceFault').default
    }, {
        store: require('../store/ebike/operatorsMaintenanceFaultHandle').default,
        router: require('../router/ebike/operatorsMaintenanceFaultHandle').default
    }
    //电子围栏管理模块
    , {
        store: require('../store/ebike/area').default,
        router: require('../router/ebike/area').default
    }, {
        store: require('../store/ebike/areaPoint').default,
        router: require('../router/ebike/areaPoint').default
    }, {
        store: require('../store/ebike/areaPointAround').default,
        router: require('../router/ebike/areaPointAround').default
    }, {
        store: require('../store/ebike/areaPointStrategyPrice').default,
        router: require('../router/ebike/areaPointStrategyPrice').default
    }, {
        store: require('../store/ebike/areaPointStrategyParking').default,
        router: require('../router/ebike/areaPointStrategyParking').default
    }, {
        store: require('../store/ebike/areaPointAroundScope').default,
        router: require('../router/ebike/areaPointAroundScope').default
    }
    //基础设施管理模块
    , {
        store: require('../store/ebike/facilitiesBike').default,
        router: require('../router/ebike/facilitiesBike').default
    }, {
        store: require('../store/ebike/facilitiesBikePartsType').default,
        router: require('../router/ebike/facilitiesBikePartsType').default
    }, {
        store: require('../store/ebike/facilitiesBikeParts').default,
        router: require('../router/ebike/facilitiesBikeParts').default
    }, {
        store: require('../store/ebike/facilities').default,
        router: require('../router/ebike/facilities').default
    }
    //会员信息模块
    , {
        store: require('../store/ebike/member').default,
        router: require('../router/ebike/member').default
    }, {
        store: require('../store/ebike/memberAccount').default,
        router: require('../router/ebike/memberAccount').default
    }, {
        store: require('../store/ebike/memberAccountDetail').default,
        router: require('../router/ebike/memberAccountDetail').default
    }, {
        store: require('../store/ebike/memberScoreRule').default,
        router: require('../router/ebike/memberScoreRule').default
    }, {
        store: require('../store/ebike/memberScoreIncrease').default,
        router: require('../router/ebike/memberScoreIncrease').default
    }
    //车辆数据与订单
    , {
        store: require('../store/ebike/cyclingBikeOperation').default,
        router: require('../router/ebike/cyclingBikeOperation').default
    }
    //授权管理
    , {
        store: require('../store/wechatMini').default,
        router: require('../router/wechatMini').default
    }
];

export default {
    list: list
};