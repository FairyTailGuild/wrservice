/**
 * @author wangdi
 */

var paid_record_list = new Array();
//物流合同
var contract_logistics_list = new Array();
//车船信息
var vehicle_information_list = new Array();
//销售结算函
var settlement_bill_sale_list = new Array();
//发票信息
var invoice_information_list = new Array();
//物流对账单
var settlement_bill_logistics_list = new Array();
//物流发票
var logistics_invoice_information_list = new Array();
//提货委托函
var deliver_entrust_letter_list = new Array();
//提货委托函
var goods_confirm_letter_list = new Array();

// function add_paid_record_list(contract_code, paid_record) {
//   if (null != get_paid_record_list(contract_code)) {
//     return false;
//   }
//   paid_record_list.push({"contract_code": contract_code, "paid_record": paid_record});
//   return true;
// }
// 
// function get_paid_record_list(contract_code) {
//   for (var i = 0; i < paid_record_list.length; i++) {
//     if (contract_code == paid_record_list[i].contract_code) {
//       return paid_record_list[i]["paid_record"];
//     }
//   }
//   return null;
// }

function add_sale_object_list(list, contract_code, object) {
  if (null == get_sale_object_list(list, contract_code)) {
    list.push({"contract_code": contract_code, "object": object});
  }
}

function get_sale_object_list(list, contract_code) {
  for (var i = 0; i < list.length; i++) {
    if (contract_code == list[i].contract_code) {
      return list[i]["object"];
    }
  }
  return null;
}

/**
 * 附件
 */
