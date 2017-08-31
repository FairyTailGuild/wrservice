/**
 * @author yangyongxia
 */

function godownExit(vehicle_information_uuid, godown_exit_content_id) {
  this.vehicle_information_uuid = vehicle_information_uuid;
  this.godown_exit_content_id = godown_exit_content_id;
  this.godown_exit_data = [
    {"plan_quantity": "10","actual_quantity": "10","tare_weight": "10","gross_weight": "10","exit_datetime": "2017-03-25","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"plan_quantity": "10","actual_quantity": "10","tare_weight": "10","gross_weight": "10","exit_datetime": "2017-03-25","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"plan_quantity": "10","actual_quantity": "10","tare_weight": "10","gross_weight": "10","exit_datetime": "2017-03-25","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"plan_quantity": "10","actual_quantity": "10","tare_weight": "10","gross_weight": "10","exit_datetime": "2017-03-25","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"plan_quantity": "10","actual_quantity": "10","tare_weight": "10","gross_weight": "10","exit_datetime": "2017-03-25","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
  ];
  
  this.current_godown_exit_data = {
    "plan_quantity": "10",
    "actual_quantity": "10",
    "tare_weight": "10",
    "gross_weight": "10",
    "exit_datetime": "2017-03-25",
    "uuid": "11",
    "vehicle_information_uuid": "ZS-TZGYL-17813261"
  };
  
  this.godown_exit_file_data = [
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
  ];
  
  this.godown_exit_plan_quantity_count = 0;
  this.godown_exit_actual_quantity_count = 0;
  
  /**
   * 初始化
   */
  this.godown_exit_clear_raw_data = function() {
    $(this.godown_exit_content_id).find("#godown_exit_list tbody").html("");
    this.godown_exit_plan_quantity_count = 0;
    this.godown_exit_actual_quantity_count = 0;
    $(this.godown_exit_content_id).find("#godown_exit_paid span.paid").html('出库单&nbsp;[计划量总量&nbsp;:&nbsp;0][实发量总量&nbsp;:&nbsp;0]&nbsp;');
  };
  
  /**
   * 赋值
   */
  this.godown_exit_fill_variable_data = function() {
    $(this.godown_exit_content_id).find("#godown_exit_paid span.paid").html('出库单&nbsp;[计划量总量&nbsp;:&nbsp;' + this.godown_exit_plan_quantity_count + '][实发量总量&nbsp;:&nbsp;' + this.godown_exit_actual_quantity_count + ']&nbsp;');
    if (isJsonObjectHasData(this.godown_exit_data)) {
  //  var godown_exit_thead  = 
  //    '<tr>'+
  //      '<th>提货地点</th>'+
  //      '<th>提货时间</th>'+
  //      '<th>&nbsp;</th>'+
  //    '</tr>';
      var godown_exit_tbody = "";
      for (var i = 0; i < this.godown_exit_data.length; i++) {
        godown_exit_tbody += 
          '<tr>'+
            '<td>' + this.godown_exit_data[i].plan_quantity + '</td>'+
            '<td>' + this.godown_exit_data[i].actual_quantity + '</td>'+
            '<td>' + this.godown_exit_data[i].tare_weight + '</td>'+
            '<td>' + this.godown_exit_data[i].gross_weight + '</td>'+
            '<td>' + this.godown_exit_data[i].exit_datetime + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign godown_exit_ml15 godown_exit_detail" data-uuid = "' + this.godown_exit_data[i].uuid + '" data-vehicle_information_uuid = "' + this.godown_exit_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil godown_exit_ml15 godown_exit_edit" data-uuid = "' + this.godown_exit_data[i].uuid + '" data-vehicle_information_uuid = "' + this.godown_exit_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-remove godown_exit_ml15 godown_exit_delete" data-uuid = "' + this.godown_exit_data[i].uuid + '" data-vehicle_information_uuid = "' + this.godown_exit_data[i].vehicle_information_uuid + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.godown_exit_content_id).find("#godown_exit_list tbody").html(godown_exit_tbody);  
      }
    } else {
      $(this.godown_exit_content_id).find("#godown_exit_list tbody").html('<tr><td colspan="6" align="center">没数据</td></tr>');
    }
  };
  
  /**
   * 获取出库单
   */
  this.godown_exit_server_data_cover = function() {
    var get_godown_exit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGodownExit";
    var get_godown_exit_param_data = {};
    get_godown_exit_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var godown_exit_get= ajax_assistant(get_godown_exit_url, get_godown_exit_param_data, false, true, false);
    // console.log(godown_exit_get);
    if (1 == godown_exit_get.status) {
      if (0 == godown_exit_get.count) {
        this.godown_exit_data = {};
      } else {
        var result = JSON.parse(godown_exit_get.result);
        // console.log(result);
        var godown_exit_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          var godown_exit_plan_quantity_count_one = Number(result[i].plan_quantity);
          var godown_exit_actual_quantity_count_one = Number(result[i].actual_quantity);
          this.godown_exit_plan_quantity_count = this.godown_exit_plan_quantity_count + godown_exit_plan_quantity_count_one;
          this.godown_exit_actual_quantity_count = this.godown_exit_actual_quantity_count + godown_exit_actual_quantity_count_one
          var exit_datetime = result[i].exit_datetime.substring(0,result[i].exit_datetime.indexOf(" "));
          godown_exit_data_arr.push({"plan_quantity": result[i].plan_quantity,"actual_quantity": result[i].actual_quantity,"tare_weight": result[i].tare_weight,"gross_weight": result[i].gross_weight,"exit_datetime": exit_datetime,"uuid": result[i].uuid,"vehicle_information_uuid": result[i].vehicle_information_uuid});
        }
      }
      this.godown_exit_data = godown_exit_data_arr;
    }
  };
  
  
  /**
   * 获取出库单详情
   */
  this.godown_exit_get_letter = function(uuid) {
    // console.log(uuid);
    var get_godown_exit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGodownExit";
    var get_godown_exit_param_data = {};
    get_godown_exit_param_data["uuid"] = uuid;
    var godown_exit_get= ajax_assistant(get_godown_exit_url, get_godown_exit_param_data, false, true, false);
    // console.log(godown_exit_get);
    if (1 == godown_exit_get.status) {
      var result = JSON.parse(godown_exit_get.result);
      // console.log(result);
      var exit_datetime = result[0].exit_datetime.substring(0,result[0].exit_datetime.indexOf(" "));
      this.current_godown_exit_data = {"plan_quantity": result[0].plan_quantity,"actual_quantity": result[0].actual_quantity,"tare_weight": result[0].tare_weight,"gross_weight": result[0].gross_weight,"exit_datetime": exit_datetime,"uuid": result[0].uuid,"vehicle_information_uuid": result[0].vehicle_information_uuid};
      var godown_exit_file_arr = new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        // console.log(cluster_list);
        var godown_exit_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var get_godown_exit_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var get_godown_exit_file_param_data = {};
          get_godown_exit_file_param_data["cluster_name"] = cluster_list[j];
          var get_godown_exit_file = ajax_assistant(get_godown_exit_file_url, get_godown_exit_file_param_data, false, true, false);
          // console.log(get_godown_exit_file);
          if (1 == get_godown_exit_file.status) {
            var godown_exit_file_result = JSON.parse(get_godown_exit_file.result);
            // console.log(godown_exit_file_result);
            var godown_exit_cluster_name = godown_exit_file_result[0].cluster_name;
            var godown_exit_suffix = godown_exit_file_result[0].suffix;
            var file_name = godown_exit_cluster_name + '.' + godown_exit_suffix;
            godown_exit_file_arr.push({"file_name": file_name});
          }
        }
        this.godown_exit_file_data = godown_exit_file_arr;
      } else {
        this.godown_exit_file_data = {};
      }
    }
  };
  
  /**
   * 添加出库单
   */
  this.godown_exit_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "godown_exit_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">添加出库单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">计划量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control plan_quantity" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">实发量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control actual_quantity" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
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
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">出库日期</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control exit_datetime" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">出库单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_exit_add_attch"></div>'+
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
    upload_attachment_edit_output("#godown_exit_add_attch");
    $("#godown_exit_add_modal").modal("show");
    $("#godown_exit_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_exit_add_data = function() {
    var plan_quantity = $("#godown_exit_add_modal .plan_quantity").val();
    var actual_quantity = $("#godown_exit_add_modal .actual_quantity").val();
    var tare_weight = $("#godown_exit_add_modal .tare_weight").val();
    var gross_weight = $("#godown_exit_add_modal .gross_weight").val();
    var exit_datetime = $("#godown_exit_add_modal .exit_datetime").val() + ' 00:00:00';
    var godown_exit_li = $("#godown_exit_add_attch ul").children("li");
    var godown_exit_list = "";
    for (var i = 0; i < godown_exit_li.length; i++) {
      var obj = godown_exit_li[i];
      var godown_exit = $(obj).find("a").attr("data-cluster");
      if (undefined != godown_exit) {
       godown_exit_list += godown_exit + ";"; 
      }    
    }
    if ("" == plan_quantity) {
      alert("请输入计划量！");
      return;
    } else {
      if (null == plan_quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("计划量格式不正确！");
        return;
      }
    }
    if ("" == actual_quantity) {
      alert("请输入实发量！");
      return;
    } else {
      if (null == actual_quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("实发量格式不正确！");
        return;
      }
    }
    // console.log(godown_exit_list);
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
    if (null == exit_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择出库日期！");
      return;
    }
    var add_godown_exit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addGodownExit";
    var add_godown_exit_param_data = {};
    add_godown_exit_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    add_godown_exit_param_data["plan_quantity"] = plan_quantity;
    add_godown_exit_param_data["actual_quantity"] = actual_quantity;
    add_godown_exit_param_data["tare_weight"] = tare_weight;
    add_godown_exit_param_data["gross_weight"] = gross_weight;
    add_godown_exit_param_data["exit_datetime"] = exit_datetime;
    if("" != godown_exit_list) {
      add_godown_exit_param_data["cluster_list"] = godown_exit_list;
    }
    var godown_exit_add = ajax_assistant(add_godown_exit_url, add_godown_exit_param_data, false, true, false);
    // console.log(godown_exit_add);
    if (1 == godown_exit_add.status) {
      $("#godown_exit_add_modal").modal("hide");
      this.godown_exit_clear_raw_data(this.vehicle_information_uuid);
      this.godown_exit_server_data_cover(this.vehicle_information_uuid);
      this.godown_exit_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改出库单
   */
  this.godown_exit_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "godown_exit_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改出库单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">计划量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control plan_quantity" value = "' + this.current_godown_exit_data.plan_quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">实发量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control actual_quantity" value = "' + this.current_godown_exit_data.actual_quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">皮重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control tare_weight" value = "' + this.current_godown_exit_data.tare_weight + '" aria-label = "Amount (to the nearest dollar)">'+
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
  '                         <input type = "text" class = "form-control gross_weight" value = "' + this.current_godown_exit_data.gross_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">出库日期</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control exit_datetime" value = "' + this.current_godown_exit_data.exit_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">出库单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_exit_edit_attch"></div>'+
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
    upload_attachment_edit_output("#godown_exit_edit_attch", this.godown_exit_file_data);
    $("#godown_exit_edit_modal").modal("show");
    $("#godown_exit_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_exit_edit_data = function(uuid) {
    var plan_quantity = $("#godown_exit_edit_modal .plan_quantity").val();
    var actual_quantity = $("#godown_exit_edit_modal .actual_quantity").val();
    var tare_weight = $("#godown_exit_edit_modal .tare_weight").val();
    var gross_weight = $("#godown_exit_edit_modal .gross_weight").val();
    var exit_datetime = $("#godown_exit_edit_modal .exit_datetime").val() + ' 00:00:00';
    var godown_exit_li = $("#godown_exit_edit_modal ul").children("li");
    var godown_exit_list = "";
    for (var i = 0; i < godown_exit_li.length; i++) {
      var obj = godown_exit_li[i];
      var godown_exit = $(obj).find("a").attr("data-cluster");
      if (undefined != godown_exit) {
       godown_exit_list += godown_exit + ";"; 
      }    
    }
    if ("" == plan_quantity) {
      alert("请输入计划量！");
      return;
    } else {
      if (null == plan_quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("计划量格式不正确！");
        return;
      }
    }
    if ("" == actual_quantity) {
      alert("请输入实发量！");
      return;
    } else {
      if (null == actual_quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("实发量格式不正确！");
        return;
      }
    }
    // console.log(godown_exit_list);
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
    if (null == exit_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择出库日期！");
      return;
    }
    var edit_godown_exit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyGodownExit";
    var edit_godown_exit_param_data = {};
    edit_godown_exit_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    edit_godown_exit_param_data["idColumnValue"] = uuid;
    edit_godown_exit_param_data["plan_quantity"] = plan_quantity;
    edit_godown_exit_param_data["actual_quantity"] = actual_quantity;
    edit_godown_exit_param_data["tare_weight"] = tare_weight;
    edit_godown_exit_param_data["gross_weight"] = gross_weight;
    edit_godown_exit_param_data["exit_datetime"] = exit_datetime;
    if("" != godown_exit_list) {
      edit_godown_exit_param_data["newClusterList"] = godown_exit_list;
    }
    var godown_exit_edit = ajax_assistant(edit_godown_exit_url, edit_godown_exit_param_data, false, true, false);
    // console.log(godown_exit_edit);
    if (1 == godown_exit_edit.status) {
      $("#godown_exit_edit_modal").modal("hide");
      this.godown_exit_clear_raw_data(this.vehicle_information_uuid);
      this.godown_exit_server_data_cover(this.vehicle_information_uuid);
      this.godown_exit_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 出库单详情
   */
  this.godown_exit_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "godown_exit_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">出库单详情</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">计划量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control plan_quantity" disabled = "disabled" value = "' + this.current_godown_exit_data.plan_quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">实发量</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control actual_quantity" disabled = "disabled" value = "' + this.current_godown_exit_data.actual_quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">皮重</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "form-control tare_weight" disabled = "disabled" value = "' + this.current_godown_exit_data.tare_weight + '" aria-label = "Amount (to the nearest dollar)">'+
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
  '                         <input type = "text" class = "form-control gross_weight" disabled = "disabled" value = "' + this.current_godown_exit_data.gross_weight + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class="input-group-addon">吨</span>'+
  '                       </div>'+      
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">出库日期</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control exit_datetime" disabled = "disabled" value = "' + this.current_godown_exit_data.exit_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">出库单附件</label>'+
  '                   <div class = "panel panel-default" id = "godown_exit_detail_attch"></div>'+
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
    upload_attachment_preview_output("#godown_exit_detail_attch", this.godown_exit_file_data);
    $("#godown_exit_detail_modal").modal("show");
    $("#godown_exit_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除出库单
   */
  this.godown_exit_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="godown_exit_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除出库单确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除出库单吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-vehicle_information_uuid = "' + vehicle_information_uuid + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#godown_exit_delete_modal").modal("show");
    $("#godown_exit_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.godown_exit_delete_data = function(uuid) {
    var delete_godown_exit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeGodownExit";
    var delete_godown_exit_param_data = {};
    delete_godown_exit_param_data["idColumnValue"] = uuid;
    delete_godown_exit_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var godown_exit_delete_godown_exit= ajax_assistant(delete_godown_exit_url, delete_godown_exit_param_data, false, true, false);
    // console.log(godown_exit_delete_godown_exit);
    if (1 == godown_exit_delete_godown_exit.status) {
      $("#godown_exit_delete_modal").modal("hide");
      this.godown_exit_clear_raw_data(this.vehicle_information_uuid);
      this.godown_exit_server_data_cover(this.vehicle_information_uuid);
      this.godown_exit_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 出库单输出
   * @param output_id
   */
  this.godown_exit_content = function() {
    var content = 
  '   <div class = "panel panel-primary ">'+
  '    <div class = "panel-heading clearfix" id = "godown_exit_paid"><span class = "paid">出库单&nbsp;[净重总量&nbsp;:&nbsp;0]&nbsp;</span><span class = "glyphicon glyphicon-plus pull-right" id = "godown_exit_add_modal_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "godown_exit_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>计划量（吨）</th>'+
  '                  <th>实发量（吨）</th>'+
  '                  <th>皮重（吨）</th>'+
  '                  <th>毛重（吨）</th>'+
  '                  <th>出货日期</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "godown_exit_ml15_box">'+
  '                <tr>'+
  '                  <td>10</td>'+
  '                  <td>10</td>'+
  '                  <td>10</td>'+
  '                  <td>10</td>'+
  '                  <td>2017-05-14</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign godown_exit_ml15 godown_exit_detail"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil godown_exit_ml15 godown_exit_edit"></span>'+
  '                    <span class = "glyphicon glyphicon-remove godown_exit_ml15 godown_exit_delete"></span>'+
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