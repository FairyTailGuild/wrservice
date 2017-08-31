/**
 * @author yangyongxia
 */
// 自运营企业变量
var owner_enterprise_uuid_list = null;

// 合同数据变量
var contact_search_list = null;

var warehouse_payment_detail_data = [
  {"sign_datetime": "2017-02-21", "receipt": 2000000, "payment": 2000000, "capital_occupying": 200000, "interest": 25000},
  {"sign_datetime": "2017-02-21", "receipt": 2000000, "payment": 2000000, "capital_occupying": 200000, "interest": 25000},
  {"sign_datetime": "2017-02-21", "receipt": 2000000, "payment": 2000000, "capital_occupying": 200000, "interest": 25000},
  {"sign_datetime": "2017-02-21", "receipt": 2000000, "payment": 2000000, "capital_occupying": 200000, "interest": 25000},
];

var  warehouse_payment_detail_work_area_data = {"data": [
  {"work_area_name": "库区1","work_area_uuid": "1"},
  {"work_area_name": "库区2","work_area_uuid": "2"},
  {"work_area_name": "库区3","work_area_uuid": "3"},
  {"work_area_name": "库区4","work_area_uuid": "4"},
  {"work_area_name": "库区5","work_area_uuid": "5"},
  {"work_area_name": "库区6","work_area_uuid": "6"},
  {"work_area_name": "库区7","work_area_uuid": "7"}
]};

function warehouse_payment_detail_clear_raw_data() {
  $("#warehouse_payment_detail_list thead").html('<tr><td colspan = "5" align = "center">请选择查询条件</td></tr>');
  $("#warehouse_payment_detail_list_box").html("");
  $("#warehouse_payment_detail_warehouse").html("");
}

function warehouse_payment_detail_fill_variable_data_warehouse() {
  if (isJsonObjectHasData(warehouse_payment_detail_work_area_data)) {
    var work_area_select = '<option value = "">--请选择--</option>';
    for (var i = 0; i < warehouse_payment_detail_work_area_data.data.length; i++) {
      work_area_select += '<option value = "' + warehouse_payment_detail_work_area_data.data[i].work_area_uuid + '">' + warehouse_payment_detail_work_area_data.data[i].work_area_name + '</option>'
    }
    $("#warehouse_payment_detail_warehouse").html(work_area_select);
  }
}
function warehouse_payment_detail_fill_variable_data() {
  if (isJsonObjectHasData(warehouse_payment_detail_data)) {
    var content_thead = 
      '<tr>'+
        '<th>日期</th>'+
        '<th>收款</th>'+
        '<th>付款</th>'+
        '<th>占用资金</th>'+
        '<th>资金利息</th>'+
      '</tr>';
    var content = "";
    for (var i = 0; i < warehouse_payment_detail_data.length; i++){
      content += 
        '<tr>'+
          '<td class = "warehouse_payment_detail_ta_c">' + warehouse_payment_detail_data[i].sign_datetime + '</td>'+
          '<td>' + warehouse_payment_detail_data[i].receipt + '</td>'+
          '<td>' + warehouse_payment_detail_data[i].payment + '</td>'+
          '<td>' + warehouse_payment_detail_data[i].capital_occupying + '</td>'+
          '<td>' + warehouse_payment_detail_data[i].interest + '</td>'+
        '</tr>';
      $("#warehouse_payment_detail_list_box").html(content);
      $("#warehouse_payment_detail_list thead").html(content_thead);
    } 
  } else {
    $("#warehouse_payment_detail_list_box").html("<tr><td  colspan = '5' align='center'>没数据</td></tr>");
  }
}

/**
 * 获取自运营企业
 */
function warehouse_payment_detail_get_enterprise() {
  var get_enterprise_url = PROJECT_PATH + "lego/lego_crm?servletName=getEnterpriseInformation";
  var get_enterprise_param_data = {};
  get_enterprise_param_data["type"] = "1";
  var get_enterprise = ajax_assistant(get_enterprise_url, get_enterprise_param_data, false, true, false);
  if(1 == get_enterprise.status) {
    var result = JSON.parse(get_enterprise.result);
    owner_enterprise_uuid_list = new Array();
    for (var i = 0; i < result.length; i++) {
      owner_enterprise_uuid_list.push(result[i].uuid);
    }
  } else {
    alert("企业信息获取失败");
  }
}

/**
 * 获取合同
 */
