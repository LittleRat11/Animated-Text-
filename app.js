const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let interval;

function changeTextLetter(event) {
    let iteration = 0;
    const initText = event.target.innerText;
    // console.log(initText)
    clearInterval(interval);
    interval = setInterval(() => {
        event.target.innerText = initText.split("")
            .map((letter, index) => {
                if (index < iteration) {
                    return event.target.dataset.textValue[index];
                }
                return letters[Math.floor(Math.random() * 26)];
            })
            .join("");
        // console.log(event.target.dataset.textValue.length);
        // console.log(iteration);
        if (iteration >= event.target.dataset.textValue.length) {
            clearInterval(interval);
        }
        iteration += 1 / 10;
    }, 50)
}
const animateText = document.querySelectorAll('.animated-text');
animateText.forEach((value) => {
    value.addEventListener("mouseover", () => {
        changeTextLetter(event);
    });
});