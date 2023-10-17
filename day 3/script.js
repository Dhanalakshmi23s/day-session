//creating a object
var a=5;
console.log(a);

//creating an object
var obj={
    name:"john",
    age: 23
}

//adding a key in obj
obj.gender="male";
console.log(obj);

//printing the particular key and value
console.log(obj.name);

// can we give an array in the object?...
//yes
var resume={
    name:"john",
    age:20,
    gender:"male",
    qualification:["10th","12th","B.E"],
    location:"kallakurichi",
    languages_known: ["tamil","english"]    
}
// console.log(resume);

// for printing the key in array
var obj={
    name:"john",
    age:20,
    gender:"male",
    attendance:["mon","tue","wed","thu"]    
}
// for (var i=0;i<obj.attendance.length;i++){
//     console.log(obj.attendance[i]);
// }

// for (var i in obj.attendance){
//     console.log(i,obj.attendance[i]);
// }

//JSON: javascript Object Notation.
var obj={
    "name":"john",
    "age":"20",
    "gender":"male",
}
console.log(obj);

//Array of object
var arr=[ 
    {
        "name":"joe",
        "age":"20" 
    },
    {
        "name":"ram",
        "age":"23"
    },
    {
        "name":"ram",
        "age":"25"
    },
    {
        "name":"dhanu",
        "age":"20"
    }];

console.log(arr);
for (var i=0;i<arr.length;i++){
    console.log(arr[i].name,"",arr[i].age)

}

//Hoisting...
console.log(a);
var a= 5;
var b=6;
console.log(b);


//copy by value....




