let name ='Mayank';
const US_STATES = 50;
let sum=5+4; //sum of integer value 5 and 4
function sayHello(){
    console.log("Hello World!");
}
sayHello();
function checkAge(name,age){
    if(age<21)
    {
        console.log("Sorry "+name+",you aren't old enough to view this page!");
    }
}
checkAge('Charles',27);
checkAge('Abby',24);
checkAge('James',20);
checkAge('John',17);
let vegetables = ['Onion','Carrot','Cabbage','Tomato','Corn'];
for(var i=0;i<5;i++)
{
    console.log(vegetables[i]);
}
let obj=[{name:"Jon",age:22 } ,{name:"Doe",age:24} ,{name:"Sven",age:19}, {name:"Felix",age:17}];
for( i=0;i<4;i++)
{
checkAge(obj[i].name,obj[i].age);
}
function getLength(word){
 
    return word.length;
}
var length=getLength('HelloWorld!');
if(length%2==0)
{
    console.log('the world is nice and even' + length);
}
else
console.log('world is odd ' + length);