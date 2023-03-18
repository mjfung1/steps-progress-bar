

const nextBtn = document.querySelector("#next");
const prevBtn = document.querySelector("#prev");
const progressBar = document.querySelector(".progress-bar-front");

const stepsEle = document.querySelectorAll(".step");

let currentChecked = 1;

nextBtn.addEventListener("click", () => {

    currentChecked++;

    if (currentChecked > stepsEle.length) {
        currentChecked = stepsEle.length;
    }

    updateStepProgress();
});

prevBtn.addEventListener("click", () => {

    currentChecked--;

    if (currentChecked < 1) {
        currentChecked = 1;
    }

    updateStepProgress();

});


function updateStepProgress() {
    stepsEle.forEach((stepEle, idx) => {
        if (idx < currentChecked) {
            stepEle.classList.add("checked");
            stepEle.innerHTML = `
                <i class="fas fa-check"></i>
                <small>${idx === 0 ? ("Start") : (idx === stepsEle.length - 1 ) ? ("Final") : ("Step" + idx)}</small>
            `
        } else {
            stepEle.classList.remove("checked");
            stepEle.innerHTML = `<i class="fas fa-times"></i>`
        }
    })

    const checkedNumber = document.querySelectorAll(".checked");

    progressBar.style.width = ( (checkedNumber.length - 1) / (stepsEle.length - 1) ) * 100 + "%";

    if (currentChecked === 1) {
        prevBtn.disabled = true;
    } else if (currentChecked === stepsEle.length) {
        nextBtn.disabled = true;
    } else {
        prevBtn.disabled = false;
        nextBtn.disabled = false;
    }
}