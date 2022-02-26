// Ok, this is the "forever" block
// It makes the code inside of it run in a lloop and over again
// Every open bracket '[' or parenthesis  '(' needs to be closed )]
basic.forever(function () {
    // this is "showLeds" block
    // It reads the text (..#..) to figure out which LED is in.
    basic.showLeds(`
        . . # . .
        . # . # .
        # . # . #
        . # . # .
        . . # . .
        `)
    basic.showLeds(`
        . . . . .
        . . . . .
        . . # . .
        . . . . .
        . . . . .
        `)
    // turning on a few LEDs
    // This is the second "show leds" block.
    // Something LEDs are off so it inly contains ?.? Characters.
    basic.showLeds(`
        . # . # .
        # . # . #
        . # . # .
        # . # . #
        . # . # .
        `)
})
