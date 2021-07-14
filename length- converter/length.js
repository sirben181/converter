var input=document.getElementById('input');
var result=document.getElementById('result');
var inputType=document.getElementById('inputType');
var resultType=document.getElementById('resultType');
var inputTypeValue, resultTypevalue;

//adding the event listener
input.addEventListener('keyup', myResult);
inputType.addEventListener('change',myResult);
resultType.addEventListener('change',myResult);
//taking the initial value
inputTypeValue=inputType.value;
resultTypevalue=resultType.value;
function myResult(){
//comparing the input and result

inputTypeValue=inputType.value;
resultTypeValue=resultType.value;
//adding the formulas
if(inputTypeValue==='meter' && resultTypeValue==='kilometer'){
    result.value=Number(input.value)*0.001;
}else if(inputTypeValue==='meter' && resultTypeValue==='centimeter'){
    result.value=Number(input.value)*100;
}else if(inputTypeValue==='meter' && resultTypeValue==='mile'){
result.value=Number(input.value)/1600
}else if(inputTypeValue==='meter' && resultTypeValue==='meter'){
    result.value=input.value
}else if( inputTypeValue==='meter' && resultTypeValue==='millimeter'){
result.value=Number(input.value)*1000
}
if(inputTypeValue==='kilometer' && resultTypeValue==='meter'){
    result.value=Number(input.value)/1000;
 } else if(inputTypeValue==='kilometer' && resultTypeValue==='mile'){
result.value=Number(input.value)/1.6
    }else if(inputTypeValue==='kilometer' && resultTypeValue==='centimeter'){
    result.value=Number(input.value)*100000;
}else if(inputTypeValue==='kilometer' && resultTypeValue==='kilometer'){
    result.value=input.value
}else if(inputTypeValue==='kilometer' && resultTypeValue==='millimeter'){
    result.value=Number(input.value)*1000000
}
if(inputTypeValue==='centimeter' && resultTypeValue==='kilometer'){
    result.value=Number(input.value)*0.00001;
}
else if(inputTypeValue==='centimeter' && resultTypeValue==='mile'){
result.value=Number(input.value)/160000
}else if(inputTypeValue==='centimeter' && resultTypeValue==='meter'){
    result.value=Number(input.value)*0.01;
}else if(inputTypeValue==='centimeter' && resultTypeValue==='centimeter'){
    result.value=input.value
}else if(inputTypeValue==='centimeter' && resultTypeValue==='millimeter'){
    result.value=Number(input.value)*0.1
}
if(inputTypeValue==='mile' && resultTypeValue==='kilometer'){
    result.value=Number(input.value)*1.6
}else if(inputTypeValue==='mile' && resultTypeValue==='meter'){
    result.value=Number(input.value)*1600
}else if(inputTypeValue==='mile' && resultTypeValue==='centimeter'){
    result.value=Number(input.value)*160000
}else if(inputTypeValue==='mile' && resultTypeValue==='millimeter'){
    result.value=Number(input.value)*1600000
}else if(inputTypeValue==='mile' && resultTypeValue==='mile'){
    result.value=input.value
}if(inputTypeValue==='millimeter' && resultTypeValue==='kilometer'){
    result.value=Number(input.value)/1000000
}else if(inputTypeValue==='millimeter' && resultTypeValue==='meter'){
    result.value=Number(input.value)/1000
}else if(inputTypeValue==='millimeter' && resultTypeValue==='centimeter'){
    result.value=Number(input.value)/10
}else if(inputTypeValue==='millimeter' && resultTypeValue==='millimeter'){
    result.value=input.value
}else if(inputTypeValue==='millimeter' && resultTypeValue==='mile'){
    result.value=Number(input.value)/1600000
}

}