<script src="../js/getBaseUrl.js"></script>
<script src="../js/registerWorkDays.js"></script>

<form class="form-horizontal" id="workDaysForm">
    <div class="col-md-12">
        <div class="panel panel-default">
            <div class="panel-heading">
                <h3 class="panel-title">Managing work days</h3>
            </div>
            <div class="panel-body">
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysSearchEmployee">Search employee</label>
                        <div class="col-md-5">
                            <input id="workDaysSearchEmployee" name="workDaysSearchEmployee" type="text" class="form-control input-md">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysSearchByDate">Search by date</label>
                        <div class="col-md-2">
                            <input id="workDaysSearchByDate" name="workDaysSearchByDate" type="text" class="form-control input-md datepicker">
                        </div>
                    </div>
                </div>
            </div>

            <div id="registerWorkDaysEmployeeInfo" class="col-md-6">
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeName">Name</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeName" name="workDaysEmployeeName" type="text" class="form-control input-md" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeRol">Rol</label>
                        <div class="col-md-5">
                            <select class="form-control input-md" name="workDaysEmployeeRol" id="workDaysEmployeeRol" disabled>
                                <option></option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeContractType">Contract type</label>
                        <div class="col-md-5">
                            <select class="form-control input-md" name="workDaysEmployeeContractType" id="workDaysEmployeeContractType" disabled>
                                <option>Contract type</option>
                                <option value="INTERNO">interno</option>
                                <option value="EXTERNO">Externo</option>
                            </select>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeWorkedDay">Date</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeWorkedDay" name="workDaysEmployeeWorkedDay" type="text" class="form-control input-md datepicker">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeDeliveries">Deliveries</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeDeliveries" name="workDaysEmployeeDeliveries" type="number" value="0" class="form-control input-md">
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeePerformedRol">Performed rol</label>
                        <div class="col-md-5">
                            <select class="form-control input-md" name="workDaysEmployeePerformedRol" id="workDaysEmployeePerformedRol" disabled>
                                <option>Employee type</option>
                            </select>
                        </div>
                    </div>
                </div>

            </div>

            <div id="registerWorkDaysEmployeeSalary" class="col-md-6">
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeSalaryRaw">Raw</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeSalaryRaw" name="workDaysEmployeeSalaryRaw" type="text" class="form-control input-md" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeSalaryTaxes">Taxes</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeSalaryTaxes" name="workDaysEmployeeSalaryTaxes" type="text" class="form-control input-md" disabled>
                        </div>
                    </div>
                </div>

                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeSalaryFinal">Final</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeSalaryFinal" name="workDaysEmployeeSalaryFinal" type="text" class="form-control input-md" disabled>
                        </div>
                    </div>
                </div>
                <div class="row">
                    <div class="form-group">
                        <label class="col-md-4 control-label" for="workDaysEmployeeSalaryVouchers">Vouchers</label>
                        <div class="col-md-5">
                            <input id="workDaysEmployeeSalaryVouchers" name="workDaysEmployeeSalaryVouchers" type="text" class="form-control input-md" disabled>
                        </div>
                    </div>
                </div>
            </div>


            <div class="row" id="hidenEmployeeCodeForWorkDays">
                <div class="form-group">
                    <label class="col-md-4 control-label" for="hidenEmployeeCodeForWorkDaysCode">Code</label>
                    <div class="col-md-5">
                        <input id="hidenEmployeeCodeForWorkDaysCode" name="hidenEmployeeCodeForWorkDaysCode" type="text" class="form-control input-md">
                    </div>
                </div>
            </div>
            <div class="row col-md-offset-6">
                <div class="form-group">
                    <a href="#" class="btn btn-lg btn-success " onclick="processSaveActionWorkDay();">Save</a>
                </div>
            </div>
        </div>
    </div>
</form>

