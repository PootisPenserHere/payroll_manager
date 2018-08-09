<link href="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/css/bootstrap.min.css" rel="stylesheet" id="bootstrap-css">
<script src="//maxcdn.bootstrapcdn.com/bootstrap/4.1.1/js/bootstrap.min.js"></script>
<script src="//cdnjs.cloudflare.com/ajax/libs/jquery/3.2.1/jquery.min.js"></script>



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

<div id="modals">

</div>

<script src="../js/login.js"></script>
<link href="../css/login.css" rel="stylesheet">