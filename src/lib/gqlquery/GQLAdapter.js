"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const common_1 = require("./common");
class GQLAdapter {
    constructor(api_path) {
        this.api_path = api_path;
    }
    async query(operation, variables, fields) {
        let resp = await common_1.network_request(await common_1.build_query(operation, variables, fields), this.api_path);
        resp.errors && (() => {
            throw new Error(JSON.stringify(resp.errors));
        })();
        return resp.data[operation];
    }
    async mutation(operation, variables, fields) {
        let q = await common_1.build_mutation_query(operation, variables, fields);
        let resp = await common_1.network_request(q, this.api_path);
        resp.errors && (() => {
            throw new Error(JSON.stringify(resp.errors));
        })();
        return resp.data[operation];
    }
}
exports.default = GQLAdapter;
