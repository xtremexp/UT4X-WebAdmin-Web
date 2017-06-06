import { Component, OnInit } from '@angular/core';
import {InstanceDataService} from "../instance-data.service";
import {GameInfo} from "../GameInfo";

@Component({
  selector: 'app-instance',
  templateUrl: './instance.component.html',
  styleUrls: ['./instance.component.css']
})
export class InstanceComponent implements OnInit {

  errorMessage: string;
  gameinfo: GameInfo;

  constructor(private instanceDataService:InstanceDataService) { }

  getGameInfo(){
    this.instanceDataService.getInstanceInfo(8080).subscribe(
      GameInfo => this.gameinfo = GameInfo,
      error =>  this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getGameInfo();
  }

}
