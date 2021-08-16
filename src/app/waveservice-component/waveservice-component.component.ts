import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import WaveSurfer = require('wavesurfer.js');

@Component({
  selector: 'app-waveservice-component',
  templateUrl: './waveservice-component.component.html',
  styleUrls: ['./waveservice-component.component.css'],
  providers: [WaveService]
})
export class WaveserviceComponentComponent implements AfterViewInit, OnDestroy {
  wave: WaveSurfer;

  constructor(public waveService: WaveService) {}

  ngAfterViewInit(): void {
    this.wave = this.waveService.create({
      container: '#multiplayer1'
    });
    this.wave.load(
      '//www.kennethcaple.com/api/mp3/richinlovemutedguitarechoing.mp3'
    );
  }

  ngOnDestroy() {
    this.wave.destroy();
  }
}
