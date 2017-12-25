var coffee = [];

function addCoffee(name,category) {
    coffee.push({"coffeeName": name, "categoryC": category})
}

$('.post-coffee').click(function() {
    addCoffee($('.coffee-input').val(),$('.category-input').val())
}
)

function clearList() {
    $('.coffee-list').find('li').remove();
}
    
$('.render-coffee').click(function() {
    clearList();   
    for(var i = 0; i < coffee.length; i++) {
        $('.coffee-list').append('<li>' + 'Name : ' + coffee[i].coffeeName + " Category : " + coffee[i].categoryC + '</li>')
    }
}
)


    /*
    $('.coffee-list').append('<li>' + )
    
    $.each(coffee, function(coffeeName, categoryC) {

*/