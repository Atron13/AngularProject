import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Appcomponent-demo';
  firstName:String="Atharva";
  lastName:String="Ayati";
  address:String="Pune";
  phoneNumber:String="12345678";
}
