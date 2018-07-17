import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
// import { AppRoutingModule } from './/app-routing.module';
import { Routes, RouterModule } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatCardModule, MatIconModule, MatToolbarModule, MatButtonModule, MatFormFieldModule, MatInputModule, MatAutocompleteModule } from '@angular/material';
import { FlexLayoutModule } from '@angular/flex-layout';



import { AppComponent } from './app.component';
import {ServerComponent} from "./server/server.component";
import { ServersComponent } from './servers/servers.component';
import { ListComponent } from './list/list.component';
import { AppHeroDetailComponent } from './app-hero-detail/app-hero-detail.component';
import { FlexLayoutComponent } from './flex-layout/flex-layout.component';
import { ReactiveFormComponent } from './reactive-form/reactive-form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { MockServiceComponent } from './mock-service/mock-service.component';
import { ParentComponent } from './parent/parent.component';
import { ChildComponent } from './child/child.component';


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
  },
  {
    path: 'list',
    component: ListComponent,
    pathMatch: 'full'
  },
  {
    path: 'parent',
    component: ParentComponent,
    pathMatch: 'full'
  }
];


@NgModule({
  declarations: [
    AppComponent,
    ServerComponent,
    ServersComponent,
    ListComponent,
    AppHeroDetailComponent,
    FlexLayoutComponent,
    ReactiveFormComponent,
    MockServiceComponent,
    ParentComponent,
    ChildComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    // AppRoutingModule,
    RouterModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatIconModule,
    MatToolbarModule,
    MatButtonModule,
    MatFormFieldModule,
    MatInputModule,
    MatAutocompleteModule,
    FlexLayoutModule,
    ReactiveFormsModule,
    RouterModule.forRoot(
      routes,
      { enableTracing: true } // <-- debugging purposes only
    )
  ],

  ],
  providers: [],
  bootstrap: [AppComponent],

})




export class AppModule { }
