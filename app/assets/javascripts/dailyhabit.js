$(document).ready(function(){
  $(".glyphicon-ok").on("click", function(){
    console.log($(this))
    $.ajax({
      url: "update",
      data: $(this),
      type: "PUT",
      success: function () {
        $(this).addClass("disabled");
        $(this).slideToggle();
      }
    })
  })
})

//$('#new_addgoal').hide().after('<%= escape_javascript (render @goal) %>');

jQuery.fn.submitOnCheck = function() {
  this.find('input[type=submit]').remove();
  this.find('input[type=checkbox]').click(function() {
    $(this).parent('form').submit();
  });
  return this;
}

$(function() {
  $('#goals_form').submitOnCheck();
});


// glyphicon to change to something else
// completed today = true, save that
//
//deleting
//active=false

//user profile
//each loop, active false don't display,
//if complete = true

//for update
//for custom goals - always display active or not
//if goal type = user not active...find or create on user custom goals
//don't delete user goals, just inactive.



