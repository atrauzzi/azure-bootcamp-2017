import { ServiceProvider, symbols } from "protoculture";
import { BootcampMapApp } from "./BootcampMapApp";
import { webAppSymbols } from "./index";


export class BootcampWebAppServiceProvider extends ServiceProvider {

    public async boot() {

        this.bindApp(BootcampMapApp, webAppSymbols.WebApp);
        this.bindConstructorParameter(symbols.Environment, BootcampMapApp, 0);
    }
}
