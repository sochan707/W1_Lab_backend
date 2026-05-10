
import { Duration } from "../model/Duration.js";
import { RaceResult } from "../model/RaceResult.js";
import { readFileSync, writeFile, writeFileSync } from "fs";


/**
 * This class handle the race results management system.
 */
export class RaceResultsService {
  /**
   * The list of race results.
   * @type {Array<RaceResult>}
   * @private
   */
  _raceResults = [];

  get raceResults() {
    return this._raceResults;
  }

  /**
   * Adds a new race result to the race list.
   * @param {RaceResult} result - The prace result.
   */
  addRaceResult(result) {
    // TODO
    this._raceResults.push(result);
    return this.raceResults
  }

  /**
   * Saves the race results list to a JSON file.
   * @param {string} filePath - The path to the file where data should be saved.
   */
  saveToFile(filePath) {
    // TODO
    const jsonData = JSON.stringify(this.raceResults, null, 2);
    writeFileSync(filePath, jsonData)
    console.log("Saved");
  }

  /**
   * Loads the race results list from a JSON file.
   * @param {string} filePath - The path to the file to load data from.
   * @returns {boolean} True if loading was successful, false otherwise.
   */
  loadFromFile(filePath) {
    // TODO
    const data = readFileSync(filePath, "utf-8");
    const resultData = JSON.parse(data);
    console.log(resultData);
    
    this._raceResults = resultData.map((result) => {
      return new RaceResult(
        result.participant_id,
        result.sport_type,
        new Duration(result.duration._totalSeconds)
      );
    });

    return true;
  }

  /**
   * Retrieves the race time for a given participant and sport.
   * @param {string} participantId - Participant ID.
   * @param {string} sport - Sport name.
   * @returns {Duration|null} Duration if found, else null.
   */
  getTimeForParticipant(participantId, sport) {
    const raceResult = this.raceResults.find((result) =>
      result.participant_id === participantId &&
      result.sport_type === sport
    );

    if (!raceResult) {
      return null;
    }

    return raceResult.duration;
  }

  /**
   * Computes the total time for a given participant by summing their race times.
   * @param {string} participantId - The ID of the participant.
   * @returns {Duration|null} The total Duration object if found, otherwise null.
   */
  getTotalTimeForParticipant(participantId) {
    const filteredParticipant = this.raceResults.filter((result) =>
      result.participant_id === participantId
    );

    if (filteredParticipant.length === 0) {
      return null;
    }

    let totalSeconds = 0;

    filteredParticipant.forEach((result) => {
      totalSeconds += result.duration._totalSeconds;
    });

    return new Duration(totalSeconds);
  }
}
