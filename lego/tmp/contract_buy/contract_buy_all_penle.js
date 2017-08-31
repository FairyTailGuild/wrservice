var contract_buy_all_penle_uuid = "";
function contract_buy_open_info_func(obj) {
  var contract_buy_contract_code = obj.attr("contract_code");
  var contract_buy_contract_code_uuid = obj.attr("contract_buy_contract_code_uuid");
  var contract_buy_warehouse_uuid = obj.attr("contract_buy_warehouse_uuid");
  var contract_trad_add_url = "lego/lego_fjTrade?servletName=addTradeInvoiceInformation";
  var contract_trad_edit_url = "lego/lego_fjTrade?servletName=modifyTradeInvoiceInformation";
  //贸易合同合计
  var contract_buy_all_price = obj.attr("contract_buy_all_price");
  
  var contract_buy_all_penle =
  '<tr>'+
    '<td colspan="11">'+
      '<div class="row">'+
        '<div class="col-lg-12">'+
          '<div id = "paid_record_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "contract_logistics_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "vehicle_information_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "deliver_entrust_letter_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "godown_entry_notify_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "goods_confirm_letter_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "settlement_bill_buy_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "invoice_information_content' + contract_buy_contract_code_uuid + '">'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</td>'+
  '</tr>';
  var contract_buy_html = contract_buy_all_penle;
  if (obj.hasClass("active")) {
    obj.find(".glyphicon").removeClass("glyphicon-chevron-down");
    obj.removeClass("active");
    obj.parent().parent().nextUntil(".contract_buy_tr").remove();
    contract_buy_html = "";
  } else {
    obj.find(".glyphicon").addClass("glyphicon-chevron-down");
    obj.addClass("active");
    obj.parent().parent().after(contract_buy_html);
  }
  
  //付款记录
  var paid_record_title = {
    paid_record_name: "付款记录",
    paid_record_time: "付款时间",
    paid_record_paid: "付款金额（元）"
  }
  //paid_record = new PaidRecord(contract_buy_all_price, contract_buy_contract_code, paid_record_title, "#paid_record_content" + contract_buy_contract_code_uuid);
  //paid_record.paid_record_output();
  var paid_record = get_buy_object_list(paid_record_list, contract_buy_contract_code);
  paid_record.paid_record_output();
  $("#paid_record_content" + contract_buy_contract_code_uuid).find("#paid_record_add_modle").attr("trade_contract_code",contract_buy_contract_code);
  // 清空原始数据
  paid_record.paid_record_clear_raw_data();
  // 服务器数据
  paid_record.paid_record_server_data_cover();
  // 加载数据
  paid_record.paid_record_fill_variable_data();
  
  //提货委托函
  var deliver_entrust_letter = get_buy_object_list(deliver_entrust_letter_list, contract_buy_contract_code);
  //deliver_entrust_letter = new deliverEntrustLetter(contract_buy_contract_code, "#deliver_entrust_letter_content" + contract_buy_contract_code_uuid);
  //deliver_entrust_letter.deliver_entrust_letter_content("#deliver_entrust_letter_content" + contract_buy_contract_code_uuid, contract_buy_all_price);
  deliver_entrust_letter.deliver_entrust_letter_content();
  $("#deliver_entrust_letter_content" + contract_buy_contract_code_uuid).find("#deliver_entrust_letter_add_modal_btn").attr("trade_contract_code",contract_buy_contract_code);
  // 清空原始数据
  deliver_entrust_letter.deliver_entrust_letter_clear_raw_data();
  // 服务器数据
  deliver_entrust_letter.deliver_entrust_letter_server_data_cover();
  // 加载数据
  deliver_entrust_letter.deliver_entrust_letter_fill_variable_data();  
  
  //入库通知单
  var godown_entry_notify = get_buy_object_list(godown_entry_notify_list, contract_buy_contract_code);
  godown_entry_notify.godown_entry_notify_content();
  $("#godown_entry_notify_content" + contract_buy_contract_code_uuid).find("#godown_entry_notify_add_modal_btn").attr("contract_code",contract_buy_contract_code);
  // 清空原始数据
  godown_entry_notify.godown_entry_notify_clear_raw_data();
  // 获取储罐
  godown_entry_notify.godown_entry_notify_get_warehouse_pot();
  // 服务器数据
  godown_entry_notify.godown_entry_notify_server_data_cover();
  // 加载数据
  godown_entry_notify.godown_entry_notify_fill_variable_data();
  
  //货物确认函
  var goods_confirm_letter = get_buy_object_list(goods_confirm_letter_list, contract_buy_contract_code);
  goods_confirm_letter.goods_confirm_letter_content();
  $("#goods_confirm_letter_content" + contract_buy_contract_code_uuid).find("#goods_confirm_letter_add_modal_btn").attr("contract_code",contract_buy_contract_code);
  //goods_confirm_letter_content("#goods_confirm_letter_content" + contract_buy_contract_code_uuid, contract_buy_all_price);
  //$("#goods_confirm_letter_content" + contract_buy_contract_code_uuid).find("#goods_confirm_letter_add_modal_btn").attr("contract_code",contract_buy_contract_code);
  //$("#goods_confirm_letter_content" + contract_buy_contract_code_uuid).find("#goods_confirm_letter_add_modal_btn").attr("contract_uuid",contract_buy_contract_code_uuid);
  // 清空原始数据
  goods_confirm_letter.goods_confirm_letter_clear_raw_data();
  // 服务器数据
  goods_confirm_letter.goods_confirm_letter_server_data_cover();
  // 加载数据
  goods_confirm_letter.goods_confirm_letter_fill_variable_data();  

  //插入物流合同 ////////////////////////////////////////////////////////

 var contract_logistics = get_buy_object_list(contract_logistics_list, contract_buy_contract_code);
  contract_logistics.contract_logistics_output();
  $("#contract_logistics_content" + contract_buy_contract_code_uuid).find("#contract_logistics_add_modle").attr("trade_contract_code",contract_buy_contract_code);
  $("#contract_logistics_content" + contract_buy_contract_code_uuid).find("#contract_logistics_table_sales_trad_uuid").attr("trade_contract_code",contract_buy_contract_code);
  //清空原始数据
  contract_logistics.contract_logistics_clear_raw_data();
  //服务器数据
  contract_logistics.contract_logistics_server_data_cover();
  //加载数据
  contract_logistics.contract_logistics_fill_variable_data();
  
  
  //车船信息 ///////////////////////////////////////////////////////////
  var vehicle_information = get_buy_object_list(vehicle_information_list, contract_buy_contract_code);
  vehicle_information.vehicle_information_output();
  $("#vehicle_information_content" + contract_buy_contract_code_uuid).find("#vehicle_information_add_modle").attr("contract_code",contract_buy_contract_code);
  $("#vehicle_information_content" + contract_buy_contract_code_uuid).find("#vehicle_information_table_sales_trad_uuid").attr("contract_code",contract_buy_contract_code);
  //清空原始数据
  vehicle_information.vehicle_information_clear_raw_data();
  //服务器数据
  vehicle_information.vehicle_information_server_data_cover();
  //加载数据
  vehicle_information.vehicle_information_fill_variable_data();
  
  
  //采购对账单//////////////////////////////////////
  var settlement_bill_buy = get_buy_object_list(settlement_bill_buy_list, contract_buy_contract_code);
  settlement_bill_buy.settlement_bill_buy_output();
  $("#settlement_bill_buy_content" + contract_buy_contract_code_uuid).find("#settlement_bill_buy_add_modle").attr("contract_code",contract_buy_contract_code);
  //清空原始数据
  settlement_bill_buy.settlement_bill_buy_clear_raw_data();
  //服务器数据  0.采购合同  1.采购对账单
  settlement_bill_buy.settlement_bill_buy_server_data_cover();
  //加载数据
  settlement_bill_buy.settlement_bill_buy_fill_variable_data();
  
  
  //发票信息///////////////////////////////////////////
  var invoice_information = get_buy_object_list(invoice_information_list, contract_buy_contract_code);
  invoice_information.invoice_information_output();
  $("#invoice_information_content" + contract_buy_contract_code_uuid).find(".invoice_information_add_modle").attr("contract_code",contract_buy_contract_code);
$("#invoice_information_content" + contract_buy_contract_code_uuid).find(".invoice_information_add_modle").attr("invoice_type","1");
$("#invoice_information_content" + contract_buy_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("invoice_type","1");
  //清空原始数据
  invoice_information.invoice_information_clear_raw_data();
  //服务器数据
  invoice_information.invoice_information_server_data_cover();
  //加载数据
  invoice_information.invoice_information_fill_variable_data();
  

  for (var i = 0; i < $(".contract_buy_data_screening_btn").length; i++) {
    if($(".contract_buy_data_screening_btn").eq(i).prop("checked") == false) {
      var contract_buy_idd = $(".contract_buy_data_screening_btn").eq(i).attr("id");
      $("#contract_buy_box").find("." + contract_buy_idd).addClass("contract_buy_none");
    }
  }
 
  

}