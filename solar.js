(()=>{
 const video=document.getElementById('solar-footage'),quality=document.getElementById('solar-quality');if(!video)return;
 const sources={
 '4k':'https://svs.gsfc.nasa.gov/vis/a010000/a012000/a012034/SDO_UHD_30mins_YouTube.mp4',
 hd:'https://svs.gsfc.nasa.gov/vis/a010000/a012000/a012034/SDO_UHD_30mins_720p_YouTube.mp4'
 };video.muted=true;video.defaultMuted=true;
 const motionAllowed=!matchMedia('(prefers-reduced-motion: reduce)').matches;
 const play=()=>video.play().catch(()=>{video.controls=true});
 // Begin on solar imagery while keeping the entire film available on the timeline.
 video.addEventListener('loadedmetadata',()=>{if(video.currentTime<1)video.currentTime=75;if(motionAllowed)play()},{once:true});
 quality.addEventListener('change',()=>{const time=video.currentTime,playing=!video.paused;video.src=sources[quality.value];video.addEventListener('loadedmetadata',()=>{video.currentTime=time;if(playing)play()},{once:true});video.load()});
 if(!motionAllowed){video.autoplay=false;video.pause()}
})();
