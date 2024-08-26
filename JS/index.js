var m = 10;
var ro = 1000;
var a = 1;

var _top = parseInt($("#box_div").css("top"));
var body = $("body");
var _width = parseInt(body.width());
var _height = parseInt(body.height());
var fluid = $("#fluid");


var update = function() {
    $("#box_div").css({
        top: _top + m/(ro*a*a)*100 + 100 - a*100
    });

    $("#h").text(`h = ${(m/(ro*a*a)*100 + 100 - a*100)} sm`);

    $("#height_line").css({
        height: m/(ro*a*a)*100 + 100 - a*100
    });

    $("#a1_div").css({
        top: _top + m/(ro*a*a)*100 + 100 - a*100,
        left: _width/2 - 78 + 50 - a*50 
    });

    $("#p_a1").css("margin-bottom", ((a*100)/2) - 10);

    $("#a2_div").css({
        top: _top + m/(ro*a*a)*100 + 100 - a*100 + 105,
        left: _width/2 - a*50
    });

    $("#p_a2").css("margin-left", (a*50 - 5));

    $("#p_h").css("margin-top", ((m/(ro*a*a)*100 + 100 - a*100)/2 - 10));
    
    if (_height < _top + m/(ro*a*a)*100 + 100 - a*100) {
        fluid.css("height", `${_top + m/(ro*a*a)*100}px`)
    }
} 

//inputs
$("#mass_range").on('input', function() {
    m = $(this).val();
    update();
    $("#mass").text(`Mass = ${m} kg`);
});

$("#ro_range").on('input', function() {
    ro = $(this).val();
    update();
    $("#ro").text("ρ = " + ro + " kg / m^3");
});

$("#a_range").on('input', function() {
    a = $(this).val();
    update();
    $("#box").css({
        width: a*100,
        height: a*100
    });
    $("#a1").css({
        height: a*100
    });
    $("#a2").css({
        width: a*100
    });
    $("#a").text(`a = ${a*100} sm`);
});

update();

$("#mass").text(`Mass = ${m} kg`);
$("#ro").text(`Density of the fluid = ${ro} kg / m^3`);
$("#a").text(`a = ${a*100} sm`);