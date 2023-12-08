var player = "";
var computer;



while(true){
    player = prompt("가위/바위/보 중 하나를 입력해주세요.");

    if((player == "가위") || (player == "바위") || (player == "보")){
        break;
    } else{
        alert("가위 바위 보 중 입력해주세요.");
    }
} 



computer = Math.floor(Math.random() * 3);

switch (computer) {
    case 0:
        computer = "가위";
        break;
    case 1:
        computer = "바위";
        break;
    case 2:
        computer = "보";
        break;
}

// 당신이 가위를 냈을때의 결과값

if (player == "가위" && computer == "바위") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 패배");
}
else if (player == "가위" && computer == "보") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 승리");
}
else if (player == "가위" && computer == "가위") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 무승부");
}

// 당신이 바위를 냈을때의 결과값

else if (player == "바위" && computer == "바위") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 무승부");
}
else if (player == "바위" && computer == "가위") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 승리");
}
else if (player == "바위" && computer == "보") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 패배");
}

// 당신이 보를 냈을때의 결과값

else if (player == "보" && computer == "보") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 무승부");
}
else if (player == "보" && computer == "가위") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 패배");
}
else if (player == "보" && computer == "바위") {
    alert("컴퓨터는 " + computer + " 를(을) 냈습니다.");
    alert("당신은 " + player + " 를(을) 냈습니다.");
    alert("결과 : 승리");
}


