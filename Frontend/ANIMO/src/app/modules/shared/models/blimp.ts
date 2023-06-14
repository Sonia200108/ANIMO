import { Farm } from "./farm";

export class Blimp {
    blimpid: number;
    name: string;
    longitude: number;
    latitude: number;
    farm: Farm;
  
    constructor(blimpid: number, name: string, longitude: number, latitude: number, farm: Farm) {
      this.blimpid = blimpid;
      this.name = name;
      this.longitude = longitude;
      this.latitude = latitude;
        this.farm = farm;
    }
  }