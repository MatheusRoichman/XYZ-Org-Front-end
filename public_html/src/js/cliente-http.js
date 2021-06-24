function envia(json,classe) {
   var endereco = window.location.href;
   endereco = endereco.substr(0,endereco.indexOf('~')-1);
   //caso use no seu computador coloque na url: http://localhost:8000/test 
   var objeto = JSON.parse(json);
   var array = new Array(classe,objeto);
   var arrayJson = JSON.stringify(array);

   $.ajax({
     type: "POST",
     url: endereco+":8000/test",
     data: arrayJson
   });
}