function warehouse_payment_detail_get_contract(warehouse, start_sign_datetime, end_sign_datetime) {
  var get_contract_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getContractTrade";
  var get_contract_param_data = {};
  get_contract_param_data["warehouse_uuid"] = warehouse;
  get_contract_param_data["start_sign_datetime"] = start_sign_datetime;
  get_contract_param_data["end_sign_datetime"] = end_sign_datetime;
  var get_contract = ajax_assistant(get_contract_url, get_contract_param_data, false, true, false);
   //console.log(get_contract);
  if(1 == get_contract.status) {
    var result = JSON.parse(get_contract.result);
    contact_search_list = new Array();
    for (var i = 0; i < result.length; i++) {
      contact_search_list.push({
        "uuid": result[i].uuid,
        "buyer_uuid": result[i].buyer_uuid,
        "seller_uuid": result[i].seller_uuid,
        "contract_code": result[i].contract_code,
        "total": (result[i].price * result[i].quantity),
        "sign_datetime": result[i].sign_datetime,
        "type": result[i].type,
      });
    }
    // //console.log(contact_search_list);
  } else {
    alert("合同获取失败");
  }
}

// 根据uuid获取合同的json对象
function get_contract_uuid(uuid) {
    for (var i = 0; i < contact_search_list.length; i++) {
      if (contact_search_list[i].uuid == uuid) {
        return contact_search_list[i];
      }
    }
}

/**
 * 计算数据
 */
function calc_data(loan_capital, start_sign_datetime, end_sign_datetime) {
  warehouse_payment_detail_data = new Array();
  // 根据开始时间和结束时间填充json数组中对象的sign_datetime
  for (var i = new Date(start_sign_datetime); i < new Date(end_sign_datetime); i.setDate(i.getDate() + 1)) {
    var timestamp = i.getFullYear() + "-" + (i.getMonth() + 1) + "-" + i.getDate();
    warehouse_payment_detail_data.push({
      "sign_datetime": timestamp,
      "receipt": 0,
      "payment": 0,
      "capital_occupying": 0,
      "interest": 0
    });
  }
  // 自营企业的所有合同
  var owner_enterpirse_contract = new Array();
  // 找到合同中所有销售方为“自营企业”的数据，填充收款数据receipt
  for (var i = 0; i < contact_search_list.length; i++) {
    for (var j = 0; j < owner_enterprise_uuid_list.length; j++) {
      if (contact_search_list[i].buyer_uuid == owner_enterprise_uuid_list[j]) {
        owner_enterpirse_contract.push(contact_search_list[i].uuid);
        break;
      }
      if (contact_search_list[i].seller_uuid == owner_enterprise_uuid_list[j]) {
        owner_enterpirse_contract.push(contact_search_list[i].uuid);
        break;
      }
    }
  }
  // 找到自营企业合同数据中，所有销售合同且添加至receipt，所有采购合同且添加至payment
  for (var i = 0; i < owner_enterpirse_contract.length; i++) {
    var contract_datetime = new Date(get_contract_uuid(owner_enterpirse_contract[i]).sign_datetime);
    //console.log(contract_datetime.toLocaleDateString());
    for (var j = 0; j < warehouse_payment_detail_data.length; j++) {
      var display_datetime = new Date(warehouse_payment_detail_data[j].sign_datetime);
      //console.log(display_datetime.toLocaleDateString());
      if ((display_datetime.getFullYear() == contract_datetime.getFullYear()) && (display_datetime.getMonth() == contract_datetime.getMonth()) && (display_datetime.getDate() == contract_datetime.getDate())) {
        // 时间节点相同的情况下
        if (1 == get_contract_uuid(owner_enterpirse_contract[i]).type) {
          warehouse_payment_detail_data[j]["receipt"] += get_contract_uuid(owner_enterpirse_contract[i]).total;
        } else if (0 == get_contract_uuid(owner_enterpirse_contract[i]).type) {
          warehouse_payment_detail_data[j]["payment"] += get_contract_uuid(owner_enterpirse_contract[i]).total;
        }
      }
    }
  }
  // 计算“占用资金”和“利息”
  for (var i = 0; i < warehouse_payment_detail_data.length; i++) {
    if (0 == i) {
      warehouse_payment_detail_data[i]["capital_occupying"] = loan_capital;
    } else {
      warehouse_payment_detail_data[i]["capital_occupying"] = new Number((warehouse_payment_detail_data[i - 1]["capital_occupying"] + warehouse_payment_detail_data[i]["payment"] - warehouse_payment_detail_data[i]["receipt"]).toFixed(2));
    }
    warehouse_payment_detail_data[i]["interest"] = new Number((warehouse_payment_detail_data[i]["capital_occupying"] * 0.1 / 12 / 30).toFixed(2));
  }
  // 增加“合计”
  var receipt_total = 0;
  var payment_total = 0;
  var interest_total = 0;
  for (var i = 0; i < warehouse_payment_detail_data.length; i++) {
    receipt_total += new Number(warehouse_payment_detail_data[i]["receipt"].toFixed(2));
    payment_total += new Number(warehouse_payment_detail_data[i]["payment"].toFixed(2));
    interest_total += new Number(warehouse_payment_detail_data[i]["interest"].toFixed(2));
  }
  receipt_total = new Number(receipt_total.toFixed(2));
  payment_total = new Number(payment_total.toFixed(2));
  interest_total = new Number(interest_total.toFixed(2));
  warehouse_payment_detail_data.push({
      "sign_datetime": "合计",
      "receipt": receipt_total,
      "payment": payment_total,
      "capital_occupying": "",
      "interest": interest_total
    });
}

