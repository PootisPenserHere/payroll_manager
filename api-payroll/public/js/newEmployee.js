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
                $('#newEmployeeType').append(
                    '<option value="' + v.id + '">'+ v.name + '</option>'
                );
            });
        },
        error:function(x,e) {
            let responseText = $.parseJSON(x["responseText"]);

            if (x.status==0) {
                $('#modalErrorInternetConnection').modal('show');
            } else if(x.status==404) {
                $('#modalError404').modal('show');
            } else if(x.status==500) {
                $('#modalServerResponseError').modal('show');
                document.getElementById('modalResponseError').innerHTML = responseText['message'];
            } else if(e=='parsererror') {
                $('#modalErrorParsererror').modal('show');
            } else if(e=='timeout'){
                $('#modalErrorTimeout').modal('show');
            } else {
                $('#modalErrorOther').modal('show');
            }
        },
    });
}

function saveNewEmployee(){
    let baseUrl = getbaseUrl();

    let parameters = {
        "firstName":$('#newEmployeeFirstName').val(),
        "middleName":$('#newEmployeeMiddleName').val(),
        "lastName":$('#newEmployeeLastName').val(),
        "birthDate":$('#newEmployeeBirthDate').val(),
        "email":$('#newEmployeeEmail').val(),
        "phone":$('#newEmployeePhone').val(),
        "idEmployeeType":$('#newEmployeeType').val(),
        "contractType":$('#NewEmpployyContractType').val()
    };

    $.ajax({
        url: baseUrl + '/api/employee',
        type: 'POST',
        dataType: 'json',
        data: parameters,
        success:function(data){
            $('#modalServerResponseSuccess').modal('show');
            document.getElementById('serverResponseSuccess').innerHTML = 'The employee ' + data['fullName'] + ' has been created with the code ' + data['employeeCode'];
        },
        error:function(x,e) {
            let responseText = $.parseJSON(x["responseText"]);

            if (x.status==0) {
                $('#modalErrorInternetConnection').modal('show');
            } else if(x.status==404) {
                $('#modalError404').modal('show');
            } else if(x.status==500) {
                $('#modalServerResponseError').modal('show');
                document.getElementById('modalResponseError').innerHTML = responseText['message'];
            } else if(e=='parsererror') {
                $('#modalErrorParsererror').modal('show');
            } else if(e=='timeout'){
                $('#modalErrorTimeout').modal('show');
            } else {
                $('#modalErrorOther').modal('show');
            }
        },
    });
}