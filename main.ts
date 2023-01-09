input.onButtonPressed(Button.A, function () {
	
})
/**
 * Her er et program som ikke er helt ferdig, men alle blokkene du trenger for å få liv i lysene ligger klar.
 * 
 * Prøv deg frem, og se hvordan du kan bruke de avanserte Neopixel-kommandoene for å lage fancy lys-show.
 */
let strip = neopixel.create(DigitalPin.P13, 12, NeoPixelMode.RGB)
strip.setPixelColor(11, neopixel.hsl(200, 100, 42))
loops.everyInterval(10000, function () {
    strip.rotate(1)
})
basic.forever(function () {
	
})
