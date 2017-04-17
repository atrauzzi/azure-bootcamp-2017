import { Suite, App, ConsoleServiceProvider } from "protoculture";
import { BootcampServerServiceProvider } from "./BootcampServerServiceProvider";


export class BootcampServerSuite extends Suite {
    
    name: string = "bootcamp-server";

    protected get serviceProviders() {
        
        return [
            ConsoleServiceProvider,
            BootcampServerServiceProvider,
        ];
    }
}

const suite = new BootcampServerSuite();
suite.run().catch((error) => console.error(error));
