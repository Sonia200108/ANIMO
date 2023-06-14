import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-blimpcontrol',
  templateUrl: './blimpcontrol.page.html',
  styleUrls: ['./blimpcontrol.page.scss'],
})
export class BlimpcontrolPage implements OnInit {

  blimpId: number;

  constructor(private route: ActivatedRoute, public rt: Router) {
    this.blimpId = parseInt(this.route.snapshot.paramMap.get('blimpid') || '{}');

    
   
  }

  ngOnInit() {
  }

  moveUp() {}

  moveDown() {}

  moveLeft() {}

  moveRight() {}

  goBack(){
    this.rt.navigate(['/f/blimpinfo', this.blimpId]);
  }

}
