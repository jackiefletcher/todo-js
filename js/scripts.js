var todo = function(list, task, date){
  // debugger;

  var new_todo = {list: list, task: task, date: date};
  return new_todo;
}

$(document).ready(function(){
  $('form#todo').submit(function(event){

    var task = $('input#task').val();
    var date = $('input#date').val();
    var object = todo("current-projects", task, date);
    var list = object.list;
    $(".show-results").show();

    $('.needs-doing').append('<li><span class="task-delete">' + object.task + '</span></li>');


    $('.task-delete').last().click(function() {
      $('.show-details').show();
      $('.task').text(object.task);
      $('.date').text(object.date);
    });


    $('.task-delete').last().dblclick(function() {
      $('.completed').append('<li><span class="task-details">' + object.task + "</span></li>");
      $(this).remove();

    });



$('.every').append('<li>' + Object.keys(object).length + "</li>");
    $('input#task').val("");
    $('input#date').val("");

    event.preventDefault();

  });
});
