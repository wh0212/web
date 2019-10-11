function route(pathname,porstfix,parame,houst,callbloc){
    var fun;
    if (porstfix) {
        fun = houst["/read"];
    }else{
        fun = houst[pathname];
    }
    
    if (typeof(fun) == "function") {
        fun(pathname,porstfix,parame,(data)=>{
            callbloc(data);
        })
    } 
}

exports.route = route;