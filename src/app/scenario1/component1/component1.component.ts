import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component1',
  templateUrl: './component1.component.html',
  styleUrls: ['./component1.component.css']
})
export class Component1Component implements OnInit {
 
  constructor() { }
  ngOnInit() { }

  public name = "codevolution";
  //  onclick method for button
  onClick(value)
  {
  console.log(value) //to get the output displayed in the console
  }
}
