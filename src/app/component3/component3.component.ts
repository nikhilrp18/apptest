import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info-service';

@Component({
  selector: 'app-component3',
  templateUrl: './component3.component.html',
  styleUrls: ['./component3.component.css']
})
export class Component3Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title=" Shahana";
  clickme(){
    const service = new MyService();
    service.onclick(this.title);
  }


}
