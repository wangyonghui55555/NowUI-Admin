const list = [{
	name: 'dashboard',
    store: require('../store/dashboard').default,
    router: require('../router/dashboard').default
},{
	name: 'code',
    store: require('../store/code').default,
    router: require('../router/code').default
},{
	name: 'customerKpiset',
    store: require('../store/distribution/customerKpiset').default,
    router: require('../router/distribution/customerKpiset').default
},{
	name: 'company',
    store: require('../store/distribution/company').default,
    router: require('../router/distribution/company').default
},{
	name: 'companyAccountDetail',
    store: require('../store/distribution/companyAccountDetail').default,
    router: require('../router/distribution/companyAccountDetail').default
},{
	name: 'customer',
    store: require('../store/distribution/customer').default,
    router: require('../router/distribution/customer').default
},{
	name: 'customerContacts',
    store: require('../store/distribution/customerContacts').default,
    router: require('../router/distribution/customerContacts').default
},{
	name: 'branchCompany',
    store: require('../store/distribution/branchCompany').default,
    router: require('../router/distribution/branchCompany').default
},{
	name: 'branchCompanyAccountDetail',
    store: require('../store/distribution/branchCompanyAccountDetail').default,
    router: require('../router/distribution/branchCompanyAccountDetail').default
},{
	name: 'customerSettlementset',
    store: require('../store/distribution/customerSettlementset').default,
    router: require('../router/distribution/customerSettlementset').default
},{
	name: 'branchCompanyDividend',
    store: require('../store/distribution/branchCompanyDividend').default,
    router: require('../router/distribution/branchCompanyDividend').default
},{
	name: 'customerProvider',
    store: require('../store/distribution/customerProvider').default,
    router: require('../router/distribution/customerProvider').default
},{
	name: 'site',
    store: require('../store/distribution/site').default,
    router: require('../router/distribution/site').default
},{
	name: 'siteCompanyAccountDetail',
    store: require('../store/distribution/siteCompanyAccountDetail').default,
    router: require('../router/distribution/siteCompanyAccountDetail').default
},{
	name: 'riderLevel',
    store: require('../store/distribution/riderLevel').default,
    router: require('../router/distribution/riderLevel').default
},{
	name: 'rider',
    store: require('../store/distribution/rider').default,
    router: require('../router/distribution/rider').default
},{
	name: 'siteDividend',
    store: require('../store/distribution/siteDividend').default,
    router: require('../router/distribution/siteDividend').default
},{
	name: 'distributionOrder',
    store: require('../store/distribution/distributionOrder').default,
    router: require('../router/distribution/distributionOrder').default
},{
	name: 'siteProviderMap',
    store: require('../store/distribution/siteProviderMap').default,
    router: require('../router/distribution/siteProviderMap').default
},{
	name: 'customerKpiMap',
    store: require('../store/distribution/customerKpiMap').default,
    router: require('../router/distribution/customerKpiMap').default
},{
	name: 'riderDividend',
    store: require('../store/distribution/riderDividend').default,
    router: require('../router/distribution/riderDividend').default
},{
	name: 'riderAccountDetail',
    store: require('../store/distribution/riderAccountDetail').default,
    router: require('../router/distribution/riderAccountDetail').default
},{
	name: 'complaint',
    store: require('../store/distribution/complaint').default,
    router: require('../router/distribution/complaint').default
},{
	name: 'admin',
    store: require('../store/base/admin').default,
    router: require('../router/base/admin').default
},{
	name: 'menu',
    store: require('../store/base/menu').default,
    router: require('../router/base/menu').default
},{
	name: 'role',
    store: require('../store/base/role').default,
    router: require('../router/base/role').default
},{
	name: 'adminrole',
    store: require('../store/base/adminrole').default,
    router: require('../router/base/adminrole').default
},{
	name: 'roleMenuMap',
    store: require('../store/base/roleMenuMap').default,
    router: require('../router/base/roleMenuMap').default
},{
	name: 'roleSiteMap',
    store: require('../store/base/roleSiteMap').default,
    router: require('../router/base/roleSiteMap').default
},{
	name: 'customerProviderAccountDetail',
    store: require('../store/distribution/customerProviderAccountDetail').default,
    router: require('../router/distribution/customerProviderAccountDetail').default
},{
    name: 'yonghuiBusinessOrder',
    store: require('../store/distribution/yonghuiBusinessOrder').default,
    router: require('../router/distribution/yonghuiBusinessOrder').default
},{
    name: 'orderStatistics',
    store: require('../store/distribution/orderStatistics').default,
    router: require('../router/distribution/orderStatistics').default
},{
    name: 'siteCostOut',
    store: require('../store/distribution/siteCostOut').default,
    router: require('../router/distribution/siteCostOut').default
},{
    name: 'page',
    store: require('../store/base/page').default,
    router: require('../router/base/page').default
}];

export default {
    list: list
};