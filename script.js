// ===== LOADING =====
window.addEventListener("load", () => {
    document.getElementById("loader").style.display = "none";
});

// ===== CUSTOM CURSOR =====
const cursor = document.querySelector(".cursor");

document.addEventListener("mousemove", e => {
    cursor.style.left = e.clientX + "px";
    cursor.style.top = e.clientY + "px";
});

// ===== SCROLL ANIMATION =====
const sections = document.querySelectorAll(".section");

const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, { threshold: 0.15 });

sections.forEach(sec => observer.observe(sec));

// ===== NAVBAR HIDE / SHOW =====
let lastScroll = 0;
const navbar = document.querySelector(".navbar");

window.addEventListener("scroll", () => {
    let currentScroll = window.pageYOffset;
    if (currentScroll > lastScroll) {
        navbar.style.top = "-100px";
    } else {
        navbar.style.top = "0";
    }
    lastScroll = currentScroll;
});

// ===== SMOOTH SCROLL FIX (QUAN TRỌNG) =====
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        const targetId = this.getAttribute("href");
        const target = document.querySelector(targetId);

        if (target) {
            e.preventDefault();
            target.scrollIntoView({
                behavior: "smooth",
                block: "start"
            });
        }
    });
});
// ===== KHÓA CUỘN TRANG BAN ĐẦU =====
document.body.style.overflow = "hidden";

// ===== NÚT XEM THÊM =====
const xemThemBtn = document.querySelector('.btn');

xemThemBtn.addEventListener("click", function (e) {
    e.preventDefault();

    // Mở khóa cuộn
    document.body.style.overflow = "auto";

    // Cuộn xuống phần thông tin trại
    document.querySelector("#thong-tin-trai").scrollIntoView({
        behavior: "smooth"
    });
});

// ===== CHẶN CUỘN CHUỘT TRƯỚC KHI BẤM =====
window.addEventListener("wheel", function (e) {
    if (document.body.style.overflow === "hidden") {
        e.preventDefault();
    }
}, { passive: false });

// ===== CHẶN PHÍM CUỘN =====
window.addEventListener("keydown", function (e) {
    if (document.body.style.overflow === "hidden") {
        const keys = ["ArrowDown", "ArrowUp", "PageDown", "PageUp", " "];
        if (keys.includes(e.key)) {
            e.preventDefault();
        }
    }
});
