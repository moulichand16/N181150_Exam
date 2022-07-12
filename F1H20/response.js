
let g=0;
let a1=0;
let a2=0;
let a3=0;
let a4=0;
 

function names1()
{
    
    let data=document.getElementById("user").value;
    
    document.getElementById("user").value=data.toUpperCase();
    let pattern=/^f[\w]{4,9}$/i;
    console.log(pattern.test(data))
    if(pattern.test(data))
    {
        
        console.log(data.length);
        a1=0;
        document.getElementById("user").style.border="1px solid black";
    }

    else
    {
        a1++;
     
        document.getElementById("user").style.border="3px solid red";
    }

    
}
function mobile()
{
    let number=document.getElementById("num").value;
    let npattern=/(^(977)[0-9]{7}$|^[0-9]{4}-[0-9]{4}-[0-9]{4}$)/;
    console.log(npattern.test(number));
    if(npattern.test(number))
    {
        a2=0;
        document.getElementById("num").style.border="1px white";
       
    }
    else
    {
        a2++;
        document.getElementById("num").style.border="3px solid red";
    }
}
function mail()
{
    let mail=document.getElementById("mail").value;
    let patternmail=/^[a-z0-9]*@[a-z]{2,7}(\.)(com|edu|in|net)$/i;
    if(patternmail.test(mail))
    {
       
        a3=0;
        document.getElementById("mail").style.border="1px solid black";
    }
    else
    {
        a3++;
        document.getElementById("mail").style.border="3px solid red";

    }
}
function country1()
{
    let sel=document.getElementById("country").value;
    if(sel!="India +91")
    {
        
        document.getElementById("ber").style.display="table-row";
    }
    else
    {
        document.getElementById("ber").style.display="none";

        }
}
let total=0;
function days()
{
    
    let dat=document.getElementById("numdays").value;
    let nuz=document.getElementById("child").checked;
    let ong=document.getElementById("someone").checked;
    let rk=document.getElementById("adult").checked;
    let skl=document.getElementById("senior").checked;
    console.log(dat);
    console.log(nuz);
    console.log(ong);
    console.log(rk);
    console.log(skl);
    
    if(nuz||rk)
    {
        
        total=dat*2000;
        console.log(total);
        
        document.getElementById("tcost").value=total;

    }
    if(ong||skl)
    {
        g=g+1;
        total=dat*3000;
        document.getElementById("tcost").innerText=total;
        console.log(total);


    }
    



}
function sbib()
{
    let numpat=/(^(SBIN)[0-9]{7}$)|(^[0-9]{11}$)/;
    let num=document.getElementById("pno").value;
    if(numpat.test(num))
    {
        a4=0;
        document.getElementById("pno").style.border="1px solid black";
    }
    else
    {
        a4++;
        document.getElementById("pno").style.border="3px solid red";
    }


}
function gun()
{
    document.getElementById("e12").style.backgroundColor="green";

}
function gun1()
{
    document.getElementById("e12").style.backgroundColor="skyblue";
}
// function changing()
// {
//     let imgs=["back1.jpg","bck1.jpg","blue.jpg","div1.jpg","bckp.jpg"];
//     for(let i=0;i<imgs.length;i++)
//     {
//         document.body.style.backgroundImage="url("+imgs[i]+")";
//     }
//     setInterval(changing(),500);
// }
i=0;
function changing(){
    var imgs = ["back1.jpg","bck1.jpg","blue.jpg","div1.jpg","bckp.jpg"];
    document.body.style.backgroundImage = "url("+imgs[i]+")";
    i=(i+1)%imgs.length;
    }
    setInterval(changing,500);

function checkv()
{
    if(a1==0&&a2==0&&a3==0&&a4==0)
    {
        return true;
    }
    else{
        return false;
    }
}