var contract_sale_file_data = 
  [{"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}];

/**
 * 仓库信息
 */
var contract_sale_warehouse = {"data":[
  {"name":"舟山纳海", "uuid":"33333333333333333333333333333331"},
  {"name":"海纳百川", "uuid":"33333333333333333333333333333332"},
  {"name":"黔驴技穷", "uuid":"33333333333333333333333333333333"},
  {"name":"任人宰割", "uuid":"33333333333333333333333333333334"},
  {"name":"轻车熟路", "uuid":"33333333333333333333333333333335"},
  {"name":"蓬荜生辉", "uuid":"33333333333333333333333333333336"},
  {"name":"礼贤下士", "uuid":"33333333333333333333333333333337"},
  {"name":"举案齐眉", "uuid":"33333333333333333333333333333338"},
  {"name":"相敬如宾", "uuid":"33333333333333333333333333333339"}]
};

/**
 * 企业数据
 */
var contract_sale_enterprise_data = {"data":[
  {"short_name":"腾智联合", "uuid":"00000000000000000000000000000001"},
  {"short_name":"腾智联", "uuid":"00000000000000000000000000000002"},
  {"short_name":"腾智", "uuid":"00000000000000000000000000000003"},
  {"short_name":"腾智联合有限公司", "uuid":"00000000000000000000000000000004"}]
};

/**
 * 销售合同数据
 * contract_code:合同编号
 * buyer_uuid:购买方
 * seller_uuid:销售方
 * product_name:产品名称
 * real_name:真实姓名
 * price:价格
 * quantity:数量
 */
var contract_sale_data = {"data":[
  {"contract_code":"fj-xy-170604", "buyer_uuid":"00000000000000000000000000000004", "seller_uuid":"00000000000000000000000000000001", "product_name":"福记", "real_name":"富纪有限公司", "price":"3.0", "quantity":"330", "deliver_datetime":"2017-05-06 00:00:00", "warehouse_uuid":"1224444", "uuid":"11111111111111111111111111111111"},
  {"contract_code":"fj-xy-111111", "buyer_uuid":"00000000000000000000000000000001", "seller_uuid":"00000000000000000000000000000003", "product_name":"福记", "real_name":"富纪有限公司", "price":"5.0", "quantity":"450", "deliver_datetime":"2017-05-06 00:00:00", "warehouse_uuid":"1224444", "uuid":"11111111111111111111111111111112"},
  {"contract_code":"fj-xy-222222", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000001", "product_name":"福记", "real_name":"富纪有限公司", "price":"7.0", "quantity":"360", "deliver_datetime":"2017-05-06 00:00:00", "warehouse_uuid":"1224444", "uuid":"11111111111111111111111111111113"},
  {"contract_code":"fj-xy-333333", "buyer_uuid":"00000000000000000000000000000004", "seller_uuid":"00000000000000000000000000000003", "product_name":"福记", "real_name":"富纪有限公司", "price":"4.0", "quantity":"780", "deliver_datetime":"2017-05-06 00:00:00", "warehouse_uuid":"1224444", "uuid":"11111111111111111111111111111114"},
  {"contract_code":"fj-xy-444444", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000004", "product_name":"福记", "real_name":"富纪有限公司", "price":"2.0", "quantity":"4550", "deliver_datetime":"2017-05-06 00:00:00", "warehouse_uuid":"1224444", "uuid":"11111111111111111111111111111115"}]
};

/**
 * 分页变量
 */
var rows = 10;
var current_offset = 0;

function contract_sale_clear_raw_data() {
  $("#contract_sales_pages").html("");
  $("#contract_sales_box").html('<tr><td colspan="11" align="center">没数据</td></tr>');
}

/**
 * 服务器数据
 */
var contract_sale_search_condition = {};
function contract_sale_server_data_cover(contract_type) {
  //分页  获取总条数
  var totalRows = 0;
  var contract_sale_total_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade&data_count=1";
  delete contract_sale_search_condition["rows"];
  delete contract_sale_search_condition["offset"];
  contract_sale_search_condition["type"] = contract_type;
  var contract_sale_total_get_contract = ajax_assistant(contract_sale_total_url, contract_sale_search_condition, false, true, false);
  if(1 == contract_sale_total_get_contract.status) {
    if (0 == contract_sale_total_get_contract.count) {
      $("#contract_sales_pages").html("");
    } else {
      var contract_sale_total_result = JSON.parse(contract_sale_total_get_contract.result);
      totalRows = contract_sale_total_result[0].count;      
      generate_bootstrap_pagination_ctrl("#contract_sales_pages", current_offset, rows, 6, totalRows);
      contract_sale_search_condition["rows"] = rows;
      contract_sale_search_condition["offset"] = current_offset;
    }
  } else {
    alert("销售合同数据获取失败");
    return;
  }
  //console.log(totalRows);
  //获取销售合同
  contract_sale_search_condition["type"] = contract_type;
  var contract_sale_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
  var contract_sale_get_contract = ajax_assistant(contract_sale_url, contract_sale_search_condition, false, true, false);
  //获取企业信息
  var contract_sale_enterprise_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
  var contract_sale_enterprise_get_contract = ajax_assistant(contract_sale_enterprise_url, "", false, true, false);

  //获取仓库
  var contract_sale_warehouse_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehouse";
  var contract_sale_warehouse_get_contract = ajax_assistant(contract_sale_warehouse_url, "", false, true, false);
  contract_sale_data = {};
  if (1 == contract_sale_get_contract.status) {
    if (0 == contract_sale_get_contract.count) {
      contract_sale_data = {};
    } else {
      var tmp_arr = new Array();
      var contract_sale_result = JSON.parse(contract_sale_get_contract.result);  
      //console.log(contract_sale_result);
      for (var i = 0; i < contract_sale_result.length; i++) {
        tmp_arr[i] = {"contract_code":contract_sale_result[i].contract_code, "buyer_uuid":contract_sale_result[i].buyer_uuid, "seller_uuid":contract_sale_result[i].seller_uuid, "product_name":contract_sale_result[i].product_name, "real_name":contract_sale_result[i].real_name, "price":contract_sale_result[i].price, "quantity":contract_sale_result[i].quantity, "deliver_datetime":contract_sale_result[i].deliver_datetime, "warehouse_uuid":contract_sale_result[i].warehouse_uuid, "uuid":contract_sale_result[i].uuid};
        //收款记录
        add_sale_object_list(paid_record_list, contract_sale_result[i].contract_code, new PaidRecord(contract_sale_result[i].price * contract_sale_result[i].quantity, contract_sale_result[i].contract_code, {paid_record_name: "收款记录", paid_record_time: "收款时间", paid_record_paid: "收款金额（元）"}, "#paid_record_content" + contract_sale_result[i].uuid));
        //物流合同
        add_sale_object_list(contract_logistics_list, contract_sale_result[i].contract_code, new ContractLogistics(contract_sale_result[i].contract_code,"#contract_logistics_content" + contract_sale_result[i].uuid));
        //车船信息
        add_sale_object_list(vehicle_information_list, contract_sale_result[i].contract_code, new VehicleInformation(contract_sale_result[i].contract_code,"#vehicle_information_content" + contract_sale_result[i].uuid));
        //销售结算函
        add_sale_object_list(settlement_bill_sale_list, contract_sale_result[i].contract_code, new SettlementBillSale(contract_sale_result[i].contract_code, contract_sale_result[i].uuid,"#settlement_bill_sale_content" + contract_sale_result[i].uuid, contract_sale_result[i].type, "2"));
        //发票信息
        add_sale_object_list(invoice_information_list, contract_sale_result[i].contract_code, new InvoiceInformation(contract_sale_result[i].contract_code,"#invoice_information_content" + contract_sale_result[i].uuid, contract_sale_result[i].price * contract_sale_result[i].quantity, "1", "lego/lego_fjTrade?servletName=addTradeInvoiceInformation", "lego/lego_fjTrade?servletName=modifyTradeInvoiceInformation"));
        // 提货委托函
        add_sale_object_list(deliver_entrust_letter_list, contract_sale_result[i].contract_code, new deliverEntrustLetter(contract_sale_result[i].contract_code, "#deliver_entrust_letter_content" + contract_sale_result[i].uuid));
        // 货物确认函
        add_sale_object_list(goods_confirm_letter_list, contract_sale_result[i].contract_code, new goodsConfirmLetter(contract_sale_result[i].contract_code, "#goods_confirm_letter_content" + contract_sale_result[i].uuid));
        }
      contract_sale_data["data"] = tmp_arr;
    }
  } else {
    alert("销售合同数据获取失败");
  }
  //企业
  contract_sale_enterprise_data = {};
  if (1 == contract_sale_enterprise_get_contract.status) {
    if (0 == contract_sale_enterprise_get_contract.count) {
      contract_sale_enterprise_data = {};
    } else {
      var tmp_enterprise_arr = new Array();
      var contract_sale_enterprise_result = JSON.parse(contract_sale_enterprise_get_contract.result);
      for (var i = 0; i < contract_sale_enterprise_result.length; i++) {
        tmp_enterprise_arr[i] = {"short_name":contract_sale_enterprise_result[i].short_name, "uuid":contract_sale_enterprise_result[i].uuid};
      }
      contract_sale_enterprise_data["data"] = tmp_enterprise_arr;
    }
  } else {
    alert("企业信息数据获取失败");
  }
  //仓库
  contract_sale_warehouse = {};
  if (1 == contract_sale_warehouse_get_contract.status) {
    if (0 == contract_sale_warehouse_get_contract.count) {
      contract_sale_warehouse = {};
    } else {
      var tmp_warehouse_arr = new Array();
      var contract_sale_warehouse_result = JSON.parse(contract_sale_warehouse_get_contract.result);
      for (var i = 0; i < contract_sale_warehouse_result.length; i++) {
        tmp_warehouse_arr[i] = {"name":contract_sale_warehouse_result[i].name, "uuid":contract_sale_warehouse_result[i].uuid};
      }
      contract_sale_warehouse["data"] = tmp_warehouse_arr;
    }
  } else {
    alert("仓库数据获取失败");
  }
}

function contract_sale_fill_variable_data() {
  if(isJsonObjectHasData(contract_sale_data)) {
    var contract_sale_html = "";
    for(var i = 0; i < contract_sale_data.data.length; i++) {
      var seller_uuid = "";
      var buyer_uuid = "";
      if(isJsonObjectHasData(contract_sale_enterprise_data)) {
        for(var j = 0; j < contract_sale_enterprise_data.data.length; j++) {
          //出租方
          if(contract_sale_enterprise_data.data[j].uuid == contract_sale_data.data[i].seller_uuid){
            seller_uuid = contract_sale_enterprise_data.data[j].short_name;
          }
          //承租方
          if(contract_sale_enterprise_data.data[j].uuid == contract_sale_data.data[i].buyer_uuid){
            buyer_uuid = contract_sale_enterprise_data.data[j].short_name;
          }
        }
      }
      var contract_sale_deliver_datetime = contract_sale_data.data[i].deliver_datetime;
      contract_sale_deliver_datetime = contract_sale_deliver_datetime.substring(0, contract_sale_deliver_datetime.indexOf(' '));
      var contract_sale_all_price = (contract_sale_data.data[i].price*contract_sale_data.data[i].quantity).toFixed(2);
      contract_sale_html +=
        '<tr class = "contract_sale_tr">'+
          '<td><button type = "button" class = "btn btn-info btn-xs contract_sale_open_btn" contract_code = "' + contract_sale_data.data[i].contract_code + '" contract_sales_contract_code_uuid = "' + contract_sale_data.data[i].uuid + '" contract_sale_warehouse_uuid = "' + contract_sale_data.data[i].warehouse_uuid + '" contract_sale_all_price = "' + contract_sale_all_price + '"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
          '<td>' + contract_sale_data.data[i].contract_code + '</td>'+
          '<td>' + buyer_uuid + '</td>'+
          '<td>' + seller_uuid + '</td>'+
          '<td>' + contract_sale_data.data[i].product_name + '</td>'+
          '<td>' + contract_sale_data.data[i].real_name + '</td>'+
          '<td>' + contract_sale_data.data[i].price + '</td>'+
          '<td>' + contract_sale_data.data[i].quantity + '</td>'+
          '<td>' + contract_sale_all_price + '</td>'+
          '<td>' + contract_sale_deliver_datetime + '</td>'+
          '<td>'+
            '<span class = "glyphicon glyphicon-info-sign contract_sale_ml15 contract_sale_modle_info" uuid = "' + contract_sale_data.data[i].uuid + '"></span>'+
            '<span class = "glyphicon glyphicon-pencil contract_sale_ml15 contract_sale_modle_pencil" uuid = "' + contract_sale_data.data[i].uuid + '"></span>'+
            '<span class = "glyphicon glyphicon-remove contract_sale_ml15 contract_sale_modle_remove" uuid = "' + contract_sale_data.data[i].uuid + '" contract_code = "' + contract_sale_data.data[i].contract_code + '"></span>'+
          '</td>'+
        '</tr>';
    }
    $("#contract_sales_box").html(contract_sale_html);
  } else {
    $("#contract_sales_box").html('<tr><td colspan="11" align="center">没数据</td></tr>');
  }
}

function contract_sale_pages_fun(obj) {
  current_offset = obj.attr("data-offset");
  contract_sale_search_condition["offset"] = current_offset;
  contract_sale_server_data_cover("1");
  contract_sale_fill_variable_data();
}

function contract_sales_add_modle_func() {
  var contract_sales_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "contract_sales_add_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
        '<div class = "modal-dialog modal-lg" role = "document">'+
          '<div class = "modal-content">'+
            '<div class = "modal-header bg-primary">'+
              '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
              '<h4 class = "modal-title">添加销售合同</h4>'+
            '</div>'+
            '<div class = "modal-body nopadding-bottom">'+
              '<div class = "row">'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">购买方</label>'+
                    '<select class = "form-control contract_sales_buyer_uuid" value = "">'+
                      '<option value = "">--请选择--</option>';
                      if(isJsonObjectHasData(contract_sale_enterprise_data)) {
                        for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
                          contract_sales_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        }
                      }
                      contract_sales_html+=
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">销售方</label>'+
                    '<select class = "form-control contract_sales_seller_uuid" value = "">'+
                      '<option value = "">--请选择--</option>';
                      if(isJsonObjectHasData(contract_sale_enterprise_data)) {
                        for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
                          contract_sales_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        }
                      }
                    contract_sales_html+=
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">产品名称</label>'+
                    '<input type = "text" class = "form-control contract_sales_product_name" value = ""/>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">标记</label>'+
                    '<input type = "text" class = "form-control contract_sales_real_name" value = ""/>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">单价</label>'+
                    '<div class = "input-group">'+
                      '<input type = "text" class = "form-control contract_sales_price" value = "" >'+
                      '<span class = "input-group-addon">元</span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">数量</label>'+
                    '<div class = "input-group">'+
                      '<input type = "text" class = "form-control contract_sales_quantity" value = ""/>'+
                      '<span class = "input-group-addon">吨</span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">规格</label>'+
                    '<input type = "text" class = "form-control contract_sales_specification" value = "" />'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">交货地点</label>'+
                    '<input type = "text" class = "form-control contract_sales_deliver_place" value = ""/>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group has-feedback">'+
                    '<label>交货时间</label>'+
                    '<input type = "text" class = "form-control widget_datepicker contract_sales_deliver_datetime" value = "">'+
                    '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">合同损耗</label>'+
                    '<div class = "input-group">'+
                      '<input type = "text" class = "form-control contract_sales_contract_ullage" value = ""/>'+
                      '<span class = "input-group-addon">‰</span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group has-feedback">'+
                    '<label>签署时间</label>'+
                    '<input type = "text" class = "form-control widget_datepicker contract_sales_sign_datetime" value = "">'+
                    '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-4">'+
                  '<div class = "form-group">'+
                    '<label for = "">库区</label>'+
                    '<select class = "form-control contract_sales_warehouse_uuid" value = "">'+
                      '<option value = "">--请选择--</option>';
                      if(isJsonObjectHasData(contract_sale_warehouse)) {
                        for (var i = 0; i < contract_sale_warehouse.data.length; i++) {
                          contract_sales_html += '<option value = "' + contract_sale_warehouse.data[i].uuid + '">' + contract_sale_warehouse.data[i].name + '</option>';
                        }
                      }
                      contract_sales_html +=
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-12">'+
                  '<div class = "form-group">'+
                    '<label for = "">备注</label>'+
                    '<textarea type = "text" class = "form-control contract_sales_remark" value = ""></textarea>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-md-12">'+
                  '<label class = "margin15">采购合同附件</label>'+
                  '<div class="panel panel-default clearfix" id = "contract_sales_add_modle_attch">'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class = "modal-footer"  style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-primary" id = "contract_sales_add_modle_prop_btn">添加</button>'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
  $("body").append(contract_sales_html);
  upload_attachment_edit_output("#contract_sales_add_modle_attch");
  $("#contract_sales_add_modle_prop").modal("show");
  $("#contract_sales_add_modle_prop").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function contract_sales_add_data_func(obj, contract_sales_type) {
  //购买企业uuid
  var contract_sales_buyer_uuid = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_buyer_uuid").val();
  //销售企业uuid
  var contract_sales_seller_uuid = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_seller_uuid").val();
  //产品名称
  var contract_sales_product_name = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_product_name").val();
  //真实姓名
  var contract_sales_real_name = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_real_name").val();
  //单价
  var contract_sales_price = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_price").val();
  //数量
  var contract_sales_quantity = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_quantity").val();
  //交货地点
  var contract_sales_deliver_place = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_deliver_place").val();
  //交货时间
  var contract_sales_deliver_datetime = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_deliver_datetime").val();
  if(0 < contract_sales_deliver_datetime.length){
    contract_sales_deliver_datetime += ' 00:00:00';
  }
  //签订时间
  var contract_sales_sign_datetime = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_sign_datetime").val();
  if(0 < contract_sales_sign_datetime.length){
    contract_sales_sign_datetime += ' 00:00:00';
  }
  //合同损耗
  var contract_sales_contract_ullage = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_contract_ullage").val();
  //库区的uuid
  var contract_sales_warehouse_uuid = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_warehouse_uuid").val();
  //规格
  var contract_sales_specification = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_specification").val();
  //备注
  var contract_sales_remark = obj.parents("#contract_sales_add_modle_prop").find(".contract_sales_remark").val();
  //附件
  var contract_sales_list = $("#contract_sales_add_modle_attch ul").children("li");
  var contract_sales_cluster_list = "";
  for (var i = 0; i < contract_sales_list.length; i++) {
    var contract_sales_dom = contract_sales_list[i];
    var cluster = $(contract_sales_dom).find("a").attr("data-cluster");
    if (undefined != cluster) {
     contract_sales_cluster_list += cluster + ";"; 
    }    
  }
  //验证
  if(null == contract_sales_buyer_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
    alert("请选择购买企业！");
    return;
  }
  if(null == contract_sales_seller_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
    alert("请选择销售企业！");
    return;
  }
  if(null == contract_sales_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的产品名称！");
    return;
  }
  if(null == contract_sales_real_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的标记！");
    return;
  }
  if(null == contract_sales_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的单价！");
    return;
  }
  if(null == contract_sales_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的数量！");
    return;
  }
  if(null == contract_sales_deliver_place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的交货地点！");
    return;
  }
  if(null == contract_sales_deliver_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
    alert("请选择交货时间！");
    return;
  }
  if(null == contract_sales_contract_ullage.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的合同损耗！");
    return;
  }
  if(null == contract_sales_sign_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
    alert("请选择签署时间！");
    return;
  }
  if(null == contract_sales_warehouse_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
    alert("请输选择库区！");
    return;
  }
  if(null == contract_sales_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
    alert("请添加采购合同附件！");
    return;
  }
  var contract_sales_data = {
    "cluster_list":contract_sales_cluster_list,
    "buyer_uuid":contract_sales_buyer_uuid,
    "seller_uuid":contract_sales_seller_uuid,
    "product_name":contract_sales_product_name,
    "real_name":contract_sales_real_name,
    "price":contract_sales_price,
    "quantity":contract_sales_quantity,
    "deliver_place":contract_sales_deliver_place,
    "deliver_datetime":contract_sales_deliver_datetime,
    "sign_datetime":contract_sales_sign_datetime,
    "contract_ullage":contract_sales_contract_ullage,
    "warehouse_uuid":contract_sales_warehouse_uuid,
    "type":contract_sales_type
  };
  if(0 < contract_sales_specification.length) {
    if(null == contract_sales_specification.match(/^.{1,128}$/)) {
      alert("请输入正确的规格！");
      return;
    };
    contract_sales_data["specification"] = contract_sales_specification;
  };
//if(0 == contract_sales_specification.length){
//  contract_sales_data["sn_specification"] = "set_null";
//}
  if(0 < contract_sales_remark.length) {
    if(null == contract_sales_remark.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,128}$/)) {
      alert("请输入正确的备注！");
      return;
    };
    contract_sales_data["remark"] = contract_sales_remark;
  };
//if(0 == contract_sales_remark.length){
//  contract_sales_data["sn_remark"] = "set_null";
//}
  //调用接口
  var contract_sales_add_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addContractTrade";
  var contract_sales_add_get = ajax_assistant(contract_sales_add_url, contract_sales_data, false, true, false);
  //console.log(contract_sales_add_get);
  if (1 == contract_sales_add_get.status) {
    contract_sale_clear_raw_data();
    contract_sale_server_data_cover("1");
    contract_sale_fill_variable_data(); 
    $("#contract_sales_add_modle_prop").modal("hide");
    $("#contract_sales_add_modle_prop").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  } else {
    alert("添加销售合同失败");
  }
}

function contract_sales_edit_modle_func(obj, contract_type) {
  var uuid = obj.attr("uuid");
  //购买企业uuid
  var contract_sales_buyer_uuid = "";
  //销售企业uuid
  var contract_sales_seller_uuid = "";
  //产品名称
  var contract_sales_product_name = "";
  //真实姓名
  var contract_sales_real_name = "";
  //单价
  var contract_sales_price = "";
  //数量
  var contract_sales_quantity = "";
  //交货地点
  var contract_sales_deliver_place = "";
  //交货时间
  var contract_sales_deliver_datetime = "";
  //签订时间
  var contract_sales_sign_datetime = "";
  //合同损耗
  var contract_sales_contract_ullage = "";
  //库区的uuid
  var contract_sales_warehouse_uuid = "";
  //规格
  var contract_sales_specification = "";
  //备注
  var contract_sales_remark = "";
  //附件
  var contract_sales_cluster_list = "";
  var contract_sales_edit_data = {
    "uuid":uuid,
    "type":contract_type
  };
  //调接口  查询数据
  var contract_sales_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
  var contract_sales_edit_get_warehouse = ajax_assistant(contract_sales_edit_url, contract_sales_edit_data, false, true, false);
  if (1 == contract_sales_edit_get_warehouse.status) {
  var contract_warehouse_edit_data = JSON.parse(contract_sales_edit_get_warehouse.result);
  //console.log(contract_warehouse_edit_data);
    if (0 < contract_warehouse_edit_data.length) {
      contract_sales_buyer_uuid = contract_warehouse_edit_data[0].buyer_uuid;
      contract_sales_seller_uuid = contract_warehouse_edit_data[0].seller_uuid;
      if (null != contract_warehouse_edit_data[0].normal_cluster_list) {
        contract_sales_cluster_list = contract_warehouse_edit_data[0].normal_cluster_list;
      };
      if (null != contract_warehouse_edit_data[0].product_name) {
        contract_sales_product_name = contract_warehouse_edit_data[0].product_name;
      };
      if (null != contract_warehouse_edit_data[0].real_name) {
        contract_sales_real_name = contract_warehouse_edit_data[0].real_name;
      };
      if (null != contract_warehouse_edit_data[0].price) {
        contract_sales_price = contract_warehouse_edit_data[0].price;
      };
      if (null != contract_warehouse_edit_data[0].quantity) {
        contract_sales_quantity = contract_warehouse_edit_data[0].quantity;
      };
      if (null != contract_warehouse_edit_data[0].specification) {
        contract_sales_specification = contract_warehouse_edit_data[0].specification;
      };
      if (null != contract_warehouse_edit_data[0].deliver_place) {
        contract_sales_deliver_place = contract_warehouse_edit_data[0].deliver_place;
      };
      if (null != contract_warehouse_edit_data[0].deliver_datetime) {
        contract_sales_deliver_datetime = contract_warehouse_edit_data[0].deliver_datetime;
        contract_sales_deliver_datetime = contract_sales_deliver_datetime.substring(0, contract_sales_deliver_datetime.indexOf(' '));
      };
      if (null != contract_warehouse_edit_data[0].sign_datetime) {
        contract_sales_sign_datetime = contract_warehouse_edit_data[0].sign_datetime;
        contract_sales_sign_datetime = contract_sales_sign_datetime.substring(0, contract_sales_sign_datetime.indexOf(' '));
      };
      if (null != contract_warehouse_edit_data[0].contract_ullage) {
        contract_sales_contract_ullage = contract_warehouse_edit_data[0].contract_ullage;
      };
      if (null != contract_warehouse_edit_data[0].warehouse_uuid) {
        contract_sales_warehouse_uuid = contract_warehouse_edit_data[0].warehouse_uuid;
      };
      if (null != contract_warehouse_edit_data[0].remark) {
        contract_sales_remark = contract_warehouse_edit_data[0].remark;
      };
    } else {
      alert("没数据");
    }
  } else {
    alert("查询数据失败");
  }
  //附件
  if(0 < contract_sales_cluster_list.length){
    var contract_sale_file_arr = new Array();
    contract_sales_cluster_list = contract_sales_cluster_list.substring(0, contract_sales_cluster_list.length - 1).split(';');
    //console.log(contract_sales_cluster_list)
    for(var i = 0; i < contract_sales_cluster_list.length; i++){
      var cluster_name_data = {
            "cluster_name":contract_sales_cluster_list[i]
          };
      var contract_sales_file_name=ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
      var contract_sales_json=JSON.parse(contract_sales_file_name.result);
      //console.log(contract_sales_json)
      if(0 != contract_sales_file_name.count) {
        contract_sale_file_arr[i] = {"file_name":contract_sales_json[0].cluster_name+'.'+contract_sales_json[0].suffix};
      }
    }
    contract_sale_file_data = contract_sale_file_arr;
    //console.log(contract_sale_file_data);
  } else {
    contract_sale_file_data = [];
  }
  var contract_sale_edit_html = 
    '<div class = "modal fade custom_modal" tabindex = "-1" id = "contract_sales_edit_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
      '<div class = "modal-dialog modal-lg" role = "document">'+
        '<div class = "modal-content">'+
          '<div class = "modal-header bg-primary">'+
            '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
            '<h4 class = "modal-title">修改销售合同</h4>'+
          '</div>'+
          '<div class = "modal-body nopadding-bottom">'+
            '<div class = "row">'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">购买方</label>'+
                  '<select class = "form-control contract_sales_buyer_uuid" value = "' + contract_sales_buyer_uuid + '"  disabled="disabled">';
                    if(isJsonObjectHasData(contract_sale_enterprise_data)) {
                      for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
                        if(contract_sales_buyer_uuid == contract_sale_enterprise_data.data[i].uuid) {
                          contract_sale_edit_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '" selected = "selected">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        } else {
                          contract_sale_edit_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        }
                      }
                    }
                    contract_sale_edit_html+=
                  '</select>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">销售方</label>'+
                  '<select class = "form-control contract_sales_seller_uuid" value = "' + contract_sales_seller_uuid + '"  disabled="disabled">';
                    if(isJsonObjectHasData(contract_sale_enterprise_data)) {
                      for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
                        if(contract_sales_seller_uuid == contract_sale_enterprise_data.data[i].uuid) {
                          contract_sale_edit_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '" selected = "selected">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        } else {
                          contract_sale_edit_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        }
                      }
                    }
                    contract_sale_edit_html+=
                  '</select>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">产品名称</label>'+
                  '<input type = "text" class = "form-control contract_sales_product_name" value = "' + contract_sales_product_name + '"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">标记</label>'+
                  '<input type = "text" class = "form-control contract_sales_real_name" value = "' + contract_sales_real_name + '"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">单价</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control contract_sales_price" value = "' + contract_sales_price + '" >'+
                    '<span class = "input-group-addon">元</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">数量</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control contract_sales_quantity" value = "' + contract_sales_quantity + '"/>'+
                    '<span class = "input-group-addon">吨</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">规格</label>'+
                  '<input type = "text" class = "form-control contract_sales_specification" value = "' + contract_sales_specification + '" />'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">交货地点</label>'+
                  '<input type = "text" class = "form-control contract_sales_deliver_place" value = "' + contract_sales_deliver_place + '"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group has-feedback">'+
                  '<label>交货时间</label>'+
                  '<input type = "text" class = "form-control widget_datepicker contract_sales_deliver_datetime" value = "' + contract_sales_deliver_datetime + '">'+
                  '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">合同损耗</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control contract_sales_contract_ullage" value = "' + contract_sales_contract_ullage + '"/>'+
                    '<span class = "input-group-addon">‰</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group has-feedback">'+
                  '<label>签署时间</label>'+
                  '<input type = "text" class = "form-control widget_datepicker contract_sales_sign_datetime" value = "' + contract_sales_sign_datetime + '">'+
                  '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">库区</label>'+
                  '<select class = "form-control contract_sales_warehouse_uuid" value = "' + contract_sales_warehouse_uuid + '">';
                    if(isJsonObjectHasData(contract_sale_warehouse)) {
                      for (var i = 0; i < contract_sale_warehouse.data.length; i++) {
                        if(contract_sales_warehouse_uuid == contract_sale_warehouse.data[i].uuid) {
                          contract_sale_edit_html += '<option value = "' + contract_sale_warehouse.data[i].uuid + '" selected = "selected">' + contract_sale_warehouse.data[i].name + '</option>';
                        } else {
                          contract_sale_edit_html += '<option value = "' + contract_sale_warehouse.data[i].uuid + '">' + contract_sale_warehouse.data[i].name + '</option>';
                        }
                      }
                    }
                    contract_sale_edit_html+=
                  '</select>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-12">'+
                '<div class = "form-group">'+
                  '<label for = "">备注</label>'+
                  '<textarea type = "text" class = "form-control contract_sales_remark" value = "' + contract_sales_remark + '">' + contract_sales_remark + '</textarea>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-12">'+
                '<label class = "margin15">采购合同附件</label>'+
                '<div class="panel panel-default clearfix" id = "contract_sales_edit_attch">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class = "modal-footer"  style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-warning" id = "contract_sales_edit_modle_prop_btn" uuid = "' + uuid + '">修改</button>'+
              '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(contract_sale_edit_html);
  upload_attachment_edit_output("#contract_sales_edit_attch", contract_sale_file_data);
  $("#contract_sales_edit_modle_prop").modal("show");
  $("#contract_sales_edit_modle_prop").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function contract_sales_edit_data_func(obj, contract_type) {
  var uuid = obj.attr("uuid");
  //购买企业uuid
  var contract_sales_buyer_uuid = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_buyer_uuid").val();
  //销售企业uuid
  var contract_sales_seller_uuid = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_seller_uuid").val();
  //产品名称
  var contract_sales_product_name = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_product_name").val();
  //真实姓名
  var contract_sales_real_name = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_real_name").val();
  //单价
  var contract_sales_price = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_price").val();
  //数量
  var contract_sales_quantity = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_quantity").val();
  //交货地点
  var contract_sales_deliver_place = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_deliver_place").val();
  //交货时间
  var contract_sales_deliver_datetime = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_deliver_datetime").val();
  if("" != contract_sales_deliver_datetime) {
    contract_sales_deliver_datetime += " 00:00:00";
  }
  //签订时间
  var contract_sales_sign_datetime = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_sign_datetime").val();
  if("" != contract_sales_sign_datetime) {
    contract_sales_sign_datetime += " 00:00:00";
  }
  //合同损耗
  var contract_sales_contract_ullage = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_contract_ullage").val();
  //库区的uuid
  var contract_sales_warehouse_uuid = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_warehouse_uuid").val();
  //规格
  var contract_sales_specification = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_specification").val();
  //备注
  var contract_sales_remark = obj.parents("#contract_sales_edit_modle_prop").find(".contract_sales_remark").val();
  //附件
  var contract_sales_list = $("#contract_sales_edit_attch ul").children("li");
  var contract_sales_cluster_list = "";
  for (var i = 0; i < contract_sales_list.length; i++) {
    var contract_sales_dom = contract_sales_list[i];
    var cluster = $(contract_sales_dom).find("a").attr("data-cluster");
    if (undefined != cluster) {
     contract_sales_cluster_list += cluster + ";"; 
    }    
  }
  //验证
  if(null == contract_sales_buyer_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
    alert("请选择购买企业！");
    return;
  }
  if(null == contract_sales_seller_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
    alert("请选择销售企业！");
    return;
  }
  if(null == contract_sales_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的产品名称！");
    return;
  }
  if(null == contract_sales_real_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的标记！");
    return;
  }
  if(null == contract_sales_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的单价！");
    return;
  }
  if(null == contract_sales_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的数量！");
    return;
  }
  if(null == contract_sales_deliver_place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的交货地点！");
    return;
  }
  if(null == contract_sales_deliver_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
    alert("请选择交货时间！");
    return;
  }
  if(null == contract_sales_contract_ullage.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的合同损耗！");
    return;
  }
  if(null == contract_sales_sign_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
    alert("请选择签署时间！");
    return;
  }
  if(null == contract_sales_warehouse_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
    alert("请输选择库区！");
    return;
  }
  var data = {
    "idColumnValue":uuid,
    "buyer_uuid":contract_sales_buyer_uuid,
    "seller_uuid":contract_sales_seller_uuid,
    "product_name":contract_sales_product_name,
    "real_name":contract_sales_real_name,
    "price":contract_sales_price,
    "quantity":contract_sales_quantity,
    "deliver_place":contract_sales_deliver_place,
    "deliver_datetime":contract_sales_deliver_datetime,
    "sign_datetime":contract_sales_sign_datetime,
    "contract_ullage":contract_sales_contract_ullage,
    "warehouse_uuid":contract_sales_warehouse_uuid,
    "type":contract_type
  };
  if(0 < contract_sales_cluster_list.length) {
    if(null == contract_sales_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
      alert("请添加采购合同附件！");
      return;
    }
    data["normal_newClusterList"] = contract_sales_cluster_list;
  }
  
  if(0 < contract_sales_specification.length) {
    if(null == contract_sales_specification.match(/^.{1,128}$/)) {
      alert("请输入正确的规格！");
      return;
    };
    data["specification"] = contract_sales_specification;
  };
  if(0 < contract_sales_remark.length) {
    if(null == contract_sales_remark.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,128}$/)) {
      alert("请输入正确的备注！");
      return;
    };
    data["remark"] = contract_sales_remark;
  };
  if(0 == contract_sales_specification.length){
    data["sn_specification"] = "set_null";
  }
  if(0 == contract_sales_remark.length){
    data["sn_remark"] = "set_null";
  }
  //调数据库
  var contract_sales_edit_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyContractTrade";
  var contract_sales_edit_data_get = ajax_assistant(contract_sales_edit_data_url, data, false, true, false);
  if(1 == contract_sales_edit_data_get.status){
    contract_sale_clear_raw_data();
    contract_sale_server_data_cover("1");
    contract_sale_fill_variable_data();
    $("#contract_sales_edit_modle_prop").modal("hide");
    $("#contract_sales_edit_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  } else {
    alert("修改失败");
  }   
}

