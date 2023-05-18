import { Component, OnInit, ViewEncapsulation } from '@angular/core';

const X: any = 1;
const Y: any = 2;
const NOBODY: any = 0;

@Component({
  selector: 'app-grid',
  templateUrl: './grid.component.html',
  styleUrls: ['./grid.component.css'],
  encapsulation: ViewEncapsulation.None,
})
export class GridComponent implements OnInit {
  grid: any[] = [];
  currentPlayer = X;
  winner: any = NOBODY;
  constructor() {}

  ngOnInit() {
    this.intializeTheGame();
  }

  intializeTheGame() {
    this.grid = Array(9).fill(null);
    this.currentPlayer = X;
    this.winner = NOBODY;
  }

  get player() {
    return this.currentPlayer === X ? 'X' : 'O';
  }

  togglePayer() {
    if (this.currentPlayer === X) {
      this.currentPlayer = Y;
    } else if (this.currentPlayer === Y) {
      this.currentPlayer = X;
    }
  }

  handleMove(idx: number) {
    console.log('hello world');
    if (!this.grid[idx]) {
      this.grid.splice(idx, 1, this.player);
      this.togglePayer();
    }
    this.winner = this.calculateWinner();
  }

  calculateWinner() {
    const winningCombinations = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let i = 0; i <= winningCombinations.length; i++) {
      const [a, b, c] = winningCombinations[i];

      if (
        this.grid[a] &&
        this.grid[a] === this.grid[b] &&
        this.grid[a] === this.grid[c]
      ) {
        return this.grid[a];
      }

      return null;
    }
  }

  resetGame() {
    this.intializeTheGame();
  }
}
