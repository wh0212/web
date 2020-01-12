/**
 * 处理时间
 */


function timeFormat(param) {
    return param < 10 ? "0" + param : param;
}

export function countDown(endTime2, timeInterval, callback) {

    var interval = setInterval(() => {
        //当前时间
        let newTime = new Date().getTime();
        //结束时间
        let endTime = new Date(endTime2).getTime();

        let obj = null;

        if (endTime - newTime > 0) {
            let time = (endTime - newTime) / 1000; // 获取天、时、分、秒
            //天 (time / (60*60*24))
            let day = parseInt(time / (60 * 60 * 24));
            //时 (time /(60*60) %24)
            let hou = parseInt(time / (60 * 60) % 24);
            //分(itme /60%60)
            let min = parseInt(time / 60 % 60);
            //秒 (itme %60)
            let sec = parseInt(time % 60);
            obj = {
                day: timeFormat(day),
                hou: timeFormat(hou),
                min: timeFormat(min),
                sec: timeFormat(sec)
            };
        } else {
            obj = {
                day: "00",
                hou: "00",
                min: "00",
                sec: "00"
            };
            clearInterval(interval);
        }
        let count =
            obj.day + "天" + obj.hou + "时" + obj.min + "分" + obj.sec + "秒";
        callback(count)
    }, timeInterval);
}