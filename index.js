let food = document.getElementById("food");
let food1 = document.getElementById("food1");
let food2 = document.getElemnetById("food2");
let food3 = document.getElemnetById("food3");
let food4 = document.getElemnetById("food4");

food1.addEventListener('click',()=>{
    food.style.backgroundImage = "url('food1.png')";
});
food2.addEventListener('click',()=>{
    food.style.backgroundImage = "url('food2.png')";
});
food3.addEventListener('click',()=>{
    food.style.backgroundImage = "url('food3.png')";
});
food4.addEventListener('click',()=>{
    food.style.backgroundImage = "url('/images/food4.png')";
});
