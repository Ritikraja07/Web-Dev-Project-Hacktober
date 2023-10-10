let string=''
let classes=()=>{
    
}
let btns=document.querySelectorAll('.btn');
Array.from(btns).forEach((button)=>{
    button.addEventListener('click',(e)=>{
        e.target.classList.add('btn-click')
        setTimeout(()=>{
            e.target.classList.remove('btn-click')
        },300)
        if(e.target.innerHTML=='='){
            if(string.includes('X')){
                let res=string.replace("X","*");
                res=eval(res);
                document.querySelector('input').value=res
            }
            if(string.includes('^')){
                let res=string.replace("^","**");
                res=eval(res);
                document.querySelector('input').value=res
            }
            else{
            string=eval(string);
            document.querySelector('input').value=string}
        }
        else if(e.target.innerHTML=='AC'){
            string=""
            document.querySelector('input').value=string
        }
        else if(e.target.innerHTML=='C'){
            string=document.querySelector('input').value.substring(0,document.querySelector('input').value.length-1)
            document.querySelector('input').value=string
        }
        else{
        console.log(e.target);
        string=string+e.target.innerHTML;
        document.querySelector('input').value=string
        }
        
    })
})