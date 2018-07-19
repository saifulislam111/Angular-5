import { Component, OnInit } from '@angular/core';
import {Observable} from 'rxjs';

@Component({
  selector: 'app-observable',
  templateUrl: './observable.component.html',
  styleUrls: ['./observable.component.css']
})
export class ObservableComponent implements OnInit {

  private anyErrors: boolean;
  private finished: boolean;

  private data: Observable<any>;
  private values: Array<any> = [];

  constructor() { }

  ngOnInit() {
  }

  init() {
    this.data = new Observable<any>(observer =>{
      setTimeout(() =>{
        observer.next('1 sec');
      }, 1000);
      setTimeout(()=>{
        observer.next('2 sec')
      }, 2000);
      setTimeout(()=>{
        observer.next('3 sec')
      }, 3000);
      setTimeout(()=>{
        observer.next('4 sec')
      }, 4000);
      setTimeout(()=>{
        observer.next('5 sec')
      }, 5000);
      setTimeout(()=>{
        observer.next(this.sum(5))
      }, 5000);
    });

    let subscriber = this.data.subscribe(
      value => {this.values.push(value)},
      error => {this.anyErrors = true},
      () => {this.finished = true}
    );

  }

  sum(a) {
    return 'Total time estimated : ' + a + ' sec';
  }




}
