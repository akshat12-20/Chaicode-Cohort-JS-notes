// const person = {
//     x:10,
//     firstName: 'Piyush',
//     lastName:'Garg',
//     hobbies: ['Coding', 'Walking'],
//     isMarried: false,
//     hasGf: false,
//     hadGf: false,
//     hadCrush: Infinity,
//     getFullName: function(){
//         return 'Piyush Garg'
//     },
//     address:{
//         hno:1,
//         street:1,
//         countryCode: 'IN',
//         state: 'PB'
//     }

// }


// console.log(person.address.hno)
// //use-cases of objects: To group, real-life implementation.

// const remote= {
//     color: black,
//     brand: samsung,
//     dimensions: {height:1, width:1},
//     turnOff: function(){

//     },
//     volumeUp: function(){

//     }

// }

// let fname = 'Hitesh'
// let fname2= fname
// console.log(fname2)
// console.log(fname)


// fname2= 'Piyush'
// console.log(fname);


// let p1= {
//     fname: 'Hitesh'
// }

// let p2=p1
// p2.fname = 'Piyush'

// console.log(p2);// will give piyush
// console.log(p1);//will give piyush--> but why???




let p1= {
    fname: 'Hitesh',
    lname:'Ch',
    address:{
        h:1,
        s:1
    }
}

let p2={
    fname: p1.fname,
    lname: p1.lname,
    address: p1.address// this is by reference.

}
//Agr p1 ke andr 1000 key:value pairs hotey too kya krtey.
// let p2={
//     ...p1// Spread operator...// doesn't include inner objects.
/// ... operator make shallow copy.
// }
// p1 & p2 are two different memory locations in heap.
p2.fname='Piyush'
p2.lname='Garg'
p2.address.h=2// this will change of p1 too.
console.log(p2);
console.log(p1);

//deep copy
const p1KaString= JSON.stringify(p1)
console.log(p1KaString);
let p2= JSON.parse(p1KaString)//parse character by character read krta hai.
//this is complex & time-taking but will do the work. That's the trade-off.


