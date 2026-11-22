const menu=document.querySelector('.menu');menu.addEventListener('click',()=>{const open=document.querySelector('nav').classList.toggle('open');menu.setAttribute('aria-expanded',open)});const dialog=document.querySelector('.zoom');document.querySelectorAll('[data-zoom]').forEach(img=>{img.tabIndex=0;img.setAttribute('role','button');img.setAttribute('aria-label','Enlarge '+img.alt);const open=()=>{dialog.querySelector('img').src=img.src;dialog.querySelector('img').alt=img.alt;dialog.showModal()};img.addEventListener('click',open);img.addEventListener('keydown',e=>{if(e.key==='Enter'||e.key===' '){e.preventDefault();open()}})});dialog.querySelector('button').addEventListener('click',()=>dialog.close());dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close()});
// Continuous horizontal project-team strip.
document.querySelectorAll('.team-carousel').forEach(carousel=>{
 const play=carousel.querySelector('[data-play]');
 let paused=matchMedia('(prefers-reduced-motion: reduce)').matches;
 const update=()=>{carousel.classList.toggle('is-paused',paused);play.textContent=paused?'Play':'Pause';play.setAttribute('aria-label',(paused?'Play':'Pause')+' scrolling photos')};
 play.addEventListener('click',()=>{paused=!paused;update()});update();
});

// Return one page in browser history; direct entries retain a parent-page link.
document.querySelectorAll('[data-back]').forEach(link=>link.addEventListener('click',event=>{
 if(event.button!==0||event.metaKey||event.ctrlKey||event.shiftKey||event.altKey)return;
 if(window.history.length>1){event.preventDefault();window.history.back();}
}));
