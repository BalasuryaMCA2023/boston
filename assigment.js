import { boston } from "./boston.js";
var newData=boston.data;
var ele="";
var temp="";


for(let i=0;i<newData.length;i++){
    for(let j=i+1;j<newData.length;j++){
        if(newData[i][11]<newData[j][11]){
            temp=newData[i];
            newData[i]=newData[j];
            
            newData[j]=temp;
        }
    }
}

let output=newData.slice(0,5);
for(let i=0;i<output.length;i++){
ele=ele+"<h1>"+output[i][8]+"</h1>"+"<h1>"+output[i][11]+"</h1>"
console.log(output[i][8],output[i][11])
}
document.getElementById("app").innerHTML=ele;
        
    


