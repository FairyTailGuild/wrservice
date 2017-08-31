/**
 * @author yangyongxia
 */

/**
 * 企业信息列表变量
 */
var company_data = {"data": [
  {"name": "腾智联合互联网科技有限公司","short_name": "腾智","registered_capital": "10000","establish_datetime": "2017-07-03","tax_identification_number": "111111111111111111","bank_name": "山东建设银行历下支行","account": "6217002390000544121","telephone_number": "15764231003","address": "山东省济南市历下区","uuid": "11111111111"},
  {"name": "东营瑞腾石油化工有限公司","short_name": "瑞腾","registered_capital": "10000","establish_datetime": "2017-07-03","tax_identification_number": "111111111111111111","bank_name": "山东建设银行历下支行","account": "6217002390000544121","telephone_number": "15764231003","address": "山东省济南市历下区","uuid": "11111111111"},
  {"name": "上海煦语石油化工有限公司","short_name": "煦语","registered_capital": "10000","establish_datetime": "2017-07-03","tax_identification_number": "111111111111111111","bank_name": "山东建设银行历下支行","account": "6217002390000544121","telephone_number": "15764231003","address": "山东省济南市历下区","uuid": "11111111111"},
  {"name": "上海凌言化工有限公司","short_name": "凌言","registered_capital": "10000","establish_datetime": "2017-07-03","tax_identification_number": "111111111111111111","bank_name": "山东建设银行历下支行","account": "6217002390000544121","telephone_number": "15764231003","address": "山东省济南市历下区","uuid": "11111111111"},
  {"name": "中油华威石油化工（大连）有限公司","short_name": "华威","registered_capital": "10000","establish_datetime": "2017-07-03","tax_identification_number": "111111111111111111","bank_name": "山东建设银行历下支行","account": "6217002390000544121","telephone_number": "15764231003","address": "山东省济南市历下区","uuid": "11111111111"},
  {"name": "舟山纳海污水处理有限公司","short_name": "舟山纳海","registered_capital": "10000","establish_datetime": "2017-07-03","tax_identification_number": "111111111111111111","bank_name": "山东建设银行历下支行","account": "6217002390000544121","telephone_number": "15764231003","address": "山东省济南市历下区","uuid": "11111111111"}
]};

var current_company_detail_data = {
  "name": "腾智联合互联网科技有限公司",
  "short_name": "腾智",
  "registered_capital": "10000",
  "establish_datetime": "2017-07-03",
  "tax_identification_number": "111111111111111111",
  "bank_name": "山东建设银行历下支行",
  "account": "6217002390000544121",
  "telephone_number": "15764231003",
  "address": "山东省济南市历下区",
  "uuid": "11111111111",
  "type": "1"
};
/**
 * 附件
 */
var invoice_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

var institutional_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

var hazardous_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

var idcard_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

var account_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

var safety_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

var business_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
]

/**
 * 分页变量
 */
var rows = 20;
var current_offset = 0;

/**
 * 全局搜索条件
 */
var enterprise_management_search_condition = {};

/**
 * 复选框 icheck
 */
function enterprise_management_checkbox() {
  $("input").iCheck({
    checkboxClass: 'icheckbox_square-blue',
  });
}

function enterprise_management_clear_raw_data() {
  $("#enterprise_management_list thead").html("");
  $("#enterprise_management_list tbody").html("");
  $("#enterprise_management_pages").html("");
}

function enterprise_management_fill_variable_data() {
  var header = 
    '<tr>'+
      '<th class = "name">企业名称</th>'+
      '<th class = "short_name">企业简称</th>'+
      '<th class = "registered_capital">注册资金（万元）</th>'+
      '<th class = "establish_datetime">成立时间</th>'+
      '<th class = "tax_identification_number">纳税识别号</th>'+
      '<th class = "bank_name">开户银行</th>'+
      '<th class = "account">银行账号</th>'+
      '<th class = "telephone_number">联系电话</th>'+
      '<th class = "address">地址</th>'+
      '<th></th>'+
    '</tr>'
  var content = null;
  if (isJsonObjectHasData(company_data)) {
    for (var i = 0; i < company_data.data.length; i++){
      content += 
        '<tr>'+
            '<td class = "name">' + company_data.data[i].name + '</td>'+
            '<td class = "short_name">' + company_data.data[i].short_name + '</td>'+
            '<td class = "registered_capital">' + company_data.data[i].registered_capital + '</td>'+
            '<td class = "establish_datetime">' + company_data.data[i].establish_datetime + '</td>'+
            '<td class = "tax_identification_number">' + company_data.data[i].tax_identification_number + '</td>'+
            '<td class = "bank_name">' + company_data.data[i].bank_name + '</td>'+
            '<td class = "account">' + company_data.data[i].account + '</td>'+
            '<td class = "telephone_number">' + company_data.data[i].telephone_number + '</td>'+
            '<td class = "address">' + company_data.data[i].address + '</td>'+
            '<td>'+
              '<span title = "详情" data-uuid = "' + company_data.data[i].uuid + '" class = "glyphicon glyphicon-info-sign" id = "enterprise_management_detail_info"></span>'+
              '<span title = "修改" data-uuid = "' + company_data.data[i].uuid + '" class = "glyphicon glyphicon-pencil" id = "enterprise_management_edit_info"></span>'+
              '<span title = "删除" data-uuid = "' + company_data.data[i].uuid + '" class = "glyphicon glyphicon-remove" id = "enterprise_management_delete_info"></span>'+
            '</td>'+
        '</tr>'
    }
    $("#enterprise_management_list thead").html(header);
    $("#enterprise_management_list tbody").html(content);
  } else {
    $("#enterprise_management_list thead").html("<tr><td colspan='10' align='center'>没数据</td></tr>");
    $("#enterprise_management_list tbody").html("");
  }
}

/**
 * 企业信息展示和隐藏
 */
function enterprise_management_show_or_hide() {
  //企业名称
  if(true == $("#enterprise_management_condition .name input").prop('checked')){
    $("#enterprise_management_list .name").show();
  } else{
    $("#enterprise_management_list .name").hide();
  }
  //企业简称
  if(true == $("#enterprise_management_condition .short_name input").prop('checked')){
    $("#enterprise_management_list .short_name").show();
  } else{
    $("#enterprise_management_list .short_name").hide();
  }
  //注册资金
  if(true == $("#enterprise_management_condition .registered_capital input").prop('checked')){
    $("#enterprise_management_list .registered_capital").show();
  } else{
    $("#enterprise_management_list .registered_capital").hide();
  }
  //成立时间
  if(true == $("#enterprise_management_condition .establish_datetime input").prop('checked')){
    $("#enterprise_management_list .establish_datetime").show();
  } else{
    $("#enterprise_management_list .establish_datetime").hide();
  }
  //纳税识别号
  if(true == $("#enterprise_management_condition .tax_identification_number input").prop('checked')){
    $("#enterprise_management_list .tax_identification_number").show();
  } else{
    $("#enterprise_management_list .tax_identification_number").hide();
  }
  //开户银行
  if(true == $("#enterprise_management_condition .bank_name input").prop('checked')){
    $("#enterprise_management_list .bank_name").show();
  } else{
    $("#enterprise_management_list .bank_name").hide();
  }
  //银行账号
  if(true == $("#enterprise_management_condition .account input").prop('checked')){
    $("#enterprise_management_list .account").show();
  } else{
    $("#enterprise_management_list .account").hide();
  }
  //联系电话
  if(true == $("#enterprise_management_condition .telephone_number input").prop('checked')){
    $("#enterprise_management_list .telephone_number").show();
  } else{
    $("#enterprise_management_list .telephone_number").hide();
  }
  //地址
  if(true == $("#enterprise_management_condition .address input").prop('checked')){
    $("#enterprise_management_list .address").show();
  } else{
    $("#enterprise_management_list .address").hide();
  }
}

/**
 * 获取企业信息
 */
function enterprise_management_server_data_cover() {
  var totalRows = 0;
  var enterprise_management_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation&data_count=1";
  delete enterprise_management_search_condition["rows"];
  delete enterprise_management_search_condition["offset"];  
  var enterprise_management_get_enterprise = ajax_assistant(enterprise_management_url, enterprise_management_search_condition, false, true, false);
  if(1 == enterprise_management_get_enterprise.status) {
    if (0 == enterprise_management_get_enterprise.count) {
      $("#enterprise_management_pages").html("");
    } else {
      var result = JSON.parse(enterprise_management_get_enterprise.result);
      //console.log(result);
      totalRows = result[0].count;
      generate_bootstrap_pagination_ctrl("#enterprise_management_pages", current_offset, rows, 3, totalRows);
      enterprise_management_search_condition["rows"] = rows;
      enterprise_management_search_condition["offset"] = current_offset;
    }
  } else {
    alert("企业信息获取失败");
  }
  //获取企业信息
  var enterprise_management_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
  var enterprise_management_get_enterprise = ajax_assistant(enterprise_management_url, enterprise_management_search_condition, false, true, false);
  //console.log(enterprise_management_get_enterprise);
  if (1 == enterprise_management_get_enterprise.status) {
    if (0 == enterprise_management_get_enterprise.count) {
      company_data = {};
    } else {
      var result = JSON.parse(enterprise_management_get_enterprise.result);
      //console.log(result);
      var company_data_arr = new Array();
      for (var i = 0; i < result.length; i++) {
        //获取开票信息
        var enterprise_management_get_invoice_url = PROJECT_PATH + "lego/lego_certificate?servletName=getInvoiceInformation";
        var uuid = result[i].uuid;
        var enterprise_management_get_invoice_param_data = {};
        enterprise_management_get_invoice_param_data["parent_uuid"] = uuid;
        var enterprise_management_get_invoice = ajax_assistant(enterprise_management_get_invoice_url, enterprise_management_get_invoice_param_data, false, true, false);
        //console.log(enterprise_management_get_invoice);
        if (1 == enterprise_management_get_invoice.status) {
          result_invoice = JSON.parse(enterprise_management_get_invoice.result);
          //console.log(result_invoice);
        }
        var establish_datetime = result[i].establish_datetime.substring(0,result[i].establish_datetime.indexOf(" "));
        company_data_arr.push({"name": result[i].name,"short_name": result[i].short_name,"registered_capital": result[i].registered_capital,"establish_datetime": establish_datetime,"tax_identification_number": result_invoice[0].tax_identification_number,"bank_name": result_invoice[0].bank_name,"account": result_invoice[0].account,"telephone_number": result_invoice[0].telephone_number,"address": result_invoice[0].address,"uuid": result[i].uuid});
      }
      company_data["data"] = company_data_arr;
      //console.log(company_data);
    }
  } else {
    alert("企业信息获取失败");
  }
}

/**
 * 点击分页函数
 */
