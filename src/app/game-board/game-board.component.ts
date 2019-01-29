import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-game-board',
  templateUrl: './game-board.component.html',
  styleUrls: ['./game-board.component.css']
})
export class GameBoardComponent implements OnInit {

  cards: string[] = [
    "fa-diamond",
    "fa-diamond",
    "fa-paper-plane-o",
    "fa-paper-plane-o",
    "fa-anchor",
    "fa-anchor",
    "fa-bolt",
    "fa-bolt",
    "fa-cube",
    "fa-cube",
    "fa-leaf",
    "fa-leaf",
    "fa-bicycle",
    "fa-bicycle",
    "fa-bomb",
    "fa-bomb"
];

shuffle(array: string[]){
  let j = 0;
  let temp = "";
  for(let i in array){
      j = Math.floor( Math.random() * (+i) );
      temp = array[i];
      array[i] = array[j];
      array[j] = temp;
  }
  return array;
}

  constructor() { }

  ngOnInit() {
    this.cards = this.shuffle(this.cards);
  }



}
