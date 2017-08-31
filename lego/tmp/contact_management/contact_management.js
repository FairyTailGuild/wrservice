/**
 * author yangyongxia
 */

var enterprise_data = [
  {"short_name": "腾智", "uuid": "1"},
  {"short_name": "福继", "uuid": "2"},
  {"short_name": "煦语", "uuid": "3"},
  {"short_name": "瑞腾", "uuid": "4"},
  {"short_name": "华威", "uuid": "5"}
];

var contact_data = [
  {"name": "张三","position": "经理","contact": "手机号:15764231001","enterprise": "腾智","uuid": "11"},
  {"name": "李四","position": "经理","contact": "手机号:15764231001","enterprise": "腾智","uuid": "12"},
  {"name": "王五","position": "经理","contact": "手机号:15764231001","enterprise": "腾智","uuid": "13"},
  {"name": "赵六","position": "经理","contact": "手机号:15764231001","enterprise": "腾智","uuid": "14"},
  {"name": "张二","position": "经理","contact": "手机号:15764231001","enterprise": "腾智","uuid": "15"}
];

/**
 * 分页变量
 */
var rows = 20;
var current_offset = 0;

/**
 * 全局搜索条件
 */
var contact_management_search_condition = {};

/**
 * 初始化
 */
function contact_management_clear_raw_data() {
  $("#contact_management_list thead").html("");
  $("#contact_management_list tbody").html("");
  $("#contact_management_pages").html("");
  $("#contact_management_enterprise_add").html("");
  $("#contact_management_enterprise_search").html("");
}

/**
 * 企业赋值
 */
function contact_management_fill_variable_enterprise_data() {
  var enterprise_content  = '<option value = "">--请选择--</option>';
  if (isJsonObjectHasData(enterprise_data)) {
    for (var i = 0; i < enterprise_data.length; i++) {
      enterprise_content += '<option value = "' + enterprise_data[i].uuid + '">' + enterprise_data[i].short_name + '</option>'
    }
  }
  $("#contact_management_enterprise_add").html(enterprise_content);
  $("#contact_management_enterprise_search").html(enterprise_content);
  var enterprise_content  = '<option value = "">--请选择--</option>';
}

/**
 * 联系人赋值
 */
function contact_management_fill_variable_data() {
  if (isJsonObjectHasData(contact_data)) {
    var contact_content_thead = 
      '<tr>'+
        '<th>姓名</th>'+
        '<th>职位</th>'+
        '<th>联系方式</th>'+
        '<th>所属公司</th>'+
        '<th></th>'+
      '</tr>';
    var contact_content_tbody = "";
    for (var i = 0; i < contact_data.length; i++) {
      contact_content_tbody += 
        '<tr>'+
          '<td>' + contact_data[i].name + '</td>'+
          '<td>' + contact_data[i].position + '</td>'+
          '<td>' + contact_data[i].contact + '</td>'+
          '<td>' + contact_data[i].enterprise + '</td>'+
          '<td>'+
            '<span class = "glyphicon glyphicon-remove pull-right contact_management_delete" data-uuid = "' + contact_data[i].uuid + '"></span>'+
          '</td>'+
        '</tr>';
    }
    $("#contact_management_list thead").html(contact_content_thead);
    $("#contact_management_list tbody").html(contact_content_tbody);
  } else {
    $("#contact_management_list thead").html("<tr><td colspan='5' align='center'>没数据</td></tr>");
    $("#contact_management_list tbody").html("");
  }
}

/**
 * 获取服务器企业数据
 */
function contact_management_server_enterprise_data_cover() {
  // 获取企业
  var contact_management_enterprise_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
  var contact_management_enterprise_param_data = {};
  var contact_management_enterprise = ajax_assistant(contact_management_enterprise_url, contact_management_enterprise_param_data, false, true, false);
  //////console.log(contact_management_enterprise);
  if (1 == contact_management_enterprise.status) {
    var enterprise_result = JSON.parse(contact_management_enterprise.result);
    //////console.log(enterprise_result);
    var enterprise_data_arr = new Array();
    for (var i = 0; i < enterprise_result.length; i++) {
      enterprise_data_arr.push({"short_name": enterprise_result[i].short_name, "uuid": enterprise_result[i].uuid});
    }
    enterprise_data = enterprise_data_arr;
  } else {
    alert("企业信息获取失败！");
  }
}

