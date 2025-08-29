const throttleFunction = (func, delay) => {
    let prev = 0;
    return (...args) => {
        let now = new Date().getTime();
        if (now - prev > delay) {
            prev = now;
            return func(...args);
        }
    }
}

document.querySelector("#center").addEventListener("mousemove", throttleFunction((dets) => {
   
    var div = document.createElement("div");
    div.classList.add("imagediv");
    div.style.left = dets.clientX + 'px';
    div.style.top = dets.clientY + 'px';
    div.style.position = "absolute";
    div.style.pointerEvents = "none";
    div.style.zIndex = 1000;

    const industryImages = [
        "https://plus.unsplash.com/premium_photo-1755719822948-c7c587a2006c?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1713959925337-3a79df64fccd?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1528825871115-3581a5387919?w=600&auto=format&fit=crop&q=60",
        "https://images.unsplash.com/photo-1618897996318-5a901fa6ca71?w=600&auto=format&fit=crop&q=60",
        "https://plus.unsplash.com/premium_photo-1734119809106-0f8022b1652e?q=80&w=1974&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
        "https://plus.unsplash.com/premium_photo-1673282159161-50a92ff3de64?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDE3fHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1736895377297-2c6c33bfa988?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDI2fHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1734119809033-f3baf7eac47b?w=300&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1pbi1zYW1lLXNlcmllc3wzfHx8ZW58MHx8fHx8",
        "https://plus.unsplash.com/premium_photo-1693266290145-44e340b8a920?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1yZWxhdGVkfDM0fHx8ZW58MHx8fHx8"
    ];

    var img = document.createElement("img");
    img.setAttribute("src", industryImages[Math.floor(Math.random() * industryImages.length)]);
    img.style.width = "120px";
    img.style.height = "160px";
    img.style.objectFit = "cover";
    img.style.borderRadius = "12px";
    img.style.boxShadow = "0 12px 28px rgba(0,0,0,0.25)";
    img.style.background = "#fff";
    img.style.filter = "blur(2px) brightness(1.1)";
    div.appendChild(img);

    document.body.appendChild(div);

    gsap.fromTo(img, {
        y: "40%",
        opacity: 0,
        scale: 0.5,
        rotation: gsap.utils.random(-25, 25),
        rotateY: gsap.utils.random(-45, 45),
        filter: "blur(10px) brightness(1.4)"
    }, {
        y: "0%",
        opacity: 1,
        scale: 1,
        rotation: 0,
        rotateY: 0,
        filter: "blur(0px) brightness(1)",
        ease: "back.out(1.7)",
        duration: 0.9
    });

    gsap.to(img, {
        y: "140%",
        opacity: 0,
        scale: 0.6,
        rotation: gsap.utils.random(-15, 15),
        rotateX: gsap.utils.random(-20, 20),
        filter: "blur(8px) brightness(0.8)",
        delay: 0.9,
        ease: "expo.in",
        duration: 1.3
    });

    setTimeout(function () {
        div.remove();
    }, 2000);

}, 400));
