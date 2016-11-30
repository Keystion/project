/* Sound is not working on firefox for security reasons */
/* Cross-origin errors grrr */
/* If anyone know a solution please let me know in the comments */
/* But try drag&dropping your own file */

function fok(f) { return f in window && typeof window[f] === 'function'; }
if(!window.requestAnimationFrame)
{
  window.requestAnimationFrame = (function(){
    return window.webkitRequestAnimationFrame ||
           window.mozRequestAnimationFrame ||
           window.oRequestAnimationFrame ||
           window.msRequestAnimationFrame ||
		       function(callback, element){
             window.setTimeout(callback, 1000 / 60);
           };
  })();
}
function comeCloser(n, goal, factor, limit)
{
  return (limit && Math.abs(goal - n) < limit) ? n : n + (goal - n) / (factor || 10);
}
Math.PI2 = 2 * Math.PI;

$(document).ready(function(){
  
  var $canvas = $('#main'),
      canvas = $canvas[0],
      w = 0, h = 0,
      ctx = canvas.getContext('2d'),
      /* midSize = initial size of the center round, try 100 */
      midSize = 0, midSizeNeeded = 30,
      bSize = 0, bSizeNeeded = 0,
      /* aSpeed = rotation speed of the branches */
      angle = 0, aSpeed = Math.PI / 3000,
      /*bNum = number of pink branches, fun with 1*/
      bNum = 7, angles = [],
      angleStep = Math.PI / bNum;
  for(var i = 0; i < bNum; i++)
    angles.push(2*i*angleStep);
  
  var actx,
      node,
      analyser,
      audio;
  var frameBufferSize = 4096,
      channels = 4,
      bufferSize = frameBufferSize / channels,
      signal = new Float32Array(bufferSize),
      fft = new FFT(bufferSize, 44100),
      amplitude = 0;
  
  function drawHeart(ctx)
  {
    ctx.save();
    ctx.translate(0,0.125);
    ctx.rotate(Math.PI / 4);
    ctx.beginPath();
    ctx.rect(-0.5,-0.5,1,1);
    ctx.arc(0,-0.5,0.5,0,Math.PI2,false);
    ctx.arc(-0.5,0,0.5,0,Math.PI2,false);
    ctx.fill();
    ctx.restore();
  }
  function draw()
  {
    ctx.clearRect(-w, -h, 2*w, 2*h);
    ctx.save();
    ctx.rotate(angle);
    for(var i = 0; i < bNum; i++)
    {
      ctx.save();
      ctx.rotate(angles[i]);
      ctx.beginPath();
      ctx.moveTo(0,0);
      ctx.arc(0,0,bSize,0,angleStep,false);
      ctx.fill();
      ctx.restore();
    }
    ctx.restore();
    ctx.save();
    ctx.globalCompositeOperation = 'xor';
    var n = bufferSize, stepX = 2 * w / n;
    var sigH = h * 0.25;
    ctx.translate(-w, 0);
    ctx.lineWidth = 3;
    ctx.beginPath();
    ctx.moveTo(0,-signal[0]);
    for(var i = 1; i < n; i += 1)
      ctx.lineTo(i * stepX, -signal[i] * sigH);
    ctx.stroke();
    ctx.globalCompositeOperation = 'source-over';
    ctx.restore();
    ctx.save();
    var ms = 1 + amplitude * 0.3;
    ctx.scale(ms, ms);
    ctx.beginPath();
    ctx.arc(0,0,midSize,0,Math.PI2,false);
    ctx.fill();
    ctx.globalCompositeOperation = 'xor';
    ctx.save();
    var hs = midSize * 0.75;
    ctx.scale(hs, hs);
    drawHeart(ctx);
    ctx.restore();
    ctx.globalCompositeOperation = 'source-over';
    ctx.restore();
  }
  function step()
  {
    //aSpeed = amplitude * 0.03;
    angle += aSpeed;
    angle %= Math.PI2;
    //midSizeNeeded = 30 + 10 * amplitude;
    midSize = comeCloser(midSize, midSizeNeeded, 10, 0.5);
    bSize = comeCloser(bSize, bSizeNeeded, 20, 0.5);
    draw();
    requestAnimationFrame(step);
  }
  function init()
  {
    actx = newAudioContext();
    loadAudio('http://pause-geek.fr/audio/temp/whatislove.ogg');
    step();
  }
  init();
  $(window).resize(function(){
    w = (canvas.width = $canvas.width()) * 0.5;
    h = (canvas.height = $canvas.height()) * 0.5;
    ctx.fillStyle = ctx.strokeStyle = '#ea80b0';
    ctx.translate(w, h);
    bSizeNeeded = w + h;
  }).resize();
  
  function newAudioContext()
  {
    if (fok('AudioContext')) return actx = new AudioContext();
    else if (fok('webkitAudioContext')) return actx = new webkitAudioContext();
    return false;
  }
  function loadAudio(url)
  {
    if(audio) audio.remove();
    if(node) node.disconnect();
    audio = new Audio();
    audio.preload = 'auto';
    audio.loop = true;
    audio.controls = true;
    //document.body.appendChild(audio); //Uncomment it to show the element
    if(actx)
      audio.addEventListener('canplay', setupAudioNodes, false);
    else
      audio.addEventListener('canplay', tryMoz, false);
    audio.src = url;
  }
  function setupAudioNodes()
  {
    analyser = analyser || actx.createJavaScriptNode(bufferSize, 2, 2);
	  analyser.onaudioprocess = processAudio;
    node = actx.createMediaElementSource(audio);
    node.connect(analyser);
    analyser.connect(actx.destination);
    audio.play();
  }
  function tryMoz()
  {
    if(!audio || !audio.mozChannels) return;
    audio.addEventListener('MozAudioAvailable', mozProcess, false);
    audio.addEventListener('pause', mozPause, false);
    audio.play();
  }
  function processAudio(e)
  {
    var inputArrayL = e.inputBuffer.getChannelData(0),
        inputArrayR = e.inputBuffer.getChannelData(1),
		    outputArrayL = e.outputBuffer.getChannelData(0),
		    outputArrayR = e.outputBuffer.getChannelData(1),
        i, n = bufferSize;
    for(i = 0; i < n; i += 1)
    {
		  outputArrayL[i] = inputArrayL[i];
		  outputArrayR[i] = inputArrayR[i];
      signal[i] = (inputArrayL[i] + inputArrayR[i]) / 2;
    }
    fft.forward(signal);
    fftChanged();
  }
  function mozProcess(e)
  {
    var fB = e.frameBuffer,i, n = bufferSize;
    for(i = 0; i < n; i += 1)
    {
      signal[i] = (fB[2*i] + fB[2*i+1]) / 2;
    }
    fft.forward(signal);
    fftChanged();
  }
  function mozPause(e)
  {
    for(i = 0; i < bufferSize; i += 1)
    {
      signal[i] = 0;
    }
    fft.forward(signal);
    fftChanged();
  }
  function fftChanged()
  {
    var specLength = fft.spectrum.length;
    var magSum = 0;
    for(i = 0; i < specLength; i += 1)
    {
      magSum += fft.spectrum[i];
    }
    amplitude = 100 * magSum / specLength;
  }
  
  function preventDefault(e) { e.preventDefault(); }
  function drop(e)
  {
  	e.preventDefault();
  	var files = e.dataTransfer.files;
  	for(var i = 0; i < files.length; i++)
	  {
	  	if(audio.canPlayType(files[i].type))
	  	{
  			loadAudio(window.URL.createObjectURL(files[i]));
  			return;
		  }
	  }
  }
  document.addEventListener('dragover', preventDefault, false);
  document.addEventListener('dragleave', preventDefault, false);
  document.addEventListener('drop', drop, false);
});

