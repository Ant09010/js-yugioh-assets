const state ={
    score:{
        playerScore: 0,
        computerScore: 0,
        scoreBox: document.getElementByld("score_points"),
    },
    cardSprites:{
       
         avatar: document.getElementById("card-image"),
         name: document.getElementById("card-name"),
         type: document.getElementById("card-type"),
    },
    fieldCards:{
        player: document.getElementById("player-field-card"),
        computer: document.getElementById("computer-field-card"),
    },
    actions:{
    button:document.getElementById("next-duel"),
    },
};


const playerSides = {
player1: "player-cards",
computer: "computer-cards",
}

const cardData = [
    {
        id: 0,
        name: "Blue Eyes white Dragon",
        type: "paper",
        img: ".src/assets/icons/dragon.png",
        winOf: [1],
        LoseOf: [2],
    }, 
    {
      id: 1,
        name: "Dark Magicia",
        type: "Rock",
        img: "./src/assets/icons/magician.png",
        winOf: [2],
        LoseOf: [0],
    },
    {
        id: 2,
        name: "Exodia",
        type: "Scissors",
        img: ".src/assets/icons/exodia.png",
        winOf: [0],
        LoseOf: [1],
    }
];

async function getRandomCardId(){
    const randonIndex = Math.floor(Math.random() * cardData.length)
    return cardData[randomIndex].id;
}

async function createCardImage(IdCard,fieldSide){
    const cardImage = document.createElement("img");
    cardImage.setAttribute("height", "100px");
    cardImage.setAttribute("src", "./src/assets/icons/card-back.png");
    cardImage.setAttribute("data-id", IdCard);
    cardImage.classList.add("card");



    if(fieldSide === playerSides.player1){
        cardImage.addEventListener("click", ()=>{
            setCardsField(cardImage.getAttribute("data-id"));
        });
    }

    cardImage.addEventListener("mouseover", ()=>{
        drawSelectCard(IdCard);
    });

    return cardImage;

}


async function drawCards(cardNumber, fieldSide) {
    for(let i = 0; i <cardNumber; i++){
        const randomIdCard = await getRandomCardId();
        const cardImage = await createCardImage(randomIdCard, fieldSide);


        document.getElementById(fieldSide).appendChild(cardImage);
    }


}


function init() {
    drawCards(5, playerSides.player1);
    drawCards(5, playerSides.computer);
}

init();
