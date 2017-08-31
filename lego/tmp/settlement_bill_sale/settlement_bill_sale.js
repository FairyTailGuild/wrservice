/**
 * @author wangdi
 */
function SettlementBillSale(trade_contract_code, trade_contract_code_uuid, settlement_bill_sale_content_box, trade_type, bill_sale_type) {
  this.trade_contract_code = trade_contract_code;
  this.trade_contract_code_uuid = trade_contract_code_uuid;
  this.settlement_bill_sale_content_box = settlement_bill_sale_content_box;
  this.trade_type = trade_type;
  this.bill_sale_type = bill_sale_type;

  /**
   * 附件
   */
  this.settlement_bill_sale_file_data = [
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
   * 销售结算函数据
   */
  this.settlement_bill_sale_data = {"data":[
      {"contract_code":"ZS-TZGYL-17813261", "type":"2", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000001", "product_name":"富纪有限公司", "load_quantity":"12", "unload_quantity":"45", "contract_ullage":"0.1", "settle_quantity":"100", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111111", "contract_code_uuid":"b9fb85295cbb4ceb8d6f4e9dfd398ac8"},
      {"contract_code":"ZS-TZGYL-17813261", "type":"2", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000001", "product_name":"富纪有限公司", "load_quantity":"12", "unload_quantity":"45", "contract_ullage":"0.1", "settle_quantity":"100", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111112", "contract_code_uuid":"b9fb85295cbb4ceb8d6f4e9dfd398ac8"},
      {"contract_code":"ZS-TZGYL-17813261", "type":"2", "buyer_uuid":"00000000000000000000000000000002", "seller_uuid":"00000000000000000000000000000001", "product_name":"富纪有限公司", "load_quantity":"12", "unload_quantity":"45", "contract_ullage":"0.1", "settle_quantity":"100", "goods_price":"10", "invoice_quantity":"1000", "paid_amount":"80", "uuid":"11111111111111111111111111111113", "contract_code_uuid":"b9fb85295cbb4ceb8d6f4e9dfd398ac8"}
    ]
  };
  
  this.settlement_bill_sale_clear_raw_data = function() {
    $(this.settlement_bill_sale_content_box).find(".settlement_bill_sale_box").html('<tr><td colspan="7" align="center">没数据</td></tr>');
  };
  
  /**
   * 服务器数据
   */
  this.settlement_bill_sale_server_data_cover = function() {
    var settlement_bill_contract_sale_buyer_uuid = "";
    var settlement_bill_contract_sale_seller_uuid = "";
    var settlement_bill_contract_sale_contract_ullage = "";
    var settlement_bill_contract_sale_contract_code_uuid = "";
    var contract_obj_data = {
      "contract_code":this.trade_contract_code,
      "type":this.trade_type
    };
    //获取销售合同
    var settlement_bill_contract_sale_logistics_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
    var settlement_bill_contract_sale_logistics_get_contract = ajax_assistant(settlement_bill_contract_sale_logistics_url, contract_obj_data, false, true, false);
    if (1 == settlement_bill_contract_sale_logistics_get_contract.status) {
      if (0 != settlement_bill_contract_sale_logistics_get_contract.count) {
        var settlement_bill_contract_sale_logistics_result = JSON.parse(settlement_bill_contract_sale_logistics_get_contract.result);
        settlement_bill_contract_sale_buyer_uuid = settlement_bill_contract_sale_logistics_result[0].buyer_uuid;
        settlement_bill_contract_sale_seller_uuid = settlement_bill_contract_sale_logistics_result[0].seller_uuid;
        settlement_bill_contract_sale_contract_ullage = settlement_bill_contract_sale_logistics_result[0].contract_ullage;
        settlement_bill_contract_sale_contract_code_uuid = settlement_bill_contract_sale_logistics_result[0].uuid;
      } else {
        alert("购买方、销售方没数据");
      }
    } else {
      alert("获取购买方、销售方失败");
    }
    
    var server_data = {
      "contract_code":this.trade_contract_code
    };
    //获取销售结算函
    var settlement_bill_sale_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getSettlementBill";
    var settlement_bill_sale_get_contract = ajax_assistant(settlement_bill_sale_url, server_data, false, true, false);
    this.settlement_bill_sale_data = {};
    if (1 == settlement_bill_sale_get_contract.status) {
      if (0 == settlement_bill_sale_get_contract.count) {
        this.settlement_bill_sale_data = {};
      } else {
        var tmp_arr = new Array();
        var settlement_bill_sale_result = JSON.parse(settlement_bill_sale_get_contract.result);  
        ////console.log(settlement_bill_sale_result);
        for (var i = 0; i < settlement_bill_sale_result.length; i++) {
          tmp_arr[i] = {"contract_code":this.trade_contract_code, "type":this.bill_sale_type, "buyer_uuid":settlement_bill_contract_sale_buyer_uuid, "seller_uuid":settlement_bill_contract_sale_seller_uuid, "product_name":settlement_bill_sale_result[i].product_name, "load_quantity":settlement_bill_sale_result[i].load_quantity, "unload_quantity":settlement_bill_sale_result[i].unload_quantity, "contract_ullage":settlement_bill_contract_sale_contract_ullage, "settle_quantity":settlement_bill_sale_result[i].settle_quantity, "goods_price":settlement_bill_sale_result[i].goods_price, "invoice_quantity":settlement_bill_sale_result[i].invoice_quantity, "paid_amount":settlement_bill_sale_result[i].paid_amount, "uuid":settlement_bill_sale_result[i].uuid, "contract_code_uuid":settlement_bill_contract_sale_contract_code_uuid};
        }
        this.settlement_bill_sale_data["data"] = tmp_arr;
      }
    } else {
      alert("销售结算函数据获取失败");
    }
  };
  
  this.settlement_bill_sale_fill_variable_data = function() {
    if(isJsonObjectHasData(this.settlement_bill_sale_data)) {
      var settlement_bill_sale_html = "";
      for (var i = 0; i < this.settlement_bill_sale_data.data.length; i++) {
        var settlement_bill_sale_all_price = this.settlement_bill_sale_data.data[i].settle_quantity*this.settlement_bill_sale_data.data[i].goods_price;
        var settlement_bill_sale_returned = this.settlement_bill_sale_data.data[i].settle_quantity*this.settlement_bill_sale_data.data[i].goods_price - this.settlement_bill_sale_data.data[i].paid_amount;
        settlement_bill_sale_html +=
          '<tr>'+
            '<td>' + this.settlement_bill_sale_data.data[i].product_name + '</td>'+
            '<td>' + this.settlement_bill_sale_data.data[i].settle_quantity + '</td>'+
            '<td>' + this.settlement_bill_sale_data.data[i].goods_price + '</td>'+
            '<td>' + settlement_bill_sale_all_price.toFixed(2) + '</td>'+
            '<td>' + this.settlement_bill_sale_data.data[i].paid_amount + '</td>'+
            '<td>' + settlement_bill_sale_returned.toFixed(2) + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign settlement_bill_sale_ml15 settlement_bill_sale_modle_info" uuid = "' + this.settlement_bill_sale_data.data[i].uuid + '" contract_code = "' + this.settlement_bill_sale_data.data[i].contract_code + '"  buyer_uuid = "' + this.settlement_bill_sale_data.data[i].buyer_uuid + '" seller_uuid = "' + this.settlement_bill_sale_data.data[i].seller_uuid + '" contract_code_uuid = "' + this.settlement_bill_sale_data.data[i].contract_code_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil settlement_bill_sale_ml15 settlement_bill_sale_modle_pencil" uuid = "' + this.settlement_bill_sale_data.data[i].uuid + '" contract_code = "' + this.settlement_bill_sale_data.data[i].contract_code + '"  buyer_uuid = "' + this.settlement_bill_sale_data.data[i].buyer_uuid + '" seller_uuid = "' + this.settlement_bill_sale_data.data[i].seller_uuid + '" contract_code_uuid = "' + this.settlement_bill_sale_data.data[i].contract_code_uuid + '"></span>'+
              '<span class = "glyphicon glyphicon-remove settlement_bill_sale_ml15 settlement_bill_sale_modle_remove" uuid = "' + this.settlement_bill_sale_data.data[i].uuid + '" contract_code = "' + this.settlement_bill_sale_data.data[i].contract_code + '" contract_code_uuid = "' + this.settlement_bill_sale_data.data[i].contract_code_uuid + '"></span>'+
            '</td>'+
          '</tr>';
      }
      $(this.settlement_bill_sale_content_box).find(".settlement_bill_sale_box").html(settlement_bill_sale_html);
    } else {
      $(this.settlement_bill_sale_content_box).find(".settlement_bill_sale_box").html('<tr><td colspan="7" align="center">没数据</td></tr>');
    }
  };
  
  this.settlement_bill_sale_add_modle_func = function(obj) {
    var contract_code = obj.attr("contract_code");
    var settlement_bill_sale_html = 
        '<div class = "modal fade custom_modal" tabindex = "-1" id = "settlement_bill_sale_add_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">添加销售结算函</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">品名</label>'+
                      '<input type = "text" class = "form-control settlement_bill_sale_product_name" value = "">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">结算量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_settle_quantity volume_corresponding" value = "">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">单价</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_goods_price price_corresponding" value = "">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应收货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control total_price" value = ""  disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">已付货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_paid_amount amount_corresponding" value = "">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应付余款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control return_money_should" value = "" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_load_quantity" value = "">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                   '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_unload_quantity" value = "">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">销售结算函附件</label>'+
                    '<div class = "panel panel-default" id  =  "settlement_bill_sale_add_modle_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-primary btn_code" id = "settlement_bill_sale_add_data_btn" contract_code = "' + contract_code + '">添加</button>'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(settlement_bill_sale_html);
    upload_attachment_edit_output("#settlement_bill_sale_add_modle_attch");
    $("#settlement_bill_sale_add_modle_prop").modal("show");
    $("#settlement_bill_sale_add_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.all_should_change = function(obj) {
    var volume_corresponding = obj.parents(".modal-body").find(".volume_corresponding").val();
    var price_corresponding = obj.parents(".modal-body").find(".price_corresponding").val();
    var amount_corresponding = obj.parents(".modal-body").find(".amount_corresponding").val();
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
  
  this.settlement_bill_sale_add_data_func = function(obj) {
    var settlement_bill_sale_buyer_uuid = "";
    var settlement_bill_sale_seller_uuid = "";
    var settlement_bill_sale_contract_ullage = "";
    var data_contract={
      "contract_code":this.trade_contract_code,
      "type":this.trade_type,
      "uuid":this.trade_contract_code_uuid
    };
    //获取销售合同
    var settlement_bill_contract_sale_logistics_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
    var settlement_bill_contract_sale_logistics_get_contract = ajax_assistant(settlement_bill_contract_sale_logistics_url, data_contract, false, true, false);
    if (1 == settlement_bill_contract_sale_logistics_get_contract.status) {
      if (0 != settlement_bill_contract_sale_logistics_get_contract.count) {
        var settlement_bill_contract_sale_logistics_result = JSON.parse(settlement_bill_contract_sale_logistics_get_contract.result);
        settlement_bill_sale_buyer_uuid = settlement_bill_contract_sale_logistics_result[0].buyer_uuid;
        settlement_bill_sale_seller_uuid = settlement_bill_contract_sale_logistics_result[0].seller_uuid;
        settlement_bill_sale_contract_ullage = settlement_bill_contract_sale_logistics_result[0].contract_ullage;
      }
    }
    var settlement_bill_sale_product_name = obj.parents("#settlement_bill_sale_add_modle_prop").find(".settlement_bill_sale_product_name").val();
    var settlement_bill_sale_load_quantity = obj.parents("#settlement_bill_sale_add_modle_prop").find(".settlement_bill_sale_load_quantity").val();
    var settlement_bill_sale_unload_quantity = obj.parents("#settlement_bill_sale_add_modle_prop").find(".settlement_bill_sale_unload_quantity").val();
    var settlement_bill_sale_settle_quantity = obj.parents("#settlement_bill_sale_add_modle_prop").find(".settlement_bill_sale_settle_quantity").val();
    var settlement_bill_sale_goods_price = obj.parents("#settlement_bill_sale_add_modle_prop").find(".settlement_bill_sale_goods_price").val();
    var settlement_bill_sale_invoice_quantity = settlement_bill_sale_settle_quantity;
    var settlement_bill_sale_paid_amount = obj.parents("#settlement_bill_sale_add_modle_prop").find(".settlement_bill_sale_paid_amount").val();
    //附件
    var settlement_bill_sale_list = $("#settlement_bill_sale_add_modle_attch ul").children("li");
    var settlement_bill_sale_cluster_list = "";
    for (var i = 0; i < settlement_bill_sale_list.length; i++) {
      var settlement_bill_sale_dom = settlement_bill_sale_list[i];
      var cluster = $(settlement_bill_sale_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       settlement_bill_sale_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == settlement_bill_sale_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的品名！");
      return;
    }
    if (null == settlement_bill_sale_settle_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的结算量！");
      return;
    }
    if (null == settlement_bill_sale_goods_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的单价！");
      return;
    }
    if (null == settlement_bill_sale_paid_amount.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的已付货款！");
      return;
    }
    if (null == settlement_bill_sale_load_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的装货量！");
      return;
    }
    if (null == settlement_bill_sale_unload_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的卸货量！");
      return;
    }
    if (null == settlement_bill_sale_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
      alert("请添加销售结算函附件！");
      return;
    }
    var data={
      "contract_code":this.trade_contract_code,
      "type":this.bill_sale_type,
      "buyer_uuid":settlement_bill_sale_buyer_uuid,
      "seller_uuid":settlement_bill_sale_seller_uuid,
      "product_name":settlement_bill_sale_product_name,
      "contract_ullage":settlement_bill_sale_contract_ullage,
      "load_quantity":settlement_bill_sale_load_quantity,
      "unload_quantity":settlement_bill_sale_unload_quantity,
      "settle_quantity":settlement_bill_sale_settle_quantity,
      "goods_price":settlement_bill_sale_goods_price,
      "invoice_quantity":settlement_bill_sale_invoice_quantity,
      "paid_amount":settlement_bill_sale_paid_amount,
      "cluster_list":settlement_bill_sale_cluster_list
    };
    //调接口
    var settlement_bill_sale__add_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=addTradeSettlementBill";
    var settlement_bill_sale__add_get_warehouse = ajax_assistant(settlement_bill_sale__add_url, data, false, true, false);
    if ("1" == settlement_bill_sale__add_get_warehouse.status) {
      this.settlement_bill_sale_clear_raw_data();
      this.settlement_bill_sale_server_data_cover();
      this.settlement_bill_sale_fill_variable_data(); 
      $("#settlement_bill_sale_add_modle_prop").modal("hide");
      $("#settlement_bill_sale_add_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("添加销售结算函失败");
    }
  };
  
  this.settlement_bill_sale_edit_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var settlement_bill_sale_product_name = "";
    var settlement_bill_sale_load_quantity = "";
    var settlement_bill_sale_unload_quantity = "";
    var settlement_bill_sale_settle_quantity = "";
    var settlement_bill_sale_goods_price = "";
    var settlement_bill_sale_invoice_quantity = settlement_bill_sale_settle_quantity;
    var settlement_bill_sale_paid_amount = "";
    //附件
    var settlement_bill_sale_cluster_list = "";
    //查询数据
    var data={
      "contract_code":this.trade_contract_code,
      "uuid":uuid
    };
    var settlement_bill_sale_get_all_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getSettlementBill";
    var settlement_bill_sale_get_all_warehouse = ajax_assistant(settlement_bill_sale_get_all_url, data, false, true, false);
    if ("1" == settlement_bill_sale_get_all_warehouse.status) {
      var settlement_bill_sale_edit_data_d = JSON.parse(settlement_bill_sale_get_all_warehouse.result);
      //console.log(settlement_bill_sale_edit_data_d);
      if (0 < settlement_bill_sale_edit_data_d.length) {
          settlement_bill_sale_product_name = settlement_bill_sale_edit_data_d[0].product_name;
          settlement_bill_sale_load_quantity = settlement_bill_sale_edit_data_d[0].load_quantity;
          settlement_bill_sale_unload_quantity = settlement_bill_sale_edit_data_d[0].unload_quantity;
          settlement_bill_sale_settle_quantity = settlement_bill_sale_edit_data_d[0].settle_quantity;
          settlement_bill_sale_goods_price = settlement_bill_sale_edit_data_d[0].goods_price;
          settlement_bill_sale_paid_amount = settlement_bill_sale_edit_data_d[0].paid_amount;
        if (null != settlement_bill_sale_edit_data_d[0].cluster_list) {
          settlement_bill_sale_cluster_list = settlement_bill_sale_edit_data_d[0].cluster_list;
        }
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    var settlement_bill_sale_all_price = (settlement_bill_sale_goods_price * settlement_bill_sale_settle_quantity).toFixed(2);
    var settlement_bill_sale_retune_price = ((settlement_bill_sale_goods_price * settlement_bill_sale_settle_quantity) - settlement_bill_sale_paid_amount).toFixed(2);
    //附件
    //console.log(settlement_bill_sale_cluster_list);
    if (0 < settlement_bill_sale_cluster_list.length) {
      var settlement_bill_sale_file_arr = new Array();
      settlement_bill_sale_cluster_list = settlement_bill_sale_cluster_list.substring(0, settlement_bill_sale_cluster_list.length - 1).split(';');
      //console.log(settlement_bill_sale_cluster_list)
      for(var i = 0; i < settlement_bill_sale_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":settlement_bill_sale_cluster_list[i]
        };
        var settlement_bill_sale_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var settlement_bill_sale_json = JSON.parse(settlement_bill_sale_file_name.result);
        //console.log(settlement_bill_sale_json)
        if(0 != settlement_bill_sale_file_name.count) {
          settlement_bill_sale_file_arr[i] = {"file_name":settlement_bill_sale_json[0].cluster_name + '.' + settlement_bill_sale_json[0].suffix};
        }
      }
      this.settlement_bill_sale_file_data = settlement_bill_sale_file_arr;
      //console.log(this.settlement_bill_sale_file_data);
    } else {
      this.settlement_bill_sale_file_data = [];
    }
    var settlement_bill_sale_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "settlement_bill_sale_edit_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">修改销售结算函</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">品名</label>'+
                      '<input type = "text" class = "form-control settlement_bill_sale_product_name" value = "' + settlement_bill_sale_product_name + '">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">结算量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_settle_quantity volume_corresponding" value = "' + settlement_bill_sale_settle_quantity + '">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">单价</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_goods_price price_corresponding" value = "' + settlement_bill_sale_goods_price + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应收货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control total_price" value = "' + settlement_bill_sale_all_price + '"  disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">已付货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_paid_amount amount_corresponding" value = "' + settlement_bill_sale_paid_amount + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应付余款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control return_money_should" value = "' + settlement_bill_sale_retune_price + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_load_quantity" value = "' + settlement_bill_sale_load_quantity + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                   '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_unload_quantity" value = "' + settlement_bill_sale_unload_quantity + '">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">销售结算函附件</label>'+
                    '<div class = "panel panel-default" id  =  "settlement_bill_sale_edit_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                '<button type = "button" class = "btn btn-warning btn_code" id = "settlement_bill_sale_edit_data_btn" contract_code = "' + contract_code + '"  uuid  =  "' + uuid + '">修改</button>'+
                '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(settlement_bill_sale_edit_html);
    upload_attachment_edit_output("#settlement_bill_sale_edit_attch", this.settlement_bill_sale_file_data);
    $("#settlement_bill_sale_edit_modle_prop").modal("show");
    $("#settlement_bill_sale_edit_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.settlement_bill_sale_edit_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var settlement_bill_sale_buyer_uuid = "";
    var settlement_bill_sale_seller_uuid = "";
    var settlement_bill_sale_contract_ullage = "";
    var data_contract = {
      "contract_code":this.trade_contract_code,
      "type":this.trade_type,
      "uuid":this.trade_contract_code_uuid
    };
    //获取销售合同
    var settlement_bill_contract_sale_logistics_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
    var settlement_bill_contract_sale_logistics_get_contract = ajax_assistant(settlement_bill_contract_sale_logistics_url, data_contract, false, true, false);
    if (1 == settlement_bill_contract_sale_logistics_get_contract.status) {
      if (0 != settlement_bill_contract_sale_logistics_get_contract.count) {
        var settlement_bill_contract_sale_logistics_result = JSON.parse(settlement_bill_contract_sale_logistics_get_contract.result);
        settlement_bill_sale_buyer_uuid = settlement_bill_contract_sale_logistics_result[0].buyer_uuid;
        settlement_bill_sale_seller_uuid = settlement_bill_contract_sale_logistics_result[0].seller_uuid;
        settlement_bill_sale_contract_ullage = settlement_bill_contract_sale_logistics_result[0].contract_ullage;
      }
    }
    var settlement_bill_sale_product_name = obj.parents("#settlement_bill_sale_edit_modle_prop").find(".settlement_bill_sale_product_name").val();
    var settlement_bill_sale_load_quantity = obj.parents("#settlement_bill_sale_edit_modle_prop").find(".settlement_bill_sale_load_quantity").val();
    var settlement_bill_sale_unload_quantity = obj.parents("#settlement_bill_sale_edit_modle_prop").find(".settlement_bill_sale_unload_quantity").val();
    var settlement_bill_sale_settle_quantity = obj.parents("#settlement_bill_sale_edit_modle_prop").find(".settlement_bill_sale_settle_quantity").val();
    var settlement_bill_sale_goods_price = obj.parents("#settlement_bill_sale_edit_modle_prop").find(".settlement_bill_sale_goods_price").val();
    var settlement_bill_sale_invoice_quantity = settlement_bill_sale_settle_quantity;
    var settlement_bill_sale_paid_amount = obj.parents("#settlement_bill_sale_edit_modle_prop").find(".settlement_bill_sale_paid_amount").val();
    //附件
    var settlement_bill_sale_list = $("#settlement_bill_sale_edit_attch ul").children("li");
    var settlement_bill_sale_cluster_list = "";
    for (var i = 0; i < settlement_bill_sale_list.length; i++) {
      var settlement_bill_sale_dom = settlement_bill_sale_list[i];
      var cluster = $(settlement_bill_sale_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       settlement_bill_sale_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == settlement_bill_sale_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的品名！");
      return;
    }
    if (null == settlement_bill_sale_settle_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的结算量！");
      return;
    }
    if (null == settlement_bill_sale_goods_price.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的单价！");
      return;
    }
    if (null == settlement_bill_sale_paid_amount.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的已付货款！");
      return;
    }
    if (null == settlement_bill_sale_load_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的装货量！");
      return;
    }
    if (null == settlement_bill_sale_unload_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的卸货量！");
      return;
    }
    var data={
      "idColumnValue":uuid,
      "contract_code":this.trade_contract_code,
      "type":this.bill_sale_type,
      "buyer_uuid":settlement_bill_sale_buyer_uuid,
      "seller_uuid":settlement_bill_sale_seller_uuid,
      "product_name":settlement_bill_sale_product_name,
      "contract_ullage":settlement_bill_sale_contract_ullage,
      "load_quantity":settlement_bill_sale_load_quantity,
      "unload_quantity":settlement_bill_sale_unload_quantity,
      "settle_quantity":settlement_bill_sale_settle_quantity,
      "goods_price":settlement_bill_sale_goods_price,
      "invoice_quantity":settlement_bill_sale_invoice_quantity,
      "paid_amount":settlement_bill_sale_paid_amount
    };
    if (0 < settlement_bill_sale_cluster_list.length) {
      if (null == settlement_bill_sale_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
        alert("请添加销售结算函附件！");
        return;
      }
      data["newClusterList"] = settlement_bill_sale_cluster_list;
    }
    //调数据库
    var settlement_bill_sale_edit_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyTradeSettlementBill";
    var settlement_bill_sale_edit_data_get = ajax_assistant(settlement_bill_sale_edit_data_url, data, false, true, false);
    if ("1" == settlement_bill_sale_edit_data_get.status) {
      this.settlement_bill_sale_clear_raw_data();
      this.settlement_bill_sale_server_data_cover();
      this.settlement_bill_sale_fill_variable_data();
      $("#settlement_bill_sale_edit_modle_prop").modal("hide");
      $("#settlement_bill_sale_edit_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("修改失败");
    }   
  };
  
  this.settlement_bill_sale_delete_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    var settlement_bill_sale_delete_html = 
        '<div class = "modal fade custom_modal" id = "settlement_bill_sale_delete_modle_prop" tabindex = "-1" role = "dialog">'+
          '<div class = "modal-dialog modal-sm" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">删除销售结算函确认</h4>'+
              '</div>'+
              '<div class = "modal-body nopadding-bottom settlement_bill_sale_center">确认要删除吗？</div>'+
              '<div class = "modal-footer noborder nopadding-top" style = "text-align: center;">'+
              '<button type = "button" class = "btn btn-danger" id = "settlement_bill_sale_delete_modle_prop_btn"  uuid = "' + uuid + '" contract_code = "' + contract_code + '" >删除</button>'+
                  '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>';
    $("body").append(settlement_bill_sale_delete_html);
    $("#settlement_bill_sale_delete_modle_prop").modal("show");
    $("#settlement_bill_sale_delete_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.settlement_bill_sale_delete_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var data = {
      "idColumnValue":uuid
    };
    //接口数据
    var settlement_bill_sale_delete_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeSettlementBill";
    var settlement_bill_sale_delete_data_get = ajax_assistant(settlement_bill_sale_delete_data_url, data, false, true, false);
    if ("1" != settlement_bill_sale_delete_data_get.status){
      alert("删除销售结算函失败");
    } else {  
      // 更新页面数据
      this.settlement_bill_sale_clear_raw_data();
      this.settlement_bill_sale_server_data_cover();
      this.settlement_bill_sale_fill_variable_data();
      $("#settlement_bill_sale_delete_modle_prop").modal("hide");
      $("#settlement_bill_sale_delete_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    }
  };
  
  this.settlement_bill_sale_info_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var settlement_bill_sale_product_name = "";
    var settlement_bill_sale_load_quantity = "";
    var settlement_bill_sale_unload_quantity = "";
    var settlement_bill_sale_settle_quantity = "";
    var settlement_bill_sale_goods_price = "";
    var settlement_bill_sale_invoice_quantity = settlement_bill_sale_settle_quantity;
    var settlement_bill_sale_paid_amount = "";
    //附件
    var settlement_bill_sale_cluster_list = "";
    //查询数据
    var data={
      "contract_code":this.trade_contract_code,
      "uuid":uuid
    };
    var settlement_bill_sale_get_all_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getSettlementBill";
    var settlement_bill_sale_get_all_warehouse = ajax_assistant(settlement_bill_sale_get_all_url, data, false, true, false);
    if ("1" == settlement_bill_sale_get_all_warehouse.status) {
      var settlement_bill_sale_edit_data_d = JSON.parse(settlement_bill_sale_get_all_warehouse.result);
      //console.log(settlement_bill_sale_edit_data_d);
      if (0 < settlement_bill_sale_edit_data_d.length) {
          settlement_bill_sale_product_name = settlement_bill_sale_edit_data_d[0].product_name;
          settlement_bill_sale_load_quantity = settlement_bill_sale_edit_data_d[0].load_quantity;
          settlement_bill_sale_unload_quantity = settlement_bill_sale_edit_data_d[0].unload_quantity;
          settlement_bill_sale_settle_quantity = settlement_bill_sale_edit_data_d[0].settle_quantity;
          settlement_bill_sale_goods_price = settlement_bill_sale_edit_data_d[0].goods_price;
          settlement_bill_sale_paid_amount = settlement_bill_sale_edit_data_d[0].paid_amount;
        if (null != settlement_bill_sale_edit_data_d[0].cluster_list) {
          settlement_bill_sale_cluster_list = settlement_bill_sale_edit_data_d[0].cluster_list;
        }
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    var settlement_bill_sale_all_price = (settlement_bill_sale_goods_price * settlement_bill_sale_settle_quantity).toFixed(2);
    var settlement_bill_sale_retune_price = ((settlement_bill_sale_goods_price * settlement_bill_sale_settle_quantity) - settlement_bill_sale_paid_amount).toFixed(2);
    //附件
    //console.log(settlement_bill_sale_cluster_list);
    if (0 < settlement_bill_sale_cluster_list.length) {
      var settlement_bill_sale_file_arr = new Array();
      settlement_bill_sale_cluster_list = settlement_bill_sale_cluster_list.substring(0, settlement_bill_sale_cluster_list.length - 1).split(';');
      //console.log(settlement_bill_sale_cluster_list)
      for(var i = 0; i < settlement_bill_sale_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":settlement_bill_sale_cluster_list[i]
        };
        var settlement_bill_sale_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var settlement_bill_sale_json = JSON.parse(settlement_bill_sale_file_name.result);
        //console.log(settlement_bill_sale_json)
        if(0 != settlement_bill_sale_file_name.count) {
          settlement_bill_sale_file_arr[i] = {"file_name":settlement_bill_sale_json[0].cluster_name+'.'+settlement_bill_sale_json[0].suffix};
        }
      }
      this.settlement_bill_sale_file_data = settlement_bill_sale_file_arr;
      //console.log(this.settlement_bill_sale_file_data);
    } else {
      this.settlement_bill_sale_file_data = [];
    }
    var settlement_bill_sale_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "settlement_bill_sale_info_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">销售结算函详情</h4>'+
              '</div>'+
              '<div class = "modal-body">'+
                '<div class = "row">'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">品名</label>'+
                      '<input type = "text" class = "form-control settlement_bill_sale_product_name" value = "' + settlement_bill_sale_product_name + '" disabled = "disabled">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">结算量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_settle_quantity volume_corresponding" value = "' + settlement_bill_sale_settle_quantity + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">单价</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_goods_price price_corresponding" value = "' + settlement_bill_sale_goods_price + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应收货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control total_price" value = "' + settlement_bill_sale_all_price + '"  disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">已付货款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_paid_amount amount_corresponding" value = "' + settlement_bill_sale_paid_amount + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">应付余款</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control return_money_should" value = "' + settlement_bill_sale_retune_price + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_load_quantity" value = "' + settlement_bill_sale_load_quantity + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                   '</div>'+
                  '</div>'+
                  '<div class = "col-md-6">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control settlement_bill_sale_unload_quantity" value = "' + settlement_bill_sale_unload_quantity + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">销售结算函附件</label>'+
                    '<div class = "panel panel-default" id  =  "settlement_bill_sale_info_attch">'+
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
    $("body").append(settlement_bill_sale_edit_html);
    upload_attachment_preview_output("#settlement_bill_sale_info_attch", this.settlement_bill_sale_file_data);
    $("#settlement_bill_sale_info_modle_prop").modal("show");
    $("#settlement_bill_sale_info_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.settlement_bill_sale_output = function() {
    var content  =  
      '    <div class = "panel panel-primary contract_sale_settlement_checkbox">'+
      '      <div class = "panel-heading clearfix">销售结算函<span class = "glyphicon glyphicon-plus pull-right" id = "settlement_bill_sale_add_modle"></span></div>'+
      '      <div class = "panel-body">'+
      '        <div class = "row">'+
      '          <div class = "col-lg-12">'+
      '            <table cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table" id = "settlement_bill_table_sales_trad_uuid">'+
      '              <thead>'+
      '                <tr>'+
      '                  <th>品名</th>'+
      '                  <th>结算量（吨）</th>'+
      '                  <th>单价（元）</th>'+
      '                  <th>应收货款（元）</th>'+
      '                  <th>已付货款（元）</th>'+
      '                  <th>应付余额（元）</th>'+
      '                  <th></th>'+
      '                </tr>'+
      '              </thead>'+
      '              <tbody class = "settlement_bill_sale_box">'+
      '                <tr>'+
      '                  <td>甲基丁</td>'+
      '                  <td>100</td>'+
      '                  <td>1</td>'+
      '                  <td>100</td>'+
      '                  <td>10</td>'+
      '                  <td>90</td>'+
      '                  <td>'+
      '                    <span class = "glyphicon glyphicon-info-sign settlement_bill_sale_ml15"></span>'+
      '                    <span class = "glyphicon glyphicon-pencil settlement_bill_sale_ml15"></span>'+
      '                    <span class = "glyphicon glyphicon-remove settlement_bill_sale_ml15"></span>'+
      '                  </td>'+
      '                </tr>'+
      '                <tr>'+
      '                  <td>甲基丁</td>'+
      '                  <td>100</td>'+
      '                  <td>1</td>'+
      '                  <td>100</td>'+
      '                  <td>10</td>'+
      '                  <td>90</td>'+
      '                  <td>'+
      '                    <span class = "glyphicon glyphicon-info-sign settlement_bill_sale_ml15"></span>'+
      '                    <span class = "glyphicon glyphicon-pencil settlement_bill_sale_ml15"></span>'+
      '                    <span class = "glyphicon glyphicon-remove settlement_bill_sale_ml15"></span>'+
      '                  </td>'+
      '                </tr>'+
      '                <tr>'+
      '                  <td>甲基丁</td>'+
      '                  <td>100</td>'+
      '                  <td>1</td>'+
      '                  <td>100</td>'+
      '                  <td>10</td>'+
      '                  <td>90</td>'+
      '                  <td>'+
      '                    <span class = "glyphicon glyphicon-info-sign settlement_bill_sale_ml15"></span>'+
      '                    <span class = "glyphicon glyphicon-pencil settlement_bill_sale_ml15"></span>'+
      '                    <span class = "glyphicon glyphicon-remove settlement_bill_sale_ml15"></span>'+
      '                  </td>'+
      '                </tr>'+
      '              </tbody>'+
      '            </table>'+
      '          </div>'+
      '        </div>'+
      '      </div>'+
      '    </div>';
    $(this.settlement_bill_sale_content_box).html(content);
  };
};
