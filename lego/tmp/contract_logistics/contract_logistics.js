/**
 * @author wangdi
 */
function add_sale_object_list(list, contract_code, object) {
  if (null == get_buy_object_list(list, contract_code)) {
    list.push({"contract_code": contract_code, "object": object});
  }
}

function get_sale_object_list(list, contract_code) {
  for (var i = 0; i < list.length; i++) {
    if (contract_code == list[i].contract_code) {
      return list[i]["object"];
    }
  }
  return null;
}

function ContractLogistics(sale_contract_code, contract_logistics_content_box) {
  this.contract_logistics_content_box = contract_logistics_content_box;
  this.sale_contract_code = sale_contract_code;
  /**
   * 附件
   */
  this.contract_logistics_file_data = [
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
   * 企业数据
   */
  this.contract_logistics_enterprise_data = {"data":[
      {"short_name":"腾智联合", "uuid":"00000000000000000000000000000001"},
      {"short_name":"腾智联", "uuid":"00000000000000000000000000000002"},
      {"short_name":"腾智", "uuid":"00000000000000000000000000000003"},
      {"short_name":"腾智联合有限公司", "uuid":"00000000000000000000000000000004"}
    ]
  };
  
  /**
   * 物流合同数据
   * trade_contract_code:贸易合同编号
   * contract_code:物流合同
   * logistics_uuid:物流方
   * employer_uuid:雇主企业
   * carrier_type:载体类型
   * product_name:产品名称
   * load_place:装货地
   * unload_place:卸货地
   * contract_ullage:合同损耗
   * freight:运费
   * quantity:运量
   */
  this.contract_logistics_data = {"data":[
      {"trade_contract_code":"fj-xy-170604", "contract_code":"fj-xy-111111", "employer_uuid":"00000000000000000000000000000004", "logistics_uuid":"00000000000000000000000000000001", "carrier_type":"1", "product_name":"富纪有限公司", "load_place":"德国法国", "unload_place":"高合金钢", "contract_ullage":"0.1", "freight":"200", "quantity":"100", "uuid":"11111111111111111111111111111111"},
      {"trade_contract_code":"fj-xy-170604", "contract_code":"fj-xy-111111", "employer_uuid":"00000000000000000000000000000001", "logistics_uuid":"00000000000000000000000000000003", "carrier_type":"2", "product_name":"富纪有限公司", "load_place":"退换货比v", "unload_place":"阿斯顿发放", "contract_ullage":"0.2", "freight":"200", "quantity":"100", "uuid":"11111111111111111111111111111112"},
      {"trade_contract_code":"fj-xy-170604", "contract_code":"fj-xy-111111", "employer_uuid":"00000000000000000000000000000002", "logistics_uuid":"00000000000000000000000000000001", "carrier_type":"3", "product_name":"富纪有限公司", "load_place":"会根据", "unload_place":"多个梵蒂冈", "contract_ullage":"0.3", "freight":"200", "quantity":"100", "uuid":"11111111111111111111111111111113"},
      {"trade_contract_code":"fj-xy-170604", "contract_code":"fj-xy-111111", "employer_uuid":"00000000000000000000000000000004", "logistics_uuid":"00000000000000000000000000000003", "carrier_type":"2", "product_name":"富纪有限公司", "load_place":"空间哦i", "unload_place":"发光飞碟", "contract_ullage":"0.4", "freight":"200", "quantity":"100", "uuid":"11111111111111111111111111111114"},
      {"trade_contract_code":"fj-xy-170604", "contract_code":"fj-xy-111111", "employer_uuid":"00000000000000000000000000000002", "logistics_uuid":"00000000000000000000000000000004", "carrier_type":"1", "product_name":"富纪有限公司", "load_place":"身份而非", "unload_place":"双方都", "contract_ullage":"0.5", "freight":"200", "quantity":"100", "uuid":"11111111111111111111111111111115"}
    ]
  };
  
  //载体类型
  this.contract_logistics_type_arr = ["轮船 ","汽车 ","火车"];
  
  this.contract_logistics_clear_raw_data = function() {
    $(this.contract_logistics_content_box).find(".contract_logistics_box").html('<tr><td colspan="11" align="center">没数据</td></tr>');
  };
  
  /**
   * 服务器数据
   */
  
  this.contract_logistics_server_data_cover = function() {
    //获取物流合同
    var server_data = {
      "trade_contract_code":this.sale_contract_code
    };
    var contract_logistics_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractLogistics";
    var contract_logistics_get_contract = ajax_assistant(contract_logistics_url, server_data, false, true, false);
    //获取企业信息
    var contract_logistics_enterprise_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
    var contract_logistics_enterprise_get_contract = ajax_assistant(contract_logistics_enterprise_url, "", false, true, false);
    this.contract_logistics_data = {};
    if (1 == contract_logistics_get_contract.status) {
      if (0 == contract_logistics_get_contract.count) {
        this.contract_logistics_data = {};
      } else {
        var tmp_arr = new Array();
        var contract_logistics_result = JSON.parse(contract_logistics_get_contract.result);  
        console.log(contract_logistics_result);
        for (var i = 0; i < contract_logistics_result.length; i++) {
          tmp_arr[i] = {"trade_contract_code":this.sale_contract_code, "contract_code":contract_logistics_result[i].contract_code, "employer_uuid":contract_logistics_result[i].employer_uuid, "logistics_uuid":contract_logistics_result[i].logistics_uuid, "carrier_type":contract_logistics_result[i].carrier_type, "product_name":contract_logistics_result[i].product_name, "load_place":contract_logistics_result[i].load_place, "unload_place":contract_logistics_result[i].unload_place, "contract_ullage":contract_logistics_result[i].contract_ullage, "freight":contract_logistics_result[i].freight, "quantity":contract_logistics_result[i].quantity, "uuid":contract_logistics_result[i].uuid};
          //物流对账单
          add_sale_object_list(settlement_bill_logistics_list, contract_logistics_result[i].contract_code, new SettlementBillLogistics(this.sale_contract_code, contract_logistics_result[i].contract_code, "#contract_logistics_content" + contract_logistics_result[i].uuid, contract_logistics_result[i].employer_uuid, contract_logistics_result[i].logistics_uuid, contract_logistics_result[i].product_name, "lego/lego_fjTrade?servletName=addLogisticsInvoiceInformation", "lego/lego_fjTrade?servletName=modifyLogisticsInvoiceInformation"));
          
          //发票信息
          add_sale_object_list(logistics_invoice_information_list, contract_logistics_result[i].contract_code, new InvoiceInformation(contract_logistics_result[i].contract_code,"#invoice_information_content" + contract_logistics_result[i].uuid, contract_logistics_result[i].price * contract_logistics_result[i].quantity, "0", "lego/lego_fjTrade?servletName=addLogisticsInvoiceInformation", "lego/lego_fjTrade?servletName=modifyLogisticsInvoiceInformation"));
           
        }
        this.contract_logistics_data["data"] = tmp_arr;
      }
    } else {
      alert("物流合同数据获取失败");
    }
    //企业
    this.contract_logistics_enterprise_data = {};
    if (1 == contract_logistics_enterprise_get_contract.status) {
      if (0 == contract_logistics_enterprise_get_contract.count) {
        this.contract_logistics_enterprise_data = {};
      } else {
        var tmp_enterprise_arr = new Array();
        var contract_logistics_enterprise_result = JSON.parse(contract_logistics_enterprise_get_contract.result);
        for (var i = 0; i < contract_logistics_enterprise_result.length; i++) {
          tmp_enterprise_arr[i] = {"short_name":contract_logistics_enterprise_result[i].short_name, "uuid":contract_logistics_enterprise_result[i].uuid};
        }
        this.contract_logistics_enterprise_data["data"] = tmp_enterprise_arr;
      }
    } else {
      alert("企业信息数据获取失败");
    }
  };
  
  this.contract_logistics_fill_variable_data = function() {
    if(isJsonObjectHasData(this.contract_logistics_data)) {
      var contract_logistics_html = "";
      for (var i = 0; i < this.contract_logistics_data.data.length; i++) {
        var employer_uuid = "";
        var logistics_uuid = "";
        if (isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
          for (var j = 0; j < this.contract_logistics_enterprise_data.data.length; j++) {
            //雇佣
            if(this.contract_logistics_enterprise_data.data[j].uuid == this.contract_logistics_data.data[i].employer_uuid) {
              employer_uuid = this.contract_logistics_enterprise_data.data[j].short_name;
            }
            //物流
            if(this.contract_logistics_enterprise_data.data[j].uuid == this.contract_logistics_data.data[i].logistics_uuid){
              logistics_uuid = this.contract_logistics_enterprise_data.data[j].short_name;
            }
          }
        }
        contract_logistics_html +=
          '<tr class = "contract_logistics_tr">'+
            '<td><button type = "button" class = "btn btn-info btn-xs contract_logistics_open_btn" contract_code = "' + this.contract_logistics_data.data[i].contract_code + '" contract_logistics_uuid = "' + this.contract_logistics_data.data[i].uuid + '" buyer_uuid = "' + this.contract_logistics_data.data[i].employer_uuid + '" seller_uuid = "' + this.contract_logistics_data.data[i].logistics_uuid + '" product_name = "' + this.contract_logistics_data.data[i].product_name + '"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
            '<td>' + employer_uuid + '</td>'+
            '<td>' + logistics_uuid + '</td>'+
            '<td>' + this.contract_logistics_type_arr[this.contract_logistics_data.data[i].carrier_type-1] + '</td>'+
            '<td>' + this.contract_logistics_data.data[i].product_name + '</td>'+
            '<td>' + this.contract_logistics_data.data[i].load_place + '</td>'+
            '<td>' + this.contract_logistics_data.data[i].unload_place + '</td>'+
            '<td>' + this.contract_logistics_data.data[i].contract_ullage + '</td>'+
            '<td>' + this.contract_logistics_data.data[i].freight + '</td>'+
            '<td>' + this.contract_logistics_data.data[i].quantity + '</td>'+
            '<td>'+
              '<span class = "glyphicon glyphicon-info-sign contract_logistics_ml15 contract_logistics_modle_info" uuid = "' + this.contract_logistics_data.data[i].uuid + '" trade_contract_code = "' + this.contract_logistics_data.data[i].trade_contract_code + '" contract_code = "' + this.contract_logistics_data.data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-pencil contract_logistics_ml15 contract_logistics_modle_pencil" uuid = "' + this.contract_logistics_data.data[i].uuid + '" trade_contract_code = "' + this.contract_logistics_data.data[i].trade_contract_code + '" contract_code = "' + this.contract_logistics_data.data[i].contract_code + '"></span>'+
              '<span class = "glyphicon glyphicon-remove contract_logistics_ml15 contract_logistics_modle_remove" uuid = "' + this.contract_logistics_data.data[i].uuid + '" trade_contract_code = "' + this.contract_logistics_data.data[i].trade_contract_code + '" contract_code = "' + this.contract_logistics_data.data[i].contract_code + '"></span>'+
            '</td>'+
          '</tr>';
      }
      $(this.contract_logistics_content_box).find(".contract_logistics_box").html(contract_logistics_html);
    } else {
      $(this.contract_logistics_content_box).find(".contract_logistics_box").html('<tr><td colspan="11" align="center">没数据</td></tr>');
    }
  };
  
  this.contract_logistics_add_modle_func = function (obj) {
    var trade_contract_code = obj.attr("trade_contract_code");
    var contract_logistics_html = 
        '<div class = "modal fade custom_modal" tabindex = "-1" id = "contract_logistics_add_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog modal-lg" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">添加物流合同</h4>'+
              '</div>'+
              '<div class = "modal-body nopadding-bottom">'+
               '<div class = "row">'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">贸易合同编号</label>'+
                      '<input type = "text" class = "form-control" disabled = "disabled" value = "' + trade_contract_code + '">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">使用企业</label>'+
                      '<select class = "form-control contract_logistics_employer_uuid" value = "">'+
                        '<option value = "">--请选择--</option>';
                        if(isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
                          for (var i = 0; i < this.contract_logistics_enterprise_data.data.length; i++) {
                            contract_logistics_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>'; 
                          }
                        }
                        contract_logistics_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">物流企业</label>'+
                      '<select class = "form-control contract_logistics_logistics_uuid" value = "">'+
                        '<option value = "">--请选择--</option>';
                        if(isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
                          for (var i = 0; i < this.contract_logistics_enterprise_data.data.length; i++) {
                            contract_logistics_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>'; 
                          }
                        }
                        contract_logistics_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">物流载体类型</label>'+
                      '<select class = "form-control contract_logistics_carrier_type" value = "">'+
                        '<option value = "" >--请选择--</option>'+
                        '<option value = "1" >轮船</option>'+
                        '<option value = "2" >汽车</option>'+
                        '<option value = "3" >火车</option>'+
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">货品</label>'+
                      '<input type = "text" class = "form-control contract_logistics_product_name" value = ""/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货地点</label>'+
                      '<input type = "text" class = "form-control contract_logistics_load_place" value = ""/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货地点</label>'+
                      '<input type = "text" class = "form-control contract_logistics_unload_place" value = ""/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>签署时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_sign_datetime" value = "">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>物流开始时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_start_datetime" value = "">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>物流结束时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_end_datetime" value = "">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">合同损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_contract_ullage" value = ""/>'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label>运费</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_freight" value = "">'+
                        '<span class = "input-group-addon">元/吨</span>'+
                      '</div>'+
                    '</div>'+
                 ' </div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label>运量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_quantity" value = "" >'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-8">'+
                    '<div class = "form-group">'+
                      '<label for = "">备注</label>'+
                      '<input type = "text" class = "form-control contract_logistics_remark" value = ""/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">物流合同附件</label>'+
                    '<div class="panel panel-default clearfix" id = "contract_logistics_add_modle_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                  '<button type = "button" class = "btn btn-primary" id = "contract_logistics_add_data_btn" trade_contract_code = "' + trade_contract_code + '">添加</button>'+
                  '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(contract_logistics_html);
    upload_attachment_edit_output("#contract_logistics_add_modle_attch");
    $("#contract_logistics_add_modle_prop").modal("show");
    $("#contract_logistics_add_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.contract_logistics_add_data_func = function (obj) {
    //物流企业的
    var contract_logistics_logistics_uuid = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_logistics_uuid").val();
    //雇主企业的
    var contract_logistics_employer_uuid = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_employer_uuid").val();
    //载体类型
    var contract_logistics_carrier_type = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_carrier_type").val();
    //产品名称
    var contract_logistics_product_name = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_product_name").val();
    //装货地
    var contract_logistics_load_place = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_load_place").val();
    //卸货地
    var contract_logistics_unload_place = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_unload_place").val();
    //开始时间
    var contract_logistics_start_datetime = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_start_datetime").val();
    if(0 < contract_logistics_start_datetime.length) {
      contract_logistics_start_datetime += ' 00:00:00';
    }
    //结束时间
    var contract_logistics_end_datetime = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_end_datetime").val();
    if (0 < contract_logistics_end_datetime.length) {
      contract_logistics_end_datetime += ' 00:00:00';
    }
    //运费
    var contract_logistics_freight = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_freight").val();
    //运量
    var contract_logistics_quantity = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_quantity").val();
    //合同损耗
    var contract_logistics_contract_ullage = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_contract_ullage").val();
    //签订时间
    var contract_logistics_sign_datetime = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_sign_datetime").val();
    if (0 < contract_logistics_sign_datetime.length) {
      contract_logistics_sign_datetime += ' 00:00:00';
    }
    //备注
    var contract_logistics_remark = obj.parents("#contract_logistics_add_modle_prop").find(".contract_logistics_remark").val();
    //附件
    var contract_logistics_list = $("#contract_logistics_add_modle_attch ul").children("li");
    var contract_logistics_cluster_list = "";
    for (var i = 0; i < contract_logistics_list.length; i++) {
      var contract_logistics_dom = contract_logistics_list[i];
      var cluster = $(contract_logistics_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       contract_logistics_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == contract_logistics_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
      alert("请添加物流合同附件！");
      return;
    }
    if (null == contract_logistics_logistics_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
      alert("请选择物流企业！");
      return;
    }
    if (null == contract_logistics_employer_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
      alert("请选择使用企业！");
      return;
    }
    if (null == contract_logistics_carrier_type.match(/^[123]$/)) {
      alert("请选择载体类型！");
      return;
    }
    if (null == contract_logistics_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的产品名称！");
      return;
    }
    if (null == contract_logistics_load_place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的装货地！");
      return;
    }
    if (null == contract_logistics_unload_place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的卸货地！");
      return;
    }
    if (null == contract_logistics_start_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择开始时间！");
      return;
    }
    if (null == contract_logistics_end_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择结束时间！");
      return;
    }
    if (null == contract_logistics_sign_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择签署时间！");
      return;
    }
    if (null == contract_logistics_contract_ullage.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的合同损耗！");
      return;
    }
    if (null == contract_logistics_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的运量！");
      return;
    }
    if (null == contract_logistics_freight.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的运费！");
      return;
    }
    var data = {
      "cluster_list":contract_logistics_cluster_list,
      "trade_contract_code":this.sale_contract_code,
      "logistics_uuid":contract_logistics_logistics_uuid,
      "employer_uuid":contract_logistics_employer_uuid,
      "carrier_type":contract_logistics_carrier_type,
      "product_name":contract_logistics_product_name,
      "load_place":contract_logistics_load_place,
      "unload_place":contract_logistics_unload_place,
      "start_datetime":contract_logistics_start_datetime,
      "end_datetime":contract_logistics_end_datetime,
      "freight":contract_logistics_freight,
      "quantity":contract_logistics_quantity,
      "contract_ullage":contract_logistics_contract_ullage,
      "sign_datetime":contract_logistics_sign_datetime
    };
    if ("" != contract_logistics_remark.length) {
      if (null == contract_logistics_remark.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,128}$/)) {
        alert("请输入正确的备注！");
        return;
      };
      data["remark"] = contract_logistics_remark;
    };
    console.log(contract_logistics_remark);
    //调用接口
    var contract_logistics_add_url_s = PROJECT_PATH + "lego/lego_fjTrade?servletName=addContractLogistics";
    var contract_logistics_add_get = ajax_assistant(contract_logistics_add_url_s, data, false, true, false);
    if ("1" == contract_logistics_add_get.status) {
      this.contract_logistics_clear_raw_data();
      this.contract_logistics_server_data_cover();
      this.contract_logistics_fill_variable_data(); 
      $("#contract_logistics_add_modle_prop").modal("hide");
      $("#contract_logistics_add_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("添加物流合同失败");
    }
  };
  
  this.contract_logistics_edit_modle_func = function(obj) {
    var trade_contract_code = obj.parent().parent().parent().parent().attr("trade_contract_code");
    var contract_code = obj.attr("contract_code");
    var uuid = obj.attr("uuid");
    //物流企业的
    var contract_logistics_logistics_uuid = "";
    //雇主企业的
    var contract_logistics_employer_uuid = "";
    //载体类型
    var contract_logistics_carrier_type = "";
    //产品名称
    var contract_logistics_product_name = "";
    //装货地
    var contract_logistics_load_place = "";
    //卸货地
    var contract_logistics_unload_place = "";
    //开始时间
    var contract_logistics_start_datetime = "";
    //结束时间
    var contract_logistics_end_datetime = "";
    //运费
    var contract_logistics_freight = "";
    //运量
    var contract_logistics_quantity = "";
    //合同损耗
    var contract_logistics_contract_ullage = "";
    //签订时间
    var contract_logistics_sign_datetime = "";
    //备注
    var contract_logistics_remark = "";
    //附件
    var contract_logistics_cluster_list = "";
    var contract_logistics_edit_data = {
      "uuid":uuid,
      "trade_contract_code":this.sale_contract_code,
      "contract_code":contract_code
    };
    //调接口  查询数据
    var contract_logistics_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractLogistics";
    var contract_logistics_edit_get_warehouse = ajax_assistant(contract_logistics_edit_url, contract_logistics_edit_data, false, true, false);
    if ("1" == contract_logistics_edit_get_warehouse.status) {
      var contract_logistics_edit_data_d = JSON.parse(contract_logistics_edit_get_warehouse.result);
      console.log(contract_logistics_edit_data_d);
      if (0 < contract_logistics_edit_data_d.length) {
        contract_logistics_logistics_uuid = contract_logistics_edit_data_d[0].logistics_uuid;
        contract_logistics_employer_uuid = contract_logistics_edit_data_d[0].employer_uuid;
        contract_logistics_carrier_type = contract_logistics_edit_data_d[0].carrier_type;
        contract_logistics_product_name = contract_logistics_edit_data_d[0].product_name;
        contract_logistics_load_place = contract_logistics_edit_data_d[0].load_place;
        contract_logistics_unload_place = contract_logistics_edit_data_d[0].unload_place;
        contract_logistics_start_datetime = contract_logistics_edit_data_d[0].start_datetime;
        contract_logistics_start_datetime = contract_logistics_start_datetime.substring(0, contract_logistics_start_datetime.indexOf(' '));
        contract_logistics_end_datetime = contract_logistics_edit_data_d[0].end_datetime;
        contract_logistics_end_datetime = contract_logistics_end_datetime.substring(0, contract_logistics_end_datetime.indexOf(' '));
        contract_logistics_freight = contract_logistics_edit_data_d[0].freight;
        contract_logistics_quantity = contract_logistics_edit_data_d[0].quantity;
        contract_logistics_contract_ullage = contract_logistics_edit_data_d[0].contract_ullage;
        contract_logistics_sign_datetime = contract_logistics_edit_data_d[0].sign_datetime;
        contract_logistics_sign_datetime = contract_logistics_sign_datetime.substring(0, contract_logistics_sign_datetime.indexOf(' '));
        if (null != contract_logistics_edit_data_d[0].remark) {
          contract_logistics_remark = contract_logistics_edit_data_d[0].remark;
        };
        if (null != contract_logistics_edit_data_d[0].normal_cluster_list) {
          contract_logistics_cluster_list = contract_logistics_edit_data_d[0].normal_cluster_list;
        };
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    //附件
    if (0 < contract_logistics_cluster_list.length) {
      var contract_logistics_file_arr = new Array();
      contract_logistics_cluster_list = contract_logistics_cluster_list.substring(0, contract_logistics_cluster_list.length - 1).split(';');
      console.log(contract_logistics_cluster_list)
      for(var i = 0; i < contract_logistics_cluster_list.length; i++) {
        var cluster_name_data = {
          "cluster_name":contract_logistics_cluster_list[i]
        };
        var contract_logistics_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var contract_logistics_json = JSON.parse(contract_logistics_file_name.result);
        console.log(contract_logistics_json)
        if(0 != contract_logistics_file_name.count) {
          contract_logistics_file_arr[i] = {"file_name":contract_logistics_json[0].cluster_name+'.'+contract_logistics_json[0].suffix};
        }
      }
      this.contract_logistics_file_data = contract_logistics_file_arr;
      console.log(this.contract_logistics_file_data);
    } else {
      this.contract_logistics_file_data = [];
    }
    var contract_logistics_edit_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "contract_logistics_edit_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog modal-lg" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">修改物流合同</h4>'+
              '</div>'+
              '<div class = "modal-body nopadding-bottom">'+
               '<div class = "row">'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">贸易合同编号</label>'+
                      '<input type = "text" class = "form-control" disabled = "disabled" value = "' + trade_contract_code + '">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">使用企业</label>'+
                      '<select class = "form-control contract_logistics_employer_uuid" disabled = "disabled" value = "' + contract_logistics_employer_uuid + '">'+
                        '<option value = "">--请选择--</option>';
                        if(isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
                          for (var i = 0; i < this.contract_logistics_enterprise_data.data.length; i++) {
                            if(contract_logistics_employer_uuid == this.contract_logistics_enterprise_data.data[i].uuid) {
                              contract_logistics_edit_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '" selected = "selected">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>';
                            } else {
                              contract_logistics_edit_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>';
                            }
                          }
                        }
                        contract_logistics_edit_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">物流企业</label>'+
                      '<select class = "form-control contract_logistics_logistics_uuid" disabled = "disabled" value = "' + contract_logistics_logistics_uuid + '">'+
                        '<option value = "">--请选择--</option>';
                        if(isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
                          for (var i = 0; i < this.contract_logistics_enterprise_data.data.length; i++) {
                            if(contract_logistics_logistics_uuid == this.contract_logistics_enterprise_data.data[i].uuid) {
                              contract_logistics_edit_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '" selected = "selected">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>';
                            } else {
                              contract_logistics_edit_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>';
                            }
                          }
                        }
                        contract_logistics_edit_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">物流载体类型</label>'+
                      '<select class = "form-control contract_logistics_carrier_type" value = "' + contract_logistics_carrier_type + '">';
                        if(contract_logistics_carrier_type == 1) {
                          contract_logistics_edit_html += 
                            '<option value="1" selected="selected">轮船</option>'+
                            '<option value="2" >汽车</option>'+
                            '<option value="3" >火车</option>';
                        } else if(contract_logistics_carrier_type == 2) {
                          contract_logistics_edit_html += 
                            '<option value="2" selected="selected">汽车</option>'+
                            '<option value="1" >轮船</option>'+
                            '<option value="3" >火车</option>';
                        } else if(contract_logistics_carrier_type == 3) {
                          contract_logistics_edit_html += 
                            '<option value="3" selected="selected">火车</option>'+
                            '<option value="1" >轮船</option>'+
                             '<option value="2" >汽车</option>';
                        }
                        contract_logistics_edit_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">货品</label>'+
                      '<input type = "text" class = "form-control contract_logistics_product_name" value = "' + contract_logistics_product_name + '"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货地点</label>'+
                      '<input type = "text" class = "form-control contract_logistics_load_place" value = "' + contract_logistics_load_place + '"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货地点</label>'+
                      '<input type = "text" class = "form-control contract_logistics_unload_place" value = "' + contract_logistics_unload_place + '"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>签署时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_sign_datetime" value = "' + contract_logistics_sign_datetime + '">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>物流开始时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_start_datetime" value = "' + contract_logistics_start_datetime + '">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>物流结束时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_end_datetime" value = "' + contract_logistics_end_datetime + '">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">合同损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_contract_ullage" value = "' + contract_logistics_contract_ullage + '"/>'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label>运费</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_freight" value = "' + contract_logistics_freight + '">'+
                        '<span class = "input-group-addon">元/吨</span>'+
                      '</div>'+
                    '</div>'+
                 ' </div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label>运量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_quantity" value = "' + contract_logistics_quantity + '" >'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-8">'+
                    '<div class = "form-group">'+
                      '<label for = "">备注</label>'+
                      '<input type = "text" class = "form-control contract_logistics_remark" value = "' + contract_logistics_remark + '"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">物流合同附件</label>'+
                    '<div class="panel panel-default clearfix" id = "contract_logistics_edit_attch">'+
                    '</div>'+
                  '</div>'+
                '</div>'+
              '</div>'+
              '<div class = "modal-footer" style = "text-align: center;">'+
                  '<button type = "button" class = "btn btn-warning" id = "contract_logistics_edit_data_btn" uuid = "' + uuid + '" trade_contract_code = "' + trade_contract_code + '">修改</button>'+
                  '<button type = "button" class = "btn btn-default" data-dismiss = "modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
        '</div>';
    $("body").append(contract_logistics_edit_html);
    upload_attachment_edit_output("#contract_logistics_edit_attch", this.contract_logistics_file_data);
    $("#contract_logistics_edit_modle_prop").modal("show");
    $("#contract_logistics_edit_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.contract_logistics_edit_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var contract_code = obj.attr("contract_code");
    //物流企业的
    var contract_logistics_logistics_uuid = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_logistics_uuid").val();
    //雇主企业的
    var contract_logistics_employer_uuid = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_employer_uuid").val();
    //载体类型
    var contract_logistics_carrier_type = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_carrier_type").val();
    //产品名称
    var contract_logistics_product_name = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_product_name").val();
    //装货地
    var contract_logistics_load_place = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_load_place").val();
    //卸货地
    var contract_logistics_unload_place = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_unload_place").val();
    //开始时间
    var contract_logistics_start_datetime = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_start_datetime").val();
    if(0 < contract_logistics_start_datetime.length) {
      contract_logistics_start_datetime += ' 00:00:00';
    }
    //结束时间
    var contract_logistics_end_datetime = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_end_datetime").val();
    if(0 < contract_logistics_end_datetime.length) {
      contract_logistics_end_datetime += ' 00:00:00';
    }
    //运费
    var contract_logistics_freight = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_freight").val();
    //运量
    var contract_logistics_quantity = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_quantity").val();
    //合同损耗
    var contract_logistics_contract_ullage = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_contract_ullage").val();
    //签订时间
    var contract_logistics_sign_datetime = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_sign_datetime").val();
    if (0 < contract_logistics_sign_datetime.length) {
      contract_logistics_sign_datetime += ' 00:00:00';
    }
    //备注
    var contract_logistics_remark = obj.parents("#contract_logistics_edit_modle_prop").find(".contract_logistics_remark").val();
    //附件
    var contract_logistics_list = $("#contract_logistics_edit_attch ul").children("li");
    var contract_logistics_cluster_list = "";
    for (var i = 0; i < contract_logistics_list.length; i++) {
      var contract_logistics_dom = contract_logistics_list[i];
      var cluster = $(contract_logistics_dom).find("a").attr("data-cluster");
      if (undefined != cluster) {
       contract_logistics_cluster_list += cluster + ";"; 
      }    
    }
    //验证
    if (null == contract_logistics_logistics_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
      alert("请选择物流企业！");
      return;
    }
    if (null == contract_logistics_employer_uuid.match(/^[0-9a-zA-Z]{32}$/)) {
      alert("请选择使用企业！");
      return;
    }
    if (null == contract_logistics_carrier_type.match(/^[123]$/)) {
      alert("请选择载体类型！");
      return;
    }
    if (null == contract_logistics_product_name.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的产品名称！");
      return;
    }
    if (null == contract_logistics_load_place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的装货地！");
      return;
    }
    if (null == contract_logistics_unload_place.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,32}$/)) {
      alert("请输入正确的卸货地！");
      return;
    }
    if (null == contract_logistics_start_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择开始时间！");
      return;
    }
    if (null == contract_logistics_end_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择结束时间！");
      return;
    }
    if (null == contract_logistics_sign_datetime.match(/^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)\s+([01][0-9]|2[0-3]):[0-5][0-9]:[0-5][0-9]$/)) {
      alert("请选择签署时间！");
      return;
    }
    if (null == contract_logistics_contract_ullage.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的合同损耗！");
      return;
    }
    if (null == contract_logistics_quantity.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的运量！");
      return;
    }
    if (null == contract_logistics_freight.match(/^[0-9]+\.{0,1}[0-9]{0,4}$/)) {
      alert("请输入正确的运费！");
      return;
    }
    var data = {
      "idColumnValue":uuid,
      "trade_contract_code":this.sale_contract_code,
      "logistics_uuid":contract_logistics_logistics_uuid,
      "employer_uuid":contract_logistics_employer_uuid,
      "carrier_type":contract_logistics_carrier_type,
      "product_name":contract_logistics_product_name,
      "load_place":contract_logistics_load_place,
      "unload_place":contract_logistics_unload_place,
      "start_datetime":contract_logistics_start_datetime,
      "end_datetime":contract_logistics_end_datetime,
      "freight":contract_logistics_freight,
      "quantity":contract_logistics_quantity,
      "contract_ullage":contract_logistics_contract_ullage,
      "sign_datetime":contract_logistics_sign_datetime
    };
    if (0 < contract_logistics_cluster_list.length) {
      if(null == contract_logistics_cluster_list.match(/^([0-9a-zA-Z]{32};)+$/)) {
        alert("请添加物流合同附件！");
        return;
      }
      data["normal_newClusterList"] = contract_logistics_cluster_list;
    }
    if (0 < contract_logistics_remark.length) {
      if(null == contract_logistics_remark.match(/^[\u4e00-\u9fffa0-9a-zA-Z]{2,128}$/)) {
        alert("请输入正确的备注！");
        return;
      };
      data["remark"] = contract_logistics_remark;
    };
    if (0 == contract_logistics_remark.length){
      data["sn_remark"] = "set_null";
    }
    //调数据库
    var contract_logistics_edit_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=modifyContractLogistics";
    var contract_logistics_edit_data_get = ajax_assistant(contract_logistics_edit_data_url, data, false, true, false);
    if ("1" == contract_logistics_edit_data_get.status){
      this.contract_logistics_clear_raw_data();
      this.contract_logistics_server_data_cover();
      this.contract_logistics_fill_variable_data();
      $("#contract_logistics_edit_modle_prop").modal("hide");
      $("#contract_logistics_edit_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    } else {
      alert("修改失败");
    }   
  };
  
  this.contract_logistics_delete_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var trade_contract_code = obj.parent().parent().parent().parent().attr("trade_contract_code");
    var contract_code = obj.attr("contract_code");
    var contract_logistics_delete_html = 
        '<div class="modal fade custom_modal" id="contract_logistics_delete_modle_prop" tabindex="-1" role="dialog">'+
          '<div class="modal-dialog modal-sm" role="document">'+
            '<div class="modal-content">'+
              '<div class="modal-header bg-primary">'+
                '<button type="button" class="close" data-dismiss="modal" aria-label="Close"><span aria-hidden="true">&times;</span></button>'+
                '<h4 class="modal-title">删除物流合同确认</h4>'+
              '</div>'+
              '<div class="modal-body nopadding-bottom contract_logistics_center">确认要删除吗？</div>'+
              '<div class="modal-footer noborder nopadding-top" style="text-align: center;">'+
              '<button type="button" class="btn btn-danger" id="contract_logistics_delete_modle_prop_btn" uuid = "' + uuid + '" contract_code = "' + contract_code + '" trade_contract_code = "' + trade_contract_code + '">删除</button>'+
                  '<button type="button" class="btn btn-default" data-dismiss="modal">取消</button>'+
              '</div>'+
            '</div>'+
          '</div>'+
      '</div>';
    $("body").append(contract_logistics_delete_html);
    $("#contract_logistics_delete_modle_prop").modal("show");
    $("#contract_logistics_delete_modle_prop").on("hidden.bs.modal", function (e) {
      $(this).remove();
    });
  };
  
  this.contract_logistics_delete_data_func = function(obj) {
    var uuid = obj.attr("uuid");
    var trade_contract_code = obj.attr("trade_contract_code");
    var contract_code = obj.attr("contract_code");
    var data = {
      "idColumnValue":uuid,
      "contract_code":contract_code
    };
    //接口数据
    var contract_logistics_delete_data_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=removeContractLogistics";
    var contract_logistics_delete_data_get = ajax_assistant(contract_logistics_delete_data_url, data, false, true, false);
    if ("1" != contract_logistics_delete_data_get.status){
      alert("删除物流合同失败");
    } else {  
      // 更新页面数据
      this.contract_logistics_clear_raw_data();
      this.contract_logistics_server_data_cover();
      this.contract_logistics_fill_variable_data();
      $("#contract_logistics_delete_modle_prop").modal("hide");
      $("#contract_logistics_delete_modle_prop").on("hidden.bs.modal", function(e) {
        $(this).remove();
      });
    }
  };
  
  this.contract_logistics_info_modle_func = function(obj) {
    var uuid = obj.attr("uuid");
    var trade_contract_code = this.sale_contract_code;
    var contract_code = obj.attr("contract_code");
    //物流企业的
    var contract_logistics_logistics_uuid = "";
    //雇主企业的
    var contract_logistics_employer_uuid = "";
    //载体类型
    var contract_logistics_carrier_type = "";
    //产品名称
    var contract_logistics_product_name = "";
    //装货地
    var contract_logistics_load_place = "";
    //卸货地
    var contract_logistics_unload_place = "";
    //开始时间
    var contract_logistics_start_datetime = "";
    //结束时间
    var contract_logistics_end_datetime = "";
    //运费
    var contract_logistics_freight = "";
    //运量
    var contract_logistics_quantity = "";
    //合同损耗
    var contract_logistics_contract_ullage = "";
    //签订时间
    var contract_logistics_sign_datetime = "";
    //备注
    var contract_logistics_remark = "";
    //附件
    var contract_logistics_cluster_list = "";
    var contract_logistics_edit_data = {
      "uuid":uuid,
      "trade_contract_code":trade_contract_code,
      "contract_code":contract_code
    };
    //调接口  查询数据
    var contract_logistics_edit_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractLogistics";
    var contract_logistics_edit_get_warehouse = ajax_assistant(contract_logistics_edit_url, contract_logistics_edit_data, false, true, false);
    if ("1" == contract_logistics_edit_get_warehouse.status) {
      var contract_logistics_edit_data_d = JSON.parse(contract_logistics_edit_get_warehouse.result);
      if (0 < contract_logistics_edit_data_d.length) {
        contract_logistics_logistics_uuid = contract_logistics_edit_data_d[0].logistics_uuid;
        contract_logistics_employer_uuid = contract_logistics_edit_data_d[0].employer_uuid;
        contract_logistics_carrier_type = contract_logistics_edit_data_d[0].carrier_type;
        contract_logistics_product_name = contract_logistics_edit_data_d[0].product_name;
        contract_logistics_load_place = contract_logistics_edit_data_d[0].load_place;
        contract_logistics_unload_place = contract_logistics_edit_data_d[0].unload_place;
        contract_logistics_start_datetime = contract_logistics_edit_data_d[0].start_datetime;
        contract_logistics_start_datetime = contract_logistics_start_datetime.substring(0, contract_logistics_start_datetime.indexOf(' '));
        contract_logistics_end_datetime = contract_logistics_edit_data_d[0].end_datetime;
        contract_logistics_end_datetime = contract_logistics_end_datetime.substring(0, contract_logistics_end_datetime.indexOf(' '));
        contract_logistics_freight = contract_logistics_edit_data_d[0].freight;
        contract_logistics_quantity = contract_logistics_edit_data_d[0].quantity;
        contract_logistics_contract_ullage = contract_logistics_edit_data_d[0].contract_ullage;
        contract_logistics_sign_datetime = contract_logistics_edit_data_d[0].sign_datetime;
        contract_logistics_sign_datetime = contract_logistics_sign_datetime.substring(0, contract_logistics_sign_datetime.indexOf(' '));
        if (null != contract_logistics_edit_data_d[0].remark) {
          contract_logistics_remark = contract_logistics_edit_data_d[0].remark;
        };
        if (null != contract_logistics_edit_data_d[0].normal_cluster_list) {
          contract_logistics_cluster_list = contract_logistics_edit_data_d[0].normal_cluster_list;
        };
      } else {
        alert("没数据");
      }
    } else {
      alert("查询数据失败");
    }
    //附件
    if (0 < contract_logistics_cluster_list.length){
      var contract_logistics_file_arr = new Array();
      contract_logistics_cluster_list = contract_logistics_cluster_list.substring(0, contract_logistics_cluster_list.length - 1).split(';');
      console.log(contract_logistics_cluster_list)
      for(var i = 0; i < contract_logistics_cluster_list.length; i++){
        var cluster_name_data = {
              "cluster_name":contract_logistics_cluster_list[i]
            };
        var contract_logistics_file_name = ajax_assistant(PROJECT_PATH+"lego/lego_storage?servletName=getFileByClusterName",cluster_name_data, false, true, false);//查询文件集群信息
        var contract_logistics_json = JSON.parse(contract_logistics_file_name.result);
        console.log(contract_logistics_json)
        if(0 != contract_logistics_file_name.count) {
          contract_logistics_file_arr[i] = {"file_name":contract_logistics_json[0].cluster_name+'.'+contract_logistics_json[0].suffix};
        }
      }
      this.contract_logistics_file_data = contract_logistics_file_arr;
      console.log(this.contract_logistics_file_data);
    } else {
      this.contract_logistics_file_data = [];
    }
    var contract_logistics_info_html = 
      '<div class = "modal fade custom_modal" tabindex = "-1" id = "contract_logistics_info_modle_prop" role = "dialog" aria-labelledby = "myLargeModalLabel">'+
          '<div class = "modal-dialog modal-lg" role = "document">'+
            '<div class = "modal-content">'+
              '<div class = "modal-header bg-primary">'+
                '<button type = "button" class = "close" data-dismiss = "modal" aria-label = "Close"><span aria-hidden = "true">&times;</span></button>'+
                '<h4 class = "modal-title">物流合同详情</h4>'+
              '</div>'+
              '<div class = "modal-body nopadding-bottom">'+
               '<div class = "row">'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">贸易合同编号</label>'+
                      '<input type = "text" class = "form-control" disabled = "disabled" value = "' + trade_contract_code + '">'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">使用企业</label>'+
                      '<select class = "form-control contract_logistics_employer_uuid"  disabled = "disabled" value = "' + contract_logistics_employer_uuid + '">';
                        
                        if(isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
                          for (var i = 0; i < this.contract_logistics_enterprise_data.data.length; i++) {
                            contract_logistics_info_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '" selected = "selected">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>';
                          }
                        }
                        contract_logistics_info_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">物流企业</label>'+
                      '<select class = "form-control contract_logistics_logistics_uuid" value = "' + contract_logistics_logistics_uuid + '" disabled = "disabled">'+
                        '<option value = "">--请选择--</option>';
                        if(isJsonObjectHasData(this.contract_logistics_enterprise_data)) {
                          for (var i = 0; i < this.contract_logistics_enterprise_data.data.length; i++) {
                            contract_logistics_info_html += '<option value = "' + this.contract_logistics_enterprise_data.data[i].uuid + '" selected = "selected">' + this.contract_logistics_enterprise_data.data[i].short_name + '</option>';
                          }
                        }
                        contract_logistics_info_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">物流载体类型</label>'+
                      '<select class = "form-control contract_logistics_carrier_type" value = "' + contract_logistics_carrier_type + '" disabled = "disabled">';
                        if(contract_logistics_carrier_type == 1){
                          contract_logistics_info_html += 
                          '<option value="1" selected="selected">轮船</option>';
                        }else if(contract_logistics_carrier_type == 2){
                          contract_logistics_info_html += 
                          '<option value="2" selected="selected">汽车</option>';
                        }else if(contract_logistics_carrier_type == 3){
                          contract_logistics_info_html += 
                          '<option value="3" selected="selected">火车</option>';
                        }
                        contract_logistics_info_html +=
                      '</select>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">货品</label>'+
                      '<input type = "text" class = "form-control contract_logistics_product_name" value = "' + contract_logistics_product_name + '" disabled = "disabled"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">装货地点</label>'+
                      '<input type = "text" class = "form-control contract_logistics_load_place" value = "' + contract_logistics_load_place + '" disabled = "disabled"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">卸货地点</label>'+
                      '<input type = "text" class = "form-control contract_logistics_unload_place" value = "' + contract_logistics_unload_place + '" disabled = "disabled"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>签署时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_sign_datetime" value = "' + contract_logistics_sign_datetime + '" disabled = "disabled">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>物流开始时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_start_datetime" value = "' + contract_logistics_start_datetime + '" disabled = "disabled">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group has-feedback">'+
                      '<label>物流结束时间</label>'+
                      '<input type = "text" class = "form-control widget_datepicker contract_logistics_end_datetime" value = "' + contract_logistics_end_datetime + '" disabled = "disabled">'+
                      '<span class = "glyphicon glyphicon-calendar form-control-feedback" aria-hidden = "true"></span>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label for = "">合同损耗</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_contract_ullage" value = "' + contract_logistics_contract_ullage + '" disabled = "disabled"/>'+
                        '<span class = "input-group-addon">‰</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label>运费</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_freight" value = "' + contract_logistics_freight + '" disabled = "disabled">'+
                        '<span class = "input-group-addon">元/吨</span>'+
                      '</div>'+
                    '</div>'+
                 ' </div>'+
                  '<div class = "col-md-4">'+
                    '<div class = "form-group">'+
                      '<label>运量</label>'+
                      '<div class = " input-group">'+
                        '<input type = "text" class = "form-control contract_logistics_quantity" value = "' + contract_logistics_quantity + '"  disabled = "disabled">'+
                        '<span class = "input-group-addon">吨</span>'+
                      '</div>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-8">'+
                    '<div class = "form-group">'+
                      '<label for = "">备注</label>'+
                      '<input type = "text" class = "form-control contract_logistics_remark" value = "' + contract_logistics_remark + '" disabled = "disabled"/>'+
                    '</div>'+
                  '</div>'+
                  '<div class = "col-md-12">'+
                    '<label class = "margin15">物流合同附件</label>'+
                    '<div class="panel panel-default clearfix" id = "contract_logistics_info_attch">'+
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
    $("body").append(contract_logistics_info_html);
    upload_attachment_preview_output("#contract_logistics_info_attch", this.contract_logistics_file_data);
    $("#contract_logistics_info_modle_prop").modal("show");
    $("#contract_logistics_info_modle_prop").on("hidden.bs.modal", function(e) {
      $(this).remove();
    });
  };
  
  this.contract_logistics_output = function() {
      var content = 
        '<div class = "panel panel-primary contract_sale_logistics_checkbox">'+
    '    <div class = "panel-heading clearfix">物流合同<span class = "glyphicon glyphicon-plus pull-right" id = "contract_logistics_add_modle"></span></div>'+
    '    <div class = "panel-body">'+
    '        <div class = "row">'+
    '          <div class = "col-lg-12">'+
    '            <table cellpadding = "0" cellspacing = "0" border = "0" width = "100%" class = "table" id = "contract_logistics_table_sales_trad_uuid">'+
    '              <thead>'+
    '                <tr>'+
    '                  <th>展开详情</th>'+
    '                  <th>使用企业</th>'+
    '                  <th>物流企业</th>'+
    '                  <th>物流载体</th>'+
    '                  <th>货品</th>'+
    '                  <th>装货地点</th>'+
    '                  <th>卸货地点</th>'+
    '                  <th>合同损耗（‰）</th>'+
    '                  <th>运费（元）</th>'+
    '                  <th>运量（吨）</th>'+
    '                  <th>&nbsp;</th>'+
    '                </tr>'+
    '              </thead>'+
    '              <tbody class = "contract_logistics_box">'+
    '                <tr>'+
    '                  <td><button type = "button" class = "btn btn-info btn-xs"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
    '                  <td>福记</td>'+
    '                  <td>细语</td>'+
    '                  <td>加技术</td>'+
    '                  <td>METB</td>'+
    '                  <td>舟山</td>'+
    '                  <td>上海</td>'+
    '                  <td>2</td>'+
    '                  <td>3600</td>'+
    '                  <td>3600</td>'+
    '                  <td>'+
    '                    <span class = "glyphicon glyphicon-info-sign contract_logistics_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-pencil contract_logistics_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-remove contract_logistics_ml15"></span>'+
    '                  </td>'+
    '                </tr>'+
    '                <tr>'+
    '                  <td><button type = "button" class = "btn btn-info btn-xs"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
    '                  <td>福记</td>'+
    '                  <td>细语</td>'+
    '                  <td>加技术</td>'+
    '                  <td>METB</td>'+
    '                  <td>舟山</td>'+
    '                  <td>上海</td>'+
    '                  <td>2</td>'+
    '                  <td>3600</td>'+
    '                  <td>3600</td>'+
    '                  <td>'+
    '                    <span class = "glyphicon glyphicon-info-sign contract_logistics_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-pencil contract_logistics_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-remove contract_logistics_ml15"></span>'+
    '                  </td>'+
    '                </tr>'+
    '                <tr>'+
    '                  <td><button type = "button" class = "btn btn-info btn-xs"><span class = "glyphicon glyphicon-chevron-up"></span></button></td>'+
    '                  <td>福记</td>'+
    '                  <td>细语</td>'+
    '                  <td>加技术</td>'+
    '                  <td>METB</td>'+
    '                  <td>舟山</td>'+
    '                  <td>上海</td>'+
    '                  <td>2</td>'+
    '                  <td>3600</td>'+
    '                  <td>3600</td>'+
    '                  <td>'+
    '                    <span class = "glyphicon glyphicon-info-sign contract_logistics_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-pencil contract_logistics_ml15"></span>'+
    '                    <span class = "glyphicon glyphicon-remove contract_logistics_ml15"></span>'+
    '                  </td>'+
    '                </tr>'+
    '              </tbody>'+
    '            </table>'+
    '          </div>'+
    '        </div>'+
    '      </div>'+
    '    </div>';
        $(this.contract_logistics_content_box).html(content);
  };
}
