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
                        <label class="col-md-4 control-label" for="workDaysSearchEmployee">Employee</label>
                        <div class="col-md-5">
                            <input id="workDaysSearchEmployee" name="workDaysSearchEmployee" type="text" class="form-control input-md">
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
</form>

