/**
 * @author wangdi
 */

function header_edit_password_func() {
  var header_edit_html = 
'    <div class = "modal fade custom_modal" id = "header_edit_password_modal" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel" aria-hidden = "false">'+
'     <div class = "modal-dialog modal-sm">'+
'       <div class = "modal-content">'+
'         <div class = "modal-header bg-primary">'+
'           <button type = "button" class = "close"  data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
'           <h4 class = "modal-title" id = "myModalLabel">修改密码</h4>'+
'         </div>'+
'         <div class = "modal-body nopadding-bottom">'+
'           <div class = "form-group">'+
'               <label for = "name" class = "pull-left">新密码</label>'+'<span class  =  "pull-right header_color_red" id  =  "header_edit_push_password"></span>'+
'               <input class = "form-control header_edit_new_password" type = "password">'+
'            </div>'+
'           <div class = "form-group">'+
'               <label for = "name">新密码确认</label>'+'<span class  =  "pull-right"></span>'+
'               <input class = "form-control header_edit_confirm_password" type = "password" value  =  "">'+
'            </div>'+
'         </div>'+
'         <div class = "modal-footer">'+
'           <button type = "button" class = "btn btn-primary" id  =  "header_edit_password_btn">修改</button>'+
'           <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
'         </div>'+
'       </div>'+
'     </div>'+
'   </div>';
  $("body").append(header_edit_html);
  $("#header_edit_password_modal").modal("show");
  $("#header_edit_password_modal").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function header_edit_password_save_func() {
  var header_edit_new_password = $(".header_edit_new_password").val();
  var header_edit_confirm_password = $(".header_edit_confirm_password").val();
  if ("" == header_edit_new_password && "" == header_edit_confirm_password) {
    $("#header_edit_push_password").html("请输入密码");
    $(".header_edit_new_password").focus();
    return;
  } else if ("" != header_edit_new_password && "" == header_edit_confirm_password) {
    $("#header_edit_push_password").html("请输入确认密码");
    $(".header_edit_confirm_password").focus();
    return;
  } else if ("" == header_edit_new_password && "" != header_edit_confirm_password) {
    $("#header_edit_push_password").html("请输入密码");
    $(".header_edit_new_password").focus();
    return;
  }
  if("" != header_edit_new_password && "" != header_edit_confirm_password && (header_edit_new_password!=header_edit_confirm_password)){
    alert("两次密码不一致");
    return;
  }
  var header_password_url = PROJECT_PATH+"lego/lego_user?servletName=modifyUserSecurityWithPasswordByUser";
  var header_password_param = {
    "password":header_edit_new_password
  };
  var header_edit_pass_result = ajax_assistant(header_password_url, header_password_param, false, true, false);
  if (1 == header_edit_pass_result.status) {
    $("#header_edit_password_modal").modal("hide");
    $("#header_edit_password_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  } else {
    alert("修改失败");
    return;
  }
}

function header_edit_log_out_modle_func() {
  var header_log_out_html =
'   <div class = "modal fade custom_modal" id = "header_log_out_event_modal" tabindex = "-1" role = "dialog" aria-labelledby = "myModalLabel" aria-hidden = "false">'+
'     <div class = "modal-dialog modal-sm">'+
'       <div class = "modal-content">'+
'         <div class = "modal-header bg-primary">'+
'           <button type = "button" class = "close"  data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
'           <h4 class = "modal-title">退出确认</h4>'+
'         </div>'+
'         <div class = "modal-body  nopadding-bottom text-center">'+
'               <h4>确认要退出吗？</h4>'+
'         </div>'+
'         <div class = "modal-footer text-center">'+
'           <button type = "button" class = "btn btn-danger" id  =  "header_log_out_btn">退出</button>'+
'           <button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
'         </div>'+
'       </div>'+
'     </div>'+
'   </div>';
  $("body").append(header_log_out_html);
  $("#header_log_out_event_modal").modal("show");
  $("#header_log_out_event_modal").on("hidden.bs.modal", function(e) {
    $(this).remove();
  });
}

function header_log_out_data_func() {
  var header_log_out_url = PROJECT_PATH+'lego/lego_user?servletName=logout';
  var header_log_out_result = ajax_assistant(header_log_out_url, "", false, true, false);
  if (1 == header_log_out_result.status) {
    $("#header_log_out_event_modal").modal("hide");
    $("#header_log_out_event_modal").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
    window.location.href = "../index/login.html"; 
  }
}

/**
 * 输出top_nav
 * @param output_id 输出内容id
 */
function header_output(output_id) {
  var content = 
    '<div class = "row header_row">'+
    '    <div class = "col-lg-12 header_col">'+
    '      <div class = "panel panel-primary header_radius header_mb0">'+
    '        <div class = "panel-heading clearfix header_radius">'+
    '          <div class="pull-left ">'+
    '            <img src = "../../img/fjerp_logo_white.png" width = "24" class = "header_mr15">'+
    '            <span class="header_line">系统管理</span>'+
    '          </div>'+
    '          <div class = "pull-right">'+
    '            <div class = "btn-group">'+
    '              <button class = "btn btn-default dropdown-toggle" type = "button" data-toggle = "dropdown" aria-haspopup = "true" aria-expanded = "false">'+
    '                管理员<span class = "caret"></span>'+
    '              </button>'+
    '              <ul class = "dropdown-menu header_menu">'+
    '                <li><a id = "header_edit_password_prop">修改密码</a></li>'+
    '                <li><a id = "header_log_out_modle">退出</a></li>'+
    '              </ul>'+
    '            </div>'+
    '          </div>'+
    '        </div>'+
    '      </div>'+
    '    </div>'+
    '   </div>';
    $(output_id).html(content);
}