function enterprise_management_pages_fun(obj) {
  current_offset = obj.attr("data-offset");
  enterprise_management_search_condition["offset"] = current_offset;
  enterprise_management_server_data_cover();
  enterprise_management_fill_variable_data();
}

/**
 * 企业名称搜索
 */
function enterprise_management_search_name() {
  var name = $("#enterprise_management_search .name").val();
  var short_name = $("#enterprise_management_search .short_name").val("");
  if("" == name){
    alert("请输入企业名称");
    return;
  } else {
    if(null == name.match(/^[\u4e00-\u9fffa（）\(\)]{8,32}$/)){
      alert("企业名称格式错误！");
      return;
    }
  }
  current_offset = 0;
  enterprise_management_search_condition = {};
  enterprise_management_search_condition["name"] = name;
  enterprise_management_server_data_cover();
  enterprise_management_fill_variable_data();
  enterprise_management_show_or_hide();
}

/**
 * 企业简称搜索
 */
function enterprise_management_search_short_name() {
  var short_name = $("#enterprise_management_search .short_name").val();
  var name = $("#enterprise_management_search .name").val("");
  if("" == short_name){
    alert("请输入企业简称")
  } else {
    if(null == short_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("企业简称格式错误！")
    }
  }
  current_offset = 0;
  enterprise_management_search_condition = {};
  enterprise_management_search_condition["short_name"] = short_name;
  enterprise_management_server_data_cover();
  enterprise_management_fill_variable_data();
  enterprise_management_show_or_hide();
}

/**
 * 全部列出
 */
function enterprise_management_search_all() {
  var short_name = $("#enterprise_management_search .short_name").val("");
  var name = $("#enterprise_management_search .name").val("");
  current_offset = 0;
  enterprise_management_search_condition = {};
  enterprise_management_server_data_cover();
  enterprise_management_fill_variable_data();
  enterprise_management_show_or_hide();
}

/**
 * 添加企业信息模态框
 */
function enterprise_management_add_modal() {
  var add_modal = 
    '<div class="modal fade custom_modal" id="enterprise_management_add_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
      '<div class="modal-dialog">'+
        '<div class="modal-content" style="height: 700px;width:640px;">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">添加企业信息</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="overflow-y: scroll;height: 642px;">'+
            '<div class="panel panel-default">'+
              '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">基本信息</p>'+
              '<div class="panel-body">'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>企业名称</label>'+
                    '<input type="text" class="form-control enterprise_name">'+
                  '</div>'+
                  '<div class="form-group col-md-3">'+
                    '<label>企业简称</label>'+
                    '<input type="text" class="form-control enterprise_short_name">'+
                  '</div>'+
                  '<div class="form-group col-md-3">'+
                    '<label>企业类型</label>'+
                    '<select class="form-control enterprise_type">'+
                      '<option>--请选择--</option>'+
                      '<option value="1">自运营企业</option>'+
                      '<option value="2">贸易企业</option>'+
                      '<option value="3">物流企业</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>注册资金(万元)</label>'+
                    '<input type="text" class="form-control registered_capital">'+
                  '</div>'+
                  '<div class="col-md-6">'+
                    '<div class="form-group has-feedback">'+
                      '<label>成立时间</label>'+
                      '<input type="text" class="form-control widget_datepicker establish_datetime">'+
                      '<span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="panel panel-default invoice">'+
              '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">开票信息</p>'+
              '<div class="panel-body">'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>纳税识别号</label>'+
                    '<input type="text" class="form-control tax_identification_number">'+
                  '</div>'+
                  '<div class="form-group col-md-6">'+
                    '<label>开户银行</label>'+
                    '<input type="text" class="form-control bank_name">'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>银行账号</label>'+
                    '<input type="text" class="form-control account">'+
                  '</div>'+
                  '<div class="form-group col-md-6">'+
                    '<label>联系电话</label>'+
                    '<input type="text" class="form-control telephone_number">'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>地址</label>'+
                    '<input type="text" class="form-control address">'+
                  '</div>'+
                '</div>'+
              '<div class="row">'+
              '<div class="form-group col-md-12">'+
                '<label>开票信息附件</label>'+
                '<div class="panel panel-default" id = "enterprise_management_invoice_attch">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="panel panel-default">'+
            '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">其他证件</p>'+
            '<div class="panel-body">'+
              '<div class="row">'+
                '<div class="form-group col-md-12">'+
                  '<label>机构信用代码证</label>'+
                  '<div class="panel panel-default" id = "enterprise_management_institutional_attch">'+
                  '</div>'+
                '</div>'+
              '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>危化品经营许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_hazardous_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>法人身份证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_idcard_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>开户许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_account_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>安全生产许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_safety_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>营业执照</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_business_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-primary add_btn">添加</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(add_modal);
  upload_attachment_edit_output("#enterprise_management_invoice_attch");
  upload_attachment_edit_output("#enterprise_management_institutional_attch");
  upload_attachment_edit_output("#enterprise_management_hazardous_attch");
  upload_attachment_edit_output("#enterprise_management_idcard_attch");
  upload_attachment_edit_output("#enterprise_management_account_attch");
  upload_attachment_edit_output("#enterprise_management_safety_attch");
  upload_attachment_edit_output("#enterprise_management_business_attch");
  $("#enterprise_management_add_modal").modal("show");
  $("#enterprise_management_add_modal").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

/**
 * 添加企业信息
 */
function enterprise_management_add_info() {
  var enterprise_name = $("#enterprise_management_add_modal .enterprise_name").val();
  var enterprise_short_name = $("#enterprise_management_add_modal .enterprise_short_name").val();
  var enterprise_type = $("#enterprise_management_add_modal .enterprise_type").val();
  var registered_capital = $("#enterprise_management_add_modal .registered_capital").val();
  var establish_datetime = $("#enterprise_management_add_modal .establish_datetime").val()+' 00:00:00';
  var tax_identification_number = $("#enterprise_management_add_modal .tax_identification_number").val();
  var address = $("#enterprise_management_add_modal .address").val();
  var telephone_number = $("#enterprise_management_add_modal .telephone_number").val();
  var bank_name = $("#enterprise_management_add_modal .bank_name").val();
  var account = $("#enterprise_management_add_modal .account").val();
  var invoice_cluster_li = $("#enterprise_management_invoice_attch ul").children("li");
  var invoice_cluster_list = "";
  for (var i = 0; i < invoice_cluster_li.length; i++) {
    var obj = invoice_cluster_li[i];
    var invoice_cluster = $(obj).find("a").attr("data-cluster");
    if (undefined != invoice_cluster) {
     invoice_cluster_list += invoice_cluster + ";"; 
    }    
  }
  //console.log(invoice_cluster_list);
  if("" == enterprise_name){
    alert("请输入企业名称");
    return;
  } else {
    if(null == enterprise_name.match(/^[\u4e00-\u9fffa（）\(\)]{8,32}$/)){
      alert("企业名称格式错误！");
      return;
    }
  }
  if("" == enterprise_short_name){
    alert("请输入企业简称");
    return;
  } else {
    if(null == enterprise_short_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("企业简称格式错误！");
      return;
    }
  }
  if(null == enterprise_type.match(/^[123]$/)) {
    alert("请选择企业类型！");
    return;
  }  
  if ("" == registered_capital){
      alert("请输入注册资本！");
      return;  
  } else {
    if (null == registered_capital.match(/^(\d+)(\.\d+)?$/)){
      alert("注册资本格式错误！");
      return;  
    } 
  }
  if(null == establish_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)){
    alert("请选择成立时间！");
    return;
  }
  if("" == tax_identification_number){
    alert("请输入纳税识别号！");
    return;
   } else {
    if(null == tax_identification_number.match(/^[0-9a-zA-Z]{15,18}$/)){
      alert("纳税识别号格式错误！");
      return;
    }
  }
  if("" == bank_name){
    alert("请输入开银行！");
    return;
  } else {
    if(null == bank_name.match(/^[\u4e00-\u9fffa]{8,64}$/)){
      alert("开户银行格式错误！");
      return;
    }
  }
  if("" == account){
    alert("请输入银行账号");
    return;
  } else {
    if(null == account.match(/^[0-9]{10,30}$/)){
      alert("银行账号格式错误！");
      return;
    }
  }
  if("" == telephone_number){
    alert("请输入联系方式！");
    return;
  } else {
    if(null == telephone_number.match(/^[0-9]{6,15}$/)){
      alert("联系方式格式错误！");
      return;
    }
  }
  if ("" == address) {
    alert("请输入地址！");
    return;
  } else {
    if (null == address.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{8,100}$/)) {
      alert("地址格式错误！");
      return;
    }
  }
  //判断是否重名
  var check_enterprise_name_exist_url = PROJECT_PATH + "lego/lego_crm?servletName=checkEnterpriseNameExist";
  var check_enterprise_name_exist_param_data = {};
  check_enterprise_name_exist_param_data["name"] = enterprise_name;
  var check_enterprise_name_exist = ajax_assistant(check_enterprise_name_exist_url, check_enterprise_name_exist_param_data, false, true, false);
  //console.log(check_enterprise_name_exist);
  if (1 != check_enterprise_name_exist.status) {
    alert("该企业已存在");
    return;
  }
  var enterprise_management_add_info_url = PROJECT_PATH + "lego/lego_crm?servletName=addEnterpriseAndInvoiceInformation";
  var enterprise_management_add_info_param_data = {};
  enterprise_management_add_info_param_data["name"] = enterprise_name;
  enterprise_management_add_info_param_data["type"] = enterprise_type;
  enterprise_management_add_info_param_data["short_name"] = enterprise_short_name;
  enterprise_management_add_info_param_data["registered_capital"] = registered_capital;
  enterprise_management_add_info_param_data["establish_datetime"] = establish_datetime;
  enterprise_management_add_info_param_data["telephone_number"] = telephone_number;
  enterprise_management_add_info_param_data["tax_identification_number"] = tax_identification_number;
  enterprise_management_add_info_param_data["address"] = address;
  enterprise_management_add_info_param_data["bank_name"] = bank_name;
  enterprise_management_add_info_param_data["account"] = account;
  if ("" != invoice_cluster_list) {
    enterprise_management_add_info_param_data["cluster_list"] = invoice_cluster_list;
  }
  var enterprise_management_add_info = ajax_assistant(enterprise_management_add_info_url, enterprise_management_add_info_param_data, false, true, false);
  //console.log(enterprise_management_add_info);
  if (1 == enterprise_management_add_info.status) {
    var result = JSON.parse(enterprise_management_add_info.result);
    var enterprise_name = result[0].name;
    var parent_uuid = result[0].uuid;
    //添加机构信用代码证
    var institutional_cluster_li = $("#enterprise_management_institutional_attch ul").children("li");
    var institutional_cluster_list = "";
    for (var i = 0; i < institutional_cluster_li.length; i++) {
      var obj = institutional_cluster_li[i];
      var institutional_cluster = $(obj).find("a").attr("data-cluster");
      if (undefined != institutional_cluster) {
       institutional_cluster_list += institutional_cluster + ";"; 
      }    
    }
    var enterprise_management_add_institutional_url = PROJECT_PATH + "lego/lego_certificate?servletName=addInstitutionalCreditCode";
    var enterprise_management_add_institutional_param_data = {};
    enterprise_management_add_institutional_param_data["enterprise_name"] = enterprise_name;
    enterprise_management_add_institutional_param_data["parent_uuid"] = parent_uuid;
    if ("" != institutional_cluster_list) {
      enterprise_management_add_institutional_param_data["cluster_list"] = institutional_cluster_list;
    }
    var enterprise_management_add_institutional = ajax_assistant(enterprise_management_add_institutional_url, enterprise_management_add_institutional_param_data, false, true, false);
    //console.log(enterprise_management_add_institutional);
    if (1 != enterprise_management_add_institutional.status) {
      alert("机构信用代码证添加失败！")
    }
    //添加危化品经营许可证
    var hazardous_cluster_li = $("#enterprise_management_hazardous_attch ul").children("li");
    var hazardous_cluster_list = "";
    for (var i = 0; i < hazardous_cluster_li.length; i++) {
      var obj = hazardous_cluster_li[i];
      var hazardous_cluster = $(obj).find("a").attr("data-cluster");
      if (undefined != hazardous_cluster) {
       hazardous_cluster_list += hazardous_cluster + ";"; 
      }    
    }
    var enterprise_management_add_hazardous_url = PROJECT_PATH + "lego/lego_certificate?servletName=addHazardousChemicalsBusinessLicense";
    var enterprise_management_add_hazardous_param_data = {};
    enterprise_management_add_hazardous_param_data["enterprise_name"] = enterprise_name;
    enterprise_management_add_hazardous_param_data["parent_uuid"] = parent_uuid;
    if ("" != hazardous_cluster_list) {
      enterprise_management_add_hazardous_param_data["cluster_list"] = hazardous_cluster_list;
    }
    var enterprise_management_add_hazardous= ajax_assistant(enterprise_management_add_hazardous_url, enterprise_management_add_hazardous_param_data, false, true, false);
    //console.log(enterprise_management_add_hazardous);
    if (1 != enterprise_management_add_hazardous.status) {
      alert("危化品经营许可证添加失败！")
    }
    //添加法人身份证
    var idcard_cluster_li = $("#enterprise_management_idcard_attch ul").children("li");
    var idcard_cluster_list = "";
    for (var i = 0; i < idcard_cluster_li.length; i++) {
      var obj = idcard_cluster_li[i];
      var idcard_cluster = $(obj).find("a").attr("data-cluster");
      if (undefined != idcard_cluster) {
       idcard_cluster_list += idcard_cluster + ";"; 
      }    
    }
    var enterprise_management_add_idcard_url = PROJECT_PATH + "lego/lego_certificate?servletName=addIdCard";
    var enterprise_management_add_idcard_param_data = {};
    enterprise_management_add_idcard_param_data["parent_uuid"] = parent_uuid;
    if ("" != idcard_cluster_list) {
      enterprise_management_add_idcard_param_data["cluster_list"] = idcard_cluster_list;
    }
    var enterprise_management_add_idcard= ajax_assistant(enterprise_management_add_idcard_url, enterprise_management_add_idcard_param_data, false, true, false);
    //console.log(enterprise_management_add_idcard);
    if (1 != enterprise_management_add_idcard.status) {
      alert("法人身份证添加失败！")
    }
    //添加开户许可证
    var account_cluster_li = $("#enterprise_management_account_attch ul").children("li");
    var account_cluster_list = "";
    for (var i = 0; i < account_cluster_li.length; i++) {
      var obj = account_cluster_li[i];
      var account_cluster = $(obj).find("a").attr("data-cluster");
      if (undefined != account_cluster) {
       account_cluster_list += account_cluster + ";"; 
      }    
    }
    var enterprise_management_add_account_url = PROJECT_PATH + "lego/lego_certificate?servletName=addAccountOpeningPermit";
    var enterprise_management_add_account_param_data = {};
    enterprise_management_add_account_param_data["enterprise_name"] = enterprise_name;
    enterprise_management_add_account_param_data["parent_uuid"] = parent_uuid;
    if ("" != account_cluster_list) {
      enterprise_management_add_account_param_data["cluster_list"] = account_cluster_list;
    }
    var enterprise_management_add_account= ajax_assistant(enterprise_management_add_account_url, enterprise_management_add_account_param_data, false, true, false);
    //console.log(enterprise_management_add_account);
    if (1 != enterprise_management_add_account.status) {
      alert("开户许可证添加失败！")
    }
    //添加安全生产许可证
    var safety_cluster_li = $("#enterprise_management_safety_attch ul").children("li");
    var safety_cluster_list = "";
    for (var i = 0; i < safety_cluster_li.length; i++) {
      var obj = safety_cluster_li[i];
      var safety_cluster = $(obj).find("a").attr("data-cluster");
      if (undefined != safety_cluster) {
       safety_cluster_list += safety_cluster + ";"; 
      }    
    }
    var enterprise_management_add_safety_url = PROJECT_PATH + "lego/lego_certificate?servletName=addSafetyProductionLicense";
    var enterprise_management_add_safety_param_data = {};
    enterprise_management_add_safety_param_data["enterprise_name"] = enterprise_name;
    enterprise_management_add_safety_param_data["parent_uuid"] = parent_uuid;
    if ("" != safety_cluster_list) {
      enterprise_management_add_safety_param_data["cluster_list"] = safety_cluster_list;
    }
    var enterprise_management_add_safety= ajax_assistant(enterprise_management_add_safety_url, enterprise_management_add_safety_param_data, false, true, false);
    //console.log(enterprise_management_add_safety);
    if (1 != enterprise_management_add_safety.status) {
      alert("安全生产许可证添加失败！")
    }
    //添加营业执照
    var business_cluster_li = $("#enterprise_management_business_attch ul").children("li");
    var business_cluster_list = "";
    for (var i = 0; i < business_cluster_li.length; i++) {
      var obj = business_cluster_li[i];
      var business_cluster = $(obj).find("a").attr("data-cluster");
      if (undefined != business_cluster) {
       business_cluster_list += business_cluster + ";"; 
      }    
    }
    var enterprise_management_add_business_url = PROJECT_PATH + "lego/lego_certificate?servletName=addBusinessLicense";
    var enterprise_management_add_business_param_data = {};
    enterprise_management_add_business_param_data["enterprise_name"] = enterprise_name;
    enterprise_management_add_business_param_data["parent_uuid"] = parent_uuid;
    if ("" != business_cluster_list) {
      enterprise_management_add_business_param_data["cluster_list"] = business_cluster_list;
    }
    var enterprise_management_add_business= ajax_assistant(enterprise_management_add_business_url, enterprise_management_add_business_param_data, false, true, false);
    //console.log(enterprise_management_add_business);
    if (1 != enterprise_management_add_business.status) {
      alert("营业执照添加失败！")
    }
    $("#enterprise_management_add_modal").modal("hide");
    current_offset = 0;
    enterprise_management_search_condition = {};
    enterprise_management_server_data_cover();
    enterprise_management_fill_variable_data();
    enterprise_management_show_or_hide();
  } else {
    alert("企业信息添加失败！")
  }
}

