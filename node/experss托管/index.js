const experss = require("express");
const url = require("url");
const query = require("querystring")
const fs = require("fs");
const app =experss();

app.use(experss.static("public"));

app.post('/server',(req,res)=>{
    var urll = url.parse(req.url);
    var cont = "";

    req.on("data",(shuju)=>{
        cont+=shuju;
    })

    req.on("end",()=>{

        conta = query.parse(cont);
        console.log(conta);
        fs.writeFile('main.json',cont,(err)=>{
        if (err) {
            console.log('shibai')
        }else{
            res.writeHead(200,{'Content-Type':'application/json'});
            var json = JSON.stringify({
                suss:"登录成功"
            });
            res.write(json);
            res.end();
        }
    })
    })


});

app.get('/login',(req,res)=>{
	var str = url.parse(req.url,true).query;
	fs.readFile('./public/main.json',(err,data)=>{
		if(err){
			console.log('json');
		}else{
            console.log(data);
            var json = data.toString("utf-8");
            var cloar = JSON.parse(json)
            var suer = cloar.username;
            var pwd = cloar.password;
            if (str.username == suer && str.password == pwd) {
                res.writeHead(200,{'Contet-Type':'application/json'});
                var json = JSON.stringify({
                    suss:"登录成功"
                });
                res.write(json);
                res.end();
            }
		}
	})
})

app.listen(8080,()=>{
    console.log('ok');
})
