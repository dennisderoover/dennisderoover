import { Player } from "./player.model";

export interface Game {
  id?: number;
  playerCount?: number;
  players?: Player[];
  currentDealer?: Player;
  currentRound: number;
  amountOfCardsForRound: number;
}
