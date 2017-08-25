$(function(){
    let nameInput = $('#name');
    nameInput.keyup(function() {
        $('#greet').text('Hello ' + nameInput.val());
    })
})