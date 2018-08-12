/**
 * Maps the enter key to the login action
 */
$(document).keypress(function(e) {
    if(e.which == 13) {
        processLogin();
    }
});

/**
 * Takes the input from the username and password fields and send theem to the backend
 * to be validated
 *
 * The response from the api will contain a status that will determine if the login was
 * successful or not and a message that will contain feedback which can be used to
 * display errors to the user
 */
function processLogin() {
    let baseUrl = getbaseUrl();

    let parameters = {
        "userName":$('#userName').val(),
        "password":$('#password').val()
    };

    $.ajax({
        url: baseUrl + '/api/session/login',
        type: 'POST',
        dataType: 'json',
        data: parameters,
        success:function(data){
            console.log(JSON.stringify(data));
            if(data["status"] == "success"){
                window.location.replace(baseUrl + '/html/landing.php');

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