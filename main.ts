input.onButtonPressed(Button.A, function () {
    led.toggle(1, 2)
    led.toggle(1, 1)
})
input.onButtonPressed(Button.AB, function () {
    led.toggle(2, 2)
    led.toggle(2, 3)
})
input.onButtonPressed(Button.B, function () {
    led.toggle(3, 2)
    led.toggle(3, 1)
})
input.onGesture(Gesture.Shake, function () {
    basic.showLeds(`
        # . . . #
        . # . # .
        # . . . #
        . . # . .
        . # . # .
        `)
    music.playSoundEffect(music.createSoundEffect(
    WaveShape.Noise,
    5000,
    1,
    255,
    0,
    2000,
    SoundExpressionEffect.None,
    InterpolationCurve.Logarithmic
    ), SoundExpressionPlayMode.UntilDone)
})
basic.showLeds(`
    . # . # .
    # . # . #
    # . . . #
    . # . # .
    . . # . .
    `)
music.playSoundEffect(music.createSoundEffect(
WaveShape.Sawtooth,
2334,
1,
255,
0,
1694,
SoundExpressionEffect.None,
InterpolationCurve.Logarithmic
), SoundExpressionPlayMode.UntilDone)
