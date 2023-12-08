var random;

random = Math.floor(Math.random() * 100) + 1;

for(var x=1 ; x <= random ; x = x + 1){
    document.write("<img src='cat1.jpg'>");
    document.write(x);
}