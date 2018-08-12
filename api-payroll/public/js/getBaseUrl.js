/**
 * Returns the entry point url for the system, this url will be used
 * to access both the api and the static resources
 *
 * @returns {string}
 */
function getbaseUrl(){
    var url = window.location.href;
    return url.substring(0, url.indexOf('/html/'));
}