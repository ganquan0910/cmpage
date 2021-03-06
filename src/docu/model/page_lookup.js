'use strict';
// +----------------------------------------------------------------------
// | CmPage [ 通用页面框架 ]
// +----------------------------------------------------------------------
// | Licensed under the Apache License, Version 2.0
// +----------------------------------------------------------------------
// | Author: defans <defans@sina.cn>
// +----------------------------------------------------------------------

/**
 单据流转的业务模块，实现了采购、库存管理相关的业务逻辑
 @module docu.model
 */

/**
 * 通用的页面行为实现类，基础自 cmpage/page, 当增加一个简单业务模块又不想有相应的实现类的时候，可以指向本类，以便实现连接不同的数据库
 * @class docu.model.page
 */

import CMPage from '../../cmpage/model/page_lookup.js';

export default class extends CMPage {

    /**
     * 初始化设置页面参数
     * @method  initPage
     */
    async initPage(){
        await super.initPage();
        this.pk = 'c_id';
    }

}
