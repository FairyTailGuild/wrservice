/**
 * @author yuanhang
 */

// 严格模式
"use strict";

function Toolkit() {
  /**
   * 根据参数名从url获取参数值
   * @param paramName 参数名
   * return 找到返回参数值，否则返回null。
   */
  this.getQueryFromUrl = function(paramName) {
       let reg = new RegExp("(^|&)"+ paramName +"=([^&]*)(&|$)");
       let result = window.location.search.substr(1).match(reg);
       if (null != result) {
         let value = result[2];
         if (0 >= value.length) {
           return null;
         }
         return unescape(value);
       } else {
         return null;
       }
  };

  /**
   * ajax助手
   * @param url 请求地址
   * @param data 参数数据
   * @param isAsync true:异步 false:同步
   * @param isWithCredentials true:自带证书 false:不带证书
   * @param isMultipartUpload true:附件模式 false:文本模式
   */
  this.ajaxAssistant = function(url, data, isAsync, isWithCredentials, isMultipartUpload) {
    let result;
    let isCrossDomain;
    if (-1 != window.location.protocol.indexOf("http")) {
      isCrossDomain = false;
    } else {
      isCrossDomain = true;
    }
    let contentType = "application/x-www-form-urlencoded";
    let processData = true;
    if (isMultipartUpload) {
      contentType = false;
      processData = false;
    }
    $.ajax({
      // 请求方式
      "type": "post",
      // 同步or异步
      "async": isAsync,
      // 请求地址
      "url": url,
      // 参数数据
      "data": data,
      // 数据类型
      "dataType": "json",
      // 是否自带证书
      "xhrFields": {
          withCredentials: isWithCredentials
      },
      // 内容类型
      "contentType": contentType,
      // 是否以contentType的默认值传递数据
      "processData": processData,
      // 是否跨域
      // "crossDomain": isCrossDomain,
      // 操作成功后的返回结果
      "success": function(r){
          result = r;
      }
    });
    return result;
  };

  /**
   * 判断json的对象是否含有数据
   * @param jsonObj json对象
   * return true:有数据 false:无数据
   */
  this.isJsonObjectHasData = function(jsonObj) {
    for (var key in jsonObj) {
      return true;
    }
    return false;
  };

  /**
   * 生成bootstrap分页控件
   * @param outputId 输出id
   * @param offset 当前显示数据的偏移
   * @param limit 显示的条目数
   * @param pageCount 页签数量（不包括“向左”和“向右”）
   * @param totalCount 总页数
   */
  this.generateBootstrapPaginationCtrl = function(outputId, offset, limit, pageCount, totalCount) {
    if (offset > totalCount) {
      return;
    }
    let currentPage;
    let code;
    code += '<nav class = "pull-right">';
    code += '<ul class = "pagination">';
    if (0 >= offset) {
      currentPage = 1;
    } else {
      currentPage = Math.ceil(offset / limit) + 1;
    }
    let count = Math.ceil(totalCount / limit);
    let displaySceneCount = Math.ceil(count / pageCount);
    let currentPageSceneNum = Math.ceil(currentPage / pageCount);
    if (currentPageSceneNum > 1) {
      code += '<li data-offset = "' + (((currentPageSceneNum - 1) * pageCount * limit) - limit) + '"><a><span>«</span></a></li>';
    }
    for (let i = ((currentPageSceneNum * pageCount) - pageCount + 1); i <= (currentPageSceneNum * pageCount); i++) {
      if (i > count) {
        break;
      }
      if (i == (currentPage)) {
        code += '<li data-offset = "' + (i * limit - limit) + '" class = "active"><a>' + i + '</a></li>';
      } else {
        code += '<li data-offset = "' + (i * limit - limit) + '"><a>' + i + '</a></li>';
      }
    }
    if ((displaySceneCount - currentPageSceneNum) >= 1) {
      code += '<li data-offset = "' + ((currentPageSceneNum * pageCount * limit)) + '"><a><span>»</span></a></li>';
    }
    code += '</ul>';
    code += '</nav>';
    $(outputId).html(code);
  };
}
