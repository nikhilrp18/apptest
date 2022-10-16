import { Component, OnInit } from '@angular/core';
import { MyService } from '../Service/info-service';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title=" Yasir";
  clickme(){
    const service = new MyService();
    service.onclick(this.title);
  }


}
