
const text=document.querySelector('.text'),
    btn=document.querySelector('.check'),
    result=document.querySelector('.result');

btn.addEventListener('click', (e)=>{
    result.innerText = unique(text.innerText);
});

function unique(str){
    const arrOfWords=str.split(' ');
    const firstUnicue=(arrFromStr)=>{
        for(let i=0;i<arrFromStr.length;i++){
            if(arrFromStr.lastIndexOf(arrFromStr[i])==i){
                return arrFromStr[i];
            }
        }
    };
    const resultArr=[];
    for (let i=0; i<arrOfWords.length;i++){
        resultArr.push(firstUnicue(arrOfWords[i].split('')));
    }
    return firstUnicue(resultArr);
}



