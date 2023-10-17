//step 1:
var request = new XMLHttpRequest();
// console.log(request);

//step 2:
request.open("GET","https://restcountries.com/v3.1/all");
// console.log(request.open("GET","https://restcountries.com/v3.1/all"));

//step 3:
request.send()

//step 4:
request.onload=function(){
    var data=request.response
    // console.log(JSON.parse(data));
    var result=JSON.parse(data);
    // console.log(result[0].area);
    // console.log(result[0].name.common)

    //for accessing multiple values
    //for loop
    // for (var i=0;i<result.length;i++){
    //     console.log("area:"+result[i].area+"   name:"+result[i].name.common);
        
    // }

// for of loop
// for(var obj of result){
//     console.log(obj.area)
// }
// for(var index in result){
//     console.log(result[index].area)
// }
// for(var i in result){
//     console.log("region: "+result[i].region+" subregion: "+result[i].subregion)
// }
for (var i in result){
    if(result[i].name.common=="United Kingdom"){
        console.log("region: "+result[i].region+" subregion: "+result[i].subregion)
    }
}
// for (var obj of result){
//     if(obj.name.common=="United Kingdom"){
//         console.log("region: "+obj.region+" subregion: "+obj.subregion)
    
// }
// }

}



