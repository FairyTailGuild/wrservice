function contract_logistics_open_info_func(obj) {
  var contract_logistics_contract_code = obj.attr("contract_code");
  var trade_contract_code = obj.parent().parent().parent().parent().attr("trade_contract_code");
  var contract_logistics_contract_code_uuid = obj.attr("contract_logistics_uuid");
  var settlement_bill_logistics_add_buyer_uuid = obj.attr("buyer_uuid");
  var settlement_bill_logistics_add_seller_uuid = obj.attr("seller_uuid");
  var settlement_bill_logistics_add_product_name = obj.attr("product_name");
  var contract_logistics_trad_add_url = "lego/lego_fjTrade?servletName=addLogisticsInvoiceInformation";
  var contract_logistics_trad_edit_url = "lego/lego_fjTrade?servletName=modifyLogisticsInvoiceInformation"; 
  var contract_logistics_all_panle_html =
  '<tr>'+
    '<td colspan="11">'+
      '<div class="row">'+
        '<div class="col-lg-12">'+
          '<div id = "contract_logistics_content' + contract_logistics_contract_code_uuid + '">'+
          '</div>'+
          '<div id = "invoice_information_content' + contract_logistics_contract_code_uuid + '">'+
          '</div>'+
        '</div>'+
      '</div>'+
    '</td>'+
  '</tr>';
  var contract_logistics_html = contract_logistics_all_panle_html;
  if (obj.hasClass("active")) {
    obj.find(".glyphicon").removeClass("glyphicon-chevron-down");
    obj.removeClass("active");
    obj.parent().parent().nextUntil(".contract_logistics_tr").remove();
    contract_logistics_html = "";
  } else {
    obj.find(".glyphicon").addClass("glyphicon-chevron-down");
    obj.addClass("active");
    obj.parent().parent().after(contract_logistics_html);
  }
  //插入物流对账单合同 ////////////////////////////////////////////////////////
  var settlement_bill_logistics = get_sale_object_list(settlement_bill_logistics_list, contract_logistics_contract_code);
  settlement_bill_logistics.settlement_bill_logistics_output();
  $("#contract_logistics_content" + contract_logistics_contract_code_uuid).find("#settlement_bill_logistics_add_modle").attr("contract_logistics_code",contract_logistics_contract_code);
  //清空原始数据
  settlement_bill_logistics.settlement_bill_logistics_clear_raw_data();
  //服务器数据
  settlement_bill_logistics.settlement_bill_logistics_server_data_cover();
  //加载数据
  settlement_bill_logistics.settlement_bill_logistics_fill_variable_data();
  
  
  
  //发票信息///////////////////////////////////////////////////////////////////////
  var logistics_invoice_information = get_sale_object_list(logistics_invoice_information_list, contract_logistics_contract_code);
  logistics_invoice_information.invoice_information_output();
$("#invoice_information_content" + contract_logistics_contract_code_uuid).find(".panel-heading").html('发票信息<span class = "glyphicon glyphicon-plus pull-right invoice_information_add_modle" ></span>');
$("#invoice_information_content" + contract_logistics_contract_code_uuid).find(".invoice_information_add_modle").attr("contract_code",contract_logistics_contract_code);
$("#invoice_information_content" + contract_logistics_contract_code_uuid).find(".invoice_information_add_modle").attr("invoice_type","0");
$("#invoice_information_content" + contract_logistics_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("contract_code",contract_logistics_contract_code);

$("#invoice_information_content" + contract_logistics_contract_code_uuid).find(".invoice_information_table_sales_trad_uuid").attr("invoice_type","0");
  //清空原始数据
  logistics_invoice_information.invoice_information_clear_raw_data();
  //服务器数据
  logistics_invoice_information.invoice_information_server_data_cover();
  //加载数据  0  入库
  logistics_invoice_information.invoice_information_fill_variable_data();

}