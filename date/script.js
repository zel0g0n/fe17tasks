let btnConvert = document.querySelector(`.btn-convert`)
    btnResult = document.querySelector(`.btn-convert__result`)
    inpW = document.querySelector(`.timestamp`)
    changingWindow = document.querySelector(`.window-main`)
    varDate = document.querySelector(`.w-variable`)
    tr  = document.querySelectorAll(`.n-w-trow`)
    td = document.querySelectorAll(`.n-w-trow td`)
    trRslt  = document.querySelectorAll(`.sh-rslt__trow`)
    tdRslt = document.querySelectorAll(`.sh-rslt__trow td`)
    inpC = document.querySelectorAll(`.inp-crt-date`)

btnConvert.addEventListener(`click`, ()=>setWindow(+inpW.value))


btnResult.addEventListener(`click`,()=>{
    
    let date = new Date(inpC[0].value,inpC[1].value-1,inpC[2].value,inpC[3].value,inpC[4].value,inpC[5].value)
    tdRslt[1].innerText=(Math.round(date.getTime()/1000))
    tdRslt[5].innerText=(new Date(date.getTime()))
    tdRslt[3].innerText=(new Date(date.getTime()).toUTCString())
    tdRslt[7].innerText=Math.round((new Date().getTime()-date.getTime())/31556926000)
    console.log(date)
})
function setWindow(num) {
    if(String(num).length<12) {
        console.log(num)
        td[1].innerText=(`Second`)
        td[5].innerText=(new Date(num*1000))
        td[3].innerText=(new Date(num*1000).toUTCString())
        td[7].innerText=(new Date().getFullYear()-new Date(num*1000).getFullYear())
    }else if(String(num).length<15){
        console.log(num)
        td[1].innerText=(`Millisecond`)
        td[5].innerText=(new Date(num))
        td[3].innerText=(new Date(num).toUTCString())
        td[7].innerText=(Math.round((new Date().getTime()-new Date(num).getTime())/31556926000)) 
    }else if(String(num).length<18){
        td[1].innerText=(`Microsecond`)
        td[5].innerText=(new Date(Math.round(num/1000)))
        td[3].innerText=(new Date(Math.round(num/1000)).toUTCString())
        td[7].innerText=(Math.round((new Date().getTime()-new Date(Math.round(num/1000)).getTime())/31556926000)) 
    }else if(String(num).length<21){
        td[1].innerText=(`Nanosecond`)
        td[5].innerText=(new Date(Math.round(num/1000000)))
        td[3].innerText=(new Date(Math.round(num/1000000)).toUTCString())
        td[7].innerText=(Math.round((new Date().getTime()-new Date(Math.round(num/1000000)).getTime())/31556926000)) 
    }  
    
}
function winTime(){
    let s=new Date().getSeconds(),
        h=new Date().getHours(),
        m=new Date().getMinutes();
    changingWindow.innerText=`${Math.floor(new Date().getTime()/1000)}`;
    if(s<10) s=`0${s}`
    if(m<10) m=`0${m}`
    varDate.innerText=`${h}:${m}:${s}`;
}
setInterval(winTime,1000)