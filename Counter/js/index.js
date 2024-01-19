// vars
const dec = document.getElementById("decrease"),
reset = document.getElementById("reset"),
inc = document.getElementById("increase"),
countLabel = document.getElementById("countLabel");
let count = 0;

// functions
inc.onclick = function(){
    count++;
    countLabel.textContent = count;
}

dec.onclick = function(){
    count--;
    countLabel.textContent = count;
}

reset.onclick = function(){
    count = 0;
    countLabel.textContent = count;
}