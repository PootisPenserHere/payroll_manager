function logout() {
    var baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/session/logout',
        type: 'GET',
        dataType: 'json',
        success:function(data){
            window.location.replace(baseUrl + '/html/login.php');
        },
        error:function(x) {
            if (x.status==500){
                $('#modalLoginError').modal('show');
                document.getElementById('modalLoginErrorBody').innerHTML = "The user or password didnt match, please try again";
            }
        },
    });
}