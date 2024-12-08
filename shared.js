document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("theme-toggle");
    const body = document.body;
  
    // استعادة الوضع المحفوظ
    const savedTheme = localStorage.getItem("theme");
    if (savedTheme) {
      body.classList.add(savedTheme);
    }
  
    // تبديل الوضع
    themeToggle.addEventListener("click", () => {
      if (body.classList.contains("night")) {
        body.classList.remove("night");
        body.classList.add("day");
        localStorage.setItem("theme", "day");
      } else {
        body.classList.remove("day");
        body.classList.add("night");
        localStorage.setItem("theme", "night");
      }
    });
  });
  