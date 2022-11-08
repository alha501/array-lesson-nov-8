input.onButtonPressed(Button.A, function () {
    p1 = list[randint(0, 2)]
    basic.showString("" + (p1))
})
input.onButtonPressed(Button.AB, function () {
    if (p1 > p2) {
        basic.showString("" + (p1))
        basic.showString("Wins")
    } else {
        basic.showString("" + (p2))
        basic.showString("Lose")
    }
})
input.onButtonPressed(Button.B, function () {
    p2 = badMen[randint(0, 2)]
    basic.showString("" + (p2))
})
let p2 = 0
let p1 = ""
let badMen: string[] = []
let list: string[] = []
list = ["Spiderman", "Batman", "Lebron James"]
badMen = ["Thanos", "Joker", "Dr Doom"]
basic.forever(function () {
	
})