/**
 * 获取服务器联系人数据
 */
function contact_management_server_data_cover() {
  // 获取联系人
  var totalRows = 0;
  var contact_management_get_contact_url = PROJECT_PATH + "lego/lego_crm?servletName=getContact&data_count=1";
  delete contact_management_search_condition["rows"];
  delete contact_management_search_condition["offset"];  
  var contact_management_get_contact = ajax_assistant(contact_management_get_contact_url, contact_management_search_condition, false, true, false);
  ////console.log(contact_management_get_contact);
  if (1 == contact_management_get_contact.status) {
    var get_contact_result = JSON.parse(contact_management_get_contact.result);
    if (0 == get_contact_result[0].count) {
      $("#contact_management_pages").html("");
    } else {
      ////console.log(get_contact_result);
      totalRows = get_contact_result[0].count;
      generate_bootstrap_pagination_ctrl("#contact_management_pages", current_offset, rows, 3, totalRows);
      contact_management_search_condition["rows"] = rows;
      contact_management_search_condition["offset"] = current_offset;
    }
  } else {
    alert("联系人获取失败！");
  }
  // 获取联系人
  var contact_management_get_contact_url = PROJECT_PATH + "lego/lego_crm?servletName=getContact";
  var contact_management_get_contact = ajax_assistant(contact_management_get_contact_url, contact_management_search_condition, false, true, false);
  ////console.log(contact_management_get_contact);
  if (1 == contact_management_get_contact.status) {
    if (0 == contact_management_get_contact.count) {
      contact_data = {};
    } else {
      var get_contact_result = JSON.parse(contact_management_get_contact.result);
      ////console.log(get_contact_result);
      var contact_data_arr = new Array();
      for (var i = 0; i < get_contact_result.length; i++) {
        var contact = get_contact_result[i].contact_information_list.substring(0,get_contact_result[i].contact_information_list.indexOf(";"));
        // 获取联系人所在企业
        var enterprise_uuid = get_contact_result[i].enterprise_uuid;
        var contact_management_get_enterprise_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
        var contact_management_get_enterprise_param_data = {};
        contact_management_get_enterprise_param_data["uuid"] = enterprise_uuid;
        var contact_management_get_enterprise = ajax_assistant(contact_management_get_enterprise_url, contact_management_get_enterprise_param_data, false, true, false);
        ////console.log(contact_management_get_enterprise);
        if (1 == contact_management_get_enterprise.status) {
          var get_enterprise_result = JSON.parse(contact_management_get_enterprise.result);
          ////console.log(get_enterprise_result);
          contact_data_arr.push({"name": get_contact_result[i].name,"position": get_contact_result[i].position,"contact": contact,"enterprise": get_enterprise_result[0].short_name,"uuid": get_contact_result[i].uuid});
        }
      }
      contact_data = contact_data_arr;
      ////console.log(contact_data);
    }
  } else {
    alert("联系人获取失败！");
  }
}

/**
 * 点击分页函数
 */
function contact_management_pages_fun(obj) {
  current_offset = obj.attr("data-offset");
  contact_management_search_condition["offset"] = current_offset;
  contact_management_server_data_cover();
  contact_management_fill_variable_data();
}

/**
 * 企业名称搜索
 */
function contact_management_search_enterprise_name() {
  var enterprise_uuid = $("#contact_management_enterprise_search").val();
  $("#contact_management_contact_name").val("");
  if("" == enterprise_uuid){
    alert("请选择所属企业");
    return;
  }
  current_offset = 0;
  contact_management_search_condition = {};
  contact_management_search_condition["enterprise_uuid"] = enterprise_uuid;
  contact_management_server_data_cover();
  contact_management_fill_variable_data();
}

/**
 * 联系人姓名搜索
 */
function contact_management_search_contact_name() {
  var name_fuzzy = $("#contact_management_contact_name").val();
  $("#contact_management_enterprise_search").val("");
  if ("" == name_fuzzy){
    alert("请输入要查找的姓名！");
    return;
  } else {
    if(null == name_fuzzy.match(/^[\u4e00-\u9fffa]{1,16}$/)){
      alert("姓名格式不正确！");
      return;
    }
  }
  current_offset = 0;
  contact_management_search_condition = {};
  contact_management_search_condition["name_fuzzy"] = name_fuzzy;
  contact_management_server_data_cover();
  contact_management_fill_variable_data();
}

