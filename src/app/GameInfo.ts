import {GameInstance} from "./GameInstance";
/**
 * Created by Hyperion on 04/06/2017.
 */
export class GameInfo {

  /**
   * If true means this data comes from lobby parent server
   * else from dedi server or server instanced by lobby
   */
  IsLobbyServer:boolean;
  IsPassworded:boolean;
  /**
   * Total number of players for all instanced servers
   * or for dedi server
   */
  NumPlayers:number;
  /**
   * Total num matchs
   * ALways 1 for dedi else 0-n for lobby
   */
  NumMatches:number;

  /**
   * Games instances.
   * Array of one instance for dedi
   * else many for lobby
   */
  GameInstances:GameInstance[];

}
