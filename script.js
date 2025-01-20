const flashCard = document.getElementById("flash-card");
const cardFront = document.getElementById("card-front");
const cardBack = document.getElementById("card-back");
const nextBtn = document.getElementById("next-btn");
const prevBtn = document.getElementById("prev-btn");

// รายการ Flash Card สูงสุด 30 คำ
const flashCards = [
    { question: "Athlete                    (แอธ'ลีท)", answer: "นักกีฬา" },
    { question: "Genuine                    (เจน'นูอีน)", answer: "แท้จริง" },
    { question: "Neglect                    (นิเกลคทฺ')", answer: "เพิกเฉย" },
    { question: "failure                    (เฟ'เลียร์)", answer: "ความล้มเหลว" },
    { question: "Pension                    (เพน'เชิน) ", answer: "เงินบำนาญ" },
    { question: "Chairman                   (แชร์'เมิน)", answer: "ประธาน" },
    { question: "Enhance                    (เอ็นฮานซ)", answer: "เสริม,ปรับปรุง" },
    { question: "Obligation                 (ออบละเก'เชิน)", answer: "ภาระหน้าที่" },
    { question: "Scheme                     (สคีม)", answer: "แผนการ" },
    { question: "Industrial                 (นอินดัซ-ทเรียล.)", answer: "เกี่ยวกับอุตสาหกรรม" },
    { question: "Undertake                  (อันเดอะเทค')", answer: "รับภาระ" },
    { question: "Attachment                 (อะแทช'เมินทฺ)", answer: "การแนบ" },
    { question: "Welfare                    (แวล'แฟร์) ", answer: "สวัสดิการ" },
    { question: "Military                   (มิล'ลิเทอรี) ", answer: "ทหาร" },
    { question: "Agriculture                (แอก' กริคัลเชอะ)", answer: "เกษตรกรรม" },
    { question: "Evaluate                   (อีแวล'ลูเอท)", answer: "ประเมิน" },
    { question: "bankrupt                   (แบงคฺ'รัพทฺ)", answer: "ล้มละลาย" },
    { question: "Nightmare                  (ไนทฺ'แมร์)", answer: "ฝันร้าย" },
    { question: "Faith                      (เฟธ)", answer: "ศรัทธา" },
    { question: "Valid                      (แวล'ลิด)", answer: "ใช้ได้จริง" },
    { question: "Harmful                    (ฮาร์ม'ฟูล)", answer: "เป็นอันตราย" },
    { question: "Phenomenon                 (ฟี'นอมมีนอน)", answer: "ปรากฏการณ์" },
    { question: "Relevant                   (เรล'ละเวินทฺ)", answer: "เข้าประเด็น" },
    { question: "Negotiation                (นีโก'ชีเอเชิน)", answer: "การเจรจา" },
    { question: "Labor                      (เล'เบอร์)", answer: "แรงงาน" },
    { question: "Popularity                 (พอพ'พิวแลริที่)", answer: "ความเป็นที่นิยม" },
    { question: "Hesitate                   (เฮซ'ซิเทท)", answer: "ลังเล" },
    { question: "Threaten                   (เธรท'เทิน)", answer: "คุกคาม" },
    { question: "Suspect                    (ซัส'เปคทฺ)", answer: "สงสัย" },
    { question: "Massive                    (แมส'ซิฟ)", answer: "ใหญ่โต" }
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

// เลือกปุ่ม "ไปหน้าอื่น"
const goToAnotherPage = document.getElementById("go-to-another-page");

// เพิ่มเหตุการณ์คลิกเพื่อเปิดหน้าเว็บอื่น
goToAnotherPage.addEventListener("click", () => {
    window.location.href = "https://script.google.com/a/macros/tn.ac.th/s/AKfycbzQ8BotB2t0q1a5PYm34qiKPB6v1cJ_JwEPo95-A1Sk/dev"; // เปลี่ยนลิงก์เป็นเว็บที่ต้องการ
});
