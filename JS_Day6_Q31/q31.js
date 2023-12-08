var player = "";
var computer = "";

var rpcInputText

window.onload = function () {
    rpcinputText = document.getElementById("rpc_input_text");
}

function rpcInputButtonClick() {
    while (true) {
        player = rpcinputText.value;
        if ((player == "가위") || (player == "바위") || (player == "보")) {
            break;
        } else {
            alert("다시 입력해주세요.");
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

    dw("유저: " + player);
    br();
    dw("컴퓨터: " + computer);
    br();

    var WinDrawLose = "";

    switch (player) {
        case "가위":
            switch (computer) {
                case "가위":
                    WinDrawLose = "무승부";
                    break;
                case "바위":
                    WinDrawLose = "패배";
                    break;
                case "보":
                    WinDrawLose = "승리";
                    break;
            }
            break;
        case "바위":
            switch (computer) {
                case "가위":
                    WinDrawLose = "승리";
                    break;
                case "바위":
                    WinDrawLose = "무승부";
                    break;
                case "보":
                    WinDrawLose = "패배";
                    break;
            }
            break;
        case "보":
            switch (computer) {
                case "가위":
                    WinDrawLose = "패배";
                    break;
                case "바위":
                    WinDrawLose = "승리";
                    break;
                case "보":
                    WinDrawLose = "무승부";
            }
            break;
    }
    dw(WinDrawLose);
}

