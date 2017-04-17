import { Suite, App, ConsoleServiceProvider } from "protoculture";
import { BootcampDroneServiceProvider } from "./BootcampDroneServiceProvider";


export class BootcampDroneSuite extends Suite {
    
    name: string = "bootcamp-drone";

    protected get serviceProviders() {
        
        return [
            ConsoleServiceProvider,
            BootcampDroneServiceProvider,
        ];
    }
}

const suite = new BootcampDroneSuite();
suite.run().catch((error) => console.error(error));
