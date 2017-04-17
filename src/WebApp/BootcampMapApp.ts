import { App, Suite, LogLevel, Environment, lazyLoad, domReady, requestJson } from "protoculture";
import { BootcampWebAppState } from "./BootcampWebAppState";
import * as _ from "lodash";
import { Drone } from "../Drone";


export class BootcampMapApp implements App {
    
    name: string = "map";

    working: boolean = true;

    suite: Suite;

    protected map: google.maps.Map;

    public constructor(protected environment: Environment<any>) {

    }

    public async run(): Promise<void> {

        const googleMapsApiKey = this.environment["GOOGLE_MAPS_API_KEY"];
        const lat = this.environment["GOOGLE_MAPS_CENTER_LAT"];
        const lon = this.environment["GOOGLE_MAPS_CENTER_LON"];

        const googleMapsUri = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;

        await lazyLoad(googleMapsUri);

        const drones = await requestJson<{[key: string]: Drone}>("/connected");

        this.suite.logger.log(JSON.stringify(drones), this, LogLevel.Info);

        this.map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(lat, lon),
            zoom: 6,
        });

        const markers = _.map(drones, (drone) => new google.maps.Marker({
            position: new google.maps.LatLng(drone.latitude, drone.longitude),
            label: drone.id,
            map: this.map,
        }));
    }
}