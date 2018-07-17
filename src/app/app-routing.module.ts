import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import {AppComponent} from './app.component';
import {FlexLayoutComponent} from './flex-layout/flex-layout.component';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: []
})

const routes: Routes = [
  {
    path: '',
    component: AppComponent,
    pathMatch: 'full'
  },
  {
    path: 'flex',
    component: FlexLayoutComponent,
    pathMatch: 'full'
  }
];

export class AppRoutingModule {
}
