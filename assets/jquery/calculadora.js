$(function(){
    let campo="";
    let resultado=0;
    let valor;
    $("button").on("click",function(){
        valor = $(this).data("calc");
        if(valor == "="){
            resultado = eval(campo);
            $("input").attr("value", resultado);
            campo = "";
        }else if(valor == "AC"){
            campo = "";
            $("input").attr("value", campo);  
        }else{
            campo = campo + valor;
            $("input").attr("value", campo);
        }
    });
});