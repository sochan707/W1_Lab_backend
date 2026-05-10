import { Duration } from "./Duration.js";
/**
 * This class handle a single race time for a given particicpant and sport type
 */
export class RaceResult {

       // TODO
     /**
      * Participant ID
      * @type {string}
      * @private
      */
     participant_id 

     /**
      * Sport type
      * @type {string}
      */
     sport_type 

     /**
      * Duration
      * @type {Duration}
      * @private
      */
     duration

     /**
     * @param {string} id - Participant's ID
     * @param {string} sport - Type of sport
     * @param {Duration} duration - Duration of the race
     */

     constructor(id, sport, duration){
          this.participant_id = id;
          this.sport_type = sport;
          this.duration = duration;
     }

     /** list of race resule
      * @type {RacResults[]}
      * @static
       */
     static RaceResults = [];
  }
