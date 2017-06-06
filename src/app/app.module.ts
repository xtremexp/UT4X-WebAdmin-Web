import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { InstanceComponent } from './instance/instance.component';
import { HttpModule, JsonpModule } from '@angular/http';
import {InstanceDataService} from "./instance-data.service";
import {NgbModule, NgbTabsetModule} from '@ng-bootstrap/ng-bootstrap';
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {
  MdButtonModule, MdCardModule, MdCheckboxModule,
  MdDatepickerModule
} from "@angular/material";
import { GameinfoComponent } from './gameinfo/gameinfo.component';

@NgModule({
  declarations: [
    AppComponent,
    InstanceComponent,
    GameinfoComponent
  ],
  imports: [
    BrowserModule,
    HttpModule,
    JsonpModule,
    BrowserAnimationsModule,
    NgbModule.forRoot(),
    NgbModule,
    NgbTabsetModule,
    MdButtonModule,
    MdCardModule,
    MdCheckboxModule,
    MdDatepickerModule
  ],
  providers: [InstanceDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }
