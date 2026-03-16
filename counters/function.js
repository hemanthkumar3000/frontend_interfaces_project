let countEle=document.getElementById("counterValue");
let count=0;
function update()
{
    if(count>0)
    {
        countEle.style.color="green";
    }
    else if (count<0)
    {
        countEle.style.color="red";
    }
    else{
        countEle.style.color="black";
    }
}
function onIncrement()
{
    count=count+1;
    countEle.textContent=count;
    update()


}
function onDecrement()
{
    count=count-1;
    countEle.textContent=count;
    update();
}
function onReset()
{
    count=0;
    countEle.textContent=count;
   
}