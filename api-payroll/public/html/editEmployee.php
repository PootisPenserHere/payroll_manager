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
                            <label class="col-md-4 control-label" for="editEmployeeFirstName">First name</label>
                            <div class="col-md-5">
                                <input id="editEmployeeFirstName" name="editEmployeeFirstName" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeMiddleName">Middle name</label>
                            <div class="col-md-5">
                                <input id="editEmployeeMiddleName" name="editEmployeeMiddleName" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeLastName">Last name</label>
                            <div class="col-md-5">
                                <input id="editEmployeeLastName" name="editEmployeeLastName" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeBirthDate">Birth date</label>
                            <div class="col-md-5">
                                <input id="editEmployeeBirthDate" name="editEmployeeBirthDate" type="text" class="form-control input-md datepicker">
                            </div>
                        </div>
                    </div>
                    <div class="row" id="hidenEmployeeCode">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeCode">Code</label>
                            <div class="col-md-5">
                                <input id="editEmployeeCode" name="editEmployeeCode" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                </div>

                <div class="col-md-6">
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeEmail">Email</label>
                            <div class="col-md-5">
                                <input id="editEmployeeEmail" name="editEmployeeEmail" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeePhone">Phone</label>
                            <div class="col-md-5">
                                <input id="editEmployeePhone" name="editEmployeePhone" type="text" class="form-control input-md">
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeType">Rol</label>
                            <div class="col-md-5">
                                <select class="form-control input-md" name="editEmployeeType" id="editEmployeeType">
                                    <option>Employee type</option>
                                </select>
                            </div>
                        </div>
                    </div>
                    <div class="row">
                        <div class="form-group">
                            <label class="col-md-4 control-label" for="editEmployeeContractType">Contract type</label>
                            <div class="col-md-5">
                                <select class="form-control input-md" name="editEmployeeContractType" id="editEmployeeContractType">
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
                        <a href="#" class="btn btn-lg btn-success " onclick="updateEmployee();">Update</a>
                    </div>
                </div>
            </div>
        </div>
    </div>
</form>