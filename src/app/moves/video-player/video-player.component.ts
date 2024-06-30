import { Component, Input } from '@angular/core';
import { YouTubePlayer } from '@angular/youtube-player';


@Component
({
  selector: 'app-video-player',
  standalone: true,
  imports:
  [
    YouTubePlayer
  ],
  templateUrl: './video-player.component.html',
  styleUrl: './video-player.component.css'
})
export class VideoPlayerComponent {

  @Input() videoId!: string;
  @Input() loopStartTime!: number; // Start time in seconds
  @Input() length!: number;        // Duration in seconds

  loopEndTime!: number;

  playerVars = {
    autoplay: 1,                   // Autoplay when player is ready
    controls: 1,                   // Enable or disable player controls
    start: this.loopStartTime,
    end: this.loopEndTime
  };

  ngOnInit() {
    this.initializePlayerVars();
  }

  private initializePlayerVars() {
    this.loopEndTime = this.loopStartTime + this.length + 1;

    this.playerVars.start = this.loopStartTime;
    this.playerVars.end = this.loopEndTime;
  }

  onStateChange(event: YT.OnStateChangeEvent) {
    if (event.data === YT.PlayerState.ENDED) {
      event.target.seekTo(this.loopStartTime, true);
      event.target.playVideo();
    }
  }
}
