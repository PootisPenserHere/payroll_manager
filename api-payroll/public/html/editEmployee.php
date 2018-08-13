<script src="../js/getBaseUrl.js"></script>
<script src="../js/editEmployee.js"></script>

<form class="form-horizontal" id="editEmployee">
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Edit employee</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="editEmploySearch">Employee</label>
                        <div class="col-md-5">
                            <input id="editEmploySearch" name="editEmploySearch" type="text" class="form-control input-md">
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
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
                                <input id="newEmployeeMiddleName" name="newEmployeeMiddleName" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeeLastName">Last name</label>
                            <div class="col-md-5">
                                <input id="newEmployeeLastName" name="newEmployeeLastName" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeeBirthDate">Birth date</label>
                            <div class="col-md-5">
                                <input id="newEmployeeBirthDate" name="newEmployeeBirthDate" type="text" class="form-control input-md datepicker">
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-md-6">
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeeEmail">Email</label>
                            <div class="col-md-5">
                                <input id="newEmployeeEmail" name="newEmployeeEmail" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeePhone">Phone</label>
                            <div class="col-md-5">
                                <input id="newEmployeePhone" name="newEmployeePhone" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="newEmployeeType">Rol</label>
                            <div class="col-md-5">
                                <select class="form-control input-md" name="newEmployeeType" id="newEmployeeType">
                                    <option>Employee type</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="NewEmpployyContractType">Contract type</label>
                            <div class="col-md-5">
                                <select class="form-control input-md" name="NewEmpployyContractType" id="NewEmpployyContractType">
                                    <option>Contract type</option>
                                    <option value="INTERNO">interno</option>
                                    <option value="EXTERNO">Externo</option>
                                </select>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="row col-md-offset-6">
                    <div class="form-group">
                        <a href="#" class="btn btn-lg btn-success " onclick="saveNewEmployee();">Create</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>