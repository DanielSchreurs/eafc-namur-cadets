import {settings} from "./settings";


export class VideoController {
    private readonly htmlVideoElement: HTMLVideoElement;
    private readonly seekTime: number;

    constructor() {
        this.htmlVideoElement = document.querySelector(settings.video.selector) as HTMLVideoElement;
        this.seekTime = settings.video.videoSeekTime;
        if (this.htmlVideoElement) {
            this.addEventListeners();
        }
    }

    private forward = () => {
        if (this.htmlVideoElement.currentTime + this.seekTime > this.htmlVideoElement.duration) {
            this.htmlVideoElement.currentTime = this.htmlVideoElement.currentTime + this.seekTime - this.htmlVideoElement.duration;
        } else {
            this.htmlVideoElement.currentTime += this.seekTime;
        }
    };

    private backward = () => {
        if (this.htmlVideoElement.currentTime - this.seekTime < 0) {
            this.htmlVideoElement.currentTime = this.htmlVideoElement.duration + this.htmlVideoElement.currentTime - this.seekTime;
        } else {
            this.htmlVideoElement.currentTime -= this.seekTime;
        }
    };

    private addEventListeners() {
        document.addEventListener('keydown', (e) => {
                switch (e.key) {
                    case ' ':
                        e.preventDefault();
                        this.pause();
                        break;
                }
            }
        );
    }

    private pause() {
        if (this.htmlVideoElement.paused) {
            this.htmlVideoElement.play();
        } else {
            this.htmlVideoElement.pause();
        }
    }
}

