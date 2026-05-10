import { RaceResultsService } from "./service/RaceResultsService.js";
// import {raceScores} from "./data/raceScores.json"

// Initialize RaceResults
const raceResultService = new RaceResultsService();

// Load results from file
// raceResultService.loadFromFile("./race-scores/data/raceScores.json"); // there's no race-scores folder

raceResultService.loadFromFile("./data/raceScores.json");

// Print the resuts
// console.log(raceResultService.raceResults);
console.log(raceResultService.getTimeForParticipant("participant1", "swim").toString());

console.log(raceResultService.getTotalTimeForParticipant("participant1").toString());