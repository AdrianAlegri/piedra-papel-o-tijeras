let Numero_al_azar = 0
basic.forever(function () {
    Numero_al_azar = 0
    if (input.isGesture(Gesture.Shake)) {
        Numero_al_azar = randint(1, 3)
        if (Numero_al_azar == 1) {
            basic.showLeds(`
                . # # # .
                # . . . #
                # . . . #
                # . . . #
                . # # # .
                `)
            basic.pause(3000)
            basic.clearScreen()
        } else if (Numero_al_azar == 2) {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.pause(3000)
            basic.clearScreen()
        } else {
            basic.showLeds(`
                # # . . #
                # # . # .
                . . # . .
                # # . # .
                # # . . #
                `)
            basic.pause(3000)
            basic.clearScreen()
        }
    }
})
