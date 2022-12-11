// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const card = document.querySelector("#card");

const paper1 = document.querySelector("#p1")
const paper2 = document.querySelector("#p2")
const paper3 = document.querySelector("#p3")

//Event Listener
prevBtn.addEventListener("click", goPrevPage);
nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 2;
let maxLocation = numOfPapers + 1;

function openCard() {
    card.style.transform = "translateX(50%)";
    prevBtn.style.transform ="translateX(-220px)";
    nextBtn.style.transform ="translateX(220px)";

}

function closeCard(isAtBeginning){
    if(isAtBeginning){
        card.style.transform = "translateX(0%)";
    } 
    else {
        card.style.transform = "translateX(100%)";
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openCard();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                closeCard();
                break;
            default:
                throw new Error("unknown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeCard(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                openCard();
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            default:
                throw new Error("unknown state");
        }

        currentLocation--;
    }

}