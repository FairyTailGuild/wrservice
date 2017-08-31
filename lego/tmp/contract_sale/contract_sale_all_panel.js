// var contract_sale_all_penle_uuid = "";

function contract_sale_open_info_func(obj) {
  var contract_sales_contract_code = obj.attr("contract_code");
  var contract_sales_contract_code_uuid = obj.attr("contract_sales_contract_code_uuid");
  var contract_sale_warehouse_uuid = obj.attr("contract_sale_warehouse_uuid");
  var contract_trad_add_url = "lego/lego_fjTrade?servletName=addTradeInvoiceInformation";
  var contract_trad_edit_url = "lego/lego_fjTrade?servletName=modifyTradeInvoiceInformation";
  //贸易合同合计
  var contract_sale_all_price = obj.attr("contract_sale_all_price");
  var contract_sale_all_penle =
  '<tr class = "contract_sale_all_panel">'+
    '<td colspan="11">'+
      '<div class="row">'+
        '<div class="col-lg-12">'+
          '<div id = "paid_record_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "contract_logistics_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "vehicle_information_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "deliver_entrust_letter_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "goods_confirm_letter_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "settlement_bill_sale_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "invoice_information_content' + contract_sales_contract_code_uuid + '">'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</td>'+
  '</tr>';
  var contract_sales_html = contract_sale_all_penle;
  if (obj.hasClass("active")) {
    obj.find(".glyphicon").removeClass("glyphicon-chevron-down");
    obj.removeClass("active");
    obj.parent().parent().nextUntil(".contract_sale_tr").remove();
    contract_sales_html = "";
  } else {
    obj.find(".glyphicon").addClass("glyphicon-chevron-down");
    obj.addClass("active");
    obj.parent().parent().after(contract_sales_html);
  }
  
  //收款记录
  var paid_record_title = {
    paid_record_name: "收款记录",
    paid_record_time: "收款时间",
    paid_record_paid: "收款金额（元）"
  }
  var paid_record = get_sale_object_list(paid_record_list, contract_sales_contract_code);
  paid_record.paid_record_output();
  $("#paid_record_content" + contract_sales_contract_code_uuid).find("#paid_record_add_modle").attr("trade_contract_code",contract_sales_contract_code);
  // 清空原始数据
  paid_record.paid_record_clear_raw_data();
  // 服务器数据
  paid_record.paid_record_server_data_cover();
  // 加载数据
  paid_record.paid_record_fill_variable_data();
  
  //提货委托函
  var deliver_entrust_letter = get_sale_object_list(deliver_entrust_letter_list, contract_sales_contract_code);
  deliver_entrust_letter.deliver_entrust_letter_content();
  $("#deliver_entrust_letter_content" + contract_sales_contract_code_uuid).find("#deliver_entrust_letter_add_modal_btn").attr("trade_contract_code",contract_sales_contract_code);
  // 清空原始数据
  deliver_entrust_letter.deliver_entrust_letter_clear_raw_data();
  // 服务器数据
  deliver_entrust_letter.deliver_entrust_letter_server_data_cover();
  // 加载数据
  deliver_entrust_letter.deliver_entrust_letter_fill_variable_data();  
  
  //货物确认函
  var goods_confirm_letter = get_sale_object_list(goods_confirm_letter_list, contract_sales_contract_code);
  goods_confirm_letter.goods_confirm_letter_content();
  $("#goods_confirm_letter_content" + contract_sales_contract_code_uuid).find("#goods_confirm_letter_add_modal_btn").attr("contract_code",contract_sales_contract_code);
  // 清空原始数据
  goods_confirm_letter.goods_confirm_letter_clear_raw_data();
  // 服务器数据
  goods_confirm_letter.goods_confirm_letter_server_data_cover();
  // 加载数据
  goods_confirm_letter.goods_confirm_letter_fill_variable_data();  

  //插入物流合同 ////////////////////////////////////////////////////////
  var contract_logistics = get_sale_object_list(contract_logistics_list, contract_sales_contract_code);
  contract_logistics.contract_logistics_output();
  $("#contract_logistics_content" + contract_sales_contract_code_uuid).find("#contract_logistics_add_modle").attr("trade_contract_code",contract_sales_contract_code);
  $("#contract_logistics_content" + contract_sales_contract_code_uuid).find("#contract_logistics_table_sales_trad_uuid").attr("trade_contract_code",contract_sales_contract_code);
  //清空原始数据
  contract_logistics.contract_logistics_clear_raw_data();
  //服务器数据
  contract_logistics.contract_logistics_server_data_cover();
  //加载数据
  contract_logistics.contract_logistics_fill_variable_data();
  
  
  //车船信息 ///////////////////////////////////////////////////////////
  var vehicle_information = get_sale_object_list(vehicle_information_list, contract_sales_contract_code);
  vehicle_information.vehicle_information_output();
  $("#vehicle_information_content" + contract_sales_contract_code_uuid).find("#vehicle_information_add_modle").attr("contract_code",contract_sales_contract_code);
  $("#vehicle_information_content" + contract_sales_contract_code_uuid).find("#vehicle_information_table_sales_trad_uuid").attr("contract_code",contract_sales_contract_code);
  //清空原始数据
  vehicle_information.vehicle_information_clear_raw_data();
  //服务器数据
  vehicle_information.vehicle_information_server_data_cover_sale();
  //加载数据
  vehicle_information.vehicle_information_fill_variable_data();
  
  
  //销售结算函合同//////////////////////////////////////
  var settlement_bill_sale = get_sale_object_list(settlement_bill_sale_list, contract_sales_contract_code);
  settlement_bill_sale.settlement_bill_sale_output();
  $("#settlement_bill_sale_content" + contract_sales_contract_code_uuid).find("#settlement_bill_sale_add_modle").attr("contract_code",contract_sales_contract_code);
//$("#settlement_bill_sale_content" + contract_sales_contract_code_uuid).find("#settlement_bill_table_sales_trad_uuid").attr("contract_code",contract_sales_contract_code); 
//$("#settlement_bill_sale_content" + contract_sales_contract_code_uuid).find("#settlement_bill_sale_add_modle").attr("contract_code_uuid",contract_sales_contract_code_uuid);
//$("#settlement_bill_sale_content" + contract_sales_contract_code_uuid).find("#settlement_bill_table_sales_trad_uuid").attr("contract_code_uuid",contract_sales_contract_code_uuid); 
  //清空原始数据
  settlement_bill_sale.settlement_bill_sale_clear_raw_data();
  //服务器数据  1.销售合同  2.销售结算函
//settlement_bill_sale_server_data_cover(contract_sales_contract_code, "1", "2");
  settlement_bill_sale.settlement_bill_sale_server_data_cover();
  //加载数据
  settlement_bill_sale.settlement_bill_sale_fill_variable_data();
  
  
  //发票信息///////////////////////////////////////////
  var invoice_information = get_sale_object_list(invoice_information_list, contract_sales_contract_code);
  invoice_information.invoice_information_output();
//invoice_information_output("#invoice_information_content" + contract_sales_contract_code_uuid, contract_sale_all_price, "1");
  $("#invoice_information_content" + contract_sales_contract_code_uuid).find(".invoice_information_add_modle").attr("contract_code",contract_sales_contract_code);
$("#invoice_information_content" + contract_sales_contract_code_uuid).find(".invoice_information_add_modle").attr("invoice_type","1");
//$("#invoice_information_content" + contract_sales_contract_code_uuid).find("#invoice_information_add_modle").attr("contract_logistics_trad_add_url",contract_trad_add_url);
//$("#invoice_information_content" + contract_sales_contract_code_uuid).find("#invoice_information_add_modle").attr("contract_code_uuid",contract_sales_contract_code_uuid);
//$("#invoice_information_content" + contract_sales_contract_code_uuid).find("#invoice_information_add_modle").attr("contract_sale_all_price",contract_sale_all_price);
//$("#invoice_information_content" + contract_sales_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("contract_code_uuid",contract_sales_contract_code_uuid);
//$("#invoice_information_content" + contract_sales_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("contract_sale_all_price",contract_sale_all_price);
$("#invoice_information_content" + contract_sales_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("invoice_type","1");
//$("#invoice_information_content" + contract_sales_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("contract_logistics_trad_edit_url",contract_trad_edit_url);
  //清空原始数据
  invoice_information.invoice_information_clear_raw_data();
  //服务器数据
  invoice_information.invoice_information_server_data_cover();
  //加载数据
  
  invoice_information.invoice_information_fill_variable_data();
  for (var i = 0; i < $(".contract_sale_data_screening_btn").length; i++) {
    //console.log();
    if($(".contract_sale_data_screening_btn").eq(i).prop("checked") == false) {
      var contract_sale_idd = $(".contract_sale_data_screening_btn").eq(i).attr("id");
      $("#contract_sales_box").find("." + contract_sale_idd).addClass("contract_sales_none");
    }
  }
}
