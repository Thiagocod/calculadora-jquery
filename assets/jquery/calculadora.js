$(function(){
    let campo="";
    let resultado=0;
    let texto;
    $("button").on("click",function(){
        texto = $(this).data("calc");
        if(texto == "="){
            resultado = eval(campo);
            $("input").attr("value", resultado);
            campo = "";
        }else if(texto == "AC"){
            campo = "";
            $("input").attr("value", campo);  
        }else{
            campo = campo + texto.toString();
            $("input").attr("value", campo);
        }
    });
});