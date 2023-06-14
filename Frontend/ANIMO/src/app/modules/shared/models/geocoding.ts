export interface Geocoding {
    results: Result[]
  }

  
  
  export interface Result {
    geometry: Geometry
  }
  
  export interface Geometry {
    location: Location
  }
  
  export interface Location {
    lat: number
    lng: number
  }


  