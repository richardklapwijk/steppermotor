/**
 */
input.onButtonPressed(Button.A, function () {
    if (input.lightLevel() < 75) {
        Angle = 0
    } else {
        Angle = 1
    }
    pins.digitalWritePin(DigitalPin.P2, Angle)
    for (let index = 0; index < 48; index++) {
        pins.digitalWritePin(DigitalPin.P0, 1)
        basic.pause(10)
        pins.digitalWritePin(DigitalPin.P0, 0)
        basic.pause(10)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Retning == 0) {
        Retning = 1
    } else {
        Retning = 0
    }
    pins.digitalWritePin(DigitalPin.P1, Retning)
    basic.showNumber(Retning)
})
let Angle = 0
let Retning = 0
basic.showIcon(IconNames.Yes)
Retning = 1
Angle = 1
pins.digitalWritePin(DigitalPin.P1, Retning)
pins.digitalWritePin(DigitalPin.P2, Angle)
