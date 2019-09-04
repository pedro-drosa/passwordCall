class Call{
    constructor()
    {
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
    }
}
const call = new Call()