var random;

random = Math.floor(Math.random()*10)+1;

for(var i=1; i<=10; i=i+1){
    if(i==random){
        document.write("스킵");
        continue;
    }
    document.write(i+"&nbsp");
}

document.write("<br>랜덤수의 값 : "+random);