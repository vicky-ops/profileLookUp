// Setup
var contacts = [
    {
        "firstName": "Akira",
        "lastName": "Laine",
        "number": "0543236543",
        "likes": ["Pizza", "Coding", "Brownie Points"]
    },
    {
        "firstName": "Harry",
        "lastName": "Potter",
        "number": "0994372684",
        "likes": ["Hogwarts", "Magic", "Hagrid"]
    },
    {
        "firstName": "Sherlock",
        "lastName": "Holmes",
        "number": "0487345643",
        "likes": ["Intriguing Cases", "Violin"]
    },
    {
        "firstName": "Kristian",
        "lastName": "Vos",
        "number": "unknown",
        "likes": ["JavaScript", "Gaming", "Foxes"]
    }
];
// console.log(contacts[0]["firstName"]);

function searchNumber(name){
    for (var i=0;i<contacts.length;i++){
        if(contacts[i].firstName===name){
            console.log(contacts[i].number);
        }else if(contacts[i]!==name){
           // console.log("Name not found, Try again");
           if(name==""){
               console.log("Input can't be empty");
               break;
           }else{
               console.log(name+" Not found contacts");
               break;
           }

        }
    }
}
searchNumber("Sherlock");
searchNumber("");
searchNumber("Kristian");
searchNumber("Harry");
searchNumber("Vicky");
searchNumber("");
searchNumber("Ram");
searchNumber("Sham");


