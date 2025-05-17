//Bài 1
const car = { 
    make : "Toyota",
    model : "Corolla",
    year : 2021
}
console.log("Năm sản xuất của xe là:",car.year)


//Bài 2
const person = {
    name : "Ngoc Tan",
    address : {
        street : "Hoang Dieu",
        city : "Ho Chi Minh",
        country : "Viet Nam"
    }
}
console.log("Street:",person.address.street)


//Bài 3
const student = {
    name : "Ryan",
    grades : {
        math : 10,
        english : 10
    }
}
console.log(student["grades"]["math"])


//Bài 4
const settings = {
    volume : 100,
    brightness : 20
}
settings.volume = 80;
console.log("Object mới là:",settings)


//Bài 5
const bike = {
    brand : "Lamborghini"
}
bike.color = "Grey";
console.log(bike)


//Bài 6
const employee = {
    name : "Ryan",
    age : 25
}
delete employee.age
console.log(employee)


//Bài 7
const school = {
    classA : ["An", "Bình", "Châu"],
    classB : ["Đào", "Hương", "Giang"]
}
console.log(school)