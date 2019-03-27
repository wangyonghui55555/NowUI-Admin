const list = [{
    store: require('../store/dashboard').default,
    router: require('../router/dashboard').default
},{
    store: require('../store/code').default,
    router: require('../router/code').default
},{
    store: require('../store/distribution/customerKpiset').default,
    router: require('../router/distribution/customerKpiset').default
},{
    store: require('../store/distribution/company').default,
    router: require('../router/distribution/company').default
},{
    store: require('../store/distribution/companyAccountDetail').default,
    router: require('../router/distribution/companyAccountDetail').default
},{
    store: require('../store/distribution/customer').default,
    router: require('../router/distribution/customer').default
},{
    store: require('../store/distribution/customerContacts').default,
    router: require('../router/distribution/customerContacts').default
},{
    store: require('../store/distribution/branchCompany').default,
    router: require('../router/distribution/branchCompany').default
},{
    store: require('../store/distribution/branchCompanyAccountDetail').default,
    router: require('../router/distribution/branchCompanyAccountDetail').default
},{
    store: require('../store/distribution/customerSettlementset').default,
    router: require('../router/distribution/customerSettlementset').default
},{
    store: require('../store/distribution/branchCompanyDividend').default,
    router: require('../router/distribution/branchCompanyDividend').default
},{
    store: require('../store/distribution/customerProvider').default,
    router: require('../router/distribution/customerProvider').default
},{
    store: require('../store/distribution/site').default,
    router: require('../router/distribution/site').default
},{
    store: require('../store/distribution/siteCompanyAccountDetail').default,
    router: require('../router/distribution/siteCompanyAccountDetail').default
},{
    store: require('../store/distribution/riderLevel').default,
    router: require('../router/distribution/riderLevel').default
},{
    store: require('../store/distribution/rider').default,
    router: require('../router/distribution/rider').default
},{
    store: require('../store/distribution/siteDividend').default,
    router: require('../router/distribution/siteDividend').default
},{
    store: require('../store/distribution/distributionOrder').default,
    router: require('../router/distribution/distributionOrder').default
},{
    store: require('../store/distribution/siteProviderMap').default,
    router: require('../router/distribution/siteProviderMap').default
},{
    store: require('../store/distribution/customerKpiMap').default,
    router: require('../router/distribution/customerKpiMap').default
},{
    store: require('../store/distribution/riderDividend').default,
    router: require('../router/distribution/riderDividend').default
},{
    store: require('../store/distribution/riderAccountDetail').default,
    router: require('../router/distribution/riderAccountDetail').default
},{
    store: require('../store/distribution/complaint').default,
    router: require('../router/distribution/complaint').default
},{
    store: require('../store/base/admin').default,
    router: require('../router/base/admin').default
},{
    store: require('../store/base/menu').default,
    router: require('../router/base/menu').default
},{
    store: require('../store/base/role').default,
    router: require('../router/base/role').default
},{
    store: require('../store/base/menu').default,
    router: require('../router/base/menu').default
},{
    store: require('../store/base/adminrole').default,
    router: require('../router/base/adminrole').default
},{
    store: require('../store/base/roleMenuMap').default,
    router: require('../router/base/roleMenuMap').default
},{
    store: require('../store/base/roleSiteMap').default,
    router: require('../router/base/roleSiteMap').default
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
}];

export default {
    list: list
};