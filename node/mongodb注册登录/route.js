function route(parmes,path,porstfix,porst,chk){
    var fun;
    if (porstfix) {
        fun = porst['/public'];
    }else{
        fun = porst[path];
    }
    if (typeof(fun)=="function") {
        fun(parmes,path,porstfix,(data)=>{
            chk(data);
        });
    }
}
exports.route = route;