$(document).ready(function(){
  $(".ajax-done-btn").on("click", function(e){
    e.preventDefault();
    var btn = $(this);
    $.ajax(btn.attr('href'),{
      type:'put',
      dataType:'json'
    }).done(function(data){
      btn.before("DONE!");
      btn.remove();
    });
  })

var rows = $('.table2 tr');
  rows.hide()

  $('#goal-mind').on("click", function(e){
    e.preventDefault();
    rows.hide();
    $('.goal-type-mind').show();
  })

  $('#goal-body').on("click", function(e){
    e.preventDefault();
    rows.hide();
    $('.goal-type-body').show();
  })

  $('#goal-social').on("click", function(e){
    e.preventDefault();
    rows.hide();
    $('.goal-type-social').show();
  })

  $('#goal-personal-growth').on("click", function(e){
    e.preventDefault();
    rows.hide();
    $('.goal-type-personal-growth').show();
  })

  $('#goal-world-takeover').on("click", function(e){
    e.preventDefault();
    rows.hide();
    $('.goal-type-world-takeover').show();
  })
});

//   var rows = $('table.someclass tr');

// $('#showBlackButton').click(function() {
//     var black = rows.filter('.black').show();
//     rows.not( black ).hide();
// });

// $('#showWhiteButton').click(function() {
//     var white = rows.filter('.white').show();
//     rows.not( white ).hide();
// });

// $('#showAll').click(function() {
//     rows.show();
// });

    // var goals = $(this);
    //   goals.show('.table2');

// $('.ajax-done-btn').on("click", function(e){
//     e.preventDefault();
//     e.stopPropagation();
//     var btn = $(this);
//     $.ajax(btn.attr('href'),{
//       type:'put',
//       dataType:'json'
//     }).done(function(data){
//       btn.before("DONE!");
//       btn.remove();
//     });

//   $('.ajax-goal-add-remove').on("click", function(e){
//     e.preventDefault();
//        e.stopPropagation();
//     var btn = $(this);
//     $.ajax(btn.attr('href'),{
//       type:'put',
//       dataType:'json'
//     }).done(function(data){
//      var = btn.closest('tr').hide();
//       btn.remove();
//     });
//   });

// $('.ajax-goal-custom-remove').on("click", function(e){
//     e.preventDefault();
//     var btn = $(this);
//     $.ajax(btn.attr('href'),{
//       type:'put',
//       dataType:'json'
//     }).done(function(data){
//       btn.hide();
//       btn.closest('tr').hide();
//     });
//   });
//   $(".ajax-goal-form").on("submit", function(e){
//     e.preventDefault();

//   });

// end document ready





// $.ajax('http://localhost:3000/users/36/goalscomplete',{type:'put',dataType:'json'}).done(function(data){console.log(data);});

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

