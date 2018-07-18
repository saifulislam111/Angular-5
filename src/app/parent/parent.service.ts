import { Injectable } from '@angular/core';
import {ChildInterface} from '../child/child.interface';


@Injectable({
  providedIn: 'root'
})
export class ParentService implements ChildInterface {

  local: any;
  // new_person: any = [];
  new_person: any = JSON.parse(localStorage.getItem('data'));

  constructor() { }

  addData(data) {
    alert('message from service');

    if(!localStorage.getItem('data')){
      // let data = [];
      // this.new_person.push(data);
      localStorage.setItem('data', JSON.stringify(data));
      this.new_person.push(data);
    }else{
      // this.local = localStorage.getItem('data')
      // this.new_person = JSON.parse(this.local);
      this.new_person.push(data);
      localStorage.setItem('data', JSON.stringify(this.new_person));
    }

    return this.new_person;
  }

  deleteData(index) {
    alert(this.new_person.length);
    this.new_person.splice(index, 1);
    alert('new length' + this.new_person.length)
    localStorage.setItem('data', JSON.stringify(this.new_person));
    return this.new_person;
  }


}