/**
 * 获取库区
 */
function warehouse_payment_detail_get_warehouse() {
  var get_warehouse_url = PROJECT_PATH + "lego/lego_fjTrade?servletName=getWarehouse";
  var get_warehouse_param_data = {};
  var org_structure_get_warehouse = ajax_assistant(get_warehouse_url, get_warehouse_param_data, false, true, false);
  console.log(org_structure_get_warehouse);
  if (1 == org_structure_get_warehouse.status) {
    if (0 == org_structure_get_warehouse.count) {
      warehouse_payment_detail_work_area_data = {};
    } else {
      var warehouse_arr = new Array();
      var result = JSON.parse(org_structure_get_warehouse.result); 
      for (var i = 0; i < result.length; i++) {
        warehouse_arr.push({"work_area_name":result[i].name, "work_area_uuid":result[i].uuid});
      }
      warehouse_payment_detail_work_area_data["data"] = warehouse_arr;
      //console.log(warehouse_payment_detail_work_area_data["data"]);
    }
  } else {
    alert("获取库区失败");
    return;
  } 
}

/**
 * 合同明细输出
 * @param  output_id
 */
function warehouse_payment_detail_content(output_id) {
  var content = 
'      <div class = "panel panel-default panel-primary">'+
'        <div class = "panel-heading">搜索条件</div>'+
'        <div class = "panel-body" style="padding-bottom: 0;">'+
'          <div class = "row">'+
'            <div class="col-md-10">'+
'              <div class="row">'+
'               <div class = "col-md-6">'+
'                  <div class="input-group">'+
'                    <span class="input-group-addon">原始贷款资金</span>'+
'                    <input type="text" class="form-control" id = "warehouse_payment_detail_loan_capital" value = "91260059.73" aria-label="Amount (to the nearest dollar)">'+
'                    <span class="input-group-addon">元</span>'+
'                  </div>'+
'                </div>'+
'                <div class = "col-md-6">'+
'                  <div class="input-group pull-left">'+
'                    <span class="input-group-addon" id="">选择库区</span>'+
'                    <select class="form-control" id="warehouse_payment_detail_warehouse">'+
'                      <option class="">--请选择--</option>'+
'                      <option value="1">库区1</option>'+
'                      <option value="2">库区2</option>'+
'                      <option value="3">库区3</option>'+
'                    </select>'+
'                  </div>'+
'                </div>'+
'              </div>'+
'             <div class="row warehouse_payment_detail_mt15">'+
'               <div class = "col-md-6">'+
'                  <div class="input-group">'+
'                    <span class="input-group-addon">开始时间</span>'+
'                    <input type="text" class="form-control widget_datepicker" id = "warehouse_payment_detail_start_sign_datetime" value = "" aria-label="Amount (to the nearest dollar)">'+
'                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>'+
'                  </div>'+
'                </div>'+
'                <div class = "col-md-6">'+
'                  <div class="input-group">'+
'                    <span class="input-group-addon">结束时间</span>'+
'                    <input type="text" class="form-control widget_datepicker" id = "warehouse_payment_detail_end_sign_datetime" value = "" aria-label="Amount (to the nearest dollar)">'+
'                    <span class="glyphicon glyphicon-calendar form-control-feedback" aria-hidden="true"></span>'+
'                  </div>'+
'                </div>'+
'             </div>'+
'            </div>'+
'            <div class="col-md-2">'+
'             <button class="btn btn-primary" type="button" id = "warehouse_payment_detail_search">                      '+
'                <span class="">搜索</span>                    '+
'              </button>   '+
'            </div>'+
'          </div>'+
'        </div>'+
'      </div>'+
'      <div class = "panel panel-default panel-primary">'+
'        <div class = "panel-heading text-left">明细记录</div>'+
'        <div class = "panel-body warehouse_payment_detail_pb0">'+
'          <div class = "col-md-12">'+
'            <table  class = "table warehouse_payment_detail_mt20" id = "warehouse_payment_detail_list">'+
'              <thead>'+
'                <tr>'+
'                  <th>日期</th>'+
'                  <th>收款</th>'+
'                  <th>付款</th>'+
'                  <th>占用资金</th>'+
'                  <th>资金利息</th>'+
'                </tr>'+
'              </thead>'+
'              <tbody id = "warehouse_payment_detail_list_box">'+
'                <tr>'+
'                  <td>2017-02-02</td>'+
'                  <td>2000000</td>'+
'                  <td>2000000</td>'+
'                  <td>2000000</td>'+
'                  <td>2000000</td>'+
'                </tr>'+
'              </tbody>'+
'            </table>'+
'          </div>'+
'        </div>'+
'      </div>';
  $(output_id).html(content);
}
