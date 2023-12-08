var random;
var sum = 0;

for(var x = 1 ; x <=3 ; x++){
    sum = sum+x;
    random = Math.floor(Math.random() * 150 ) + 1;
    if(100 < random){
        alert("현재 숫자는 " + random + " 으로 100 보다 큽니다.");
    } else{
        alert("현재 숫자는 " + random + " 으로 100 보다 작습니다.");
    }
}
