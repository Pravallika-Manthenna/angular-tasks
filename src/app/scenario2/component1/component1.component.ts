import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-scenario2',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Scenario2Component implements OnInit {

  public name = ""; //without giving the name here as the user types te name it gets displayed there 
  constructor() { }

  ngOnInit() { }
}
