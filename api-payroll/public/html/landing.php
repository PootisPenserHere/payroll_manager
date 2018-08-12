<?php
session_start();

if(!isset($_SESSION['userName'])){
    header("Location: ./login.php");
    exit();
}
?>

<!-- Latest compiled and minified CSS -->
<link rel="stylesheet" href="../css/bootstrap.min.css">

<!-- jQuery library -->
<script src="../js/jquery.min.js"></script>

<!-- Latest compiled JavaScript -->
<script src="../js/bootstrap.min.js"></script>

<body>
    <div class="col-md-12" id="navigation_spot">
        <!-- NavBar-->
        <div id="custom-bootstrap-menu" class="navbar navbar-default " role="navigation">
            <div class="container-fluid">
                <div class="navbar-header"><a class="navbar-brand" href="#"></a>
                    <button type="button" class="navbar-toggle" data-toggle="collapse" data-target=".navbar-menubuilder"><span class="sr-only">Toggle navigation</span><span class="icon-bar"></span><span class="icon-bar"></span><span class="icon-bar"></span>
                    </button>
                </div>
                <div class="collapse navbar-collapse navbar-menubuilder">
                        <ul class="nav navbar-nav navbar-left" id="nevatation-options">

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span> Employees<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" data-nav_accion="NewEmployee.php"> New employee</a></li>
                                    <li><a href="#" data-nav_accion="EditEmployee.php"> Modify employee</a></li>
                                </ul>
                            </li>


                            <li>
                                <a href="#" onclick="loadView();"><span class="glyphicon glyphicon-tasks"></span> Management</a>
                            </li>

                            <li>
                                <a href="#" onclick="loadView();"><span class="glyphicon glyphicon-wrench"></span> Change password</a>
                            </li>
                        </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="#" onclick="logout();"><span class="fa fa-fw fa-power-off"></span> logout</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>

    <div class="col-md-12" id="newViewBody"></div>

    <!--
    =================================================================================
                           Modals for errors encountered by ajax
    =================================================================================
    -->

    <div id="modal_error_internet" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p>Please verify your internet connection and try again.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modal_error_404" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p>Unable to find the requested url in the sever.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modal_error_500" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p id="internal-server-error-message"">The server has encountered an internal error, please try again later.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modal_error_parsererror" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p>The response from the sever wasn't a proper JSON format</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modal_error_timeout" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p>The request timeout, please try again or verify your connection.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modal_error_other" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p>An unknown error occurred.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!--
    =================================================================================
                            Generic response modals
    =================================================================================
    -->

    <div id="modal_server_response_error" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p id="server_response_error"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modal_server_response_success" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header" id="modal_header_server_response_success">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Success</h4>
                </div>
                <div class="modal-body">
                    <p id="server_response_success"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>
</body>

<script src="../js/getBaseUrl.js"></script>
<script src="../js/landing.js"></script>
<script src="../js/bootstrap-datepicker.min.js"></script>

<link href="../css/bootstrap-datepicker.min.css" rel="stylesheet">
<link href="../css/landing.css" rel="stylesheet">