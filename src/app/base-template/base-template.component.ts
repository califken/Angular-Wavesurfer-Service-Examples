import { Component, AfterViewInit, OnDestroy } from '@angular/core';
import { WaveService } from 'angular-wavesurfer-service';
import WaveSurfer = require('wavesurfer.js');

@Component({
  selector: 'app-base-template',
  templateUrl: './base-template.component.html',
  styleUrls: ['./base-template.component.css'],
  providers: [WaveService]
})
export class BaseTemplateComponent implements AfterViewInit, OnDestroy {
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
