var x0=400,y0=400;
const {style} = obj;step=100;
  
window.addEventListener('keydown', (event) => {
        
    switch (event.key) {
        case 'ArrowUp': y0+=step; break;
        case 'ArrowDown': y0-=step; break;
        case 'ArrowLeft': x0-=step; break;
        case 'ArrowRight': x0+=step; break;
    }

    style.bottom=y0+`px`;
    style.left=x0+`px`;
   
});
