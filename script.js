const flashCard = document.getElementById("flash-card");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// รายการ Flash Card สูงสุด 30 คำ
const flashCards = [
    { question: "What is the capital of France?", answer: "Paris" },
    { question: "What is 2 + 2?", answer: "4" },
    { question: "What is the largest planet?", answer: "Jupiter" },
    { question: "What is the speed of light?", answer: "299,792 km/s" },
    { question: "Who wrote 'Hamlet'", answer: "William Shakespeare" },
    { question: "What is the boiling point of water?", answer: "100°C" },
    { question: "What is the chemical symbol for gold?", answer: "Au" },
    { question: "What is the smallest prime number?", answer: "2" },
    { question: "What is the capital of Japan?", answer: "Tokyo" },
    { question: "What is the square root of 64?", answer: "8" },
    { question: "Who painted the Mona Lisa?", answer: "Leonardo da Vinci" },
    { question: "What is the longest river in the world?", answer: "Nile" },
    { question: "What is the largest ocean?", answer: "Pacific Ocean" },
    { question: "What planet is known as the Red Planet?", answer: "Mars" },
    { question: "What is the freezing point of water?", answer: "0°C" },
    { question: "What is the capital of Germany?", answer: "Berlin" },
    { question: "What is the chemical symbol for water?", answer: "H2O" },
    { question: "Who discovered gravity?", answer: "Isaac Newton" },
    { question: "What is the largest mammal?", answer: "Blue Whale" },
    { question: "What is the hardest natural substance?", answer: "Diamond" },
    { question: "What is the capital of Italy?", answer: "Rome" },
    { question: "What is the tallest mountain?", answer: "Mount Everest" },
    { question: "What is the capital of Australia?", answer: "Canberra" },
    { question: "What is the fastest land animal?", answer: "Cheetah" },
    { question: "What is the main ingredient in sushi?", answer: "Rice" },
    { question: "What is the capital of Canada?", answer: "Ottawa" },
    { question: "What is the name of the largest desert?", answer: "Sahara" },
    { question: "What is the chemical symbol for oxygen?", answer: "O" },
    { question: "Who was the first president of the USA?", answer: "George Washington" },
    { question: "What is the capital of Russia?", answer: "Moscow" }
];

let currentIndex = 0;

// ฟังก์ชันแสดง Flash Card
function showCard(index) {
    const card = flashCards[index];
    cardFront.textContent = card.question;
    cardBack.textContent = card.answer;
    flashCard.classList.remove("flipped");
}

// ฟังก์ชันแสดงการ์ดถัดไป
function showNextCard() {
    currentIndex = (currentIndex + 1) % flashCards.length;
    showCard(currentIndex);
}

// ฟังก์ชันแสดงการ์ดก่อนหน้า
function showPrevCard() {
    currentIndex = (currentIndex - 1 + flashCards.length) % flashCards.length;
    showCard(currentIndex);
}

// สลับระหว่างหน้าและหลัง
flashCard.addEventListener("click", () => {
    flashCard.classList.toggle("flipped");
});

// เปลี่ยน Flash Card เมื่อคลิกปุ่ม
nextBtn.addEventListener("click", showNextCard);
prevBtn.addEventListener("click", showPrevCard);

// แสดงการ์ดแรกเมื่อโหลดหน้าเว็บ
showCard(currentIndex);