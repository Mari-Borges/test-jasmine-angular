import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { LikeWidgetModule } from './shared/components/like-widget/like-widget.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    LikeWidgetModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
