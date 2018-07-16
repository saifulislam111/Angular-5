import {Component, OnInit, Input, EventEmitter, Output} from '@angular/core';
import {MockServiceComponent} from '../mock-service/mock-service.component';

@Component({
  selector: 'app-flex-layout',
  templateUrl: './flex-layout.component.html',
  styleUrls: ['./flex-layout.component.css']
})
export class FlexLayoutComponent implements OnInit {

  // notify: EventEmitter<any> = new EventEmitter<any>();

  title = 'Flex Layout';
  input = '';
  id: any;
  selectedImage: any;



  data = {
  'imageID' : 123,
  'imageCaption': 'AasdfasdfSDF'
  };

  pictures = [
    {id: 1, caption: '1st image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'},
    {id: 2, caption: '2nd image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'},
    {id: 3, caption: '3rd image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'},
    {id: 4, caption: '4th image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'},
    {id: 5, caption: '5th image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/U9PP3KXXY2.jpg'},
    {id: 6, caption: '6th image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/R926LU1YEA.jpg'},
    {id: 7, caption: '7th image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/LTLE4QGRVQ.jpg'},
    {id: 8, caption: '8th image', img: 'https://d2lm6fxwu08ot6.cloudfront.net/img-thumbs/960w/8V46UZCS0V.jpg'}
  ];



  constructor() {}

  ngOnInit() {
  }



  openPicture(picture) {
    window.open(picture.img);
  }

  deletePicture(picture) {
    alert('delete');
  }

  // addClick() {
  //   // this.notify.emit('message from parent');
  //   this.notify.emit(this.data);
  // }

  addClick(picture) {
    this.selectedImage = picture;
  }


}