/**
 * 获取企业证件
 */
function enterprise_management_get_certificate(uuid) {
  var enterprise_management_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
  enterprise_management_search_condition = {};
  delete enterprise_management_search_condition["rows"];
  delete enterprise_management_search_condition["offset"];  
  enterprise_management_search_condition["uuid"] = uuid; 
  var enterprise_management_get_enterprise = ajax_assistant(enterprise_management_url, enterprise_management_search_condition, false, true, false);
  //console.log(enterprise_management_get_enterprise);
  if (1 == enterprise_management_get_enterprise.status) {
    var result = JSON.parse(enterprise_management_get_enterprise.result);
    for (var i = 0; i < result.length; i++){
      var parent_uuid = result[i].uuid;
      var establish_datetime = result[i].establish_datetime.substring(0,result[i].establish_datetime.indexOf(" "));
    }
    var invoice_uuid = "";
    var institutional_uuid = "";
    var hazardous_uuid = "";
    var idcard_uuid = "";
    var account_uuid = "";
    var safety_uuid = "";
    var business_uuid = "";
    //获取开票信息
    var enterprise_management_get_invoice_url = PROJECT_PATH + "lego/lego_certificate?servletName=getInvoiceInformation";
    var enterprise_management_get_invoice_param_data = {};
    enterprise_management_get_invoice_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_invoice = ajax_assistant(enterprise_management_get_invoice_url, enterprise_management_get_invoice_param_data, false, true, false);
    //console.log(enterprise_management_get_invoice);
    if (1 == enterprise_management_get_invoice.status) {
      var invoice_result = JSON.parse(enterprise_management_get_invoice.result);
      //console.log(invoice_result);
      if (0 < invoice_result.length) {
        for (var i = 0; i < invoice_result.length; i++) {
          invoice_uuid = invoice_result[i].uuid;
          var invoice_cluster_list  = invoice_result[i].cluster_list;
          if (null != invoice_cluster_list){
            var invoice_cluster  = invoice_cluster_list.substring(0,invoice_cluster_list.lastIndexOf(";")).split(";");
            //console.log(invoice_cluster);
            var invoice_file = "";
            var invoice_file_arr = new Array();
            for (var j = 0; j < invoice_cluster.length; j++) {
              var enterprise_management_get_invoice_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_invoice_file_param_data = {};
              enterprise_management_get_invoice_file_param_data["cluster_name"] = invoice_cluster[j];
              var enterprise_management_get_invoice_file = ajax_assistant(enterprise_management_get_invoice_file_url, enterprise_management_get_invoice_file_param_data, false, true, false);
              //console.log(enterprise_management_get_invoice_file);
              if (1 == enterprise_management_get_invoice_file.status) {
                var invoice_file_result = JSON.parse(enterprise_management_get_invoice_file.result);
                //console.log(invoice_file_result);
                var invoice_cluster_name = invoice_file_result[0].cluster_name;
                var invoice_suffix = invoice_file_result[0].suffix;
                var file_name = invoice_cluster_name + '.' + invoice_suffix;
                invoice_file_arr.push({"file_name": file_name});
              }
            }
            invoice_file_data = invoice_file_arr;
          } else {
              invoice_file_data = [];
          }
        }
      } else {
        invoice_file_data = [];
      }
    }
    //获取机构信用代码证
    var enterprise_management_get_institutional_url = PROJECT_PATH + "lego/lego_certificate?servletName=getInstitutionalCreditCode";
    var enterprise_management_get_institutional_param_data = {};
    enterprise_management_get_institutional_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_institutional = ajax_assistant(enterprise_management_get_institutional_url, enterprise_management_get_institutional_param_data, false, true, false);
    //console.log(enterprise_management_get_institutional);
    if (1 == enterprise_management_get_institutional.status) {
      var institutional_result = JSON.parse(enterprise_management_get_institutional.result);
      //console.log(institutional_result);
      if (0 < institutional_result.length) {
        for (var i = 0; i < institutional_result.length; i++) {
          institutional_uuid = institutional_result[i].uuid;
          var institutional_cluster_list  = institutional_result[i].cluster_list;
          if (null != institutional_cluster_list){
            var institutional_cluster  = institutional_cluster_list.substring(0,institutional_cluster_list.lastIndexOf(";")).split(";");
            //console.log(institutional_cluster);
            var institutional_file = "";
            var institutional_file_arr = new Array();
            for (var j = 0; j < institutional_cluster.length; j++) {
              var enterprise_management_get_institutional_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_institutional_file_param_data = {};
              enterprise_management_get_institutional_file_param_data["cluster_name"] = institutional_cluster[j];
              var enterprise_management_get_institutional_file = ajax_assistant(enterprise_management_get_institutional_file_url, enterprise_management_get_institutional_file_param_data, false, true, false);
              //console.log(enterprise_management_get_institutional_file);
              if (1 == enterprise_management_get_institutional_file.status) {
                var institutional_file_result = JSON.parse(enterprise_management_get_institutional_file.result);
                //console.log(institutional_file_result);
                var institutional_cluster_name = institutional_file_result[0].cluster_name;
                var institutional_suffix = institutional_file_result[0].suffix;
                var file_name = institutional_cluster_name + '.' + institutional_suffix;
                institutional_file_arr.push({"file_name": file_name});
              }
            }
            institutional_file_data = institutional_file_arr;
          } else {
              institutional_file_data = [];
          }
        }
      } else {
        institutional_file_data = [];
      }
    }
    //获取危化品经营许可证
    var enterprise_management_get_hazardous_url = PROJECT_PATH + "lego/lego_certificate?servletName=getHazardousChemicalsBusinessLicense";
    var enterprise_management_get_hazardous_param_data = {};
    enterprise_management_get_hazardous_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_hazardous = ajax_assistant(enterprise_management_get_hazardous_url, enterprise_management_get_hazardous_param_data, false, true, false);
    //console.log(enterprise_management_get_hazardous);
    if (1 == enterprise_management_get_hazardous.status) {
      var hazardous_result = JSON.parse(enterprise_management_get_hazardous.result);
      //console.log(hazardous_result);
      if (0 < hazardous_result.length) {
        for (var i = 0; i < hazardous_result.length; i++) {
          hazardous_uuid = hazardous_result[i].uuid;
          var hazardous_cluster_list  = hazardous_result[i].cluster_list;
          if (null != hazardous_cluster_list){
            var hazardous_cluster  = hazardous_cluster_list.substring(0,hazardous_cluster_list.lastIndexOf(";")).split(";");
            //console.log(hazardous_cluster);
            var hazardous_file = "";
            var hazardous_file_arr = new Array();
            for (var j = 0; j < hazardous_cluster.length; j++) {
              var enterprise_management_get_hazardous_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_hazardous_file_param_data = {};
              enterprise_management_get_hazardous_file_param_data["cluster_name"] = hazardous_cluster[j];
              var enterprise_management_get_hazardous_file = ajax_assistant(enterprise_management_get_hazardous_file_url, enterprise_management_get_hazardous_file_param_data, false, true, false);
              //console.log(enterprise_management_get_hazardous_file);
              if (1 == enterprise_management_get_hazardous_file.status) {
                var hazardous_file_result = JSON.parse(enterprise_management_get_hazardous_file.result);
                //console.log(hazardous_file_result);
                var hazardous_cluster_name = hazardous_file_result[0].cluster_name;
                var hazardous_suffix = hazardous_file_result[0].suffix;
                var file_name = hazardous_cluster_name + '.' + hazardous_suffix;
                hazardous_file_arr.push({"file_name": file_name});
              }
            }
            hazardous_file_data = hazardous_file_arr;
          } else {
              hazardous_file_data = [];
          }
        }
      } else {
        hazardous_file_data = [];
      }
    }
    //获取法人身份证
    var enterprise_management_get_idcard_url = PROJECT_PATH + "lego/lego_certificate?servletName=getIdCard";
    var enterprise_management_get_idcard_param_data = {};
    enterprise_management_get_idcard_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_idcard = ajax_assistant(enterprise_management_get_idcard_url, enterprise_management_get_idcard_param_data, false, true, false);
    //console.log(enterprise_management_get_idcard);
    if (1 == enterprise_management_get_idcard.status) {
      var idcard_result = JSON.parse(enterprise_management_get_idcard.result);
      //console.log(idcard_result);
      if (0 < idcard_result.length) {
        for (var i = 0; i < idcard_result.length; i++) {
          idcard_uuid = idcard_result[i].uuid;
          var idcard_cluster_list  = idcard_result[i].cluster_list;
          if (null != idcard_cluster_list){
            var idcard_cluster  = idcard_cluster_list.substring(0,idcard_cluster_list.lastIndexOf(";")).split(";");
            //console.log(idcard_cluster);
            var idcard_file = "";
            var idcard_file_arr = new Array();
            for (var j = 0; j < idcard_cluster.length; j++) {
              var enterprise_management_get_idcard_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_idcard_file_param_data = {};
              enterprise_management_get_idcard_file_param_data["cluster_name"] = idcard_cluster[j];
              var enterprise_management_get_idcard_file = ajax_assistant(enterprise_management_get_idcard_file_url, enterprise_management_get_idcard_file_param_data, false, true, false);
              //console.log(enterprise_management_get_idcard_file);
              if (1 == enterprise_management_get_idcard_file.status) {
                var idcard_file_result = JSON.parse(enterprise_management_get_idcard_file.result);
                //console.log(idcard_file_result);
                var idcard_cluster_name = idcard_file_result[0].cluster_name;
                var idcard_suffix = idcard_file_result[0].suffix;
                var file_name = idcard_cluster_name + '.' + idcard_suffix;
                idcard_file_arr.push({"file_name": file_name});
              }
            }
            idcard_file_data = idcard_file_arr;
          } else {
              idcard_file_data = [];
          }
        }
      } else {
        idcard_file_data = [];
      }
    }
    //获取开户许可证
    var enterprise_management_get_account_url = PROJECT_PATH + "lego/lego_certificate?servletName=getAccountOpeningPermit";
    var enterprise_management_get_account_param_data = {};
    enterprise_management_get_account_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_account = ajax_assistant(enterprise_management_get_account_url, enterprise_management_get_account_param_data, false, true, false);
    //console.log(enterprise_management_get_account);
    if (1 == enterprise_management_get_account.status) {
      var account_result = JSON.parse(enterprise_management_get_account.result);
      //console.log(account_result);
      if (0 < account_result.length) {
        for (var i = 0; i < account_result.length; i++) {
          account_uuid = account_result[i].uuid;
          var account_cluster_list  = account_result[i].cluster_list;
          if (null != account_cluster_list){
            var account_cluster  = account_cluster_list.substring(0,account_cluster_list.lastIndexOf(";")).split(";");
            //console.log(account_cluster);
            var account_file = "";
            var account_file_arr = new Array();
            for (var j = 0; j < account_cluster.length; j++) {
              var enterprise_management_get_account_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_account_file_param_data = {};
              enterprise_management_get_account_file_param_data["cluster_name"] = account_cluster[j];
              var enterprise_management_get_account_file = ajax_assistant(enterprise_management_get_account_file_url, enterprise_management_get_account_file_param_data, false, true, false);
              //console.log(enterprise_management_get_account_file);
              if (1 == enterprise_management_get_account_file.status) {
                var account_file_result = JSON.parse(enterprise_management_get_account_file.result);
                //console.log(account_file_result);
                var account_cluster_name = account_file_result[0].cluster_name;
                var account_suffix = account_file_result[0].suffix;
                var file_name = account_cluster_name + '.' + account_suffix;
                account_file_arr.push({"file_name": file_name});
              }
            }
            account_file_data = account_file_arr;
          } else {
              account_file_data = [];
          }
        }
      } else {
        account_file_data = [];
      }
    }
    //获取安全生产许可证
    var enterprise_management_get_safety_url = PROJECT_PATH + "lego/lego_certificate?servletName=getSafetyProductionLicense";
    var enterprise_management_get_safety_param_data = {};
    enterprise_management_get_safety_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_safety = ajax_assistant(enterprise_management_get_safety_url, enterprise_management_get_safety_param_data, false, true, false);
    //console.log(enterprise_management_get_safety);
    if (1 == enterprise_management_get_safety.status) {
      var safety_result = JSON.parse(enterprise_management_get_safety.result);
      //console.log(safety_result);
      if (0 < safety_result.length) {
        for (var i = 0; i < safety_result.length; i++) {
          safety_uuid = safety_result[i].uuid;
          var safety_cluster_list  = safety_result[i].cluster_list;
          if (null != safety_cluster_list){
            var safety_cluster  = safety_cluster_list.substring(0,safety_cluster_list.lastIndexOf(";")).split(";");
            //console.log(safety_cluster);
            var safety_file = "";
            var safety_file_arr = new Array();
            for (var j = 0; j < safety_cluster.length; j++) {
              var enterprise_management_get_safety_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_safety_file_param_data = {};
              enterprise_management_get_safety_file_param_data["cluster_name"] = safety_cluster[j];
              var enterprise_management_get_safety_file = ajax_assistant(enterprise_management_get_safety_file_url, enterprise_management_get_safety_file_param_data, false, true, false);
              //console.log(enterprise_management_get_safety_file);
              if (1 == enterprise_management_get_safety_file.status) {
                var safety_file_result = JSON.parse(enterprise_management_get_safety_file.result);
                //console.log(safety_file_result);
                var safety_cluster_name = safety_file_result[0].cluster_name;
                var safety_suffix = safety_file_result[0].suffix;
                var file_name = safety_cluster_name + '.' + safety_suffix;
                safety_file_arr.push({"file_name": file_name});
              }
            }
            safety_file_data = safety_file_arr;
          } else {
              safety_file_data = [];
          }
        }
      } else {
        safety_file_data = [];
      }
    }
    //获取营业执照
    var enterprise_management_get_business_url = PROJECT_PATH + "lego/lego_certificate?servletName=getBusinessLicense";
    var enterprise_management_get_business_param_data = {};
    enterprise_management_get_business_param_data["parent_uuid"] = parent_uuid;
    var enterprise_management_get_business = ajax_assistant(enterprise_management_get_business_url, enterprise_management_get_business_param_data, false, true, false);
    //console.log(enterprise_management_get_business);
    if (1 == enterprise_management_get_business.status) {
      var business_result = JSON.parse(enterprise_management_get_business.result);
      //console.log(business_result);
      if (0 < business_result.length) {
        for (var i = 0; i < business_result.length; i++) {
          business_uuid = business_result[i].uuid;
          var business_cluster_list  = business_result[i].cluster_list;
          if (null != business_cluster_list){
            var business_cluster  = business_cluster_list.substring(0,business_cluster_list.lastIndexOf(";")).split(";");
            //console.log(business_cluster);
            var business_file = "";
            var business_file_arr = new Array();
            for (var j = 0; j < business_cluster.length; j++) {
              var enterprise_management_get_business_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
              var enterprise_management_get_business_file_param_data = {};
              enterprise_management_get_business_file_param_data["cluster_name"] = business_cluster[j];
              var enterprise_management_get_business_file = ajax_assistant(enterprise_management_get_business_file_url, enterprise_management_get_business_file_param_data, false, true, false);
              //console.log(enterprise_management_get_business_file);
              if (1 == enterprise_management_get_business_file.status) {
                var business_file_result = JSON.parse(enterprise_management_get_business_file.result);
                //console.log(business_file_result);
                var business_cluster_name = business_file_result[0].cluster_name;
                var business_suffix = business_file_result[0].suffix;
                var file_name = business_cluster_name + '.' + business_suffix;
                business_file_arr.push({"file_name": file_name});
              }
            }
            business_file_data = business_file_arr;
          } else {
              business_file_data = [];
          }
        }
      } else {
        business_file_data = [];
      }
    }
    current_company_detail_data = {
      "name": result[0].name,
      "short_name": result[0].short_name,
      "registered_capital": result[0].registered_capital,
      "establish_datetime": establish_datetime,
      "tax_identification_number": invoice_result[0].tax_identification_number,
      "bank_name": invoice_result[0].bank_name,
      "account": invoice_result[0].account,
      "telephone_number": invoice_result[0].telephone_number,
      "address": invoice_result[0].address,
      "uuid": result[0].uuid,
      "type": result[0].type,
      "invoice_uuid": invoice_uuid
    }
  }
}

