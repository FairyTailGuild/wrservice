/**
 * @author yuanhang
 */

function LoginStatus() {
  // 配置信息对象
  this.configure = new Configure();
  // 工具类对象
  this.toolkit = new Toolkit();

  /**
   * 检查用户是否登录，如果没有登录，跳至登录界面，且成功后返回。
   */
  this.checkLogin = function() {
    let url = this.configure.getProjectPath() + "lego/lego_user?servletName=getUserSecurityByUser";
    let result = this.toolkit.ajaxAssistant(url, {}, false, true, false);
    if (1 == result.status) {
      if (1 == result.count) {
        // 已登录
        return;
      }
    }
    // 未登录
    window.location.href = "../index/login.html?redirect_url=" + window.location.href;
    window.onerror = function(s) {
      if ("user_not_login" == s) {
        // 返回true，浏览器不会提示错误信息。
        return true;
      }
    }
    throw new Error("user_not_login");
  };
}
