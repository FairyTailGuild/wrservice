/**
 * @author wangdi
 */

//库区
var warehouse_data = {
  "data":[
    {"warehouse_name":"舟山纳海", "warehouse_uuid":"001"},
    {"warehouse_name":"零点库区", "warehouse_uuid":"002"},
    {"warehouse_name":"泰州锦华", "warehouse_uuid":"003"},
    {"warehouse_name":"鹏程万里", "warehouse_uuid":"004"},
    {"warehouse_name":"大展宏图", "warehouse_uuid":"005"}]
};
/**
 * storage_tank_name: 储罐名称
 * uuid: 储罐uuid
 * type: 储罐类型(0:原料罐;1:生产罐)
 * warehouse_uuid: 仓库的uuid 
 */
var warehouse_pot_data = {
"data":[
    {"storage_tank_name":"E01", "uuid":"101", "type":"2", "warehouse_uuid":"001", "effective_capacity":"22", "charge_capacity":"222"},
    {"storage_tank_name":"E02", "uuid":"102", "type":"1", "warehouse_uuid":"001", "effective_capacity":"33", "charge_capacity":"333"},
    {"storage_tank_name":"E03", "uuid":"103", "type":"2", "warehouse_uuid":"002", "effective_capacity":"44", "charge_capacity":"444"},
    {"storage_tank_name":"E04", "uuid":"104", "type":"1", "warehouse_uuid":"002", "effective_capacity":"55", "charge_capacity":"555"},
    {"storage_tank_name":"E05", "uuid":"105", "type":"2", "warehouse_uuid":"003", "effective_capacity":"66", "charge_capacity":"666"}]
};

function warehouse_management_clear_raw_data() {
  $("#warehouse_management_box").html("");
}
//服务器数据
function warehouse_management_server_data_cover() {
  warehouse_data = {};
  warehouse_pot_data = {};
  //获取仓库
  var warehouse_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehouse";
  var warehouse_get_warehouse = ajax_assistant(warehouse_url, "", false, true, false);
  //获取储罐
  var warehouse_pot_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehousePot";
  var warehouse_pot_get_warehouse = ajax_assistant(warehouse_pot_url, "", false, true, false);
//console.log(ajax_assistant);
  if (1 == warehouse_get_warehouse.status) {
    if (0 == warehouse_get_warehouse.count) {
      warehouse_data = {};
    } else {
      var tmp_arr = new Array();
      var result = JSON.parse(warehouse_get_warehouse.result);    
      for (var i = 0; i < result.length; i++) {
        // name id uuid
        tmp_arr[i] = {"warehouse_name":result[i].name, "warehouse_uuid":result[i].uuid};
      }
      warehouse_data["data"] = tmp_arr;
    }
    
  } else {
    alert("库区数据获取失败");
  }
  //储罐
  if (1 == warehouse_pot_get_warehouse.status) {
    if (0 == warehouse_pot_get_warehouse.count) {
      warehouse_pot_data = {};
    } else {
      var tmp_arr_pot = new Array();
      var result_pot = JSON.parse(warehouse_pot_get_warehouse.result);  
      //console.log(result_pot);
      for (var i = 0; i < result_pot.length; i++) {
        // name id uuid
        tmp_arr_pot[i] = {"storage_tank_name":result_pot[i].name, "uuid":result_pot[i].uuid, "type":result_pot[i].type, "warehouse_uuid":result_pot[i].warehouse_uuid, "effective_capacity":result_pot[i].effective_capacity, "charge_capacity":result_pot[i].charge_capacity};
      }
      warehouse_pot_data["data"] = tmp_arr_pot;
    }
    
  } else {
    alert("储罐数据获取失败");
  }
}

