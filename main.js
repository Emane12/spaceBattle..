hull = 20;
firepower = 5;
acccuracy = 0.7;

const first = {
    play(a) {
    let random1 = Math.random();
    if(random1 < AudioListener.acccuracy) {
        a.hull = a.hull - this.firepower;
        console.log("Nice hit!")
        }
        else {
            console.log("you did not hit")
        }
    }
}

const alien = {
    play(b) {
        let random2 = Math.random();
        if(random2 < alien.acccuracy) {
            b.hull = b.hull - this.firepower;
            console.log("You received a hit");
        }
        else {
            console.log("You won");
        }
    }
}