/**
 * Bootstrapping the starting actions for the module
 */
$(document).ready(function(){
    loadEmployeeTypes();

    $('.datepicker').datepicker({
        format: "yyyy/mm/dd",
        autoclose: true
    });

});

/**
 * Loads the the enmployee types into their select option
 */
function loadEmployeeTypes(){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/employee/types',
        type: 'GET',
        dataType: 'json',
        success:function(data){
            $(data).each(function(i,v){
                $('#employeeType').append(
                    '<option value="' + v.id + '">'+ v.name + '</option>'
                );
            });
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

function saveNewEmployee(){
    console.log('saving...');
}