// Selecting the hover div
const advertising = document.getElementById("adv");
const publishing = document.getElementById("publishing");
const emailMarkt = document.getElementById("emailMarkt");
const listData = document.getElementById("listData");

const legal = document.getElementById("legal");
const tech = document.getElementById("tech");
const beauty = document.getElementById("beauty");

const descriptionServices = document.querySelector(".description-services");
const descriptionIndustries = document.querySelector(".description-industries");

// Text descriptionServices for each service
const advText = "Our skilled team focuses on creating personalized, user-friendly websites that capture your brand's essence."
const publishingText = "Our experienced team develops custom web applications tailored to your business needs."
const emailMarktText = "Our talented graphic designers craft visually stunning and impactful designs that elevate your brand's identity. We focus on creating eye-catching visuals, striking logos, and engaging marketing materials, seamlessly blending style and functionality for a cohesive and professional look."
const listDataText = "Our skilled team captures captivating images and produces high-quality videos that showcase your brand's story. We handle everything from product photography and event coverage to promotional videos and engaging visual content, ensuring a professional and memorable visual experience for your audience."

const legalText = "Coming soon!"
const techText = "Coming soon!"
const beautyText = "Coming soon!"

const servicesObj = {
    service: [advertising, publishing, emailMarkt, listData],
    descriptionServices: [advText, publishingText, emailMarktText, listDataText]
}

const industriesObj = {
    industry: [legal, tech, beauty],
    descriptionIndustries: [legalText, techText, beautyText]
}


// Event listener for a text description to appear when hovered over each of the list items
for (let i = 0; i < servicesObj.service.length; i++) {

        servicesObj.service[i].addEventListener('mouseover', function() {
            descriptionServices.innerText = servicesObj.descriptionServices[i]
            console.log("smth")
        }, false);
 
        servicesObj.service[i].addEventListener('mouseout', textOutServices, false);
}

// When mouse is out of the hover, text description of service disappears
function textOutServices() {
    descriptionServices.innerText = "";
    console.log("hovered out");
};


// The same thing but for the text to appear in another field when hovered on the industry items
for (let i = 0; i < industriesObj.industry.length; i++) {

    industriesObj.industry[i].addEventListener('mouseover', function() {
        descriptionIndustries.innerText = industriesObj.descriptionIndustries[i]
        console.log("smth")
    }, false);

    industriesObj.industry[i].addEventListener('mouseout', textOutIndustries, false);
}

// When mouse is out of the hover, text description disappears
function textOutIndustries() {
descriptionIndustries.innerText = "";
console.log("hovered out");
};
