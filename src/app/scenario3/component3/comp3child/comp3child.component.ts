import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-comp3child',
  templateUrl: './comp3child.component.html',
  styleUrls: ['./comp3child.component.css']
})
export class Comp3childComponent implements OnInit {

  //input is used here as it should get te data input from the parent component//
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
}
