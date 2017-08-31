/**
 * @author yangyongxia
 */

var root_department = {"data": [
  {"name": "腾智联合","uuid": "0","parent_uuid": "00"}
]};

var department_data = {"data": [
  {"department_name": "财务部","uuid": "2","parent_uuid": "0"},
  {"department_name": "总裁办","uuid": "3","parent_uuid": "0"},
  {"department_name": "市场部","uuid": "4","parent_uuid": "0"},
  {"department_name": "商务支持部","uuid": "5","parent_uuid": "0"},
  {"department_name": "技术1部","uuid": "11","parent_uuid": "1"},
  {"department_name": "技术2部","uuid": "12","parent_uuid": "1"},
  {"department_name": "技术部","uuid": "1","parent_uuid": "0"},
  {"department_name": "财务1部","uuid": "21","parent_uuid": "2"},
  {"department_name": "财务1a","uuid": "98","parent_uuid": "21"},
  {"department_name": "财务aa","uuid": "99","parent_uuid": "98"},
  {"department_name": "财务2部","uuid": "22","parent_uuid": "2"},
  {"department_name": "市场1部","uuid": "41","parent_uuid": "4"},
  {"department_name": "市场2部","uuid": "42","parent_uuid": "4"},
]};

var position_data = {"data": [
  {"position_name": "董事长","uuid": "000","department_uuid": "0"},
  {"position_name": "总经理","uuid": "111","department_uuid": "1"},
  {"position_name": "经理","uuid": "112","department_uuid": "1"},
  {"position_name": "副经理","uuid": "112","department_uuid": "11"},
  {"position_name": "主任","uuid": "113","department_uuid": "11"},
  {"position_name": "副主任","uuid": "211","department_uuid": "21"},
  {"position_name": "职员","uuid": "212","department_uuid": "21"},
  {"position_name": "副主任","uuid": "221","department_uuid": "22"},
  {"position_name": "职员","uuid": "222","department_uuid": "22"},
]};

var employee_data = {"data": [
  {"employee_name": "张三","uuid": "0000","position_uuid": "000"},
  {"employee_name": "李四","uuid": "1111","position_uuid": "111"},
  {"employee_name": "王五","uuid": "1121","position_uuid": "112"},
  {"employee_name": "赵六","uuid": "1122","position_uuid": "112"},
  {"employee_name": "张一","uuid": "1131","position_uuid": "113"},
  {"employee_name": "李二","uuid": "2111","position_uuid": "211"},
  {"employee_name": "王三","uuid": "2121","position_uuid": "212"},
  {"employee_name": "赵四","uuid": "2211","position_uuid": "221"},
  {"employee_name": "张二","uuid": "2221","position_uuid": "222"},
]};

var current_employee_detail_data = {
  "user_uuid": "4564546",
  "uuid": "asdfadsf",
  "name": "zhangsan",
  "sex": "女",
  "password": "!@#$%^&*()",
  "telphone_number": "13133333333",
  "real_name": "张三",
  "email": "zhangsan@163.com",
  "wechat": "3s222222",
  "work_area_uuid": "3",
};

var work_area_data = {"data": [
  {"work_area_name": "库区1","work_area_uuid": "1"},
  {"work_area_name": "库区2","work_area_uuid": "2"},
  {"work_area_name": "库区3","work_area_uuid": "3"},
  {"work_area_name": "库区4","work_area_uuid": "4"},
  {"work_area_name": "库区5","work_area_uuid": "5"},
  {"work_area_name": "库区6","work_area_uuid": "6"},
  {"work_area_name": "库区7","work_area_uuid": "7"},
]};

var current_root_department_data = {
  "uuid": "asdfadsf",
  "name": "腾智联合",
  "parent_uuid": "00"
};

function org_structure_clear_raw_data() {
  $("#org_structure_list").html("");
}

function org_structure_fill_variable_data() {
  var content  = "";
  if (isJsonObjectHasData(root_department)) {
    for (var i = 0; i < root_department.data.length; i++) {
      content = 
        '<ul class = "list-group">'+
          '<li class = "list-group-item org_structure_lh40 cuuid_' + root_department.data[i].uuid + '">'+
            '<p class = "oli clearfix bg-primary" style="margin-top: 2px;">'+
              '<span class = "glyphicon glyphicon-menu-hamburger pull-left mr20" aria-hidden = "true"></span>'+
              '<span>' + root_department.data[i].name + '</span>'+
              '<span class="glyphicon glyphicon-remove pull-right org_structure_department_delete" data-uuid = "' + root_department.data[i].uuid + '" title="删除部门" aria-hidden="true"></span>'+
              '<span class="glyphicon glyphicon-pencil pull-right mr20 org_structure_root_department_edit" data-name = "' + root_department.data[i].name + '" data-uuid = "' + root_department.data[i].uuid + '" data-parent_uuid = "' + root_department.data[i].parent_uuid + '" title="修改部门" aria-hidden="true"></span>'+
              '<span class="glyphicon glyphicon-asterisk pull-right mr20 org_structure_position_add" data-uuid = "' + root_department.data[i].uuid + '" title="添加岗位" aria-hidden="true"></span>'+
              '<span class="glyphicon glyphicon-plus pull-right mr20 org_structure_department_add" data-uuid = "' + root_department.data[i].uuid + '" title="添加子部门" aria-hidden="true"></span>'+
            '</p>'+
          '</li>'+
        '</ul>';
      $("#org_structure_list").html(content);  
    }
    if (isJsonObjectHasData(department_data)) {
      $("#org_structure_list").append(each_department(root_department_uuid, -1));
    }
    if (isJsonObjectHasData(position_data)) {
      for (var i = position_data.data.length - 1; i >= 0; i--) {
        content = 
          '<ul class="list-group">'+
            '<li class="list-group-item org_structure_lh40 cuuid_' + position_data.data[i].uuid + '">'+
              '<p class="oli clearfix" style="margin-top:2px;padding-left: 45px;">'+
                '<span class="glyphicon glyphicon-menu-hamburger pull-left mr20" aria-hidden="true"></span>'+
                '<span>' + position_data.data[i].position_name + '</span>'+
                '<span class="glyphicon glyphicon-remove pull-right org_structure_position_delete" data-uuid = "' + position_data.data[i].uuid + '" title="删除岗位" aria-hidden="true"></span>'+
                '<span class="glyphicon glyphicon-pencil pull-right mr20 org_structure_position_edit" data-name = "' + position_data.data[i].position_name + '" data-uuid = "' + position_data.data[i].uuid + '"  data-parent_uuid = "' + position_data.data[i].department_uuid + '" title="修改岗位" aria-hidden="true"></span>'+
                '<span class="glyphicon glyphicon-user pull-right mr20 org_structure_employee_add" data-uuid = "' + position_data.data[i].uuid + '" title="添加员工" aria-hidden="true"></span>'+
              '</p>'+
            '</li>'+
          '</ul>';
        $("#org_structure_list .cuuid_" + position_data.data[i].department_uuid + " >p").after(content);
      }
    }
    if (isJsonObjectHasData(employee_data)) {
      for (var i = employee_data.data.length - 1; i >= 0; i--) {
        content = 
          '<ul class="list-group">'+
            '<li class="list-group-item org_structure_lh40 cuuid_' + employee_data.data[i].uuid + '">'+
              '<p class="oli clearfix" style="margin-top:2px;padding-left: 48px;">'+
                '<span>' + employee_data.data[i].employee_name + '</span>'+
                '<span class="glyphicon glyphicon-remove pull-right org_structure_employee_delete" data-uuid = "' + employee_data.data[i].uuid + '" data-user_uuid = "' + employee_data.data[i].user_uuid + '" title="删除员工" aria-hidden="true"></span>'+
                '<span class="glyphicon glyphicon-pencil pull-right mr20 org_structure_employee_edit" data-uuid = "' + employee_data.data[i].uuid + '" data-parent_uuid = "' + employee_data.data[i].position_uuid + '"  data-user_uuid = "' + employee_data.data[i].user_uuid + '" title="修改员工" aria-hidden="true"></span>'+
              '</p>'+
            '</li>'+
          '</ul>';
        $("#org_structure_list .cuuid_" + employee_data.data[i].position_uuid + " >p").after(content);
      }
    }
  } else {
    content = 
      '<ul class="list-group">'+
        '<li class="list-group-item org_structure_lh40">'+
          '<p class="oli clearfix  bg-primary" style="margin-top:2px;">'+
            '<span class="glyphicon glyphicon-menu-hamburger pull-left mr20" aria-hidden="true"></span>'+
            '<span>请先添加企业</span>'+
            '<span class="glyphicon glyphicon-plus pull-right mr20 org_structure_enterprise_add" title="添加企业" aria-hidden="true"></span>'+
          '</p>'+
        '</li>'+
      '</ul>';
    $("#org_structure_list").html(content);  
  }
}

