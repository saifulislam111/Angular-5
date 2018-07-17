import { Injectable } from '@angular/core';
import {ChildInterface} from '../child/child.interface';

@Injectable({
  providedIn: 'root'
})
export class ParentService implements ChildInterface {

  constructor() { }

  addData() {
    alert('message from service');
  }
}
