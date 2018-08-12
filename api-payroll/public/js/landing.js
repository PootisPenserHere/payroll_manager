/**
 * Destorys the session for the current user and redirects
 * back to the login form
 */
function logout() {
    var baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/session/logout',
        type: 'GET',
        dataType: 'json',
        success:function(data){
            window.location.replace(baseUrl + '/html/login.php');
        },
        error:function(x,e) {
            if (x.status==0) {
                $('#modal_error_internet').modal('show');
            } else if(x.status==404) {
                $('#modal_error_404').modal('show');
            } else if(x.status==500) {
                $('#modal_error_500').modal('show');
            } else if(e=='parsererror') {
                $('#modal_error_parsererror').modal('show');
            } else if(e=='timeout'){
                $('#modal_error_timeout').modal('show');
            } else {
                $('#modal_error_otro').modal('show');
            }
        },
    });
}