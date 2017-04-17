

export interface BootcampWebAppState {

    configuration: {
        googleMapsApiKey: string,
    };

    data: {
        pins: Pin[],
    }
}

export interface Pin {

    label: string;

    type: string;

    latitude: number;

    longitude: number;
}