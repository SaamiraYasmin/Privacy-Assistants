function createOverlay() : void{
    console.log("Applying the overlay");
    const iframe = document.createElement("iframe");
    iframe.setAttribute("id", "ext-preloader");
    iframe.setAttribute("style", `position:fixed; z-index:5055; display:block; top: 0;left: 0;border:none; width:100%; height:100%; background:#000000`);
    iframe.setAttribute("scrolling", "no");
    iframe.setAttribute("frameborder", "0");
    iframe.setAttribute('onclick','alert("okay")');
    document.body.appendChild(iframe);
}

function removeOverlay() : void{
    console.log("Removing the overlay");
    const iframe = document.getElementById("ext-preloader");
    iframe?.parentNode?.removeChild(iframe);
}

export {createOverlay, removeOverlay};