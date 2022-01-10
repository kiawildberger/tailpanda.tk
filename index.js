let id=e=>{return document.getElementById(e)}


Array.from(document.getElementsByClassName("woah-content")).forEach(e => {
    let parent = e.parentElement;
    console.log(parent)
    if(!parent.classList.contains("woah")) return;
    e.addEventListener("hover", () => {
        console.log('g')
        // parent.style = `color:white;
        // border-radius:2em;
        // border-color:#0087E7;
        // background:#0087E7;
        // margin-top:-0.2em;
        // box-shadow:2px 2px 8px grey;
        // max-height:2.7em;`
        parent.style.color = "white"
        parent.style.borderRadius = "2em"
        parent.style.borderColor = "#0087e7"
        parent.style.background = "#0087e7"
        parent.style.marginTop = "-0.2em"
        parent.style.boxShadow = "2px 2px 8px grey"
        parent.style.maxHeight = "2.7em";
    })
})