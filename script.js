// creating an array to get the inputs
var coffee = [];
// function invoked when buttom clicked
function addCoffee(name, category, rating) {
    coffee.push({ "coffeeName": name, "categoryC": category, "userRating": rating })
}
// what to start when there is a click
$('.post-coffee').click(function () {
    addCoffee($('.coffee-input').val(), $('.category-input').val(), $('.selector-input').val())
    renderCoffee();
}
)

// clears the current list
function clearList() {
    $('.coffee-list').find('li').remove();
}

// rendering the results
function renderCoffee() {
    clearList();
    for (var i = 0; i < coffee.length; i++) {
        $('.coffee-list').append('<li>' + 'Name : ' + coffee[i].coffeeName + " Category : " + coffee[i].categoryC + " Rating : " + coffee[i].userRating + '</li>')
    }
}


// sorting by rate and rendering
// var direction = 1;
// function oneWay() {
//     coffee.sort(function (a, b) {
//     return b.userRating - a.userRating})
//     renderCoffee();  
// };

// function twoWay() {
//     coffee.sort(function (a, b) {
//         return a.userRating - b.userRating})
//         renderCoffee();        
//     };



// $('.sort-rating').click(function () { 
//     if (direction == 1) {
//         oneWay()
//         direction = 0;
//     }
//     else if(direction == 0) {
//         twoWay()
//         direction = 1;
//     }
// }
// )

var direction = 0;

$('.sort-rating').click(function() {
    if(direction % 2 === 0) {
        coffee.sort(function (a, b) {
            return b.userRating - a.userRating})
        direction = 1;
    }
    else {
        coffee.sort(function (a, b) {
            return a.userRating - b.userRating})
        direction = 0;
    }
    renderCoffee();  
})

