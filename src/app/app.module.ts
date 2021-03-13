import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CourseComponent } from './course.component';
import { RouterModule } from '@angular/router';
import {FormsModule} from '@angular/forms';


@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot([
      {path: 'crisis-list', component: CourseComponent},
    ]),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
//decorator function called ngmodule that convert plain typescript class to a module in agular point of view
//all component and the metadata is included in the ngmodule
//import export is used to provide class scope to the application
export class AppModule { }
