function getbaseUrl(uriPath){
    var url = window.location.href;
    return url.substring(0, url.indexOf(uriPath));
}

function processLogin() {
console.log(getbaseUrl('html/'));
    var parametros = {
        "userName":$('#userName').val(),
        "password":$('#password').val()
    };

    $.ajax({
        url: getbaseUrl('/html/') + '/index.php/api/session/login',
        type: 'POST',
        dataType: 'json',
        data: parametros,
        success:function(data){
            console.log(JSON.stringify(data))


        },
        error:function(x,e,h) {
                console.log(x);
                console.log(e + " " + h);
        },
    });
}