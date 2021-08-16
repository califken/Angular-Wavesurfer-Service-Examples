import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import WaveSurfer = require('wavesurfer.js');

@Component({
  selector: 'app-multiple-players',
  templateUrl: './multiple-players.component.html',
  styleUrls: ['./multiple-players.component.css']
})
export class MultiplePlayersComponent implements AfterViewInit, OnDestroy {
  wave: WaveSurfer;

  constructor(public waveService: WaveService) {}

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: '#waveservice'
    });
    this.wave.load(
      '//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'
    );
  }

  ngOnDestroy() {
    this.wave.destroy();
  }
}
