import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-demopipe',
  templateUrl: './demopipe.component.html',
  styleUrls: ['./demopipe.component.css']
})
export class DemopipeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }
title="gadgeon";
user={
  id:100,
  name:"Nikhil",
  DOB:'13/11/2001',
  salary:29000

}
today=Date();
}
