var login_redirect_url = null;

/**
 * @author wangdi
 */
function login_func() {
  var login_username_val = $(".login_username_val").val();
  var login_password_val = $(".login_password_val").val();
  if (null == login_username_val.match(/^[0-9a-zA-Z_-]{4,16}$/)) {
    $('#login_username').html("请输入正确的用户名");
    return;
  } else {
    $('#login_username').html("");
  }
  if (null == login_password_val.match(/^\S{1,16}$/)) {
    $('#login_password').html("请输入正确的密码");
    return;
  } else {
    $('#login_password').html("");
  }
  var login_data = {
    "name":login_username_val,
    "password":login_password_val
  };
  var login_url = PROJECT_PATH+'lego/lego_user?servletName=loginWithNamePassword';
  var login_result = ajax_assistant(login_url, login_data, false, true, false);
  if(1 == login_result.status) {
    if (null == login_redirect_url) {
      window.location.href = "index.html";
    } else {
      window.location.href = login_redirect_url;
    }
  } else {
    alert('用户名或密码输入有误，请检查');
  }
}

function login_output(output_id) {
  var content = 
    '<div class = "container-fluid">'+
    '    <div class = "panel panel-primary login_middle">'+
    '      <div class = "panel-heading panel-primary">登录</div>'+
    '      <div class = "panel-body">'+
    '        <div class = "text-center"><img src = "../../img/fjerp_logo_blue.png" width = "66"></div>'+
    '        <div class = "form-group">'+
    '          <label class = "pull-left">用户名</label><span class = "pull-left login_ml5" id = "login_username"></span>'+
    '          <input type = "text" class = "form-control login_username_val" value = "">'+
    '        </div>'+
    '        <div class = "form-group span-block">'+
    '          <label class = "pull-left">密码</label><span class = "pull-left login_ml5" id = "login_password"></span>'+
    '          <input type = "password" class = "form-control login_password_val" value = "">'+
    '        </div>'+
    '        <div class = "form-group text-center"><button type = "button" class = "btn btn-primary" id = "login_btn">登录</button></div>'+
    '      </div>'+
    '    </div>'+
    '  </div>';
    $(output_id).html(content);
}
