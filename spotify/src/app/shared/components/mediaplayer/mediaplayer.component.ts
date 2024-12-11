import { Component, OnInit } from '@angular/core';
import { TrackModel } from '@core/models/tracks.model';

@Component({
  selector: 'app-mediaplayer',
  templateUrl: './mediaplayer.component.html',
  styleUrl: './mediaplayer.component.css'
})
export class MediaplayerComponent implements OnInit {
  mockCover: TrackModel = {
    cover: '',
    album: '',
    name: '',
    url: '',
    _id: ''
  }

  ngOnInit(): void {
    
  }
}
