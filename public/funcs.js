(function () {
    document.addEventListener('DOMContentLoaded', function () {

        document.getElementById("example").addEventListener("click", example);
        document.getElementById("qSyntax").addEventListener("click", qSyntax); 
        document.getElementById("qObj").addEventListener("click", qObj); 
        document.getElementById("qCalc").addEventListener("click", qCalc); 
        document.getElementById("qAsync").addEventListener("click", qAsync);      
    }, false);
    

   function example(){
       alert("example");
    }
   function qSyntax(){
    alert("syntax");
    }
    function qObj(){
        alert("obj");
    }
    function qCalc(){
        alert("calc");
    }
    function qAsync(){
        alert("async");
    }

   

})();
