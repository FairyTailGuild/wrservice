/**
 * @author wangdi
 */

//var sale_contract_code = "TZ-TZGYL-17813218";

/**
 * 附件
 */
var paid_record_file_data = [
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
  {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
];

/**
 * 收款记录数据
 * 
 */
var paid_record_data = [
  {"amount":"10000000000", "paid_datetime":"2017-05-06 00:00:00", "uuid":"11111111111111111111111111111111","contract_code": "ZS-TZGYL-17813261"},
  {"amount":"20000000000", "paid_datetime":"2017-05-06 00:00:00", "uuid":"11111111111111111111111111111112","contract_code": "ZS-TZGYL-17813261"},
  {"amount":"30000000000", "paid_datetime":"2017-05-06 00:00:00", "uuid":"11111111111111111111111111111113","contract_code": "ZS-TZGYL-17813261"},
  {"amount":"40000000000", "paid_datetime":"2017-05-06 00:00:00", "uuid":"11111111111111111111111111111114","contract_code": "ZS-TZGYL-17813261"},
  {"amount":"50000000000", "paid_datetime":"2017-05-06 00:00:00", "uuid":"11111111111111111111111111111115","contract_code": "ZS-TZGYL-17813261"}
];
/**
 * 应付货款
 */
//var all_paid = 26000000;
var received = 0;
var unreceived = 0;

var current_paid_record_data = {
  "amount":"10000000000",
  "paid_datetime":"2017-05-06 00:00:00",
  "uuid":"11111111111111111111111111111111",
  "contract_code": "ZS-TZGYL-17813261"
};


function paid_record_clear_raw_data(paid_record_contract_uuid, paid_record_title) {
  console.log(paid_record_title)
  //$("#paid_record_thead").html('');
  $("#paid_record_content"+paid_record_contract_uuid).find("#paid_record_box").html('<tr><td colspan="3" align="center">没数据</td></tr>');
  $("#paid_record_content"+paid_record_contract_uuid).find("#paid_record_paid span.paid").html(paid_record_title.paid_record_name + '&nbsp;[应收货款&nbsp;:&nbsp;0]&nbsp;[已收货款&nbsp;:&nbsp;0]&nbsp;[未收货款&nbsp;:&nbsp;0]');
}

function paid_record_fill_variable_data(paid_record_contract_uuid, paid_record_title, all_paid) {
  unreceived = all_paid - received;
  $("#paid_record_content"+paid_record_contract_uuid).find("#paid_record_paid span.paid").html(paid_record_title.paid_record_name + '&nbsp;[应收货款&nbsp;:&nbsp;' + all_paid + ']&nbsp;[已收货款&nbsp;:&nbsp;' + received + ']&nbsp;[未收货款&nbsp;:&nbsp;' + unreceived + ']');
  if(isJsonObjectHasData(paid_record_data)) {
    var paid_record_html = "";
    for (var i = 0; i < paid_record_data.length; i++) {
      paid_record_html +=
        '<tr>'+
          '<td>' + paid_record_data[i].paid_datetime + '</td>'+
          '<td>' + paid_record_data[i].amount + '</td>'+
          '<td>'+
            '<span class = "glyphicon glyphicon-info-sign paid_record_ml15 paid_record_modle_info" uuid = "' + paid_record_data[i].uuid + '" contract_code = "' + paid_record_data[i].contract_code + '"></span>'+
            '<span class = "glyphicon glyphicon-pencil paid_record_ml15 paid_record_modle_pencil" uuid = "' + paid_record_data[i].uuid + '" contract_code = "' + paid_record_data[i].contract_code + '"></span>'+
            '<span class = "glyphicon glyphicon-remove paid_record_ml15 paid_record_modle_remove" uuid = "' + paid_record_data[i].uuid + '" contract_code = "' + paid_record_data[i].contract_code + '"></span>'+
          '</td>'+
        '</tr>';
    }
    $("#paid_record_content"+paid_record_contract_uuid).find("#paid_record_box").html(paid_record_html);
  } else {
    $("#paid_record_content"+paid_record_contract_uuid).find("#paid_record_box").html('<tr><td colspan="3" align="center">没数据</td></tr>');
  }
}

/**
 * 获取收付款记录
 */
function paid_record_server_data_cover(contract_sales_contract_code, paid_record_title, all_paid) {
  received = 0;
  var get_paid_record_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getPaidRecord";
  var get_paid_record_param_data = {};
  get_paid_record_param_data["contract_code"] = contract_sales_contract_code;
  var paid_record_get= ajax_assistant(get_paid_record_url, get_paid_record_param_data, false, true, false);
  console.log(paid_record_get);
  if (1 == paid_record_get.status) {
    if (0 == paid_record_get.count) {
      paid_record_data = {};
      unreceived = all_paid;
    } else {
      var result = JSON.parse(paid_record_get.result);
      console.log(result);
      var paid_record_data_arr = new Array();
      for (var i = 0; i < result.length; i++) {
        received_one = Number(result[i].amount);
        console.log(received)
        var paid_datetime = result[i].paid_datetime.substring(0,result[i].paid_datetime.indexOf(" "));
        paid_record_data_arr.push({"amount": result[i].amount,"paid_datetime": paid_datetime,"uuid": result[i].uuid,"contract_code": result[i].contract_code});
        received = received + received_one;
      }
      unreceived = all_paid - received;
      console.log(unreceived);
      console.log(received);
      paid_record_data = paid_record_data_arr;
    }
  }
}

/**
 * 获取收付款记录详情
 */
function paid_record_get_record(uuid) {
  console.log(uuid);
  var get_paid_record_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getPaidRecord";
  var get_paid_record_param_data = {};
  get_paid_record_param_data["uuid"] = uuid;
  var paid_record_get= ajax_assistant(get_paid_record_url, get_paid_record_param_data, false, true, false);
  console.log(paid_record_get);
  if (1 == paid_record_get.status) {
    var result = JSON.parse(paid_record_get.result);
    console.log(result);
    var paid_datetime = result[0].paid_datetime.substring(0,result[0].paid_datetime.indexOf(" "));
    current_paid_record_data = {"amount": result[0].amount,"paid_datetime": paid_datetime,"uuid": result[0].uuid,"contract_code": result[0].contract_code};
    var paid_record_file_arr =new Array();
    var cluster_list_all = result[0].cluster_list;
    if (null != cluster_list_all) {
      var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
      console.log(cluster_list);
      var paid_record_file = "";
      for (var j = 0; j < cluster_list.length; j++) {
        var enterprise_management_get_paid_record_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
        var enterprise_management_get_paid_record_file_param_data = {};
        enterprise_management_get_paid_record_file_param_data["cluster_name"] = cluster_list[j];
        var enterprise_management_get_paid_record_file = ajax_assistant(enterprise_management_get_paid_record_file_url, enterprise_management_get_paid_record_file_param_data, false, true, false);
        console.log(enterprise_management_get_paid_record_file);
        if (1 == enterprise_management_get_paid_record_file.status) {
          var paid_record_file_result = JSON.parse(enterprise_management_get_paid_record_file.result);
          console.log(paid_record_file_result);
          var paid_record_cluster_name = paid_record_file_result[0].cluster_name;
          var paid_record_suffix = paid_record_file_result[0].suffix;
          var file_name = paid_record_cluster_name + '.' + paid_record_suffix;
          paid_record_file_arr.push({"file_name": file_name});
        }
      }
      paid_record_file_data = paid_record_file_arr;
    } else {
      paid_record_file_data = {}
    }
  }
}

/**
 * 添加收款记录
 */
function paid_record_add_modle_func(contract_code, contract_uuid) {
  var paid_record_html = 
    '<div class = "modal fade custom_modal" tabindex = "-1" id = "paid_record_add_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
      '<div class = "modal-dialog" role = "document">'+
        '<div class = "modal-content">'+
          '<div class = "modal-header bg-primary">'+
            '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
            '<h4 class="modal-title">添加收款记录</h4>'+
          '</div>'+
          '<div class = "modal-body nopadding-bottom">'+
            '<div class = "row">'+
              '<div class = "col-md-6">'+
                '<div class = "form-group">'+
                  '<label for = "">收款金额（元）</label>'+
                  '<input type = "text" class = "form-control amount" >'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-6">'+
                '<div class = "form-group has-feedback">'+
                  '<label>收款时间</label>'+
                  '<input type = "text" class = "form-control widget_datepicker paid_datetime" value="">'+
                  '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                '</div>'+
              '</div>'+
              '<div class = "col-md-12">'+
                '<label class = "margin15">采购合同附件</label>'+
                '<div class = "panel panel-default" id = "paid_record_add_modle_attch">'+
                '</div>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class = "modal-footer"  style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-primary" id = "paid_record_add_modle_prop_btn" contract_code = "' + contract_code + '" contract_uuid = "' + contract_uuid + '">添加</button>'+
              '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(paid_record_html);
  upload_attachment_edit_output("#paid_record_add_modle_attch");
  $("#paid_record_add_modle_prop").modal("show");
  $("#paid_record_add_modle_prop").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function paid_record_add_data_func(paid_record_contract_code, paid_record_contract_uuid, paid_record_title, all_paid) {
  var amount = $("#paid_record_add_modle_prop .amount").val();//付款金额
  var paid_datetime = $("#paid_record_add_modle_prop .paid_datetime").val() + ' 00:00:00';//付款时间
  var paid_record_li = $("#paid_record_add_modle_attch ul").children("li");
  var paid_record_list = "";
  for (var i = 0; i < paid_record_li.length; i++) {
    var obj = paid_record_li[i];
    var paid_record = $(obj).find("a").attr("data-cluster");
    if (undefined != paid_record) {
      paid_record_list += paid_record + ";"; 
    }    
  }
  console.log(paid_record_list);
  if ("" == amount) {
    alert("请输入收款金额");
    return;
  } else {
    if (null == amount.match(/^(\d+)(\.\d+)?$/)) {
      alert("收款金额格式不正确！");
      return;
    }
  }
  if (null == paid_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
    alert("请选择收款时间！");
    return;
  }
  var add_paid_record_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addPaidRecord";
  var add_paid_record_param_data = {};
  add_paid_record_param_data["contract_code"] = paid_record_contract_code;
  add_paid_record_param_data["amount"] = amount;
  add_paid_record_param_data["paid_datetime"] = paid_datetime;
  if("" != paid_record_list) {
    add_paid_record_param_data["cluster_list"] = paid_record_list;
  }
  var paid_record_add = ajax_assistant(add_paid_record_url, add_paid_record_param_data, false, true, false);
  console.log(paid_record_add);
  if (1 == paid_record_add.status) {
    
    $("#paid_record_add_modle_prop").modal("hide");
    paid_record_server_data_cover(paid_record_contract_code, paid_record_title, all_paid);
    paid_record_fill_variable_data(paid_record_contract_uuid, paid_record_title, all_paid);
  } else {
    alert("添加失败！");
  }
}

/**
 * 修改收付款记录
 */
function paid_record_edit_modal(uuid, paid_record_contract_code, paid_record_contract_uuid) {
  var content = 
'     <div class = "modal fade custom_modal" id = "paid_record_edit_modal" tabindex = "-1">'+
'       <div class = "modal-dialog" role = "document">'+
'         <div class = "modal-content">'+
'             <div class = "modal-header bg-primary">'+
'               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
'               <h4 class = "modal-title" id = "myModalLabel">修改收付款记录</h4>'+
'             </div>'+
'             <div class = "modal-body">'+
'               <div class = "row">'+
'                 <div class = "col-md-6">'+
'                   <form>'+
'                     <div class = "form-group">'+
'                       <label for = "">收款金额（元）</label>'+
'                       <input type = "text" class = "form-control amount" value = "' + current_paid_record_data.amount + '" aria-label = "Amount (to the nearest dollar)">'+
'                     </div>'+
'                   </form>'+
'                 </div>'+
'                 <div class = "col-md-6">'+
'                   <form>'+
'                     <div class = "form-group">'+
'                       <label for = "">收款时间</label>'+
'                       <div class = "input-group">'+
'                         <input type = "text" class = "form-control widget_datepicker paid_datetime" value = "' + current_paid_record_data.paid_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
'                         <span class = "input-group-addon">'+
'                           <span class = "glyphicon glyphicon-calendar"></span>'+
'                         </span>'+
'                       </div>'+
'                     </div>'+
'                   </form>'+
'                 </div>'+
'                 <div class = "col-md-12">'+
'                   <label class = "">收付款记录附件</label>'+
'                   <div class = "panel panel-default" id = "paid_record_edit_attch"></div>'+
'                 </div>'+
'               </div>'+
'           </div>'+
'           <div class = "modal-footer">'+
'             <button type = "button" class = "btn btn-warning edit_btn" uuid = "' + uuid + '" contract_code = "' + paid_record_contract_code + '"  contract_uuid = "' + paid_record_contract_uuid + '">修改</button>'+
'             <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
'           </div>'+
'         </div>'+
'       </div>'+
'     </div>';
  $("body").append(content);
  upload_attachment_edit_output("#paid_record_edit_attch", paid_record_file_data);
  $("#paid_record_edit_modal").modal("show");
  $("#paid_record_edit_modal").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function paid_record_edit_data(uuid, paid_record_contract_code, paid_record_contract_uuid, paid_record_title, all_paid) {
  console.log(uuid);
  var amount = $("#paid_record_edit_modal .amount").val();//付款金额
  var paid_datetime = $("#paid_record_edit_modal .paid_datetime").val() + ' 00:00:00';//付款时间
  var paid_record_li = $("#paid_record_edit_attch ul").children("li");
  var paid_record_list = "";
  for (var i = 0; i < paid_record_li.length; i++) {
    var obj = paid_record_li[i];
    var paid_record = $(obj).find("a").attr("data-cluster");
    if (undefined != paid_record) {
      paid_record_list += paid_record + ";"; 
    }    
  }
  console.log(paid_record_list);
  if ("" == amount) {
    alert("请输入收款金额");
    return;
  } else {
    if (null == amount.match(/^(\d+)(\.\d+)?$/)) {
      alert("收款金额格式不正确！");
      return;
    }
  }
  if (null == paid_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
    alert("请选择收款时间！");
    return;
  }
  var edit_paid_record_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyPaidRecord";
  var edit_paid_record_param_data = {};
  edit_paid_record_param_data["contract_code"] = paid_record_contract_code;
  edit_paid_record_param_data["amount"] = amount;
  edit_paid_record_param_data["paid_datetime"] = paid_datetime;
  edit_paid_record_param_data["idColumnValue"] = uuid;
  if("" != paid_record_list) {
    edit_paid_record_param_data["newClusterList"] = paid_record_list;
  }
  var paid_record_edit = ajax_assistant(edit_paid_record_url, edit_paid_record_param_data, false, true, false);
  console.log(paid_record_edit);
  if (1 == paid_record_edit.status) {
    $("#paid_record_edit_modal").modal("hide");
    paid_record_server_data_cover(paid_record_contract_code, paid_record_title, all_paid);
    paid_record_fill_variable_data(paid_record_contract_uuid, paid_record_title, all_paid);
  } else {
    alert("修改失败！");
  }
}

/**
 * 收付款记录详情
 */
function paid_record_detail_modal() {
  var content = 
'     <div class = "modal fade custom_modal" id = "paid_record_detail_modal" tabindex = "-1">'+
'       <div class = "modal-dialog" role = "document">'+
'         <div class = "modal-content">'+
'             <div class = "modal-header bg-primary">'+
'               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
'               <h4 class = "modal-title" id = "myModalLabel">收付款记录详情</h4>'+
'             </div>'+
'             <div class = "modal-body">'+
'               <div class = "row">'+
'                 <div class = "col-md-6">'+
'                   <form>'+
'                     <div class = "form-group">'+
'                       <label for = "">收款金额（元）</label>'+
'                       <input type = "text" class = "form-control place" disabled = "disabled" value = "' + current_paid_record_data.amount + '" aria-label = "Amount (to the nearest dollar)">'+
'                     </div>'+
'                   </form>'+
'                 </div>'+
'                 <div class = "col-md-6">'+
'                   <form>'+
'                     <div class = "form-group">'+
'                       <label for = "">收款时间</label>'+
'                       <div class = "input-group">'+
'                         <input type = "text" class = "widget_datepicker form-control start_deliver_datetime" disabled = "disabled" value = "' + current_paid_record_data.paid_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
'                         <span class = "input-group-addon">'+
'                           <span class = "glyphicon glyphicon-calendar"></span>'+
'                         </span>'+
'                       </div>'+
'                     </div>'+
'                   </form>'+
'                 </div>'+
'                 <div class = "col-md-12">'+
'                   <label class = "">收付款记录附件</label>'+
'                   <div class = "panel panel-default" id = "paid_record_detail_attch"></div>'+
'                 </div>'+
'               </div>'+
'           </div>'+
'           <div class = "modal-footer">'+
'             <button type = "button" class = "btn btn-default" data-dismiss = "modal">关闭</button>'+
'           </div>'+
'         </div>'+
'       </div>'+
'     </div>';
  $("body").append(content);
  upload_attachment_preview_output("#paid_record_detail_attch", paid_record_file_data);
  $("#paid_record_detail_modal").modal("show");
  $("#paid_record_detail_modal").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

/**
 * 删除收付款记录
 */
function paid_record_delete_modal(uuid, paid_record_contract_code, paid_record_contract_uuid) {
  var content = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="paid_record_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">删除收款记录确认</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除收款记录吗？</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-danger remove" uuid = "' + uuid + '" contract_code = "' + paid_record_contract_code + '" contract_uuid = "' + paid_record_contract_uuid + '">删除</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(content);
  $("#paid_record_delete_modal").modal("show");
  $("#paid_record_delete_modal").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function paid_record_delete_data(uuid, paid_record_contract_code, paid_record_contract_uuid, paid_record_title, all_paid) {
  var delete_paid_record_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removePaidRecord";
  var delete_paid_record_param_data = {};
  delete_paid_record_param_data["idColumnValue"] = uuid;
  var org_structure_delete_paid_record= ajax_assistant(delete_paid_record_url, delete_paid_record_param_data, false, true, false);
  console.log(org_structure_delete_paid_record);
  if (1 == org_structure_delete_paid_record.status) {
    $("#paid_record_delete_modal").modal("hide");
    paid_record_server_data_cover(paid_record_contract_code, paid_record_title, all_paid);
    paid_record_fill_variable_data(paid_record_contract_uuid, paid_record_title, all_paid);
  } else {
    alert("删除失败");
  }
}

function paid_record_output(output_id, contract_sale_all_price, paid_record_title) {
  var content =
' <div class = "panel panel-primary contract_sale_records_checkbox">'+
'  <div class = "panel-heading clearfix" id = "paid_record_paid"><span class = "paid">' + paid_record_title.paid_record_name + '&nbsp;[应收货款&nbsp;:&nbsp;' + contract_sale_all_price + ']&nbsp;[已收货款&nbsp;:&nbsp;0]&nbsp;[未收货款&nbsp;:&nbsp;0]</span><span class = "glyphicon glyphicon-plus pull-right" id = "paid_record_add_modle"></span></div>'+
'    <div class = "panel-body">'+
'        <div class = "row">'+
'          <div class = "col-lg-12">'+
'            <table cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table settlement_bill_table_sales_trad_uuid" >'+
'              <thead id = "paid_record_thead">'+
'                <tr>'+
'                  <th>' + paid_record_title.paid_record_time + '</th>'+
'                  <th>' + paid_record_title.paid_record_paid + '</th>'+
'                  <th>&nbsp;</th>'+
'                </tr>'+
'              </thead>'+
'              <tbody id = "paid_record_box">'+
'                <tr>'+
'                  <td>2017-06-04</td>'+
'                  <td>1500</td>'+
'                  <td>'+
'                    <span class = "glyphicon glyphicon-info-sign paid_record_ml15"></span>'+
'                    <span class = "glyphicon glyphicon-pencil paid_record_ml15"></span>'+
'                    <span class = "glyphicon glyphicon-remove paid_record_ml15"></span>'+
'                  </td>'+
'                </tr>'+
'                <tr>'+
'                  <td>2017-06-04</td>'+
'                  <td>1500</td>'+
'                  <td>'+
'                    <span class = "glyphicon glyphicon-info-sign paid_record_ml15"></span>'+
'                    <span class = "glyphicon glyphicon-pencil paid_record_ml15"></span>'+
'                    <span class = "glyphicon glyphicon-remove paid_record_ml15"></span>'+
'                  </td>'+
'                </tr>'+
'                <tr>'+
'                  <td>2017-06-04</td>'+
'                  <td>1500</td>'+
'                  <td>'+
'                    <span class = "glyphicon glyphicon-info-sign paid_record_ml15"></span>'+
'                    <span class = "glyphicon glyphicon-pencil paid_record_ml15"></span>'+
'                    <span class = "glyphicon glyphicon-remove paid_record_ml15"></span>'+
'                  </td>'+
'                </tr>'+
'              </tbody>'+
'            </table>'+
'          </div>'+
'        </div>'+
'      </div>'+
'    </div>';
  $(output_id).html(content);
}
