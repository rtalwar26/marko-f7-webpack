import staging from "./staging";
import production from "./production";
import development from "./development";


const config_map = {
    staging,
    production,
    development
}

export default class AppConfigUtil {

    private static _config: any = null;
    private static env(): string {

        let isProduction = (document.location.hostname === 'adigaur.gitlab.io');
        let env = isProduction ? 'production' : 'staging';
        env = (document.location.search.indexOf('env=') >= 0) ? document.location.search.split('env=')[1].split('&')[0] : env;
        return env;
    }
    static init() {

        this._config = this._config ? this._config : config_map[this.env()];

    }
    static get(path: string) {
        AppConfigUtil.init();
        let path_components = path.split(':');

        let curr = this._config;
        let value;
        try {
            for (let comp of path_components) {
                value = curr[comp];
                curr = curr[comp];
            }
        } catch (e) {
            value = undefined;
        }

        return value;
    }
}