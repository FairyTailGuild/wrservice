/**
 * @author yangyongxia
 */

function reportTest(vehicle_information_uuid, report_test_content_id) {
  this.vehicle_information_uuid = vehicle_information_uuid;
  this.report_test_content_id = report_test_content_id;
  this.report_test_data = [
    {"numerical_order": "1","uuid": "1","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"numerical_order": "2","uuid": "2","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"numerical_order": "3","uuid": "3","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"numerical_order": "4","uuid": "4","vehicle_information_uuid": "ZS-TZGYL-17813261"},
    {"numerical_order": "5","uuid": "5","vehicle_information_uuid": "ZS-TZGYL-17813261"},
  ];
  
  this.report_test_file_data = [
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
  this.report_test_clear_raw_data = function() {
    $(this.report_test_content_id).find("#report_test_list tbody").html("");
  };
  
  /**
   * 赋值
   */
  this.report_test_fill_variable_data = function() {
    if (isJsonObjectHasData(this.report_test_data)) {
      var report_test_tbody = "";
      for (var i = 0; i < this.report_test_data.length; i++) {
        report_test_tbody += 
          '<tr>'+
            '<td>' + this.report_test_data[i].numerical_order + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign report_test_ml15 report_test_detail" data-uuid = "' + this.report_test_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_test_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil report_test_ml15 report_test_edit" data-uuid = "' + this.report_test_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_test_data[i].vehicle_information_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-remove report_test_ml15 report_test_delete" data-uuid = "' + this.report_test_data[i].uuid + '" data-vehicle_information_uuid = "' + this.report_test_data[i].vehicle_information_uuid + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.report_test_content_id).find("#report_test_list tbody").html(report_test_tbody);  
      }
    } else {
      $(this.report_test_content_id).find("#report_test_list tbody").html('<tr><td colspan = "2" algin = "center">没数据</td></tr/>');
    }
  };
  
  /**
   * 获取化验单
   */
  this.report_test_server_data_cover = function() {
    var get_report_test_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getTestReport";
    var get_report_test_param_data = {};
    get_report_test_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var report_test_get= ajax_assistant(get_report_test_url, get_report_test_param_data, false, true, false);
    //console.log(report_test_get);
    if (1 == report_test_get.status) {
      if (0 == report_test_get.count) {
        this.report_test_data = {};
      } else {
        var result = JSON.parse(report_test_get.result);
        //console.log(result);
        var report_test_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          report_test_data_arr.push({"numerical_order": i+1,"uuid": result[i].uuid,"vehicle_information_uuid": result[i].vehicle_information_uuid});
        }
        this.report_test_data = report_test_data_arr;
      }
    }
  };
  
  /**
   * 获取化验单详情
   */
  this.report_test_get_letter = function(uuid) {
    //console.log(uuid);
    var get_report_test_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getTestReport";
    var get_report_test_param_data = {};
    get_report_test_param_data["uuid"] = uuid;
    var report_test_get= ajax_assistant(get_report_test_url, get_report_test_param_data, false, true, false);
    //console.log(report_test_get);
    if (1 == report_test_get.status) {
      var result = JSON.parse(report_test_get.result);
      //console.log(result);
      var report_test_file_arr =new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0, result[0].cluster_list.lastIndexOf(";")).split(";");
        //console.log(cluster_list);
        var report_test_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var enterprise_management_get_report_test_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var enterprise_management_get_report_test_file_param_data = {};
          enterprise_management_get_report_test_file_param_data["cluster_name"] = cluster_list[j];
          var enterprise_management_get_report_test_file = ajax_assistant(enterprise_management_get_report_test_file_url, enterprise_management_get_report_test_file_param_data, false, true, false);
          //console.log(enterprise_management_get_report_test_file);
          if (1 == enterprise_management_get_report_test_file.status) {
            var report_test_file_result = JSON.parse(enterprise_management_get_report_test_file.result);
            //console.log(report_test_file_result);
            var report_test_cluster_name = report_test_file_result[0].cluster_name;
            var report_test_suffix = report_test_file_result[0].suffix;
            var file_name = report_test_cluster_name + '.' + report_test_suffix;
            report_test_file_arr.push({"file_name": file_name});
          }
        }
        this.report_test_file_data = report_test_file_arr;
      } else {
        this.report_test_file_data = {}
      }
    }
  };
  
  /**
   * 添加化验单
   */
  this.report_test_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "report_test_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '           <div class = "modal-header bg-primary">'+
  '             <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '             <h4 class = "modal-title" id = "myModalLabel">添加化验单</h4>'+
  '           </div>'+
  '           <div class = "modal-body">'+
  '              <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">化验单附件</label>'+
  '                 <div class = "panel panel-default" id = "report_test_add_attch"></div>'+
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
    upload_attachment_edit_output("#report_test_add_attch");
    $("#report_test_add_modal").modal("show");
    $("#report_test_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_test_add_data = function() {
    var report_test_li = $("#report_test_add_attch ul").children("li");
    var report_test_list = "";
    for (var i = 0; i < report_test_li.length; i++) {
      var obj = report_test_li[i];
      var report_test = $(obj).find("a").attr("data-cluster");
      if (undefined != report_test) {
       report_test_list += report_test + ";"; 
      }    
    }
    //console.log(report_test_list);
    var add_report_test_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addTestReport";
    var add_report_test_param_data = {};
    add_report_test_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    if("" != report_test_list) {
      add_report_test_param_data["cluster_list"] = report_test_list;
    }
    var report_test_add = ajax_assistant(add_report_test_url, add_report_test_param_data, false, true, false);
    //console.log(report_test_add);
    if (1 == report_test_add.status) {
      $("#report_test_add_modal").modal("hide");
      this.report_test_server_data_cover(this.vehicle_information_uuid);
      this.report_test_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改化验单
   */
  this.report_test_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "report_test_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改化验单</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">化验单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_test_edit_attch"></div>'+
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
    upload_attachment_edit_output("#report_test_edit_attch", this.report_test_file_data);
    $("#report_test_edit_modal").modal("show");
    $("#report_test_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_test_edit_data = function(uuid) {
    //console.log(uuid);
    var report_test_li = $("#report_test_edit_attch ul").children("li");
    var report_test_list = "";
    for (var i = 0; i < report_test_li.length; i++) {
      var obj = report_test_li[i];
      var report_test = $(obj).find("a").attr("data-cluster");
      if (undefined != report_test) {
        report_test_list += report_test + ";"; 
      }    
    }
    //console.log(report_test_list);
    var edit_report_test_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyTestReport";
    var edit_report_test_param_data = {};
    edit_report_test_param_data["idColumnValue"] = uuid;
    edit_report_test_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    if ("" != report_test_list) {
      edit_report_test_param_data["newClusterList"] = report_test_list;
    }
    var report_test_edit= ajax_assistant(edit_report_test_url, edit_report_test_param_data, false, true, false);
    //console.log(report_test_edit);
    if (1 == report_test_edit.status) {
      $("#report_test_edit_modal").modal("hide");
      this.report_test_server_data_cover(this.vehicle_information_uuid);
      this.report_test_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 化验单详情
   */
  this.report_test_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "report_test_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '            <div class = "modal-header bg-primary">'+
  '              <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '              <h4 class = "modal-title" id = "myModalLabel">化验单详情</h4>'+
  '            </div>'+
  '            <div class = "modal-body">'+
  '              <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">化验单附件</label>'+
  '                   <div class = "panel panel-default" id = "report_test_detail_attch"></div>'+
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
    upload_attachment_preview_output("#report_test_detail_attch", this.report_test_file_data);
    $("#report_test_detail_modal").modal("show");
    $("#report_test_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除化验单
   */
  this.report_test_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="report_test_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除化验单确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除化验单吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-vehicle_information_uuid = "' + this.vehicle_information_uuid + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#report_test_delete_modal").modal("show");
    $("#report_test_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.report_test_delete_data = function(uuid) {
    var delete_report_test_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeTestReport";
    var delete_report_test_param_data = {};
    delete_report_test_param_data["idColumnValue"] = uuid;
    delete_report_test_param_data["vehicle_information_uuid"] = this.vehicle_information_uuid;
    var org_structure_delete_report_test= ajax_assistant(delete_report_test_url, delete_report_test_param_data, false, true, false);
    //console.log(org_structure_delete_report_test);
    if (1 == org_structure_delete_report_test.status) {
      $("#report_test_delete_modal").modal("hide");
      this.report_test_server_data_cover(this.vehicle_information_uuid);
      this.report_test_fill_variable_data(this.vehicle_information_uuid);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 化验单输出
   * @param output_id
   */
  this.report_test_content = function() {
    var content = 
  '   <div class = "panel panel-primary ">'+
  '    <div class = "panel-heading clearfix">化验单<span class = "glyphicon glyphicon-plus pull-right" id = "report_test_add_modal_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "report_test_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>序号</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "report_test_ml15_box">'+
  '                <tr>'+
  '                  <td>1</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign report_test_ml15 report_test_detail"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil report_test_ml15 report_test_edit"></span>'+
  '                    <span class = "glyphicon glyphicon-remove report_test_ml15 report_test_delete"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.report_test_content_id).html(content);
  };
}