// ========================================
// DEMO BANK LOGIN
// ========================================
const loginForm = document.getElementById("loginForm");
if (loginForm) {
    loginForm.addEventListener("submit", function (event) {
        event.preventDefault();
        const username = document.getElementById("username").value.trim();
        const password = document.getElementById("password").value;
        const error = document.getElementById("loginError");
        // ========================================
        // SCHOOL DEMO LOGIN CREDENTIALS
        // ========================================
        const DEMO_USERNAME = "Samjana@1123";
        const DEMO_PASSWORD = "magar-investigation";
        if (
            username === DEMO_USERNAME &&
            password === DEMO_PASSWORD
        ) {
            sessionStorage.setItem("demoLoggedIn", "true");
            window.location.href = "dashboard.html";
        } else {
            error.textContent =
                "Incorrect username or password. Please try again.";
        }
    });
}
// ========================================
// DEMO DASHBOARD ACCESS
// ========================================
if (window.location.pathname.endsWith("dashboard.html")) {
    const loggedIn = sessionStorage.getItem("demoLoggedIn");
    if (loggedIn !== "true") {
        window.location.href = "index.html";
    }
}
// ========================================
// LOGOUT
// ========================================
const logoutButton = document.getElementById("logoutButton");
if (logoutButton) {
    logoutButton.addEventListener("click", function () {
        sessionStorage.removeItem("demoLoggedIn");
        window.location.href = "index.html";
    });
}