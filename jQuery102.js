$('#btn').click(function() {
    var x = $('#dataBox').val();
    alert(x + '\ngood to go');
});

var a1 = 194;
var a2 = 106;
var time = 1000;

$('#myDiv').hover(
    function() {
        $(this).html('BIG');
        $(this).css('border', '2px solid orange');
        $(this).animate(
            {
                height: '+=100',
                width: '+=20',
                borderRadius: '2px',
            },
            200
        );
    },
    function() {
        $(this).html('small');
        $(this).css('border', 'none');
        $(this).animate(
            {
                height: "-=100",
                width: '-=20',
                borderRadius: '8px'
            },
            200
        );
    }
);

$('#myDiv').click(function(){
    var attri = $('#myDiv').data("attr");
    alert(attri);
});
