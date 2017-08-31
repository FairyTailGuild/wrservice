/**
 * @author yangyongxia
 */
function goodsConfirmLetter(contract_buy_contract_code, goods_confirm_letter_content_id) {
  this.contract_buy_contract_code = contract_buy_contract_code;
  this.goods_confirm_letter_content_id = goods_confirm_letter_content_id;
  
  this.goods_confirm_letter_data = [
    {"numerical_order": "1","create_time": "2017-03-12","uuid": "1","contract_code": "ZS-TZGYL-17813261"},
    {"numerical_order": "2","create_time": "2017-03-12","uuid": "2","contract_code": "ZS-TZGYL-17813261"},
    {"numerical_order": "3","create_time": "2017-03-12","uuid": "3","contract_code": "ZS-TZGYL-17813261"},
    {"numerical_order": "4","create_time": "2017-03-12","uuid": "4","contract_code": "ZS-TZGYL-17813261"},
    {"numerical_order": "5","create_time": "2017-03-12","uuid": "5","contract_code": "ZS-TZGYL-17813261"},
  ];
  
  this.goods_confirm_letter_file_data = [
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
  this.goods_confirm_letter_clear_raw_data = function() {
    $(this.goods_confirm_letter_content_id).find("#goods_confirm_letter_list tbody").html("");
  };
  
  /**
   * 赋值
   */
  this.goods_confirm_letter_fill_variable_data = function() {
    if (isJsonObjectHasData(this.goods_confirm_letter_data)) {
      var goods_confirm_letter_tbody = "";
      for (var i = 0; i < this.goods_confirm_letter_data.length; i++) {
        goods_confirm_letter_tbody += 
          '<tr>'+
            '<td>' + this.goods_confirm_letter_data[i].numerical_order + '</td>'+
            '<td>' + this.goods_confirm_letter_data[i].create_time + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign goods_confirm_letter_ml15 goods_confirm_letter_detail" data-uuid = "' + this.goods_confirm_letter_data[i].uuid + '" data-contract_code = "' + this.goods_confirm_letter_data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil goods_confirm_letter_ml15 goods_confirm_letter_edit" data-uuid = "' + this.goods_confirm_letter_data[i].uuid + '" data-contract_code = "' + this.goods_confirm_letter_data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-remove goods_confirm_letter_ml15 goods_confirm_letter_delete" data-uuid = "' + this.goods_confirm_letter_data[i].uuid + '" data-contract_code = "' + this.goods_confirm_letter_data[i].contract_code + '"></span>'+
            '</td>'+
          '</tr>';
        $(this.goods_confirm_letter_content_id).find("#goods_confirm_letter_list tbody").html(goods_confirm_letter_tbody);  
      }
    } else {
      $(this.goods_confirm_letter_content_id).find("#goods_confirm_letter_list tbody").html("<tr><td colspan='3' align='center'>没数据</td></tr>");
    }
  };
  
  /**
   * 获取货物确认函
   */
  this.goods_confirm_letter_server_data_cover = function() {
    var get_goods_confirm_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGoodsConfirmLetter";
    var get_goods_confirm_letter_param_data = {};
    get_goods_confirm_letter_param_data["contract_code"] = this.contract_buy_contract_code;
    var goods_confirm_letter_get= ajax_assistant(get_goods_confirm_letter_url, get_goods_confirm_letter_param_data, false, true, false);
    //console.log(goods_confirm_letter_get);
    if (1 == goods_confirm_letter_get.status) {
      if (0 == goods_confirm_letter_get.count) {
        this.goods_confirm_letter_data = {};
      } else {
        var result = JSON.parse(goods_confirm_letter_get.result);
        //console.log(result);
        var goods_confirm_letter_data_arr = new Array();
        for (var i = 0; i < result.length; i++) {
          var create_datetime = result[i].create_datetime.substring(0,result[i].create_datetime.indexOf(" "));
          goods_confirm_letter_data_arr.push({"numerical_order": i+1,"create_time": create_datetime,"uuid": result[i].uuid,"contract_code": result[i].contract_code});
        }
        this.goods_confirm_letter_data = goods_confirm_letter_data_arr;
      }
    }
  };
  
  /**
   * 获取货物确认函详情
   */
  this.goods_confirm_letter_get_letter = function(uuid) {
    //console.log(uuid);
    var get_goods_confirm_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getGoodsConfirmLetter";
    var get_goods_confirm_letter_param_data = {};
    get_goods_confirm_letter_param_data["uuid"] = uuid;
    var goods_confirm_letter_get= ajax_assistant(get_goods_confirm_letter_url, get_goods_confirm_letter_param_data, false, true, false);
    //console.log(goods_confirm_letter_get);
    if (1 == goods_confirm_letter_get.status) {
      var result = JSON.parse(goods_confirm_letter_get.result);
      //console.log(result);
      var goods_confirm_letter_file_arr =new Array();
      var cluster_list_all = result[0].cluster_list;
      if (null != cluster_list_all) {
        var cluster_list = result[0].cluster_list.substring(0,result[0].cluster_list.lastIndexOf(";")).split(";");
        //console.log(cluster_list);
        var goods_confirm_letter_file = "";
        for (var j = 0; j < cluster_list.length; j++) {
          var get_goods_confirm_letter_file_url = PROJECT_PATH + "lego/lego_storage?servletName=getFileByClusterName";
          var get_goods_confirm_letter_file_param_data = {};
          get_goods_confirm_letter_file_param_data["cluster_name"] = cluster_list[j];
          var get_goods_confirm_letter_file = ajax_assistant(get_goods_confirm_letter_file_url, get_goods_confirm_letter_file_param_data, false, true, false);
          //console.log(get_goods_confirm_letter_file);
          if (1 == get_goods_confirm_letter_file.status) {
            var goods_confirm_letter_file_result = JSON.parse(get_goods_confirm_letter_file.result);
            //console.log(goods_confirm_letter_file_result);
            var goods_confirm_letter_cluster_name = goods_confirm_letter_file_result[0].cluster_name;
            var goods_confirm_letter_suffix = goods_confirm_letter_file_result[0].suffix;
            var file_name = goods_confirm_letter_cluster_name + '.' + goods_confirm_letter_suffix;
            goods_confirm_letter_file_arr.push({"file_name": file_name});
          }
        }
        this.goods_confirm_letter_file_data = goods_confirm_letter_file_arr;
      } else {
        this.goods_confirm_letter_file_data = {}
      }
    }
  };
  
  /**
   * 添加货物确认函
   */
  this.goods_confirm_letter_add_modal = function() {
    var content = 
  '      <div class = "modal fade custom_modal" id = "goods_confirm_letter_add_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '           <div class = "modal-header bg-primary">'+
  '             <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '             <h4 class = "modal-title" id = "myModalLabel">添加货物确认函</h4>'+
  '           </div>'+
  '           <div class = "modal-body">'+
  '              <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">货物确认函附件</label>'+
  '                 <div class = "panel panel-default" id = "goods_confirm_letter_add_attch"></div>'+
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
    upload_attachment_edit_output("#goods_confirm_letter_add_attch");
    $("#goods_confirm_letter_add_modal").modal("show");
    $("#goods_confirm_letter_add_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.goods_confirm_letter_add_data = function() {
    var goods_confirm_letter_li = $("#goods_confirm_letter_add_attch ul").children("li");
    var goods_confirm_letter_list = "";
    for (var i = 0; i < goods_confirm_letter_li.length; i++) {
      var obj = goods_confirm_letter_li[i];
      var goods_confirm_letter = $(obj).find("a").attr("data-cluster");
      if (undefined != goods_confirm_letter) {
       goods_confirm_letter_list += goods_confirm_letter + ";"; 
      }    
    }
    //console.log(goods_confirm_letter_list);
    var add_goods_confirm_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addGoodsConfirmLetter";
    var add_goods_confirm_letter_param_data = {};
    add_goods_confirm_letter_param_data["contract_code"] = this.contract_buy_contract_code;
    if("" != goods_confirm_letter_list) {
      add_goods_confirm_letter_param_data["cluster_list"] = goods_confirm_letter_list;
    }
    var goods_confirm_letter_add = ajax_assistant(add_goods_confirm_letter_url, add_goods_confirm_letter_param_data, false, true, false);
    //console.log(goods_confirm_letter_add);
    if (1 == goods_confirm_letter_add.status) {
      $("#goods_confirm_letter_add_modal").modal("hide");
      this.goods_confirm_letter_server_data_cover(this.contract_buy_contract_code);
      this.goods_confirm_letter_fill_variable_data(this.goods_confirm_letter_content_id);
    } else {
      alert("添加失败！");
    }
  };
  
  /**
   * 修改货物确认函
   */
  this.goods_confirm_letter_edit_modal = function(uuid) {
    var content = 
  '     <div class = "modal fade custom_modal" id = "goods_confirm_letter_edit_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '             <div class = "modal-header bg-primary">'+
  '               <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '               <h4 class = "modal-title" id = "myModalLabel">修改货物确认函</h4>'+
  '             </div>'+
  '             <div class = "modal-body">'+
  '               <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">货物确认函附件</label>'+
  '                   <div class = "panel panel-default" id = "goods_confirm_letter_edit_attch"></div>'+
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
    upload_attachment_edit_output("#goods_confirm_letter_edit_attch", this.goods_confirm_letter_file_data);
    $("#goods_confirm_letter_edit_modal").modal("show");
    $("#goods_confirm_letter_edit_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.goods_confirm_letter_edit_data = function(uuid) {
    //console.log(uuid);
    var goods_confirm_letter_li = $("#goods_confirm_letter_edit_attch ul").children("li");
    var goods_confirm_letter_list = "";
    for (var i = 0; i < goods_confirm_letter_li.length; i++) {
      var obj = goods_confirm_letter_li[i];
      var goods_confirm_letter = $(obj).find("a").attr("data-cluster");
      if (undefined != goods_confirm_letter) {
        goods_confirm_letter_list += goods_confirm_letter + ";"; 
      }    
    }
    //console.log(goods_confirm_letter_list);
    var edit_goods_confirm_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyGoodsConfirmLetter";
    var edit_goods_confirm_letter_param_data = {};
    edit_goods_confirm_letter_param_data["contract_code"] = this.contract_buy_contract_code;
    edit_goods_confirm_letter_param_data["idColumnValue"] = uuid;
    if ("" != goods_confirm_letter_list) {
      edit_goods_confirm_letter_param_data["newClusterList"] = goods_confirm_letter_list;
    }
    var goods_confirm_letter_edit= ajax_assistant(edit_goods_confirm_letter_url, edit_goods_confirm_letter_param_data, false, true, false);
    //console.log(goods_confirm_letter_edit);
    if (1 == goods_confirm_letter_edit.status) {
      $("#goods_confirm_letter_edit_modal").modal("hide");
      this.goods_confirm_letter_server_data_cover(this.contract_buy_contract_code);
      this.goods_confirm_letter_fill_variable_data(this.goods_confirm_letter_content_id);
    } else {
      alert("修改失败！");
    }
  };
  
  /**
   * 货物确认函详情
   */
  this.goods_confirm_letter_detail_modal = function() {
    var content = 
  '     <div class = "modal fade custom_modal" id = "goods_confirm_letter_detail_modal" tabindex = "-1">'+
  '       <div class = "modal-dialog" role = "document">'+
  '         <div class = "modal-content">'+
  '            <div class = "modal-header bg-primary">'+
  '              <button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
  '              <h4 class = "modal-title" id = "myModalLabel">货物确认函详情</h4>'+
  '            </div>'+
  '            <div class = "modal-body">'+
  '              <div class = "row">'+
  '                 <div class = "col-md-12">'+
  '                   <label class = "">货物确认函附件</label>'+
  '                   <div class = "panel panel-default" id = "goods_confirm_letter_detail_attch"></div>'+
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
    upload_attachment_preview_output("#goods_confirm_letter_detail_attch", this.goods_confirm_letter_file_data);
    $("#goods_confirm_letter_detail_modal").modal("show");
    $("#goods_confirm_letter_detail_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  /**
   * 删除货物确认函
   */
  this.goods_confirm_letter_delete_modal = function(uuid) {
    var content = 
      '<div class="modal fade bs-example-modal-sm custom_modal" id="goods_confirm_letter_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
        '<div class="modal-dialog modal-sm" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">删除货物确认函确认</h4>'+
            '</div>'+
            '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除货物确认函吗？</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '" data-contract_code = "' + this.contract_buy_contract_code + '">删除</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(content);
    $("#goods_confirm_letter_delete_modal").modal("show");
    $("#goods_confirm_letter_delete_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.goods_confirm_letter_delete_data = function(uuid) {
    var delete_goods_confirm_letter_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeGoodsConfirmLetter";
    var delete_goods_confirm_letter_param_data = {};
    delete_goods_confirm_letter_param_data["idColumnValue"] = uuid;
    var org_structure_delete_goods_confirm_letter= ajax_assistant(delete_goods_confirm_letter_url, delete_goods_confirm_letter_param_data, false, true, false);
    //console.log(org_structure_delete_goods_confirm_letter);
    if (1 == org_structure_delete_goods_confirm_letter.status) {
      $("#goods_confirm_letter_delete_modal").modal("hide");
      this.goods_confirm_letter_server_data_cover(this.contract_buy_contract_code);
      this.goods_confirm_letter_fill_variable_data(this.goods_confirm_letter_content_id);
    } else {
      alert("删除失败");
    }
  };
  
  /**
   * 货物确认函输出
   * @param output_id
   */
  this.goods_confirm_letter_content = function() {
    var content = 
  '   <div class = "panel panel-primary contract_sale_confirm_checkbox">'+
  '    <div class = "panel-heading clearfix">货物确认函<span class = "glyphicon glyphicon-plus pull-right" id = "goods_confirm_letter_add_modal_btn"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table id = "goods_confirm_letter_list" cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>序号</th>'+
  '                  <th>创建时间</th>'+
  '                  <th>&nbsp;</th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "goods_confirm_letter_ml15_box">'+
  '                <tr>'+
  '                  <td>1</td>'+
  '                  <td>2017-05-14</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign goods_confirm_letter_ml15 goods_confirm_letter_detail"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil goods_confirm_letter_ml15 goods_confirm_letter_edit"></span>'+
  '                    <span class = "glyphicon glyphicon-remove goods_confirm_letter_ml15 goods_confirm_letter_delete"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
    $(this.goods_confirm_letter_content_id).html(content);
  };
}