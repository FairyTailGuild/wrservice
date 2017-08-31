/**
 * @author wangdi
 */
function SettlementBillLogistics(trade_contract_code, contract_logistics_code, settlement_bill_logistics_content_box, contract_logistics_buyer, contract_logistics_seller, contract_logistics_product_name, settlement_bill_logistics_add_url, settlement_bill_logistics_edit_url) {
  this.trade_contract_code = trade_contract_code;
  this.contract_logistics_code = contract_logistics_code;
  this.settlement_bill_logistics_content_box = settlement_bill_logistics_content_box;
  this.contract_logistics_buyer = contract_logistics_buyer;
  this.contract_logistics_seller = contract_logistics_seller;
  this.contract_logistics_product_name = contract_logistics_product_name;
  this.settlement_bill_logistics_add_url = settlement_bill_logistics_add_url;
  this.settlement_bill_logistics_edit_url = settlement_bill_logistics_edit_url;
  /**
   * 附件
   */
  this.settlement_bill_logistics_file_data = [
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
   * 物流对账单数据
   * buyer_uuid : 购买方
   * seller_uuid :销售方
   * product_name : 产品名称
   */
  this.settlement_bill_logistics_data = {"data":[
      {"trade_contract_code":"ZS-TZGYL-17813261", "contract_code":"JYH-XY-17814006", "buyer_uuid":"00000000000000000000000000000004", "seller_uuid":"00000000000000000000000000000001", "product_name":"富纪有限公司", "load_quantity":"12", "unload_quantity":"45", "contract_ullage":"0.1", "settle_quantity":"100", "freight":"200", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111111"},
      {"trade_contract_code":"ZS-TZGYL-17813261", "contract_code":"JYH-XY-17814006", "buyer_uuid":"00000000000000000000000000000001", "seller_uuid":"00000000000000000000000000000003", "product_name":"富纪有限公司", "load_quantity":"45", "unload_quantity":"45", "contract_ullage":"0.2", "settle_quantity":"100", "freight":"200", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111112"},
      {"trade_contract_code":"ZS-TZGYL-17813261", "contract_code":"JYH-XY-17814006", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000001", "product_name":"富纪有限公司", "load_quantity":"78", "unload_quantity":"65", "contract_ullage":"0.3", "settle_quantity":"100", "freight":"200", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111113"},
      {"trade_contract_code":"ZS-TZGYL-17813261", "contract_code":"JYH-XY-17814006", "buyer_uuid":"00000000000000000000000000000004", "seller_uuid":"00000000000000000000000000000003", "product_name":"富纪有限公司", "load_quantity":"89", "unload_quantity":"53", "contract_ullage":"0.4", "settle_quantity":"100", "freight":"200", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111114"},
      {"trade_contract_code":"ZS-TZGYL-17813261", "contract_code":"JYH-XY-17814006", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000004", "product_name":"富纪有限公司", "load_quantity":"89", "unload_quantity":"25", "contract_ullage":"0.5", "settle_quantity":"100", "freight":"200", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111115"}
    ]
  };
  
  this.settlement_bill_logistics_clear_raw_data = function() {
    $(this.settlement_bill_logistics_content_box).find(".settlement_bill_logistics_box").html('<tr><td colspan="11" align="center">没数据</td></tr>');
  };
  
  /**
   * 服务器数据
   */
  this.settlement_bill_logistics_server_data_cover = function() {
    var logistics_data = {
      "contract_code":this.contract_logistics_code,
      "trade_contract_code":this.trade_contract_code
    };
    //获取物流合同
    var settlement_bill_logistics_logistics_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractLogistics";
    var settlement_bill_logistics_logistics_get_contract = ajax_assistant(settlement_bill_logistics_logistics_url, logistics_data, false, true, false);
    var server_data = {
      "contract_code":this.contract_logistics_code
    };
    //获取物流对账单
    var settlement_bill_logistics_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getSettlementBill";
    var settlement_bill_logistics_get_contract = ajax_assistant(settlement_bill_logistics_url, server_data, false, true, false);
    this.settlement_bill_logistics_data = {};
    if (1 == settlement_bill_logistics_logistics_get_contract.status) {
      if (0 != settlement_bill_logistics_logistics_get_contract.count) {
        var settlement_bill_logistics_logistics_result = JSON.parse(settlement_bill_logistics_logistics_get_contract.result);
        ////console.log(settlement_bill_logistics_logistics_result);
        if (1 == settlement_bill_logistics_get_contract.status) {
          if (0 == settlement_bill_logistics_get_contract.count) {
            this.settlement_bill_logistics_data = {};
          } else {
            var tmp_arr = new Array();
            var settlement_bill_logistics_result = JSON.parse(settlement_bill_logistics_get_contract.result);  
            //console.log(settlement_bill_logistics_result);
            for (var i = 0; i < settlement_bill_logistics_result.length; i++) {
              tmp_arr[i] = {"trade_contract_code":this.trade_contract_code, "contract_code":settlement_bill_logistics_logistics_result[0].contract_code, "buyer_uuid":settlement_bill_logistics_logistics_result[0].employer_uuid, "seller_uuid":settlement_bill_logistics_logistics_result[0].logistics_uuid, "product_name":settlement_bill_logistics_logistics_result[0].product_name, "load_quantity":settlement_bill_logistics_result[i].load_quantity, "unload_quantity":settlement_bill_logistics_result[i].unload_quantity, "contract_ullage":settlement_bill_logistics_result[i].contract_ullage, "settle_quantity":settlement_bill_logistics_result[i].settle_quantity, "freight":settlement_bill_logistics_result[i].freight, "goods_price":settlement_bill_logistics_result[i].goods_price, "invoice_quantity":settlement_bill_logistics_result[i].invoice_quantity, "paid_amount":settlement_bill_logistics_result[i].paid_amount, "uuid":settlement_bill_logistics_result[i].uuid};
            }
            this.settlement_bill_logistics_data["data"] = tmp_arr;
          }
        } else {
          alert("物流对账单数据获取失败");
        }
      } else {
        alert("获取物流合同数据为空");
      }
    } else {
      alert("获取物流合同失败");
    }
  };
  
  this.settlement_bill_logistics_fill_variable_data = function() {
    if(isJsonObjectHasData(this.settlement_bill_logistics_data)) {
      //console.log(this.settlement_bill_logistics_data);
      var settlement_bill_logistics_html = "";
      for (var i = 0; i < this.settlement_bill_logistics_data.data.length; i++) {
        var settlement_bill_logistics_actual_ullage = (this.settlement_bill_logistics_data.data[i].load_quantity - this.settlement_bill_logistics_data.data[i].unload_quantity)/this.settlement_bill_logistics_data.data[i].load_quantity;
        var settlement_bill_logistics_all_price = this.settlement_bill_logistics_data.data[i].settle_quantity * this.settlement_bill_logistics_data.data[i].goods_price;
        var settlement_bill_logistics_returned = this.settlement_bill_logistics_data.data[i].settle_quantity*this.settlement_bill_logistics_data.data[i].goods_price - this.settlement_bill_logistics_data.data[i].paid_amount;
        settlement_bill_logistics_html +=
          '<tr>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].load_quantity + '</td>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].unload_quantity + '</td>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].contract_ullage + '‰</td>'+
            '<td>' + ((settlement_bill_logistics_actual_ullage)*1000).toFixed(4) + '‰</td>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].settle_quantity + '</td>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].goods_price + '</td>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].invoice_quantity + '</td>'+
            '<td>' + settlement_bill_logistics_all_price.toFixed(4) + '</td>'+
            '<td>' + this.settlement_bill_logistics_data.data[i].paid_amount + '</td>'+
            '<td>' + settlement_bill_logistics_returned.toFixed(4) + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign settlement_bill_logistics_ml15 settlement_bill_logistics_modle_info" uuid = "' + this.settlement_bill_logistics_data.data[i].uuid + '" contract_code = "' + this.settlement_bill_logistics_data.data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil settlement_bill_logistics_ml15 settlement_bill_logistics_modle_pencil" uuid = "' + this.settlement_bill_logistics_data.data[i].uuid + '" contract_code = "' + this.settlement_bill_logistics_data.data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-remove settlement_bill_logistics_ml15 settlement_bill_logistics_modle_remove" uuid = "' + this.settlement_bill_logistics_data.data[i].uuid + '" contract_code = "' + this.settlement_bill_logistics_data.data[i].contract_code + '"></span>'+
            '</td>'+
          '</tr>';
      }
      $(this.settlement_bill_logistics_content_box).find(".settlement_bill_logistics_box").html(settlement_bill_logistics_html);
    } else {
      $(this.settlement_bill_logistics_content_box).find(".settlement_bill_logistics_box").html('<tr><td colspan="11" align="center">没数据</td></tr>');
    }
  };
  
  this.settlement_bill_logistics_add_modle_func = function(obj) {
    var contract_code = obj.attr("contract_logistics_code");
    var settlement_bill_logistics_html = 
        '<div class = "modal fade custom_modal" tabindex = "-1" id = "settlement_bill_logistics_add_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title" >添加物流对账单</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货量</label>'+
                      '<div class = " input-group" >'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_load_quantity load_quantity_blur_logistics" value = "">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_unload_quantity unload_quantity_blur_logistics"  value = "">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">约定损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_contract_ullage" value = "">'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">实际损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control actual_loss_change" disabled = "disabled">'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                   '<div class = "form-group">'+
                     '<label for = "">结算量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_settle_quantity volume_corresponding_logistics" value = "">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">货物单价</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_goods_price price_corresponding_logistics" value = "">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">发票数量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_invoice_quantity" value = "">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">合计价格</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control total_price" disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">已付货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_paid_amount amount_corresponding_logistics" value = "">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应退货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control return_money_should" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">物流对账单附件</label>'+
                    '<div class = "panel panel-default clearfix" id = "settlement_bill_logistics_add_modle_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-primary btn_code" id = "settlement_bill_logistics_add_data_btn" contract_code = "' + contract_code + '">添加</button>'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(settlement_bill_logistics_html);
    upload_attachment_edit_output("#settlement_bill_logistics_add_modle_attch");
    $("#settlement_bill_logistics_add_modle_prop").modal("show");
    $("#settlement_bill_logistics_add_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.actual_loss_change_logistics = function(obj) {
    var load_quantity_blur = obj.parents(".modal-body").find(".load_quantity_blur_logistics").val();
    var unload_quantity_blur = obj.parents(".modal-body").find(".unload_quantity_blur_logistics").val();
    if(0 < load_quantity_blur.length && 0 < unload_quantity_blur.length && !isNaN(load_quantity_blur) && !isNaN(unload_quantity_blur)){
      var val_b = (((load_quantity_blur - unload_quantity_blur)/load_quantity_blur) * 1000).toFixed(4);
      obj.parents(".modal-body").find('.actual_loss_change').val(val_b);
    }else{
      obj.parents(".modal-body").find('.actual_loss_change').val("");
    }
  };
  
  this.all_should_change_logistics = function(obj) {
    var volume_corresponding = obj.parents(".modal-body").find(".volume_corresponding_logistics").val();
    var price_corresponding = obj.parents(".modal-body").find(".price_corresponding_logistics").val();
    var amount_corresponding = obj.parents(".modal-body").find(".amount_corresponding_logistics").val();
    if (0 < volume_corresponding.length && 0 < price_corresponding.length && 0 < amount_corresponding.length && !isNaN(volume_corresponding) && !isNaN(price_corresponding) && !isNaN(amount_corresponding)) {
      obj.parents(".modal-body").find(".total_price").val((volume_corresponding*price_corresponding).toFixed(2));
      obj.parents(".modal-body").find(".return_money_should").val((volume_corresponding*price_corresponding-amount_corresponding).toFixed(2));
    } else if (0 < volume_corresponding.length && 0 < price_corresponding.length && 0 >= amount_corresponding.length && !isNaN(volume_corresponding) && !isNaN(price_corresponding)) {
      obj.parents(".modal-body").find(".total_price").val((volume_corresponding*price_corresponding).toFixed(2));
      obj.parents(".modal-body").find(".return_money_should").val("");
    } else {
      obj.parents(".modal-body").find(".total_price,.return_money_should").val("");
    }
  };
  
  this.volume_corresponding_change_logistics = function(obj) {
    var val_a = obj.val();
    obj.parents(".modal-body").find(".settlement_bill_logistics_invoice_quantity").val(val_a);
  };
  
  this.settlement_bill_logistics_add_data_func = function(obj) {
    var contract_code = obj.attr("contract_code");
    var settlement_bill_logistics_contract_ullage = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_contract_ullage").val();
    var settlement_bill_logistics_load_quantity = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_load_quantity").val();
    var settlement_bill_logistics_unload_quantity = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_unload_quantity").val();
    var settlement_bill_logistics_settle_quantity = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_settle_quantity").val();
    var settlement_bill_logistics_goods_price = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_goods_price").val();
    var settlement_bill_logistics_invoice_quantity = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_invoice_quantity").val();
    var settlement_bill_logistics_paid_amount = obj.parents("#settlement_bill_logistics_add_modle_prop").find(".settlement_bill_logistics_paid_amount").val();
    //附件
    var settlement_bill_logistics_list = $("#settlement_bill_logistics_add_modle_attch ul").children("li");
    var settlement_bill_logistics_cluster_list = "";
    for (var i = 0; i < settlement_bill_logistics_list.length; i++) {
      var settlement_bill_logistics_dom = settlement_bill_logistics_list[i];
      var cluster = $(settlement_bill_logistics_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       settlement_bill_logistics_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == settlement_bill_logistics_load_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的装货量！");
      return;
    }
    if (null == settlement_bill_logistics_unload_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的卸货量！");
      return;
    }
    if (null == settlement_bill_logistics_contract_ullage.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的合同损耗！");
      return;
    }
    if (null == settlement_bill_logistics_settle_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的结算量！");
      return;
    }
    if (null == settlement_bill_logistics_goods_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的货物单价！");
      return;
    }
    if (null == settlement_bill_logistics_invoice_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的发票数量！");
      return;
    }
    if (null == settlement_bill_logistics_paid_amount.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的已付金额！");
      return;
    }
    if(null == settlement_bill_logistics_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)){
      alert("请添加物流对账单附件！");
      return;
    };
    var data={
      "cluster_list":settlement_bill_logistics_cluster_list,
      "buyer_uuid":this.contract_logistics_buyer,
      "seller_uuid":this.contract_logistics_seller,
      "contract_code":this.contract_logistics_code,
      "product_name":this.contract_logistics_product_name,
      "contract_ullage":settlement_bill_logistics_contract_ullage,
      "load_quantity":settlement_bill_logistics_load_quantity,
      "unload_quantity":settlement_bill_logistics_unload_quantity,
      "settle_quantity":settlement_bill_logistics_settle_quantity,
      "goods_price":settlement_bill_logistics_goods_price,
      "invoice_quantity":settlement_bill_logistics_invoice_quantity,
      "paid_amount":settlement_bill_logistics_paid_amount
    };
    //调接口
    var settlement_bill_logistics__add_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addLogisticsSettlementBill";
    var settlement_bill_logistics__add_get_warehouse = ajax_assistant(settlement_bill_logistics__add_url, data, false, true, false);
    if ("1" == settlement_bill_logistics__add_get_warehouse.status) {
      this.settlement_bill_logistics_clear_raw_data();
      this.settlement_bill_logistics_server_data_cover();
      this.settlement_bill_logistics_fill_variable_data(); 
      $("#settlement_bill_logistics_add_modle_prop").modal("hide");
      $("#settlement_bill_logistics_add_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("添加物流对账单失败");
    }
  };
  
  this.settlement_bill_logistics_edit_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var settlement_bill_logistics_contract_ullage = "";
    var settlement_bill_logistics_load_quantity = "";
    var settlement_bill_logistics_unload_quantity = "";
    var settlement_bill_logistics_settle_quantity = "";
    var settlement_bill_logistics_goods_price = "";
    var settlement_bill_logistics_invoice_quantity = "";
    var settlement_bill_logistics_paid_amount = "";
    var settlement_bill_logistics_cluster_list = ""
    //调接口
    var data = {
      "uuid":uuid
    };
    var settlement_bill_logistics_get_all_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getSettlementBill";
    var settlement_bill_logistics_get_all_warehouse = ajax_assistant(settlement_bill_logistics_get_all_url, data, false, true, false);
    if ("1" == settlement_bill_logistics_get_all_warehouse.status) {
      var settlement_bill_logistics_edit_data_d = JSON.parse(settlement_bill_logistics_get_all_warehouse.result);
      //console.log(settlement_bill_logistics_edit_data_d);
      if (0 < settlement_bill_logistics_edit_data_d.length) {
        settlement_bill_logistics_contract_ullage = settlement_bill_logistics_edit_data_d[0].contract_ullage;
        settlement_bill_logistics_load_quantity = settlement_bill_logistics_edit_data_d[0].load_quantity;
        settlement_bill_logistics_unload_quantity = settlement_bill_logistics_edit_data_d[0].unload_quantity;
        settlement_bill_logistics_settle_quantity = settlement_bill_logistics_edit_data_d[0].settle_quantity;
        settlement_bill_logistics_goods_price = settlement_bill_logistics_edit_data_d[0].goods_price;
        settlement_bill_logistics_invoice_quantity = settlement_bill_logistics_edit_data_d[0].invoice_quantity;
        settlement_bill_logistics_paid_amount = settlement_bill_logistics_edit_data_d[0].paid_amount;
        if (null != settlement_bill_logistics_edit_data_d[0].cluster_list) {
          settlement_bill_logistics_cluster_list = settlement_bill_logistics_edit_data_d[0].cluster_list;
        }
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    var settlement_bill_logistics_actual_loss_ = ((settlement_bill_logistics_load_quantity - settlement_bill_logistics_unload_quantity)/settlement_bill_logistics_load_quantity).toFixed(4)*1000;
    var settlement_bill_logistics_all_price = (settlement_bill_logistics_goods_price * settlement_bill_logistics_settle_quantity).toFixed(2);
    var settlement_bill_logistics_retune_price = ((settlement_bill_logistics_goods_price * settlement_bill_logistics_settle_quantity) - settlement_bill_logistics_paid_amount).toFixed(2);
    //附件
    //console.log(settlement_bill_logistics_cluster_list);
    if (0 < settlement_bill_logistics_cluster_list.length) {
      var settlement_bill_logistics_file_arr = new Array();
      settlement_bill_logistics_cluster_list = settlement_bill_logistics_cluster_list.substring(0, settlement_bill_logistics_cluster_list.length - 1).split(';');
      //console.log(settlement_bill_logistics_cluster_list)
      for(var i = 0; i < settlement_bill_logistics_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":settlement_bill_logistics_cluster_list[i]
        };
        var settlement_bill_logistics_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var settlement_bill_logistics_json = JSON.parse(settlement_bill_logistics_file_name.result);
        //console.log(settlement_bill_logistics_json)
        if(0 != settlement_bill_logistics_file_name.count) {
          settlement_bill_logistics_file_arr[i] = {"file_name":settlement_bill_logistics_json[0].cluster_name+'.'+settlement_bill_logistics_json[0].suffix};
        }
      }
      this.settlement_bill_logistics_file_data = settlement_bill_logistics_file_arr;
      //console.log(this.settlement_bill_logistics_file_data);
    } else {
      this.settlement_bill_logistics_file_data = [];
    }
    var settlement_bill_logistics_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "settlement_bill_logistics_edit_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title" >修改物流对账单</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货量</label>'+
                      '<div class = " input-group" >'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_load_quantity load_quantity_blur_logistics" value = "' + settlement_bill_logistics_load_quantity + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_unload_quantity unload_quantity_blur_logistics"  value = "' + settlement_bill_logistics_unload_quantity + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">约定损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_contract_ullage" value = "' + settlement_bill_logistics_contract_ullage + '">'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">实际损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control actual_loss_change" disabled = "disabled" value = "' + settlement_bill_logistics_actual_loss_ + '">'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                   '<div class = "form-group">'+
                     '<label for = "">结算量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_settle_quantity volume_corresponding_logistics" value = "' + settlement_bill_logistics_settle_quantity + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">货物单价</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_goods_price price_corresponding_logistics" value = "' + settlement_bill_logistics_goods_price + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">发票数量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_invoice_quantity" value = "' + settlement_bill_logistics_invoice_quantity + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">合计价格</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control total_price" disabled = "disabled" value = "' + settlement_bill_logistics_all_price + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">已付货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_paid_amount amount_corresponding_logistics" value = "' + settlement_bill_logistics_paid_amount + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应退货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control return_money_should" disabled = "disabled" value = "' + settlement_bill_logistics_retune_price + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">物流对账单附件</label>'+
                    '<div class = "panel panel-default clearfix" id = "settlement_bill_logistics_edit_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-warning btn_code" id = "settlement_bill_logistics_edit_data_btn" contract_code = "' + contract_code + '"  uuid = "' + uuid + '" >修改</button>'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(settlement_bill_logistics_edit_html);
    upload_attachment_edit_output("#settlement_bill_logistics_edit_attch", this.settlement_bill_logistics_file_data);
    $("#settlement_bill_logistics_edit_modle_prop").modal("show");
    $("#settlement_bill_logistics_edit_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.settlement_bill_logistics_edit_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    //物流合同编号
    var settlement_bill_logistics_contract_code = contract_code;
    var settlement_bill_logistics_contract_ullage = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_contract_ullage").val();
    var settlement_bill_logistics_load_quantity = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_load_quantity").val();
    var settlement_bill_logistics_unload_quantity = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_unload_quantity").val();
    var settlement_bill_logistics_settle_quantity = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_settle_quantity").val();
    var settlement_bill_logistics_goods_price = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_goods_price").val();
    var settlement_bill_logistics_invoice_quantity = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_invoice_quantity").val();
    var settlement_bill_logistics_paid_amount = obj.parents("#settlement_bill_logistics_edit_modle_prop").find(".settlement_bill_logistics_paid_amount").val();
    //附件
    var settlement_bill_logistics_list = $("#settlement_bill_logistics_edit_attch ul").children("li");
    var settlement_bill_logistics_cluster_list = "";
    for (var i = 0; i < settlement_bill_logistics_list.length; i++) {
      var settlement_bill_logistics_dom = settlement_bill_logistics_list[i];
      var cluster = $(settlement_bill_logistics_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       settlement_bill_logistics_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == settlement_bill_logistics_load_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的装货量！");
      return;
    }
    if (null == settlement_bill_logistics_unload_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的卸货量！");
      return;
    }
    if (null == settlement_bill_logistics_contract_ullage.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的合同损耗！");
      return;
    }
    if (null == settlement_bill_logistics_settle_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的结算量！");
      return;
    }
    if (null == settlement_bill_logistics_goods_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的货物单价！");
      return;
    }
    if (null == settlement_bill_logistics_invoice_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的发票数量！");
      return;
    }
    if (null == settlement_bill_logistics_paid_amount.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的已付金额！");
      return;
    }
    var data={
      "idColumnValue":uuid,
      "buyer_uuid":this.contract_logistics_buyer,
      "seller_uuid":this.contract_logistics_seller,
      "contract_code":this.contract_logistics_code,
      "product_name":this.contract_logistics_product_name,
      "contract_ullage":settlement_bill_logistics_contract_ullage,
      "load_quantity":settlement_bill_logistics_load_quantity,
      "unload_quantity":settlement_bill_logistics_unload_quantity,
      "settle_quantity":settlement_bill_logistics_settle_quantity,
      "goods_price":settlement_bill_logistics_goods_price,
      "invoice_quantity":settlement_bill_logistics_invoice_quantity,
      "paid_amount":settlement_bill_logistics_paid_amount
    };
    if (0 < settlement_bill_logistics_cluster_list.length) {
      if(null == settlement_bill_logistics_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
        alert("请添加物流对账单附件！");
        return;
      }
      data["newClusterList"] = settlement_bill_logistics_cluster_list;
    }
    //调数据库
    var settlement_bill_logistics_edit_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyLogisticsSettlementBill";
    var settlement_bill_logistics_edit_data_get = ajax_assistant(settlement_bill_logistics_edit_data_url, data, false, true, false);
    //console.log(settlement_bill_logistics_edit_data_get);
    if ("1" == settlement_bill_logistics_edit_data_get.status){
      this.settlement_bill_logistics_clear_raw_data();
      this.settlement_bill_logistics_server_data_cover();
      this.settlement_bill_logistics_fill_variable_data();
      $("#settlement_bill_logistics_edit_modle_prop").modal("hide");
      $("#settlement_bill_logistics_edit_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("修改失败");
    }   
  };
  
  this.settlement_bill_logistics_delete_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var settlement_bill_logistics_delete_html = 
        '<div class = "modal fade custom_modal" id = "settlement_bill_logistics_delete_modle_prop" tabindex = "-1" role = "dialog">'+
          '<div class = "modal-dialog modal-sm" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">删除物流对账单确认</h4>'+
              '</div>'+
              '<div class = "modal-body nopadding-bottom settlement_bill_logistics_center">确认要删除吗？</div>'+
              '<div class = "modal-footer noborder nopadding-top" style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-danger" id = "settlement_bill_logistics_delete_modle_prop_btn"  uuid = "' + uuid + '" contract_code = "' + contract_code + '">删除</button>'+
                  '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>';
    $("body").append(settlement_bill_logistics_delete_html);
    $("#settlement_bill_logistics_delete_modle_prop").modal("show");
    $("#settlement_bill_logistics_delete_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.settlement_bill_logistics_delete_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var data = {
      "idColumnValue":uuid
    };
    //接口数据
    var settlement_bill_logistics_delete_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeSettlementBill";
    var settlement_bill_logistics_delete_data_get = ajax_assistant(settlement_bill_logistics_delete_data_url, data, false, true, false);
    if ("1" != settlement_bill_logistics_delete_data_get.status){
      alert("删除物流对账单失败");
    } else {  
      // 更新页面数据
      this.settlement_bill_logistics_clear_raw_data();
      this.settlement_bill_logistics_server_data_cover();
      this.settlement_bill_logistics_fill_variable_data();
      $("#settlement_bill_logistics_delete_modle_prop").modal("hide");
      $("#settlement_bill_logistics_delete_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    }
  };
  
  this.settlement_bill_logistics_info_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var settlement_bill_logistics_contract_ullage = "";
    var settlement_bill_logistics_load_quantity = "";
    var settlement_bill_logistics_unload_quantity = "";
    var settlement_bill_logistics_settle_quantity = "";
    var settlement_bill_logistics_goods_price = "";
    var settlement_bill_logistics_invoice_quantity = "";
    var settlement_bill_logistics_paid_amount = "";
    var settlement_bill_logistics_cluster_list = ""
    //调接口
    var data = {
      "uuid":uuid
    };
    var settlement_bill_logistics_get_all_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getSettlementBill";
    var settlement_bill_logistics_get_all_warehouse = ajax_assistant(settlement_bill_logistics_get_all_url, data, false, true, false);
    if ("1" == settlement_bill_logistics_get_all_warehouse.status) {
      var settlement_bill_logistics_edit_data_d = JSON.parse(settlement_bill_logistics_get_all_warehouse.result);
      //console.log(settlement_bill_logistics_edit_data_d);
      if (0 < settlement_bill_logistics_edit_data_d.length) {
        settlement_bill_logistics_contract_ullage = settlement_bill_logistics_edit_data_d[0].contract_ullage;
        settlement_bill_logistics_load_quantity = settlement_bill_logistics_edit_data_d[0].load_quantity;
        settlement_bill_logistics_unload_quantity = settlement_bill_logistics_edit_data_d[0].unload_quantity;
        settlement_bill_logistics_settle_quantity = settlement_bill_logistics_edit_data_d[0].settle_quantity;
        settlement_bill_logistics_goods_price = settlement_bill_logistics_edit_data_d[0].goods_price;
        settlement_bill_logistics_invoice_quantity = settlement_bill_logistics_edit_data_d[0].invoice_quantity;
        settlement_bill_logistics_paid_amount = settlement_bill_logistics_edit_data_d[0].paid_amount;
        if (null != settlement_bill_logistics_edit_data_d[0].cluster_list) {
          settlement_bill_logistics_cluster_list = settlement_bill_logistics_edit_data_d[0].cluster_list;
        }
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    var settlement_bill_logistics_actual_loss_ = ((settlement_bill_logistics_load_quantity - settlement_bill_logistics_unload_quantity)/settlement_bill_logistics_load_quantity).toFixed(4)*1000;
    var settlement_bill_logistics_all_price = (settlement_bill_logistics_goods_price * settlement_bill_logistics_settle_quantity).toFixed(2);
    var settlement_bill_logistics_retune_price = ((settlement_bill_logistics_goods_price * settlement_bill_logistics_settle_quantity) - settlement_bill_logistics_paid_amount).toFixed(2);
    //附件
    if (0 < settlement_bill_logistics_cluster_list.length) {
      var settlement_bill_logistics_file_arr = new Array();
      settlement_bill_logistics_cluster_list = settlement_bill_logistics_cluster_list.substring(0, settlement_bill_logistics_cluster_list.length - 1).split(';');
      //console.log(settlement_bill_logistics_cluster_list)
      for(var i = 0; i < settlement_bill_logistics_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":settlement_bill_logistics_cluster_list[i]
        };
        var settlement_bill_logistics_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var settlement_bill_logistics_json = JSON.parse(settlement_bill_logistics_file_name.result);
        //console.log(settlement_bill_logistics_json)
        if(0 != settlement_bill_logistics_file_name.count) {
          settlement_bill_logistics_file_arr[i] = {"file_name":settlement_bill_logistics_json[0].cluster_name+'.'+settlement_bill_logistics_json[0].suffix};
        }
      }
      this.settlement_bill_logistics_file_data = settlement_bill_logistics_file_arr;
      //console.log(this.settlement_bill_logistics_file_data);
    } else {
      this.settlement_bill_logistics_file_data = [];
    }
    var settlement_bill_logistics_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "settlement_bill_logistics_info_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title" >物流对账单详情</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货量</label>'+
                      '<div class = " input-group" >'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_load_quantity load_quantity_blur_logistics" value = "' + settlement_bill_logistics_load_quantity + '"  disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_unload_quantity unload_quantity_blur_logistics"  value = "' + settlement_bill_logistics_unload_quantity + '"  disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">约定损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_contract_ullage" value = "' + settlement_bill_logistics_contract_ullage + '"  disabled = "disabled">'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">实际损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control actual_loss_change" disabled = "disabled" value = "' + settlement_bill_logistics_actual_loss_ + '">'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                   '<div class = "form-group">'+
                     '<label for = "">结算量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_settle_quantity volume_corresponding_logistics" value = "' + settlement_bill_logistics_settle_quantity + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">货物单价</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_goods_price price_corresponding_logistics" value = "' + settlement_bill_logistics_goods_price + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">发票数量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_invoice_quantity" value = "' + settlement_bill_logistics_invoice_quantity + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">合计价格</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control total_price" disabled = "disabled" value = "' + settlement_bill_logistics_all_price + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">已付货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_logistics_paid_amount amount_corresponding_logistics" value = "' + settlement_bill_logistics_paid_amount + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应退货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control return_money_should" disabled = "disabled" value  =  "' + settlement_bill_logistics_retune_price + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">物流对账单附件</label>'+
                    '<div class = "panel panel-default clearfix" id  =  "settlement_bill_logistics_info_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">关闭</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(settlement_bill_logistics_edit_html);
    upload_attachment_preview_output("#settlement_bill_logistics_info_attch", this.settlement_bill_logistics_file_data);
    $("#settlement_bill_logistics_info_modle_prop").modal("show");
    $("#settlement_bill_logistics_info_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.settlement_bill_logistics_output = function() {
    var content = 
  '  <div class = "panel panel-primary ">'+
  '    <div class = "panel-heading clearfix">物流对账单<span class = "glyphicon glyphicon-plus pull-right" id = "settlement_bill_logistics_add_modle"></span></div>'+
  '    <div class = "panel-body">'+
  '        <div class = "row">'+
  '          <div class = "col-lg-12">'+
  '            <table cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table settlement_bill_table_sales_trad_uuid">'+
  '              <thead>'+
  '                <tr>'+
  '                  <th>装货量</th>'+
  '                  <th>卸货量</th>'+
  '                  <th>约定损耗</th>'+
  '                  <th>实际损耗</th>'+
  '                  <th>结算量</th>'+
  '                  <th>货物单价</th>'+
  '                  <th>发票数量</th>'+
  '                  <th>合计价格</th>'+
  '                  <th>已付货款</th>'+
  '                  <th>应退货款</th>'+
  '                  <th></th>'+
  '                </tr>'+
  '              </thead>'+
  '              <tbody class = "settlement_bill_logistics_box">'+
  '                <tr>'+
  '                  <td>300</td>'+
  '                  <td>300</td>'+
  '                  <td>3‰</td>'+
  '                  <td>2‰</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3600</td>'+
  '                  <td>300</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign settlement_bill_logistics_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil settlement_bill_logistics_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove settlement_bill_logistics_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td>300</td>'+
  '                  <td>300</td>'+
  '                  <td>3‰</td>'+
  '                  <td>2‰</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3600</td>'+
  '                  <td>300</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign settlement_bill_logistics_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil settlement_bill_logistics_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove settlement_bill_logistics_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '                <tr>'+
  '                  <td>300</td>'+
  '                  <td>300</td>'+
  '                  <td>3‰</td>'+
  '                  <td>2‰</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3000</td>'+
  '                  <td>3600</td>'+
  '                  <td>300</td>'+
  '                  <td>'+
  '                    <span class = "glyphicon glyphicon-info-sign settlement_bill_logistics_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-pencil settlement_bill_logistics_ml15"></span>'+
  '                    <span class = "glyphicon glyphicon-remove settlement_bill_logistics_ml15"></span>'+
  '                  </td>'+
  '                </tr>'+
  '              </tbody>'+
  '            </table>'+
  '          </div>'+
  '        </div>'+
  '      </div>'+
  '    </div>';
      $(this.settlement_bill_logistics_content_box).html(content);
  };
}
