import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { GameBoardComponent } from './game-board/game-board.component';
import { ClockComponent } from './header/clock/clock.component';
import { TileComponent } from './game-board/tile/tile.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    GameBoardComponent,
    ClockComponent,
    TileComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
