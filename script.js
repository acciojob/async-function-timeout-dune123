//your JS code here. If required.
const submitBtn=document.getElementById('btn')

const action=(val,time)=>{
return new Promise((resolve, reject) =>{
    setTimeout(()=>{
         resolve(val);
    },time);
})
}

submitBtn.addEventListener('click',async()=>{
    const textValue=document.getElementById('text').value;
    const delayTime=document.getElementById('delay').value;

    const val=await action(textValue,delayTime);
    
    document.getElementById('output').innerText=val;
})

