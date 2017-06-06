/**
 * Created by Hyperion on 04/06/2017.
 */
export class Map {
  Author:string;
  /**
   * E.G: "/Game/EpicInternal/Pistola/CTF-Pistola"
   */
  MapPackageName:string;

  /**
   * E.G: CTF-Pistola
   */
  MapAssetName:string;
  Title:string;
  Description:string;
  OptimalPlayerCount:number;
  OptimalTeamPlayerCount:number;
  /**
   * E.G: "/Game/EpicInternal/Pistola/Textures/LevelShot/Shot_Pistola.Shot_Pistola"
   */
  MapScreenShotReference:string;
  MapFileSize:string;

}
