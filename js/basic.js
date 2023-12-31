if(document.readyState !== "loading"){
    console.log("Document ready!")
    initializeCode();
} else {
    document.addEventListener("DOMContentLoaded", function() {
        console.log("DOMContentLoaded event fired");
        initializeCode();
    })
}

async function initializeCode(){
const response1 = await fetch('https://dog.ceo/api/breed/akita/images/random');
const data1 = await response1.json();
const wikiResponse1 = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/Akita');
const wikiData1 = await wikiResponse1.json();
const wikiContainer1 = document.getElementById("item1");
const wikiContainer2 = document.getElementById("item2");
const wikiContainer3 = document.getElementById("item3");
const wikiContainer4 = document.getElementById("item4");
const wikiContainer5 = document.getElementById("item5");

let wikiItem = document.createElement("div");
let divContent = document.createElement("div");
let divImage = document.createElement("div");
let h = document.createElement("h1");
let paragraph = document.createElement("p");
let image = document.createElement("img");

wikiItem.className = "wiki-item";
h.className = "wiki-header";
h.textContent = "Akita";
divContent.className = "wiki-content";
paragraph.className = "wiki-text";
paragraph.textContent = wikiData1.extract;
divImage.className = "img-container";
image.className = "wiki-img";
image.src = data1.message;

divImage.appendChild(image);
divContent.appendChild(divImage);
divContent.appendChild(paragraph);
wikiItem.appendChild(h);
wikiItem.appendChild(divContent);

wikiContainer1.appendChild(wikiItem);
// ----------------------------------------------
const response2 = await fetch('https://dog.ceo/api/breed/beagle/images/random');
const data2 = await response2.json();
const wikiResponse2 = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/Beagle');
const wikiData2 = await wikiResponse2.json();
let wikiItem2 = document.createElement("div");
let divContent2 = document.createElement("div");
let divImage2 = document.createElement("div");
let h2 = document.createElement("h1");
let paragraph2 = document.createElement("p");
let image2 = document.createElement("img");

wikiItem2.className = "wiki-item";
h2.className = "wiki-header";
h2.textContent = "Beagle";
divContent2.className = "wiki-content";
paragraph2.className = "wiki-text";
paragraph2.textContent = wikiData2.extract;
divImage2.className = "img-container";
image2.className = "wiki-img";
image2.src = data2.message;

divImage2.appendChild(image2);
divContent2.appendChild(divImage2);
divContent2.appendChild(paragraph2);
wikiItem2.appendChild(h2);
wikiItem2.appendChild(divContent2);

wikiContainer2.appendChild(wikiItem2);
// -------------------------------------------------------
const response3 = await fetch('https://dog.ceo/api/breed/boxer/images/random');
const data3 = await response3.json();
const wikiResponse3 = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/boxer');
const wikiData3 = await wikiResponse3.json();
let wikiItem3 = document.createElement("div");
let divContent3 = document.createElement("div");
let divImage3 = document.createElement("div");
let h3 = document.createElement("h1");
let paragraph3 = document.createElement("p");
let image3 = document.createElement("img");

wikiItem3.className = "wiki-item";
h3.className = "wiki-header";
h3.textContent = "Boxer";
divContent3.className = "wiki-content";
paragraph3.className = "wiki-text";
paragraph3.textContent = wikiData3.extract;
divImage3.className = "img-container";
image3.className = "wiki-img";
image3.src = data3.message;

divImage3.appendChild(image3);
divContent3.appendChild(divImage3);
divContent3.appendChild(paragraph3);
wikiItem3.appendChild(h3);
wikiItem3.appendChild(divContent3);

wikiContainer3.appendChild(wikiItem3);
// ------------------------------------------
const response4 = await fetch('https://dog.ceo/api/breed/chihuahua/images/random');
const data4 = await response4.json();
const wikiResponse4 = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/chihuahua');
const wikiData4 = await wikiResponse4.json();
let wikiItem4 = document.createElement("div");
let divContent4 = document.createElement("div");
let divImage4 = document.createElement("div");
let h4 = document.createElement("h1");
let paragraph4 = document.createElement("p");
let image4 = document.createElement("img");

wikiItem4.className = "wiki-item";
h4.className = "wiki-header";
h4.textContent = "Chihuahua";
divContent4.className = "wiki-content";
paragraph4.className = "wiki-text";
paragraph4.textContent = wikiData4.extract;
divImage4.className = "img-container";
image4.className = "wiki-img";
image4.src = data4.message;

divImage4.appendChild(image4);
divContent4.appendChild(divImage4);
divContent4.appendChild(paragraph4);
wikiItem4.appendChild(h4);
wikiItem4.appendChild(divContent4);

wikiContainer4.appendChild(wikiItem4);
//----------------------------------------------
const response5 = await fetch('https://dog.ceo/api/breed/chow/images/random');
const data5 = await response5.json();
const wikiResponse5 = await fetch('https://en.wikipedia.org/api/rest_v1/page/summary/chow');
const wikiData5 = await wikiResponse5.json();
let wikiItem5 = document.createElement("div");
let divContent5 = document.createElement("div");
let divImage5 = document.createElement("div");
let h5 = document.createElement("h1");
let paragraph5 = document.createElement("p");
let image5 = document.createElement("img");

wikiItem5.className = "wiki-item";
h5.className = "wiki-header";
h5.textContent = "Chow";
divContent5.className = "wiki-content";
paragraph5.className = "wiki-text";
paragraph5.textContent = wikiData5.extract;
divImage5.className = "img-container";
image5.className = "wiki-img";
image5.src = data5.message;

divImage5.appendChild(image5);
divContent5.appendChild(divImage5);
divContent5.appendChild(paragraph5);
wikiItem5.appendChild(h5);
wikiItem5.appendChild(divContent5);

wikiContainer5.appendChild(wikiItem5);

}