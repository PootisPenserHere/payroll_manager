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
                        <ul class="nav navbar-nav navbar-left">

                            <li class="dropdown">
                                <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span class="glyphicon glyphicon-user"></span> Employees<span class="caret"></span></a>
                                <ul class="dropdown-menu">
                                    <li><a href="#" data-nav_accion="views/cliente.php" onclick="vista_crear_nuevo_salon_evento();"> New employee</a></li>
                                    <li><a href="#" data-nav_accion="views/clientess.php" onclick="vista_crear_nuevo_coach();"> Modify employee</a></li>
                                </ul>
                            </li>


                            <li>
                                <a href="#" onclick="vista_calendario();"><span class="glyphicon glyphicon-tasks"></span> Management</a>
                            </li>

                            <li>
                                <a href="#" onclick="vista_calendario();"><span class="glyphicon glyphicon-wrench"></span> Change password</a>
                            </li>
                        </ul>
                    <ul class="nav navbar-nav navbar-right">
                        <li>
                            <a href="../logout.php"><span class="fa fa-fw fa-power-off"></span> Cerrar Sesión</a>
                        </li>
                    </ul>

                </div>
            </div>
        </div>
    </div>
    <div class="col-md-12" id="cuerpo"></div>

    <!--
    =================================================================================
                            Errores en query de AJAX
    =================================================================================
    -->

    <!-- Fallo en la conexion de internet -->
    <div id="modal_error_internet" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p>Por favor revise su conexión a internet.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!-- El recurso solicitado no existe -->
    <div id="modal_error_404" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p>El URL del formulario no pudo ser encontrado en el servidor.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!-- Error interno del servidor donde no es posible detectar la causa especifica -->
    <div id="modal_error_500" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p>Error interno del servidor.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!-- El servidor respone con un string que no esta en formato JSON o contiene caracteres adicionales al JSON -->
    <div id="modal_error_parsererror" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p>Fallo al procesar el JSON enviado por el servidor.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!-- El servidortardo demasiado en responder -->
    <div id="modal_error_timeout" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p>La petición excedió el limite de tiempo.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!-- Si el request AJAX falla por alguna razon no listada -->
    <div id="modal_error_otro" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p>Ha ocurrido un error desconocido.</p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!--
    =================================================================================
                            Respuesta del servidor
    =================================================================================
    -->

    <!-- Si el request AJAX falla por alguna razon no listada -->
    <div id="modal_respuesa_servidor_error" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_respuesa_servidor_error">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>Ha ocurrido un error</center></h4>
                </div>
                <div class="modal-body">
                    <p id="respuesa_servidor_error"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>

    <!-- Si el request AJAX recibe un success en la variable pasasa por el servidor -->
    <div id="modal_respuesa_servidor_success" class="modal fade" role="dialog">
        <div class="modal-dialog">

            <!-- Modal content-->
            <div class="modal-content">
                <div class="modal-header" id="modal_header_respuesa_servidor_success">
                    <button type="button" class="close" data-dismiss="modal">&times;</button>
                    <h4 class="modal-title"><center>El almacenado ha sido exitoso</center></h4>
                </div>
                <div class="modal-body">
                    <p id="respuesa_servidor_success"></p>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-default" data-dismiss="modal">Cerrar</button>
                </div>
            </div>

        </div>
    </div>
</body>

<script src="../js/getBaseUrl.js"></script>
<link href="../css/panel.css" rel="stylesheet">