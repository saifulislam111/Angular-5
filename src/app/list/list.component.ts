import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  selectedHero:any;


  obj = {
    firstname: "saiful",
    lastname: "islam",
    age: 24,
    address: "Dhaka"
  };

  list = [
    {name: "Saiful", id: 1},
    {name: "Emran", id: 2},
    {name: "Gugly", id: 3},
    {name: "NJ", id: 4}
  ]

  constructor() { }

  ngOnInit() {
  }


  onSelect(element){

    this.selectedHero = element;

  }

}
