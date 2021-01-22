import { Component } from '@angular/core';
import { Game } from "./game.model";
import { Player } from "./player.model";

@Component({
  selector: 'app-chinees-poepen',
  templateUrl: './chinees-poepen.component.html',
  styleUrls: ['./chinees-poepen.component.scss']
})
export class ChineesPoepenComponent {
  public displayGameConfig = false;
  public displayPlayerInfoConfig = false;
  public displayDealerScreen = true;
  public displayPrediction = false;
  public displayEndOfRound = false;
  public displayRoundOverview = false;
  public displayEndGame = false;
  public gameStarted = false;
  public playerCount = 2;
  public playerIndex = 0;
  public game: Game;
  private playerNameInput: HTMLInputElement;
  public prediction = 0;
  public playersWithPredictionCounter = 0;
  public actual: number;
  public impossiblePrediction: number;

  newGame() {
    this.displayGameConfig = true;
    this.displayPlayerInfoConfig = false;
    this.displayDealerScreen = true;
    this.displayPrediction = false;
    this.displayEndOfRound = false;
    this.displayRoundOverview = false;
    this.displayEndGame = false;
    this.gameStarted = false;
    this.game = null;
    this.prediction = 0;
    this.playersWithPredictionCounter = 0;
    this.actual = null;
    this.impossiblePrediction = null;
    this.playerIndex = 0
    this.playerCount = 2;
  }

  createGame() {
    this.game = {
      playerCount: this.playerCount,
      players: [],
      currentRound: 1,
      amountOfCardsForRound: 1,
    }

    this.displayGameConfig = false;
    this.displayPlayerInfoConfig = true;
  }

  addPlayerToGame(player: Player) {
    this.playerNameInput = document.getElementById('player-name-input') as HTMLInputElement;
    this.playerNameInput.value = '';
    this.playerNameInput.focus();
    if (this.game.players.length === 0) this.game.currentDealer = player;
    this.game.players.push(player);

    this.playerIndex++;

    if (this.playerIndex == this.playerCount) {
      this.displayPlayerInfoConfig = false;
      this.gameStarted = true;
      this.playerIndex = 0;
    }
  }

  goToPredictions() {
    this.displayDealerScreen = false;
    this.displayPrediction = true;
    const indexOfDealer = this.game.players.findIndex(player => this.game.currentDealer === player);
    this.playerIndex = indexOfDealer + 1 === this.game.playerCount ? 0 : indexOfDealer + 1;
  }

  addPredictionToPlayer(prediction: number) {
    this.game.players[this.playerIndex].prediction = prediction;
    this.playersWithPredictionCounter++;

    if (this.playersWithPredictionCounter === this.game.playerCount) {
      this.playersWithPredictionCounter = 0;
      this.displayPrediction = false;
    } else {
      this.prediction = 0;
      this.game.players[this.playerIndex + 1] ? this.playerIndex++ : this.playerIndex = 0;
      if (this.playersWithPredictionCounter + 1 === this.game.playerCount) {
        this.prediction = this.determinePredictionPossibilitiesForLastPlayer();
      }
    }
  }

  addScoreForPlayer(playerIndex: number, actual: number) {
    let score;
    if (this.game.players[playerIndex].prediction === actual) {
      score = 10 + (actual * 2);
    } else {
      if (actual > this.game.players[playerIndex].prediction) {
        score = (this.game.players[playerIndex].prediction - actual) * 2;
      } else {
        score = (actual - this.game.players[playerIndex].prediction) * 2;
      }
    }
    this.game.players[playerIndex].totalScore ? this.game.players[playerIndex].totalScore += score : this.game.players[playerIndex].totalScore = score;
    this.game.players[playerIndex].scoreForRound = score

    if (this.playerIndex + 1 === this.game.playerCount) {
      this.displayEndOfRound = false;
      this.displayRoundOverview = true;
      this.prediction = 0;
    } else {
      this.playerIndex++;
      this.actual = this.game.players[this.playerIndex].prediction;
    }
  }

  endRound() {
    this.displayEndOfRound = true;
    this.playerIndex = 0;
    this.actual = this.game.players[this.playerIndex].prediction;
    this.impossiblePrediction = undefined;
  }

  startNextRound() {
    this.game.currentRound++;
    if (this.game.currentRound > 7) {
      this.game.amountOfCardsForRound--;
    } else {
      this.game.amountOfCardsForRound++;
    }
    const indexOfOldDealer = this.game.players.findIndex(player => this.game.currentDealer === player)
    this.game.currentDealer = this.game.players[indexOfOldDealer + 1] || this.game.players[0];
    const indexOfNewDealer = this.game.players.findIndex(player => this.game.currentDealer === player)
    this.playerIndex = indexOfNewDealer + 1 > this.game.playerCount ? 0 : indexOfNewDealer + 1;
    this.displayDealerScreen = true;
    this.displayRoundOverview = false;
    this.game.players.forEach(player => {
      player.prediction = undefined;
    })
  }

  endGame() {
    this.displayEndGame = true;
    this.game.players.sort((a, b) => b.totalScore - a.totalScore);
    this.playerIndex = 0;
  }

  private determinePredictionPossibilitiesForLastPlayer(): number {
    let penultimateTotal = 0;
    this.game.players.forEach(player => {
      if (player.prediction) penultimateTotal += player.prediction;
    })
    if (penultimateTotal <= this.game.amountOfCardsForRound) {
      this.impossiblePrediction = this.game.amountOfCardsForRound - penultimateTotal;
      if (this.prediction === this.impossiblePrediction) {
        if (this.prediction + 1 > this.game.amountOfCardsForRound) {
          return this.prediction - 1;
        } else if (this.prediction < 0) {
          return 0;
        } else {
          return this.prediction + 1;
        }
      } else {
        return this.prediction;
      }
    } else {
      return this.prediction;
    }
  }
}
