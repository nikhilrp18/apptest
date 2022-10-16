import { Component, OnInit } from '@angular/core';
import { Title } from '@angular/platform-browser';
import { MyService } from '../Service/info-service';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
  title=" Nikhil";
  clickme(){
    const service = new MyService();
    service.onclick(this.title);
  }

}
