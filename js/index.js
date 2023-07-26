
// Load  images on page-load
function preloader() {
    const imagesList = [
        "./img/img-1.jpg",
        "./img/img-2.jpg",
        "./img/img-3.jpg"
    ];
    const images = [];
    for (let i = 0; i < imagesList.length; i++) {
        images[i] = new Image();
        images[i].src = imagesList[i];
    }

    // Images ready to be used:
    console.log(`Preloaded images:\n\t${images[0].src}\n\t${images[1].src}\n\t${images[2].src}`);
}

window.addEventListener("load", preloader);

// resource-object that will store the dynamic content
const resourceObject = {
    solution1: {
        headingContent: "Solar Energy Technologies",
        bodyText: " A major solution to increase green energy is the increase in use of solar energy. The sun is the most powerful energy source in the world, solar technologies convert sunlight into electrical energy either through PV panels or through mirrors that concentrate solar radiation. The sun is free and does not require people to pay for it, which makes it the cheapest and affordable sorce of energy.",
        imgUrl: "./img/solar.jpg",
        imgAlt: "Solution 1 Image"
    },
    solution2: {
        headingContent: "Wind power Turbines",
        bodyText: "Wind-powered turbines are also good solutions. A wind turbine turns wind energy into electricity using the aerodynamic force from the rotor blades. Many locations around the world are using wind-powered turbines to generate electricity, and it has become a business opportunity for many entrepreneurs around the world. The plants are easy to install, and the energy is very cheap to produce.",
        imgUrl: "./img/wind.jpg",
        imgAlt: "Solution 2 Image"
    },
    solution3: {
        headingContent: "Go Green",
        bodyText: "learning to save energy by using green energy sources. To go green means finding a balance between the life you lead, the impact that life and your choices have on the planet, and being mindful enough to help maintain ecological balance to preserve the planet, its ecosystems, and its natural resources. Simple ways of doing this is to switch off your appliances at the socket, turn off the lights when you are not using them and recycle energy.",
        imgUrl: "./img/energy.jpg",
        imgAlt: "Solution 3 Image"
    }
};

// Get the reference toHTML-container
const contentContainer = document.getElementById("content-container");

// The first button in a NODE LIST of buttons will initially have the id: active-button
// This will uniquely style the active button (CSS rule).
const buttons = document.querySelectorAll(".buttons .button-image");
buttons[0].classList.add("active");


contentContainer.innerHTML = `<h1>${resourceObject.solution1.headingContent}</h1>
                               <img src="${resourceObject.solution1.imgUrl}" alt="${resourceObject.solution1.imgAlt}">
                  <p>${resourceObject.solution1.bodyText}</p>`;


// Load the first content on page load
//contentContainer.innerHTML =    `<h1>${headingContent}</h1>
                            //    <img src="${imgUrl}" alt="${imgAlt}">
                             //   <p>${bodyText}</p>`;

// Function to move the active line
function moveActiveLine(buttonNumber) {
    const activeLine = document.querySelector(".active-line");
    const buttonWidth = buttons[buttonNumber - 1].offsetWidth;
    const buttonOffsetLeft = buttons[buttonNumber - 1].offsetLeft;
    activeLine.style.width = buttonWidth + "px";
    activeLine.style.transform = `translateX(${buttonOffsetLeft}px)`;
}

// Start your handleSelection function here.
function handleButtonClick(buttonNumber) {
    // Remove the active class from all buttons
    for (const button of buttons) {
        button.classList.remove("active");
    }

    buttons[buttonNumber - 1].classList.add("active");

    moveActiveLine(buttonNumber);

    let selectedContent;
    if (buttonNumber === 1) {
        selectedContent = resourceObject.solution1;
    } else if (buttonNumber === 2) {
        selectedContent = resourceObject.solution2;
    } else if (buttonNumber === 3) {
        selectedContent = resourceObject.solution3;
    }

    contentContainer.innerHTML = `<h1>${selectedContent.headingContent}</h1>
                                   <img src="${selectedContent.imgUrl}" alt="${selectedContent.imgAlt}">
                                   <p>${selectedContent.bodyText}</p>`;
}

for (let i = 0; i < buttons.length; i++) {
    buttons[i].addEventListener("click", function() {
        handleButtonClick(i + 1);
    });
}
