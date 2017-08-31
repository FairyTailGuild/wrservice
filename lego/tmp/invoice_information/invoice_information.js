/**
 * @author wangdi
 */
function InvoiceInformation(trade_contract_code, invoice_information_content_box, trade_all_price, invoice_type, trade_add_url, trade_edit_url) {
  this.trade_contract_code = trade_contract_code;
  this.invoice_information_content_box = invoice_information_content_box;
  this.trade_all_price = trade_all_price;
  this.invoice_type = invoice_type;
  this.trade_add_url = trade_add_url;
  this.trade_edit_url = trade_edit_url;
  
  /**
   * 应开发票、已收发票、未开发票
   */
  this.invoice_information_already_obj = 0;
  this.invoice_information_no_objvar  = 0;
  
  /**
   * 附件
   */
  this.invoice_information_file_data = [
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
   * 发票信息数据
   */
  this.invoice_information_data = {"data":[
      {"contract_code":"ZS-TZGYL-17813261", "type":"1", "product_name":"富纪有限公司", "price":"22", "quantity":"56", "unit":"吨", "freight":"200", "tax_rate":"17", "invoice_datetime":"2017-05-06 00:00:00", "remark":"啊啊啊啊啊", "uuid":"11111111111111111111111111111111"},
      {"contract_code":"ZS-TZGYL-17813261", "type":"1", "product_name":"富纪有限公司", "price":"33", "quantity":"77", "unit":"吨", "freight":"200", "tax_rate":"17", "invoice_datetime":"2017-05-06 00:00:00", "remark":"啊啊啊啊啊", "uuid":"11111111111111111111111111111112"},
      {"contract_code":"ZS-TZGYL-17813261", "type":"1", "product_name":"富纪有限公司", "price":"44", "quantity":"99", "unit":"吨", "freight":"200", "tax_rate":"17", "invoice_datetime":"2017-05-06 00:00:00", "remark":"啊啊啊啊啊", "uuid":"11111111111111111111111111111113"}
    ]
  };
  
  this.invoice_information_clear_raw_data = function() {
    $(this.invoice_information_content_box).find(".invoice_information_box").html('<tr><td colspan="9" align="center">没数据</td></tr>');
  };
  
  /**
   * 服务器数据
   */
  this.invoice_information_server_data_cover = function() {
    //获取发票信息
    var server_data = {
      "contract_code":this.trade_contract_code
    };
    var invoice_information_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getInvoiceInformation";
    var invoice_information_get_contract = ajax_assistant(invoice_information_url, server_data, false, true, false);
    this.invoice_information_data = {};
    if (1 == invoice_information_get_contract.status) {
      if (0 == invoice_information_get_contract.count) {
        this.invoice_information_data = {};
      } else {
        var tmp_arr = new Array();
        var invoice_information_result = JSON.parse(invoice_information_get_contract.result);  
        ////console.log(invoice_information_result);
        for (var i = 0; i < invoice_information_result.length; i++) {
          tmp_arr[i] = {"contract_code":invoice_information_result[i].contract_code, "type":invoice_information_result[i].type, "product_name":invoice_information_result[i].product_name, "price":invoice_information_result[i].price, "quantity":invoice_information_result[i].quantity, "unit":invoice_information_result[i].unit, "freight":invoice_information_result[i].freight, "tax_rate":invoice_information_result[i].tax_rate, "invoice_datetime":invoice_information_result[i].invoice_datetime, "remark":invoice_information_result[i].remark, "uuid":invoice_information_result[i].uuid};
        }
        this.invoice_information_data["data"] = tmp_arr;
      }
    } else {
      alert("发票信息数据获取失败");
    }
  };
  
  var invoice_information_type = ["入库","出库"];
  
  this.invoice_information_fill_variable_data = function() {
    if (isJsonObjectHasData(this.invoice_information_data)) {
      var invoice_information_html = "";
      this.invoice_information_already_obj = 0;
      for (var i = 0; i < this.invoice_information_data.data.length; i++) {
        var invoice_information_invoice_datetime = this.invoice_information_data.data[i].invoice_datetime;
        invoice_information_invoice_datetime = invoice_information_invoice_datetime.substring(0, invoice_information_invoice_datetime.indexOf(' '));
        invoice_information_html +=
          '<tr class = "invoice_information_tr">'+
            '<td>' + invoice_information_type[this.invoice_type] + '</td>'+
            '<td>' + this.invoice_information_data.data[i].product_name + '</td>'+
            '<td>' + this.invoice_information_data.data[i].price + '</td>'+
            '<td>' + this.invoice_information_data.data[i].quantity + '</td>'+
            '<td>' + this.invoice_information_data.data[i].unit + '</td>'+
            '<td>' + this.invoice_information_data.data[i].tax_rate + '</td>'+
            '<td>' + (this.invoice_information_data.data[i].price * this.invoice_information_data.data[i].quantity).toFixed(2) + '</td>'+
            '<td>' + invoice_information_invoice_datetime + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign invoice_information_ml15 invoice_information_modle_info" uuid = "' + this.invoice_information_data.data[i].uuid + '" contract_code = "' + this.invoice_information_data.data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil invoice_information_ml15 invoice_information_modle_pencil" uuid = "' + this.invoice_information_data.data[i].uuid + '" contract_code = "' + this.invoice_information_data.data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-remove invoice_information_ml15 invoice_information_modle_remove" uuid = "' + this.invoice_information_data.data[i].uuid + '" contract_code = "' + this.invoice_information_data.data[i].contract_code + '"></span>'+
            '</td>'+
          '</tr>';
        this.invoice_information_already_obj += (Number(this.invoice_information_data.data[i].price) * Number(this.invoice_information_data.data[i].quantity));
      }
      $(this.invoice_information_content_box).find(".invoice_information_box").html(invoice_information_html);
      $(this.invoice_information_content_box).find(".invoice_information_already").html(Number(this.invoice_information_already_obj).toFixed(2));
      var no_obj = Number(this.trade_all_price) - Number(this.invoice_information_already_obj);
      $(this.invoice_information_content_box).find(".invoice_information_no").html((no_obj.toFixed(2)));
    } else {
      $(this.invoice_information_content_box).find(".invoice_information_box").html('<tr><td colspan="9" align="center">没数据</td></tr>');
      $(this.invoice_information_content_box).find(".invoice_information_already").html("0");
      var no_obj = Number(this.trade_all_price);
      $(this.invoice_information_content_box).find(".invoice_information_no").html((no_obj.toFixed(2)));
    }
  };
  
  this.invoice_information_tax_focus_change = function(obj) {
    var invoice_information_val = obj.val();
    if (invoice_information_val == "0.17") {obj.val("")};
  };
  
  this.invoice_information_tax_blur_change = function(obj) {
    var invoice_information_val = obj.val();
    if (invoice_information_val == "") {obj.val("0.17")};
  };
  
  this.invoice_information_add_modle_func = function(obj) {
    var type_in = obj.attr("invoice_type");
    var contract_code = obj.attr("contract_code");
    var invoice_information_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "invoice_information_add_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
        '<div class = "modal-dialog" role = "document">'+
          '<div class = "modal-content">'+
            '<div class = "modal-header bg-primary">'+
              '<button type = "button" class = "close" data-dismiss  =  "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
              '<h4 class = "modal-title">添加发票信息</h4>'+
            '</div>'+
            '<div class = "modal-body">'+
              '<div class = "row">'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">库存类型</label>'+
                  '<input type = "text" value = "' + invoice_information_type[this.invoice_type] + '" class = "form-control" disabled = "disabled">'+
                '</div>'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">名称</label>'+
                  '<input type = "text" class = "form-control invoice_information_product_name">'+
                '</div>'+
              '</div>'+
              '<div class = "row">'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">单价</label>'+
                  '<div class = "input-group">'+
                    '<input type = "text" class = "form-control invoice_information_price">'+
                    '<span class = "input-group-addon">元</span>'+
                  '</div>'+
                '</div>'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">数量</label>'+
                  '<input type = "text" class = "form-control invoice_information_quantity">'+
                '</div>'+
              '</div>'+
              '<div class = "row">'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">单位</label>'+
                  '<input type = "text" class = "form-control invoice_information_unit" value = "吨">'+
                '</div>'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">税率</label>'+
                  '<input type = "text" class = "form-control invoice_information_tax_rate" value = "0.17">'+
                '</div>'+
              '</div>'+
              '<div class = "row">'+
                '<div class = "form-group col-md-6">'+
                  '<label for = "">合计</label>'+
                  '<input type = "text" class = "form-control total_price" disabled = "disabled ">'+
                '</div>'+
                '<div class = "col-md-6">'+
                  '<div class = "form-group has-feedback">'+
                    '<label>开票日期</label>'+
                    '<input type = "text" class = "form-control widget_datepicker invoice_information_invoice_datetime">'+
                    '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "row">'+
                '<div class = "form-group col-md-12">'+
                  '<label for = "">备注</label>'+
                  '<textarea type = "text" class = "form-control invoice_information_remark" value = ""></textarea>'+
                '</div>'+
              '</div>'+
              '<div class = "row">'+
                '<div class = "form-group col-md-12">'+
                  '<label for = "">发票附件</label>'+
                  '<div class = "panel panel-default" id = "invoice_information_add_modle_attch">'+
                  '</div>'+
                '</div>'+
              '</div>'+
            '</div>'+
            '<div class = "modal-footer text-center">'+
              '<button type = "button" class = "btn btn-primary btn_code" id = "invoice_information_add_data_btn" contract_code = "' + contract_code + '" invoice_type = "' + type_in + '">添加</button>'+
              '<button type = "button" class = "btn btn-default close_model" data-dismiss = "modal">取消</button>'+
            '</div>'+
          '</div>'+
        '</div>'+
      '</div>';
    $("body").append(invoice_information_html);
    upload_attachment_edit_output("#invoice_information_add_modle_attch");
    $("#invoice_information_add_modle_prop").modal("show");
    $("#invoice_information_add_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.all_should_change_price = function(obj) {
    var invoice_information_price = obj.parents(".modal-body").find(".invoice_information_price").val();
    var invoice_information_quantity = obj.parents(".modal-body").find(".invoice_information_quantity").val();
    //console.log(!isNaN(invoice_information_price)+';'+!isNaN(invoice_information_quantity));
    if (0 < invoice_information_price.length && 0 < invoice_information_quantity.length && !isNaN(invoice_information_price) && !isNaN(invoice_information_quantity)){
      var val_b = (invoice_information_price * invoice_information_quantity).toFixed(2);
      obj.parents(".modal-body").find('.total_price').val(val_b);
    } else {
      obj.parents(".modal-body").find('.total_price').val("");
    }
  };
  
  this.invoice_information_add_data_func = function(obj) {
    var contract_code = obj.attr("contract_code");
    var invoice_information_product_name = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_product_name").val();
    var invoice_information_price = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_price").val();
    var invoice_information_quantity = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_quantity").val();
    var invoice_information_unit = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_unit").val();
    var invoice_information_tax_rate = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_tax_rate").val();
    var invoice_information_invoice_datetime = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_invoice_datetime").val();
    //附件
    var invoice_information_list = $("#invoice_information_add_modle_attch ul").children("li");
    var invoice_information_cluster_list = "";
    for (var i = 0; i < invoice_information_list.length; i++) {
      var invoice_information_dom = invoice_information_list[i];
      var cluster = $(invoice_information_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       invoice_information_cluster_list += cluster + ";"; 
      }    
    }
    if(0 < invoice_information_invoice_datetime.length) {
      invoice_information_invoice_datetime += ' 00:00:00';
    }
    var invoice_information_remark = obj.parents("#invoice_information_add_modle_prop").find(".invoice_information_remark").val();
    
    //验证
    if (null == invoice_information_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的产品名称！");
      return;
    }
    if (null == invoice_information_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的单价！");
      return;
    }
    if (null == invoice_information_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的数量！");
      return;
    }
    if (null == invoice_information_unit.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,16}$/)) {
      alert("请输入正确的单位！");
      return;
    }
    if (null == invoice_information_tax_rate.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的税率！");
      return;
    }
    if (null == invoice_information_invoice_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择开票时间！");
      return;
    }
    if(null == invoice_information_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)){
      alert("请添加发票附件！");
      return;
    }
    var data = {
      "contract_code":this.trade_contract_code,
      "type":this.invoice_type,
      "product_name":invoice_information_product_name,
      "price":invoice_information_price,
      "quantity":invoice_information_quantity,
      "unit":invoice_information_unit,
      "tax_rate":invoice_information_tax_rate,
      "invoice_datetime":invoice_information_invoice_datetime,
      "cluster_list":invoice_information_cluster_list
    };
    if ("" != invoice_information_remark.length) {
      if (null == invoice_information_remark.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,128}$/)) {
        alert("请输入正确的备注！");
        return;
      }
      data["remark"] = invoice_information_remark;
    }
    //调用接口
    var invoice_information_add_url = PROJECT_PATH + trade_add_url;
    var invoice_information_add_get = ajax_assistant(invoice_information_add_url, data, false, true, false);
    //console.log(invoice_information_add_get);
    if ("1" == invoice_information_add_get.status) {
      this.invoice_information_clear_raw_data();
      this.invoice_information_server_data_cover();
      this.invoice_information_fill_variable_data(); 
      $("#invoice_information_add_modle_prop").modal("hide");
      $("#invoice_information_add_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("添加发票信息失败");
    }
  };
  
  this.invoice_information_edit_modle_func = function(obj) {
    var type_in = obj.parent().parent().parent().parent().attr("invoice_type");
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var invoice_information_product_name = "";
    var invoice_information_price = "";
    var invoice_information_quantity = "";
    var invoice_information_unit = "";
    var invoice_information_tax_rate = "";
    var invoice_information_invoice_datetime = "";
    var invoice_information_cluster_list = "";
    var invoice_information_remark = "";
    var invoice_information_edit_data = {
      "uuid":uuid,
      "contract_code":this.trade_contract_code,
      "type":this.invoice_type
    };
    //调接口  查询数据
    var invoice_information_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getInvoiceInformation";
    var invoice_information_edit_get_warehouse = ajax_assistant(invoice_information_edit_url, invoice_information_edit_data, false, true, false);
    if ("1" == invoice_information_edit_get_warehouse.status) {
      var invoice_information_edit_data_d = JSON.parse(invoice_information_edit_get_warehouse.result);
      //console.log(invoice_information_edit_data_d);
      if (0 < invoice_information_edit_data_d.length) {
        invoice_information_product_name = invoice_information_edit_data_d[0].product_name;
        invoice_information_price = invoice_information_edit_data_d[0].price;
        invoice_information_quantity = invoice_information_edit_data_d[0].quantity;
        invoice_information_unit = invoice_information_edit_data_d[0].unit;
        invoice_information_tax_rate = invoice_information_edit_data_d[0].tax_rate;
        invoice_information_invoice_datetime = invoice_information_edit_data_d[0].invoice_datetime;
        invoice_information_invoice_datetime = invoice_information_invoice_datetime.substring(0, invoice_information_invoice_datetime.indexOf(' '));
        if (null != invoice_information_edit_data_d[0].remark) {
          invoice_information_remark = invoice_information_edit_data_d[0].remark;
        }
        if (null != invoice_information_edit_data_d[0].cluster_list) {
          invoice_information_cluster_list = invoice_information_edit_data_d[0].cluster_list;
        }
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    //附件
    if (0 < invoice_information_cluster_list.length) {
      var invoice_information_file_arr = new Array();
      invoice_information_cluster_list = invoice_information_cluster_list.substring(0, invoice_information_cluster_list.length - 1).split(';');
      //console.log(invoice_information_cluster_list)
      for(var i = 0; i < invoice_information_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":invoice_information_cluster_list[i]
        };
        var invoice_information_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var invoice_information_json = JSON.parse(invoice_information_file_name.result);
        //console.log(invoice_information_json)
        if(0 != invoice_information_file_name.count) {
          invoice_information_file_arr[i] = {"file_name":invoice_information_json[0].cluster_name+'.'+invoice_information_json[0].suffix};
        }
      }
      this.invoice_information_file_data = invoice_information_file_arr;
      //console.log(this.invoice_information_file_data);
    } else {
      this.invoice_information_file_data = [];
    }
    var invoice_information_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "invoice_information_edit_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss  =  "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">修改发票信息</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">库存类型</label>'+
                    '<input type = "text" value = "' + invoice_information_type[this.invoice_type] + '" class = "form-control" disabled  =  "disabled">'+
                  '</div>'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">名称</label>'+
                    '<input type = "text" class = "form-control invoice_information_product_name" value = "' + invoice_information_product_name + '">'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">单价</label>'+
                    '<div class = "input-group">'+
                      '<input type = "text" class = "form-control invoice_information_price" value = "' + invoice_information_price + '">'+
                      '<span class = "input-group-addon">元</span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">数量</label>'+
                    '<input type = "text" class = "form-control invoice_information_quantity" value = "' + invoice_information_quantity + '">'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">单位</label>'+
                    '<input type = "text" class = "form-control invoice_information_unit" value = "' + invoice_information_unit + '">'+
                  '</div>'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">税率</label>'+
                    '<input type = "text" class = "form-control invoice_information_tax_rate" value = "' + invoice_information_tax_rate + '">'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">合计</label>'+
                    '<input type = "text" class = "form-control total_price" disabled = "disabled " value = "' + (invoice_information_price * invoice_information_quantity).toFixed(2) + '">'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>开票日期</label>'+
                      '<input type = "text" class = "form-control widget_datepicker invoice_information_invoice_datetime" value = "' + invoice_information_invoice_datetime + '">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-12">'+
                    '<label for = "">备注</label>'+
                    '<textarea type = "text" class = "form-control invoice_information_remark" value = "' + invoice_information_remark + '">' + invoice_information_remark + '</textarea>'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-12">'+
                    '<label for = "">发票附件</label>'+
                    '<div class = "panel panel-default" id = "invoice_information_edit_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer text-center">'+
                '<button type = "button" class = "btn btn-warning btn_code" id = "invoice_information_edit_data_btn" contract_code = "' + contract_code + '" uuid = "' + uuid + '" invoice_type = "' + type_in + '">修改</button>'+
                '<button type = "button" class = "btn btn-default close_model" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(invoice_information_edit_html);
    upload_attachment_edit_output("#invoice_information_edit_attch", this.invoice_information_file_data);
    $("#invoice_information_edit_modle_prop").modal("show");
    $("#invoice_information_edit_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.invoice_information_edit_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var invoice_information_product_name = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_product_name").val();
    var invoice_information_price = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_price").val();
    var invoice_information_quantity = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_quantity").val();
    var invoice_information_unit = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_unit").val();
    var invoice_information_tax_rate = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_tax_rate").val();
    var invoice_information_invoice_datetime = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_invoice_datetime").val();
    if(0 < invoice_information_invoice_datetime.length) {
      invoice_information_invoice_datetime += ' 00:00:00';
    }
    var invoice_information_remark = obj.parents("#invoice_information_edit_modle_prop").find(".invoice_information_remark").val();
    //附件
    var invoice_information_list = $("#invoice_information_edit_attch ul").children("li");
    var invoice_information_cluster_list = "";
    for (var i = 0; i < invoice_information_list.length; i++) {
      var invoice_information_dom = invoice_information_list[i];
      var cluster = $(invoice_information_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       invoice_information_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == invoice_information_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的产品名称！");
      return;
    }
    if (null == invoice_information_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的单价！");
      return;
    }
    if (null == invoice_information_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的数量！");
      return;
    }
    if (null == invoice_information_unit.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{1,16}$/)) {
      alert("请输入正确的单位！");
      return;
    }
    if (null == invoice_information_tax_rate.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的税率！");
      return;
    }
    if (null == invoice_information_invoice_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择开票时间！");
      return;
    }
    var data = {
      "idColumnValue":uuid,
      "contract_code":this.trade_contract_code,
      "type":this.invoice_type,
      "product_name":invoice_information_product_name,
      "price":invoice_information_price,
      "quantity":invoice_information_quantity,
      "unit":invoice_information_unit,
      "tax_rate":invoice_information_tax_rate,
      "invoice_datetime":invoice_information_invoice_datetime,
      "cluster_list":invoice_information_cluster_list
    };
    if (0 < invoice_information_cluster_list.length) {
      if(null == invoice_information_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
        alert("请添加发票信息附件！");
        return;
      }
      data["newClusterList"] = invoice_information_cluster_list;
    }
    if ("" != invoice_information_remark) {
      if (null == invoice_information_remark.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,128}$/)) {
        alert("请输入正确的备注！");
        return;
      }
      data["remark"] = invoice_information_remark;
    }
    if ("" == invoice_information_remark){
      data["sn_remark"] = "set_null";
    }
    //调数据库
    var invoice_information_edit_data_url = PROJECT_PATH + trade_edit_url;
    var invoice_information_edit_data_get = ajax_assistant(invoice_information_edit_data_url, data, false, true, false);
    //console.log(invoice_information_edit_data_get);
    if ("1" == invoice_information_edit_data_get.status){
      this.invoice_information_clear_raw_data();
      this.invoice_information_server_data_cover();
      this.invoice_information_fill_variable_data();
      $("#invoice_information_edit_modle_prop").modal("hide");
      $("#invoice_information_edit_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("修改失败");
    }   
  };
  
  this.invoice_information_delete_modle_func = function(obj) {
    var type_in = obj.parent().parent().parent().parent().attr("invoice_type");
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var invoice_information_delete_html = 
        '<div class="modal fade custom_modal" id="invoice_information_delete_modle_prop" tabindex="-1" role="dialog">'+
          '<div class="modal-dialog modal-sm" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary">'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                '<h4 class="modal-title">删除发票信息确认</h4>'+
              '</div>'+
              '<div class="modal-body nopadding-bottom invoice_information_center">确认要删除吗？</div>'+
              '<div class="modal-footer noborder nopadding-top" style="text-align: center;">'+
              '<button type="button" class="btn btn-danger" id="invoice_information_delete_modle_prop_btn" contract_code = "' + contract_code + '" uuid = "' + uuid + '" invoice_type = "' + type_in + '">删除</button>'+
                  '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>';
    $("body").append(invoice_information_delete_html);
    $("#invoice_information_delete_modle_prop").modal("show");
    $("#invoice_information_delete_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.invoice_information_delete_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var data = {
      "idColumnValue":uuid,
      "contract_code":this.trade_contract_code
    };
    //接口数据
    var invoice_information_delete_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeInvoiceInformation";
    var invoice_information_delete_data_get = ajax_assistant(invoice_information_delete_data_url, data, false, true, false);
    if ("1" != invoice_information_delete_data_get.status) {
      alert("删除发票信息失败");
    } else {  
      // 更新页面数据
      this.invoice_information_clear_raw_data();
      this.invoice_information_server_data_cover();
      this.invoice_information_fill_variable_data();
      $("#invoice_information_delete_modle_prop").modal("hide");
      $("#invoice_information_delete_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    }
  };
  
  this.invoice_information_info_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var invoice_information_product_name = "";
    var invoice_information_price = "";
    var invoice_information_quantity = "";
    var invoice_information_unit = "";
    var invoice_information_tax_rate = "";
    var invoice_information_invoice_datetime = "";
    var invoice_information_cluster_list = "";
    var invoice_information_remark = "";
    var invoice_information_edit_data = {
      "uuid":uuid,
      "contract_code":this.trade_contract_code,
      "type":this.invoice_type
    };
    //调接口  查询数据
    var invoice_information_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getInvoiceInformation";
    var invoice_information_edit_get_warehouse = ajax_assistant(invoice_information_edit_url, invoice_information_edit_data, false, true, false);
    if ("1" == invoice_information_edit_get_warehouse.status) {
      var invoice_information_edit_data_d = JSON.parse(invoice_information_edit_get_warehouse.result);
      //console.log(invoice_information_edit_data_d);
      if (0 < invoice_information_edit_data_d.length) {
        invoice_information_product_name = invoice_information_edit_data_d[0].product_name;
        invoice_information_price = invoice_information_edit_data_d[0].price;
        invoice_information_quantity = invoice_information_edit_data_d[0].quantity;
        invoice_information_unit = invoice_information_edit_data_d[0].unit;
        invoice_information_tax_rate = invoice_information_edit_data_d[0].tax_rate;
        invoice_information_invoice_datetime = invoice_information_edit_data_d[0].invoice_datetime;
        invoice_information_invoice_datetime = invoice_information_invoice_datetime.substring(0, invoice_information_invoice_datetime.indexOf(' '));
        if (null != invoice_information_edit_data_d[0].remark) {
          invoice_information_remark = invoice_information_edit_data_d[0].remark;
        };
        if (null != invoice_information_edit_data_d[0].cluster_list) {
          invoice_information_cluster_list = invoice_information_edit_data_d[0].cluster_list;
        };
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    //附件
    if (0 < invoice_information_cluster_list.length) {
      var invoice_information_file_arr = new Array();
      invoice_information_cluster_list = invoice_information_cluster_list.substring(0, invoice_information_cluster_list.length - 1).split(';');
      //console.log(invoice_information_cluster_list)
      for(var i = 0; i < invoice_information_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":invoice_information_cluster_list[i]
        };
        var invoice_information_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var invoice_information_json = JSON.parse(invoice_information_file_name.result);
        //console.log(invoice_information_json)
        if(0 != invoice_information_file_name.count) {
          invoice_information_file_arr[i] = {"file_name":invoice_information_json[0].cluster_name+'.'+invoice_information_json[0].suffix};
        }
      }
      this.invoice_information_file_data = invoice_information_file_arr;
      //console.log(this.invoice_information_file_data);
    } else {
      this.invoice_information_file_data = [];
    }
    var invoice_information_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "invoice_information_info_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss  =  "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">发票信息详情</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">库存类型</label>'+
                    '<input type = "text" value = "' + invoice_information_type[this.invoice_type] + '" class = "form-control" disabled = "disabled">'+
                  '</div>'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">名称</label>'+
                    '<input type = "text" class = "form-control invoice_information_product_name" value = "' + invoice_information_product_name + '" disabled = "disabled">'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">单价</label>'+
                    '<div class = "input-group">'+
                      '<input type = "text" class = "form-control invoice_information_price" value = "' + invoice_information_price + '" disabled = "disabled">'+
                      '<span class = "input-group-addon">元</span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">数量</label>'+
                    '<input type = "text" class = "form-control invoice_information_quantity" value = "' + invoice_information_quantity + '" disabled = "disabled">'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">单位</label>'+
                    '<input type = "text" class = "form-control invoice_information_unit" value = "' + invoice_information_unit + '" disabled = "disabled">'+
                  '</div>'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">税率</label>'+
                    '<input type = "text" class = "form-control invoice_information_tax_rate" value = "' + invoice_information_tax_rate + '" disabled = "disabled">'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-6">'+
                    '<label for = "">合计</label>'+
                    '<input type = "text" class = "form-control total_price" disabled = "disabled " value = "' + (invoice_information_price * invoice_information_quantity).toFixed(2) + '">'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>开票日期</label>'+
                      '<input type = "text" class = "form-control widget_datepicker invoice_information_invoice_datetime" value = "' + invoice_information_invoice_datetime + '" disabled = "disabled">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-12">'+
                    '<label for = "">备注</label>'+
                    '<textarea type = "text" class = "form-control invoice_information_remark" value = "' + invoice_information_remark + '" disabled = "disabled">' + invoice_information_remark + '</textarea>'+
                  '</div>'+
                '</div>'+
                '<div class = "row">'+
                  '<div class = "form-group col-md-12">'+
                    '<label for = "">发票附件</label>'+
                    '<div class = "panel panel-default" id = "invoice_information_info_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer text-center">'+
                '<button type = "button" class = "btn btn-default close_model" data-dismiss = "modal">关闭</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(invoice_information_edit_html);
    upload_attachment_preview_output("#invoice_information_info_attch", this.invoice_information_file_data);
    $("#invoice_information_info_modle_prop").modal("show");
    $("#invoice_information_info_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.invoice_information_output = function() {
    var content = 
    '  <div class = "panel panel-primary ">'+
    '    <div class = "panel-heading clearfix">发票信息  [应开发票:<span class="invoice_information_should_be">' + this.trade_all_price + '</span>] [已开发票:<span class="invoice_information_already">0</span>] [未开发票:<span class="invoice_information_no">0</span>]<span class = "glyphicon glyphicon-plus pull-right invoice_information_add_modle"></span></div>'+
    '    <div class = "panel-body">'+
    '        <div class = "row">'+
    '          <div class = "col-lg-12">'+
    '            <table cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table invoice_information_table_sales_trad_uuid">'+
    '              <thead>'+
    '                <tr>'+
    '                  <th>库存类型</th>'+
    '                  <th>名称</th>'+
    '                  <th>单价（元）</th>'+
    '                  <th>数量</th>'+
    '                  <th>单位</th>'+
    '                  <th>税率</th>'+
    '                  <th>合计</th>'+
    '                  <th>开票日期</th>'+
    '                  <th></th>'+
    '                </tr>'+
    '              </thead>'+
    '              <tbody class = "invoice_information_box">'+
    '                <tr>'+
    '                  <td>' + invoice_information_type[invoice_type] + '</td>'+
    '                  <td>甲基丁</td>'+
    '                  <td>3</td>'+
    '                  <td>200</td>'+
    '                  <td>吨</td>'+
    '                  <td>17％</td>'+
    '                  <td>600000</td>'+
    '                  <td>2017-05-06</td>'+
    '                  <td>'+
    '                    <span class = "glyphicon glyphicon-info-sign invoice_information_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-pencil invoice_information_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-remove invoice_information_ml15"></span>'+
    '                  </td>'+
    '                </tr>'+
    '                <tr>'+
    '                  <td>' + invoice_information_type[invoice_type] + '</td>'+
    '                  <td>甲基丁</td>'+
    '                  <td>3000</td>'+
    '                  <td>200</td>'+
    '                  <td>吨</td>'+
    '                  <td>17％</td>'+
    '                  <td>600000</td>'+
    '                  <td>2017-05-06</td>'+
    '                  <td>'+
    '                    <span class = "glyphicon glyphicon-info-sign invoice_information_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-pencil invoice_information_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-remove invoice_information_ml15"></span>'+
    '                  </td>'+
    '                </tr>'+
    '                <tr>'+
    '                  <td>' + invoice_information_type[invoice_type] + '</td>'+
    '                  <td>甲基丁</td>'+
    '                  <td>3000</td>'+
    '                  <td>200</td>'+
    '                  <td>吨</td>'+
    '                  <td>17％</td>'+
    '                  <td>600000</td>'+
    '                  <td>2017-05-06</td>'+
    '                  <td>'+
    '                    <span class = "glyphicon glyphicon-info-sign invoice_information_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-pencil invoice_information_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-remove invoice_information_ml15"></span>'+
    '                  </td>'+
    '                </tr>'+
    '              </tbody>'+
    '            </table>'+
    '          </div>'+
    '        </div>'+
    '      </div>'+
    '    </div>';
      $(this.invoice_information_content_box).html(content);
  };
}
