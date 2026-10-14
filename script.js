// Get the Order Now button
const orderBtn = document.getElementById("orderBtn");

// Add click event
orderBtn.addEventListener("click", function () {
    alert("Thank you for choosing FOOD TRAIL!");
});

// Get all food order buttons
const foodButtons = document.querySelectorAll(".foodBtn");

// Add click event to each food button
foodButtons.forEach(function (button) {

    button.addEventListener("click", function () {
        alert("Your food has been added to your order!");
    });

});