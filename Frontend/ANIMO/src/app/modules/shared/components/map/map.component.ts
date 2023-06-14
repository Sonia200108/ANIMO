

import { Component, ElementRef, Input, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import { GoogleMap, Marker } from '@capacitor/google-maps';
import { LatLng, latLng } from 'leaflet';
import { Blimp } from '../../models/blimp';

@Component({
  selector: 'app-map',
  templateUrl: './map.component.html',
  styleUrls: ['./map.component.scss'],
  encapsulation: ViewEncapsulation.None 
})
export class MapComponent implements OnInit {
  apiKey = 'AIzaSyBDugqiGk6vkMMpHX9loamI_k3R9uCracE';

  @ViewChild('map', { static: true }) mapRef: ElementRef;
  newMap: GoogleMap;

  @Input() latitude: number;
  @Input() longitude: number;

  @Input() blimps: Blimp[] = [];

  @Input() mapClass: string;


  constructor() {}

  ngOnInit() {
    // Check if latitude and longitude are available
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.createMap();
    }

  }

  ngOnChanges() {
    // Check if latitude and longitude have changed
    if (this.latitude !== undefined && this.longitude !== undefined) {
      this.createMap();
    }

    
  }

  async createMap() {
    console.log(this.latitude);
    console.log(this.longitude);
    console.log(this.blimps);
    this.newMap = await GoogleMap.create({
      id: 'my-map',
      element: this.mapRef.nativeElement,
      apiKey: this.apiKey,
      forceCreate: true,
      config: {
        center: {
          lat: this.latitude,
          lng: this.longitude,
        },
        zoom: 12,
      },
    });

    this.blimps.forEach(blimp => {
      const markerBlimps: Marker = {
        coordinate: new LatLng(blimp.latitude, blimp.longitude)
      };
  
      this.newMap.addMarker(markerBlimps);
      });

  
    const MarkerOrginal: Marker = {
      coordinate: new LatLng(this.latitude, this.longitude),
      title: 'Marker Title',
      snippet: 'Marker Snippet',
    };

    this.newMap.addMarker(MarkerOrginal);

  }

}
