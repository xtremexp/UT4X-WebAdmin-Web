import {Player} from "./Player";
import {Map} from "./Map";
/**
 * Created by Hyperion on 04/06/2017.
 */
export class GameInstance {

  InstancePort:number;
  IsDataFromDedi:boolean;
  bPrivateMatch:boolean;
  bRankLocked:boolean;
  NumPlayers:number;
  NumSpectators:number;
  MaxPlayers:number;
  ServerInstanceGUID:string;
  ServerName:string;
  ServerMOTD:string;
  CurrentState:string;
  TimeLimit:number;
  GoalScore:number;
  ElapsedTime:number;
  HasMatchStarted:boolean;
  HasMatchEnded:boolean;
  bTeamGame:boolean;
  MatchState:string;

  // Player
  Players:Player[];

  Map:Map;

  MapList:Map[];
}
