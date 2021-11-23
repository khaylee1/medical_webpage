<?php
// get values
$username = $_POST['username'];
$password = $_POST['password'];

// security anty sql injeciton
$username = stripcslashes($username);
$password = stripcslashes($password);
$username = mysql_real_escape_string($username);
$password = mysql_real_escape_string($password);

// connect to server 
mysql_connect("localhost", "root", "");
mysql_select_db("login");

// query 
$result = mysql_query("select * from users where username = '$username' and password = '$password' ")
             or die ("Failed to  query database".mysql_error())
$row = mysql_fetch_array($result);

if ($row['username']==$username && $row['password']== $password)
{
    echo "login success" 
}
{
    echo "login error"
}

?>