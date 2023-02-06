let ratingState = document.getElementById("state");
let thankYouState = document.getElementById("thanks");
let displayButton = document.getElementById("display");
displayButton.addEventListener("click", displayThankYouPage);

function displayThankYouPage() {
    ratingState.hidden = true;
    thankYouState.hidden = false;
}

let btnList = document.querySelectorAll(".user_rating_button");
for (let index = 0; index < btnList.length; index++) {
    document.querySelectorAll(".user_rating_button")[index].
        addEventListener("click", function () {
            if (btnList[index].textContent === '1') {
                let el = document.getElementById("rate").innerHTML =
                    `You selected ${btnList[index].textContent} out of 5`;
            } else if (btnList[index].textContent === '2') {
                let el = document.getElementById("rate").innerHTML =
                    `You selected ${btnList[index].textContent} out of 5`;
            } else if (btnList[index].textContent === '3') {
                let el = document.getElementById("rate").innerHTML =
                    `You selected ${btnList[index].textContent} out of 5`;
            } else if (btnList[index].textContent === '4') {
                let el = document.getElementById("rate").innerHTML =
                    `You selected ${btnList[index].textContent} out of 5`;
            } else {
                let el = document.getElementById("rate").innerHTML =
                    `You selected ${btnList[index].textContent} out of 5`;
            }
        })
}