function names1()
{
    
    let data=document.getElementById("user").value;
    
    document.getElementById("user").value=data.toUpperCase();
    let pattern=/([F])\w+/;
    console.log(pattern.test(data))
    if(pattern.test(data))
    {
        console.log(data.length);
        if((data.length)>3&&(data.length)<10)
        {
            console.log("nice");

            document.getElementById("user").style.border="1px solid black";
        }
        else
       {
        
           document.getElementById("user").style.border="3px solid red";
       }

    }

    else
    {
     
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
        document.getElementById("num").style.border="1px white";
       
    }
    else
    {
        document.getElementById("num").style.border="3px solid red";
    }
}
function mail()
{
    let mail=document.getElementById("mail").value;
    let patternmail=/^[a-z0-9]*@[a-z]{2,7}(\.)(com|edu|in|net)$/i;
    if(patternmail.test(mail))
    {
        document.getElementById("mail").style.border="1px solid black";
    }
    else
    {
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
        document.getElementById("pno").style.border="1px solid black";
    }
    else
    {
        document.getElementById("pno").style.border="3px solid red";
    }


}

function changing()
{
    let imgs=["back1","bck1","blue","div1","bckp"];
    for(let i=0;i<imgs.length;i++)
    {
        document.body.style.background="url("+imgs[i]+")";
    }
    setInterval(changing(),500);
}