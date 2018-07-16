import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'app-mock-service',
  templateUrl: './mock-service.component.html',
  styleUrls: ['./mock-service.component.css']
})
export class MockServiceComponent implements OnInit {


  // @Input() image: any; notify: EventEmitter<string> = new EventEmitter<string>();
  @Input() image: any;
  // @Input() image: EventEmitter<any>;

  // imageID ;
  // imageCaption ;
  // imageDetails: any;
  // x = 0;

  constructor() { }

  ngOnInit() {

    // this.image.subscribe((data) => {
    //   console.log(data);
    //     this.imageID = data.imageID;
    //     this.imageCaption = data.imageCaption;
    //
    // }
  }

  // service_addClick(data?: any) {
  //   alert("zzzzzzzzzzzz");
  //   this.imageID = 20;
  //   this.imageCaption = 'astttttttdf';
  // }



}
