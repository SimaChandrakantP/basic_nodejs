var dict ;
dict=
{
    "firstname":"Seema",
    "lastname":"Patil",
    "USN":57,
    "Address":
    {
        "House_No":89,
        "Area":"shanti nagar",
        "city":"Haliyal",
        "pin_No":581329
    },
    "course":"NodeJs",
    "mark":90

};
var key;

for( key in dict) 
{
    console.log(key,":",dict[key]);
}
