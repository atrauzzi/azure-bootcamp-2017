import { ServiceProvider, symbols } from "protoculture";
import { BootcampApiApp } from "./BootcampApiApp";
import {serverSymbols} from "./index";


export class BootcampServerServiceProvider extends ServiceProvider {

    public async boot() {

        this.bindApp(BootcampApiApp);
        this.bindConstructorParameter(symbols.Environment, BootcampApiApp, 0);
    }
}