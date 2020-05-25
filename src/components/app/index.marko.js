// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/adigaur-crm$1.0.2/src/routes/mobile/components/app/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    stock_template = require("../../routes/stock"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    stock_tag = marko_loadTag(stock_template),
    invoice_template_template = require("../../routes/invoice-template"),
    invoice_template_tag = marko_loadTag(invoice_template_template),
    labels_list_template = require("../../routes/labels-list"),
    labels_list_tag = marko_loadTag(labels_list_template),
    launch_page_template = require("../../routes/launch-page"),
    launch_page_tag = marko_loadTag(launch_page_template),
    boards_list_template = require("../../routes/boards-list"),
    boards_list_tag = marko_loadTag(boards_list_template),
    board_detail_template = require("../../routes/board-detail"),
    board_detail_tag = marko_loadTag(board_detail_template),
    list_detail_template = require("../../routes/list-detail"),
    list_detail_tag = marko_loadTag(list_detail_template),
    create_card_template = require("../../routes/create-card"),
    create_card_tag = marko_loadTag(create_card_template),
    modify_card_template = require("../../routes/modify-card"),
    modify_card_tag = marko_loadTag(modify_card_template),
    list_test_template = require("../../routes/list-test"),
    list_test_tag = marko_loadTag(list_test_template),
    create_purchase_template = require("../../routes/create-purchase"),
    create_purchase_tag = marko_loadTag(create_purchase_template),
    modify_purchase_card_template = require("../../routes/modify-purchase-card"),
    modify_purchase_card_tag = marko_loadTag(modify_purchase_card_template),
    packing_slip_template = require("../../routes/packing-slip"),
    packing_slip_tag = marko_loadTag(packing_slip_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div id=\"app\"><div class=\"statusbar\"></div><div class=\"view view-main\">");

  stock_tag({}, out, __component, "3");

  invoice_template_tag({}, out, __component, "invoice-template");

  labels_list_tag({}, out, __component, "labels-list");

  launch_page_tag({}, out, __component, "launch");

  boards_list_tag({}, out, __component, "boards-list");

  board_detail_tag({}, out, __component, "board-detail");

  list_detail_tag({}, out, __component, "list-detail");

  create_card_tag({}, out, __component, "create-card");

  modify_card_tag({}, out, __component, "modify-card");

  list_test_tag({}, out, __component, "list-test");

  create_purchase_tag({}, out, __component, "create-purchase");

  modify_purchase_card_tag({}, out, __component, "modify-purchase-card");

  packing_slip_tag({}, out, __component, "packing-slip");

  out.w("</div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/adigaur-crm$1.0.2/src/routes/mobile/components/app/index.marko",
    component: "./",
    tags: [
      "../../routes/stock",
      "../../routes/invoice-template",
      "../../routes/labels-list",
      "../../routes/launch-page",
      "../../routes/boards-list",
      "../../routes/board-detail",
      "../../routes/list-detail",
      "../../routes/create-card",
      "../../routes/modify-card",
      "../../routes/list-test",
      "../../routes/create-purchase",
      "../../routes/modify-purchase-card",
      "../../routes/packing-slip"
    ]
  };
