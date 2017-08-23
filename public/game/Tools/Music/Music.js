export default class Music {
  constructor(path = null) {
    this._music = path ? new Audio(path) : null;
    this._isMute = false;
  }

  play() {
    this._music.play();
  }

  loopPlay() {
    if (this._music) {
      this._music.addEventListener('ended', () => {
        this._music.currentTime = 0;
        this.play();
      }, false);
      this.play();
    }
  }

  stop() {
    this._music.pause();
    this.muteToggle();
    this._music.currentTime = 0;
  }

  muteToggle() {
    this._music.volume = this._isMute ? 1.0 : 0.0;
    this._isMute = !this._isMute;
  }

  _getObject() {
    return this._music;
  }
}
