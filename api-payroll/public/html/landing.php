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
                                    <li><a href="#" data-nav_accion="newEmployee.php"> New employee</a></li>
                                    <li><a href="#" data-nav_accion="editEmployee.php"> Modify employee</a></li>
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

    <div id="modalErrorInternetConnection" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
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

    <div id="modalError404" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
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

    <div id="modalError500" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p>The server has encountered an internal error, please try again later.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modalErrorParsererror" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
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

    <div id="modalErrorTimeout" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
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

    <div id="modalErrorOther" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
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

    <div id="modalServerResponseError" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderError">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">An error has occurred</h4>
                </div>
                <div class="modal-body">
                    <p id="modalResponseError"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <div id="modalServerResponseSuccess" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <div class="modal-content">
                <div class="modal-header modalHeaderSuccess" id="modalHeaderServerResponseSuccess">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title">Success</h4>
                </div>
                <div class="modal-body">
                    <p id="serverResponseSuccess"></p>
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
<script src="https://twitter.github.io/typeahead.js/releases/latest/typeahead.bundle.js"></script>

<link href="../css/bootstrap-datepicker.min.css" rel="stylesheet">
<link href="../css/landing.css" rel="stylesheet">
