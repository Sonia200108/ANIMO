import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Injectable({
  providedIn: 'root'
})
export class VideoStreamingService {
  private videoElement: HTMLVideoElement;

  constructor(private sanitizer: DomSanitizer) {
    this.videoElement = document.createElement('video');
    this.videoElement.setAttribute('autoplay', '');
  }

  startStream(): SafeResourceUrl {
    const url = 'http://172.20.10.7:5000/video_feed';  // Replace with your server URL

    this.videoElement.src = url;
    this.videoElement.play();

    return this.sanitizer.bypassSecurityTrustResourceUrl(url);
  }

  stopStream() {
    this.videoElement.src = '';
    this.videoElement.pause();
  }
}