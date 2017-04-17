import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { RootComponent } from './app.component';
import { DropDownService } from './service/drop-down.service';
import { CapitalPipe } from './capital.pipe';
import { SearchPipe } from './search.pipe';
import { ViewComponent } from './view/view.component';
import { RoutesProvider } from './app.routes';

@NgModule({
  declarations: [
    RootComponent,
    CapitalPipe,
    SearchPipe,
    ViewComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    RoutesProvider
  ],
  providers: [DropDownService],
  bootstrap: [RootComponent]
})
export class AppModule { }
