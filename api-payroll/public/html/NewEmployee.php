<script src="../js/NewEmployee.js"></script>

<form class="form-horizontal" id="newEmployeeForm">
    <div class="col-md-12">
        <div class="col-md-12">
            <div class="panel panel-default">
                <div class="panel-heading">
                    <h3 class="panel-title">New employee</h3>
                </div>
                <div class="panel-body">
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeeFirstName">First name</label>
                            <div class="col-md-5">
                                <input id="newEmployeeFirstName" name="newEmployeeFirstName" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeeMiddleName">Middle name</label>
                            <div class="col-md-5">
                                <input id="newEmployeeMiddleName" name="newEmployeeMiddleName" type="number" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="col-md-12">
                        <div class="row">
                            <div class="form-group">
                                <a href="#" class="btn btn-lg btn-success" onclick="saveNewEmployee();">Save</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>