import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { BlockComponent } from './block/block.component';
import { GridComponent } from './grid/grid.component';

@NgModule({
  imports: [BrowserModule, FormsModule],
  declarations: [AppComponent, BlockComponent, GridComponent],
  bootstrap: [AppComponent],
})
export class AppModule {}
