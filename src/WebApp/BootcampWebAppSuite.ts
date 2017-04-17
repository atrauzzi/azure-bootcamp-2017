import { Suite, App, WebServiceProvider, ReduxServiceProvider } from "protoculture";
import { BootcampWebAppServiceProvider } from "./BootcampWebAppServiceProvider";


export class BootcampWebAppSuite extends Suite {
    
    name: string = "bootcamp-2017-webapp";

    protected get serviceProviders() {
        
        return [
            WebServiceProvider,
            BootcampWebAppServiceProvider,
        ];
    }
}

const suite = new BootcampWebAppSuite();
suite.run();
