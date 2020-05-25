"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const wrap_in_quotes = (p) => {
    return `"` + p.replace(/\"/g, '\\"').replace(/\\\\"/g, '\\\\\\"') + `"`;
};
const build_query_string = async (type, operation, variables, fields) => {
    let keys = Object.keys(variables);
    let param_str = keys.map((k) => `${k}:${typeof variables[k] === 'string' ? wrap_in_quotes(variables[k]) : variables[k]}`).join(',');
    let query_str = `${type} {${operation}`;
    query_str += (variables && keys.length) ? `(${param_str})` : '';
    query_str += fields ? `{
              ${fields}
            }` : '';
    query_str += '}';
    return query_str;
};
exports.build_query = async (operation, variables, fields) => {
    return build_query_string('query', operation, variables, fields);
};
exports.build_mutation_query = async (operation, variables, fields) => {
    return build_query_string('mutation', operation, variables, fields);
};
exports.fetch_return_schema = (input) => {
    let query = (input && input.query) || `{__type(name:"Mutation") {name description kind fields {description  name type { name description ofType {name description fields { name type{name        }}}}    } } }`;
    let operation_name = input && input.operation;
    return input.url && (typeof window !== 'undefined') ? fetch(input.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    }).then(r => r.json()).then(json => {
        let data = json.data[Object.keys(json.data)[0]];
        let mutation = data.fields.filter(f => f.name === operation_name)[0];
        mutation = mutation.type.ofType;
        return mutation.fields;
    }) : Promise.resolve([]);
};
exports.fetch_args_schema = (input) => {
    let query = (input && input.query) || `{__type(name:"Mutation") {name description kind fields {description deprecationReason name args { name description defaultValue type { name description } }  } } }`;
    let operation_name = input && input.operation;
    return input.url && (typeof window !== 'undefined') ? fetch(input.url, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ query: query })
    }).then(r => r.json()).then(json => {
        let data = json.data[Object.keys(json.data)[0]];
        let mutation = data.fields.filter(f => f.name === operation_name)[0];
        mutation = mutation.type.ofType;
        return mutation.args;
    }) : Promise.resolve([]);
};
exports.network_request = async (q, subpath) => {
    let w = window;
    let shouldFetch = w.app && w.app.data.base_url && (typeof window !== 'undefined');
    !shouldFetch && (() => {
        throw new Error('window.app.data.base_url not found');
    })();
    let r = await fetch(`${w.app.data.base_url}${subpath}`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
            'x-access-token': w.app.data.token
        },
        body: JSON.stringify({ query: q })
    });
    return (await r.json());
};
