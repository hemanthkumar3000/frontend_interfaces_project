function changeColor()
{
    let colorchange=document.getElementById("colorName");
    let colors=["red","green","yellow","pink","black","brown","voilet","blue"];
    let index=Math.floor(Math.random()*colors.length);
    document.getElementById("body").style.backgroundColor=colors[index];
    colorchange.textContent=colors[index];
    colorchange.style.color="white";
}
