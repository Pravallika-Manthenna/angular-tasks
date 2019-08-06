import { Component, OnInit ,Input} from '@angular/core';

@Component({
  selector: 'app-compchild6',
  templateUrl: './compchild6.component.html',
  styleUrls: ['./compchild6.component.css']
})
export class Compchild6Component implements OnInit {

//input is used here as it should get te data input from the parent component//
  @Input() public parentData;
  constructor() { }

  ngOnInit() {
  }
}

