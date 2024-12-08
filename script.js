document.getElementById('themeToggle').addEventListener('click', () => {
    document.body.classList.toggle('light-theme');
});

const style = document.createElement('style');
style.textContent = `
.light-theme {
    background: #f8f8f8;
    color: #1b1b2f;
}
.light-theme .navbar {
    background-color: #ffffff;
    color: #1b1b2f;
    box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}
.light-theme .category, .light-theme .product {
    background: rgba(0, 0, 0, 0.1);
    color: #000;
    border: 1px solid rgba(0, 0, 0, 0.2);
}
.light-theme button {
    color: #1b1b2f;
    border-color: #1b1b2f;
}
.light-theme footer {
    background: rgba(0, 0, 0, 0.05);
    color: #1b1b2f;
}
`;
document.head.appendChild(style);
