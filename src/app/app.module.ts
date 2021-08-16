import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { AngularWavesurferServiceModule } from 'angular-wavesurfer-service';
import { BaseTemplateComponent } from './base-template/base-template.component';
import { MultiplePlayersComponent } from './multiple-players/multiple-players.component';

@NgModule({
  imports: [BrowserModule, FormsModule, AngularWavesurferServiceModule],
  declarations: [AppComponent, BaseTemplateComponent, MultiplePlayersComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
