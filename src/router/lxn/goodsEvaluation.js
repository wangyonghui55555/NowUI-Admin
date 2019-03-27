import React from 'react'
import {Route} from 'react-router-dom';

import GoodsEvaluationIndex from '../../view/lxn/goodsEvaluation/Index';
import GoodsEvaluationDetail from '../../view/lxn/goodsEvaluation/Detail';

export default [
	<Route key="GoodsEvaluationIndex" path="/goods/evaluation/index" component={GoodsEvaluationIndex}/>,
	<Route key="GoodsEvaluationAdd" path="/goods/evaluation/add" component={GoodsEvaluationDetail}/>,
	<Route key="GoodsEvaluationEditGoodsEvaluationId" path="/goods/evaluation/edit/:goodsEvaluationId" component={GoodsEvaluationDetail}/>
]
