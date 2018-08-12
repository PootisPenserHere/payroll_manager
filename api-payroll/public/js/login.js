function getbaseUrl(uriPath){
    var url = window.location.href;
    return url.substring(0, url.indexOf(uriPath));
}

function processLogin() {
    var baseUrl = getbaseUrl('/html/');

    var parametros = {
        "userName":$('#userName').val(),
        "password":$('#password').val()
    };

    $.ajax({
        url: baseUrl + '/index.php/api/session/login',
        type: 'POST',
        dataType: 'json',
        data: parametros,
        success:function(data){
            console.log(JSON.stringify(data));
            if(data["status"] == "success"){
                redirect(baseUrl + '/html/landing.php');
            }else if(data["status"] == "success" || (data["status"] === undefined)){
                $('#modalLoginError').modal('show');
                document.getElementById('modalLoginErrorBody').innerHTML = "The server didn't respond in time, please try again or refresh this page.";
            }
        },
        error:function(x) {
            if (x.status==500){
                $('#modalLoginError').modal('show');
                document.getElementById('modalLoginErrorBody').innerHTML = "The user or password didnt match, please try again";
            }
        },
    });
}

function redirect(url){
    window.location.replace(url);
}