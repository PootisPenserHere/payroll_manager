<?php
session_start();

if(isset($_SESSION['userName'])){
    header("Location: ./landing.php");
    exit();
}
?>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="../css/bootstrap.min.css">

<!-- jQuery library -->
<script src="../js/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="../js/bootstrap.min.js"></script>

<link href='http://fonts.googleapis.com/css?family=Montserrat:400,700' rel='stylesheet' type='text/css'>
<div class="container">
    <div class="logo"></div>
    <div class="login-block">
        <form action="" method="post" name="Login_Form" class="login">
            <h1>Login</h1>
            <input type="text" value="" placeholder="User" id="userName" name="user" required="" autofocus=""/>
            <input type="password" value="" placeholder="Password" id="password" name="password" required=""/>
            <a href="#" class="btn btn-lg btn-warning btn-default" id="loginButon" name="login" value="Login" onclick="processLogin();">Login</a>
        </form>
    </div>
</div>

<div id="modalLoginError" class="modal fade" role="dialog">
    <div class="modal-dialog">

        <!-- Modal content-->
        <div class="modal-content">
            <div class="modal-header" id="modalLoginErrorHeader">
                <button type="button" class="close" data-dismiss="modal">&times;</button>
                <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
            </div>
            <div class="modal-body">
                <p id="modalLoginErrorBody"></p>
            </div>
            <div class="modal-footer">
                <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
            </div>
        </div>

    </div>
</div>

<script src="../js/login.js"></script>
<script src="../js/getBaseUrl.js"></script>
<link href="../css/login.css" rel="stylesheet">