/**
 * 修改企业模态框
 */
function enterprise_management_edit_modal(uuid) {
  var edit_modal = 
    '<div class="modal fade custom_modal" id="enterprise_management_edit_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
      '<div class="modal-dialog">'+
        '<div class="modal-content" style="height: 700px;width:640px;">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">修改企业信息</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="overflow-y: scroll;height: 642px;">'+
            '<div class="panel panel-default">'+
              '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">基本信息</p>'+
              '<div class="panel-body">'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>企业名称</label>'+
                    '<input type="text" class="form-control enterprise_name" value = "' + current_company_detail_data.name + '">'+
                  '</div>'+
                  '<div class="form-group col-md-3">'+
                    '<label>企业简称</label>'+
                    '<input type="text" class="form-control enterprise_short_name" readonly = "readonly" value = "' + current_company_detail_data.short_name + '">'+
                  '</div>'+
                  '<div class="form-group col-md-3">'+
                    '<label>企业类型</label>'+
                    '<select class="form-control enterprise_type">'+
                      '<option>--请选择--</option>'+
                      '<option value="1">自运营企业</option>'+
                      '<option value="2">贸易企业</option>'+
                      '<option value="3">物流企业</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>注册资金(万元)</label>'+
                    '<input type="text" class="form-control registered_capital" value = "' + current_company_detail_data.registered_capital + '">'+
                  '</div>'+
                  '<div class="col-md-6">'+
                    '<div class="form-group has-feedback">'+
                      '<label>成立时间</label>'+
                      '<input type="text" class="form-control widget_datepicker establish_datetime" value = "' + current_company_detail_data.establish_datetime + '">'+
                      '<span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="panel panel-default invoice">'+
              '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">开票信息</p>'+
              '<div class="panel-body">'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>纳税识别号</label>'+
                    '<input type="text" class="form-control tax_identification_number" value = "' + current_company_detail_data.tax_identification_number + '">'+
                  '</div>'+
                  '<div class="form-group col-md-6">'+
                    '<label>开户银行</label>'+
                    '<input type="text" class="form-control bank_name" value = "' + current_company_detail_data.bank_name + '">'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>银行账号</label>'+
                    '<input type="text" class="form-control account" value = "' + current_company_detail_data.account + '">'+
                  '</div>'+
                  '<div class="form-group col-md-6">'+
                    '<label>联系电话</label>'+
                    '<input type="text" class="form-control telephone_number" value = "' + current_company_detail_data.telephone_number + '">'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>地址</label>'+
                    '<input type="text" class="form-control address" value = "' + current_company_detail_data.address + '">'+
                  '</div>'+
                '</div>'+
              '<div class="row">'+
              '<div class="form-group col-md-12">'+
                '<label>开票信息附件</label>'+
                '<div class="panel panel-default" id = "enterprise_management_edit_invoice_attch">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="panel panel-default">'+
            '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">其他证件</p>'+
            '<div class="panel-body">'+
              '<div class="row">'+
                '<div class="form-group col-md-12">'+
                  '<label>机构信用代码证</label>'+
                  '<div class="panel panel-default" id = "enterprise_management_edit_institutional_attch">'+
                  '</div>'+
                '</div>'+
              '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>危化品经营许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_edit_hazardous_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>法人身份证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_edit_idcard_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>开户许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_edit_account_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>安全生产许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_edit_safety_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>营业执照</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_edit_business_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-warning edit_btn" data-uuid = "' + uuid + '" data-invoice_uuid = "' + current_company_detail_data.invoice_uuid + '">修改</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(edit_modal);
  upload_attachment_edit_output("#enterprise_management_edit_invoice_attch", invoice_file_data);
  upload_attachment_edit_output("#enterprise_management_edit_institutional_attch", institutional_file_data);
  upload_attachment_edit_output("#enterprise_management_edit_hazardous_attch", hazardous_file_data);
  upload_attachment_edit_output("#enterprise_management_edit_idcard_attch", idcard_file_data);
  upload_attachment_edit_output("#enterprise_management_edit_account_attch", account_file_data);
  upload_attachment_edit_output("#enterprise_management_edit_safety_attch", safety_file_data);
  upload_attachment_edit_output("#enterprise_management_edit_business_attch", business_file_data);
  $("#enterprise_management_edit_modal").modal("show");
  $("#enterprise_management_edit_modal").on("hidden.bs.modal", function (e) {
    $(this).remove();
    
  });
  //企业类型
  for(var i = 0; i < $("#enterprise_management_edit_modal select option").length; i++){
    var type = current_company_detail_data.type;
    //console.log(type);
    if($("#enterprise_management_edit_modal select option").eq(i).val() == type) {
      $("#enterprise_management_edit_modal select option").eq(i).prop('selected','selected');
      break;
    }
  }
}

