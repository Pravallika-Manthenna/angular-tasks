import { Component, OnInit, Output ,EventEmitter} from '@angular/core';

@Component({
  selector: 'app-comp-parent5',
  templateUrl: './comp-parent5.component.html',
  styleUrls: ['./comp-parent5.component.css']
})
export class CompParent5Component implements OnInit {

   //output and childEvent event emitter is used
  @Output() public childEvent1 = new EventEmitter();
  constructor() { }

  ngOnInit() {
  }
  //event method
  dipslay(message){
    this.childEvent1.emit(message);
}
}
