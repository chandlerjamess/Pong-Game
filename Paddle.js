const SPEED = 0.2


export default class Paddle {
    constructor(paddleElem){
        this.paddleElem = paddleElem
    }

    get positon() {
        return parseFloat(
            getComputedStyle(this.paddleElem).getPropertyValue('--position')
        )
    }


    set position(value) {
        this.paddleElem.style.setProperty('--position', value)
    }

    update(delta, ballHeight) {
        this.position += SPEED * delta * (ballHeight - this.poition)

    }
}