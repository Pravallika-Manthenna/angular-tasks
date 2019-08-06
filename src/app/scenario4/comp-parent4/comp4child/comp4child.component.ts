import { Component, OnInit, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-comp4child',
  templateUrl: './comp4child.component.html',
  styleUrls: ['./comp4child.component.css']
})
export class Comp4childComponent implements OnInit {

  //output and childEvent event emitter is used
 @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  
  //event method //
  fireEvent(name){
    this.childEvent.emit(name);
  }

}
