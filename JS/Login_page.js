function fn2()
{
    var z="Password@123"
    var x=document.getElementById("text1").value
    var y=document.getElementById("text2").value
    if (y==z)
    {
        alert("Login Succesfully")
    }
    else
    {
       alert("Incorrect Login")
    }
    if (x==" ")
    alert("Enter the username")
}
