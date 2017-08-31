/**
 * @author wangdi
 */

/**
 * 输出top_nav
 * @param output_id 输出内容id
 */
function nav_menu_output(output_id) {
  var content = 
    '<div class  =  "row nav_row">'+
    '    <div class  =  "col-lg-12 nav_col">'+
    '      <div class = "list-group">'+
    '        <a class = "list-group-item clearfix active nav_radius">协同办公<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a href = "../index/org_structure.html" class = "list-group-item clearfix nav_pl30">组织架构管理</a>'+
    '        <a class = "list-group-item clearfix active">CRM<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a href = "../index/enterprise_management.html" class = "list-group-item clearfix nav_pl30">企业信息管理</a>'+
    '        <a href = "../index/contact_management.html" class = "list-group-item clearfix nav_pl30">添加联系人</a>'+
    '        <a class = "list-group-item clearfix active">库区管理<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a href = "../index/warehouse_management.html" class = "list-group-item clearfix nav_pl30">库区列表</a>'+
    '        <a class = "list-group-item clearfix active">合同管理<span class = "glyphicon glyphicon-chevron-down pull-right"></span></a>'+
    '        <a class = "list-group-item clearfix nav_pl30 nav_bgddd">经营类<span class = "glyphicon glyphicon-chevron-down pull-right nav_colorfff"></span></a>'+
    '        <a href = "../index/contract_buy.html" target = "_blank" class = "list-group-item clearfix nav_pl45">采购合同</a>'+
    '        <a href = "../index/contract_sale.html" target = "_blank" class = "list-group-item clearfix nav_pl45">销售合同</a>'+
    '        <a class = "list-group-item clearfix nav_pl30 nav_bgddd">服务类<span class = "glyphicon glyphicon-chevron-down pull-right nav_colorfff"></span></a>'+
    '        <a href = "../index/contract_warehouse.html" target = "_blank" class = "list-group-item clearfix nav_pl45">储罐合同</a>'+
    '        <a class = "list-group-item active text-center nav_radius">Copyright &copy; 2017</a>'+
    '      </div>'+
    '    </div>'+
    '   </div>';
    $(output_id).html(content);
}