// Compiled using marko@4.18.10 - DO NOT EDIT
"use strict";

var marko_template = module.exports = require("marko/src/html").t(__filename),
    marko_componentType = "/adigaur-crm$1.0.2/src/routes/mobile/routes/stock/index.marko",
    marko_component = require("./component"),
    components_helpers = require("marko/src/runtime/components/helpers"),
    marko_renderer = components_helpers.r,
    marko_defineComponent = components_helpers.c,
    multi_stock_form_template = require("../../../../components/multi-stock-form"),
    marko_helpers = require("marko/src/runtime/html/helpers"),
    marko_loadTag = marko_helpers.t,
    multi_stock_form_tag = marko_loadTag(multi_stock_form_template);

function render(input, out, __component, component, state) {
  var data = input;

  out.w("<div id=\"stock\" data-name=\"stock\" class=\"page stacked\"><div class=\"navbar\"><div class=\"navbar-inner sliding\"><div class=\"left\"><a class=\"link move-back\"><i class=\"icon icon-back\"></i><span>Back</span></a></div><div class=\"title\">stock</div></div></div><div class=\"page-content\"><div class=\"card-content  card-content-padding\"><div class=\"list no-hairlines-md padding\"><form class=\"list no-hairlines-md\"><ul class=\"row\"><li class=\"col-100 tablet-auto item-content item-input\"><div class=\"item-inner\"><div class=\"item-title item-label\">Date</div><div class=\"item-input-wrap\"><input type=\"date\" name=\"order_date\"><span class=\"input-clear-button\"></span></div></div></li></ul><div class=\"block-title\">PRODUCT LIST</div><ul class=\"row\">");

  multi_stock_form_tag({}, out, __component, "products");

  out.w("</ul></form><div class=\"block block-strong row\"><div class=\"col\"><a class=\"button\">Submit</a></div></div></div></div></div></div>");
}

marko_template._ = marko_renderer(render, {
    ___type: marko_componentType
  }, marko_component);

marko_template.Component = marko_defineComponent(marko_component, marko_template._);

marko_template.meta = {
    id: "/adigaur-crm$1.0.2/src/routes/mobile/routes/stock/index.marko",
    component: "./",
    tags: [
      "../../../../components/multi-stock-form"
    ]
  };
