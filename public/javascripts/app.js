/**
 * Created by kamiekehrwald on 8/29/15.
 */
//logic and animation stuff goes here!

//var classAssign = 0; //variable for assigning the class that says where the text should display
var studentId = 1;

var $divJumbo = $('<div class="jumbotron">');
var $h1 = $('<h1>');
var $p = $('<p>');
var $btn = $('<p><a class="btn btn-primary btn-lg" id="next">Next</a>');

function shoutoutAnimate(obj){

    $divJumbo.hide();

    $h1.text(obj.name);
    $p.text(obj.shoutout);
    $divJumbo.append($h1).append($p).append($btn);
    $('#content').append($divJumbo);

    console.log('animate!');

    $divJumbo.fadeIn(3000);
}



function getCohort(){
    $.ajax({
        type: 'GET',
        dataType: 'json',
        url: '/shoutouts/',
        complete: function () {
            console.log('Ajax for getting cohort complete');
        },
        success: function (data) {
           shoutoutAnimate(data[studentId]);
        }
    });
    }

$(document).ready(function() {
    $('#quote1').hide();
    $('#quote2').hide();

    $("#start").click(function () {
        $('#start').fadeOut();
        console.log('animate!');
        $("#quote1").fadeIn(3000, function () {
            $('#quote1').delay(1000).fadeOut(3000, function() {
                $("#quote2").fadeIn(3000, function () {
                    $('#quote2').delay(1000).fadeOut(3000, function() {
                        getCohort();
                        studentId++;

                    });
                });
            });
        });
    });

    $("#content").on('click', '#next', function(){
        $divJumbo.fadeOut(3000, function(){
            getCohort();
            studentId++;
        });

    });
});

