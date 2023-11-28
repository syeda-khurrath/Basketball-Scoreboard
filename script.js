let homeScore = 0
let guestScore = 0

let homeEl = document.getElementById("homeScore")
let guestEl = document.getElementById("guestScore")

homeEl.textContent = homeScore
guestEl.textContent = guestScore

function increment(num, isHome) {
    if (isHome === "home") {
        homeScore += num
        homeEl.textContent = homeScore
    } else {
        guestScore += num
        guestEl.textContent = guestScore
    }
}
function reset() {
    homeScore = 0
    guestScore = 0
    homeEl.textContent = homeScore
    guestEl.textContent = guestScore
}