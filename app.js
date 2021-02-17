const canvas = document.getElementById("jsCanvas");

function onMouseMove(envet) {
    const x = Event.offsetX;
    const y = Event.offsetY;
    console.log(x, y);
}




if(canvas){
    canvas.addEventListener("mousemove", onMouseMove);
}