/**
 * 服务器数据
 */
var root_department_uuid = null;

/**
 * 获取根部门
 */
function org_structure_get_root_department_data_fill() {  
  var root_department_url = PROJECT_PATH + "lego/lego_workflow?servletName=getDepartment";
  var root_department_param_data = {};
  root_department_param_data["parent_uuid"] = "00000000000000000000000000000000";
  var org_structure_get_root_departmnt = ajax_assistant(root_department_url, root_department_param_data, false, true, false);
  console.log(org_structure_get_root_departmnt);
  if (1 == org_structure_get_root_departmnt.status) {
    if (0 == org_structure_get_root_departmnt.count) {
      root_department = {};
    } else {
      var root_departmnt_arr = new Array();
      var result = JSON.parse(org_structure_get_root_departmnt.result); 
      for (var i = 0; i < result.length; i++) {
        root_departmnt_arr.push({"name":result[i].name, "uuid":result[i].uuid, "parent_uuid": result[i].parent_uuid});
        root_department_uuid = result[i].uuid;
      }
      root_department["data"] = root_departmnt_arr;
    }
  } else {
    alert("获取企业失败");
  } 
}

function org_structure_server_data_cover() {  
  //获取部门
  var department_url = PROJECT_PATH + "lego/lego_workflow?servletName=getDepartment";
  var departmnt_param_data = {};
  var org_structure_get_departmnt = ajax_assistant(department_url, departmnt_param_data, false, true, false);
  if (1 == org_structure_get_departmnt.status) {
    if (0 == org_structure_get_departmnt.count) {
      root_department = {};
    } else {
      var department_arr = new Array();
      var result = JSON.parse(org_structure_get_departmnt.result); 
      for (var i = 0, j =0; i < result.length; i++) {
        if ("00000000000000000000000000000000" == result[i].parent_uuid) {
          continue;
        }
        department_arr.push({"department_name":result[i].name, "uuid":result[i].uuid, "parent_uuid": result[i].parent_uuid});
        j++;
      }
      department_data["data"] = department_arr;
    }
  } else {
    alert("获取部门失败");
    return;
  } 
  //获取岗位
  var position_url = PROJECT_PATH + "lego/lego_workflow?servletName=getPosition";
  var position_param_data = {};
  var org_structure_get_position = ajax_assistant(position_url, position_param_data, false, true, false);
  if (1 == org_structure_get_position.status) {
    if (0 == org_structure_get_position.count) {
      position_data = {};
    } else {
      var positiont_arr = new Array();
      var result = JSON.parse(org_structure_get_position.result); 
      for (var i = 0; i < result.length; i++) {
        positiont_arr.push({"position_name":result[i].name, "uuid":result[i].uuid, "department_uuid": result[i].department_uuid});
      }
      position_data["data"] = positiont_arr;
    }
  } else {
    alert("获取岗位失败");
    return;
  } 
  //获取员工
  var employee_url = PROJECT_PATH + "lego/lego_workflow?servletName=getEmployeeByManager";
  var employee_param_data = {};
  var org_structure_get_employee = ajax_assistant(employee_url, employee_param_data, false, true, false);
  if (1 == org_structure_get_employee.status) {
    if (0 == org_structure_get_employee.count) {
      employee_data = {};
    } else {
      var employee_arr = new Array();
      var result = JSON.parse(org_structure_get_employee.result);
      for (var i = 0; i < result.length; i++) {
        employee_arr.push({"employee_name":result[i].name, "uuid":result[i].uuid, "position_uuid": result[i].position_uuid, "user_uuid": result[i].user_uuid});
      }
      employee_data["data"] = employee_arr;
      console.log(employee_data["data"]);
    }
  } else {
    alert("获取岗位失败");
  }  
}

