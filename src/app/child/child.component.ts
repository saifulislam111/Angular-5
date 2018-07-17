import {Component, Input, OnInit, Inject} from '@angular/core';
import {ChildInterface} from './child.interface';
import {ParentService} from '../parent/parent.service';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css'],
  providers: [
    { provide: ChildInterface, useClass: ParentService }
  ]
})
export class ChildComponent implements OnInit {

  @Input() parent: any;

  constructor(@Inject('ChildInterface') private ChildInterface) { }

  ngOnInit() {
  }

  addData() {
    // alert('add');
    this.ChildInterface.addData();
  }
  deleteData() {
    alert('delete');
  }

}



