var random;
random = Math.floor(Math.random()*100)+1;

for(var i=1; i<=random; i=i+1){
    document.write(i+"&nbsp");
    if(i==random){
        document.write("<br> 랜덤값의 수 : " + random);
        break;
    }
}