//------------------------------------------//
//-------- STUFF FOR AUDIO ANALYSIS --------//

function FourierTransform(bufferSize, sampleRate)
{
	this.bufferSize = bufferSize;
	this.sampleRate = sampleRate;
	this.bandwidth  = bufferSize * sampleRate;
	this.spectrum   = new Float32Array(bufferSize/2);
	this.real       = new Float32Array(bufferSize);
	this.imag       = new Float32Array(bufferSize);
	this.peakBand   = 0;
	this.peak       = 0;
	this.getBandFrequency = function(index)
	{
		return this.bandwidth * index + this.bandwidth / 2;
	};
	this.calculateSpectrum = function()
	{
		var spectrum  = this.spectrum,
		real      = this.real,
		imag      = this.imag,
		bSi       = 2 / this.bufferSize,
		rval, ival, mag;
		this.peak = this.peakBand = 0;
		for (var i = 0, N = bufferSize*0.5; i < N; i++)
		{
			rval = real[i];
			ival = imag[i];
			mag = bSi * Math.sqrt(rval * rval + ival * ival);
			if (mag > this.peak)
			{
				this.peakBand = i;
				this.peak = mag;
			}
			spectrum[i] = mag;
		}
	};
}
function FFT(bufferSize, sampleRate)
{
	FourierTransform.call(this, bufferSize, sampleRate);
	this.reverseTable = new Uint32Array(bufferSize);
	var limit = 1;
	var bit = bufferSize >> 1;
	var i;
	while (limit < bufferSize)
	{
		for (i = 0; i < limit; i++)
		this.reverseTable[i + limit] = this.reverseTable[i] + bit;
		limit = limit << 1;
		bit = bit >> 1;
	}
	this.sinTable = new Float32Array(bufferSize);
	this.cosTable = new Float32Array(bufferSize);
	for (i = 0; i < bufferSize; i++)
	{
		this.sinTable[i] = Math.sin(-Math.PI/i);
		this.cosTable[i] = Math.cos(-Math.PI/i);
	}
}
FFT.prototype.forward = function(buffer)
{
  var bufferSize      = this.bufferSize,
      cosTable        = this.cosTable,
      sinTable        = this.sinTable,
      reverseTable    = this.reverseTable,
      real            = this.real,
      imag            = this.imag,
      spectrum        = this.spectrum;
	var k = Math.floor(Math.log(bufferSize) / Math.LN2);
	if (Math.pow(2, k) !== bufferSize) { throw "Invalid buffer size, must be a power of 2."; }
	if (bufferSize !== buffer.length)  { throw "Supplied buffer is not the same size as defined FFT. FFT Size: " + bufferSize + " Buffer Size: " + buffer.length; }
	var halfSize = 1,
		phaseShiftStepReal,
		phaseShiftStepImag,
		currentPhaseShiftReal,
		currentPhaseShiftImag,
		off,
		tr,
		ti,
		tmpReal,
		i;
	for (i = 0; i < bufferSize; i++)
	{
		real[i] = buffer[reverseTable[i]];
		imag[i] = 0;
	}
	while (halfSize < bufferSize)
	{
		phaseShiftStepReal = cosTable[halfSize];
		phaseShiftStepImag = sinTable[halfSize];
		currentPhaseShiftReal = 1;
		currentPhaseShiftImag = 0;
		for (var fftStep = 0; fftStep < halfSize; fftStep++)
		{
			i = fftStep;
			while (i < bufferSize)
			{
				off = i + halfSize;
				tr = (currentPhaseShiftReal * real[off]) - (currentPhaseShiftImag * imag[off]);
				ti = (currentPhaseShiftReal * imag[off]) + (currentPhaseShiftImag * real[off]);
				real[off] = real[i] - tr;
				imag[off] = imag[i] - ti;
				real[i] += tr;
				imag[i] += ti;
				i += halfSize << 1;
			}
			tmpReal = currentPhaseShiftReal;
			currentPhaseShiftReal = (tmpReal * phaseShiftStepReal) - (currentPhaseShiftImag * phaseShiftStepImag);
			currentPhaseShiftImag = (tmpReal * phaseShiftStepImag) + (currentPhaseShiftImag * phaseShiftStepReal);
		}
		halfSize = halfSize << 1;
	}
	return this.calculateSpectrum();
};
