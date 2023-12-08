var random;
random = Math.floor(Math.random() * 6) + 1;

switch(random){
    case 1:
        document.write("<img src='gamble1.png'>");
        break;
    case 2:
        document.write("<img src='gamble2.png'>");
        break;
    case 3:
        document.write("<img src='gamble3.png'>");
        break;
    case 4:
        document.write("<img src='gamble4.png'>");
        break;
    case 5:
        document.write("<img src='gamble5.png'>");
        break;
    case 6:
        document.write("<img src='gamble6.png'>");
        break;
}