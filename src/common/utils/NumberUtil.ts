
class NumberUtil {

    public formatCurrency(number: number) {
        try{
            return number.toFixed(2);
        }catch (e) {
            return number;
        }
    }

    public number_format(number: any, decimals?: any, dec_point?: any, thousands_sep?: any) {
        var n = number,
            c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point == undefined ? "," : dec_point;
        var t = thousands_sep == undefined ? "." : thousands_sep,
            s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j: number = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + " iXu";
    }

    public formatNumber(number: any, decimals?: any, dec_point?: any, thousands_sep?: any) {
        var n = number,
            c = isNaN(decimals = Math.abs(decimals)) ? 2 : decimals;
        var d = dec_point == undefined ? "," : dec_point;
        var t = thousands_sep == undefined ? "." : thousands_sep,
            s = n < 0 ? "-" : "";
        var i = parseInt(n = Math.abs(+n || 0).toFixed(c)) + "",
            j: number = (j = i.length) > 3 ? j % 3 : 0;

        return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t);
    }
    public secondsToHms(d:any) {
        d = Number(d);
        var h:any = Math.floor(d / 3600);
        var m:any = Math.floor(d % 3600 / 60);
        var s:any = Math.floor(d % 3600 % 60);
        if(h<10){
            h="0"+h
        }
        if(m<10){
            m="0"+m
        }
        if(s<10){
            s="0"+s
        }
        if(h>=0&&m>=0&&s>=0){
            return h+":" +m+":" +s; 
        }
        else{
            return "00:00:00"  
        }        
    }
    public htmsToSeconds(time:string) {
        const data=time.split(':')
        return parseInt(data[2])+parseInt(data[1])*60+parseInt(data[0])*60
    }
    public convertMillisecondToDateTime(timestamp: number) {
        var months_arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        var date = new Date(timestamp);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds()
        var convdataTime = day + ' thg ' + month + ', ' + year + ' - ' + hours + ':' + minutes.substr(-2) 
        return convdataTime;
    }
    public convertUtcToDateTime(utcTime:string) {
        var months_arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        const timestamp: number = new Date(utcTime).getTime() / 1000
        var date = new Date(timestamp * 1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var seconds = "0" + date.getSeconds()
        var convdataTime = hours + ':' + minutes.substr(-2)+ ', ' + day + '/' + month + '/' + year 
        // var convdataTime = day + ' thg ' + month + ', ' + year + ' - ' + hours + ':' + minutes.substr(-2) 
        return convdataTime;
    }

    public convertUtcToTime(utcTime: string) {
        const timestamp: number = new Date(utcTime).getTime() / 1000
        var date = new Date(timestamp * 1000);
        var hours = date.getHours();
        var minutes = "0" + date.getMinutes();
        var convdataTime = hours + ':' + minutes.substr(-2);
        return convdataTime;
    }
    public convertUtcToDate(utcTime:string) {
        var months_arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
        const timestamp: number = new Date(utcTime).getTime() / 1000
        var date = new Date(timestamp * 1000);
        var year = date.getFullYear();
        var month = months_arr[date.getMonth()];
        var day = date.getDate();

        var convdataTime = day + '/' + month + '/' + year 
        // var convdataTime = day + ' thg ' + month + ', ' + year + ' - ' + hours + ':' + minutes.substr(-2) 
        return convdataTime;
    }
}


export const numberUtil = new NumberUtil();
