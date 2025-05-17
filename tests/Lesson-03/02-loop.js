//Bài 1
let sum = 0;
for(let i = 0; i<=100; i++){
    sum += i;
}
console.log("Tổng 100 số tự nhiên đầu tiên:",sum)

//Bài 2
for(let i = 2; i <= 9; i++){
    console.log("Bảng cửu chương",i)
    for(let j = 1; j <=10; j++){
        console.log(`${i} x ${j} = ${i * j}`);
    }
}


//Bài 3
let num = [];
for(let i = 1; i < 100; i += 2){
    num.push(i)    
}
console.log("Số lẻ từ 1 tới 99:",num);


//Bài 4
for(let i = 1; i <= 10; i++){
    console.log(`user${i}@example.com`)
}


//Bài 5
const revenue = [
    { month: 1, total: 100},
    { month: 2, total: 150 },
    { month: 3, total: 120 },
    { month: 4, total: 130 },
    { month: 5, total: 110 },
    { month: 6, total: 170 },
    { month: 7, total: 160 },
    { month: 8, total: 140 },
    { month: 9, total: 180 },
    { month: 10, total: 190 },
    { month: 11, total: 200 },
    { month: 12, total: 210 }
]

let totalRevenue = 0;
for(let i = 0; i < revenue.length; i++){
    totalRevenue += revenue[i].total
}
console.log("Tổng doanh thu là:",totalRevenue)