

function suma(a,b){
    if(arguments.length<2){
        console.log("Hacen falta dos argumentos como minimo");
     } else {
        var result = 0;
        for(var i=0; i < arguments.length; i++){ 
                     
                result +=arguments[i];}       
        console.log(result);      
    }
};
suma(2,4,2,20)