/**
 * 添加联系人
 */
function contact_management_add_contact() {
  var enterprise_uuid = $("#contact_management_enterprise_add").val();
  var name = $("#contact_management_name").val();
  var position = $("#contact_management_position").val();
  var contact_information_list = $("#contact_management_contact").val() + ':' + $("#contact_management_contact_way").val() + ';';
  var contact_way = $("#contact_management_contact_way").val();
  ////console.log(contact_information_list);
  if ("" == enterprise_uuid){
    alert("请选择企业！");
    return;
  }
  if ("" == name) {
    alert("请输入姓名！");
    return;
  } else {
    if(null == name.match(/^[\u4e00-\u9fffa]{2,16}$/)){
      alert("姓名格式不正确！");
      return;
    }
  }
  if ("" == position) {
    alert("请输入职位！");
    return;
  } else {
    if(null == position.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,16}$/)){
      alert("职位格式不正确！");
      return;
    }
  }
  if ("" == contact_way) {
    alert("请输入联系方式！");
    return;
  } else {
    if(null == contact_information_list.match(/^([\u4e00-\u9fffa0-9a-zA-Z]{2,10}:.{4,32};)+$/)){
      alert("联系方式格式不正确！");
      return;
    }
  }
  var contact_management_add_contact_url = PROJECT_PATH + "lego/lego_crm?servletName=addContact";
  var contact_management_add_contact_param_data = {};
  contact_management_add_contact_param_data["enterprise_uuid"] = enterprise_uuid;
  contact_management_add_contact_param_data["name"] = name;
  contact_management_add_contact_param_data["position"] = position;
  contact_management_add_contact_param_data["contact_information_list"] = contact_information_list;
  var contact_management_add_contact = ajax_assistant(contact_management_add_contact_url, contact_management_add_contact_param_data, false, true, false);
  ////console.log(contact_management_add_contact);
  if(1 == contact_management_add_contact.status) {
    $("#contact_management_success").show().delay (2000).fadeOut ();
    $("#contact_management_enterprise_add").val("");
    $("#contact_management_name").val("");
    $("#contact_management_position").val("");
    $("#contact_management_contact_way").val("");
  } else {
    alert("添加失败！");
  }
}

/**
 * 删除部门弹窗
 * @param uuid
 */
