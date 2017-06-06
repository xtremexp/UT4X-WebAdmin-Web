import { Component, OnInit } from '@angular/core';
import {GameInfo} from "../GameInfo";
import {InstanceDataService} from "../instance-data.service";

@Component({
  selector: 'app-gameinfo',
  templateUrl: './gameinfo.component.html',
  styleUrls: ['./gameinfo.component.css']
})
export class GameinfoComponent implements OnInit {

  errorMessage: string;
  gameinfo: GameInfo;

  constructor(private instanceDataService:InstanceDataService) {
    this.gameinfo = new GameInfo(); // need instantiate until service get data else will generate errors
  }

  getGameInfo(){
    this.instanceDataService.getInstanceInfo(8080).do(v => console.log(v)).subscribe(
      GameInfo => this.gameinfo = GameInfo,
      error =>  this.errorMessage = <any>error
    );
  }

  ngOnInit() {
    this.getGameInfo();
  }

}
