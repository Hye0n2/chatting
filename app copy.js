const http = require('http');
const PORT = 5000;

// 서버 생성
http.createServer((req,res)=> {
    
    if(req.url === '/api/users'){
        const users = [
            {name: "Hong Gil Dong", age: 20},
            {name: "Park", age: 22},
            {name: "Kim", age: 19},
            {name: "Lee", age: 20},
            {name: "Chul", age: 25}
        ];
        res.write(JSON.stringify(users));
    } else if (req.url === '/api/todos'){
        const todo = [
            {name: "apple", color: "red"},
            {name: "peach", color: "peach"},
            {name: "watermellon", color: "green"},
            {name: "orange", color: "yellow" }
        ];
        res.write(JSON.stringify(todo));
    } else {
        res.write('<h1>Hello</h1>');

    }
    res.end();

    res.write('<h1>Hello NodeJs</h1>');
    res.end();
}).listen(PORT, ()=>{
    console.log(`Server running on ${PORT}`);
})