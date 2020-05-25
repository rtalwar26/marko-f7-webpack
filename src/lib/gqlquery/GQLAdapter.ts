import { network_request, build_query, build_mutation_query } from "./common";

export default class GQLAdapter {
    private api_path
    constructor(api_path: string) {
        this.api_path = api_path
    }
    async query(operation: string, variables: any, fields: string) {
        let resp = await network_request(await build_query(operation, variables, fields), this.api_path);
        resp.errors && (() => {
            throw new Error(JSON.stringify(resp.errors));
        })();
        return resp.data[operation];
    }
    async mutation(operation: string, variables: any, fields: string) {
        let q = await build_mutation_query(operation, variables, fields);
        let resp = await network_request(q, this.api_path);
        resp.errors && (() => {
            throw new Error(JSON.stringify(resp.errors));
        })();
        return resp.data[operation];
    }
}