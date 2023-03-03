let ratingState = document.getElementById("state");
let thankYouState = document.getElementById("thanks");

let form = document.querySelector(".rating_form");
form.addEventListener("submit", (ev) => {
    ev.preventDefault();
    ratingState.hidden = true;
    thankYouState.hidden = false;

    let radio_buttons = document.querySelectorAll('input[name="rating"]');

    for (let index = 0; index < radio_buttons.length; index++) {
        if (radio_buttons[index].checked) {
            document.getElementById("rate").innerHTML =
                `You selected ${radio_buttons[index].value} out of 5`;
        }
    }
});
