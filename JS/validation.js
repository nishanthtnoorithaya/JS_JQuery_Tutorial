function validate()
{
    var user=document.getElementById("text1");
    var pass=document.getElementById("text2");
    if ((user.value.trim()=="")||(pass.value.trim()==""))
    {
        document.getElementById("lb1").style.visibility="visible";
        return false;
    }
    else if(pass.value.trim().length<5)
    {
        pass.style.border="solid 3px red";
        document.getElementById("lb2").style.visibility="visible";
        return false;
    }
    else
    {
        return true;
    }
}