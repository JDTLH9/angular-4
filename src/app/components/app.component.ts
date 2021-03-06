import { Component } from '@angular/core';
import { MyService } from '../services/my-service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
  providers: [MyService]
})
export class AppComponent {
  title = 'app';
  myNumber: number;
  myText: string;

  constructor(private myService: MyService){
    this.myNumber = this.myService.ReturnEnumValue();

    this.myText = this.myService.MyText;
  }
}
