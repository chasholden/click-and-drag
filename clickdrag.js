$('#red').on( "mousedown", trackRed );
$('#blue').on( "mousedown", trackBlue );

var redStart = $("#red").offset;

function trackRed(){
  
  $( document ).on( "mousemove", function( evt ) {
    var redEnd = {
        x : evt.pageX,
        y : evt.pageY
    };
    
    $('#red').offset({
              left : redEnd.x,
              top : redEnd.y
    });
    
    
    $( document ).on( "mouseup", function( evt ) {
    evt.preventDefault();
    $(document).off('mousemove');
    
  });
});
}

function trackBlue(){
  
  $( document ).on( "mousemove", function( evt ) {
  var blueEnd = {
        x : evt.pageX,
        y : evt.pageY
    };
  
  $('#blue').offset({
              left : blueEnd.x,
              top : blueEnd.y
    });
    
  $( document ).on( "mouseup", function( evt ) {
    evt.preventDefault();
    $(document).off('mousemove');
    });
  });
}