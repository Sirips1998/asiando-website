window.addEventListener('scroll', function() {
    const header = document.querySelector('.header');
    if (window.scrollY > 50) {
        header.classList.add('sticky');
    } else {
        header.classList.remove('sticky');
    }
});

/* =========================================================
   HERO AUTO SLIDER
========================================================= */
const slides = document.querySelectorAll('.hero-slide');
const dots = document.querySelectorAll('.dot');
let currentSlide = 0;
let slideInterval;

function showSlide(index) {
    // ลบคลาส active ออกจากรูปและขีดทั้งหมดก่อน
    slides.forEach(slide => slide.classList.remove('active'));
    dots.forEach(dot => dot.classList.remove('active'));
    
    // ใส่คลาส active ให้รูปและขีดลำดับปัจจุบัน
    slides[index].classList.add('active');
    dots[index].classList.add('active');
}

function nextSlide() {
    currentSlide = (currentSlide + 1) % slides.length; // วนกลับไป 0 ถ้าถึงรูปสุดท้าย
    showSlide(currentSlide);
}

// ตั้งเวลาเปลี่ยนสไลด์อัตโนมัติ (5000 = 5 วินาที)
function startSlider() {
    slideInterval = setInterval(nextSlide, 5000);
}

// ทำให้กดที่ขีดเพื่อเปลี่ยนรูปได้ด้วย
dots.forEach((dot, index) => {
    dot.addEventListener('click', () => {
        currentSlide = index;
        showSlide(currentSlide);
        // พอคนกดดูเองปุ๊บ ให้รีเซ็ตเวลาใหม่ จะได้ไม่เลื่อนหนีเร็วเกินไป
        clearInterval(slideInterval);
        startSlider();
    });
});

// เปิดระบบตอนโหลดเว็บ
startSlider();

document.addEventListener('DOMContentLoaded', () => {
    
    // ==========================================
    //  OUR COMMITMENT SLIDER (สไลด์ชาวไร่)
    // ==========================================
    const slides = document.querySelectorAll('.commitment-slider .slide');
    const dots = document.querySelectorAll('.commitment-dots .dot');
    let currentSlide = 0;
    let slideInterval;

    // เช็คก่อนว่ามีสไลด์ไหม ป้องกัน Error
    if (slides.length > 0) {
        
        // ฟังก์ชันเปลี่ยนรูปและเปลี่ยนจุด
        function showSlide(index) {
            // ลบ class active ออกจากทุกรูปและทุกจุดก่อน
            slides.forEach(slide => slide.classList.remove('active'));
            dots.forEach(dot => dot.classList.remove('active'));

            // เติม class active ให้รูปและจุดที่เลือก
            slides[index].classList.add('active');
            dots[index].classList.add('active');
            currentSlide = index;
        }

        // ฟังก์ชันเลื่อนไปรูปถัดไป
        function nextSlide() {
            let nextIndex = (currentSlide + 1) % slides.length; // ถ้าถึงรูปสุดท้ายให้วนกลับไปรูป 0
            showSlide(nextIndex);
        }

        // ⏱️ ตั้งเวลาให้สไลด์เปลี่ยนอัตโนมัติทุกๆ 4 วินาที (4000 ms)
        slideInterval = setInterval(nextSlide, 4000);

        // 🖱️ ทำให้จุดแคปซูลกดคลิกเปลี่ยนรูปได้
        dots.forEach((dot, index) => {
            dot.addEventListener('click', () => {
                showSlide(index);
                // เวลากดคลิก ให้รีเซ็ตเวลาใหม่ จะได้ไม่เปลี่ยนรูปขัดจังหวะ
                clearInterval(slideInterval);
                slideInterval = setInterval(nextSlide, 4000);
            });
        });
    }

});