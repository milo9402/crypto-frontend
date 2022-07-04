import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { TableComponent } from './table/table.component';
import { RowComponent } from './row/row.component';
import { DialogComponent } from './dialog/dialog.component';
import { CardComponent } from './card/card.component';

@NgModule({
  declarations: [
    AppComponent,
    TableComponent,
    RowComponent,
    DialogComponent,
    CardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
