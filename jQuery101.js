$('#btn').click(function() {
    var x = document.querySelector('#dataBox').value;
    alert(x + ' It\'s alive!');
});

$('#dataBox').focus(function() {
    $('#myDiv').html('Whoop, there it is');
});
$('#dataBox').blur(function() {
    $('#myDiv').html('hi');
});


$('#myDiv').hover(
    function() {
    $(this).css("border", "1px solid red");
    },
    function() {
    $(this).css("border", "1px solid white");
});

$('p').hover(
    function() {
        $(this).css('background-color', 'rgb(50, 64, 73)');
        $(this).css('color', 'white');
    },
    function() {
        $(this).css('background-color', 'rgb(110, 160, 200)');
        $(this).css('color', 'black');
    }
);
$('#counter').hover(
    function() {
        $(this).css('background-color', 'rgb(50, 64, 73)');
        $(this).css('color', 'white');
    },
    function() {
        $(this).css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
        $(this).css('color', 'black');
    }
);

var a = 110;
var b = 160;
var c = 200;
$('#p1').mousedown(function() {
    $('#counter').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
    a += 10;
    $('.optBox').slideToggle(200);
});
$('#p2').mouseup(function() {
    $('#counter').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
    b += 10;
    $('#counter').slideDown(400);
});
$('#p3').mouseover(function() {
    $('#counter').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
    c += 10;
});
$('#p4').mouseout(function() {
    $('#counter').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
    a -= 10;
});
$('#p5').mouseenter(function() {
    $('#counter').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
    b -= 10;
});
$('#p6').mouseleave(function() {
    $('#counter').css('background-color', 'rgb(' + a + ', ' + b + ', ' + c + ')');
    c -= 10;
});

$('#counter').click(function() {
    $(this).slideUp(400);
});

var count = 0;
$(window).mousedown(function() {
    count++;
    $('#counter').html(count);
});

$('#dataBox').keydown(function(e) {
    var keycode = (e.keyCode ? e.keyCode : e.which);
    if (keycode==97 || keycode==37) {
        $('#myDiv').html('Left');
    } else if (keycode==119 || keycode==38) {
        $('#myDiv').html('Up');
    } else if (keycode==100 || keycode==39) {
        $('#myDiv').html('Right');
    } else if (keycode==115 || keycode==40) {
        $('#myDiv').html('Down');
    }
});