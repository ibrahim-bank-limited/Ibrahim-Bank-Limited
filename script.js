// Fake user database
const users = {
    "01700000000": {
        password: "1234",
        balance: 5000,
        transactions: [
            "Sent 300 tk to 01711111111",
            "Received 500 tk",
            "Paid electricity bill 800 tk"
        ]
    }
};

// Login function
function login() {
    const mobile = document.getElementById("mobile").value;
    const password = document.getElementById("password").value;

    if (users[mobile] && users[mobile].password === password) {
        localStorage.setItem("loggedUser", mobile);
        window.location.href = "dashboard.html";
    } else {
        document.getElementById("msg").innerHTML = "Invalid login!";
    }
}

// Dashboard load
if (window.location.pathname.includes("dashboard.html")) {
    const mobile = localStorage.getItem("loggedUser");

    if (!mobile) window.location.href = "index.html";

    const user = users[mobile];

    document.getElementById("balance").innerHTML = user.balance + " tk";

    let list = "";
    user.transactions.forEach(t => list += `<li>${t}</li>`);
    document.getElementById("transactions").innerHTML = list;
}

// Logout
function logout() {
    localStorage.removeItem("loggedUser");
    window.location.href = "index.html";
}
