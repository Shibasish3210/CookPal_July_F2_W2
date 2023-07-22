let mystr = `[
    {
        "name": "Veggie Delight",
        "imageSrc": "https://source.unsplash.com/random?veggies",
        "time": "30 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Chicken Grill",
        "imageSrc": "https://source.unsplash.com/random?chicken",
        "time": "45 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Cheese Pizza",
        "imageSrc": "https://source.unsplash.com/random?pizza",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.1
    },
    {
        "name": "Steak",
        "imageSrc": "https://source.unsplash.com/random?steak",
        "time": "60 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.7
    },
    {
        "name": "Grilled Salmon",
        "imageSrc": "https://source.unsplash.com/random?salmon",
        "time": "50 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Tomato Pasta",
        "imageSrc": "https://source.unsplash.com/random?pasta",
        "time": "35 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.0
    },
    {
        "name": "Vegan Salad",
        "imageSrc": "https://source.unsplash.com/random?salad",
        "time": "20 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Fried Chicken",
        "imageSrc": "https://source.unsplash.com/random?friedChicken",
        "time": "55 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.3
    },
    {
        "name": "Mushroom Risotto",
        "imageSrc": "https://source.unsplash.com/random?risotto",
        "time": "45 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.5
    },
    {
        "name": "Burger",
        "imageSrc": "https://source.unsplash.com/random?burger",
        "time": "30 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.2
    },
    {
        "name": "Paneer Tikka",
        "imageSrc": "https://source.unsplash.com/random?paneerTikka",
        "time": "40 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.4
    },
    {
        "name": "BBQ Ribs",
        "imageSrc": "https://source.unsplash.com/random?ribs",
        "time": "70 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 4.6
    },
    {
        "name": "Caesar Salad",
        "imageSrc": "https://source.unsplash.com/random?caesarSalad",
        "time": "25 min",
        "type": "veg",
        "isLiked": false,
        "rating": 3.8
    },
    {
        "name": "Fish Tacos",
        "imageSrc": "https://source.unsplash.com/random?fishTacos",
        "time": "35 min",
        "type": "non-veg",
        "isLiked": false,
        "rating": 3.9
    },
    {
        "name": "Chocolate Cake",
        "imageSrc": "https://source.unsplash.com/random?chocolateCake",
        "time": "90 min",
        "type": "veg",
        "isLiked": false,
        "rating": 4.9
    }
]`
const main_menu = JSON.parse(mystr);
// console.log(main_menu);
const food_container = document.getElementById("food-sec");



function placeFoodItems(n){
    for (let index = 0; index < main_menu.length; index++) {
        const element = main_menu[index];
        let template_food = `<div id="food-img"><img style="border-radius: 10px;" src="${element["imageSrc"]}" alt="xyz"></div>
<div style="font-size: 12px;" >${element["type"]}</div>
<div style="display: flex; justify-content: space-between;">
    <strong style="float : left;">${element["name"]}</strong> 
    <span style="float : right;">
        <span><img src="Resources/Frame 28.png" alt="rating"></span>
        <span>${element["rating"]}</span>
    </span>
</div>
<div style="display: flex; justify-content: space-between; margin-top:1rem; width: 100%;">
    <div style="color:#DC582A; font-weight:600;"> ${element["time"]} </div> 
    <div>
        <span style="margin-right: 10px; margin-top: 10px"><img src="Resources/Vector-1.png" alt="like"></span>
        <span><img src="Resources/Vector.png" alt="like"></span>
    </div>
</?div>`;


        if(element["rating"] >= n){
            const food_card = document.createElement('div');
            food_card.className = "food-card";
            food_card.innerHTML = template_food;
            food_card.style.width = "20vw";
            food_card.style.textAlign = "center";
            food_card.style.marginBottom = "2rem";
            food_card.style.borderRadius = "10px";
            food_card.style.boxShadow = "2px 2px 5px rgba(96, 86, 91, 0.4)"
            food_card.style.padding = "0.5rem"
            food_container.style.marginInline = "5px";
            food_container.appendChild(food_card);
    
        }
    
    }
}
function placeFoodItems2(str){
    for (let index = 0; index < main_menu.length; index++) {
        const element = main_menu[index];
        let template_food = `<div id="food-img"><img style="border-radius: 10px;" src="${element["imageSrc"]}" alt="xyz"></div>
<div style="font-size: 12px;" >${element["type"]}</div>
<div style="display: flex; justify-content: space-between;">
    <strong style="float : left;">${element["name"]}</strong> 
    <span style="float : right;">
        <span><img src="Resources/Frame 28.png" alt="rating"></span>
        <span>${element["rating"]}</span>
    </span>
</div>
<div style="display: flex; justify-content: space-between; margin-top:1rem; width: 100%;">
    <div style="color:#DC582A; font-weight:600;"> ${element["time"]} </div> 
    <div>
        <span style="margin-right: 10px; margin-top: 10px"><img src="Resources/Vector-1.png" alt="like"></span>
        <span><img src="Resources/Vector.png" alt="like"></span>
    </div>
</?div>`;


        if(element["type"] == str){
            const food_card = document.createElement('div');
            food_card.className = "food-card";
            food_card.innerHTML = template_food;
            food_card.style.width = "20vw";
            food_card.style.textAlign = "center";
            food_card.style.marginBottom = "2rem";
            food_card.style.borderRadius = "10px";
            food_card.style.boxShadow = "2px 2px 5px rgba(96, 86, 91, 0.4)"
            food_card.style.padding = "0.5rem"
            food_container.style.marginInline = "5px";
            food_container.appendChild(food_card);
    
        }
    
    }
}
let n = 4;
placeFoodItems(n);

const nav_btn = document.getElementById("nav-btn");
const resp_navBar = document.getElementById("responsive_nav")
nav_btn.addEventListener("click", (e) =>{
    resp_navBar.style.display = "block";
    // const body = document.querySelector("body");
    // let arr = body.childNodes;
    // // console.log(arr);
    // arr.forEach(element => {
    //     if(element.id!== "responsive_nav"){
    //         element.style.opacity = "0.3";
    //     }
    // });
    const close = document.getElementById("resp-nav-close");
    close.addEventListener("click",() =>{
        resp_navBar.style.display="none";
    })
});

// const input_element = document.getElementById("search-bar-input");
// let input_element_value = input_element.value;

// input_element.addEventListener("click", ()=>{
//     console.log(input_element_value);
// });


const food_options = Array.from(document.querySelectorAll(".sorting-cards"));
food_options.forEach((element) => {
    element.addEventListener("click", () =>{
        let str = element.id;
        // console.log(str);
        switch (str) {
            case "sorting-card-1":
                food_container.replaceChildren();
                placeFoodItems(0);
                break;
            case "sorting-card-2":
                food_container.replaceChildren();
                placeFoodItems2("veg");
                break;
            case "sorting-card-3":
                food_container.replaceChildren();
                placeFoodItems2("non-veg");
                break;
        }
    });
});

// incomplete feature!!

// const checkbox = document.querySelectorAll(`input[type="checkbox"]`);
// console.log(checkbox);
// for (let index = 0; index < checkbox.length; index++) {
//     const element = checkbox[index];
//     element.addEventListener("click", ()=>{
//         if(index%2 === 0 && element.checked){
//             food_container.replaceChildren();
//             placeFoodItems(4);
//         }else if(index%2 === 0 && element.checked){
//             food_container.replaceChildren();
//             placeFoodItems(0);
//         }
//     })
    
// }