function contact_management_delete_contact(uuid) {
  var contact_management_delete_modal = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="contact_management_delete_modal" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">删除联系人确认</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除联系人吗？</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '">删除</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(contact_management_delete_modal);
  $("#contact_management_delete_modal").modal("show");
  $("#contact_management_delete_modal").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function contact_management_delete_data(uuid) {
  var delete_contact_url = PROJECT_PATH + "lego/lego_crm?servletName=removeContact";
  var delete_contact_param_data = {};
  delete_contact_param_data["uuid"] = uuid;
  var contact_management_delete_contact= ajax_assistant(delete_contact_url, delete_contact_param_data, false, true, false);
  ////console.log(contact_management_delete_contact);
  if (1 == contact_management_delete_contact.status) {
    $("#contact_management_delete_modal").modal("hide");
    contact_management_server_data_cover();
    contact_management_fill_variable_data();
  } else {
    alert("删除失败");
  }
}

/**
 * 输出联系人管理
 * @param output_id 输出内容id
 */
function contact_management_output(output_id) {
  var content = 
'      <div class = "panel panel-default panel-primary">'+
'        <div class = "panel-heading">添加联系人</div>'+
'        <div class = "panel-body" style="padding-bottom: 0;">'+
'          <div class = "row">'+
'            <div class = "col-md-2">'+
'              <div class = "form-group">'+
'                <label>企业简称</label>           '+
'                <select class = "form-control" id="contact_management_enterprise_add">           '+
'                  <option value = "">--请选择--</option>            '+
'                  <option value = "1">自运营企业</option>            '+
'                  <option value = "2">贸易企业</option>           '+
'                  <option value = "3">物流企业</option>         '+
'                </select>       '+
'              </div>'+
'            </div>'+
'            <div class = "col-md-2">'+
'              <div class = "form-group">'+
'                <label>姓名</label>           '+
'                <input type="text" class = "form-control" id = "contact_management_name">        '+
'              </div>'+
'            </div>'+
'            <div class = "col-md-2">'+
'              <div class = "form-group">'+
'                <label>职位</label>           '+
'                 <input type="text" class="form-control" id = "contact_management_position">   '+
'              </div>'+
'            </div>'+
'            <div class = "col-md-3 clearfix" id = "" style = "width: 310px;">'+
'              <label>联系方式</label> '+
'              <div class = "input-group pull-left">'+
'                <div class = "input-group-btn">'+
'                  <select class = "form-control " id = "contact_management_contact"  style = "width: 100px;">'+
'                    <option>手机号</option>'+
'                    <option>座机号</option>'+
'                    <option>宅电</option>'+
'                  </select>'+
'                </div>'+
'                <input type = "text" class = "pull-left" id = "contact_management_contact_way" aria-label = "..." style = "height: 34px;border: 1px solid #ccc;padding: 0 12px;">'+
'              </div>'+
'            </div>'+
'            <div class = "col-md-1" style = "width: 130px;">'+
'              <div class = "form-group" style = "margin-top: 25px;">'+
'                <button type = "button" class = "btn btn-primary" style = "width: 100px;" id = "contact_management_add_contact">添加</button>'+
'              </div>'+
'            </div>'+
'            <div class = "col-md-1" id = "contact_management_success" style = "margin-top: 30px;padding: 0;display: none;">'+
'                <span class = "glyphicon glyphicon-ok color-success"></span>'+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>'+
'      <div class = "panel panel-default panel-primary">'+
'        <div class = "panel-heading text-left">已有联系人</div>'+
'        <div class = "panel-body contact_management_pb0">'+
'          <div class = "col-md-3 clearfix">'+
'            <div class = "input-group pull-left">'+
'              <span class = "input-group-addon" id = "">所属企业</span>'+
'              <select class = "form-control" id = "contact_management_enterprise_search">'+
'                <option class = "">--请选择--</option>'+
'                <option value = "1">自运营企业</option>'+
'                <option value = "2">贸易企业</option>'+
'                <option value = "3">物流企业</option>'+
'              </select>'+
'            </div>'+
'          </div>'+
'          <div class = "col-md-2">'+
'            <button type = "button" class = "btn btn-primary pull-left" id = "contact_management_enterprise_search_btn" style = "width: 100px;">搜索</button>'+
'          </div>'+
'          <div class = "col-md-3">'+
'            <div class="input-group">                  '+
'              <span class="input-group-addon">姓名</span>                  '+
'              <input type="text" class="form-control name" id="contact_management_contact_name" aria-label="Amount (to the nearest dollar)">                  '+
'                <span class="input-group-btn"  id = "contact_management_contact_name_search"">                    '+
'                  <button class="btn btn-primary" type="button">                      '+
'                    <span class="glyphicon glyphicon-search"></span>                    '+
'                  </button>                  '+
'                </span>              '+
'            </div>'+
'          </div>'+
'          <div class = "col-md-12">'+
'            <table  class = "table contact_management_mt20" id = "contact_management_list">'+
'              <thead>'+
'                <tr>'+
'                  <th>姓名</th>'+
'                  <th>职位</th>'+
'                  <th>联系方式</th>'+
'                  <th>所属公司</th>'+
'                  <th></th>'+
'                </tr>'+
'              </thead>'+
'              <tbody>'+
'                <tr>'+
'                  <td>张三</td>'+
'                  <td>总经理</td>'+
'                  <td>手机号：15253175059 座机号：187561200</td>'+
'                  <td>腾智联合互联网科技公司</td>'+
'                  <td>'+
'                    <span class = "glyphicon glyphicon-remove pull-right contact_management_delete"></span>'+
'                  </td>'+
'                </tr>'+
'              </tbody>'+
'            </table>'+
'            <div id = "contact_management_pages">'+
'              <nav aria-label = "Page navigation" style = "text-align: right;">'+
'                <ul class = "pagination">'+
'                   <li>'+
'                      <a href = "#" aria-label = "Previous">'+
'                        <span aria-hidden = "true">&laquo;</span>'+
'                      </a>'+
'                    </li>'+
'                    <li class = "active"><span href = "#">1</span></li>'+
'                   <li>'+
'                      <a href = "#" aria-label = "Next">'+
'                       <span aria-hidden = "true">&raquo;</span>'+
'                      </a>'+
'                    </li>'+
'                </ul>'+
'              </nav>'+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>';
  $(output_id).html(content);
}