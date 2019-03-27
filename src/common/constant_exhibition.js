import ActiveType from "../emun/ActiveType";

export default {
    active: ActiveType.PROD,
    // host: 'http://localhost:10030',
    host: 'http://118.31.229.16:10020',
    // imageHost: 'http://localhost:8080',
    imageHost: 'http://118.31.229.16:10040',
    appId: 'zg2078d6c9eb46babb0df957127273ab',
    platform: 'PC',
    version: '1.0.0',
    pageSize: 10,
    name: '展馆总控后台',
    shortName: '展馆',
    index: '/page/index',
    login: '/admin/admin/v1/login',
    success: '操作成功',
    failure: '操作失败',
    error: '网络有问题',
    menuList:[{
        id: '1',
        name: '页面管理',
        icon: 'tag',
        children: [{
            id: '11',
            name: '页面信息',
            icon: 'layout',
            url: '/page/index'
        },{
            id: '12',
            name: '页面分类信息',
            icon: 'layout',
            url: '/page/category/index'
        }]
    },{
        id: 2,
        name: '项目管理',
        icon: 'tag',
        children: [{
            id: '13',
            name: '活动主题',
            icon: 'layout',
            url: '/activity/theme/index'
        },{
            id: '14',
            name: '项目管理',
            icon: 'layout',
            url: '/activity/project/index'
        }]
    }]
};