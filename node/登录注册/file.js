const fs = require("fs");
function File(){
    this.pathname = "";
    this.porstfix = "";
    this.data = {};
    this.read = function(pathname,porstfix,chk){
        this.pathname = pathname;   
        this.porstfix = porstfix;
        fs.readFile(this.pathname.substr(1),(err,data)=>{
            if (!err) {
                console.log(data);
                if (this.postfix == ".html") {
                    this.data.type = {'Content-Type':'text/html'}
                } else if(this.postfix == ".css"){
                    this.data.type = {'Content-Type':'text/css'}
                }else if(this.postfix == ".js"){
                    this.data.type = {'Content-Type':'application/javascript'}
                }else if(this.postfix == ".png"){
                    this.data.type = {'Content-Type':'image/png'}
                }
                this.data.data = data;
                chk(this.data)
            }
        })
    }
}

module.exports = File;