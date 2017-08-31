/**
 * @author yangyongxia
 */
function godownEntry(vehicle_information_uuid, godown_entry_content_id, warehouse_uuid) {
  this.vehicle_information_uuid = vehicle_information_uuid;
  this.godown_exit_content_id = godown_entry_content_id;
  this.warehouse_uuid = warehouse_uuid;
  this.godown_entry_data = [
    {"entry_datetime": "2017-03-25","tare_weight": "10","gross_weight": "10","net_weight": "10","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐1"},
    {"entry_datetime": "2017-03-25","tare_weight": "11","gross_weight": "10","net_weight": "10","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐2"},
    {"entry_datetime": "2017-03-25","tare_weight": "12","gross_weight": "10","net_weight": "10","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐3"},
    {"entry_datetime": "2017-03-25","tare_weight": "13","gross_weight": "10","net_weight": "10","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐4"},
    {"entry_datetime": "2017-03-25","tare_weight": "14","gross_weight": "10","net_weight": "10","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261","warehouse_pot_name": "储罐5"},
  ];
  
  this.godown_entry_warehouse_pot_data = [
    {"warehouse_pot_name": "储罐1","warehouse_pot_uuid": "111111"},
    {"warehouse_pot_name": "储罐2","warehouse_pot_uuid": "111112"},
    {"warehouse_pot_name": "储罐3","warehouse_pot_uuid": "111113"},
    {"warehouse_pot_name": "储罐4","warehouse_pot_uuid": "111114"},
    {"warehouse_pot_name": "储罐5","warehouse_pot_uuid": "111115"},
  ];
  
  this.current_godown_entry_data = {
    "entry_datetime": "2017-03-25",
    "tare_weight": "10",
    "gross_weight": "10",
    "net_weight": "10",
    "uuid": "11",
    "vehicle_information_uuid": "ZS-TZGYL-17813261",
    "warehouse_pot_name": "111111"
  };
  
  this.godown_entry_file_data = [
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
  ];
  
  this.net_weight_count = 0;
  
  /**
   * 初始化
   */
  this.godown_entry_clear_raw_data = function() {
  //$("#godown_entry_list thead").html("");
    $(this.godown_exit_content_id).find("#godown_entry_list tbody").html("");
    this.net_weight_count = 0;
    $(this.godown_exit_content_id).find("#godown_entry_paid span.paid").html('入库单&nbsp;[净重总量&nbsp;:&nbsp;0]&nbsp;');
  };
  
  /**
   * 赋值
   */
  this.godown_entry_fill_variable_data = function() {
    $(this.godown_exit_content_id).find("#godown_entry_paid span.paid").html('入库单&nbsp;[净重总量&nbsp;:&nbsp;' + this.net_weight_count + ']&nbsp;');
    if (isJsonObjectHasData(this.godown_entry_data)) {
  //  var godown_entry_thead  = 
  //    '<tr>'+
  //      '<th>提货地点</th>'+
  //      '<th>提货时间</th>'+
  //      '<th>&nbsp;</th>'+
  //    '</tr>';
      var godown_entry_tbody = "";
      for (var i = 0; i < this.godown_entry_data.length; i++) {
        godown_entry_tbody += 
          '<tr>'+
            '<td>' + this.godown_entry_data[i].entry_datetime + '</td>'+
            '<td>' + this.godown_entry_data[i].tare_weight + '</td>'+
            '<td>' + this.godown_entry_data[i].gross_weight + '</td>'+
            '<td>' + this.godown_entry_data[i].net_weight + '</td>'+
            '<td>' + this.godown_entry_data[i].warehouse_pot_name + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign godown_entry_ml15 godown_entry_detail" data-uuid = "' + this.godown_entry_data[i].uuid + '" data-vehicle_information_uuid = "' + this.godown_entry_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil godown_entry_ml15 godown_entry_edit" data-uuid = "' + this.godown_entry_data[i].uuid + '" data-vehicle_information_uuid = "' + this.godown_entry_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-remove godown_entry_ml15 godown_entry_delete" data-uuid = "' + this.godown_entry_data[i].uuid + '" data-vehicle_information_uuid = "' + this.godown_entry_data[i].vehicle_information_uuid + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.godown_exit_content_id).find("#godown_entry_list tbody").html(godown_entry_tbody);  
      }
    } else {
      $(this.godown_exit_content_id).find("#godown_entry_list tbody").html('<tr><td colspan="6" align="center">没数据</td></tr>');
    }
  };
  
  /**
   * 获取入库单
   */
  this.godown_entry_server_data_cover = function() {
    var get_godown_entry_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGodownEntry";
    var get_godown_entry_param_data = {};
    get_godown_entry_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var godown_entry_get= ajax_assistant(get_godown_entry_url, get_godown_entry_param_data, false, true, false);
    // console.log(godown_entry_get);
    if (1 == godown_entry_get.status) {
      if (0 == godown_entry_get.count) {
        this.godown_entry_data = {};
      } else {
        var result = JSON.parse(godown_entry_get.result);
        // console.log(result);
        var godown_entry_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          var net_weight_count_one = Number(result[i].net_weight);
          this.net_weight_count = this.net_weight_count + net_weight_count_one;
          var entry_datetime = result[i].entry_datetime.substring(0,result[i].entry_datetime.indexOf(" "));
          // 获取储罐
          var warehouse_pot_uuid = result[i].warehouse_pot_uuid;
          var get_warehouse_pot_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehousePot";
          var get_warehouse_pot_param_data = {};
          get_warehouse_pot_param_data["uuid"] = warehouse_pot_uuid;
          var godown_entry_get_warehouse_pot = ajax_assistant(get_warehouse_pot_url, get_warehouse_pot_param_data, false, true, false);
          // console.log(godown_entry_get_warehouse_pot);
          if (1 == godown_entry_get_warehouse_pot.status) {
            var result_warehouse_pot = JSON.parse(godown_entry_get_warehouse_pot.result); 
            // console.log(result_warehouse_pot);
            godown_entry_data_arr.push({"entry_datetime": entry_datetime,"tare_weight": result[i].tare_weight,"gross_weight": result[i].gross_weight,"net_weight": result[i].net_weight,"uuid": result[i].uuid,"vehicle_information_uuid": result[i].vehicle_information_uuid,"warehouse_pot_name": result_warehouse_pot[0].name,});
          }
        } 
      }
      this.godown_entry_data = godown_entry_data_arr;
    }
  };
  
  
  /**
   * 获取入库单详情
   */
  this.godown_entry_get_letter = function(uuid) {
    // console.log(uuid);
    var get_godown_entry_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGodownEntry";
    var get_godown_entry_param_data = {};
    get_godown_entry_param_data["uuid"] = uuid;
    var godown_entry_get= ajax_assistant(get_godown_entry_url, get_godown_entry_param_data, false, true, false);
    // console.log(godown_entry_get);
    if (1 == godown_entry_get.status) {
      var result = JSON.parse(godown_entry_get.result);
      // console.log(result);
      var entry_datetime = result[0].entry_datetime.substring(0,result[0].entry_datetime.indexOf(" "));
      this.current_godown_entry_data = {"entry_datetime": entry_datetime,"tare_weight": result[0].tare_weight,"gross_weight": result[0].gross_weight,"net_weight": result[0].net_weight,"uuid": result[0].uuid,"vehicle_information_uuid": result[0].vehicle_information_uuid,"warehouse_pot_uuid": result[0].warehouse_pot_uuid};
      var godown_entry_file_arr = new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        // console.log(cluster_list);
        var godown_entry_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var enterprise_management_get_godown_entry_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var enterprise_management_get_godown_entry_file_param_data = {};
          enterprise_management_get_godown_entry_file_param_data["cluster_name"] = cluster_list[j];
          var enterprise_management_get_godown_entry_file = ajax_assistant(enterprise_management_get_godown_entry_file_url, enterprise_management_get_godown_entry_file_param_data, false, true, false);
          // console.log(enterprise_management_get_godown_entry_file);
          if (1 == enterprise_management_get_godown_entry_file.status) {
            var godown_entry_file_result = JSON.parse(enterprise_management_get_godown_entry_file.result);
            // console.log(godown_entry_file_result);
            var godown_entry_cluster_name = godown_entry_file_result[0].cluster_name;
            var godown_entry_suffix = godown_entry_file_result[0].suffix;
            var file_name = godown_entry_cluster_name + '.' + godown_entry_suffix;
            godown_entry_file_arr.push({"file_name": file_name});
          }
        }
        this.godown_entry_file_data = godown_entry_file_arr;
      } else {
        this.godown_entry_file_data = {}
      }
    }
  };
  
  /**
   * 获取储罐
   */
  this.godown_entry_get_warehouse_pot = function() {
    var get_warehouse_pot_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehousePot";
    var get_warehouse_pot_param_data = {};
    get_warehouse_pot_param_data["warehouse_uuid"] = this.warehouse_uuid;
    var godown_entry_get_warehouse_pot = ajax_assistant(get_warehouse_pot_url, get_warehouse_pot_param_data, false, true, false);
    // console.log(godown_entry_get_warehouse_pot);
    if (1 == godown_entry_get_warehouse_pot.status) {
      if (0 == godown_entry_get_warehouse_pot.count) {
        this.godown_entry_warehouse_pot_data = {};
      } else {
        var warehouse_pot_arr = new Array();
        var result = JSON.parse(godown_entry_get_warehouse_pot.result); 
        // console.log(result);
        for (var i = 0; i < result.length; i++) {
          warehouse_pot_arr.push({"warehouse_pot_name":result[i].name, "warehouse_pot_uuid":result[i].uuid});
        }
        this.godown_entry_warehouse_pot_data = warehouse_pot_arr;
      }
    } else {
      alert("获取库区失败");
      return;
    } 
  };
  
  /**
   * 添加入库单
   */
  this.godown_entry_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "godown_entry_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">添加入库单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">入库日期</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control entry_datetime" aria-label = "Amount (to the nearest dollar)">'+
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
  '                       <label for = "">皮重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control tare_weight" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">毛重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control gross_weight" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">净重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control net_weight" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class="col-md-6">'+
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
  '                   <label class = "">入库单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_entry_add_attch"></div>'+
  '                 </div>'+
  '               </div>'+
  '           </div>'+
  '           <div class = "modal-footer">'+
  '             <button type = "button" class = "btn btn-primary add_btn" data-vehicle_information_uuid = "' + this.vehicle_information_uuid + '">添加</button>'+
  '             <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  '     </div>';
    $("body").append(content);
    //储罐
    this.godown_entry_get_warehouse_pot();
    var workhouse_pot_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < this.godown_entry_warehouse_pot_data.length; i++) {
      workhouse_pot_select += '<option value = "' + this.godown_entry_warehouse_pot_data[i].warehouse_pot_uuid + '">' + this.godown_entry_warehouse_pot_data[i].warehouse_pot_name + '</option>'
      $("#godown_entry_add_modal select").html(workhouse_pot_select);
    }
    upload_attachment_edit_output("#godown_entry_add_attch");
    $("#godown_entry_add_modal").modal("show");
    $("#godown_entry_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_entry_add_data = function() {
    var entry_datetime = $("#godown_entry_add_modal .entry_datetime").val() + ' 00:00:00';
    var tare_weight = $("#godown_entry_add_modal .tare_weight").val();
    var gross_weight = $("#godown_entry_add_modal .gross_weight").val();
    var net_weight = $("#godown_entry_add_modal .net_weight").val();
    var warehouse_pot_uuid = $("#godown_entry_add_modal .warehouse_pot_uuid").val();
    var godown_entry_li = $("#godown_entry_add_attch ul").children("li");
    var godown_entry_list = "";
    for (var i = 0; i < godown_entry_li.length; i++) {
      var obj = godown_entry_li[i];
      var godown_entry = $(obj).find("a").attr("data-cluster");
      if (undefined != godown_entry) {
       godown_entry_list += godown_entry + ";"; 
      }    
    }
    // console.log(godown_entry_list);
    if (null == entry_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择入库日期！");
      return;
    }
    if ("" == tare_weight) {
      alert("请输入皮重！");
      return;
    } else {
      if (null == tare_weight.match(/^(\d+)(\.\d+)?$/)) {
        alert("皮重格式不正确！");
        return;
      }
    }
    if ("" == gross_weight) {
      alert("请输入毛重！");
      return;
    } else {
      if (null == gross_weight.match(/^(\d+)(\.\d+)?$/)) {
        alert("毛重格式不正确！");
        return;
      }
    }
    if ("" == net_weight) {
      alert("请输入净重！");
      return;
    } else {
      if (null == net_weight.match(/^(\d+)(\.\d+)?$/)) {
        alert("净重格式不正确！");
        return;
      }
    }
    if ("" == warehouse_pot_uuid) {
      alert("请选择储罐！");
      return;
    }
    var add_godown_entry_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addGodownEntry";
    var add_godown_entry_param_data = {};
    add_godown_entry_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    add_godown_entry_param_data["entry_datetime"] = entry_datetime;
    add_godown_entry_param_data["tare_weight"] = tare_weight;
    add_godown_entry_param_data["gross_weight"] = gross_weight;
    add_godown_entry_param_data["net_weight"] = net_weight;
    add_godown_entry_param_data["warehouse_pot_uuid"] = warehouse_pot_uuid;
    if("" != godown_entry_list) {
      add_godown_entry_param_data["cluster_list"] = godown_entry_list;
    }
    var godown_entry_add = ajax_assistant(add_godown_entry_url, add_godown_entry_param_data, false, true, false);
    // console.log(godown_entry_add);
    if (1 == godown_entry_add.status) {
      $("#godown_entry_add_modal").modal("hide");
      this.godown_entry_clear_raw_data(this.vehicle_information_uuid);
      this.godown_entry_server_data_cover(this.vehicle_information_uuid);
      this.godown_entry_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改入库单
   */
  this.godown_entry_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "godown_entry_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改入库单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">入库日期</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control entry_datetime" value = "' + this.current_godown_entry_data.entry_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
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
  '                       <label for = "">皮重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control tare_weight" value = "' + this.current_godown_entry_data.tare_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">毛重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control gross_weight" value = "' + this.current_godown_entry_data.gross_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">净重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control net_weight" value = "' + this.current_godown_entry_data.net_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class="col-md-6">'+
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
  '                   <label class = "">入库单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_entry_edit_attch"></div>'+
  '                 </div>'+
  '               </div>'+
  '           </div>'+
  '           <div class = "modal-footer">'+
  '             <button type = "button" class = "btn btn-warning edit_btn" data-uuid = "' + uuid + '" data-vehicle_information_uuid = "' + this.vehicle_information_uuid + '">修改</button>'+
  '             <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  '     </div>';
    $("body").append(content);
    //储罐
    this.godown_entry_get_warehouse_pot();
    var workhouse_pot_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < this.godown_entry_warehouse_pot_data.length; i++) {
      workhouse_pot_select += '<option value = "' + this.godown_entry_warehouse_pot_data[i].warehouse_pot_uuid + '">' + this.godown_entry_warehouse_pot_data[i].warehouse_pot_name + '</option>'
      $("#godown_entry_edit_modal select").html(workhouse_pot_select);
    }
    for (var i = 0; i < $("#godown_entry_edit_modal select option").length; i++) {
      var warehouse_pot_uuid = this.current_godown_entry_data.warehouse_pot_uuid;
      var value = $("#godown_entry_edit_modal select option").eq(i).val();
      // console.log(warehouse_pot_uuid);
      if($("#godown_entry_edit_modal select option").eq(i).val() == warehouse_pot_uuid) {
        $("#godown_entry_edit_modal select option").eq(i).prop('selected','selected');
        break;
      }
    }
    upload_attachment_edit_output("#godown_entry_edit_attch", this.godown_entry_file_data);
    $("#godown_entry_edit_modal").modal("show");
    $("#godown_entry_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_entry_edit_data = function(uuid) {
    var entry_datetime = $("#godown_entry_edit_modal .entry_datetime").val() + ' 00:00:00';
    var tare_weight = $("#godown_entry_edit_modal .tare_weight").val();
    var gross_weight = $("#godown_entry_edit_modal .gross_weight").val();
    var net_weight = $("#godown_entry_edit_modal .net_weight").val();
    var warehouse_pot_uuid = $("#godown_entry_edit_modal .warehouse_pot_uuid").val();
    var godown_entry_li = $("#godown_entry_edit_modal ul").children("li");
    var godown_entry_list = "";
    for (var i = 0; i < godown_entry_li.length; i++) {
      var obj = godown_entry_li[i];
      var godown_entry = $(obj).find("a").attr("data-cluster");
      if (undefined != godown_entry) {
       godown_entry_list += godown_entry + ";"; 
      }    
    }
    // console.log(godown_entry_list);
    if (null == entry_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择入库日期！");
      return;
    }
    if ("" == tare_weight) {
      alert("请输入皮重！");
      return;
    } else {
      if (null == tare_weight.match(/^(\d+)(\.\d+)?$/)) {
        alert("皮重格式不正确！");
        return;
      }
    }
    if ("" == gross_weight) {
      alert("请输入毛重！");
      return;
    } else {
      if (null == gross_weight.match(/^(\d+)(\.\d+)?$/)) {
        alert("毛重格式不正确！");
        return;
      }
    }
    if ("" == net_weight) {
      alert("请输入净重！");
      return;
    } else {
      if (null == net_weight.match(/^(\d+)(\.\d+)?$/)) {
        alert("净重格式不正确！");
        return;
      }
    }
    if ("" == warehouse_pot_uuid) {
      alert("请选择储罐！");
      return;
    }
    var edit_godown_entry_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyGodownEntry";
    var edit_godown_entry_param_data = {};
    edit_godown_entry_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    edit_godown_entry_param_data["idColumnValue"] = uuid;
    edit_godown_entry_param_data["entry_datetime"] = entry_datetime;
    edit_godown_entry_param_data["tare_weight"] = tare_weight;
    edit_godown_entry_param_data["gross_weight"] = gross_weight;
    edit_godown_entry_param_data["net_weight"] = net_weight;
    edit_godown_entry_param_data["warehouse_pot_uuid"] = warehouse_pot_uuid;
    if("" != godown_entry_list) {
      edit_godown_entry_param_data["newClusterList"] = godown_entry_list;
    }
    var godown_entry_edit = ajax_assistant(edit_godown_entry_url, edit_godown_entry_param_data, false, true, false);
    // console.log(godown_entry_edit);
    if (1 == godown_entry_edit.status) {
      $("#godown_entry_edit_modal").modal("hide");
      this.godown_entry_clear_raw_data(this.vehicle_information_uuid);
      this.godown_entry_server_data_cover(this.vehicle_information_uuid);
      this.godown_entry_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 入库单详情
   */
  this.godown_entry_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "godown_entry_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">入库单详情</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">入库日期</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control entry_datetime" disabled = "disabled" value = "' + this.current_godown_entry_data.entry_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
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
  '                       <label for = "">皮重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control tare_weight" disabled = "disabled" value = "' + this.current_godown_entry_data.tare_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">毛重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control gross_weight" disabled = "disabled" value = "' + this.current_godown_entry_data.gross_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">净重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control net_weight" disabled = "disabled" value = "' + this.current_godown_entry_data.net_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class="col-md-6">'+
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
  '                   <label class = "">入库单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_entry_detail_attch"></div>'+
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
    this.godown_entry_get_warehouse_pot();
    var workhouse_pot_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < this.godown_entry_warehouse_pot_data.length; i++) {
      workhouse_pot_select += '<option value = "' + this.godown_entry_warehouse_pot_data[i].warehouse_pot_uuid + '">' + this.godown_entry_warehouse_pot_data[i].warehouse_pot_name + '</option>'
      $("#godown_entry_detail_modal select").html(workhouse_pot_select);
    }
    for (var i = 0; i < $("#godown_entry_detail_modal select option").length; i++) {
      var warehouse_pot_uuid = this.current_godown_entry_data.warehouse_pot_uuid;
      var value = $("#godown_entry_detail_modal select option").eq(i).val();
      // console.log(warehouse_pot_uuid);
      if ($("#godown_entry_detail_modal select option").eq(i).val() == warehouse_pot_uuid) {
        $("#godown_entry_detail_modal select option").eq(i).prop('selected','selected');
        break;
      }
    }
    upload_attachment_preview_output("#godown_entry_detail_attch", this.godown_entry_file_data);
    $("#godown_entry_detail_modal").modal("show");
    $("#godown_entry_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除入库单
   */
  this.godown_entry_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="godown_entry_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除入库单确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除入库单吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-vehicle_information_uuid = "' + this.vehicle_information_uuid + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#godown_entry_delete_modal").modal("show");
    $("#godown_entry_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_entry_delete_data = function(uuid) {
    var delete_godown_entry_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeGodownEntry";
    var delete_godown_entry_param_data = {};
    delete_godown_entry_param_data["idColumnValue"] = uuid;
    delete_godown_entry_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var godown_entry_delete_godown_entry= ajax_assistant(delete_godown_entry_url, delete_godown_entry_param_data, false, true, false);
    // console.log(godown_entry_delete_godown_entry);
    if (1 == godown_entry_delete_godown_entry.status) {
      $("#godown_entry_delete_modal").modal("hide");
      this.godown_entry_clear_raw_data(this.vehicle_information_uuid);
      this.godown_entry_server_data_cover(this.vehicle_information_uuid);
      this.godown_entry_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 入库单输出
   * @param output_id
   */
  this.godown_entry_content = function() {
    var content = 
  '   <div class = "panel panel-primary ">'+
  '    <div class = "panel-heading clearfix" id = "godown_entry_paid"><span class = "paid">入库单&nbsp;[净重总量&nbsp;:&nbsp;0]&nbsp;</span><span class = "glyphicon glyphicon-plus pull-right" id = "godown_entry_add_modal_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "godown_entry_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>入库日期</th>'+
  '                  <th>皮重（吨）</th>'+
  '                  <th>毛重（吨）</th>'+
  '                  <th>净重（吨）</th>'+
  '                  <th>储罐</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "godown_entry_ml15_box">'+
  '                <tr>'+
  '                  <td>2017-05-14</td>'+
  '                  <td>10</td>'+
  '                  <td>10</td>'+
  '                  <td>10</td>'+
  '                  <td>储罐1</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign godown_entry_ml15 godown_entry_detail"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil godown_entry_ml15 godown_entry_edit"></span>'+
  '                    <span class = "glyphicon glyphicon-remove godown_entry_ml15 godown_entry_delete"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.godown_exit_content_id).html(content);
  };
}