import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';



@Component({
  selector: 'app-app-hero-detail',
  templateUrl: './app-hero-detail.component.html',
  styleUrls: ['./app-hero-detail.component.css']
})
export class AppHeroDetailComponent implements OnInit {

  @Input() hero: any; @Output() notify: EventEmitter<any> = new EventEmitter<any>();

  data = [
    {id: 100, name: 'new_name'}
  ]

  constructor() {}

  ngOnInit() {
  }


  editData() {
    this.notify.emit(this.data);
  }

  changeComp() {
    alert('routing');
  }

}
