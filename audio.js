var context = new AudioContext;
var myAudioBuffer = null;

var url = "http://mac.kaist.ac.kr/~juhan/ctp431/webaudio/greg_baumont_-_Minimal_french_electro_loop.mp3";

function loadSound(url) {
  var request = new XMLHttpRequest();
  request.open('GET', url, true);
  request.responseType = 'arraybuffer';
  request.onload = function() {
    alert("sound loaded"); //test
    context.decodeAudioData(request.response, function(buffer) {
      myAudioBuffer = buffer;
      alert("sound decoded"); //test
    });
  }
  request.send();
}

var source = null;
function playSound(anybuffer) {
  source = context.createBufferSource();
  source.buffer = anybuffer;
  source.connect(context.destination);
  source.start();
}

function stopSound() {
  if (source) {
    source.stop();
  }
}
