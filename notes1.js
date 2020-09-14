/*console.log('xyz')
 function myfunction(){
     console.log('inside')
 }



try { 

   function mynewwfunction() {
       console.log('before new')
     xyz()
     wrq()
   }
async function newfunction() {
    await mynewwfunction()
    console.log( 'after mynew' )

}
newfunction();
 
}
catch(err) {
 console.log('err',err)
}


console.log('after')*/

/*let arr = ["z","m","r","a"];
arr.sort();
console.log(arr);
arr.reverse();
console.log(arr);*/

/*let arr1 = [56,2,98,5,12,0,65,32,3]
arr1.sort();
console.log(arr1);*/
var points = [40, 100, 1, 5, 25, 10];

for (i = points.length -1; i > 0; i--) {
  j = Math.floor(Math.random() * i)
  k = points[i]
  points[i] = points[j]
  points[j] = k
} 
console.log(points);