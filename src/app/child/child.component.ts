import {Component, Input, OnInit, Inject} from '@angular/core';
import {ChildInterface} from './child.interface';
import {FormControl, Validators} from '@angular/forms';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {

  @Input() parent: any;
  index: any;
  add_new_person = false;
  new_person: any = [];
  new_person_deleted: any = [];
  deleted_person = false;
  open_form = false;


  id = new FormControl();
  name = new FormControl();
  address = new FormControl();

  constructor(@Inject('ChildInterface') private ChildInterface) {
  }
  // constructor() { }

  ngOnInit() {
    this.open_form = false;
  }

  addData() {
    let newData = {
      id: 4,
      name: 'saiful',
      address: 'Hobiganj'
    }
    let x = this.ChildInterface.addData(newData)
    console.log(x);
    this.new_person = x;
    this.add_new_person = true;
  }

  addDataFromform() {
    this.open_form = true;
  }

  deleteData(person) {
    if (this.new_person.length === 0){
      this.index = this.parent.indexOf(person)
    }
    else {
      this.index = this.new_person.indexOf(person)
    }
    let x = this.ChildInterface.deleteData(this.index);
    alert(x.length);
    this.new_person_deleted = x;
    this.deleted_person = true;
  }

  editData(person) {
    alert('edit');
  }

  closeForm() {
    this.open_form = false;
  }

  saveForm() {
    console.log(this.id.value, this.name.value, this.address.value);
    let newData = {
      id: this.id.value,
      name: this.name.value,
      address: this.address.value
    }
    let x = this.ChildInterface.addData(newData)
    console.log(x);
    this.new_person = x;
    this.add_new_person = true;
    this.open_form = false;
  }

}



