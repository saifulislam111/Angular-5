import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-app-hero-detail',
  templateUrl: './app-hero-detail.component.html',
  styleUrls: ['./app-hero-detail.component.css']
})
export class AppHeroDetailComponent implements OnInit {

  @Input() hero: any;

  constructor() { }

  ngOnInit() {
  }

}
