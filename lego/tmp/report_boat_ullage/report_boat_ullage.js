/**
 * @author yangyongxia
 */

function reportBoatUllage(vehicle_information_uuid, report_boat_ullage_content_id) {
  this.vehicle_information_uuid = vehicle_information_uuid;
  this.report_boat_ullage_content_id = report_boat_ullage_content_id;
  this.report_boat_ullage_data = [
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"quantity": "1000","uuid": "11","vehicle_information_uuid": "ZS-TZGYL-17813261"},
  ];
  
  this.current_report_boat_ullage_data = {
    "quantity": "1000",
    "uuid": "11",
    "vehicle_information_uuid": "ZS-TZGYL-17813261"
  };
  
  this.report_boat_ullage_file_data = [
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
  this.report_boat_ullage_clear_raw_data = function() {
    $(this.report_boat_ullage_content_id).find("#report_boat_ullage_list tbody").html("");
    this.count = 0;
    $(this.report_boat_ullage_content_id).find("#report_boat_ullage_paid span.paid").html('船板单&nbsp;[总量&nbsp;:&nbsp;0]&nbsp;');
  };
  
  /**
   * 赋值
   */
  this.report_boat_ullage_fill_variable_data = function() {
    $(this.report_boat_ullage_content_id).find("#report_boat_ullage_paid span.paid").html('船板单&nbsp;[总量&nbsp;:&nbsp;' + this.count + ']&nbsp;');
    if (isJsonObjectHasData(this.report_boat_ullage_data)) {
      var report_boat_ullage_tbody = "";
      for (var i = 0; i < this.report_boat_ullage_data.length; i++) {
        report_boat_ullage_tbody += 
          '<tr>'+
            '<td>' + this.report_boat_ullage_data[i].quantity + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign report_boat_ullage_ml15 report_boat_ullage_detail" data-uuid = "' + this.report_boat_ullage_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_boat_ullage_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil report_boat_ullage_ml15 report_boat_ullage_edit" data-uuid = "' + this.report_boat_ullage_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_boat_ullage_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-remove report_boat_ullage_ml15 report_boat_ullage_delete" data-uuid = "' + this.report_boat_ullage_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_boat_ullage_data[i].vehicle_information_uuid + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.report_boat_ullage_content_id).find("#report_boat_ullage_list tbody").html(report_boat_ullage_tbody);  
      }
    } else {
      $(this.report_boat_ullage_content_id).find("#report_boat_ullage_list tbody").html("tr><td colspan='2' align='center'>没数据</td></tr>");
    }
  };
  
  /**
   * 获取船板单
   */
  this.report_boat_ullage_server_data_cover = function() {
    var get_report_boat_ullage_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getBoatUllageReport";
    var get_report_boat_ullage_param_data = {};
    get_report_boat_ullage_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var report_boat_ullage_get= ajax_assistant(get_report_boat_ullage_url, get_report_boat_ullage_param_data, false, true, false);
    //console.log(report_boat_ullage_get);
    if (1 == report_boat_ullage_get.status) {
      if (0 == report_boat_ullage_get.count) {
        this.report_boat_ullage_data = {};
        this.count = 0;
      } else {
        var result = JSON.parse(report_boat_ullage_get.result);
        //console.log(result);
        var report_boat_ullage_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          count_one = Number(result[i].quantity);
          report_boat_ullage_data_arr.push({"quantity": result[i].quantity,"uuid": result[i].uuid,"vehicle_information_uuid": result[i].vehicle_information_uuid});
          this.count = this.count + count_one;
        }
        this.report_boat_ullage_data = report_boat_ullage_data_arr;
      }
    }
  };
  
  /**
   * 获取船板单详情
   */
  this.report_boat_ullage_get_letter = function(uuid) {
    //console.log(uuid);
    var get_report_boat_ullage_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getBoatUllageReport";
    var get_report_boat_ullage_param_data = {};
    get_report_boat_ullage_param_data["uuid"] = uuid;
    var report_boat_ullage_get= ajax_assistant(get_report_boat_ullage_url, get_report_boat_ullage_param_data, false, true, false);
    //console.log(report_boat_ullage_get);
    if (1 == report_boat_ullage_get.status) {
      var result = JSON.parse(report_boat_ullage_get.result);
      //console.log(result);
      this.current_report_boat_ullage_data = {
        "quantity": result[0].quantity,
        "uuid": result[0].uuid,
        "vehicle_information_uuid": result[0].vehicle_information_uuid
      };
      var report_boat_ullage_file_arr =new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        //console.log(cluster_list);
        var report_boat_ullage_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var enterprise_management_get_report_boat_ullage_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var enterprise_management_get_report_boat_ullage_file_param_data = {};
          enterprise_management_get_report_boat_ullage_file_param_data["cluster_name"] = cluster_list[j];
          var enterprise_management_get_report_boat_ullage_file = ajax_assistant(enterprise_management_get_report_boat_ullage_file_url, enterprise_management_get_report_boat_ullage_file_param_data, false, true, false);
          //console.log(enterprise_management_get_report_boat_ullage_file);
          if (1 == enterprise_management_get_report_boat_ullage_file.status) {
            var report_boat_ullage_file_result = JSON.parse(enterprise_management_get_report_boat_ullage_file.result);
            //console.log(report_boat_ullage_file_result);
            var report_boat_ullage_cluster_name = report_boat_ullage_file_result[0].cluster_name;
            var report_boat_ullage_suffix = report_boat_ullage_file_result[0].suffix;
            var file_name = report_boat_ullage_cluster_name + '.' + report_boat_ullage_suffix;
            report_boat_ullage_file_arr.push({"file_name": file_name});
          }
        }
        this.report_boat_ullage_file_data = report_boat_ullage_file_arr;
      } else {
        this.report_boat_ullage_file_data = {}
      }
    }
  };
  
  /**
   * 添加船板单
   */
  this.report_boat_ullage_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "report_boat_ullage_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">添加船板单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">数量</label>'+
  '                       <input type = "text" class = "form-control quantity" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">船板单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_boat_ullage_add_attch"></div>'+
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
    upload_attachment_edit_output("#report_boat_ullage_add_attch");
    $("#report_boat_ullage_add_modal").modal("show");
    $("#report_boat_ullage_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_boat_ullage_add_data = function() {
    var quantity = $("#report_boat_ullage_add_modal .quantity").val();
    var report_boat_ullage_li = $("#report_boat_ullage_add_attch ul").children("li");
    var report_boat_ullage_list = "";
    for (var i = 0; i < report_boat_ullage_li.length; i++) {
      var obj = report_boat_ullage_li[i];
      var report_boat_ullage = $(obj).find("a").attr("data-cluster");
      if (undefined != report_boat_ullage) {
       report_boat_ullage_list += report_boat_ullage + ";"; 
      }    
    }
    //console.log(report_boat_ullage_list);
    if ("" == quantity) {
      alert("请输入数量！");
      return;
    } else {
      if (null == quantity.match(/^(\d+)(\.\d+)?$/)) {
        alert("数量格式不正确！");
        return;
      }
    }
    var add_report_boat_ullage_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addBoatUllageReport";
    var add_report_boat_ullage_param_data = {};
    add_report_boat_ullage_param_data["vehicle_information_uuid"] = vehicle_information_uuid;
    add_report_boat_ullage_param_data["quantity"] = quantity;
    if("" != report_boat_ullage_list) {
      add_report_boat_ullage_param_data["cluster_list"] = report_boat_ullage_list;
    }
    var report_boat_ullage_add = ajax_assistant(add_report_boat_ullage_url, add_report_boat_ullage_param_data, false, true, false);
    //console.log(report_boat_ullage_add);
    if (1 == report_boat_ullage_add.status) {
      $("#report_boat_ullage_add_modal").modal("hide");
      this.report_boat_ullage_clear_raw_data(this.vehicle_information_uuid);
      this.report_boat_ullage_server_data_cover(this.vehicle_information_uuid);
      this.report_boat_ullage_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改船板单
   */
  this.report_boat_ullage_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "report_boat_ullage_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改船板单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">数量</label>'+
  '                       <input type = "text" class = "form-control quantity" value = "' + this.current_report_boat_ullage_data.quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">船板单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_boat_ullage_edit_attch"></div>'+
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
    upload_attachment_edit_output("#report_boat_ullage_edit_attch", this.report_boat_ullage_file_data);
    $("#report_boat_ullage_edit_modal").modal("show");
    $("#report_boat_ullage_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_boat_ullage_edit_data = function(uuid) {
    //console.log(uuid);
    var quantity = $("#report_boat_ullage_edit_modal .quantity").val();
    var report_boat_ullage_li = $("#report_boat_ullage_edit_attch ul").children("li");
    var report_boat_ullage_list = "";
    for (var i = 0; i < report_boat_ullage_li.length; i++) {
      var obj = report_boat_ullage_li[i];
      var report_boat_ullage = $(obj).find("a").attr("data-cluster");
      if (undefined != report_boat_ullage) {
        report_boat_ullage_list += report_boat_ullage + ";"; 
      }    
    }
    //console.log(report_boat_ullage_list);
    if ("" == quantity) {
      alert("请输入数量！");
      return;
    } else {
      if (null == quantity.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
        alert("数量格式不正确！");
        return;
      }
    }
    var edit_report_boat_ullage_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyBoatUllageReport";
    var edit_report_boat_ullage_param_data = {};
    edit_report_boat_ullage_param_data["idColumnValue"] = uuid;
    edit_report_boat_ullage_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    edit_report_boat_ullage_param_data["quantity"] = quantity;
    if ("" != report_boat_ullage_list) {
      edit_report_boat_ullage_param_data["newClusterList"] = report_boat_ullage_list;
    }
    var report_boat_ullage_edit= ajax_assistant(edit_report_boat_ullage_url, edit_report_boat_ullage_param_data, false, true, false);
    //console.log(report_boat_ullage_edit);
    if (1 == report_boat_ullage_edit.status) {
      $("#report_boat_ullage_edit_modal").modal("hide");
      this.report_boat_ullage_clear_raw_data(this.vehicle_information_uuid);
      this.report_boat_ullage_server_data_cover(this.vehicle_information_uuid);
      this.report_boat_ullage_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 船板单详情
   */
  this.report_boat_ullage_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "report_boat_ullage_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">船板单详情</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <form>'+
  '                     <div class = "form-group">'+
  '                       <label for = "">数量</label>'+
  '                       <input type = "text" class = "form-control quantity" disabled = "disabled" value = "' + this.current_report_boat_ullage_data.quantity + '" aria-label = "Amount (to the nearest dollar)">'+
  '                     </div>'+
  '                   </form>'+
  '                 </div>'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">船板单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_boat_ullage_detail_attch"></div>'+
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
    upload_attachment_preview_output("#report_boat_ullage_detail_attch", this.report_boat_ullage_file_data);
    $("#report_boat_ullage_detail_modal").modal("show");
    $("#report_boat_ullage_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除船板单
   */
  this.report_boat_ullage_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="report_boat_ullage_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除船板单确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除船板单吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-vehicle_information_uuid = "' + this.vehicle_information_uuid + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#report_boat_ullage_delete_modal").modal("show");
    $("#report_boat_ullage_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_boat_ullage_delete_data = function(uuid) {
    var delete_report_boat_ullage_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeBoatUllageReport";
    var delete_report_boat_ullage_param_data = {};
    delete_report_boat_ullage_param_data["idColumnValue"] = uuid;
    var org_structure_delete_report_boat_ullage= ajax_assistant(delete_report_boat_ullage_url, delete_report_boat_ullage_param_data, false, true, false);
    //console.log(org_structure_delete_report_boat_ullage);
    if (1 == org_structure_delete_report_boat_ullage.status) {
      $("#report_boat_ullage_delete_modal").modal("hide");
      this.report_boat_ullage_clear_raw_data(this.vehicle_information_uuid);
      this.report_boat_ullage_server_data_cover(this.vehicle_information_uuid);
      this.report_boat_ullage_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 船板单输出
   * @param output_id
   */
  this.report_boat_ullage_content = function() {
    var content = 
  '   <div class = "panel panel-primary">'+
  '    <div class = "panel-heading clearfix" id = "report_boat_ullage_paid"><span class = "paid">船板单&nbsp;[总量&nbsp;:&nbsp;0]&nbsp;</span><span class = "glyphicon glyphicon-plus pull-right" id = "report_boat_ullage_add_modle_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "report_boat_ullage_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead id = "report_boat_ullage_thead">'+
  '                <tr>'+
  '                  <th>数量</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody id = "report_boat_ullage_box">'+
  '                <tr>'+
  '                  <td>1500</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_boat_ullage_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_boat_ullage_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_boat_ullage_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td>1500</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_boat_ullage_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_boat_ullage_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_boat_ullage_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td>1500</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_boat_ullage_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_boat_ullage_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_boat_ullage_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.report_boat_ullage_content_id).html(content);
  };
}