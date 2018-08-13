/**
 * Bootstrapping the starting actions for the module
 */
$(document).ready(function(){
    let baseUrl = getbaseUrl();

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
            minLength: 1
        },
        {
            name: "result",
            displayKey: "fullName",
            source: employeesList.ttAdapter()
        }).bind("typeahead:selected", function(obj, datum, name) {
        $(this).data("id", datum.code);
        console.log(datum.code);
    });
});