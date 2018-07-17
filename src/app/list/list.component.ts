import { Component, OnInit } from '@angular/core';
import {heroes} from '../data-model';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],
})
export class ListComponent implements OnInit {

  selectedHero: any;

  title = 'Flex Layout App'


  obj = {
    firstname: 'saiful',
    lastname: 'islam',
    age: 24,
    address: 'Dhaka'
  };

  list = [
    {name: 'Saiful', id: 1},
    {name: 'Emran', id: 2},
    {name: 'Gugly', id: 3},
    {name: 'NJ', id: 4}
  ];
  data = heroes;

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

  constructor() { }

  ngOnInit() {
  }


  onSelect(element) {

    this.selectedHero = element;

  }

  onNotify(message:any):void {
    // alert(message);
    this.data = message;
  }



}