function warehouse_management_fill_variable_data() {
  //查询仓库
  var warehouse_html = "";
  if(isJsonObjectHasData(warehouse_data)) {
    for (var i = 0; i < warehouse_data.data.length; i++) {
      warehouse_html+=
        '<div>'+
          '<p href = "#" class = "list-group-item clearfix warehouse_management_pl30 warehouse_management_bgddd warehouse_management_border_radiue" warehouse_uuid = '+ warehouse_data.data[i].warehouse_uuid +'>' + warehouse_data.data[i].warehouse_name + 
            '<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15 warehouse_management_colorfff warehouse_management_remove" uuid="'+ warehouse_data.data[i].warehouse_uuid +'"></span>'+
            '<span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15 warehouse_management_colorfff warehouse_management_edit_pencil" uuid="'+ warehouse_data.data[i].warehouse_uuid +'"></span>'+
            '<span class = "glyphicon glyphicon-plus pull-right warehouse_management_colorfff warehouse_management_add_tank" uuid = "' + warehouse_data.data[i].warehouse_uuid+'"></span>'+
          '</p>'+
          '<div id = "warehouse_management' + warehouse_data.data[i].warehouse_uuid + '"></div>'+
        '</div>';
    }
  }
  $("#warehouse_management_box").html(warehouse_html);
  //查询储罐
  if(isJsonObjectHasData(warehouse_pot_data)) {
    for (var i = 0; i < warehouse_pot_data.data.length; i++) {
      if (1 == warehouse_pot_data.data[i].type) {
        $("#warehouse_management" + warehouse_pot_data.data[i].warehouse_uuid).append('<p href = "#" class = "list-group-item clearfix warehouse_management_pl30 warehouse_management_border_radiue">'+
                            '<span class = "glyphicon glyphicon-cd  warehouse_management_mr15"></span>' + warehouse_pot_data.data[i].storage_tank_name +
                            '<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15 warehouse_management_tank_remove" uuid="' + warehouse_pot_data.data[i].uuid + '"></span>'+
                            '<span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15 warehouse_management_tank_pencil" uuid = "' + warehouse_pot_data.data[i].uuid + '"></span>'+
                            '</p>');
      } else {
        $("#warehouse_management" + warehouse_pot_data.data[i].warehouse_uuid).append('<p href = "#" class = "list-group-item clearfix warehouse_management_pl30 warehouse_management_border_radiue">'+
                            '<span class = "glyphicon glyphicon-record  warehouse_management_mr15"></span>' + warehouse_pot_data.data[i].storage_tank_name +
                            '<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15 warehouse_management_tank_remove" uuid="' + warehouse_pot_data.data[i].uuid + '"></span>'+
                            '<span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15 warehouse_management_tank_pencil" uuid = "' + warehouse_pot_data.data[i].uuid + '"></span>'+
                            '</p>');
      }
    }
  }
}

function warehouse_management_add_warehouse_modal() {
  var warehouse_management_html  =  
    '<div class = "modal fade custom_modal custom_modal" id = "warehouse_management_prop" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">'+
      '<div class = "modal-dialog modal-sm" role = "document">'+
        '<div class = "modal-content">'+
          '<div class = "modal-header bg-primary">'+
            '<button type = "button" class = "close"  data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
            '<h4 class = "modal-title" id = "myModalLabel">添加库区</h4>'+
          '</div>'+
          '<div class = "modal-body nopadding-bottom">'+
            '<div class = "form-group">'+
              '<label>库区名称</label>'+
              '<input type = "text" class = "form-control warehouse_name" value = "">'+
            '</div>'+
          '</div>'+
          '<div class = "modal-footer" style = "text-align: center;">'+
            '<button type = "button" class = "btn btn-primary warehouse_management_prop_data">添加</button>'+
            '<button type = "button" class = "btn btn-default"  data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
    $("body").append(warehouse_management_html);
    $("#warehouse_management_prop").modal("show");
    $("#warehouse_management_prop").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
}

function warehouse_management_add_warehouse_data(obj) {
  var warehouse_name = obj.parents("#warehouse_management_prop").find(".warehouse_name").val();
  if(null == warehouse_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的库区名称");
    return;
  }
  var warehouse_add_data = {
    "name":warehouse_name
  };
  // 调用后台添加接口
  var warehouse_add_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addWarehouse";
  var warehouse_add_get_warehouse = ajax_assistant(warehouse_add_url, warehouse_add_data, false, true, false);
  //console.log(warehouse_add_get_warehouse);
  if (1 != warehouse_add_get_warehouse.status) {
    alert("添加仓库失败");
  } else {
  // 更新页面数据
  //clear getNewData fill
    warehouse_management_clear_raw_data();
    warehouse_management_server_data_cover();
    warehouse_management_fill_variable_data(); 
    $("#warehouse_management_prop").modal("hide");
    $("#warehouse_management_prop").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  }
}

