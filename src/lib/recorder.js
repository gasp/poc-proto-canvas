class Recorder {
  constructor(mediaElement) {
    // TODO
    console.log('if this is null, throw', mediaElement.captureStream)
    console.log('if this is null, throw', MediaSource)

    this.mediaStream = mediaElement.captureStream()
    this.mediaSource = new MediaSource()
    this.mediaSource.addEventListener('sourceopen', this.handleSourceOpen, false)

    this.recordedBlobs = []
  }

  handleSourceOpen = event => {
    console.log('MediaSource opened');
    sourceBuffer = mediaSource.addSourceBuffer('video/webm; codecs="vp8"');
    console.log('Source buffer: ', sourceBuffer);
  }

  handleDataAvailable = event => {
    if (event.data && event.data.size > 0) {
      // console.log(this.recordedBlobs)
      this.recordedBlobs.push(event.data);
    }
  }

  handleStop(event) {
    console.log('Recorder stopped: ', event);
    const superBuffer = new Blob(this.recordedBlobs, {type: 'video/webm'});
    // video.src = window.URL.createObjectURL(superBuffer);
    console.log('all is in the blob superBuffer')
  }

  startRecording() {
    let options = {mimeType: 'video/webm'};
    try {
      this.mediaRecorder = new MediaRecorder(this.mediaStream, options);
    } catch (e0) {
      console.log('Unable to create MediaRecorder with options Object: ', e0);
      try {
        options = {mimeType: 'video/webm,codecs=vp9'};
        this.mediaRecorder = new MediaRecorder(this.mediaStream, options);
      } catch (e1) {
        console.log('Unable to create MediaRecorder with options Object: ', e1);
        try {
          options = 'video/vp8'; // Chrome 47
          this.mediaRecorder = new MediaRecorder(this.mediaStream, options);
        } catch (e2) {
          alert('MediaRecorder is not supported by this browser.\n\n' +
            'Try Firefox 29 or later, or Chrome 47 or later, ' +
            'with Enable experimental Web Platform features enabled from chrome://flags.');
          console.error('Exception while creating MediaRecorder:', e2);
          return;
        }
      }
    }
    console.log('Created MediaRecorder', this.mediaRecorder, 'with options', options);

    this.mediaRecorder.ondataavailable = this.handleDataAvailable;
    this.mediaRecorder.start(100); // collect 100ms of data
    console.log('MediaRecorder started', this.mediaRecorder);
  }

  stopRecording = () => {
    this.mediaRecorder.stop();
    console.log('Recorded Blobs: ', this.recordedBlobs);
  }

  download(filename) {
    const blob = new Blob(this.recordedBlobs, {type: 'video/webm'});
    const url = window.URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.style.display = 'none';
    a.href = url;
    a.download = `${filename}.webm`;
    document.body.appendChild(a);
    a.click();
    setTimeout(() => {
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
    }, 100);
  }
}


export default Recorder
