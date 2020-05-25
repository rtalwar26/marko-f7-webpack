import { network_request, build_query, build_mutation_query } from "./common";
import GQLAdapter from "./GQLAdapter";
const api_path = '/graphql/customer-service';

export const query = async (operation: string, variables: any, fields: string) => {
    return new GQLAdapter(api_path).query(operation, variables, fields);
}
export const mutation = async (operation: string, variables: any, fields: string) => {
    return new GQLAdapter(api_path).mutation(operation, variables, fields);

}