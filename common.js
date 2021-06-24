$(document).ready(function () {    
    
            $('.numberonly').keypress(function (e) {    
    
                var charCode = (e.which) ? e.which : event.keyCode    
    
                if (String.fromCharCode(charCode).match(/[^0-9]/g))    
    
                    return false;                        
    
            });    
    
        }); 


        function INCHCMValidation(unit){
          debugger
          var flag = true;
                var length2 = document.getElementById("length2").value;
                var width2 = document.getElementById("width2").value;
                var depth2 = document.getElementById("depth2").value;

                length2 = parseFloat(length2);
                width2 = parseFloat(width2);
                depth2 = parseFloat(depth2);

          if(unit == "1"){
                if(length2 > 11 || width2 > 11 || depth2 > 11){
                 alert("Inch value is not valid!");
                 flag =  false;
                }
          }
          if(unit == "2"){
            if(length2 > 99 || width2 > 99 || depth2 > 99){
                alert("centimeter value is not valid!");
                flag = false;
               }
          }
          return flag;
        }
        function INCHCMValidationBrik(unit){
          debugger
          var flag = true;
                var length2 = document.getElementById("length2").value;
                var width2 = document.getElementById("width2").value;

                length2 = parseFloat(length2);
                width2 = parseFloat(width2);

          if(unit == "1"){
                if(length2 > 11 || width2 > 11){
                 alert("Inch value is not valid!");
                 flag =  false;
                }
          }
          if(unit == "2"){
            if(length2 > 99 || width2 > 99){
                alert("centimeter value is not valid!");
                flag = false;
               }
          }
          return flag;
        }


        function INCHCMValidationSteel(unit){
          debugger
          var flag = true;
                var length2 = document.getElementById("length2").value;

                length2 = parseFloat(length2);

          if(unit == "1"){
                if(length2 > 11){
                 alert("Inch value is not valid!");
                 flag =  false;
                }
          }
          if(unit == "2"){
            if(length2 > 99){
                alert("centimeter value is not valid!");
                flag = false;
               }
          }
          return flag;
        }
        
        