let Seconds = 0
input.onButtonPressed(Button.AB, function () {
    if (true) {
    	
    } else {
    	
    }
})
input.onButtonPressed(Button.B, function () {
    basic.showNumber(Seconds - 1800)
})
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        basic.showNumber(Seconds + 1800)
    } else {
        if (Seconds == 1800) {
            Seconds += 1800
        }
    }
})
