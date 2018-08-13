/**
 * Bootstrapping the starting actions for the module
 */
$(document).ready(function(){
    let baseUrl = getbaseUrl();

    loadEmployeeTypes();

    // Setting up bloodhound typeahead
    let employeesList = new Bloodhound({
        datumTokenizer: Bloodhound.tokenizers.obj.whitespace("name"),
        queryTokenizer: Bloodhound.tokenizers.whitespace,
        remote: {
            'cache': false,
            url: baseUrl + '/api/employee/find',

            replace: function(url, uriEncodedQuery) {

                return url + '/' + uriEncodedQuery

            },
            wildcard: '%QUERY',
            filter: function (data) {
                return data;
            }
        }
    });

    employeesList.initialize();

    $("#editEmploySearch").typeahead({
            hint: true,
            highlight: true,
            minLength: 3
        },
        {
            name: "result",
            displayKey: "fullName",
            source: employeesList.ttAdapter()
        }).bind("typeahead:selected", function(obj, datum, name) {
        $(this).data("id", datum.code);
        loadEmployeeData(datum.code);
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
                $('#editEmployeeType').append(
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

/**
 * Searches the employee data by its employee code and loads it
 * into the form to be edited and updated
 *
 * @param code string
 */
function loadEmployeeData(code){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/employee/code/' + code,
        type: 'GET',
        dataType: 'json',
        success:function(data){
            $('#editEmployeeFirstName').val(data['firstName']);
            $('#editEmployeeMiddleName').val(data['middleName']);
            $('#editEmployeeLastName').val(data['lastName']);
            $('#editEmployeeBirthDate').val(data['birthDate']);
            $('#editEmployeeCode').val(data['code']);
            $('#editEmployeeEmail').val(data['email']);
            $('#editEmployeePhone').val(data['phone']);
            $('#editEmployeeType').val(data['idEmployeeType']);
            $('#editEmployeeContractType').val(data['contractType']);
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

function updateEmployee(){
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