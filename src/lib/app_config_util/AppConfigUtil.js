"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const staging_1 = require("./staging");
const production_1 = require("./production");
const development_1 = require("./development");
const config_map = {
    staging: staging_1.default,
    production: production_1.default,
    development: development_1.default
};
class AppConfigUtil {
    static env() {
        let isProduction = (document.location.hostname === 'adigaur.gitlab.io');
        let env = isProduction ? 'production' : 'staging';
        env = (document.location.search.indexOf('env=') >= 0) ? document.location.search.split('env=')[1].split('&')[0] : env;
        return env;
    }
    static init() {
        this._config = this._config ? this._config : config_map[this.env()];
    }
    static get(path) {
        AppConfigUtil.init();
        let path_components = path.split(':');
        let curr = this._config;
        let value;
        try {
            for (let comp of path_components) {
                value = curr[comp];
                curr = curr[comp];
            }
        }
        catch (e) {
            value = undefined;
        }
        return value;
    }
}
AppConfigUtil._config = null;
exports.default = AppConfigUtil;
