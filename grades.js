function grades(score){
    switch(true) {
        case (score <= 100 && score >= 90):
            gscore = 'A';
            break;
        case (score <= 89 && score >= 80):
            gscore = 'B';
             break;
        case (score <= 79 && score >= 70):
            gscore = 'C';
             break;
        case (score <= 69 && score >= 60):
            gscore = 'D';
            break;
        case (score <= 59 && score >= 0):
            gscore = 'F';
            break;
    }
    console.log('Grade is : '+gscore);
}

const prompt = require("prompt-sync")();
const n = prompt('Enter marks of a student : ');
console.log(grades(n));