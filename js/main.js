class Call{
    constructor()
    {
        this._audio = new Audio('beep.mp3')
        this._audioIsRunning = false
        this._numberEl = document.querySelector('[data-value="number"]')
        window.addEventListener('click',()=>{
            this.nextPass()
        })
    }
    get numberEl()
    {
        return Number.parseInt(this._numberEl.innerHTML)
    }
    set numberEl(value)
    {
        this._numberEl.innerHTML = value
    }
    nextPass()
    {
        this.numberEl < 99 ? this.numberEl++ : this.numberEl = 0
        this.numberEl < 10 ? this.numberEl = `0${this.numberEl++}` : this.numberEl++
        
        this.playAudio()
    }
    playAudio()
    {
        if(this._audio){
            this._audio.currentTime = 0 
            this._audio.play()
        }
    }
}
const call = new Call()
