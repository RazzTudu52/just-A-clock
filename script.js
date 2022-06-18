function showTime() {
    var date = new Date();
    var h = date.getHours();
    var m = date.getMinutes();
    var s = date.getSeconds();
    var session = 'AM';
    // console.log(h+":"+m+":"+s);
    if(h==0){
        h==12;
    }
    if(h>12){
        session = 'PM';
    }
    h = (h<10)?'0'+h:h;
    m = (m<10)?'0'+m:m;
    s = (m<10)?'0'+m:m;
    // setInterval(showTime, 1000);

        var time = h+":"+m+":"+s+" "+session;
        document.getElementById('clockDisplay').innerText = time;
        document.getElementById('clockDisplay').textContent = time;
        document.getElementById('clockDisplay').innerHTML = time;
 
    // printTime();
    // setInterval( printTime, 1000);

    setInterval(showTime, 1000);
}

showTime();