function contract_sales_delete_modle_func(obj) {
  var uuid = obj.attr("uuid");
  var contract_sales_contract_code = obj.attr("contract_code");
  var contract_sales_delete_html = 
      '<div class="modal fade custom_modal" id="contract_sales_delete_modle_prop" tabindex="-1" role="dialog">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title">删除销售合同确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom contract_sales_center">确认要删除吗？</div>'+
            '<div class="modal-footer noborder nopadding-top" style="text-align: center;">'+
            '<button type="button" class="btn btn-danger" id="contract_sales_delete_modle_prop_btn" contract_code = "' + contract_sales_contract_code + '" uuid="' + uuid + '">删除</button>'+
                '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
    '</div>';
  $("body").append(contract_sales_delete_html);
  $("#contract_sales_delete_modle_prop").modal("show");
  $("#contract_sales_delete_modle_prop").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function contract_sales_delete_data_func(obj) {
  var uuid = obj.attr("uuid");
  var contract_sales_contract_code = obj.attr("contract_code");
  var data = {
    "idColumnValue":uuid,
    "contract_code":contract_sales_contract_code
  };
  //接口数据
  var contract_sale_delete_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeContractTrade";
  var contract_sale_delete_data_get = ajax_assistant(contract_sale_delete_data_url, data, false, true, false);
  if(1 != contract_sale_delete_data_get.status){
    alert("删除销售合同失败");
  } else {    
  // 更新页面数据
    contract_sale_clear_raw_data();
    contract_sale_server_data_cover("1");
    contract_sale_fill_variable_data();
  }
  $("#contract_sales_delete_modle_prop").modal("hide");
  $("#contract_sales_delete_modle_prop").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function contract_sales_info_modle_func(obj, contract_type) {
  var uuid = obj.attr("uuid");
  //购买企业uuid
  var contract_sales_buyer_uuid = "";
  //销售企业uuid
  var contract_sales_seller_uuid = "";
  //产品名称
  var contract_sales_product_name = "";
  //真实姓名
  var contract_sales_real_name = "";
  //单价
  var contract_sales_price = "";
  //数量
  var contract_sales_quantity = "";
  //交货地点
  var contract_sales_deliver_place = "";
  //交货时间
  var contract_sales_deliver_datetime = "";
  //签订时间
  var contract_sales_sign_datetime = "";
  //合同损耗
  var contract_sales_contract_ullage = "";
  //库区的uuid
  var contract_sales_warehouse_uuid = "";
  //规格
  var contract_sales_specification = "";
  //备注
  var contract_sales_remark = "";
  //附件
  var contract_sales_cluster_list = "";
  var contract_sales_info_data = {
    "uuid":uuid,
    "type":contract_type
  };
  //调接口  查询数据
  var contract_sales_info_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
  var contract_sales_info_get_warehouse = ajax_assistant(contract_sales_info_url, contract_sales_info_data, false, true, false);
  if (1 == contract_sales_info_get_warehouse.status) {
  var contract_warehouse_edit_data = JSON.parse(contract_sales_info_get_warehouse.result);
  //console.log(contract_warehouse_edit_data);
    if (0 < contract_warehouse_edit_data.length) {
      contract_sales_buyer_uuid = contract_warehouse_edit_data[0].buyer_uuid;
      contract_sales_seller_uuid = contract_warehouse_edit_data[0].seller_uuid;
      if (null != contract_warehouse_edit_data[0].normal_cluster_list) {
        contract_sales_cluster_list = contract_warehouse_edit_data[0].normal_cluster_list;
      }
      if (null != contract_warehouse_edit_data[0].product_name) {
        contract_sales_product_name = contract_warehouse_edit_data[0].product_name;
      }
      if (null != contract_warehouse_edit_data[0].real_name) {
        contract_sales_real_name = contract_warehouse_edit_data[0].real_name;
      }
      if (null != contract_warehouse_edit_data[0].price) {
        contract_sales_price = contract_warehouse_edit_data[0].price;
      }
      if (null != contract_warehouse_edit_data[0].quantity) {
        contract_sales_quantity = contract_warehouse_edit_data[0].quantity;
      }
      if (null != contract_warehouse_edit_data[0].specification) {
        contract_sales_specification = contract_warehouse_edit_data[0].specification;
      }
      if (null != contract_warehouse_edit_data[0].deliver_place) {
        contract_sales_deliver_place = contract_warehouse_edit_data[0].deliver_place;
      }
      if (null != contract_warehouse_edit_data[0].deliver_datetime) {
        contract_sales_deliver_datetime = contract_warehouse_edit_data[0].deliver_datetime;
        contract_sales_deliver_datetime = contract_sales_deliver_datetime.substring(0, contract_sales_deliver_datetime.indexOf(' '));
      }
      if (null != contract_warehouse_edit_data[0].sign_datetime) {
        contract_sales_sign_datetime = contract_warehouse_edit_data[0].sign_datetime;
        contract_sales_sign_datetime = contract_sales_sign_datetime.substring(0, contract_sales_sign_datetime.indexOf(' '));
      }
      if (null != contract_warehouse_edit_data[0].contract_ullage) {
        contract_sales_contract_ullage = contract_warehouse_edit_data[0].contract_ullage;
      }
      if (null != contract_warehouse_edit_data[0].warehouse_uuid) {
        contract_sales_warehouse_uuid = contract_warehouse_edit_data[0].warehouse_uuid;
      }
      if (null != contract_warehouse_edit_data[0].remark) {
        contract_sales_remark = contract_warehouse_edit_data[0].remark;
      }
    } else {
      alert("没数据");
    }
  } else {
    alert("查询数据失败");
  }
  //附件
  if(0 < contract_sales_cluster_list.length){
    var contract_sale_file_arr = new Array();
    contract_sales_cluster_list = contract_sales_cluster_list.substring(0, contract_sales_cluster_list.length - 1).split(';');
    //console.log(contract_sales_cluster_list)
    for(var i = 0; i < contract_sales_cluster_list.length; i++){
      var cluster_name_data = {
            "cluster_name":contract_sales_cluster_list[i]
          };
      var contract_sales_file_name=ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
      var contract_sales_json=JSON.parse(contract_sales_file_name.result);
      //console.log(contract_sales_json)
      if(0 != contract_sales_file_name.count) {
        contract_sale_file_arr[i] = {"file_name":contract_sales_json[0].cluster_name+'.'+contract_sales_json[0].suffix};
      }
    }
    contract_sale_file_data = contract_sale_file_arr;
  } else {
    contract_sale_file_data = [];
  }
  var contract_sale_edit_html = 
    '<div class = "modal fade custom_modal" tabindex = "-1" id = "contract_sales_info_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
      '<div class = "modal-dialog modal-lg" role = "document">'+
        '<div class = "modal-content">'+
          '<div class = "modal-header bg-primary">'+
            '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
            '<h4 class = "modal-title">销售合同详情</h4>'+
          '</div>'+
          '<div class = "modal-body nopadding-bottom">'+
            '<div class = "row">'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">购买方</label>'+
                  '<select class = "form-control contract_sales_buyer_uuid" value = "' + contract_sales_buyer_uuid + '"  disabled="disabled">';
                    if(isJsonObjectHasData(contract_sale_enterprise_data)) {
                      for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
                        if(contract_sales_buyer_uuid == contract_sale_enterprise_data.data[i].uuid) {
                          contract_sale_edit_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '" selected = "selected">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        }
                      }
                    }
                    contract_sale_edit_html +=
                  '</select>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">销售方</label>'+
                  '<select class = "form-control contract_sales_seller_uuid" value = "' + contract_sales_seller_uuid + '"  disabled="disabled">';
                    if(isJsonObjectHasData(contract_sale_enterprise_data)) {
                      for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
                        if(contract_sales_seller_uuid == contract_sale_enterprise_data.data[i].uuid) {
                          contract_sale_edit_html += '<option value = "' + contract_sale_enterprise_data.data[i].uuid + '" selected = "selected">' + contract_sale_enterprise_data.data[i].short_name + '</option>';
                        }
                      }
                    }
                  contract_sale_edit_html +=
                  '</select>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">产品名称</label>'+
                  '<input type = "text" class = "form-control contract_sales_product_name" value = "' + contract_sales_product_name + '" disabled="disabled"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">标记</label>'+
                  '<input type = "text" class = "form-control contract_sales_real_name" value = "' + contract_sales_real_name + '" disabled="disabled"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">单价</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control contract_sales_price" value = "' + contract_sales_price + '"  disabled="disabled">'+
                    '<span class = "input-group-addon">元</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">数量</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control contract_sales_quantity" value = "' + contract_sales_quantity + '" disabled="disabled"/>'+
                    '<span class = "input-group-addon">吨</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">规格</label>'+
                  '<input type = "text" class = "form-control contract_sales_specification" value = "' + contract_sales_specification + '"  disabled="disabled"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">交货地点</label>'+
                  '<input type = "text" class = "form-control contract_sales_deliver_place" value = "' + contract_sales_deliver_place + '" disabled="disabled"/>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group has-feedback">'+
                  '<label>交货时间</label>'+
                  '<input type = "text" class = "form-control widget_datepicker contract_sales_deliver_datetime" value = "' + contract_sales_deliver_datetime + '" disabled="disabled">'+
                  '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">合同损耗</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control contract_sales_contract_ullage" value = "' + contract_sales_contract_ullage + '" disabled="disabled"/>'+
                    '<span class = "input-group-addon">‰</span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group has-feedback">'+
                  '<label>签署时间</label>'+
                  '<input type = "text" class = "form-control widget_datepicker contract_sales_sign_datetime" value = "' + contract_sales_sign_datetime + '" disabled="disabled">'+
                  '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-4">'+
                '<div class = "form-group">'+
                  '<label for = "">库区</label>'+
                  '<select class = "form-control contract_sales_warehouse_uuid" value = "' + contract_sales_warehouse_uuid + '" disabled="disabled">';
                    if(isJsonObjectHasData(contract_sale_warehouse)) {
                      for (var i = 0; i < contract_sale_warehouse.data.length; i++) {
                        if(contract_sales_warehouse_uuid == contract_sale_warehouse.data[i].uuid) {
                          contract_sale_edit_html += '<option value = "' + contract_sale_warehouse.data[i].uuid + '" selected = "selected">' + contract_sale_warehouse.data[i].name + '</option>';
                        }
                      }
                    }
                    contract_sale_edit_html +=
                  '</select>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-12">'+
                '<div class = "form-group">'+
                  '<label for = "">备注</label>'+
                  '<textarea type = "text" class = "form-control contract_sales_remark" value = "' + contract_sales_remark + '" disabled="disabled">' + contract_sales_remark + '</textarea>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-12">'+
                '<label class = "margin15">采购合同附件</label>'+
                '<div class="panel panel-default clearfix" id = "contract_sales_delete_attch">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class = "modal-footer"  style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-default" data-dismiss = "modal">关闭</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(contract_sale_edit_html);
  upload_attachment_preview_output("#contract_sales_delete_attch", contract_sale_file_data);
  $("#contract_sales_info_modle_prop").modal("show");
  $("#contract_sales_info_modle_prop").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function contract_sale_data_screening_func(obj) {
  var contract_sale_idd = obj.attr("id");
  if (obj.prop("checked") == true) {
    $("#contract_sales_box .contract_sale_all_panel").find("." + contract_sale_idd).addClass("contract_sales_none");
  } else {
    $("#contract_sales_box .contract_sale_all_panel").find("." + contract_sale_idd).removeClass("contract_sales_none");
  }
}

function contract_sale_search_btn_func() {
  var contract_sale_search_input_val = $("#contract_sale_search_input").val();
  if ("" == contract_sale_search_input_val) {
    alert("合同号不能为空");
    return;
  }
  if (null == contract_sale_search_input_val.match(/^[A-Z]{2,}-[A-Z]{2,}-[0-9]{5,}$/)) {
    alert("请输入正确的合同号！");
    return;
  }
  current_offset = 0;
  contract_sale_search_condition = {};    
  contract_sale_search_condition = {
    "contract_code":contract_sale_search_input_val,
    "rows":rows,
    "offset":current_offset,
  };
  contract_sale_server_data_cover("1");
  contract_sale_fill_variable_data(); 
}

function contract_sale_search_fuzzy_btn_func() {
  var contract_sale_buyer=$("#contract_sale_buyer").val();
  var contract_sale_saller=$("#contract_sale_saller").val();
  var contract_sale_search_product_name_fuzzy=$("#contract_sale_search_product_name_fuzzy").val();
  var contract_sale_search_real_name_fuzzy=$("#contract_sale_search_real_name_fuzzy").val();
  var contract_sale_search_warehouse_uuid=$("#contract_sale_search_warehouse_uuid").val();
  var contract_sale_search_start_sign_datetime=$("#contract_sale_search_start_sign_datetime").val();
  var contract_sale_search_end_sign_datetime=$("#contract_sale_search_end_sign_datetime").val();
  var contract_sale_invoice=$("#contract_sale_invoice").val();
  if ("" != contract_sale_search_product_name_fuzzy) {
    if(null == contract_sale_search_product_name_fuzzy.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的产品名称！");
      return;
    }
  }
  if ("" != contract_sale_search_real_name_fuzzy) {
    if(null == contract_sale_search_real_name_fuzzy.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的标记！");
      return;
    }
  }
  current_offset = 0;
  contract_sale_search_condition = {};
  if ("" != contract_sale_buyer) {
    contract_sale_search_condition["buyer_uuid"] = contract_sale_buyer;  
  }
  if ("" != contract_sale_saller) {
    contract_sale_search_condition["seller_uuid"] = contract_sale_saller;  
  }
  if ("" != contract_sale_search_product_name_fuzzy) {
    contract_sale_search_condition["product_name_fuzzy"] = contract_sale_search_product_name_fuzzy;
  }
  if ("" != contract_sale_search_real_name_fuzzy) {
    contract_sale_search_condition["real_name_fuzzy"] = contract_sale_search_real_name_fuzzy;
  }
  if ("" != contract_sale_search_warehouse_uuid) {
    contract_sale_search_condition["warehouse_uuid"] = contract_sale_search_warehouse_uuid;  
  }
  if ("" != contract_sale_search_start_sign_datetime) {
    contract_sale_search_start_sign_datetime += " 00:00:00";
    contract_sale_search_condition["start_sign_datetime"] = contract_sale_search_start_sign_datetime;  
  }
  if ("" != contract_sale_search_end_sign_datetime) {
    contract_sale_search_end_sign_datetime += " 00:00:00";
    contract_sale_search_condition["end_sign_datetime"] = contract_sale_search_end_sign_datetime;  
  }
  if ("" != contract_sale_invoice) {
    contract_sale_search_condition["has_invoice"] = contract_sale_invoice;
  } 
  contract_sale_search_condition["rows"] = rows;
  contract_sale_search_condition["offset"] = current_offset;
  contract_sale_server_data_cover("1");
  contract_sale_fill_variable_data();
}

function contract_sale_enterprise_data_val() {
  var contract_sale_html = '<option value="">--请选择--</option>';
  if(isJsonObjectHasData(contract_sale_enterprise_data)) {
    for (var i = 0; i < contract_sale_enterprise_data.data.length; i++) {
      contract_sale_html += '<option value="' + contract_sale_enterprise_data.data[i].uuid + '">'+ contract_sale_enterprise_data.data[i].short_name +'</option>';
    }
  }
  $("#contract_sale_buyer,#contract_sale_saller").html(contract_sale_html);
}

function contract_sale_warehouse_data_val() {
  var contract_sale_html = '<option value="">--请选择--</option>';
  if(isJsonObjectHasData(contract_sale_warehouse)) {
    for (var i = 0; i < contract_sale_warehouse.data.length; i++) {
      contract_sale_html += '<option value = "' + contract_sale_warehouse.data[i].uuid + '">' + contract_sale_warehouse.data[i].name + '</option>';
    }
  }
  $("#contract_sale_search_warehouse_uuid").html(contract_sale_html);
}

function contract_sale_output(output_id) {
  var content = 
  '  <div class = "panel panel-primary">'+
  '    <div class = "panel-heading clearfix">销售合同管理<span class = "glyphicon glyphicon-plus pull-right" id = "contract_sales_add_modle"></span></div>'+
  '    <div class = "panel-body">'+
  '      <div class = "container-fluid">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-2">'+
  '            <div class = "input-group">'+
  '              <div class = "input-group-addon">购买方</div>'+
  '              <select class = "form-control" id = "contract_sale_buyer" value = "">'+
  '              </select>'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-2">'+
  '            <div class = "input-group">'+
  '              <div class = "input-group-addon">销售方</div>'+
  '              <select class = "form-control" id = "contract_sale_saller" value = "">'+
  '              </select>'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-2">'+
  '            <div class = "input-group">'+
  '              <span class = "input-group-addon">名称</span>'+
  '              <input type = "text" class = "form-control" id = "contract_sale_search_product_name_fuzzy">'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-2">'+
  '            <div class = "input-group">'+
  '              <span class = "input-group-addon">品类</span>'+
  '              <input type = "text" class = "form-control" id = "contract_sale_search_real_name_fuzzy">'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-2">'+
  '            <div class = "input-group">'+
  '              <span class = "input-group-addon" >来源库区</span>'+
  '              <select class = "form-control" value = "" id = "contract_sale_search_warehouse_uuid">'+
  '              </select>'+
  '             </div>'+
  '          </div>'+
  '          <div class = "col-lg-2">'+
  '            <div class = "input-group">'+
  '              <span class = "input-group-addon">发票状态</span>'+
  '              <select class = "form-control" value = "" id = "contract_sale_invoice">'+
  '                <option value = "">--请选择--</option>'+
  '                <option value = "1">已收到</option>'+
  '                <option value = "0">未收到</option>'+
  '              </select>'+
  '            </div>'+
  '          </div>'+
  '        </div>'+
  '        <div class = "row contract_sale_mt20">'+
  '          <div class = "col-lg-2">'+
  '            <div class = "form-group has-feedback">'+
  '              <div class = "input-group">'+
  '                <span class = "input-group-addon">签署时间（起）</span>'+
  '                <input type = "text" class = "form-control widget_datepicker" value = "" id = "contract_sale_search_start_sign_datetime">'+
  '              </div>'+
  '              <span class = "glyphicon glyphicon-calendar form-control-feedback" ></span>'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-2">'+
  '            <div class = "form-group has-feedback">'+
  '              <div class = "input-group">'+
  '                <span class = "input-group-addon">签署时间（止）</span>'+
  '                <input type = "text" class = "form-control widget_datepicker" id = "contract_sale_search_end_sign_datetime" value = "">'+
  '              </div>'+
  '              <span class = "glyphicon glyphicon-calendar form-control-feedback" ></span>'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-2" id = "contract_sale_search_fuzzy_btn">'+
  '            <div class = "input-group">'+
  '              <button type = "button" class = "btn btn-primary">搜索</button>'+
  '            </div>'+
  '          </div>'+
  '          <div class = "col-lg-6">'+
  '            <div class = "input-group">'+
  '              <div class = "input-group-addon">合同编号</div>'+
  '              <input type = "text" class = "form-control" id = "contract_sale_search_input">'+
  '              <span class = "input-group-btn" id = "contract_sale_search_btn">'+
  '                <button class = "btn btn-primary " type = "button"><span class = "glyphicon glyphicon-search"></span></button>'+
  '              </span>'+
  '            </div>'+
  '          </div>'+
  '        </div>'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <div class = "panel panel-primary">'+
  '              <div class = "panel-heading">数据显示筛选</div>'+
  '              <table class = "table" width = "100%" border = "0" cellpadding = "0" cellspacing = "0">'+
  '                <tr class = "companyInfo">'+
  '                  <td align = "center">'+
  '                    <div class = "icheckbox_square-blue">'+
  '                      <input type = "checkbox" class = "contract_sale_data_screening_btn" id = "contract_sale_records_checkbox" checked = "checked">'+
  '                    </div>'+
  '                    <label for = "contract_sale_records_checkbox">收款记录</label>'+
  '                  </td>'+
  '                  <td align = "center">'+
  '                    <div class = "icheckbox_square-blue">'+
  '                      <input type = "checkbox" class = "contract_sale_data_screening_btn" id = "contract_sale_logistics_checkbox" checked = "checked">'+
  '                    </div>'+
  '                    <label for = "contract_sale_logistics_checkbox">物流合同</label>'+
  '                  </td>'+
  '                  <td align = "center">'+
  '                    <div class = "icheckbox_square-blue">'+
  '                      <input type = "checkbox" class = "contract_sale_data_screening_btn" id = "contract_sale_transport_checkbox" checked = "checked">'+
  '                    </div>'+
  '                    <label for = "contract_sale_transport_checkbox">车船信息</label>'+
  '                  </td>'+
  '                  <td align = "center">'+
  '                    <div class = "icheckbox_square-blue">'+
  '                      <input type = "checkbox" class = "contract_sale_data_screening_btn" id = "contract_sale_pick_checkbox" checked = "checked">'+
  '                    </div>'+
  '                    <label for = "contract_sale_pick_checkbox">提货委托函</label>'+
  '                  </td>'+
  '                  <td align = "center">'+
  '                    <div class = "icheckbox_square-blue">'+
  '                      <input type = "checkbox" class = "contract_sale_data_screening_btn" id = "contract_sale_confirm_checkbox" checked = "checked">'+
  '                    </div>'+
  '                    <label for = "contract_sale_confirm_checkbox">货物确认函</label>'+
  '                  </td>'+
  '                  <td align = "center">'+
  '                    <div class = "icheckbox_square-blue">'+
  '                      <input type = "checkbox" class = "contract_sale_data_screening_btn" id = "contract_sale_settlement_checkbox" checked = "checked">'+
  '                    </div>'+
  '                    <label for = "contract_sale_settlement_checkbox">销售结算函</label>'+
  '                  </td>'+
  '                </tr>'+
  '              </table>'+
  '            </div>'+
  '          </div>'+
  '        </div>'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>展开详情</th>'+
  '                  <th>合同编号</th>'+
  '                  <th>购买方</th>'+
  '                  <th>销售方</th>'+
  '                  <th>名称</th>'+
  '                  <th>品类</th>'+
  '                  <th>单价</th>'+
  '                  <th>数量（吨）</th>'+
  '                  <th>合计</th>'+
  '                  <th>交货时间</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody id = "contract_sales_box">'+
  '                <tr>'+
  '                  <td><button type = "button" class = "btn btn-info btn-xs"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
  '                  <td>fj-xy-170604</td>'+
  '                  <td>福记</td>'+
  '                  <td>细语</td>'+
  '                  <td>加技术</td>'+
  '                  <td>95</td>'+
  '                  <td>4512</td>'+
  '                  <td>300</td>'+
  '                  <td>154879</td>'+
  '                  <td>2017-06-04</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign contract_sale_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil contract_sale_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove contract_sale_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td><button type = "button" class = "btn btn-info btn-xs"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
  '                  <td>fj-xy-170604</td>'+
  '                  <td>福记</td>'+
  '                  <td>细语</td>'+
  '                  <td>加技术</td>'+
  '                  <td>95</td>'+
  '                  <td>4512</td>'+
  '                  <td>300</td>'+
  '                  <td>154879</td>'+
  '                  <td>2017-06-04</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign contract_sale_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil contract_sale_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove contract_sale_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td><button type = "button" class = "btn btn-info btn-xs"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
  '                  <td>fj-xy-170604</td>'+
  '                  <td>福记</td>'+
  '                  <td>细语</td>'+
  '                  <td>加技术</td>'+
  '                  <td>95</td>'+
  '                  <td>4512</td>'+
  '                  <td>300</td>'+
  '                  <td>154879</td>'+
  '                  <td>2017-06-04</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign contract_sale_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil contract_sale_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove contract_sale_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '        <div id = "contract_sales_pages">'+
  '          <nav aria-label="Page navigation" style="text-align: right;">'+
  '            <ul class="pagination">'+
  '              <li class="active"><span href="#">1</span></li>'+
  '            </ul>'+
  '          </nav>'+
  '        </div>'+
  '      </div>'+
  '    </div>'+
  '  </div>';
    $(output_id).html(content);
}
