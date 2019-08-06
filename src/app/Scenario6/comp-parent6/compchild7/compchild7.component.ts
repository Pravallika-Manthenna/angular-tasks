import { Component, OnInit,Input } from '@angular/core';

@Component({
  selector: 'app-compchild7',
  templateUrl: './compchild7.component.html',
  styleUrls: ['./compchild7.component.css']
})
export class Compchild7Component implements OnInit {

  //input is used here as it should get te data input from the parent component//
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
}