/**
 * 修改企业信息
 */
function enterprise_management_edit_info(enterprise_management_edit_uuid) {
  debugger;
  var uuid = enterprise_management_edit_uuid.data("uuid");
  var invoice_uuid = enterprise_management_edit_uuid.data("invoice_uuid");
  var enterprise_name = $("#enterprise_management_edit_modal .enterprise_name").val();
  var enterprise_short_name = $("#enterprise_management_edit_modal .enterprise_short_name").val();
  var enterprise_type = $("#enterprise_management_edit_modal .enterprise_type").val();
  var registered_capital = $("#enterprise_management_edit_modal .registered_capital").val();
  var establish_datetime = $("#enterprise_management_edit_modal .establish_datetime").val()+' 00:00:00';
  var tax_identification_number = $("#enterprise_management_edit_modal .tax_identification_number").val();
  var address = $("#enterprise_management_edit_modal .address").val();
  var telephone_number = $("#enterprise_management_edit_modal .telephone_number").val();
  var bank_name = $("#enterprise_management_edit_modal .bank_name").val();
  var account = $("#enterprise_management_edit_modal .account").val();
  var invoice_cluster_li = $("#enterprise_management_edit_invoice_attch ul").children("li");
  var invoice_cluster_list = "";
  for (var i = 0; i < invoice_cluster_li.length; i++) {
    var obj = invoice_cluster_li[i];
    var invoice_cluster = $(obj).find("a").attr("data-cluster");
    if (undefined != invoice_cluster) {
     invoice_cluster_list += invoice_cluster + ";"; 
    }    
  }
  if("" == enterprise_name){
    alert("请输入企业名称");
    return;
  } else {
    if(null == enterprise_name.match(/^[\u4e00-\u9fffa（）\(\)]{8,32}$/)){
      alert("企业名称格式错误！");
      return;
    }
  }
  if("" == enterprise_short_name){
    alert("请输入企业简称");
    return;
  } else {
    if(null == enterprise_short_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("企业简称格式错误！");
      return;
    }
  }
  if(null == enterprise_type.match(/^[123]$/)){
    alert("请选择企业类型！");
    return;
  }
  if ("" == registered_capital){
      alert("请输入注册资本！");
      return;  
  } else {
    if (null == registered_capital.match(/^(\d+)(\.\d+)?$/)){
      alert("注册资本格式错误！");
      return;  
    } 
  }
  if(null == establish_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)){
    alert("请选择成立时间！");
    return;
  }
  if("" == tax_identification_number){
    alert("请输入纳税识别号！");
    return;
  } else {
    if(null == tax_identification_number.match(/^[0-9a-zA-Z]{15,18}$/)){
      alert("纳税识别号格式错误！");
      return;
    }
  }
  if("" == bank_name){
    alert("请输入开户银行！");
    return;
  } else {
    if(null == bank_name.match(/^[\u4e00-\u9fffa]{8,64}$/)){
      alert("开户银行格式错误！");
      return;
    }
  }
  if("" == account){
    alert("请输入银行账号！");
    return;
  } else {
    if(null == account.match(/^[0-9]{10,30}$/)){
      alert("开户银行格式错误！");
      return;
    }
  }
  if("" == telephone_number){
    alert("请输入联系方式！");
    return;
  } else {
    if(null == telephone_number.match(/^[0-9]{6,15}$/)){
      alert("联系方式格式错误！");
      return;
    }
  }
  if ("" == address) {
    alert("请输入地址！");
    return;
  } else {
    if (null == address.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{8,100}$/)) {
      alert("地址格式错误！");
      return;
    }
  }
  var enterprise_management_edit_info_url = PROJECT_PATH + "lego/lego_crm?servletName=modifyEnterpriseAndInvoiceInformation";
  var enterprise_management_edit_info_param_data = {};
  enterprise_management_edit_info_param_data["enterprise_uuid"] = uuid;
  enterprise_management_edit_info_param_data["short_name"] = enterprise_short_name;
  enterprise_management_edit_info_param_data["name"] = enterprise_name;
  enterprise_management_edit_info_param_data["type"] = enterprise_type;
  enterprise_management_edit_info_param_data["registered_capital"] = registered_capital;
  enterprise_management_edit_info_param_data["establish_datetime"] = establish_datetime;
  enterprise_management_edit_info_param_data["idColumnValue"] = invoice_uuid;
  enterprise_management_edit_info_param_data["telephone_number"] = telephone_number;
  enterprise_management_edit_info_param_data["tax_identification_number"] = tax_identification_number;
  enterprise_management_edit_info_param_data["address"] = address;
  enterprise_management_edit_info_param_data["bank_name"] = bank_name;
  enterprise_management_edit_info_param_data["account"] = account;
  if ("" != invoice_cluster_list) {
    enterprise_management_edit_info_param_data["newClusterList"] = invoice_cluster_list;
  }
  var enterprise_management_edit_info = ajax_assistant(enterprise_management_edit_info_url, enterprise_management_edit_info_param_data, false, true, false);
  //console.log(enterprise_management_edit_info);
  //获取机构信用代码证
  var enterprise_management_get_institutional_url = PROJECT_PATH + "lego/lego_certificate?servletName=getInstitutionalCreditCode";
  var enterprise_management_get_institutional_param_data = {};
  enterprise_management_get_institutional_param_data["parent_uuid"] = uuid;
  var enterprise_management_get_institutional = ajax_assistant(enterprise_management_get_institutional_url, enterprise_management_get_institutional_param_data, false, true, false);
  //console.log(enterprise_management_get_institutional);
  if (1 == enterprise_management_get_institutional.status) {
    var institutional_result = JSON.parse(enterprise_management_get_institutional.result);
    //console.log(institutional_result);
    if (0 < institutional_result.length) {
      //修改机构信用代码证
      var institutional_uuid = institutional_result[0].uuid;
      var institutional_cluster_li = $("#enterprise_management_edit_institutional_attch ul").children("li");
      var institutional_cluster_list = "";
      for (var i = 0; i < institutional_cluster_li.length; i++) {
        var obj = institutional_cluster_li[i];
        var institutional_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != institutional_cluster) {
         institutional_cluster_list += institutional_cluster + ";"; 
        }    
      }
      var enterprise_management_edit_institutional_url = PROJECT_PATH + "lego/lego_certificate?servletName=modifyInstitutionalCreditCode";
      var enterprise_management_edit_institutional_param_data = {};
      enterprise_management_edit_institutional_param_data["parent_uuid"] = uuid;
      enterprise_management_edit_institutional_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_edit_institutional_param_data["idColumnValue"] = institutional_uuid;
      if ("" != institutional_cluster_list) {
        enterprise_management_edit_institutional_param_data["newClusterList"] = institutional_cluster_list;
      }
      var enterprise_management_edit_institutional = ajax_assistant(enterprise_management_edit_institutional_url, enterprise_management_edit_institutional_param_data, false, true, false);
      //console.log(enterprise_management_edit_institutional);
      if (1 != enterprise_management_edit_institutional.status) {
        alert("机构信用代码证修改失败！")
      }
    } else {
      //添加机构信用代码证
      var institutional_cluster_li = $("#enterprise_management_edit_institutional_attch ul").children("li");
      var institutional_cluster_list = "";
      for (var i = 0; i < institutional_cluster_li.length; i++) {
        var obj = institutional_cluster_li[i];
        var institutional_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != institutional_cluster) {
         institutional_cluster_list += institutional_cluster + ";"; 
        }    
      }
      var enterprise_management_add_institutional_url = PROJECT_PATH + "lego/lego_certificate?servletName=addInstitutionalCreditCode";
      var enterprise_management_add_institutional_param_data = {};
      enterprise_management_add_institutional_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_add_institutional_param_data["parent_uuid"] = uuid;
      if ("" != institutional_cluster_list) {
        enterprise_management_add_institutional_param_data["cluster_list"] = institutional_cluster_list;
      }
      var enterprise_management_add_institutional = ajax_assistant(enterprise_management_add_institutional_url, enterprise_management_add_institutional_param_data, false, true, false);
      //console.log(enterprise_management_add_institutional);
      if (1 != enterprise_management_add_institutional.status) {
        alert("机构信用代码证添加失败！")
      }
    }
  }
  //获取危化品经营许可证
  var enterprise_management_get_hazardous_url = PROJECT_PATH + "lego/lego_certificate?servletName=getHazardousChemicalsBusinessLicense";
  var enterprise_management_get_hazardous_param_data = {};
  enterprise_management_get_hazardous_param_data["parent_uuid"] = uuid;
  var enterprise_management_get_hazardous = ajax_assistant(enterprise_management_get_hazardous_url, enterprise_management_get_hazardous_param_data, false, true, false);
  //console.log(enterprise_management_get_hazardous);
  if (1 == enterprise_management_get_hazardous.status) {
    var hazardous_result = JSON.parse(enterprise_management_get_hazardous.result);
    //console.log(hazardous_result);
    if (0 < hazardous_result.length) {
      //修改危化品经营许可证
      var hazardous_uuid = hazardous_result[0].uuid;
      var hazardous_cluster_li = $("#enterprise_management_edit_hazardous_attch ul").children("li");
      var hazardous_cluster_list = "";
      for (var i = 0; i < hazardous_cluster_li.length; i++) {
        var obj = hazardous_cluster_li[i];
        var hazardous_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != hazardous_cluster) {
         hazardous_cluster_list += hazardous_cluster + ";"; 
        }    
      }
      var enterprise_management_edit_hazardous_url = PROJECT_PATH + "lego/lego_certificate?servletName=modifyHazardousChemicalsBusinessLicense";
      var enterprise_management_edit_hazardous_param_data = {};
      enterprise_management_edit_hazardous_param_data["parent_uuid"] = uuid;
      enterprise_management_edit_hazardous_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_edit_hazardous_param_data["idColumnValue"] = hazardous_uuid;
      if ("" != hazardous_cluster_list) {
        enterprise_management_edit_hazardous_param_data["newClusterList"] = hazardous_cluster_list;
      }
      var enterprise_management_edit_hazardous = ajax_assistant(enterprise_management_edit_hazardous_url, enterprise_management_edit_hazardous_param_data, false, true, false);
      //console.log(enterprise_management_edit_hazardous);
      if (1 != enterprise_management_edit_hazardous.status) {
        alert("危化品经营许可证修改失败！")
      }
    } else {
      //添加危化品经营许可证
      var hazardous_cluster_li = $("#enterprise_management_edit_hazardous_attch ul").children("li");
      var hazardous_cluster_list = "";
      for (var i = 0; i < hazardous_cluster_li.length; i++) {
        var obj = hazardous_cluster_li[i];
        var hazardous_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != hazardous_cluster) {
         hazardous_cluster_list += hazardous_cluster + ";"; 
        }    
      }
      var enterprise_management_add_hazardous_url = PROJECT_PATH + "lego/lego_certificate?servletName=addHazardousChemicalsBusinessLicense";
      var enterprise_management_add_hazardous_param_data = {};
      enterprise_management_add_hazardous_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_add_hazardous_param_data["parent_uuid"] = uuid;
      if ("" != hazardous_cluster_list) {
        enterprise_management_add_hazardous_param_data["cluster_list"] = hazardous_cluster_list;
      }
      var enterprise_management_add_hazardous= ajax_assistant(enterprise_management_add_hazardous_url, enterprise_management_add_hazardous_param_data, false, true, false);
      //console.log(enterprise_management_add_hazardous);
      if (1 != enterprise_management_add_hazardous.status) {
        alert("危化品经营许可证修改失败！")
      }
    }
  }
  //获取法人身份证
  var enterprise_management_get_idcard_url = PROJECT_PATH + "lego/lego_certificate?servletName=getIdCard";
  var enterprise_management_get_idcard_param_data = {};
  enterprise_management_get_idcard_param_data["parent_uuid"] = uuid;
  var enterprise_management_get_idcard = ajax_assistant(enterprise_management_get_idcard_url, enterprise_management_get_idcard_param_data, false, true, false);
  //console.log(enterprise_management_get_idcard);
  if (1 == enterprise_management_get_idcard.status) {
    var idcard_result = JSON.parse(enterprise_management_get_idcard.result);
    //console.log(idcard_result);
    if (0 < idcard_result.length) {
      //修改法人身份证
      var idcard_uuid = idcard_result[0].uuid;
      var idcard_cluster_li = $("#enterprise_management_edit_idcard_attch ul").children("li");
      var idcard_cluster_list = "";
      for (var i = 0; i < idcard_cluster_li.length; i++) {
        var obj = idcard_cluster_li[i];
        var idcard_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != idcard_cluster) {
         idcard_cluster_list += idcard_cluster + ";"; 
        }    
      }
      var enterprise_management_edit_idcard_url = PROJECT_PATH + "lego/lego_certificate?servletName=modifyIdCard";
      var enterprise_management_edit_idcard_param_data = {};
      enterprise_management_edit_idcard_param_data["parent_uuid"] = uuid;
      enterprise_management_edit_idcard_param_data["idColumnValue"] = idcard_uuid;
      if ("" != idcard_cluster_list) {
        enterprise_management_edit_idcard_param_data["newClusterList"] = idcard_cluster_list;
      }
      var enterprise_management_edit_idcard = ajax_assistant(enterprise_management_edit_idcard_url, enterprise_management_edit_idcard_param_data, false, true, false);
      //console.log(enterprise_management_edit_idcard);
      if (1 != enterprise_management_edit_idcard.status) {
        alert("法人身份证修改失败！")
      }
    } else {
      //添加法人身份证
      var idcard_cluster_li = $("#enterprise_management_edit_idcard_attch ul").children("li");
      var idcard_cluster_list = "";
      for (var i = 0; i < idcard_cluster_li.length; i++) {
        var obj = idcard_cluster_li[i];
        var idcard_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != idcard_cluster) {
         idcard_cluster_list += idcard_cluster + ";"; 
        }    
      }
      var enterprise_management_add_idcard_url = PROJECT_PATH + "lego/lego_certificate?servletName=addIdCard";
      var enterprise_management_add_idcard_param_data = {};
      enterprise_management_add_idcard_param_data["parent_uuid"] = uuid;
      if ("" != idcard_cluster_list) {
        enterprise_management_add_idcard_param_data["cluster_list"] = idcard_cluster_list;
      }
      var enterprise_management_add_idcard= ajax_assistant(enterprise_management_add_idcard_url, enterprise_management_add_idcard_param_data, false, true, false);
      //console.log(enterprise_management_add_idcard);
      if (1 != enterprise_management_add_idcard.status) {
        alert("法人身份证修改失败！")
      }
    }
  }
  //获取开户许可证
  var enterprise_management_get_account_url = PROJECT_PATH + "lego/lego_certificate?servletName=getAccountOpeningPermit";
  var enterprise_management_get_account_param_data = {};
  enterprise_management_get_account_param_data["parent_uuid"] = uuid;
  var enterprise_management_get_account = ajax_assistant(enterprise_management_get_account_url, enterprise_management_get_account_param_data, false, true, false);
  //console.log(enterprise_management_get_account);
  if (1 == enterprise_management_get_account.status) {
    var account_result = JSON.parse(enterprise_management_get_account.result);
    //console.log(account_result);
    if (0 < account_result.length) {
      //修改开户许可证
      var account_uuid = account_result[0].uuid;
      var account_cluster_li = $("#enterprise_management_edit_account_attch ul").children("li");
      var account_cluster_list = "";
      for (var i = 0; i < account_cluster_li.length; i++) {
        var obj = account_cluster_li[i];
        var account_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != account_cluster) {
         account_cluster_list += account_cluster + ";"; 
        }    
      }
      var enterprise_management_edit_account_url = PROJECT_PATH + "lego/lego_certificate?servletName=modifyAccountOpeningPermit";
      var enterprise_management_edit_account_param_data = {};
      enterprise_management_edit_account_param_data["parent_uuid"] = uuid;
      enterprise_management_edit_account_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_edit_account_param_data["idColumnValue"] = account_uuid;
      if ("" != account_cluster_list) {
        enterprise_management_edit_account_param_data["newClusterList"] = account_cluster_list;
      }
      var enterprise_management_edit_account = ajax_assistant(enterprise_management_edit_account_url, enterprise_management_edit_account_param_data, false, true, false);
      //console.log(enterprise_management_edit_account);
      if (1 != enterprise_management_edit_account.status) {
        alert("开户许可证修改失败！")
      }
    } else {
      //添加开户许可证
      var account_cluster_li = $("#enterprise_management_edit_account_attch ul").children("li");
      var account_cluster_list = "";
      for (var i = 0; i < account_cluster_li.length; i++) {
        var obj = account_cluster_li[i];
        var account_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != account_cluster) {
         account_cluster_list += account_cluster + ";"; 
        }    
      }
      var enterprise_management_add_account_url = PROJECT_PATH + "lego/lego_certificate?servletName=addAccountOpeningPermit";
      var enterprise_management_add_account_param_data = {};
      enterprise_management_add_account_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_add_account_param_data["parent_uuid"] = uuid;
      if ("" != account_cluster_list) {
        enterprise_management_add_account_param_data["cluster_list"] = account_cluster_list;
      }
      var enterprise_management_add_account= ajax_assistant(enterprise_management_add_account_url, enterprise_management_add_account_param_data, false, true, false);
      //console.log(enterprise_management_add_account);
      if (1 != enterprise_management_add_account.status) {
        alert("开户许可证修改失败！")
      }
    }
  }
  //获取安全生产许可证
  var enterprise_management_get_safety_url = PROJECT_PATH + "lego/lego_certificate?servletName=getSafetyProductionLicense";
  var enterprise_management_get_safety_param_data = {};
  enterprise_management_get_safety_param_data["parent_uuid"] = uuid;
  var enterprise_management_get_safety = ajax_assistant(enterprise_management_get_safety_url, enterprise_management_get_safety_param_data, false, true, false);
  //console.log(enterprise_management_get_safety);
  if (1 == enterprise_management_get_safety.status) {
    var safety_result = JSON.parse(enterprise_management_get_safety.result);
    //console.log(safety_result);
    if (0 < safety_result.length) {
      //修改安全生产许可证
      var safety_uuid = safety_result[0].uuid;
      var safety_cluster_li = $("#enterprise_management_edit_safety_attch ul").children("li");
      var safety_cluster_list = "";
      for (var i = 0; i < safety_cluster_li.length; i++) {
        var obj = safety_cluster_li[i];
        var safety_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != safety_cluster) {
         safety_cluster_list += safety_cluster + ";"; 
        }    
      }
      var enterprise_management_edit_safety_url = PROJECT_PATH + "lego/lego_certificate?servletName=modifySafetyProductionLicense";
      var enterprise_management_edit_safety_param_data = {};
      enterprise_management_edit_safety_param_data["parent_uuid"] = uuid;
      enterprise_management_edit_safety_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_edit_safety_param_data["idColumnValue"] = safety_uuid;
      if ("" != safety_cluster_list) {
        enterprise_management_edit_safety_param_data["newClusterList"] = safety_cluster_list;
      }
      var enterprise_management_edit_safety = ajax_assistant(enterprise_management_edit_safety_url, enterprise_management_edit_safety_param_data, false, true, false);
      //console.log(enterprise_management_edit_safety);
      if (1 != enterprise_management_edit_safety.status) {
        alert("安全生产许可证修改失败！")
      }
    } else {
      //添加安全生产许可证
      var safety_cluster_li = $("#enterprise_management_edit_safety_attch ul").children("li");
      var safety_cluster_list = "";
      for (var i = 0; i < safety_cluster_li.length; i++) {
        var obj = safety_cluster_li[i];
        var safety_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != safety_cluster) {
         safety_cluster_list += safety_cluster + ";"; 
        }    
      }
      var enterprise_management_add_safety_url = PROJECT_PATH + "lego/lego_certificate?servletName=addSafetyProductionLicense";
      var enterprise_management_add_safety_param_data = {};
      enterprise_management_add_safety_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_add_safety_param_data["parent_uuid"] = uuid;
      if ("" != safety_cluster_list) {
        enterprise_management_add_safety_param_data["cluster_list"] = safety_cluster_list;
      }
      var enterprise_management_add_safety= ajax_assistant(enterprise_management_add_safety_url, enterprise_management_add_safety_param_data, false, true, false);
      //console.log(enterprise_management_add_safety);
      if (1 != enterprise_management_add_safety.status) {
        alert("安全生产许可证修改失败！")
      }
    }
  }
  //获取营业执照
  var enterprise_management_get_business_url = PROJECT_PATH + "lego/lego_certificate?servletName=getBusinessLicense";
  var enterprise_management_get_business_param_data = {};
  enterprise_management_get_business_param_data["parent_uuid"] = uuid;
  var enterprise_management_get_business = ajax_assistant(enterprise_management_get_business_url, enterprise_management_get_business_param_data, false, true, false);
  //console.log(enterprise_management_get_business);
  if (1 == enterprise_management_get_business.status) {
    var business_result = JSON.parse(enterprise_management_get_business.result);
    //console.log(business_result);
    if (0 < business_result.length) {
      //修改营业执照
      var business_uuid = business_result[0].uuid;
      var business_cluster_li = $("#enterprise_management_edit_business_attch ul").children("li");
      var business_cluster_list = "";
      for (var i = 0; i < business_cluster_li.length; i++) {
        var obj = business_cluster_li[i];
        var business_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != business_cluster) {
         business_cluster_list += business_cluster + ";"; 
        }    
      }
      var enterprise_management_edit_business_url = PROJECT_PATH + "lego/lego_certificate?servletName=modifyBusinessLicense";
      var enterprise_management_edit_business_param_data = {};
      enterprise_management_edit_business_param_data["parent_uuid"] = uuid;
      enterprise_management_edit_business_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_edit_business_param_data["idColumnValue"] = business_uuid;
      if ("" != business_cluster_list) {
        enterprise_management_edit_business_param_data["newClusterList"] = business_cluster_list;
      }
      var enterprise_management_edit_business = ajax_assistant(enterprise_management_edit_business_url, enterprise_management_edit_business_param_data, false, true, false);
      //console.log(enterprise_management_edit_business);
      if (1 != enterprise_management_edit_business.status) {
        alert("营业执照修改失败！")
      }
    } else {
      //添加营业执照
      var business_cluster_li = $("#enterprise_management_edit_business_attch ul").children("li");
      var business_cluster_list = "";
      for (var i = 0; i < business_cluster_li.length; i++) {
        var obj = business_cluster_li[i];
        var business_cluster = $(obj).find("a").attr("data-cluster");
        if (undefined != business_cluster) {
         business_cluster_list += business_cluster + ";"; 
        }    
      }
      var enterprise_management_add_business_url = PROJECT_PATH + "lego/lego_certificate?servletName=addBusinessLicense";
      var enterprise_management_add_business_param_data = {};
      enterprise_management_add_business_param_data["enterprise_name"] = enterprise_name;
      enterprise_management_add_business_param_data["parent_uuid"] = uuid;
      if ("" != business_cluster_list) {
        enterprise_management_add_business_param_data["cluster_list"] = business_cluster_list;
      }
      var enterprise_management_add_business= ajax_assistant(enterprise_management_add_business_url, enterprise_management_add_business_param_data, false, true, false);
      //console.log(enterprise_management_add_business);
      if (1 != enterprise_management_add_business.status) {
        alert("营业执照修改失败！")
      }
    }
  }
  if (1 == enterprise_management_edit_info.status) {
    $("#enterprise_management_edit_modal").modal("hide");
    enterprise_management_search_condition = {};
    enterprise_management_server_data_cover();
    enterprise_management_fill_variable_data();
    enterprise_management_show_or_hide();
  } else {
    alert("企业信息修改失败！")
  }
}

