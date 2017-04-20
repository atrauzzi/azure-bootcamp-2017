import { App, Environment, Suite, LogLevel } from "protoculture";
import { ServerEnvironment } from "./ServerEnvironment";
import * as Hapi from "hapi";
import * as Inert from "inert";
import {Drone} from "../Drone";


// ToDo: Procotulture: Configurable project root path (http vs filesystem! relative?)
export class BootcampApiApp implements App {
    
    readonly name: string = "api";

    readonly working: boolean = true;

    public suite: Suite;

    protected drones: {[key: string]: Drone};

    public constructor(
        protected environment: Environment<ServerEnvironment>
    ) {

        this.drones = {};
    }

    public async run() {

        // ToDo: This could be injectable!
        const server = new Hapi.Server({
            
        });

        await server.register(Inert);

        server.connection({
            port: this.environment.PORT || 80,
            host: "0.0.0.0"
        });

        server.route({
            method: "GET",
            path: "/{param*}",
            config: {
                log: true,
            },
            handler: {
                directory: {
                    path: "./public/",
                    redirectToSlash: true,
                    index: "index.html"
                }
            }
        });

        server.route({
            method: "POST",
            path: "/drone",
            handler: (request, reply) => this.addDrone(request, reply),
            config: {
                payload: {
                    output: "data",
                    parse: true,
                },
            },
        });

        server.route({
            method: "GET",
            path: "/connected",
            handler: (request, reply) => this.connected(request, reply),
            config: {
                log: true,
            },
        });

        server.start();
    }

    protected addDrone(request: Hapi.Request, reply: Hapi.IReply) {
    
        this.suite.logger.log("Setting drone metadata", this, LogLevel.Info);
        
        const drone: Drone = request.payload;

        if(drone) {

            this.suite.logger.log(JSON.stringify(drone), this, LogLevel.Info);
            this.drones[drone.id] = drone;
        }

        reply(null);
    }

    protected connected(request: Hapi.Request, reply: Hapi.IReply) {

        this.suite.logger.log("Checked by a client", this, LogLevel.Info);
        reply(this.drones);
    }
}
