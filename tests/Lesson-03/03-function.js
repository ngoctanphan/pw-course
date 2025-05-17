//Bài 1
function multiply(a, b){
    return a*b;
}
console.log(multiply(3,6));
console.log(multiply(7,9));


//Bài 2
function findMin(a, b, c){
    return Math.min(a, b, c)
}
console.log(findMin(1,2,3));
console.log(findMin(18,51,26));


//Bài 3
const student = [
    { name: "G-Dragon", score: 9 },
    { name: "Ronaldo", score: 7 },
    { name: "Sơn Tùng", score: 8 }
]

function getTop(student, threhold){
    topStudents = [];
    for(let i = 0; i < student.length; i++){
        if(student[i].score >=threhold){
            topStudents.push(student[i].name);
        }
    }
    return topStudents;
}

console.log(getTop(student, 8))


//Bài 4
function calculateInterest(principal, rate, years){
    let interest = principal * rate * years / 100;
    let total = principal + interest;
    return total;
}
console.log(calculateInterest(1000,5,2))