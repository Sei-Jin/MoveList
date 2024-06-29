import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-video-player',
  standalone: true,
  imports: [],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent implements OnInit {


  player: YT.Player | undefined


  ngOnInit() {
    this.loadYouTubeAPI();
  }


  loadYouTubeAPI() {

    const tag: HTMLScriptElement = document.createElement('script');
    tag.src = 'https://www.youtube.com/iframe_api';

    const firstScriptTag: HTMLScriptElement = document.getElementsByTagName('script')[0];
    firstScriptTag.parentNode?.insertBefore(tag, firstScriptTag);

    this.onYouTubeIframeAPIReady();
  }


  onYouTubeIframeAPIReady() {
    this.player = new YT.Player('player', {
      height: '390',
      width: '640',
      videoId: 'M7lc1UVf-VE',
      playerVars: {
        'playsinline': 1
      },
      events: {
        'onReady': this.onPlayerReady,
        'onStateChange': this.onPlayerStateChange
      }
    });
  }


  onPlayerReady(event: YT.PlayerEvent): void {
    event.target.playVideo();
  }


  onPlayerStateChange(event: YT.OnStateChangeEvent): void {
    if (event.data === YT.PlayerState.ENDED) {
      if (this.player) {
        this.player.playVideo();
      }
    }
  }
}
