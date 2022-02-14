function id(e) {return document.getElementById(e)}
let cover = id("cover"), title = id("title"), desc = id("description"), button = id("dive-listen")
let lists = {
    data: [
        {
            name: "DIVE",
            desc: "this was my first time attempting to make a well-flowing and enjoyable playlist, rather than a couple albums mashed together. DIVE primarily focuses on j-pop, with some future funk and k-pop mixed in.",
            img: "media/lists/dive.jpg",
            url: "https:/\/open.spotify.com/playlist/0Se5XmMvG64uWuESxDc8Ky"
        },
        {
            name: "LET GO",
            desc: "this was my first time attempting to make a well-flowing and enjoyable playlist, rather than a couple albums mashed together. DIVE primarily focuses on j-pop, with some future funk and k-pop mixed in.",
            img: "media/lists/letgo.jpg"
        },
        {
            name: "NEPTUNE",
            desc: "this was my first time attempting to make a well-flowing and enjoyable playlist, rather than a couple albums mashed together. DIVE primarily focuses on j-pop, with some future funk and k-pop mixed in.",
            img: "media/lists/neptune.jpg"
        },
        {
            name: "HIDEAWAY / VIVIENNE",
            desc: "this was my first time attempting to make a well-flowing and enjoyable playlist, rather than a couple albums mashed together. DIVE primarily focuses on j-pop, with some future funk and k-pop mixed in.",
            img: "media/lists/dive.jpg"
        },
        {
            name: "prism",
            desc: "the sixth playlist i made -- PRISM pulls from everywhere, starting with japanese environmental/ambient music before dipping into nu-disco, hyperpop and korean indie.",
            img: "media/lists/prism.png"
        }
    ],
    current: 0,
    update: function() {
        let delay = 300;
        document.querySelector(".detailswrapper").style.opacity = 0;
        setTimeout(() => {
            let info = this.data[this.current];
            cover.setAttribute("src", info.img)
            button.innerText = "Listen to "+info.name; button.setAttribute("onclick", `window.open(${info.url})`)
            title.innerText = info.name; desc.innerHTML = info.desc + "<br><br>" + button.outerHTML;
            setTimeout(() => document.querySelector(".detailswrapper").style.opacity = 1, delay)
        }, delay)
    },
    next: function() {
        this.current = (this.current == this.data.length-1) ? 0 : this.current+1;
        this.update()
    },
    prev: function() { // oh no repeat code! i do not care.
        this.current = (this.current == 0) ? this.data.length-1 : this.current-1;
        this.update()
    }
}