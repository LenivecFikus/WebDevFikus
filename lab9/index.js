var drums = $('.drum')

w = new Audio("sounds/crash.mp3")
a = new Audio("sounds/kick-bass.mp3")
s = new Audio("sounds/snare.mp3")
t1= new Audio("sounds/tom-1.mp3")
t2= new Audio("sounds/tom-2.mp3")
t3= new Audio("sounds/tom-3.mp3")
t4= new Audio("sounds/tom-4.mp3")

document.addEventListener("keypress", async event=>{
    if(event.code == "KeyW")
    {
        w.currentTime = 0;
        w.play()
    }
    else if(event.code == "KeyA")
    {
        a.currentTime = 0;
        a.play()
    }
    else if(event.code == "KeyS")
    {
        s.currentTime = 0;
        s.play()
    }
    else if(event.code == "KeyD")
    {
        t1.currentTime = 0;
        t1.play()
    }
    else if(event.code == "KeyJ")
    {
        t2.currentTime = 0;
        t2.play()
    }
    else if(event.code == "KeyK")
    {
        t3.currentTime = 0;
        t3.play()
    }
    else if(event.code == "KeyL")
    {
        t4.currentTime = 0;
        t4.play()
    }
})

for(let drum of drums){
    
    drum.addEventListener("click", event => {
        if(drum.classList.contains("w")){
            w.play()
        }
        else if(drum.classList.contains("a"))
        {
            a.play()
        }
        else if(drum.classList.contains("s"))
        {
            s.play()
        }
        else if(drum.classList.contains("d"))
        {
            t1.play()
        }
        else if(drum.classList.contains("j"))
        {
            t2.play()
        }
        else if(drum.classList.contains("k"))
        {
            t3.play()
        }
        else if(drum.classList.contains("l"))
        {
            t4.play()
        }
    })
}