input.onButtonPressed(Button.A, function () {
    if (Start == 1) {
        led.toggle(3, 2)
        led.toggle(3, 1)
    } else {
        led.toggle(0, 0)
        led.toggle(0, 2)
        led.toggle(1, 0)
    }
})
input.onButtonPressed(Button.AB, function () {
    if (Start == 1) {
        led.toggle(2, 2)
        led.toggle(2, 3)
    } else {
        led.toggle(2, 3)
        led.toggle(2, 4)
        led.toggle(1, 4)
        led.toggle(3, 4)
        led.toggle(1, 3)
        led.toggle(3, 3)
    }
})
input.onButtonPressed(Button.B, function () {
    if (Start == 1) {
        led.toggle(1, 2)
        led.toggle(1, 1)
    } else {
        led.toggle(4, 0)
        led.toggle(4, 2)
        led.toggle(3, 0)
    }
})
input.onGesture(Gesture.Shake, function () {
    Start = 0
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . # . .
        . # . # .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Noise, 5000, 1, 255, 0, 2000, SoundExpressionEffect.None, InterpolationCurve.Logarithmic), SoundExpressionPlayMode.UntilDone)
})
input.onGesture(Gesture.FreeFall, function () {
    basic.showLeds(`
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        . . . . .
        `)
    music.playSoundEffect(music.createSoundEffect(WaveShape.Sawtooth, 2051, 97, 173, 18, 3000, SoundExpressionEffect.Tremolo, InterpolationCurve.Curve), SoundExpressionPlayMode.UntilDone)
})
let Start = 0
Start = 1
let Next = 0
let x = 0
let y = 0
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
music.playMelody("G A G A B C5 B A ", 120)
music.playMelody("- E - F G F G A ", 120)
music.playMelody("B A G F - - - - ", 120)