function warehouse_management_edit_warehouse_modal(obj) {
  var warehouse_uuid = obj.attr("uuid");
  var data = {
    "uuid":warehouse_uuid
  };
  var warehouse_name = "";
  var warehouse_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehouse";
  var warehouse_edit_get_warehouse = ajax_assistant(warehouse_edit_url, data, false, true, false);
  if(1 == warehouse_edit_get_warehouse.status){
    var reslut_json = JSON.parse(warehouse_edit_get_warehouse.result);
    if(0 < reslut_json.length){
      warehouse_name = reslut_json[0].name;
    }
  }
  var warehouse_management_html = 
  '<div class = "modal fade custom_modal" id = "warehouse_management_prop_edit" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">'+
    '<div class = "modal-dialog modal-sm" role = "document">'+
      '<div class = "modal-content">'+
        '<div class = "modal-header bg-primary">'+
          '<button type = "button" class = "close"data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
          '<h4 class = "modal-title" id = "myModalLabel">修改库区</h4>'+
        '</div>'+
        '<div class = "modal-body nopadding-bottom">'+
          '<div class = "form-group">'+
            '<label>库区名称</label>'+
            '<input type = "text" class = "form-control warehouse_name" value = "' + warehouse_name + '">'+
          '</div>'+
        '</div>'+
        '<div class = "modal-footer" style = "text-align: center;">'+
          '<button type = "button" class = "btn btn-warning warehouse_management_prop_edit_data" uuid = "' + warehouse_uuid + '">修改</button>'+
          '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  $("body").append(warehouse_management_html);
  $("#warehouse_management_prop_edit").modal("show");
  $("#warehouse_management_prop_edit").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function warehouse_management_edit_warehouse_data(obj) {
  var warehouse_uuid = obj.attr("uuid");
  var warehouse_name = obj.parents("#warehouse_management_prop_edit").find(".warehouse_name").val();
  if(null == warehouse_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
    alert("请输入正确的库区名称");
    return;
  };
  var warehouse_edit_data = {
    "uuid":warehouse_uuid,
    "name":warehouse_name
  };
  // 调用后台添加接口
  var warehouse_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyWarehouse";
  var warehouse_edit_get_warehouse = ajax_assistant(warehouse_edit_url, warehouse_edit_data, false, true, false);
  //console.log(warehouse_edit_get_warehouse);
  if (1 != warehouse_edit_get_warehouse.status) {
    alert("修改仓库失败");
  } else {    
  // 更新页面数据
  //clear getNewData fill
    warehouse_management_clear_raw_data();
    warehouse_management_server_data_cover();
    warehouse_management_fill_variable_data();
    $("#warehouse_management_prop_edit").modal("hide");
    $("#warehouse_management_prop_edit").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  }    
}

function warehouse_management_delet_warehouse_modal(obj) {
  var uuid = obj.attr("uuid");
  var warehouse_management_html = 
  '<div class = "modal fade bs-example-modal-sm custom_modal" id = "warehouse_management_delet" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">'+
    '<div class = "modal-dialog  modal-sm" role = "document">'+
      '<div class = "modal-content">'+
        '<div class = "modal-header bg-primary">'+
          '<button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>'+
          '<h4 class = "modal-title" id="myModalLabel">删除库区确认</h4>'+
        '</div>'+
        '<div class = "modal-body text-center nopadding-bottom warehouse_management_center">确定要删除库区吗？</div>'+
        '<div class = "modal-footer" style = "text-align: center;">'+
          '<button type = "button" class = "btn btn-danger warehouse_management_delet_data" uuid = "' + uuid + '">删除</button>'+
          '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  $("body").append(warehouse_management_html);
  $("#warehouse_management_delet").modal("show");
  $("#warehouse_management_delet").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function warehouse_management_delete_warehouse_data(obj) {
  var uuid = obj.attr("uuid");
  var warehouse_management_delete_data = {
    "uuid":uuid
  };
  var warehouse_delete_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeWarehouse";
  var warehouse_delete_get_warehouse = ajax_assistant(warehouse_delete_url, warehouse_management_delete_data, false, true, false);
  if (1 != warehouse_delete_get_warehouse.status) {
    alert("删除仓库失败");
  } else {    
  // 更新页面数据
  //clear getNewData fill
    warehouse_management_clear_raw_data();
    warehouse_management_server_data_cover();
    warehouse_management_fill_variable_data();
  }
  $("#warehouse_management_delet").modal("hide");
  $("#warehouse_management_delet").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function warehouse_management_add_warehouse_pot_modal(obj) {
  var warehouse_uuid = obj.attr("uuid");
  var warehouse_management_html = 
      '<div class = "modal fade custom_modal" id = "warehouse_management_tank_prop" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">'+
        '<div class = "modal-dialog" role = "document">'+
          '<div class = "modal-content">'+
            '<div class = "modal-header bg-primary">'+
              '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
              '<h4 class = "modal-title" id="myModalLabel">添加储罐</h4>'+
            '</div>'+
            '<div class = "modal-body nopadding-bottom">'+
              '<div class = "row">'+
                '<div class = "col-lg-6">'+
                  '<div class = "form-group">'+
                    '<label>储罐类型</label>'+
                    '<select class = "form-control storage_tank_style" value = "">'+
                      '<option value = "">--请选择--</option>'+
                      '<option value = "1">原料罐</option>'+
                      '<option value = "2">生产罐</option>'+
                    '</select>'+
                  '</div>'+
                '</div>'+
                '<div class = "col-lg-6">'+
                  '<div class = "form-group">'+
                    '<label>储罐名称</label>'+
                    '<input type = "text" class = "form-control storage_tank_name" value = "">'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "row">'+
                '<div class = "col-lg-6">'+
                  '<div class = "form-group">'+
                    '<label>有效容量(吨)</label>'+
                    '<input type = "text" class = "form-control effective_capacity" value = "">'+
                  '</div>'+
                '</div>'+
                '<div class = "col-lg-6">'+
                  '<div class = "form-group">'+
                    '<label>计费容量(吨)</label>'+
                    '<input type = "text" class = "form-control billing_capacity" value = "">'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class = "modal-footer" style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-primary warehouse_management_add_tank_data" warehouse_uuid = "' + warehouse_uuid + '">添加</button>'+
              '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(warehouse_management_html);
    $("#warehouse_management_tank_prop").modal("show");
    $("#warehouse_management_tank_prop").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
}

function warehouse_management_add_warehouse_pot_data(obj) {
  var warehouse_uuid = obj.attr("warehouse_uuid");
  var storage_tank_style = obj.parents("#warehouse_management_tank_prop").find(".storage_tank_style").val();//储罐类型
  var storage_tank_name = obj.parents("#warehouse_management_tank_prop").find(".storage_tank_name").val();//储罐名称
  var effective_capacity = obj.parents("#warehouse_management_tank_prop").find(".effective_capacity").val();//有效容量
  var billing_capacity = obj.parents("#warehouse_management_tank_prop").find(".billing_capacity").val();//计费容量
  //验证
  if (null == storage_tank_style.match(/^[12]$/)) {
    alert("请选择正确的储罐类型");
    return;
  }
  if (null == storage_tank_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
    alert("请输入正确的储罐名称");
    return;
  }
  if (null == effective_capacity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的有效容量");
    return;
  }
  if (null == billing_capacity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
    alert("请输入正确的计费容量");
    return;
  }
  //添加的参数
  var warehouse_m_pot_data = {
    "warehouse_uuid":warehouse_uuid,
    "type":storage_tank_style,
    "name":storage_tank_name,
    "effective_capacity":effective_capacity,
    "charge_capacity":billing_capacity
  };  
  // 调用后台添加接口
  var warehouse_pot_add_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addWarehousePot";
  var warehouse_pot_add_get_warehouse = ajax_assistant(warehouse_pot_add_url, warehouse_m_pot_data, false, true, false);
  if (1 != warehouse_pot_add_get_warehouse.status) {
    alert("添加储罐失败");
  } else {    
    // 更新页面数据
    //clear getNewData fill
    warehouse_management_clear_raw_data();
    warehouse_management_server_data_cover();
    warehouse_management_fill_variable_data();
    $("#warehouse_management_tank_prop").modal("hide");
    $("#warehouse_management_tank_prop").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  }  
}

function warehouse_management_edit_warehouse_pot_modal(obj, warehouse_uuid) {
    var warehouse_uuid = warehouse_uuid;
    var warehouse_tank_uuid = obj.attr("uuid");
    var storage_tank_style = "";
    var storage_tank_name = "";
    var effective_capacity = "";
    var billing_capacity = "";
    var data = {
      "uuid":warehouse_tank_uuid
      
    };
    // 调用后台接口
    var warehouse_pot_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehousePot";
    var warehouse_pot_edit_get_warehouse = ajax_assistant(warehouse_pot_edit_url, data, false, true, false);
    if(1 == warehouse_pot_edit_get_warehouse.status){
      var reslut_pot_json = JSON.parse(warehouse_pot_edit_get_warehouse.result);
      //console.log(reslut_pot_json);
      if(0 < reslut_pot_json.length){
        storage_tank_style = reslut_pot_json[0].type;
        storage_tank_name = reslut_pot_json[0].name;
        effective_capacity = reslut_pot_json[0].effective_capacity;
        billing_capacity = reslut_pot_json[0].charge_capacity;
      }
    }
    var warehouse_management_html = 
        '<div class = "modal fade custom_modal" id = "warehouse_management_tank_prop_edit" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title" id = "myModalLabel">修改储罐</h4>'+
              '</div>'+
              '<div class = "modal-body nopadding-bottom">'+
                '<div class = "row">'+
                  '<div class = "col-lg-6">'+
                    '<div class = "form-group">'+
                      '<label>储罐类型</label>'+
                      '<select class = "form-control storage_tank_style" value = "' + storage_tank_style + '">';
                        if(1 == storage_tank_style){
                          warehouse_management_html += '<option value = "1" selected = "selected">原料罐</option>'+
                                                      '<option value = "2">生产罐</option>';
                        } else {
                          warehouse_management_html += '<option value = "1">原料罐</option>'+
                                                      '<option value = "2" selected = "selected">生产罐</option>';
                        }                            
warehouse_management_html += '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-lg-6">'+
                    '<div class = "form-group">'+
                      '<label>储罐名称</label>'+
                      '<input type = "text" class = "form-control storage_tank_name" value = "' + storage_tank_name + '">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "col-lg-6">'+
                    '<div class = "form-group">'+
                      '<label>有效容量(吨)</label>'+
                      '<input type = "text" class = "form-control effective_capacity" value = "' + effective_capacity + '">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-lg-6">'+
                    '<div class = "form-group">'+
                      '<label>计费容量(吨)</label>'+
                      '<input type = "text" class = "form-control billing_capacity" value = "' +billing_capacity+ '">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-warning warehouse_management_tank_pencil_data" uuid = "' + warehouse_tank_uuid + '" warehouse_uuid = "'+ warehouse_uuid +'">修改</button>'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(warehouse_management_html);
    $("#warehouse_management_tank_prop_edit").modal("show");
    $("#warehouse_management_tank_prop_edit").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
}

function warehouse_management_edit_warehouse_pot_data(obj) {
  var warehouse_uuid = obj.attr("warehouse_uuid");
  var uuid = obj.attr("uuid");
  var storage_tank_style = obj.parents("#warehouse_management_tank_prop_edit").find(".storage_tank_style").val();//储罐类型
  var storage_tank_name = obj.parents("#warehouse_management_tank_prop_edit").find(".storage_tank_name").val();//储罐名称
  var effective_capacity = obj.parents("#warehouse_management_tank_prop_edit").find(".effective_capacity").val();//有效容量
  var billing_capacity = obj.parents("#warehouse_management_tank_prop_edit").find(".billing_capacity").val();//计费容量
  var warehouse_m_pot_data = {
    "uuid":uuid,
    "warehouse_uuid":warehouse_uuid,
    "type":storage_tank_style,
    "name":storage_tank_name,
    "effective_capacity":effective_capacity,
    "charge_capacity":billing_capacity
  };
  //验证 
  if(null == storage_tank_style.match(/^[12]$/)) {
      alert("请选择正确的储罐类型");
      return;
  }
  if(null == storage_tank_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的储罐名称");
      return;
  }
  if(null == effective_capacity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的有效容量");
      return;
  }
  if(null == billing_capacity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的计费容量");
      return;
  } 
  // 调用后台添加接口
  var warehouse_pot_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyWarehousePot";
  var warehouse_pot_edit_get_warehouse = ajax_assistant(warehouse_pot_edit_url, warehouse_m_pot_data, false, true, false);
  //console.log(warehouse_pot_edit_get_warehouse);
  if(1 != warehouse_pot_edit_get_warehouse.status){
    alert("修改储罐失败");
  } else {    
  // 更新页面数据
    warehouse_management_clear_raw_data();
    warehouse_management_server_data_cover();
    warehouse_management_fill_variable_data();  
    $("#warehouse_management_tank_prop_edit").modal("hide");
    $("#warehouse_management_tank_prop_edit").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  }  
}

function warehouse_management_delete_warehouse_pot_modal(obj) {
  var uuid = obj.attr("uuid");
  var warehouse_management_html = 
      '<div class = "modal fade bs-example-modal-sm custom_modal" id = "warehouse_management_tank_delet" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel">'+
        '<div class = "modal-dialog  modal-sm" role = "document">'+
          '<div class = "modal-content">'+
            '<div class = "modal-header bg-primary">'+
              '<button type = "button" class = "close" data-dismiss = "modal" aria-label="Close"><span aria-hidden = "true">&times;</span></button>'+
              '<h4 class = "modal-title" id = "myModalLabel">删除储罐确认</h4>'+
            '</div>'+
            '<div class = "modal-body text-center nopadding-bottom">确定要删除储罐吗？</div>'+
            '<div class = "modal-footer" style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-danger warehouse_management_tank_remove_data" uuid="'+uuid+'">删除</button>'+
              '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
  $("body").append(warehouse_management_html);
  $("#warehouse_management_tank_delet").modal("show");
  $("#warehouse_management_tank_delet").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function warehouse_management_delete_warehouse_pot_data(obj) {
  var uuid=obj.attr("uuid");
  var data={
    "uuid":uuid
  };
  //接口数据
  var warehouse_pot_delete_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeWarehousePot";
  var warehouse_pot_delete_get_warehouse = ajax_assistant(warehouse_pot_delete_url, data, false, true, false);
  if(1 != warehouse_pot_delete_get_warehouse.status){
    alert("删除储罐失败");
  } else {    
  // 更新页面数据
  //clear getNewData fill
    warehouse_management_clear_raw_data();
    warehouse_management_server_data_cover();
    warehouse_management_fill_variable_data();
  }
  $("#warehouse_management_tank_delet").modal("hide");
  $("#warehouse_management_tank_delet").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function warehouse_management_output(output_id) {
  var content = 
    '<div class = "row warehouse_management_row">'+
    '    <div class = "col-lg-12 warehouse_management_col">'+
    '      <div class = "list-group">'+
    '        <p href = "#" class = "list-group-item clearfix active warehouse_management_radius">库区管理<span class = "glyphicon glyphicon-plus pull-right " id = "warehouse_management_plus"></span></p>'+
    '        <div id="warehouse_management_box">'+
    '          <div>'+
    '            <p href = "#" class = "list-group-item clearfix warehouse_management_pl30 warehouse_management_bgddd">舟山纳海<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15 warehouse_management_colorfff"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15 warehouse_management_colorfff"></span><span class = "glyphicon glyphicon-plus pull-right warehouse_management_colorfff"></span></p>'+
    '            <div>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-cd  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-cd  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-record  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-record  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '            </div>'+
    '          </div>'+
    '          <div>'+
    '            <p href = "#" class = "list-group-item clearfix warehouse_management_pl30 warehouse_management_bgddd">舟山纳海<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15 warehouse_management_colorfff"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15 warehouse_management_colorfff"></span><span class = "glyphicon glyphicon-plus pull-right warehouse_management_colorfff"></span></p>'+
    '            <div>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-cd  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-cd  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-record  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '              <p href = "#" class = "list-group-item clearfix warehouse_management_pl30"><span class = "glyphicon glyphicon-record  warehouse_management_mr15"></span>E01<span class = "glyphicon glyphicon-remove pull-right warehouse_management_ml15"></span><span class = "glyphicon glyphicon-pencil pull-right warehouse_management_ml15"></span></p>'+
    '            </div>'+
    '          </div>'+
    '        </div>'+
    '      </div>'+
    '    </div>'+
    '  </div>';
    $(output_id).html(content);
}
