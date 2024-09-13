console.log("Hello Git :)");

!(function () {
    const burger = document.querySelector("#nav .burger");
    const close = document.querySelector("#navmobile .burger");
    const navmobile = document.getElementById("navmobile");

    burger.addEventListener("click", () => {
        navmobile.classList.add("active");
    });

    close.addEventListener("click", () => {
        navmobile.classList.remove("active");
    });

    window.addEventListener("resize", () => {
        navmobile.classList.remove("active");
    });
})();

!(function () {
    const wrapper = document.getElementById("wrapper");
    const registerLink = document.getElementById("register-link");
    const loginLink = document.getElementById("login-link");
    const loginForm = document.getElementById("login__form");
    const registerForm = document.getElementById("register__form");
    const inputs = document.querySelectorAll("input.text");

    registerLink.addEventListener("click", () => {
        loginForm.classList.remove("active");
        registerForm.classList.add("active");
        update();
    });

    loginLink.addEventListener("click", () => {
        registerForm.classList.remove("active");
        loginForm.classList.add("active");
        update();
    });

    function update() {
        if (registerForm.classList.contains("active")) {
            wrapper.style.height = 490 + "px";
        } else {
            wrapper.style.height = 430 + "px";
        }
        inputs.forEach((input) => {
            input.value = "";
        });
    }
})();

!(function () {
    const bgImages = [
        "./assets/images/img-1.jpg",
        "./assets/images/img-2.jpg",
        "./assets/images/img-3.jpg",
        "./assets/images/img-4.jpg",
        "./assets/images/img-5.jpg",
        "./assets/images/img-6.jpg",
    ];

    let currentIndex = 1;
    setInterval(() => {
        document.body.style.backgroundImage = `url("${bgImages[currentIndex]}")`;
        currentIndex++;
        if (currentIndex > 5) currentIndex = 0;
    }, 7500);
})();