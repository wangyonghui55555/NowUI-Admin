import ActiveType from "../emun/ActiveType";

export default {
    active: ActiveType.PROD,
	// host: 'http://localhost:10030',
	host: 'http://118.31.229.16:80',
	// imageHost: 'http://localhost:8080',
	imageHost: 'http://118.31.229.16:80',
	appId: 'df2078d6c9eb46babb0df957127273ab',
	platform: 'PC',
	version: '1.0.0',
	pageSize: 10,
	name: '阳光益路总控后台',
	shortName: '阳光益路',
	index: '/page/index',
	login: '/admin/admin/login',
	success: '操作成功',
	failure: '操作失败',
	error: '网络有问题',
	menuList: [{
		id: '1',
		name: '页面管理',
		icon: 'tag',
		children: [{
			id: '11',
			name: '页面信息',
            icon: 'layout',
			url: '/page/index'
		}, {
			id: '12',
			name: '页面分类信息',
            icon: 'layout',
			url: '/page/category/index'
		}]
	}]
};