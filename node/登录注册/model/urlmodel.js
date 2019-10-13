function Model(){
    this.pathname ="";
    this.postfix = "",
    this.parms = {},
    this.parse = function(pathname,postfix,parms){
        this.pathname =pathname;
        if (!pathname.substr(1)) {
            pathname = "/404.html"
        };
        this.postfix = postfix;
        this.parms = parms;
    }
}

module.exports = Model