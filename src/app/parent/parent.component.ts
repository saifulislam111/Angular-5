import { Component, OnInit } from '@angular/core';
import { ChildInterface } from '../child/child.interface';
import {ParentService} from './parent.service';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.css']
})
export class ParentComponent implements OnInit {

  local: any;
  new_person: any = [];

  constructor(private parentService: ParentService ) { }

  ngOnInit() {


    if(!localStorage.getItem('data')){
      let data = [];
      this.new_person.push(data);
      localStorage.setItem('data', JSON.stringify(data));
    }else{
      this.local = localStorage.getItem('data')
      this.new_person = JSON.parse(this.local);
    }

  }

  addData() {
    let newData = {
      id: 4,
      name: 'saiful',
      address: 'Hobiganj'
    }
    this.new_person.push(newData);
    localStorage.setItem('data', JSON.stringify(this.new_person));
  }

  deleteData() {
    this.parentService.addData();
  }


}
