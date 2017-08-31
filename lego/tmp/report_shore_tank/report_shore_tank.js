/**
 * @author yangyongxia
 */

function reportShoreTank(vehicle_information_uuid, report_shore_tank_content_id) {
  this.vehicle_information_uuid = vehicle_information_uuid;
  this.report_shore_tank_content_id = report_shore_tank_content_id;
  this.report_shore_tank_data = [
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
  ];

  this.current_report_shore_tank_data = {
    "quantity": "1000",
    "uuid": "11",
    "vehicle_information_uuid": "ZS-TZGYL-17813261"
  };

  this.report_shore_tank_file_data = [
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"},
    {"file_name": "e53fe82722af4d69879d0b7e02a492be.jpg"}
  ];
  
  this.count = 0;
  
  /**
   * 初始化
   */
  this.report_shore_tank_clear_raw_data = function() {
    $(this.report_shore_tank_content_id).find("#report_shore_tank_list tbody").html("");
    count = 0;
    $(this.report_shore_tank_content_id).find("#report_shore_tank_paid span.paid").html('商检单&nbsp;[总量&nbsp;:&nbsp;0]&nbsp;');
  };
  
  /**
   * 赋值
   */
  this.report_shore_tank_fill_variable_data = function() {
    $(this.report_shore_tank_content_id).find("#report_shore_tank_paid span.paid").html('商检单&nbsp;[总量&nbsp;:&nbsp;' + count + ']&nbsp;');
    if (isJsonObjectHasData(this.report_shore_tank_data)) {
      var report_shore_tank_tbody = "";
      for (var i = 0; i < this.report_shore_tank_data.length; i++) {
        report_shore_tank_tbody += 
          '<tr>'+
            '<td>' + this.report_shore_tank_data[i].quantity + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign report_shore_tank_ml15 report_shore_tank_detail" data-uuid = "' + this.report_shore_tank_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_shore_tank_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil report_shore_tank_ml15 report_shore_tank_edit" data-uuid = "' + this.report_shore_tank_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_shore_tank_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-remove report_shore_tank_ml15 report_shore_tank_delete" data-uuid = "' + this.report_shore_tank_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_shore_tank_data[i].vehicle_information_uuid + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.report_shore_tank_content_id).find("#report_shore_tank_list tbody").html(report_shore_tank_tbody);  
      }
    } else {
      $(this.report_shore_tank_content_id).find("#report_shore_tank_list tbody").html("tr><td colspan='2' align='center'>没数据</td></tr>");
    }
  };
  
  /**
   * 获取商检单
   */
  this.report_shore_tank_server_data_cover = function() {
    var get_report_shore_tank_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getShoreTankReport";
    var get_report_shore_tank_param_data = {};
    get_report_shore_tank_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var report_shore_tank_get= ajax_assistant(get_report_shore_tank_url, get_report_shore_tank_param_data, false, true, false);
    //console.log(report_shore_tank_get);
    if (1 == report_shore_tank_get.status) {
      if (0 == report_shore_tank_get.count) {
        this.report_shore_tank_data = {};
        count = 0;
      } else {
        var result = JSON.parse(report_shore_tank_get.result);
        //console.log(result);
        var report_shore_tank_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          count_one = Number(result[i].quantity);
          report_shore_tank_data_arr.push({"quantity": result[i].quantity,"uuid": result[i].uuid,"vehicle_information_uuid": result[i].vehicle_information_uuid});
          count = count + count_one;
          //console.log(count);
          //console.log(typeof(count));
        }
        this.report_shore_tank_data = report_shore_tank_data_arr;
      }
    }
  };
  
  /**
   * 获取商检单详情
   */
  this.report_shore_tank_get_letter = function(uuid) {
    //console.log(uuid);
    var get_report_shore_tank_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getShoreTankReport";
    var get_report_shore_tank_param_data = {};
    get_report_shore_tank_param_data["uuid"] = uuid;
    var report_shore_tank_get= ajax_assistant(get_report_shore_tank_url, get_report_shore_tank_param_data, false, true, false);
    //console.log(report_shore_tank_get);
    if (1 == report_shore_tank_get.status) {
      var result = JSON.parse(report_shore_tank_get.result);
      //console.log(result);
      this.current_report_shore_tank_data = {
        "quantity": result[0].quantity,
        "uuid": result[0].uuid,
        "vehicle_information_uuid": result[0].vehicle_information_uuid
      };
      var report_shore_tank_file_arr =new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        //console.log(cluster_list);
        var report_shore_tank_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var enterprise_management_get_report_shore_tank_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var enterprise_management_get_report_shore_tank_file_param_data = {};
          enterprise_management_get_report_shore_tank_file_param_data["cluster_name"] = cluster_list[j];
          var enterprise_management_get_report_shore_tank_file = ajax_assistant(enterprise_management_get_report_shore_tank_file_url, enterprise_management_get_report_shore_tank_file_param_data, false, true, false);
          //console.log(enterprise_management_get_report_shore_tank_file);
          if (1 == enterprise_management_get_report_shore_tank_file.status) {
            var report_shore_tank_file_result = JSON.parse(enterprise_management_get_report_shore_tank_file.result);
            //console.log(report_shore_tank_file_result);
            var report_shore_tank_cluster_name = report_shore_tank_file_result[0].cluster_name;
            var report_shore_tank_suffix = report_shore_tank_file_result[0].suffix;
            var file_name = report_shore_tank_cluster_name + '.' + report_shore_tank_suffix;
            report_shore_tank_file_arr.push({"file_name": file_name});
          }
        }
        this.report_shore_tank_file_data = report_shore_tank_file_arr;
      } else {
        this.report_shore_tank_file_data = {}
      }
    }
  };
  
  /**
   * 添加商检单
   */
  this.report_shore_tank_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "report_shore_tank_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">添加商检单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">数量（吨）</label>'+
  '                       <input type = "text" class = "form-control quantity" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">商检单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_shore_tank_add_attch"></div>'+
  '                 </div>'+
  '               </div>'+
  '           </div>'+
  '           <div class = "modal-footer">'+
  '             <button type = "button" class = "btn btn-primary add_btn" vehicle_information_uuid = "' + this.vehicle_information_uuid + '">添加</button>'+
  '             <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
  '           </div>'+
  '         </div>'+
  '       </div>'+
  '     </div>';
    $("body").append(content);
    upload_attachment_edit_output("#report_shore_tank_add_attch");
    $("#report_shore_tank_add_modal").modal("show");
    $("#report_shore_tank_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_shore_tank_add_data = function() {
    var quantity = $("#report_shore_tank_add_modal .quantity").val();
    var report_shore_tank_li = $("#report_shore_tank_add_attch ul").children("li");
    var report_shore_tank_list = "";
    for (var i = 0; i < report_shore_tank_li.length; i++) {
      var obj = report_shore_tank_li[i];
      var report_shore_tank = $(obj).find("a").attr("data-cluster");
      if (undefined != report_shore_tank) {
       report_shore_tank_list += report_shore_tank + ";"; 
      }    
    }
    //console.log(report_shore_tank_list);
    if ("" == quantity) {
      alert("请输入数量！");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("数量格式不正确！");
        return;
      }
    }
    var add_report_shore_tank_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addShoreTankReport";
    var add_report_shore_tank_param_data = {};
    add_report_shore_tank_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    add_report_shore_tank_param_data["quantity"] = quantity;
    if("" != report_shore_tank_list) {
      add_report_shore_tank_param_data["cluster_list"] = report_shore_tank_list;
    }
    var report_shore_tank_add = ajax_assistant(add_report_shore_tank_url, add_report_shore_tank_param_data, false, true, false);
    //console.log(report_shore_tank_add);
    if (1 == report_shore_tank_add.status) {
      $("#report_shore_tank_add_modal").modal("hide");
      this.report_shore_tank_clear_raw_data(this.vehicle_information_uuid);
      this.report_shore_tank_server_data_cover(this.vehicle_information_uuid);
      this.report_shore_tank_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改商检单
   */
  this.report_shore_tank_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "report_shore_tank_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改商检单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">数量（吨）</label>'+
  '                       <input type = "text" class = "form-control quantity" value = "' + this.current_report_shore_tank_data.quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">商检单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_shore_tank_edit_attch"></div>'+
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
    upload_attachment_edit_output("#report_shore_tank_edit_attch", this.report_shore_tank_file_data);
    $("#report_shore_tank_edit_modal").modal("show");
    $("#report_shore_tank_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_shore_tank_edit_data = function(uuid) {
    //console.log(uuid);
    var quantity = $("#report_shore_tank_edit_modal .quantity").val();
    var report_shore_tank_li = $("#report_shore_tank_edit_attch ul").children("li");
    var report_shore_tank_list = "";
    for (var i = 0; i < report_shore_tank_li.length; i++) {
      var obj = report_shore_tank_li[i];
      var report_shore_tank = $(obj).find("a").attr("data-cluster");
      if (undefined != report_shore_tank) {
        report_shore_tank_list += report_shore_tank + ";"; 
      }    
    }
    //console.log(report_shore_tank_list);
    if ("" == quantity) {
      alert("请输入数量！");
      return;
    } else {
      if (null == quantity.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("数量格式不正确！");
        return;
      }
    }
    var edit_report_shore_tank_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyShoreTankReport";
    var edit_report_shore_tank_param_data = {};
    edit_report_shore_tank_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    edit_report_shore_tank_param_data["idColumnValue"] = uuid;
    edit_report_shore_tank_param_data["quantity"] = quantity;
    if ("" != report_shore_tank_list) {
      edit_report_shore_tank_param_data["newClusterList"] = report_shore_tank_list;
    }
    var report_shore_tank_edit= ajax_assistant(edit_report_shore_tank_url, edit_report_shore_tank_param_data, false, true, false);
    //console.log(report_shore_tank_edit);
    if (1 == report_shore_tank_edit.status) {
      $("#report_shore_tank_edit_modal").modal("hide");
      this.report_shore_tank_clear_raw_data(this.vehicle_information_uuid);
      this.report_shore_tank_server_data_cover(this.vehicle_information_uuid);
      this.report_shore_tank_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 商检单详情
   */
  this.report_shore_tank_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "report_shore_tank_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">商检单详情</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">数量（吨）</label>'+
  '                       <input type = "text" class = "form-control quantity" disabled = "disabled" value = "' + this.current_report_shore_tank_data.quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">商检单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_shore_tank_detail_attch"></div>'+
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
    upload_attachment_preview_output("#report_shore_tank_detail_attch", this.report_shore_tank_file_data);
    $("#report_shore_tank_detail_modal").modal("show");
    $("#report_shore_tank_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除商检单
   */
  this.report_shore_tank_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="report_shore_tank_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除商检单确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除商检单吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-vehicle_information_uuid = "' + this.vehicle_information_uuid + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#report_shore_tank_delete_modal").modal("show");
    $("#report_shore_tank_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_shore_tank_delete_data = function(uuid) {
    var delete_report_shore_tank_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeShoreTankReport";
    var delete_report_shore_tank_param_data = {};
    delete_report_shore_tank_param_data["idColumnValue"] = uuid;
    delete_report_shore_tank_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var org_structure_delete_report_shore_tank= ajax_assistant(delete_report_shore_tank_url, delete_report_shore_tank_param_data, false, true, false);
    //console.log(org_structure_delete_report_shore_tank);
    if (1 == org_structure_delete_report_shore_tank.status) {
      $("#report_shore_tank_delete_modal").modal("hide");
      this.report_shore_tank_clear_raw_data(this.vehicle_information_uuid);
      this.report_shore_tank_server_data_cover(this.vehicle_information_uuid);
      this.report_shore_tank_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 商检单输出
   * @param output_id
   */
  this.report_shore_tank_content = function() {
    var content = 
  '   <div class = "panel panel-primary">'+
  '    <div class = "panel-heading clearfix" id = "report_shore_tank_paid"><span class = "paid">商检单&nbsp;[总量&nbsp;:&nbsp;0]&nbsp;</span><span class = "glyphicon glyphicon-plus pull-right" id = "report_shore_tank_add_modle_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "report_shore_tank_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead id = "report_shore_tank_thead">'+
  '                <tr>'+
  '                  <th>数量（吨）</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody id = "report_shore_tank_box">'+
  '                <tr>'+
  '                  <td>1500</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_shore_tank_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_shore_tank_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_shore_tank_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td>1500</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_shore_tank_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_shore_tank_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_shore_tank_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td>1500</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_shore_tank_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_shore_tank_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_shore_tank_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.report_shore_tank_content_id).html(content);
  };
}