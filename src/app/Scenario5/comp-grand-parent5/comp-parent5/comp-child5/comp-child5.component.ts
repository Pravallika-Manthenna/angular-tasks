import { Component, OnInit,Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-comp-child5',
  templateUrl: './comp-child5.component.html',
  styleUrls: ['./comp-child5.component.css']
})
export class CompChild5Component implements OnInit {

  //output and childEvent event emitter is used
  @Output() public childEvent = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  //event method
  fireEvent(name){
    this.childEvent.emit(name);
  }
}
