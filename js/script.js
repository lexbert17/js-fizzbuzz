const rowElem = document.querySelector(".row");
    console.log(rowElem);

let gridstring = ""    
for (let i = 1; i <= 100; i++ ){

    let result;
    if(i % 3 === 0 && i % 5 === 0){
        result = "fizzbuzz"
    }else if (i % 5 === 0){
        result = "buzz"
    }else if (i % 3 === 0){
        result = "fizz"
    }else{
        result = i
    }
        

    console.log(i, result);
    gridstring += `<div class="square ${result}">${result}</div>`
}



rowElem.innerHTML = gridstring;