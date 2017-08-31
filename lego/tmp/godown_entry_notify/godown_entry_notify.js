/**
 * @author yangyongxia
 */

function godownEntryNotify(contract_buy_contract_code, godown_entry_notify_content_id, warehouse_uuid){
  this.contract_buy_contract_code = contract_buy_contract_code;
  this.godown_entry_notify_content_id = godown_entry_notify_content_id;
  this.warehouse_uuid = warehouse_uuid;
  this.godown_entry_notify_data = [
    {"product_name": "原油","quantity": "10","start_datetime": "2017-03-12","end_datetime": "2017-03-12","uuid": "11","contract_code": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐1"},
    {"product_name": "原油1","quantity": "10","start_datetime": "2017-03-12","end_datetime": "2017-03-12","uuid": "11","contract_code": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐2"},
    {"product_name": "原油2","quantity": "10","start_datetime": "2017-03-12","end_datetime": "2017-03-12","uuid": "11","contract_code": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐3"},
    {"product_name": "原油3","quantity": "10","start_datetime": "2017-03-12","end_datetime": "2017-03-12","uuid": "11","contract_code": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐4"},
    {"product_name": "原油4","quantity": "10","start_datetime": "2017-03-12","end_datetime": "2017-03-12","uuid": "11","contract_code": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐5"}
  ];
  
  this.godown_entry_notify_warehouse_pot_data = [
    {"warehouse_pot_name": "储罐1","warehouse_pot_uuid": "111111"},
    {"warehouse_pot_name": "储罐2","warehouse_pot_uuid": "111112"},
    {"warehouse_pot_name": "储罐3","warehouse_pot_uuid": "111113"},
    {"warehouse_pot_name": "储罐4","warehouse_pot_uuid": "111114"},
    {"warehouse_pot_name": "储罐5","warehouse_pot_uuid": "111115"},
  ];
  
  this.current_godown_entry_notify_data = {
    "product_name": "原油",
    "quantity": "10",
    "start_datetime": "2017-03-12",
    "end_datetime": "2017-03-12",
    "uuid": "11",
    "contract_code": "ZS-TZGYL-17813261",
    "warehouse_pot_name": "储罐1"
  };
  
  this.godown_entry_notify_file_data = [
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
   * 初始化
   */
  this.godown_entry_notify_clear_raw_data = function() {
    $(this.godown_entry_notify_content_id).find("#godown_entry_notify_list tbody").html("");
  };
  
  /**
   * 赋值
   */
  this.godown_entry_notify_fill_variable_data = function() {
    if (isJsonObjectHasData(this.godown_entry_notify_data)) {
    var godown_entry_notify_tbody = "";
      for (var i = 0; i < this.godown_entry_notify_data.length; i++) {
        godown_entry_notify_tbody += 
          '<tr>'+
            '<td>' + this.godown_entry_notify_data[i].product_name + '</td>'+
            '<td>' + this.godown_entry_notify_data[i].quantity + '</td>'+
            '<td>' + this.godown_entry_notify_data[i].start_datetime + '</td>'+
            '<td>' + this.godown_entry_notify_data[i].end_datetime + '</td>'+
            '<td>' + this.godown_entry_notify_data[i].warehouse_pot_name + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign godown_entry_notify_ml15 godown_entry_notify_detail" data-uuid = "' + this.godown_entry_notify_data[i].uuid + '" data-contract_code = "' + this.godown_entry_notify_data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil godown_entry_notify_ml15 godown_entry_notify_edit" data-uuid = "' + this.godown_entry_notify_data[i].uuid + '" data-contract_code = "' + this.godown_entry_notify_data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-remove godown_entry_notify_ml15 godown_entry_notify_delete" data-uuid = "' + this.godown_entry_notify_data[i].uuid + '" data-contract_code = "' + this.godown_entry_notify_data[i].contract_code + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.godown_entry_notify_content_id).find("#godown_entry_notify_list tbody").html(godown_entry_notify_tbody);  
      }
    } else {
      $(this.godown_entry_notify_content_id).find("#godown_entry_notify_list tbody").html('<tr><td colspan="6" align="center">没数据</td></tr>');
    }
  };
  
  /**
   * 获取入库单通知单
   */
  this.godown_entry_notify_server_data_cover = function() {
    var get_godown_entry_notify_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGodownEntryNotify";
    var get_godown_entry_notify_param_data = {};
    get_godown_entry_notify_param_data["contract_code"] = this.contract_buy_contract_code;
    var godown_entry_notify_get= ajax_assistant(get_godown_entry_notify_url, get_godown_entry_notify_param_data, false, true, false);
    // console.log(godown_entry_notify_get);
    if (1 == godown_entry_notify_get.status) {
      if (0 == godown_entry_notify_get.count) {
        this.godown_entry_notify_data = {};
      } else {
        var result = JSON.parse(godown_entry_notify_get.result);
        // console.log(result);
        var godown_entry_notify_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          var start_datetime = result[i].start_datetime.substring(0,result[i].start_datetime.indexOf(" "));
          var end_datetime = result[i].end_datetime.substring(0,result[i].end_datetime.indexOf(" "));
          // 获取储罐
          var warehouse_pot_uuid = result[i].warehouse_pot_uuid;
          var get_warehouse_pot_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehousePot";
          var get_warehouse_pot_param_data = {};
          get_warehouse_pot_param_data["uuid"] = warehouse_pot_uuid;
          var godown_entry_notify_get_warehouse_pot = ajax_assistant(get_warehouse_pot_url, get_warehouse_pot_param_data, false, true, false);
          // console.log(godown_entry_notify_get_warehouse_pot);
          if (1 == godown_entry_notify_get_warehouse_pot.status) {
            var result_warehouse_pot = JSON.parse(godown_entry_notify_get_warehouse_pot.result); 
            // console.log(result_warehouse_pot);
            godown_entry_notify_data_arr.push({"product_name": result[i].product_name,"quantity": result[i].quantity,"start_datetime": start_datetime,"end_datetime": end_datetime,"uuid": result[i].uuid,"contract_code": result[i].contract_code,"warehouse_pot_name": result_warehouse_pot[0].name});
          }
        }
      }
      this.godown_entry_notify_data = godown_entry_notify_data_arr;
    }
  };
  
  
  /**
   * 获取入库单通知单详情
   */
  this.godown_entry_notify_get_letter = function(uuid) {
    // console.log(uuid);
    var get_godown_entry_notify_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGodownEntryNotify";
    var get_godown_entry_notify_param_data = {};
    get_godown_entry_notify_param_data["uuid"] = uuid;
    var godown_entry_notify_get= ajax_assistant(get_godown_entry_notify_url, get_godown_entry_notify_param_data, false, true, false);
    // console.log(godown_entry_notify_get);
    if (1 == godown_entry_notify_get.status) {
      var result = JSON.parse(godown_entry_notify_get.result);
      // console.log(result);
      var start_datetime = result[0].start_datetime.substring(0,result[0].start_datetime.indexOf(" "));
      var end_datetime = result[0].end_datetime.substring(0,result[0].end_datetime.indexOf(" "));
      this.current_godown_entry_notify_data = {"product_name": result[0].product_name,"quantity": result[0].quantity,"start_datetime": start_datetime,"end_datetime": end_datetime,"uuid": result[0].uuid,"contract_code": result[0].contract_code,"warehouse_pot_uuid": result[0].warehouse_pot_uuid,};
      var godown_entry_notify_file_arr = new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        // console.log(cluster_list);
        var godown_entry_notify_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var enterprise_management_get_godown_entry_notify_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var enterprise_management_get_godown_entry_notify_file_param_data = {};
          enterprise_management_get_godown_entry_notify_file_param_data["cluster_name"] = cluster_list[j];
          var enterprise_management_get_godown_entry_notify_file = ajax_assistant(enterprise_management_get_godown_entry_notify_file_url, enterprise_management_get_godown_entry_notify_file_param_data, false, true, false);
          // console.log(enterprise_management_get_godown_entry_notify_file);
          if (1 == enterprise_management_get_godown_entry_notify_file.status) {
            var godown_entry_notify_file_result = JSON.parse(enterprise_management_get_godown_entry_notify_file.result);
            // console.log(godown_entry_notify_file_result);
            var godown_entry_notify_cluster_name = godown_entry_notify_file_result[0].cluster_name;
            var godown_entry_notify_suffix = godown_entry_notify_file_result[0].suffix;
            var file_name = godown_entry_notify_cluster_name + '.' + godown_entry_notify_suffix;
            godown_entry_notify_file_arr.push({"file_name": file_name});
          }
        }
        this.godown_entry_notify_file_data = godown_entry_notify_file_arr;
      } else {
        this.godown_entry_notify_file_data = {}
      }
    }
  };
  
  /**
   * 获取储罐
   */
  this.godown_entry_notify_get_warehouse_pot = function() {
    var get_warehouse_pot_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehousePot";
    var get_warehouse_pot_param_data = {};
    get_warehouse_pot_param_data["warehouse_uuid"] = this.warehouse_uuid;
    var godown_entry_notify_get_warehouse_pot = ajax_assistant(get_warehouse_pot_url, get_warehouse_pot_param_data, false, true, false);
    // console.log(godown_entry_notify_get_warehouse_pot);
    if (1 == godown_entry_notify_get_warehouse_pot.status) {
      if (0 == godown_entry_notify_get_warehouse_pot.count) {
        this.godown_entry_notify_warehouse_pot_data = {};
      } else {
        var warehouse_pot_arr = new Array();
        var result = JSON.parse(godown_entry_notify_get_warehouse_pot.result); 
        // console.log(result);
        for (var i = 0; i < result.length; i++) {
          warehouse_pot_arr.push({"warehouse_pot_name":result[i].name, "warehouse_pot_uuid":result[i].uuid});
        }
        this.godown_entry_notify_warehouse_pot_data = warehouse_pot_arr;
      }
    } else {
      alert("获取库区失败");
      return;
    } 
  };
  
  /**
   * 添加入库单通知单
   */
  this.godown_entry_notify_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "godown_entry_notify_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">添加入库单通知单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">品类</label>'+
  '                       <input type = "text" class = "form-control product_name" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control quantity" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货开始时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control start_datetime" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货结束时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control end_datetime" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class="col-md-12">'+
  '                   <form>'+
  '                     <div class="form-group">'+
  '                       <label for="">储罐</label>'+
  '                       <select class="form-control warehouse_pot_uuid">'+
  '                         <option>--请选择--</option>'+
  '                       </select>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">入库单通知单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_entry_notify_add_attch"></div>'+
  '                 </div>'+
  '               </div>'+
  '           </div>'+
  '           <div class = "modal-footer">'+
  '             <button type = "button" class = "btn btn-primary add_btn" data-contract_code = "' + this.contract_buy_contract_code + '">添加</button>'+
  '             <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  '     </div>';
    $("body").append(content);
    //储罐
    this.godown_entry_notify_get_warehouse_pot();
    var workhouse_pot_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < this.godown_entry_notify_warehouse_pot_data.length; i++) {
      workhouse_pot_select += '<option value = "' + this.godown_entry_notify_warehouse_pot_data[i].warehouse_pot_uuid + '">' + this.godown_entry_notify_warehouse_pot_data[i].warehouse_pot_name + '</option>'
      $("#godown_entry_notify_add_modal select").html(workhouse_pot_select);
    }
    upload_attachment_edit_output("#godown_entry_notify_add_attch");
    $("#godown_entry_notify_add_modal").modal("show");
    $("#godown_entry_notify_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_entry_notify_add_data = function() {
    var product_name = $("#godown_entry_notify_add_modal .product_name").val();
    var quantity = $("#godown_entry_notify_add_modal .quantity").val();
    var start_datetime = $("#godown_entry_notify_add_modal .start_datetime").val() + ' 00:00:00';
    var end_datetime = $("#godown_entry_notify_add_modal .end_datetime").val() + ' 00:00:00';
    var warehouse_pot_uuid = $("#godown_entry_notify_add_modal .warehouse_pot_uuid").val();
    var godown_entry_notify_li = $("#godown_entry_notify_add_attch ul").children("li");
    var godown_entry_notify_list = "";
    for (var i = 0; i < godown_entry_notify_li.length; i++) {
      var obj = godown_entry_notify_li[i];
      var godown_entry_notify = $(obj).find("a").attr("data-cluster");
      if (undefined != godown_entry_notify) {
       godown_entry_notify_list += godown_entry_notify + ";"; 
      }    
    }
    // console.log(godown_entry_notify_list);
    if ("" == product_name) {
      alert("请输入品类！");
      return;
    } else {
      if (null == product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("品类格式不正确！");
        return;
      }
    }
    if ("" == quantity) {
      alert("请输入卸货量！");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("卸货量格式不正确！");
        return;
      }
    }
    if (null == start_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择卸货开始时间！");
      return;
    }
    if (null == end_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择卸货结束时间！");
      return;
    }
    if ("" == warehouse_pot_uuid) {
      alert("请选择储罐！");
      return;
    }
    var add_godown_entry_notify_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addGodownEntryNotify";
    var add_godown_entry_notify_param_data = {};
    add_godown_entry_notify_param_data["contract_code"] = this.contract_buy_contract_code;
    add_godown_entry_notify_param_data["product_name"] = product_name;
    add_godown_entry_notify_param_data["quantity"] = quantity;
    add_godown_entry_notify_param_data["start_datetime"] = start_datetime;
    add_godown_entry_notify_param_data["end_datetime"] = end_datetime;
    add_godown_entry_notify_param_data["warehouse_pot_uuid"] = warehouse_pot_uuid;
    if("" != godown_entry_notify_list) {
      add_godown_entry_notify_param_data["cluster_list"] = godown_entry_notify_list;
    }
    var godown_entry_notify_add = ajax_assistant(add_godown_entry_notify_url, add_godown_entry_notify_param_data, false, true, false);
    // console.log(godown_entry_notify_add);
    if (1 == godown_entry_notify_add.status) {
      $("#godown_entry_notify_add_modal").modal("hide");
      this.godown_entry_notify_clear_raw_data(this.godown_entry_notify_content_id);
      this.godown_entry_notify_server_data_cover(this.contract_buy_contract_code);
      this.godown_entry_notify_fill_variable_data(this.godown_entry_notify_content_id);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改入库单通知单
   */
  this.godown_entry_notify_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "godown_entry_notify_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改入库单通知单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">品类</label>'+
  '                       <input type = "text" class = "form-control product_name" value = "' + this.current_godown_entry_notify_data.product_name + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control quantity" value = "' + this.current_godown_entry_notify_data.quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货开始时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control start_datetime" value = "' + this.current_godown_entry_notify_data.start_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货结束时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control end_datetime" value = "' + this.current_godown_entry_notify_data.end_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class="col-md-12">'+
  '                   <form>'+
  '                     <div class="form-group">'+
  '                       <label for="">储罐</label>'+
  '                       <select class="form-control warehouse_pot_uuid">'+
  '                         <option>--请选择--</option>'+
  '                       </select>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">入库单通知单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_entry_notify_edit_attch"></div>'+
  '                 </div>'+
  '               </div>'+
  '           </div>'+
  '           <div class = "modal-footer">'+
  '             <button type = "button" class = "btn btn-warning edit_btn" data-uuid = "' + uuid + '" data-contract_code = "' + this.contract_buy_contract_code + '">修改</button>'+
  '             <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  '     </div>';
    $("body").append(content);
    //储罐
    this.godown_entry_notify_get_warehouse_pot();
    var workhouse_pot_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < this.godown_entry_notify_warehouse_pot_data.length; i++) {
      workhouse_pot_select += '<option value = "' + this.godown_entry_notify_warehouse_pot_data[i].warehouse_pot_uuid + '">' + this.godown_entry_notify_warehouse_pot_data[i].warehouse_pot_name + '</option>'
      $("#godown_entry_notify_edit_modal select").html(workhouse_pot_select);
    }
    for (var i = 0; i < $("#godown_entry_notify_edit_modal select option").length; i++) {
      var warehouse_pot_uuid = this.current_godown_entry_notify_data.warehouse_pot_uuid;
      var value = $("#godown_entry_notify_edit_modal select option").eq(i).val();
      // console.log(warehouse_pot_uuid);
      if($("#godown_entry_notify_edit_modal select option").eq(i).val() == warehouse_pot_uuid) {
        $("#godown_entry_notify_edit_modal select option").eq(i).prop('selected','selected');
        break;
      }
    }
    upload_attachment_edit_output("#godown_entry_notify_edit_attch", this.godown_entry_notify_file_data);
    $("#godown_entry_notify_edit_modal").modal("show");
    $("#godown_entry_notify_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_entry_notify_edit_data = function(uuid) {
    var product_name = $("#godown_entry_notify_edit_modal .product_name").val();
    var quantity = $("#godown_entry_notify_edit_modal .quantity").val();
    var start_datetime = $("#godown_entry_notify_edit_modal .start_datetime").val() + ' 00:00:00';
    var end_datetime = $("#godown_entry_notify_edit_modal .end_datetime").val() + ' 00:00:00';
    var warehouse_pot_uuid = $("#godown_entry_notify_edit_modal .warehouse_pot_uuid").val();
    var godown_entry_notify_li = $("#godown_entry_notify_edit_modal ul").children("li");
    var godown_entry_notify_list = "";
    for (var i = 0; i < godown_entry_notify_li.length; i++) {
      var obj = godown_entry_notify_li[i];
      var godown_entry_notify = $(obj).find("a").attr("data-cluster");
      if (undefined != godown_entry_notify) {
       godown_entry_notify_list += godown_entry_notify + ";"; 
      }    
    }
    // console.log(godown_entry_notify_list);
    if ("" == product_name) {
      alert("请输入品类！");
      return;
    } else {
      if (null == product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("品类格式不正确！");
        return;
      }
    }
    if ("" == quantity) {
      alert("请输入卸货量！");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("卸货量格式不正确！");
        return;
      }
    }
    if (null == start_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择卸货开始时间！");
      return;
    }
    if (null == end_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择卸货结束时间！");
      return;
    }
    if ("" == warehouse_pot_uuid) {
      alert("请选择储罐！");
      return;
    }
    var edit_godown_entry_notify_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyGodownEntryNotify";
    var edit_godown_entry_notify_param_data = {};
    edit_godown_entry_notify_param_data["contract_code"] = this.contract_buy_contract_code;
    edit_godown_entry_notify_param_data["idColumnValue"] = uuid;
    edit_godown_entry_notify_param_data["product_name"] = product_name;
    edit_godown_entry_notify_param_data["quantity"] = quantity;
    edit_godown_entry_notify_param_data["start_datetime"] = start_datetime;
    edit_godown_entry_notify_param_data["end_datetime"] = end_datetime;
    edit_godown_entry_notify_param_data["warehouse_pot_uuid"] = warehouse_pot_uuid;
    if("" != godown_entry_notify_list) {
      edit_godown_entry_notify_param_data["newClusterList"] = godown_entry_notify_list;
    }
    var godown_entry_notify_edit = ajax_assistant(edit_godown_entry_notify_url, edit_godown_entry_notify_param_data, false, true, false);
    // console.log(godown_entry_notify_edit);
    if (1 == godown_entry_notify_edit.status) {
      $("#godown_entry_notify_edit_modal").modal("hide");
      this.godown_entry_notify_clear_raw_data(this.godown_entry_notify_content_id);
      this.godown_entry_notify_server_data_cover(this.contract_buy_contract_code);
      this.godown_entry_notify_fill_variable_data(this.godown_entry_notify_content_id);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 入库单通知单详情
   */
  this.godown_entry_notify_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "godown_entry_notify_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">入库单通知单详情</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">品类</label>'+
  '                       <input type = "text" class = "form-control product_name" disabled = "disabled" value = "' + this.current_godown_entry_notify_data.product_name + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control quantity" disabled = "disabled" value = "' + this.current_godown_entry_notify_data.quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货开始时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control start_datetime" disabled = "disabled" value = "' + this.current_godown_entry_notify_data.start_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">卸货结束时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control end_datetime" disabled = "disabled" value = "' + this.current_godown_entry_notify_data.end_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class="col-md-12">'+
  '                   <form>'+
  '                     <div class="form-group">'+
  '                       <label for="">储罐</label>'+
  '                       <select class="form-control warehouse_pot_uuid" disabled = "disabled">'+
  '                         <option>--请选择--</option>'+
  '                       </select>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">入库单通知单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_entry_notify_detail_attch"></div>'+
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
    //储罐
    this.godown_entry_notify_get_warehouse_pot();
    var workhouse_pot_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < this.godown_entry_notify_warehouse_pot_data.length; i++) {
      workhouse_pot_select += '<option value = "' + this.godown_entry_notify_warehouse_pot_data[i].warehouse_pot_uuid + '">' + this.godown_entry_notify_warehouse_pot_data[i].warehouse_pot_name + '</option>'
      $("#godown_entry_notify_detail_modal select").html(workhouse_pot_select);
    }
    for (var i = 0; i < $("#godown_entry_notify_detail_modal select option").length; i++) {
      var warehouse_pot_uuid = this.current_godown_entry_notify_data.warehouse_pot_uuid;
      var value = $("#godown_entry_notify_detail_modal select option").eq(i).val();
      // console.log(warehouse_pot_uuid);
      if ($("#godown_entry_notify_detail_modal select option").eq(i).val() == warehouse_pot_uuid) {
        $("#godown_entry_notify_detail_modal select option").eq(i).prop('selected','selected');
        break;
      }
    }
    upload_attachment_preview_output("#godown_entry_notify_detail_attch", this.godown_entry_notify_file_data);
    $("#godown_entry_notify_detail_modal").modal("show");
    $("#godown_entry_notify_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除入库单通知单
   */
  this.godown_entry_notify_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="godown_entry_notify_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除入库单通知单确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除入库单通知单吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-contract_code = "' + this.contract_buy_contract_code + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#godown_entry_notify_delete_modal").modal("show");
    $("#godown_entry_notify_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_entry_notify_delete_data = function(uuid) {
    var delete_godown_entry_notify_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeGodownEntryNotify";
    var delete_godown_entry_notify_param_data = {};
    delete_godown_entry_notify_param_data["idColumnValue"] = uuid;
    delete_godown_entry_notify_param_data["contract_code"] = this.contract_buy_contract_code;
    var godown_entry_notify_delete_godown_entry_notify= ajax_assistant(delete_godown_entry_notify_url, delete_godown_entry_notify_param_data, false, true, false);
    // console.log(godown_entry_notify_delete_godown_entry_notify);
    if (1 == godown_entry_notify_delete_godown_entry_notify.status) {
      $("#godown_entry_notify_delete_modal").modal("hide");
      this.godown_entry_notify_clear_raw_data(this.godown_entry_notify_content_id);
      this.godown_entry_notify_server_data_cover(this.contract_buy_contract_code);
      this.godown_entry_notify_fill_variable_data(this.godown_entry_notify_content_id);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 入库通知单输出
   * @param output_id
   */
  this.godown_entry_notify_content = function() {
    var content = 
  '   <div class = "panel panel-primary contract_buy_receipt_notice_checkbox">'+
  '    <div class = "panel-heading clearfix" id = "godown_entry_notify_paid">入库通知单<span class = "glyphicon glyphicon-plus pull-right" id = "godown_entry_notify_add_modal_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "godown_entry_notify_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>品类</th>'+
  '                  <th>卸货量（吨）</th>'+
  '                  <th>卸货开始时间</th>'+
  '                  <th>卸货结束时间</th>'+
  '                  <th>储罐</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "godown_entry_notify_ml15_box">'+
  '                <tr>'+
  '                  <td>原油</td>'+
  '                  <td>10</td>'+
  '                  <td>2017-05-14</td>'+
  '                  <td>2017-05-14</td>'+
  '                  <td>储罐1</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign godown_entry_notify_ml15 godown_entry_notify_detail"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil godown_entry_notify_ml15 godown_entry_notify_edit"></span>'+
  '                    <span class = "glyphicon glyphicon-remove godown_entry_notify_ml15 godown_entry_notify_delete"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.godown_entry_notify_content_id).html(content);
  };
}