import { ServiceProvider, symbols } from "protoculture";
import { BootcampDroneApp } from "./BootcampDroneApp";


export class BootcampDroneServiceProvider extends ServiceProvider {

    public async boot() {

        this.bindApp(BootcampDroneApp);
        this.bindConstructorParameter(symbols.Environment, BootcampDroneApp, 0);
    }
}