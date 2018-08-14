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
        console.log(datum.code);
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