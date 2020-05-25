"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const GQLAdapter_1 = require("./GQLAdapter");
const api_path = '/graphql/customer-service';
exports.query = async (operation, variables, fields) => {
    return new GQLAdapter_1.default(api_path).query(operation, variables, fields);
};
exports.mutation = async (operation, variables, fields) => {
    return new GQLAdapter_1.default(api_path).mutation(operation, variables, fields);
};
