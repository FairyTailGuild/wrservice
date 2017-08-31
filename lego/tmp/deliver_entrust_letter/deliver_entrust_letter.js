/**
 * @author yangyongxia
 */

function deliverEntrustLetter(contract_buy_contract_code, deliver_entrust_letter_content_id){
  this.contract_buy_contract_code = contract_buy_contract_code;
  this.deliver_entrust_letter_content_id = deliver_entrust_letter_content_id;
  
  this.deliver_entrust_letter_data = [
    {"place": "舟山","deliver_datetime": "2017-03-25","uuid": "11","contract_code": "ZS-TZGYL-17813261"},
    {"place": "纳海","deliver_datetime": "2017-03-25","uuid": "12","contract_code": "ZS-TZGYL-17813261"},
    {"place": "泰州","deliver_datetime": "2017-03-25","uuid": "13","contract_code": "ZS-TZGYL-17813261"},
    {"place": "锦华","deliver_datetime": "2017-03-25","uuid": "14","contract_code": "ZS-TZGYL-17813261"},
  ];
  
  this.current_deliver_entrust_letter_data = {
    "place": "舟山",
    "start_deliver_datetime": "2017-03-25",
    "uuid": "11",
    "contract_code": "ZS-TZGYL-17813261"
  };
  
  this.deliver_entrust_letter_file_data = [
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
  this.deliver_entrust_letter_clear_raw_data = function() {
    $(this.deliver_entrust_letter_content_id).find("#deliver_entrust_letter_list tbody").html("");
  };
  
  /**
   * 赋值
   */
  this.deliver_entrust_letter_fill_variable_data = function() {
    if (isJsonObjectHasData(this.deliver_entrust_letter_data)) {
      var deliver_entrust_letter_tbody = "";
      for (var i = 0; i < this.deliver_entrust_letter_data.length; i++) {
        deliver_entrust_letter_tbody += 
          '<tr>'+
            '<td>' + this.deliver_entrust_letter_data[i].place + '</td>'+
            '<td>' + this.deliver_entrust_letter_data[i].deliver_datetime + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign deliver_entrust_letter_ml15 deliver_entrust_letter_detail" data-uuid = "' + this.deliver_entrust_letter_data[i].uuid + '" data-contract_code = "' + this.deliver_entrust_letter_data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil deliver_entrust_letter_ml15 deliver_entrust_letter_edit" data-uuid = "' + this.deliver_entrust_letter_data[i].uuid + '" data-contract_code = "' + this.deliver_entrust_letter_data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-remove deliver_entrust_letter_ml15 deliver_entrust_letter_delete" data-uuid = "' + this.deliver_entrust_letter_data[i].uuid + '" data-contract_code = "' + this.deliver_entrust_letter_data[i].contract_code + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.deliver_entrust_letter_content_id).find("#deliver_entrust_letter_list tbody").html(deliver_entrust_letter_tbody);  
      }
    } else {
      $(this.deliver_entrust_letter_content_id).find("#deliver_entrust_letter_list tbody").html("<tr><td colspan='3' align='center'>没数据</td></tr>");
    }
  };
  
  /**
   * 获取提货委托函
   */
  this.deliver_entrust_letter_server_data_cover = function() {
    var get_deliver_entrust_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getDeliverEntrustLetter";
    var get_deliver_entrust_letter_param_data = {};
    get_deliver_entrust_letter_param_data["contract_code"] = this.contract_buy_contract_code;
    var deliver_entrust_letter_get= ajax_assistant(get_deliver_entrust_letter_url, get_deliver_entrust_letter_param_data, false, true, false);
    ////console.log(deliver_entrust_letter_get);
    if (1 == deliver_entrust_letter_get.status) {
      if (0 == deliver_entrust_letter_get.count) {
        this.deliver_entrust_letter_data = {};
      } else {
        var result = JSON.parse(deliver_entrust_letter_get.result);
        ////console.log(result);
        var deliver_entrust_letter_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          var deliver_datetime = result[i].deliver_datetime.substring(0,result[i].deliver_datetime.indexOf(" "));
          deliver_entrust_letter_data_arr.push({"place": result[i].place,"deliver_datetime": deliver_datetime,"uuid": result[i].uuid,"contract_code": result[i].contract_code});
        }
        this.deliver_entrust_letter_data = deliver_entrust_letter_data_arr;
      }
    }
  };
  
  /**
   * 获取提货委托函详情
   */
  this.deliver_entrust_letter_get_letter = function(uuid) {
    ////console.log(uuid);
    var get_deliver_entrust_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getDeliverEntrustLetter";
    var get_deliver_entrust_letter_param_data = {};
    get_deliver_entrust_letter_param_data["uuid"] = uuid;
    var deliver_entrust_letter_get= ajax_assistant(get_deliver_entrust_letter_url, get_deliver_entrust_letter_param_data, false, true, false);
    ////console.log(deliver_entrust_letter_get);
    if (1 == deliver_entrust_letter_get.status) {
      var result = JSON.parse(deliver_entrust_letter_get.result);
      //console.log(result);
      var deliver_datetime = result[0].deliver_datetime.substring(0,result[0].deliver_datetime.indexOf(" "));
      this.current_deliver_entrust_letter_data = {"place": result[0].place,"deliver_datetime": deliver_datetime,"uuid": result[0].uuid,"contract_code": result[0].contract_code};
      var deliver_entrust_letter_file_arr =new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        //console.log(cluster_list);
        var deliver_entrust_letter_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var enterprise_management_get_deliver_entrust_letter_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var enterprise_management_get_deliver_entrust_letter_file_param_data = {};
          enterprise_management_get_deliver_entrust_letter_file_param_data["cluster_name"] = cluster_list[j];
          var enterprise_management_get_deliver_entrust_letter_file = ajax_assistant(enterprise_management_get_deliver_entrust_letter_file_url, enterprise_management_get_deliver_entrust_letter_file_param_data, false, true, false);
          //console.log(enterprise_management_get_deliver_entrust_letter_file);
          if (1 == enterprise_management_get_deliver_entrust_letter_file.status) {
            var deliver_entrust_letter_file_result = JSON.parse(enterprise_management_get_deliver_entrust_letter_file.result);
            //console.log(deliver_entrust_letter_file_result);
            var deliver_entrust_letter_cluster_name = deliver_entrust_letter_file_result[0].cluster_name;
            var deliver_entrust_letter_suffix = deliver_entrust_letter_file_result[0].suffix;
            var file_name = deliver_entrust_letter_cluster_name + '.' + deliver_entrust_letter_suffix;
            deliver_entrust_letter_file_arr.push({"file_name": file_name});
          }
        }
        this.deliver_entrust_letter_file_data = deliver_entrust_letter_file_arr;
      } else {
        this.deliver_entrust_letter_file_data = {}
      }
    }
  };
  
  /**
   * 添加提货委托函
   */
  this.deliver_entrust_letter_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "deliver_entrust_letter_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">添加提货委托函</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">提货地点</label>'+
  '                       <input type = "text" class = "form-control place" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">提货时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control deliver_datetime" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">提货委托函附件</label>'+
  '                   <div class = "panel panel-default" id = "deliver_entrust_letter_add_attch"></div>'+
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
    upload_attachment_edit_output("#deliver_entrust_letter_add_attch");
    $("#deliver_entrust_letter_add_modal").modal("show");
    $("#deliver_entrust_letter_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.deliver_entrust_letter_add_data = function() {
    var place = $("#deliver_entrust_letter_add_modal .place").val();
    var deliver_datetime = $("#deliver_entrust_letter_add_modal .deliver_datetime").val() + ' 00:00:00';
    var deliver_entrust_letter_li = $("#deliver_entrust_letter_add_attch ul").children("li");
    var deliver_entrust_letter_list = "";
    for (var i = 0; i < deliver_entrust_letter_li.length; i++) {
      var obj = deliver_entrust_letter_li[i];
      var deliver_entrust_letter = $(obj).find("a").attr("data-cluster");
      if (undefined != deliver_entrust_letter) {
       deliver_entrust_letter_list += deliver_entrust_letter + ";"; 
      }    
    }
    //console.log(deliver_datetime);
    //console.log(deliver_entrust_letter_list);
    if ("" == place) {
      alert("请输入提货地点！");
      return;
    } else {
      if (null == place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("提货地点格式不正确！");
        return;
      }
    }
    if (null == deliver_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择提货时间！");
      return;
    }
    var add_deliver_entrust_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addDeliverEntrustLetter";
    var add_deliver_entrust_letter_param_data = {};
    add_deliver_entrust_letter_param_data["contract_code"] = this.contract_buy_contract_code;
    add_deliver_entrust_letter_param_data["place"] = place;
    add_deliver_entrust_letter_param_data["deliver_datetime"] = deliver_datetime;
    if("" != deliver_entrust_letter_list) {
      add_deliver_entrust_letter_param_data["cluster_list"] = deliver_entrust_letter_list;
    }
    var deliver_entrust_letter_add = ajax_assistant(add_deliver_entrust_letter_url, add_deliver_entrust_letter_param_data, false, true, false);
    //console.log(deliver_entrust_letter_add);
    if (1 == deliver_entrust_letter_add.status) {
      $("#deliver_entrust_letter_add_modal").modal("hide");
      this.deliver_entrust_letter_server_data_cover();
      this.deliver_entrust_letter_fill_variable_data();
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改提货委托函
   */
  this.deliver_entrust_letter_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "deliver_entrust_letter_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改提货委托函</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">提货地点</label>'+
  '                       <input type = "text" class = "form-control place" value = "' + this.current_deliver_entrust_letter_data.place + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">提货时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control start_deliver_datetime" value = "' + this.current_deliver_entrust_letter_data.deliver_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">提货委托函附件</label>'+
  '                   <div class = "panel panel-default" id = "deliver_entrust_letter_edit_attch"></div>'+
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
    upload_attachment_edit_output("#deliver_entrust_letter_edit_attch", this.deliver_entrust_letter_file_data);
    $("#deliver_entrust_letter_edit_modal").modal("show");
    $("#deliver_entrust_letter_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.deliver_entrust_letter_edit_data = function(uuid) {
    //console.log(uuid);
    var place = $("#deliver_entrust_letter_edit_modal .place").val();
    var deliver_datetime = $("#deliver_entrust_letter_edit_modal .start_deliver_datetime").val() + ' 00:00:00';
    var deliver_entrust_letter_li = $("#deliver_entrust_letter_edit_attch ul").children("li");
    var deliver_entrust_letter_list = "";
    for (var i = 0; i < deliver_entrust_letter_li.length; i++) {
      var obj = deliver_entrust_letter_li[i];
      var deliver_entrust_letter = $(obj).find("a").attr("data-cluster");
      if (undefined != deliver_entrust_letter) {
        deliver_entrust_letter_list += deliver_entrust_letter + ";"; 
      }    
    }
    //console.log(deliver_entrust_letter_list);
    if ("" == place) {
      alert("请输入提货地点！");
      return;
    } else {
      if (null == place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("提货地点格式不正确！");
        return;
      }
    }
    if (null == deliver_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择提货时间！");
      return;
    }
    var edit_deliver_entrust_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyDeliverEntrustLetter";
    var edit_deliver_entrust_letter_param_data = {};
    edit_deliver_entrust_letter_param_data["contract_code"] = this.contract_buy_contract_code;
    edit_deliver_entrust_letter_param_data["idColumnValue"] = uuid;
    edit_deliver_entrust_letter_param_data["place"] = place;
    edit_deliver_entrust_letter_param_data["deliver_datetime"] = deliver_datetime;
    if ("" != deliver_entrust_letter_list) {
      edit_deliver_entrust_letter_param_data["newClusterList"] = deliver_entrust_letter_list;
    }
    var deliver_entrust_letter_edit= ajax_assistant(edit_deliver_entrust_letter_url, edit_deliver_entrust_letter_param_data, false, true, false);
    //console.log(deliver_entrust_letter_edit);
    if (1 == deliver_entrust_letter_edit.status) {
      $("#deliver_entrust_letter_edit_modal").modal("hide");
      this.deliver_entrust_letter_server_data_cover();
      this.deliver_entrust_letter_fill_variable_data();
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 提货委托函详情
   */
  this.deliver_entrust_letter_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "deliver_entrust_letter_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">提货委托函详情</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">提货地点</label>'+
  '                       <input type = "text" class = "form-control place" disabled = "disabled" value = "' + this.current_deliver_entrust_letter_data.place + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-6">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">提货时间</label>'+
  '                       <div class = "input-group">'+
  '                         <input type = "text" class = "widget_datepicker form-control start_deliver_datetime" disabled = "disabled" value = "' + this.current_deliver_entrust_letter_data.deliver_datetime + '" aria-label = "Amount (to the nearest dollar)">'+
  '                         <span class = "input-group-addon">'+
  '                           <span class = "glyphicon glyphicon-calendar"></span>'+
  '                         </span>'+
  '                       </div>'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">提货委托函附件</label>'+
  '                   <div class = "panel panel-default" id = "deliver_entrust_letter_detail_attch"></div>'+
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
    upload_attachment_preview_output("#deliver_entrust_letter_detail_attch", this.deliver_entrust_letter_file_data);
    $("#deliver_entrust_letter_detail_modal").modal("show");
    $("#deliver_entrust_letter_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除提货委托函
   */
  this.deliver_entrust_letter_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="deliver_entrust_letter_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除提货委托函确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除提货委托函吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '"  data-contract_code = "' + this.contract_buy_contract_code + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#deliver_entrust_letter_delete_modal").modal("show");
    $("#deliver_entrust_letter_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.deliver_entrust_letter_delete_data = function(uuid) {
    var delete_deliver_entrust_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeDeliverEntrustLetter";
    var delete_deliver_entrust_letter_param_data = {};
    delete_deliver_entrust_letter_param_data["idColumnValue"] = uuid;
    var org_structure_delete_deliver_entrust_letter= ajax_assistant(delete_deliver_entrust_letter_url, delete_deliver_entrust_letter_param_data, false, true, false);
    //console.log(org_structure_delete_deliver_entrust_letter);
    if (1 == org_structure_delete_deliver_entrust_letter.status) {
      $("#deliver_entrust_letter_delete_modal").modal("hide");
      this.deliver_entrust_letter_server_data_cover();
      this.deliver_entrust_letter_fill_variable_data();
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 提货委托函输出
   * @param output_id
   */
  this.deliver_entrust_letter_content = function() {
    var content = 
  '   <div class = "panel panel-primary contract_sale_pick_checkbox">'+
  '    <div class = "panel-heading clearfix">提货委托函<span class = "glyphicon glyphicon-plus pull-right" id = "deliver_entrust_letter_add_modal_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "deliver_entrust_letter_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>提货地点</th>'+
  '                  <th>提货时间</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "deliver_entrust_letter_ml15_box">'+
  '                <tr>'+
  '                  <td>舟山</td>'+
  '                  <td>2017-05-14</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign deliver_entrust_letter_ml15 deliver_entrust_letter_detail"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil deliver_entrust_letter_ml15 deliver_entrust_letter_edit"></span>'+
  '                    <span class = "glyphicon glyphicon-remove deliver_entrust_letter_ml15 deliver_entrust_letter_delete"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.deliver_entrust_letter_content_id).html(content);
  };
}