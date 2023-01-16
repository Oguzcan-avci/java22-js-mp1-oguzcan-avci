// första divven
const firstDiv = document.createElement('div');
document.body.append(firstDiv);

    for(let i = 0; i < 5; i++){
    let p = document.createElement('p');
    firstDiv.append(p);
   
    p.innerText = 'Rad ' + (i + 1);
    let size = (12 + i * 12);
    p.style.fontSize = size + 'px';
    p.style.color = '#845fcf';
    p.style.fontWeight = 'bolder';
    const hue =140+(10*i);
    console.log(hue);
    p.style.backgroundColor = `hsl(${hue}, 80%, 70%)`;
    let pMargin = 5+(i*5);
    p.style.marginBottom = pMargin + 'px';
    
 }
// andra divven
 const secondDiv = document.createElement('div');
 document.body.append(secondDiv);
 secondDiv.classList.add('second-div');
// array med siffrors
 const numArray = [];
 for(let i = 0; i <= 9; i++){
    numArray.push(i);  
 }

// tre divvar i secondDiv
 for(let i = 1; i < 4; i++){
    let div = document.createElement('div');
    secondDiv.append(div);
    div.classList.add('child-div' + i);
    
    
    
 }

 let childDiv1 = document.querySelectorAll('div');
 let firstChild = childDiv1[2];
 let secondChild = childDiv1[3];
 let thirdChild = childDiv1[4];
 

 for(const el of numArray){
    let p = document.createElement('p');
    p.innerText = el;
    firstChild.append(p);
    
    if(el % 2 == 0){
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }else{
        p.style.backgroundColor = 'white';
        p.style.color = 'black';
    }
 }

 numArray.reverse();

 for(const el of numArray){
    let p = document.createElement('p');
    p.innerText = el;
    secondChild.append(p);

    if(el % 2 == 0){
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }else{
        p.style.backgroundColor = 'white';
        p.style.color = 'black';
    }

    
 }

 const wordArray = ["ett", "två", "tre", "fyra", "fem", "sex", "sju", "åtta", "nio", "tio"];

 for(let i  = 0; i < wordArray.length; i++){
    let p = document.createElement('p');
    p.innerText = wordArray[i];
    thirdChild.append(p);

    if(i % 2 == 0){
        p.style.backgroundColor = 'black';
        p.style.color = 'white';
    }else{
        p.style.backgroundColor = 'white';
        p.style.color = 'black';
    }
    
    
    
 }
 
 

 

 
 
 




 

 


