/*
    Author: Jahongir Sobirov
    Name: Math.js
    Version: 1.8.6
    Created date: 26.01.2021 12.07
    License: MIT
*/
$(document).ready(function(){
    var get_attr = $("#math_app").attr("get:method");
    var get_val = $("#math_app").val();
    var view_in = $("#math_app").attr("view-in");
    var get_hide = $("#math_app").attr("hide");
    var get_num = $("#math_app").attr("get:num");
    var get_func = $("#math_app").attr("import:func");
    var get_powgrade = $("#math_app").attr("pow:grade");
    var get_atan2_firstval = $("#math_app").attr("atan2:val(1st)");
    var get_atan2_secondval = $("#math_app").attr("atan2:val(2nd)");
    var get_mathjs = $("import:math.js").html("<script src='mathjsv1.9.8.js'></script>");
    var get_others = $("import:others").html("<script src='https://ajax.googleapis.com/ajax/libs/jquery/3.5.1/jquery.min.js'></script>");
    if(get_attr == "sqrt"){
        var sqrt_num = Math.sqrt(get_val);
        $(view_in).text(sqrt_num);
    }else if(get_attr == "round"){
        var round_num = Math.round(get_val);
        $(view_in).text(round_num);
    }else if(get_attr == "abs"){
        var abs_num = Math.abs(get_val);
        $(view_in).text(abs_num);
    }else if(get_attr == "mod"){
        var mod_num = Math.abs(get_val);
        $(view_in).text(mod_num);
    }else if(get_attr == "ceil"){
        var ceil_num = Math.ceil(get_val);
        $(view_in).text(ceil_num);
    }else if(get_attr == "floor"){
        var floor_num = Math.floor(get_val);
        $(view_in).text(floor_num);
    }else if(get_attr == "sin"){
        var sin_num = Math.sin(get_val);
        $(view_in).text(sin_num);
    }else if(get_attr == "cos"){
        var cos_num = Math.cos(get_val);
        $(view_in).text(cos_num);
    }else if(get_attr == "random"){
        var random_num = Math.random(get_val);
        $(view_in).text(random_num);
    }else if(get_attr == "acos"){
        var acos_num = Math.acos(get_val);
        $(view_in).text(acos_num);
    }else if(get_attr == "acosh"){
        var acosh_num = Math.acosh(get_val);
        $(view_in).text(acosh_num);
    }else if(get_attr == "cbrt"){
        var cbrt_num = get_val*get_val*get_val;
        $(view_in).text(cbrt_num);
    }else if(get_attr == "sqr"){
        var sqr_num = get_val*get_val;
        $(view_in).text(sqr_num);
    }else if(get_attr == "asinh"){
        var asinh_num = Math.asinh(get_val);
        $(view_in).text(asinh_num);
    }else if(get_attr == "log"){
        var log_num = Math.log(get_val);
        $(view_in).text(log_num);
    }else if(get_attr == "cosh"){
        var cosh_num = Math.cosh(get_val);
        $(view_in).text(cosh_num);
    }else if(get_attr == "tan"){
        var tan_num = Math.tan(get_val);
        $(view_in).text(tan_num);
    }else if(get_attr == "tanh"){
        var tanh_num = Math.tanh(get_val);
        $(view_in).text(tanh_num);
    }else if(get_attr == "trunc"){
        var trunc_num = Math.trunc(get_val);
        $(view_in).text(trunc_num);
    }else if(get_attr == "exp"){
        var exp_num = Math.exp(get_val);
        $(view_in).text(exp_num);
    }else if(get_func == "atan2"){
        var atan2_num = Math.atan2(get_atan2_firstval, get_atan2_secondval);
        $(view_in).text(atan2_num);
    }else if(get_attr == "asin"){
        var asin_num = Math.asin(get_val);
        $(view_in).text(asin_num);
    }else if(get_attr == "tan"){
        var tan_num = Math.tan(get_val);
        $(view_in).text(tan_num);
    }else if(get_attr == "tanh"){
        var tanh_num = Math.tanh(get_val);
        $(view_in).text(tanh_num);
    }else if(get_num == "PI"){
        var PI_num = Math.PI;
        $(view_in).text(PI_num);
    }else if(get_num == "E"){
        var E_num = Math.E;
        $(view_in).text(E_num);
    }else if(get_num == "LN2"){
        var LN2_num = Math.LN2;
        $(view_in).text(LN2_num);
    }else if(get_num == "LN10"){
        var LN10_num = Math.LN10;
        $(view_in).text(LN10_num);
    }else if(get_num == "SQRT2"){
        var SQRT2_num = Math.SQRT2;
        $(view_in).text(SQRT2_num);
    }else if(get_num == "SQRT1/2"){
        var SQRT1_2_num = Math.SQRT1_2;
        $(view_in).text(SQRT1_2_num);
    }else if(get_num == "LOG2E"){
        var LOG2E_num = Math.LOG2E;
        $(view_in).text(LOG2E_num);
    }else if(get_num == "LOG10E"){
        var LOG10E_num = Math.LOG10E;
        $(view_in).text(LOG10E_num);
    }else if(get_func == "pow"){
        var pow_num = Math.pow(get_val, get_powgrade);
        $(view_in).text(pow_num);
    }
    if(get_hide == "this"){
        var hided = $("#math_app").hide();
    }else if(get_hide == "val"){
        $(view_in).hide();
    }
var get_met = $("sqrt").attr("get:val");
var give_val = $("sqrt").text(Math.sqrt(get_met));
var get_met = $("cbrt").attr("get:val");
var give_val = $("cbrt").text(get_met*get_met*get_met);
var get_met = $("sqr").attr("get:val");
var give_val = $("sqr").text(get_met*get_met);
var get_met = $("round").attr("get:val");
var give_val = $("round").text(Math.round(get_met));
var get_met = $("mod").attr("get:val");
var give_val = $("mod").text(Math.abs(get_met));
var get_met = $("sin").attr("get:val");
var give_val = $("sin").text(Math.sin(get_met));
var get_met = $("sinh").attr("get:val");
var give_val = $("sinh").text(Math.sinh(get_met));
var get_met = $("acos").attr("get:val");
var give_val = $("acos").text(Math.acos(get_met));
var get_met = $("acosh").attr("get:val");
var give_val = $("acosh").text(Math.acosh(get_met));
var get_met = $("tan").attr("get:val");
var give_val = $("tan").text(Math.tan(get_met));
var get_met = $("tanh").attr("get:val");
var give_val = $("tanh").text(Math.tanh(get_met));
var get_met = $("asin").attr("get:val");
var give_val = $("asin").text(Math.asin(get_met));
var get_met = $("asinh").attr("get:val");
var give_val = $("asinh").text(Math.asinh(get_met));
var get_met = $("cos").attr("get:val");
var give_val = $("cos").text(Math.cos(get_met));
var get_met = $("cosh").attr("get:val");
var give_val = $("cosh").text(Math.cosh(get_met));
var get_met = $("log").attr("get:val");
var give_val = $("log").text(Math.log(get_met));
var get_met = $("log10").attr("get:val");
var give_val = $("log10").text(Math.log10(get_met));
var get_met = $("log1p").attr("get:val");
var give_val = $("log1p").text(Math.log1p(get_met));
var get_met = $("random").attr("get:val");
var give_val = $("random").text(Math.random(get_met));
var get_pgr = $("pow").attr("pow:grade");
var get_met = $("pow").attr("get:val");
var give_val = $("pow").text(Math.pow(get_met, get_pgr));
var get_trunc = $("trunc").attr("get:val");
var give_val = $("trunc").text(Math.trunc(get_met));
var get_view = $("view").attr("get:view");
var give_val = $("view").text(get_view);
$("pi").text(Math.PI);
$("e").text(Math.E);
$("ln2").text(Math.LN2);
$("ln10").text(Math.LN10);
$("sqrt2").text(Math.SQRT2);
$("sqrt1/2").text(Math.SQRT1_2);
$("log2e").text(Math.LOG2E);
$("log10e").text(Math.LOG10E);
});
