import { App, Suite, LogLevel, Environment, lazyLoad, domReady, requestJson } from "protoculture";
import { BootcampWebAppState } from "./BootcampWebAppState";
import * as _ from "lodash";
import { Drone } from "../Drone";


export class BootcampMapApp implements App {
    
    name: string = "map";

    working: boolean = true;

    suite: Suite;

    protected map: google.maps.Map;

    protected markers: google.maps.Marker[];

    public constructor(protected environment: Environment<any>) {

    }

    public async run(): Promise<void> {

        const googleMapsApiKey = this.environment["GOOGLE_MAPS_API_KEY"];
        const lat = this.environment["GOOGLE_MAPS_CENTER_LAT"];
        const lon = this.environment["GOOGLE_MAPS_CENTER_LON"];

        const googleMapsUri = `https://maps.googleapis.com/maps/api/js?key=${googleMapsApiKey}`;

        await lazyLoad(googleMapsUri);

        this.map = new google.maps.Map(document.getElementById("map"), {
            center: new google.maps.LatLng(lat, lon),
            zoom: 6,
            mapTypeId: google.maps.MapTypeId.HYBRID,
            streetViewControl: false,
            mapTypeControl: false,
        });

        setInterval(() => this.loadDrones(), 5000);
    }

    protected async loadDrones() {

        this.suite.logger.log("Loading current drones", this, LogLevel.Info);

        const drones = await requestJson<{[key: string]: Drone}>("/connected");

        this.suite.logger.log(JSON.stringify(drones), this, LogLevel.Info);

        _.forEach(this.markers, marker => marker.setMap(null));

        this.markers = _.map(drones, (drone) => new google.maps.Marker({
            position: new google.maps.LatLng(drone.latitude, drone.longitude),
            title: drone.id,
            map: this.map,
            icon: {
                url: "https://azure.microsoft.com/svghandler/app-service/?width=50&height=50",
            }
        }));
    }
}