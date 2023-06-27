import { Component, OnInit, ViewChild } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { DomSanitizer, SafeResourceUrl, SafeUrl } from '@angular/platform-browser';
import { Observable, interval, map, take, timer } from 'rxjs';
import { VideoStreamingService } from 'src/app/modules/shared/services/video-streaming.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blimpvideo',
  templateUrl: './blimpvideo.page.html',
  styleUrls: ['./blimpvideo.page.scss'],
})
export class BlimpvideoPage implements OnInit {

  videoFeedUrl: SafeResourceUrl;
  blimpId: number;

  constructor(private sanitizer: DomSanitizer, public rt: Router, private route: ActivatedRoute,) {
    this.videoFeedUrl = this.sanitizer.bypassSecurityTrustResourceUrl('http://172.20.10.7:5000/video_feed');
    this.blimpId = parseInt(this.route.snapshot.paramMap.get('blimpid') || '{}');
  }

  ngOnInit() {}

  goBack() {
    this.rt.navigate(['/f/blimpinfo', this.blimpId]);
  }

}
