/**
 * @author yuanhang
 */

function UploadAttachment(outputId) {
  // 配置信息对象
  this.configure = new Configure();

  // 输出内容id
  this.outputId = outputId;
  
  /**
   * 绑定上传附件按钮事件
   */
  this.init = function() {
    // 增加控件值更改事件
    $(document).on("change", this.outputId + " .upload_attachment_file_choose", function() {
      for (let i = 0; i < $(this)[0].files.length; i++) {
        if (!this.uploadTempAttachmentToServer($(this)[0].files[i])) {
          alert("[" + $(this)[0].files[i].name + "]上传失败");
          return;
        }
      }
      // 清空值，以备下次使用。
      $(this.outputId).find(".upload_attachment_file_choose").val("");
      this.uploadAttachmentBtnEventBind();
    });
  };

  /**
   * 根据后缀获取图片显示的src
   * @param fileName 文件名
   */
  this.getDisplayImageSrc = function(fileName) {
    let imgSrc;
    let suffix = fileName.substring(fileName.indexOf(".") + 1).toLowerCase();
    if ("png" == suffix) {
       imgSrc = this.configure.getProjectPath() + "upload/" + fileName;
     } else if ("jpg" == suffix) {
       imgSrc = this.configure.getProjectPath() + "upload/" + fileName;
     } else if ("jpeg" == suffix) {
       imgSrc = this.configure.getProjectPath() + "upload/" + fileName;
     } else if ("gif" == suffix) {
       imgSrc = this.configure.getProjectPath() + "upload/" + fileName;
     } else {
       if ("accdb" == suffix) {
         imgSrc = "../../img/file_type/accdb.png";
       } else if ("avi" == suffix) {
         imgSrc = "../../img/file_type/avi.png";
       } else if ("bmp" == suffix) {
         imgSrc = "../../img/file_type/bmp.png";
       } else if ("css" == suffix) {
         imgSrc = "../../img/file_type/css.png";
       } else if ("doc" == suffix) {
         imgSrc = "../../img/file_type/doc.png";
       } else if ("docx" == suffix) {
         imgSrc = "../../img/file_type/docx.png";
       } else if ("eml" == suffix) {
         imgSrc = "../../img/file_type/eml.png";
       } else if ("eps" == suffix) {
         imgSrc = "../../img/file_type/eps.png";
       } else if ("fla" == suffix) {
         imgSrc = "../../img/file_type/fla.png";
       } else if ("ind" == suffix) {
         imgSrc = "../../img/file_type/ind.png";
       } else if ("ini" == suffix) {
         imgSrc = "../../img/file_type/ini.png";
       } else if ("jsf" == suffix) {
         imgSrc = "../../img/file_type/jsf.png";
       } else if ("midi" == suffix) {
         imgSrc = "../../img/file_type/midi.png";
       } else if ("mov" == suffix) {
         imgSrc = "../../img/file_type/mov.png";
       } else if ("mp3" == suffix) {
         imgSrc = "../../img/file_type/mp3.png";
       } else if ("mpeg" == suffix) {
         imgSrc = "../../img/file_type/mpeg.png";
       } else if ("pdf" == suffix) {
         imgSrc = "../../img/file_type/pdf.png";
       } else if ("pptx" == suffix) {
         imgSrc = "../../img/file_type/pptx.png";
       } else if ("proj" == suffix) {
         imgSrc = "../../img/file_type/proj.png";
       } else if ("psd" == suffix) {
         imgSrc = "../../img/file_type/psd.png";
       } else if ("pub" == suffix) {
         imgSrc = "../../img/file_type/pub.png";
       } else if ("rar" == suffix) {
         imgSrc = "../../img/file_type/rar.png";
       } else if ("readme" == suffix) {
         imgSrc = "../../img/file_type/readme.png";
       } else if ("settings" == suffix) {
         imgSrc = "../../img/file_type/settings.png";
       } else if ("tiff" == suffix) {
         imgSrc = "../../img/file_type/tiff.png";
       } else if ("url" == suffix) {
         imgSrc = "../../img/file_type/url.png";
       } else if ("vsd" == suffix) {
         imgSrc = "../../img/file_type/vsd.png";
       } else if ("wav" == suffix) {
         imgSrc = "../../img/file_type/wav.png";
       } else if ("wma" == suffix) {
         imgSrc = "../../img/file_type/wma.png";
       } else if ("wmv" == suffix) {
         imgSrc = "../../img/file_type/wmv.png";
       } else if ("xls" == suffix) {
         imgSrc = "../../img/file_type/xls.png";
       } else if ("xlsx" == suffix) {
         imgSrc = "../../img/file_type/xlsx.png";
       } else if ("zip" == suffix) {
         imgSrc = "../../img/file_type/zip.png";
       } else {
         imgSrc = "../../img/file_type/other.png";
       }
     }
     return imgSrc;
  };

  /**
   * 上传临时附件至服务器
   * @param fileData 文件数据
   */
  this.uploadTempAttachmentToServer = function(fileData) {
    let formData = new FormData();
    formData.append("file", fileData);
    let result = this.ajaxAssistant(this.configure.getProjectPath() + "/lego/lego_storage?servletName=c_uploadTemporaryFile", formData, false, true, true);
    if (1 == result.status) {
      // 上传成功
      result = JSON.parse(result.result);
      let imgSrc = this.getAttachmentDisplayImageSrc(result.file_name);
      $(this.outputId).find("ul").append(
        '<li>'+
        '  <a class = "upload_attachment_file" data-cluster = "' + result.cluster_name + '" data-url = "' + this.configure.getProjectPath() + 'upload/' + result.file_name + '">'+
        '    <button class="btn btn-danger"><span class="glyphicon glyphicon-remove  btn-danger"></span></button>'+
        '    <img src = "' + imgSrc + '">'+
        '  </a>'+
        '</li>'
      );
      return true;
    }
    return false;
  };

  /**
   * 绑定上传附件按钮事件，包括：
   * 1. 绑定浏览器新页面打开附件事件
   * 2. 绑定删除附件按钮事件
   * 3. 绑定左滚动按钮事件
   * 4. 绑定右滚动按钮事件
   */
  this.uploadAttachmentBtnEventBind = function() {
    // 点击添加按钮后，模拟打开“文件选择”对话框。
    $(this.outputId).find(".upload_attachment_add").unbind("click");
    $(this.outputId).find(".upload_attachment_add").click(function() {
      $(this.outputId).find(".upload_attachment_file_choose").trigger("click");
    });
    // 绑定浏览器新页面打开附件事件
    $(this.outputId).find(".upload_attachment_file").unbind("click");
    $(this.outputId).find(".upload_attachment_file").click(function() {
      window.open($(this).attr("data-url"));
    });
    // 绑定删除附件按钮事件
    $(this.outputId).find(".upload_attachment_file button").unbind("click");
    $(this.outputId).find(".upload_attachment_file button").click(function() {
      $(this).parent().parent().remove();
    });
    // 绑定左滚动按钮事件
    $(this.outputId).find(".upload_attachment_btn_left").click(function() {
      let leftValue = parseInt($(this.outputId).find(".upload_attachment_box").css("left"));
      let step = leftValue + $(this.outputId).find("a").width();
      if (0 <= step) {
        step = 0;
      }
      $(this.outputId).find(".upload_attachment_box").css("left", step);
    });
    // 绑定右滚动按钮事件
    $(this.outputId).find(".upload_attachment_btn_right").click(function() {
      let liList = $(this.outputId).find("ul").children("li");
      let leftValue = parseInt($(this.outputId).find(".upload_attachment_box").css("left"));
      let step = leftValue - $(this.outputId).find("a").width();
      if ($(this.outputId).find("a").width() * liList.length - $(this.outputId).find("a").width() > Math.abs(step)) {
        $(this.outputId).find(".upload_attachment_box").css("left", step);
      }
    });
  };
  
  /**
   * 输出上传附件（查看）
   * @param fileList 文件数据的json对象。需要一个key：file_name。file_name: 文件上传后的文件名，比如：a29cs8d82ka29cs8d82ka29cs8d82k22.png
   */
  this.uploadAttachmentPreviewOutput = function(fileList) {
    let data = "<ul>";
    for (let i = 0; i < fileList.length; i++) {
      let imgSrc = this.getAttachmentDisplayImageSrc(fileList[i].file_name);
      data += '<li>';
      data += '  <a class = "upload_attachment_file" data-url = "' + this.configure.getProjectPath() + 'upload/' + fileList[i].file_name + '">';
      data += '    <img src = "' + imgSrc + '">';
      data += '  </a>';
      data += '</li>';
    }
    data += '</ul>';
    let content = 
      '<div class = "upload_attachment_area">'+
      '  <div class = "upload_attachment_btn upload_attachment_btn_left"><span class = "glyphicon glyphicon-chevron-left"></span></div>'+
      '  <div class = "upload_attachment_content">'+
      '    <input class = "upload_attachment_file_choose" type = "file" multiple = "multiple" accept = "image/png, aplication/zip, text/plain, application/pdf,  image/jpeg, image/jpeg, image/jpeg, image/jp2, image/gif" />'+
      '    <div class = "upload_attachment_box">' + data + '</div>'+
      '  </div>'+
      '  <div class = "upload_attachment_btn upload_attachment_btn_right"><span class = "glyphicon glyphicon-chevron-right"></span></div>'+
      '</div>';
      $(this.outputId).html(content);
      // 绑定新页面打开附件事件
      $(this.outputId).find(".upload_attachment_file").unbind("click");
      $(this.outputId).find(".upload_attachment_file").click(function() {
        window.open($(this).attr("data-url"));
      });
      // 绑定左右滚动按钮事件
      $(this.outputId).find(".upload_attachment_btn_left").click(function() {
        let leftValue = parseInt($(this.outputId).find(".upload_attachment_box").css("left"));
        let step = leftValue + $(this.outputId).find("a").width();
        if (0 <= step) {
          step = 0;
        }
        $(this.outputId).find(".upload_attachment_box").css("left", step);
      });
      $(this.outputId).find(".upload_attachment_btn_right").click(function() {
        let liList = $(this.outputId).find("ul").children("li");
        let leftValue = parseInt($(this.outputId).find(".upload_attachment_box").css("left"));
        let step = leftValue - $(this.outputId).find("a").width();
        if ($(this.outputId).find("a").width() * liList.length - $(this.outputId).find("a").width() > Math.abs(step)) {
          $(this.outputId).find(".upload_attachment_box").css("left", step);
        }
      });
  };
  
  /**
   * 输出上传附件（编辑）
   */
  this.uploadAttachmentEditOutput = function() {
    let data = "";
    if (null != fileList) {
      for (let i = 0; i < fileList.length; i++) {
        let dataCluster = fileList[i].file_name.substring(0, fileList[i].file_name.indexOf("."));
        let imgSrc = this.getAttachmentDisplayImageSrc(fileList[i].file_name);
        data += '<li>';
        data += '  <a class = "upload_attachment_file" data-cluster = "' + dataCluster + '" data-url = "' + this.configure.getProjectPath() + 'upload/' + fileList[i].file_name + '">';
        data += '    <button class="btn btn-danger"><span class="glyphicon glyphicon-remove  btn-danger"></span></button>';
        data += '    <img src = "' + imgSrc + '">';
        data += '  </a>';
        data += '</li>';
      }
    }
    let content = 
      '<div class = "upload_attachment_area">'+
      '  <div class = "upload_attachment_btn upload_attachment_btn_left"><span class = "glyphicon glyphicon-chevron-left"></span></div>'+
      '  <div class = "upload_attachment_content">'+
      '    <input class = "upload_attachment_file_choose" type = "file" multiple = "multiple" accept = "image/png, aplication/zip, text/plain, application/pdf,  image/jpeg, image/jpeg, image/jpeg, image/jp2, image/gif" />'+
      '    <div class = "upload_attachment_box">'+
      '      <ul>'+
      '        <li>'+
      '          <a class = "upload_attachment_add">'+
      '            <img src = "../../img/add_attachment.png">'+
      '          </a>'+
      '        </li>'+ data +
      '      </ul>'+
      '    </div>'+
      '  </div>'+
      '  <div class = "upload_attachment_btn upload_attachment_btn_right"><span class = "glyphicon glyphicon-chevron-right"></span></div>'+
      '</div>';
      $(this.outputId).html(content);
      // 绑定新页面打开附件事件
      $(this.outputId).find(".upload_attachment_file").unbind("click");
      $(this.outputId).find(".upload_attachment_file").click(function() {
        window.open($(this).attr("data-url"));
      });
      // 绑定删除附件按钮事件
      $(this.outputId).find(".upload_attachment_file button").unbind("click");
      $(this.outputId).find(".upload_attachment_file button").click(function() {
        $(this).parent().parent().remove();
      });
  };
  
  /**
   * 获取附件的数据
   * return json对象数组
   */
  this.getUploadAttachmentData = function() {
    let retList = new Array();
    let li = $("" + this.outputId + " ul").children("li");
    for (let i = 0; i < li.length; i++) {
      let obj = li[i];
      let invoiceCluster = $(obj).find("a").attr("data-cluster");
      if (undefined != invoiceCluster) {
        retList.push({"cluster": invoiceCluster});
      }    
    }
    return retList;
  }
}
