import { Component } from '@angular/core';
import {environment} from '../environments/environment'

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  enviormentName="test";
  production = false;

  constructor(){
     this.enviormentName = environment.enviormentName;
     this.production = environment.production;
  }
 
}
