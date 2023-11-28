input.onGesture(Gesture.LogoUp, function () {
    radio.sendNumber(1)
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . # . .
        `)
})
input.onGesture(Gesture.ScreenDown, function () {
    basic.showLeds(`
        . . . . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    radio.sendNumber(6)
})
input.onButtonPressed(Button.A, function () {
    radio.sendNumber(8)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        . . . # .
        . . . . .
        `)
})
input.onGesture(Gesture.ScreenUp, function () {
    basic.showLeds(`
        . . # . .
        . # # # .
        . . # . .
        . . # . .
        . . . . .
        `)
    radio.sendNumber(5)
})
input.onGesture(Gesture.TiltRight, function () {
    radio.sendNumber(4)
    basic.showLeds(`
        . . . . .
        . # . . .
        # # # # #
        . # . . .
        . . . . .
        `)
})
input.onGesture(Gesture.Shake, function () {
    radio.sendNumber(7)
    basic.showLeds(`
        . # # # .
        # . # . #
        # # . # #
        # . # . #
        . # # # .
        `)
})
input.onGesture(Gesture.TiltLeft, function () {
    radio.sendNumber(3)
    basic.showLeds(`
        . . . . .
        . . . # .
        # # # # #
        . . . # .
        . . . . .
        `)
})
input.onButtonPressed(Button.AB, function () {
    radio.sendNumber(10)
    basic.showLeds(`
        # . . . #
        . # . # .
        . . # . .
        . # . # .
        # . . . #
        `)
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(9)
    basic.showLeds(`
        . . . . .
        . . . # .
        . # # # #
        . . . # .
        . . . . .
        `)
})
input.onGesture(Gesture.LogoDown, function () {
    basic.showLeds(`
        . . # . .
        . . # . .
        . . # . .
        . # # # .
        . . # . .
        `)
    radio.sendNumber(2)
})
basic.forever(function () {
    radio.setGroup(2)
    basic.showLeds(`
        # . . . #
        # # # # #
        # . # . #
        # # # # #
        . # # # .
        `)
})
