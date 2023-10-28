let input = document.querySelector('.input');
let btn1 = document.querySelector('.btn1');
let btn2 = document.querySelector('.btn2');
let oll = document.querySelector('.oll');

var values = [];

function show(){
    oll.textContent = '';
    
    for(a = 0; a < values.length; a++){
        let li = document.createElement('li');
        li.textContent = values[a];
        li.classList.add('li');

        let btn3 = document.createElement('button')
        btn3.classList.add('btn3')
        btn3.textContent = 'x'
        btn3.dataset.num = a;
        
        li.appendChild(btn3);
        oll.appendChild(li);
    }
}

btn1.addEventListener('click', function(){
    let x = input.value ;
    input.value = '';

    if(x.trim() === ''){
        alert('Mahsulot qo`shing')
    }
    else if (values.indexOf(x) !== -1){
        alert('Mahsulot avval qo`shilgan')
    }
    else {
        values.unshift(x);
        show()
    }
});

btn2.addEventListener('click', function(){
    let x = input.value ;
    input.value = '';

    if(x.trim() === ''){
        alert('Mahsulot qo`shing')
    }
    else if (values.indexOf(x) !== -1){
        alert('Mahsulot avval qo`shilgan')
    }
    else {
        values.push(x);
        show()
    }
});

// o'chirish
oll.addEventListener('click', function(evt){
    if(evt.target.matches('.btn3')){
        let index = Number(evt.target.dataset.num);
        values.splice(index, 1);
        show();
    }
});