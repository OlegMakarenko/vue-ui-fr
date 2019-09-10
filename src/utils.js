export function convertServerDate(unixTime) {

    var date = new Date(unixTime * 1000);
    var hour = date.getHours();
    var day = date.getDay();
    var month = date.getMonth();
    var min = "0" + date.getMinutes();
    var sec = "0" + date.getSeconds();

    if(month == 0){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Января"
    } 

    if(month == 1){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Февраля"
    } 

    if(month == 2){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Марта"
    } 

    if(month == 3){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Апреля"
    } 

    if(month == 4){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Мая"
    } 

    if(month == 5){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Июня"
    } 

    if(month == 6){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Июля"
    } 

    if(month == 7){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Августа"
    }  

    if(month == 8){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Сентября"
    }   

    if(month == 9){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Октября"
    }   

    if(month == 10){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Ноября"
    }   

    if(month == 11){
        return hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " Декабря"
    }   

    var result = hour + ":" + min.substr(-2) + ":" + sec.substr(-2) + " " + day + " " + month;
    return result;

}

