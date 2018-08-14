/**
 * Bootstrapping the starting actions for the module
 */
$(document).ready(function(){
    let baseUrl = getbaseUrl();

    loadEmployeeTypesForWorkDays();

    $('.datepicker').datepicker({
        format: "yyyy/mm/dd",
        autoclose: true
    });

    // Not to be edited
    $("#hidenEmployeeCodeForWorkDays").hide();

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

    $("#workDaysSearchEmployee").typeahead({
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

        loadEmployeeDataForWorkDays(datum.code);
        validateEmployeeCanDoOtherRoles(datum.code);
        loadSalaryDetails(datum.code);
        $('#hidenEmployeeCodeForWorkDaysCode').val(datum.code); // For future reference
    });
});


/**
 * Loads the the employee types into their select option
 */
function loadEmployeeTypesForWorkDays(){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/employee/types',
        type: 'GET',
        dataType: 'json',
        success:function(data){
            $(data).each(function(i,v){
                $('#workDaysEmployeeRol').append(
                    '<option value="' + v.id + '">'+ v.name + '</option>'
                );

                $('#workDaysEmployeePerformedRol').append(
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
 * into the form to be edited and saved
 *
 * @param code string
 */
function loadEmployeeDataForWorkDays(code){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/employee/code/' + code,
        type: 'GET',
        dataType: 'json',
        success:function(data){
            let fullName = data['firstName'] + ' ' + data['middleName'] + ' ' + data['lastName'];

            $('#workDaysEmployeeName').val(fullName);
            $('#workDaysEmployeeRol').val(data['idEmployeeType']);
            $('#workDaysEmployeePerformedRol').val(data['idEmployeeType']);
            $('#workDaysEmployeeContractType').val(data['contractType']);
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
 * Based on the employee code determines their type to decide if
 * they should be able to cover for other roles or not
 *
 * @param code string
 */
function validateEmployeeCanDoOtherRoles(code){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/employee/type/' + code,
        type: 'GET',
        dataType: 'json',
        success:function(data){
            if(data == 3){
                $("#workDaysEmployeePerformedRol").prop('disabled', false);
            }
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

function loadSalaryDetails(code){
    let baseUrl = getbaseUrl();

    $.ajax({
        url: baseUrl + '/api/employee/salary/' + code,
        type: 'GET',
        dataType: 'json',
        success:function(data){
            $('#workDaysEmployeeSalaryRaw').val(data['raw']);
            $('#workDaysEmployeeSalaryTaxes').val(data['taxes']);
            $('#workDaysEmployeeSalaryFinal').val(data['real']);
            $('#workDaysEmployeeSalaryVouchers').val(data['vouchers']);
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

function saveNewWorkDay(){
    let baseUrl = getbaseUrl();

    let parameters = {
        "code":$('#hidenEmployeeCodeForWorkDaysCode').val(),
        "idEmployeeTypePerformed":$('#workDaysEmployeePerformedRol').val(),
        "deliveries":$('#workDaysEmployeeDeliveries').val(),
        "date":$('#workDaysEmployeeWorkedDay').val(),
    };

    $.ajax({
        url: baseUrl + '/api/employee/workday',
        type: 'POST',
        dataType: 'json',
        data: parameters,
        success:function(data){
            $('#modalServerResponseSuccess').modal('show');
            document.getElementById('serverResponseSuccess').innerHTML = data['message'];
            loadSalaryDetails($('#hidenEmployeeCodeForWorkDaysCode').val());
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