/**
 * 企业详情模态框
 */
function enterprise_management_detail_modal() {
  var detail_modal = 
    '<div class="modal fade custom_modal" id="enterprise_management_detail_modal" tabindex="-1" role="dialog" aria-labelledby="myModalLabel" aria-hidden="true">'+
      '<div class="modal-dialog">'+
        '<div class="modal-content" style="height: 700px;width:640px;">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">修改企业信息</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="overflow-y: scroll;height: 642px;">'+
            '<div class="panel panel-default">'+
              '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">基本信息</p>'+
              '<div class="panel-body">'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>企业名称</label>'+
                    '<input type="text" class="form-control enterprise_name" disabled = "disabled" value = "' + current_company_detail_data.name + '">'+
                  '</div>'+
                  '<div class="form-group col-md-3">'+
                    '<label>企业简称</label>'+
                    '<input type="text" class="form-control enterprise_short_name" disabled = "disabled" value = "' + current_company_detail_data.short_name + '">'+
                  '</div>'+
                  '<div class="form-group col-md-3">'+
                    '<label>企业类型</label>'+
                    '<select class="form-control enterprise_type" disabled = "disabled">'+
                      '<option>--请选择--</option>'+
                      '<option value="1">自运营企业</option>'+
                      '<option value="2">贸易企业</option>'+
                      '<option value="3">物流企业</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>注册资金(万元)</label>'+
                    '<input type="text" class="form-control registered_capital" disabled = "disabled" value = "' + current_company_detail_data.registered_capital + '">'+
                  '</div>'+
                  '<div class="col-md-6">'+
                    '<div class="form-group has-feedback">'+
                      '<label>成立时间</label>'+
                      '<input type="text" class="form-control widget_datepicker establish_datetime" disabled = "disabled" value = "' + current_company_detail_data.establish_datetime + '">'+
                      '<span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="panel panel-default invoice">'+
              '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">开票信息</p>'+
              '<div class="panel-body">'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>纳税识别号</label>'+
                    '<input type="text" class="form-control tax_identification_number" disabled = "disabled" value = "' + current_company_detail_data.tax_identification_number + '">'+
                  '</div>'+
                  '<div class="form-group col-md-6">'+
                    '<label>开户银行</label>'+
                    '<input type="text" class="form-control bank_name" disabled = "disabled" value = "' + current_company_detail_data.bank_name + '">'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-6">'+
                    '<label>银行账号</label>'+
                    '<input type="text" class="form-control account" disabled = "disabled" value = "' + current_company_detail_data.account + '">'+
                  '</div>'+
                  '<div class="form-group col-md-6">'+
                    '<label>联系电话</label>'+
                    '<input type="text" class="form-control telephone_number" disabled = "disabled" value = "' + current_company_detail_data.telephone_number + '">'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>地址</label>'+
                    '<input type="text" class="form-control address" disabled = "disabled" value = "' + current_company_detail_data.address + '">'+
                  '</div>'+
                '</div>'+
              '<div class="row">'+
              '<div class="form-group col-md-12">'+
                '<label>开票信息附件</label>'+
                '<div class="panel panel-default" id = "enterprise_management_detail_invoice_attch">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="panel panel-default">'+
            '<p class="bg-blue" style="background: #f5f5f5;padding-top: 5px !important; padding-bottom:5px !important; padding-left: 30px !important;">其他证件</p>'+
            '<div class="panel-body">'+
              '<div class="row">'+
                '<div class="form-group col-md-12">'+
                  '<label>机构信用代码证</label>'+
                  '<div class="panel panel-default" id = "enterprise_management_detail_institutional_attch">'+
                  '</div>'+
                '</div>'+
              '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>危化品经营许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_detail_hazardous_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>法人身份证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_detail_idcard_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>开户许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_detail_account_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>安全生产许可证</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_detail_safety_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class="row">'+
                  '<div class="form-group col-md-12">'+
                    '<label>营业执照</label>'+
                    '<div class="panel panel-default" id = "enterprise_management_detail_business_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">关闭</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(detail_modal);
  upload_attachment_preview_output("#enterprise_management_detail_invoice_attch", invoice_file_data);
  upload_attachment_preview_output("#enterprise_management_detail_institutional_attch", institutional_file_data);
  upload_attachment_preview_output("#enterprise_management_detail_hazardous_attch", hazardous_file_data);
  upload_attachment_preview_output("#enterprise_management_detail_idcard_attch", idcard_file_data);
  upload_attachment_preview_output("#enterprise_management_detail_account_attch", account_file_data);
  upload_attachment_preview_output("#enterprise_management_detail_safety_attch", safety_file_data);
  upload_attachment_preview_output("#enterprise_management_detail_business_attch", business_file_data);
  $("#enterprise_management_detail_modal").modal("show");
  $("#enterprise_management_detail_modal").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
  for(var i = 0; i < $("#enterprise_management_detail_modal select option").length; i++){
    var type = current_company_detail_data.type;
    //console.log(type);
    if($("#enterprise_management_detail_modal select option").eq(i).val() == type) {
      $("#enterprise_management_detail_modal select option").eq(i).prop('selected','selected');
      break;
    }
  }
}

