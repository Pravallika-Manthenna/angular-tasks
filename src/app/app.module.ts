import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { Component1Component } from './scenario1/component1/component1.component';
import { Scenario2Component } from './scenario2/component1/component1.component';
import { Component3Component } from './scenario3/component3/component3.component';
import { Component4Component } from './scenario3/component4/component4.component';
import { Comp3childComponent } from './scenario3/component3/comp3child/comp3child.component';
import { CompParent4Component } from './scenario4/comp-parent4/comp-parent4.component';
import { Comp4childComponent } from './scenario4/comp-parent4/comp4child/comp4child.component';
import { CompGrandParent5Component } from './Scenario5/comp-grand-parent5/comp-grand-parent5.component';
import { CompParent5Component } from './Scenario5/comp-grand-parent5/comp-parent5/comp-parent5.component';
import { CompChild5Component } from './Scenario5/comp-grand-parent5/comp-parent5/comp-child5/comp-child5.component';
import { CompParent6Component } from './Scenario6/comp-parent6/comp-parent6.component';
import { Compchild6Component } from './Scenario6/comp-parent6/compchild6/compchild6.component';
import { Compchild7Component } from './Scenario6/comp-parent6/compchild7/compchild7.component';


@NgModule({
  declarations: [
    AppComponent,
    Component1Component,
    Scenario2Component,
    Component3Component,
    Component4Component,
    Comp3childComponent,
    CompParent4Component,
    Comp4childComponent,
    CompGrandParent5Component,
    CompParent5Component,
    CompChild5Component,
    CompParent6Component,
    Compchild6Component,
    Compchild7Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
