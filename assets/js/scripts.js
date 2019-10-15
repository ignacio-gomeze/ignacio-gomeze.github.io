function validateNumber(evt) {
  var theEvent = evt || window.event;

  // Handle paste
  if (theEvent.type === 'paste') {
      key = event.clipboardData.getData('text/plain');
  } else {
  // Handle key press
      var key = theEvent.keyCode || theEvent.which;
      key = String.fromCharCode(key);
  }
  var regex = /^\d*\.?\d*$/;
  if( !regex.test(key) ) {
    theEvent.returnValue = false;
    if (theEvent.preventDefault) theEvent.preventDefault();
  }
}

function calculateSwimTime() {
  var swimPaceMinutes = parseInt(document.getElementById("swim_pace_minutes").value) || 0;
  var swimPaceSeconds = parseInt(document.getElementById("swim_pace_seconds").value) || 0;
  var swimDistance = parseInt(document.getElementById("swim_distance").value) || 0;
  var swimSeconds = swimPaceMinutes*60 + swimPaceSeconds;
  var swimTime = Math.floor(swimSeconds/100 * swimDistance);
  return swimTime;
}

function calculateBikeTime() {
  var bikePace = parseInt(document.getElementById("bike_pace").value) || 0;
  var bikeDistance = parseInt(document.getElementById("bike_distance").value) || 0;
  var bikeTime = Math.floor(bikeDistance/bikePace * 3600);
  return bikeTime;
}

function calculateRunTime() {
  var runPaceMinutes = parseInt(document.getElementById("run_pace_minutes").value) || 0;
  var runPaceSeconds = parseInt(document.getElementById("run_pace_seconds").value) || 0;
  var runDistance = parseInt(document.getElementById("run_distance").value) || 0;
  var runSeconds = runPaceMinutes*60 + runPaceSeconds;
  var runTime = Math.floor(runSeconds * runDistance);
  return runTime;
}

function calculateTime() {
  var swimTime = calculateSwimTime();
  document.getElementById("swim_time").innerText = swimTime.toString().toHHMMSS();
  var bikeTime = calculateBikeTime();
  document.getElementById("bike_time").innerText = bikeTime.toString().toHHMMSS();
  var runTime = calculateRunTime();
  document.getElementById("run_time").innerText = runTime.toString().toHHMMSS();

  var t1Minutes = parseInt(document.getElementById("t1_minutes").value) || 0;
  var t1Seconds = parseInt(document.getElementById("t1_seconds").value) || 0;
  var t1Time = Math.floor(t1Minutes*60 + t1Seconds);

  var t2Minutes = parseInt(document.getElementById("t2_minutes").value) || 0;
  var t2Seconds = parseInt(document.getElementById("t2_seconds").value) || 0;
  var t2Time = Math.floor(t2Minutes*60 + t2Seconds);

  var totalTime = Math.floor(swimTime + bikeTime + runTime + t1Time + t2Time);
  document.getElementById("total_time").innerText = totalTime.toString().toHHMMSS();
}

String.prototype.toHHMMSS = function () {
    var sec_num = parseInt(this, 10); // don't forget the second param
    var hours   = Math.floor(sec_num / 3600);
    var minutes = Math.floor((sec_num - (hours * 3600)) / 60);
    var seconds = sec_num - (hours * 3600) - (minutes * 60);

    if (minutes < 10) {minutes = "0"+minutes;}
    if (seconds < 10) {seconds = "0"+seconds;}
    return hours+':'+minutes+':'+seconds;
}
