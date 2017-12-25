// creating an array to get the inputs
var coffee = [];
// function invoked when buttom clicked
function addCoffee(name, category, rating) {
    coffee.push({"coffeeName": name, "categoryC": category, "userRating": rating})
}
// what to start when there is a click
$('.post-coffee').click(function() {
    addCoffee($('.coffee-input').val(),$('.category-input').val(),$('.selector-input').val())
}
)

// clears the current list
function clearList() {
    $('.coffee-list').find('li').remove();
}
 
// rendering the results
$('.render-coffee').click(function() {
    clearList();   
    for(var i = 0; i < coffee.length; i++) {
        $('.coffee-list').append('<li>' + 'Name : ' + coffee[i].coffeeName + " Category : " + coffee[i].categoryC + " Rating : " + coffee[i].userRating + '</li>')
    }
}
)

// sorting by rate and rendering
$('.sort-rating').click(function() {
    coffee.sort(function(a, b) {
        return b.userRating - a.userRating    
    }
)
clearList();   
for(var i = 0; i < coffee.length; i++) {
    $('.coffee-list').append('<li>' + 'Name : ' + coffee[i].coffeeName + " Category : " + coffee[i].categoryC + " Rating : " + coffee[i].userRating + '</li>')
}
coffee.reverse()    
}
)





// coffee.sort(function (coffeeName, categoryC, userRating) {

    /*
    $('.coffee-list').append('<li>' + )
    
    $.each(coffee, function(coffeeName, categoryC) {

*/