function each_department(pid, index) {
  var result = "";
  for (var i = 0; i < department_data.data.length; i++) {
    if (department_data.data[i].parent_uuid == pid) {
      var count = (30 + (30 * index++));
       result += 
        '<ul class = "list-group">'+
          '<li class = "list-group-item org_structure_lh40 cuuid_' + department_data.data[i].uuid + '" style = " padding-left: ' + count + 'px;">'+
            '<p class = "oli clearfix org_structure_bgd8d8d8" style = "margin-top:2px;">'+
              '<span class = "glyphicon glyphicon-menu-hamburger pull-left mr20" aria-hidden = "true"></span>'+
              '<span>' + department_data.data[i].department_name + '</span>'+
              '<span class = "glyphicon glyphicon-remove pull-right org_structure_department_delete" data-uuid = "' + department_data.data[i].uuid + '" title = "删除部门" aria-hidden = "true"></span>'+
              '<span class = "glyphicon glyphicon-pencil pull-right mr20 org_structure_department_edit" data-name = "' + department_data.data[i].department_name + '" data-uuid = "' + department_data.data[i].uuid + '" data-parent_uuid = "' + department_data.data[i].parent_uuid + '" title = "修改部门" aria-hidden = "true"></span>'+
              '<span class = "glyphicon glyphicon-asterisk pull-right mr20 org_structure_position_add" data-uuid = "' + department_data.data[i].uuid + '" title = "添加岗位" aria-hidden = "true"></span>'+
              '<span class = "glyphicon glyphicon-plus pull-right mr20 org_structure_department_add" data-uuid = "' + department_data.data[i].uuid + '" title = "添加子部门" aria-hidden = "true"></span>'+
            '</p>'+
          '</li>'+
        '</ul>';     
        result += each_department(department_data.data[i].uuid, index);
        index--;
    }
  }
  return result;
}

/**
 * 添加根部门弹窗
 */
