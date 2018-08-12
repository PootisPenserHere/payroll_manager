/**
 * Destorys the session for the current user and redirects
 * back to the login form
 */
function logout() {
    let baseUrl = getbaseUrl();

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

/**
 * Entry point for loading elements from the navatation var, this functuion
 * will filter the junk clicks that have landed in a dropdown menu and pass
 * only the ones containing an action to the actual view loader
 */
$('#nevatation-options li a').click(function(){

    let view = $(this).data('nav_accion');

    if (view != "#" && view != undefined) {
        loadView(view);
    }
});

/**
 * Will fetch the html of the desired view and load it into the landing page
 *
 * @param requestedView string
 */
function loadView(requestedView){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/html/' + requestedView,
        type: 'get',
        success:function(data){
            $("#newViewBody").hide().html(data).show('slow');
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