/**
 * 删除企业信息
 * @param 
 */
function enterprise_management_delete_modal(uuid) {
  var delete_modal = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="enterprise_management_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">删除企业确认</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除企业吗？</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '">删除</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(delete_modal);
  $("#enterprise_management_delete_modal").modal("show");
  $("#enterprise_management_delete_modal").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function enterprise_management_delete_info(uuid) {
  var delete_enterprise_url = PROJECT_PATH + "lego/lego_crm?servletName=removeEnterpriseInformation";
  var delete_enterprise_param_data = {};
  delete_enterprise_param_data["uuid"] = uuid;
  var enterprise_management_delete_enterprise = ajax_assistant(delete_enterprise_url, delete_enterprise_param_data, false, true, false);
  //console.log(enterprise_management_delete_enterprise);
  if (1 == enterprise_management_delete_enterprise.status) {
    $("#enterprise_management_delete_modal").modal("hide");
    enterprise_management_search_condition = {};
    enterprise_management_server_data_cover();
    enterprise_management_fill_variable_data();
    enterprise_management_show_or_hide();
  } else {
    alert("删除失败");
  }
}

/**
 * 输出企业信息管理
 * @param output_id 输出内容id
 */
function enterprise_management_output(output_id) {
  var content = 
'      <div class = "panel panel-primary">'+
'        <div class = "panel-heading clearfix">'+
'          <h3 class = "panel-title pull-left">企业信息管理</h3>'+
'          <span title = "添加企业信息" class="glyphicon glyphicon-plus pull-right" id = "enterprise_management_add_info"></span>'+
'        </div>'+
'        <div class = "panel-body">'+
'          <div class = "row" id = "enterprise_management_search">'+
'            <div class = "col-md-4">'+
'              <div class = "input-group">'+
'                  <span class = "input-group-addon">企业名称</span>'+
'                  <input type = "text" class = "form-control name" aria-label = "Amount (to the nearest dollar)">'+
'                  <span class = "input-group-btn" id = "enterprise_management_search_name">'+
'                    <button class = "btn btn-primary" type = "button">'+
'                      <span class = "glyphicon glyphicon-search"></span>'+
'                    </button>'+
'                  </span>'+
'              </div>'+
'            </div>'+
'            <div class = "col-md-3">'+
'              <div class = "input-group">'+
'                  <span class = "input-group-addon">企业简称</span>'+
'                  <input type = "text" class = "form-control short_name" aria-label = "Amount (to the nearest dollar)">'+
'                  <span class = "input-group-btn" id = "enterprise_management_search_short_name">'+
'                    <button class = "btn btn-primary" type = "button">'+
'                      <span class = "glyphicon glyphicon-search"></span>'+
'                    </button>'+
'                  </span>'+
'              </div>'+
'            </div>'+
'            <div class = "col-md-3">'+
'              <button class = "btn btn-primary" id = "enterprise_management_all_list" type = "button">全部列出</button>'+
'            </div>'+
'          </div>'+
'          <div class = "panel panel-primary enterprise_management_mt20" id = "enterprise_management_condition">'+
'            <div class = "panel-heading clearfix">'+
'              <h3 class = "panel-title pull-left">数据显示筛选</h3>'+
'            </div>'+
'            <div class = "panel-body">'+
'              <div class = "row companyInfo">'+
'                <div class = "col-md-2">'+
'                  <label class = "name change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;">'+
'                                            企业名称'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "short_name change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;" checked = "checked">'+
'                                            企业简称'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "registered_capital change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;" checked = "checked">'+
'                                            注册资金'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "establish_datetime change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;" checked = "checked">'+
'                                            成立时间'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "tax_identification_number change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;">'+
'                                            纳税识别号'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "bank_name change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;">'+
'                                            开户银行'+
'                  </label>'+
'                </div>'+
'              </div>'+
'              <div class = "row margintop15 companyInfo">'+
'                <div class = "col-md-2">'+
'                  <label class = "account change">'+
'                    <input type = "checkbox" style="height: 22px;width: 22px;">'+
'                                            银行账号'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "telephone_number change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;" checked = "checked">'+
'                                            联系电话'+
'                  </label>'+
'                </div>'+
'                <div class = "col-md-2">'+
'                  <label class = "address change">'+
'                    <input type = "checkbox" style = "height: 22px;width: 22px;" checked = "checked">'+
'                                            地址'+
'                  </label>'+
'                </div>'+
'              </div>'+
'            </div>'+
'          </div>'+
'          <div class = "panel panel-default panel-primary" style = "margin-bottom: 0;">'+
'              <div class = "panel-heading" role = "tab" id = "headingOne">'+
'                  <h4 class="panel-title">搜索结果</h4>'+
'              </div>'+
'              <div id = "collapsetwo" class = "panel-collapse collapse in" role = "tabpanel" aria-labelledby = "headingOne">'+
'                  <div class = "panel-body" style="padding-bottom: 0;">'+
'                    <table class = "table tablea" id = "enterprise_management_list">'+
'                      <thead>'+
'                        <tr>'+
'                          <th class = "name">企业名称</th>'+
'                          <th class = "short_name">企业简称</th>'+
'                          <th class = "registered_capital">注册资金（元）</th>'+
'                          <th class = "establish_datetime">成立时间</th>'+
'                          <th class = "tax_identification_number">纳税识别号</th>'+
'                          <th class = "bank_name">开户银行</th>'+
'                          <th class = "account">银行账号</th>'+
'                          <th class = "telephone_number">联系电话</th>'+
'                          <th class = "address">地址</th>'+
'                          <th></th>'+
'                        </tr>'+
'                      </thead>'+
'                      <tbody>'+
'                        <tr>'+
'                          <td>福记能源科技上海有限公司</td>'+
'                          <td>5000.0000</td>'+
'                          <td>2016-03-02</td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td>'+
'                            <span class = "glyphicon glyphicon-info-sign"></span>'+
'                            <span class = "glyphicon glyphicon-pencil" id = "editCompanyBtn" data-toggle = "modal" data-target = "#editCompanyInfo"></span>'+
'                            <span class = "glyphicon glyphicon-remove"></span>'+
'                          </td>'+
'                        </tr>'+
'                        <tr>'+
'                          <td>福记能源科技上海有限公司</td>'+
'                          <td>5000.0000</td>'+
'                          <td>2016-03-02</td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td></td>'+
'                          <td>'+
'                            <span class = "glyphicon glyphicon-info-sign"></span>'+
'                            <span class = "glyphicon glyphicon-pencil" id = "editCompanyBtn" data-toggle = "modal" data-target = "#editCompanyInfo"></span>'+
'                            <span class = "glyphicon glyphicon-remove"></span>'+
'                          </td>'+
'                        </tr>'+
'                      </tbody>'+
'                    </table>'+
'                    <div id = "enterprise_management_pages">'+
'                      <nav aria-label="Page navigation" style="text-align: right;">'+
'                        <ul class="pagination">'+
'                           <li>'+
'                              <a href="#" aria-label="Previous">'+
'                                <span aria-hidden="true">&laquo;</span>'+
'                              </a>'+
'                            </li>'+
'                            <li class="active"><span href="#">1</span></li>'+
'                           <li>'+
'                              <a href="#" aria-label="Next">'+
'                               <span aria-hidden="true">&raquo;</span>'+
'                              </a>'+
'                            </li>'+
'                        </ul>'+
'                      </nav>'+
'                    </div>'+
'                  </div>'+
'              </div>'+
'            </div>'+
'        </div>'+
'      </div>';
  $(output_id).html(content);
}