function org_structure_add_enterprise_func() {
  var org_structure_add_enterprise = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_add_enterprise" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">添加部门</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom">'+
            '<div class="form-group">'+
              '<label>部门名称</label>'+
              '<input type="text" class="form-control enterprise_name">'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-primary add_btn">添加</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_add_enterprise);
  $("#org_structure_add_enterprise").modal("show");
  $("#org_structure_add_enterprise").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function org_structure_add_enterprise_data_func() {
  var enterprise_name = $("#org_structure_add_enterprise .enterprise_name").val();
  if("" == enterprise_name){
    alert("请输入企业名称！");
    return;
  } else {
    if(null == enterprise_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("企业名称格式错误！");
      return;
    }
  }
  var add_root_department_url = PROJECT_PATH + "lego/lego_workflow?servletName=addRootDepartment";
  var add_root_department_param_data = {};
  add_root_department_param_data["name"] = enterprise_name;
  add_root_department_param_data["parent_uuid"] = "00000000000000000000000000000000";
  var org_structure_add_root_department = ajax_assistant(add_root_department_url, add_root_department_param_data, false, true, false);
  console.log(org_structure_add_root_department);
  if (1 == org_structure_add_root_department.status) {
    $("#org_structure_add_enterprise").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("添加失败");
  }
}
/**
 * 添加部门弹窗
 * @param parent_uuid
 */
function org_structure_add_department_func(parent_uuid) {
  var org_structure_add_department = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_add_department" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">添加部门</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom">'+
            '<div class="form-group">'+
              '<label>部门名称</label>'+
              '<input type="text" class="form-control department_name">'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-primary add_btn" data-parent_uuid = "' + parent_uuid + '">添加</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_add_department);
  $("#org_structure_add_department").modal("show");
  $("#org_structure_add_department").on("hidden.bs.modal", function (e) {
     $(this).remove();
  });
}
function org_structure_add_department_data_func(parent_uuid) {
  var department_name = $("#org_structure_add_department .department_name").val();
  if("" == department_name){
    alert("请输入部门名称！");
    return;
  } else {
    if(null == department_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("部门名称格式错误！");
      return;
    }
  }
  //判断是否重名
  var check_department_name_exist_url = PROJECT_PATH + "lego/lego_workflow?servletName=checkDepartmentNameExist";
  var check_department_name_exist_param_data = {};
  check_department_name_exist_param_data["parent_uuid"] = parent_uuid;
  check_department_name_exist_param_data["name"] = department_name;
  var check_department_name_exist = ajax_assistant(check_department_name_exist_url, check_department_name_exist_param_data, false, true, false);
  console.log(check_department_name_exist);
  if(1 != check_department_name_exist.status){
    alert("该部门已存在");
    return;
  }
  var add_department_url = PROJECT_PATH + "lego/lego_workflow?servletName=addDepartment";
  var add_department_param_data = {};
  add_department_param_data["name"] = department_name;
  add_department_param_data["parent_uuid"] = parent_uuid;
  var org_structure_add_department = ajax_assistant(add_department_url, add_department_param_data, false, true, false);
  console.log(org_structure_add_department);
  if (1 == org_structure_add_department.status) {
    $("#org_structure_add_department").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("添加失败");
  }
}

/**
 * 修改根部门弹窗
 */
function org_structure_edit_enterprise_func(name, uuid) {
  var org_structure_edit_root_department = 
  '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_edit_root_department" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
    '<div class="modal-dialog modal-sm" role="document">'+
      '<div class="modal-content">'+
        '<div class="modal-header bg-primary">'+
          '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
          '<h4 class="modal-title" id="myModalLabel">修改部门</h4>'+
        '</div>'+
      '<div class="modal-body nopadding-bottom">'+
        '<div class="form-group">'+
          '<label>部门名称</label>'+
          '<input type="text" class="form-control enterprise_name" value = "' + name + '" >'+
        '</div>'+
      '</div>'+
        '<div class="modal-footer">'+
          '<button type="button" class="btn btn-warning edit_btn" data-uuid = "' + uuid + '">修改</button>'+
          '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
        '</div>'+
      '</div>'+
    '</div>'+
  '</div>';
  $("body").append(org_structure_edit_root_department);
  $("#org_structure_edit_root_department").modal("show");
  $("#org_structure_edit_root_department").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}
function org_structure_edit_enterprise_data_func(uuid) {
  var enterprise_name = $("#org_structure_edit_root_department .enterprise_name").val();
  if("" == enterprise_name){
    alert("请输入企业名称！");
    return;
  } else {
    if(null == enterprise_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("企业名称格式错误！");
      return;
    }
  }
  var edit_root_department_url = PROJECT_PATH + "lego/lego_workflow?servletName=modifyRootDepartment";
  var edit_root_department_param_data = {};
  edit_root_department_param_data["name"] = enterprise_name;
  edit_root_department_param_data["parent_uuid"] = "00000000000000000000000000000000";
  edit_root_department_param_data["uuid"] = uuid;
  var org_structure_edit_root_department = ajax_assistant(edit_root_department_url, edit_root_department_param_data, false, true, false);
  console.log(org_structure_edit_root_department);
  if (1 == org_structure_edit_root_department.status) {
    $("#org_structure_edit_root_department").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("修改失败");
  }
}

/**
 * 修改部门弹窗
 * @param name
 * @param uuid
 * @param parent_uuid
 */
function org_structure_edit_department_func(name, uuid, parent_uuid) {
  var org_structure_edit_department = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_edit_department" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">修改部门</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom">'+
            '<div class="form-group">'+
              '<label>部门名称</label>'+
              '<input type="text" class="form-control department_name" value = "' + name + '" >'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-warning edit_btn" data-uuid = "' + uuid + '" data-parent_uuid = "' + parent_uuid + '">修改</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_edit_department);
  $("#org_structure_edit_department").modal("show");
  $("#org_structure_edit_department").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_edit_department_data_func(uuid, parent_uuid) {
  var department_name = $("#org_structure_edit_department .department_name").val();
  if("" == department_name){
    alert("请输入部门名称！");
    return;
  } else {
    if(null == department_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("部门名称格式错误！");
      return;
    }
  }
  //判断是否重名
  var check_department_name_exist_url = PROJECT_PATH + "lego/lego_workflow?servletName=checkDepartmentNameExist";
  var check_department_name_exist_param_data = {};
  check_department_name_exist_param_data["parent_uuid"] = parent_uuid;
  check_department_name_exist_param_data["name"] = department_name;
  var check_department_name_exist = ajax_assistant(check_department_name_exist_url, check_department_name_exist_param_data, false, true, false);
  console.log(check_department_name_exist);
  if (1 != check_department_name_exist.status) {
    alert("该部门已存在");
    return;
  }
  var edit_department_url = PROJECT_PATH + "lego/lego_workflow?servletName=modifyDepartment";
  var edit_department_param_data = {};
  edit_department_param_data["name"] = department_name;
  edit_department_param_data["parent_uuid"] = parent_uuid;
  edit_department_param_data["uuid"] = uuid;
  var org_structure_edit_department = ajax_assistant(edit_department_url, edit_department_param_data, false, true, false);
  console.log(org_structure_edit_department);
  if (1 == org_structure_edit_department.status) {
    $("#org_structure_edit_department").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("修改失败");
  }
}

/**
 * 删除部门弹窗
 * @param uuid
 */
function org_structure_delete_department_func(uuid) {
  var org_structure_delete_department = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_delete_department" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">删除部门确认</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除部门吗？</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '">删除</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_delete_department);
  $("#org_structure_delete_department").modal("show");
  $("#org_structure_delete_department").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_delete_department_data_func(uuid) {
  var delete_department_url = PROJECT_PATH + "lego/lego_workflow?servletName=removeDepartment";
  var delete_department_param_data = {};
  delete_department_param_data["uuid"] = uuid;
  var org_structure_delete_department = ajax_assistant(delete_department_url, delete_department_param_data, false, true, false);
  console.log(org_structure_delete_department);
  if (1 == org_structure_delete_department.status) {
    $("#org_structure_delete_department").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("删除失败");
  }
}

/**
 * 添加岗位
 * @param department_uuid
 */
function org_structure_add_position_func(department_uuid) {
  var org_structure_add_position = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_add_position" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">添加岗位</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom">'+
            '<div class="form-group">'+
              '<label>岗位名称</label>'+
              '<input type="text" class="form-control position_name">'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-primary add_btn" data-department_uuid = "' + department_uuid + '">添加</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_add_position);
  $("#org_structure_add_position").modal("show");
  $("#org_structure_add_position").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_add_position_data_func(department_uuid) {
  var position_name = $("#org_structure_add_position .position_name").val();
  if("" == position_name){
    alert("请输入部门名称！");
    return;
  } else {
    if(null == position_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("部门名称格式错误！");
      return;
    }
  }
  //判断是否重名
  var check_position_name_exist_url = PROJECT_PATH + "lego/lego_workflow?servletName=checkPositionNameExist";
  var check_position_name_exist_param_data = {};
  check_position_name_exist_param_data["department_uuid"] = department_uuid;
  check_position_name_exist_param_data["name"] = position_name;
  var check_position_name_exist = ajax_assistant(check_position_name_exist_url, check_position_name_exist_param_data, false, true, false);
  console.log(check_position_name_exist);
  if (1 != check_position_name_exist.status) {
    alert("该岗位已存在");
    return;
  }
  var add_position_url = PROJECT_PATH + "lego/lego_workflow?servletName=addPosition";
  var add_position_param_data = {};
  add_position_param_data["name"] = position_name;
  add_position_param_data["department_uuid"] = department_uuid;
  var org_structure_add_position = ajax_assistant(add_position_url, add_position_param_data, false, true, false);
  console.log(org_structure_add_position);
  if (1 == org_structure_add_position.status) {
    $("#org_structure_add_position").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("添加失败");
  }
}

/**
 * 修改岗位
 * @param name
 * @param uuid
 * @param department_uuid
 */
function org_structure_edit_position_func(name, uuid, department_uuid) {
  var org_structure_edit_position = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_edit_position" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">修改岗位</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom">'+
            '<div class="form-group">'+
              '<label>岗位名称</label>'+
              '<input type="text" class="form-control position_name" value = "' + name + '" >'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-warning edit_btn" data-uuid = "' + uuid + '" data-department_uuid = "' + department_uuid + '">修改</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_edit_position);
  $("#org_structure_edit_position").modal("show");
  $("#org_structure_edit_position").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_edit_position_data_func(uuid, department_uuid) {
  var position_name = $("#org_structure_edit_position .position_name").val();
  if("" == position_name){
    alert("请输入部门名称！");
    return;
  } else {
    if(null == position_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)){
      alert("部门名称格式错误！");
      return;
    }
  }
  //判断是否重名
  var check_position_name_exist_url = PROJECT_PATH + "lego/lego_workflow?servletName=checkPositionNameExist";
  var check_position_name_exist_param_data = {};
  check_position_name_exist_param_data["department_uuid"] = department_uuid;
  check_position_name_exist_param_data["name"] = position_name;
  var check_position_name_exist = ajax_assistant(check_position_name_exist_url, check_position_name_exist_param_data, false, true, false);
  console.log(check_position_name_exist);
  if (1 != check_position_name_exist.status) {
    alert("该岗位已存在");
    return;
  }
  var edit_position_url = PROJECT_PATH + "lego/lego_workflow?servletName=modifyPosition";
  var edit_position_param_data = {};
  edit_position_param_data["name"] = position_name;
  edit_position_param_data["uuid"] = uuid;
  edit_position_param_data["department_uuid"] = department_uuid;
  var org_structure_edit_position = ajax_assistant(edit_position_url, edit_position_param_data, false, true, false);
  console.log(org_structure_edit_position);
  if (1 == org_structure_edit_position.status) {
    $("#org_structure_edit_position").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("修改失败");
  }
}

/**
 * 删除岗位弹窗
 * @param uuid
 */
function org_structure_delete_position_func(uuid) {
  var org_structure_delete_position = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_delete_position" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">删除岗位确认</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除岗位吗？</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-danger remove" data-uuid = "' + uuid + '">删除</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_delete_position);
  $("#org_structure_delete_position").modal("show");
  $("#org_structure_delete_position").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_delete_position_data_func(uuid) {
  var delete_position_url = PROJECT_PATH + "lego/lego_workflow?servletName=removePosition";
  var delete_position_param_data = {};
  delete_position_param_data["uuid"] = uuid;
  var org_structure_delete_position = ajax_assistant(delete_position_url, delete_position_param_data, false, true, false);
  console.log(org_structure_delete_position);
  if (1 == org_structure_delete_position.status) {
    $("#org_structure_delete_position").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("删除失败");
  }
}

/**
 * 获取库区
 */
function get_warehouse() {
  var get_warehouse_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehouse";
  var get_warehouse_param_data = {};
  var org_structure_get_warehouse = ajax_assistant(get_warehouse_url, get_warehouse_param_data, false, true, false);
  console.log(org_structure_get_warehouse);
  if (1 == org_structure_get_warehouse.status) {
    if (0 == org_structure_get_warehouse.count) {
      work_area_data = {};
    } else {
      var warehouse_arr = new Array();
      var result = JSON.parse(org_structure_get_warehouse.result); 
      for (var i = 0; i < result.length; i++) {
        warehouse_arr.push({"work_area_name":result[i].name, "work_area_uuid":result[i].uuid});
      }
      work_area_data["data"] = warehouse_arr;
      console.log(work_area_data["data"]);
    }
  } else {
    alert("获取库区失败");
    return;
  } 
}

/**
 * 添加员工
 * @param position_uuid
 */
function org_structure_add_employee_func(position_uuid) {
  var org_structure_add_employee = 
    '<div class="modal fade custom_modal" id="org_structure_add_employee" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
      '<div class="modal-dialog" role="document">'+
          '<div class="modal-content">'+
            '<div class="modal-header bg-primary">'+
              '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
              '<h4 class="modal-title" id="myModalLabel">添加用户</h4>'+
            '</div>'+
            '<div class="modal-body">'+
              '<div class="row">'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">用户名</label>'+
                      '<input type="text" class="form-control name" />'+
                    '</div>'+
                  '</form>'+
                '</div>'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group sex" style="margin-top: 30px;">'+
                      '<label>'+
                        '<input id="check_men" type="radio" style="height: 22px;width: 22px;" name="flat-radio" value="男">'+
                        '<span>男</span>'+
                      '</label>'+
                      '<label>'+
                        '<input id="check_women" type="radio" style="height: 22px;width: 22px;" name="flat-radio"  value="女">'+
                        '<span>女</span>'+
                      '</label>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
              '<div class="row">'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">密码</label>'+
                      '<input type="password" class="form-control password" />'+
                    '</div>'+
                  '</form>'+
                '</div>'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">联系电话</label>'+
                      '<input type="text" class="form-control telephone_number" />'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
              '<div class="row">'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">姓名</label>'+
                      '<input type="text" class="form-control employee_name" />'+
                    '</div>'+
                  '</form>'+
                '</div>'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">Email</label>'+
                      '<input type="text" class="form-control email" />'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
              '<div class="row">'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">微信编号</label>'+
                      '<input type="text" class="form-control wechat_openid" />'+
                    '</div>'+
                  '</form>'+
                '</div>'+
                '<div class="col-md-6">'+
                  '<form>'+
                    '<div class="form-group">'+
                      '<label for="">所在库区</label>'+
                      '<select class="form-control work_area_uuid">'+
                        '<option>--请选择--</option>'+
                      '</select>'+
                    '</div>'+
                  '</form>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class="modal-footer">'+
              '<button type="button" class="btn btn-primary add_btn" data-position_uuid = "' + position_uuid + '">保存</button>'+
              '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
            '</div>'+
          '</div>'+
      '</div>'+
    '</div>'+
    '<script>'+
    '  $("input").iCheck({'+
    '    radioClass: "iradio_square-blue"'+
    '  });'+
    '</script>';
  $("body").append(org_structure_add_employee);
  $("#org_structure_add_employee").modal("show");
  //库区
  get_warehouse();
  var work_area_select = '<option value = "">--请选择--</option>';
  for (var i = 0; i < work_area_data.data.length; i++) {
    work_area_select += '<option value = "' + work_area_data.data[i].work_area_uuid + '">' + work_area_data.data[i].work_area_name + '</option>'
    $("#org_structure_add_employee select").html(work_area_select);
  }
  $(document).find("#check_men").iCheck('check');
  $("#org_structure_add_employee").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_add_employee_data_func(position_uuid) {
  var name = $("#org_structure_add_employee .name").val();
  var password = $("#org_structure_add_employee .password").val();
  var wechat_openid = $("#org_structure_add_employee .wechat_openid").val();
  var employee_name = $("#org_structure_add_employee .employee_name").val();
  var telephone_number = $("#org_structure_add_employee .telephone_number").val();
  var email = $("#org_structure_add_employee .email").val();
  var work_area_uuid = $("#org_structure_add_employee .work_area_uuid").val();
  var sex = "";
  for(var i=0; i<$("#org_structure_add_employee .sex label").length; i++) {
    if(true == $("#org_structure_add_employee .sex label").eq(i).find("input").prop("checked")) {
      sex = $("#org_structure_add_employee .sex label").eq(i).find("span").html();
      break;
    }
  }
  if("" == name){
    alert("请输入用户名！");
    return;
  } else {
    if(null == name.match(/^[0-9a-zA-Z_-]{4,16}$/)){
      alert("用户名格式错误！");
      return;
    }
  }
  if(null == sex.match(/^[男女]$/)){
    alert("请选择性别！");
    return;
  }
  if("" == password){
    alert("请输入密码！");
    return;
  } else {
    if(null == password.match(/^\S{1,16}$/)){
      alert("密码输入格式错误！");
      return;
    }
  }
  if("" == employee_name){
    alert("请输入姓名！");
    return;
  } else {
    if(null == employee_name.match(/^[\u4e00-\u9fffaa-zA-Z]{2,16}$/)){
      alert("姓名输入错误！");
      return;
    }
  }
  var add_employee_url = PROJECT_PATH + "lego/lego_workflow?servletName=addUserEmployee";
  var add_employee_param_data = {};
  add_employee_param_data["name"] = name;
  add_employee_param_data["password"] = password;
  add_employee_param_data["sex"] = sex;
  add_employee_param_data["position_uuid"] = position_uuid;
  add_employee_param_data["employee_name"] = employee_name;
  if("" != wechat_openid){
    if(null == wechat_openid.match(/^[0-9a-zA-Z_-]{12,32}$/)){
      alert("微信编号输入错误！");
      return;
    }
    add_employee_param_data["wechat_openid"] = wechat_openid;
  }
  if("" != telephone_number){
    if(null == telephone_number.match(/^[0-9]{6,15}$/)){
      alert("联系方式输入错误！");
      return;
    }
    add_employee_param_data["telephone_number"] = telephone_number;
  }
  if("" != email){
    if(null == email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
      alert("Email输入错误！");
      return;
    }
    add_employee_param_data["email"] = email;
  }
  if("" != work_area_uuid){
    if(null == work_area_uuid.match(/^[0-9a-zA-Z]{32}$/)){
      alert("库区输入错误！");
      return;
    }
    add_employee_param_data["work_area_uuid"] = work_area_uuid;
  }
  var org_structure_add_employee = ajax_assistant(add_employee_url, add_employee_param_data, false, true, false);
  console.log(org_structure_add_employee);
  if (1 == org_structure_add_employee.status) {
    $("#org_structure_add_employee").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("添加失败");
  }
}

function get_employee_detail(user_uuid) {
  var employee_url = PROJECT_PATH + "lego/lego_workflow?servletName=getEmployeeByManager";
  var employee_param_data = {};
  employee_param_data["user_uuid"] = user_uuid;
  var org_structure_get_employee = ajax_assistant(employee_url, employee_param_data, false, true, false);
  console.log(org_structure_get_employee);
  //获取用户
  var user_url = PROJECT_PATH + "lego/lego_user?servletName=getUserSecurityByManager";
  var user_param_data = {};
  user_param_data["uuid"] = user_uuid;
  var org_structure_get_user= ajax_assistant(user_url, user_param_data, false, true, false);
  console.log(org_structure_get_user);
  if (1 == org_structure_get_employee.status) {
    var result = JSON.parse(org_structure_get_employee.result);
    var result_user = JSON.parse(org_structure_get_user.result);
    console.log(result_user);
    var telphone_number = result[0].telephone_number;
    if(null == telphone_number){
      telphone_number = "";
    }
    var email = result[0].email;
    if(null == email){
      email = "";
    }
    var wechat = result_user[0].wechat_openid;
    if(null == wechat){
      wechat = "";
    }
    var work_area_uuid = result[0].work_area_uuid;
    if(null == work_area_uuid){
      work_area_uuid = "";
    }
    current_employee_detail_data = {
      "user_uuid": result[0].user_uuid,
      "uuid": result[0].uuid,
      "name": result_user[0].name,
      "sex": result[0].sex,
      "password": result_user[0].password,
      "telphone_number": telphone_number,
      "real_name": result[0].name,
      "email": email,
      "wechat": wechat,
      "work_area_uuid": result[0].work_area_uuid,
    };
  } else {
    alert("获取员工失败");
    return;
  }  
};

/**
 * 修改员工
 * @param position_uuid
 * @param user_uuid
 */
function org_structure_edit_employee_func(position_uuid, user_uuid) {
  get_employee_detail(user_uuid);
  var org_structure_edit_employee = 
    '<div class="modal fade custom_modal" id="org_structure_edit_employee" tabindex="-1" role="dialog" aria-labelledby="myModalLabel">'+
      '<div class="modal-dialog" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">修改用户</h4>'+
          '</div>'+
          '<div class="modal-body">'+
            '<div class="row">'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">用户名</label>'+
                    '<input type="text" class="form-control name" readonly="readonly" value = "' + current_employee_detail_data.name + '" />'+
                  '</div>'+
                '</form>'+
              '</div>'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group sex" style="margin-top: 30px;">'+
                    '<label>'+
                      '<input id="edit_check_men" type="radio" style="height: 22px;width: 22px;" name="flat-radio" value="男">'+
                      '<span>男</span>'+
                    '</label>'+
                    '<label>'+
                      '<input id="edit_check_women" type="radio" style="height: 22px;width: 22px;" name="flat-radio"  value="女">'+
                      '<span>女</span>'+
                    '</label>'+
                  '</div>'+
                '</form>'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">密码</label>'+
                    '<input type="password" class="form-control password" placeholder = "password" />'+
                  '</div>'+
                '</form>'+
              '</div>'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">联系电话</label>'+
                    '<input type="text" class="form-control telephone_number" value = "' + current_employee_detail_data.telphone_number + '" />'+
                  '</div>'+
                '</form>'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">姓名</label>'+
                    '<input type="text" class="form-control employee_name" value = "' + current_employee_detail_data.real_name + '" />'+
                  '</div>'+
                '</form>'+
              '</div>'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">Email</label>'+
                    '<input type="text" class="form-control email" value = "' + current_employee_detail_data.email + '" />'+
                  '</div>'+
                '</form>'+
              '</div>'+
            '</div>'+
            '<div class="row">'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">微信编号</label>'+
                    '<input type="text" class="form-control wechat_openid" readonly="readonly" value = "' + current_employee_detail_data.wechat + '" />'+
                  '</div>'+
                '</form>'+
              '</div>'+
              '<div class="col-md-6">'+
                '<form>'+
                  '<div class="form-group">'+
                    '<label for="">所在库区</label>'+
                    '<select class="form-control work_area_uuid">'+
                      '<option>--请选择--</option>'+
                    '</select>'+
                  '</div>'+
                '</form>'+
              '</div>'+
            '</div>'+
          '</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-warning edit_btn" data-user_uuid = "' + user_uuid + '" data-position_uuid = "' + position_uuid + '">修改</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>'+
    '<script>'+
    '  $("input").iCheck({'+
    '    radioClass: "iradio_square-blue"'+
    '  });'+
    '</script>';
  $("body").append(org_structure_edit_employee);
  $("#org_structure_edit_employee").modal("show");
  var sex = current_employee_detail_data.sex;
  if("男" == sex){
    $(document).find("#edit_check_men").iCheck('check');
  } else if("女" == sex){
    $(document).find("#edit_check_women").iCheck('check');
  }
  //库区
  get_warehouse()
  var work_area_select = '<option value = "">--请选择--</option>';
  for(var i = 0; i < work_area_data.data.length; i++) {
    work_area_select += '<option value = "' + work_area_data.data[i].work_area_uuid + '">' + work_area_data.data[i].work_area_name + '</option>'
    $("#org_structure_edit_employee select").html(work_area_select);
  }
  for(var i = 0; i < $("#org_structure_edit_employee select option").length; i++){
    var work_area_uuid = current_employee_detail_data.work_area_uuid;
    var value = $("#org_structure_edit_employee select option").eq(i).val();
    console.log(work_area_uuid);
    if($("#org_structure_edit_employee select option").eq(i).val() == work_area_uuid) {
      $("#org_structure_edit_employee select option").eq(i).prop('selected','selected');
      break;
    }
  }
  $("#org_structure_edit_employee").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function org_structure_edit_employee_data_func(user_uuid, position_uuid) {
  var name = $("#org_structure_edit_employee .name").val();
  var employee_name = $("#org_structure_edit_employee .employee_name").val();
  var telephone_number = $("#org_structure_edit_employee .telephone_number").val();
  var email = $("#org_structure_edit_employee .email").val();
  var work_area_uuid = $("#org_structure_edit_employee .work_area_uuid").val();
  var password = $("#org_structure_edit_employee .password").val();
  var sex = "";
  for(var i=0; i<$("#org_structure_edit_employee .sex label").length; i++) {
    if(true == $("#org_structure_edit_employee .sex label").eq(i).find("input").prop("checked")) {
      sex = $("#org_structure_edit_employee .sex label").eq(i).find("span").html();
      break;
    }
  }
  if(null == sex.match(/^[男女]$/)){
    alert("请选择性别！");
    return;
  }
  if("" == employee_name){
    alert("请输入姓名！");
    return;
  } else {
    if(null == employee_name.match(/^[\u4e00-\u9fffaa-zA-Z]{2,16}$/)){
      alert("姓名输入错误！");
      return;
    }
  }
  var edit_employee_url = PROJECT_PATH + "lego/lego_workflow?servletName=modifyEmployee";
  var edit_employee_param_data = {};
  edit_employee_param_data["user_uuid"] = user_uuid;
  edit_employee_param_data["employee_name"] = employee_name;
  edit_employee_param_data["sex"] = sex;
  edit_employee_param_data["position_uuid"] = position_uuid;
  if("" != telephone_number){
    if(null == telephone_number.match(/^[0-9]{6,15}$/)){
      alert("联系方式输入错误！");
      return;
    }
    edit_employee_param_data["telephone_number"] = telephone_number;
  } else{
    edit_employee_param_data["sn_telephone_number"] = "set_null";
  }
  if("" != email){
    if(null == email.match(/^[a-zA-Z0-9_-]+@[a-zA-Z0-9_-]+(\.[a-zA-Z0-9_-]+)+$/)){
      alert("Email输入错误！");
      return;
    }
    edit_employee_param_data["email"] = email;
  } else{
    edit_employee_param_data["sn_email"] = "set_null";
  }
  if("" != work_area_uuid){
    if(null == work_area_uuid.match(/^[0-9a-zA-Z]{32}$/)){
      alert("库区输入错误！");
      return;
    }
    edit_employee_param_data["work_area_uuid"] = work_area_uuid;
  } else{
    edit_employee_param_data["sn_work_area_uuid"] = "set_null";
  }
  var org_structure_edit_employee = ajax_assistant(edit_employee_url, edit_employee_param_data, false, true, false);
  console.log(org_structure_edit_employee);
  //修改用户密码
  if ("" != password) {
    console.log(password);
    if(null == password.match(/^\S{1,16}$/)){
      alert("密码输入格式错误！");
      return;
    }
    var edit_password_url = PROJECT_PATH + "lego/lego_user?servletName=modifyUserSecurityWithPasswordByManager";
    var edit_password = {};
    edit_password["uuid"] = user_uuid;
    edit_password["password"] = password;
    var org_structure_edit_password = ajax_assistant(edit_password_url, edit_password, false, true, false);
    console.log(org_structure_edit_password);
   }
  if (1 == org_structure_edit_employee.status) {
    $("#org_structure_edit_employee").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("修改失败");
  }
}

/**
 * 删除员工弹窗
 * @param user_uuid
 */
function org_structure_delete_employee_func(user_uuid) {
  var org_structure_delete_employee = 
    '<div class="modal fade bs-example-modal-sm custom_modal" id="org_structure_delete_employee" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel">'+
      '<div class="modal-dialog modal-sm" role="document">'+
        '<div class="modal-content">'+
          '<div class="modal-header bg-primary">'+
            '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
            '<h4 class="modal-title" id="myModalLabel">删除员工确认</h4>'+
          '</div>'+
          '<div class="modal-body nopadding-bottom" style="text-align: center;margin-bottom: 15px;">确认要删除员工吗？</div>'+
          '<div class="modal-footer">'+
            '<button type="button" class="btn btn-danger remove" data-user_uuid = "' + user_uuid + '">删除</button>'+
            '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</div>';
  $("body").append(org_structure_delete_employee);
  $("#org_structure_delete_employee").modal("show");
  $("#org_structure_delete_employee").on("hidden.bs.modal", function (e) {
    $(this).remove();
  });
}

function org_structure_delete_employee_data_func(user_uuid) {
  var delete_employee_url = PROJECT_PATH + "lego/lego_workflow?servletName=removeUserEmployee";
  var delete_employee_param_data = {};
  delete_employee_param_data["user_uuid"] = user_uuid;
  var org_structure_delete_employee= ajax_assistant(delete_employee_url, delete_employee_param_data, false, true, false);
  console.log(org_structure_delete_employee);
  if (1 == org_structure_delete_employee.status) {
    $("#org_structure_delete_employee").modal("hide");
    org_structure_get_root_department_data_fill();
    org_structure_server_data_cover();
    org_structure_fill_variable_data();
  } else {
    alert("删除失败");
  }
}

/**
 * 输出组织架构
 * @param output_id 输出内容id
 */
function org_structure_output(output_id) {
  var content =
'        <div class = "" id="org_structure_list">'+
'          <ul class = "list-group">'+
'            <li class = "list-group-item org_structure_lh40">'+
'              <p>'+
'                <span class = "glyphicon glyphicon-menu-hamburger pull-left"></span>'+
'                <span>腾智联和互联网科技有限公司</span>'+
'                <span class = "glyphicon glyphicon-remove pull-right deleteDepartment" title = "删除部门" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteDepartment"></span>'+
'                <span class = "glyphicon glyphicon-pencil pull-right editDepartment" title = "修改部门" aria-hidden = "true" data-toggle = "modal" data-target = "#editDepartment"></span>'+
'                <span class = "glyphicon glyphicon-asterisk pull-right addPosition" title = "添加岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#addPosition"></span>'+
'                <span class = "glyphicon glyphicon-plus pull-right addDepartment" title = "添加子部门" aria-hidden = "true" data-toggle = "modal" data-target = "#addDepartment"></span>'+
'              </p>'+
'              <ul class = "list-group">'+
'                <li class = "list-group-item">'+
'                  <p class = "clearfix" style = "font-weight:bold;">'+
'                    <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                    <span>总经理</span>'+
'                    <span class = "glyphicon glyphicon-remove pull-right deletePosition" title = "删除岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#deletePosition"></span>'+
'                    <span class = "glyphicon glyphicon-pencil pull-right editPosition" title = "修改岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#editPosition"></span>'+
'                    <span class = "glyphicon glyphicon-user pull-right addEmployee" title = "添加员工" aria-hidden = "true" data-toggle = "modal" data-target = "#addEmployee"></span>'+
'                  </p>'+
'                  <ul class = "list-group">'+
'                    <li class = "list-group-item">'+
'                      <p class = "clearfix">'+
'                        <span>张三</span>'+
'                        <span class = "glyphicon glyphicon-remove pull-right deleteEmployee" title = "删除员工" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteEmployee"></span>'+
'                        <span class = "glyphicon glyphicon-pencil pull-right editEmployee" title = "修改员工" aria-hidden = "true" data-toggle = "modal" data-target = "#editEmployee"></span>'+
'                      </p>'+
'                    </li>'+
'                  </ul>'+
'                </li>'+
'                <li class = "list-group-item">'+
'                  <p class = "oli clearfix org_structure_bgd8d8d8" style = "margin-top:2px;">'+
'                    <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                    <span>技术部</span>'+
'                    <span class = "glyphicon glyphicon-remove pull-right deleteDepartment" title = "删除部门" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-pencil pull-right editDepartment" title = "修改部门" aria-hidden = "true" data-toggle = "modal" data-target = "#editDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-asterisk pull-right addPosition" title = "添加岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#addPosition"></span>'+
'                    <span class = "glyphicon glyphicon-plus pull-right addDepartment" title = "添加子部门" aria-hidden = "true" data-toggle = "modal" data-target = "#addDepartment"></span>'+
'                  </p>'+
'                  <ul class = "list-group">'+
'                    <li class = "list-group-item">'+
'                      <p class = "oli clearfix" style = "font-weight:bold;">'+
'                        <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                        <span>经理</span>'+
'                        <span class = "glyphicon glyphicon-remove pull-right deletePosition" title = "删除岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#deletePosition"></span>'+
'                        <span class = "glyphicon glyphicon-pencil pull-right editPosition" title = "修改岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#editPosition"></span>'+
'                        <span class = "glyphicon glyphicon-user pull-right addEmployee" title = "添加员工" aria-hidden = "true" data-toggle = "modal" data-target = "#addEmployee"></span>'+
'                      </p>'+
'                      <ul class = "list-group">'+
'                        <li class = "list-group-item">'+
'                          <p class = "oli clearfix">'+
'                            <span>李四</span>'+
'                            <span class = "glyphicon glyphicon-remove pull-right deleteEmployee" title = "删除员工" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteEmployee"></span>'+
'                            <span class = "glyphicon glyphicon-pencil pull-right editEmployee" title = "修改员工" aria-hidden = "true" data-toggle = "modal" data-target = "#editEmployee"></span>'+
'                          </p>'+
'                        </li>'+
'                      </ul>'+
'                    </li>'+
'                  </ul>'+
'                </li>'+
'                <li class = "list-group-item">'+
'                  <p class = "oli clearfix org_structure_bgd8d8d8" style = "margin-top:2px;">'+
'                    <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                    <span>财务部</span>'+
'                    <span class = "glyphicon glyphicon-remove pull-right deleteDepartment" title = "删除部门" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-pencil pull-right editDepartment" title = "修改部门" aria-hidden = "true" data-toggle = "modal" data-target = "#editDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-asterisk pull-right addPosition" title = "添加岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#addPosition"></span>'+
'                    <span class = "glyphicon glyphicon-plus pull-right addDepartment" title = "添加子部门" aria-hidden = "true" data-toggle = "modal" data-target = "#addDepartment"></span>'+
'                  </p>'+
'                  <ul class = "list-group">'+
'                    <li class = "list-group-item">'+
'                      <p class = "oli clearfix" style = "font-weight:bold;">'+
'                        <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                        <span>主任</span>'+
'                        <span class = "glyphicon glyphicon-remove pull-right deletePosition" title = "删除岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#deletePosition"></span>'+
'                        <span class = "glyphicon glyphicon-pencil pull-right editPosition" title = "修改岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#editPosition"></span>'+
'                        <span class = "glyphicon glyphicon-user pull-right addEmployee" title = "添加员工" aria-hidden = "true" data-toggle = "modal" data-target = "#addEmployee"></span>'+
'                      </p>'+
'                      <ul class = "list-group">'+
'                        <li class = "list-group-item">'+
'                          <p class = "oli clearfix">'+
'                            <span>王五</span>'+
'                            <span class = "glyphicon glyphicon-remove pull-right deleteEmployee" title = "删除员工" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteEmployee"></span>'+
'                            <span class = "glyphicon glyphicon-pencil pull-right editEmployee" title = "修改员工" aria-hidden = "true" data-toggle = "modal" data-target = "#editEmployee"></span>'+
'                          </p>'+
'                        </li>'+
'                      </ul>'+
'                    </li>'+
'                  </ul>'+
'                </li>'+
'                <li class = "list-group-item">'+
'                  <p class = "oli clearfix org_structure_bgd8d8d8" style = "margin-top:2px;">'+
'                    <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                    <span>市场部</span>'+
'                    <span class = "glyphicon glyphicon-remove pull-right deleteDepartment" title = "删除部门" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-pencil pull-right editDepartment" title = "修改部门" aria-hidden = "true" data-toggle = "modal" data-target = "#editDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-asterisk pull-right addPosition" title = "添加岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#addPosition"></span>'+
'                    <span class = "glyphicon glyphicon-plus pull-right addDepartment" title = "添加子部门" aria-hidden = "true" data-toggle = "modal" data-target = "#addDepartment"></span>'+
'                  </p>'+
'                </li>'+
'                <li class = "list-group-item">'+
'                  <p class = "oli clearfix org_structure_bgd8d8d8" style = "margin-top:2px;">'+
'                    <span class = "glyphicon glyphicon-menu-hamburger pull-left" aria-hidden = "true"></span>'+
'                    <span>人资管理</span>'+
'                    <span class = "glyphicon glyphicon-remove pull-right deleteDepartment" title = "删除部门" aria-hidden = "true" data-toggle = "modal" data-target = "#deleteDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-pencil pull-right editDepartment" title = "修改部门" aria-hidden = "true" data-toggle = "modal" data-target = "#editDepartment"></span>'+
'                    <span class = "glyphicon glyphicon-asterisk pull-right addPosition" title = "添加岗位" aria-hidden = "true" data-toggle = "modal" data-target = "#addPosition"></span>'+
'                    <span class = "glyphicon glyphicon-plus pull-right addDepartment" title = "添加子部门" aria-hidden = "true" data-toggle = "modal" data-target = "#addDepartment"></span>'+
'                  </p>'+
'                </li>'+
'              </ul>'+
'            </li>'+
'          </ul>'+
'        </div>';
    $(output_id).html(content);
}
