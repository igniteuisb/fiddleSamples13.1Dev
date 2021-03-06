$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            // process events of select options
            $("#PageSizeSelect").on({
                change: function (e) {
                    $('#grid').igGridPaging('pageSize', parseInt($(e.srcElement).val()));
                    AddPageOptions(parseInt($(e.srcElement).val()));
                }
            });

            $("#PageIndexSelect").on({
                change: function (e) {
                    $('#grid').igGridPaging('pageIndex', parseInt($(e.srcElement).val()));
                }
            });

            $("#filterColumn").on({
                change: function (e) {
                    SetFilterConditions();
                }
            });

            // process events of buttons
            $('#igButtonFilter').on({
                click: function (event) {
                    var expr = $("#filterExpr").val(),
                        condition = $("#cond_list").val(),
                        filterColumn = $("#filterColumn").val();
                    $("#grid").igGridFiltering("filter", ([{ fieldName: filterColumn, expr: expr, cond: condition }]));
                }
            });

            $('#SelectRow').on({
                click: function (event) {
                    $('#grid').igGridSelection('selectRow', parseInt($('#RowSelect').val()));
                }
            });

            $('#GetSelectedRows').on({
                click: function (event) {
                    var rows = $("#grid").igGridSelection("selectedRows");
                    apiViewer.log('選択された行数:' + rows.length);
                    $.each(rows, function (i, val) {
                        apiViewer.log('インデックス ' + val.index + ' 行が選択されました');
                    });
                }
            });

            $("#igButtonDataBind").on({
                click: function (e) {
                    $("#grid").igGrid('dataBind');
                }
            });

            $("#igButtonGetRowIndex").on({
                click: function (e) {
                    var rowIndex = parseInt($('#rows').val()) - 1,
                         row = $("#grid").igGrid('rowAt', rowIndex);
                    if ($(row).length)
                        apiViewer.log('Row Index: ' + rowIndex);
                }
            });

            $("#igButtonGetCellText").on({
                click: function (e) {
                    var cell = $("#grid").igGrid('cellAt', parseInt($('#columns').val()) - 1, parseInt($('#rows').val()) - 1);
                    apiViewer.log('セルのテキスト: ' + $(cell).text());
                }
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridselectionrowselectionchanging", function (evt, ui) {
                var message = "iggridselectionrowselectionchanging";
                apiViewer.log(message);
            });

            $("#grid").on("iggridselectionactiverowchanged", function (evt, ui) {
                var message = "iggridselectionactiverowchanged";
                apiViewer.log(message);
            });

            $("#grid").on("iggridfilteringdatafiltering", function (evt, ui) {
                var message = "iggridfilteringdatafiltering";
                apiViewer.log(message);
            });

            $("#grid").on("iggridrendering", function (evt, ui) {
                var message = "iggridrendering";
                apiViewer.log(message);
            });

            $("#grid").on("iggriddatabinding", function (evt, ui) {
                var message = "iggriddatabinding";
                apiViewer.log(message);
            });

            /*----------------- Instantiation -------------------------*/
            $("#grid").igGrid({
                autoGenerateColumns: false,
                renderCheckboxes: true,
                primaryKey: "EmployeeID",
                columns: [{
                    // note: if primaryKey is set and data in primary column contains numbers,
                    // then the dataType: "number" is required, otherwise, dataSource may misbehave
                    headerText: "従業員 ID", key: "EmployeeID", width: "100px", dataType: "number"
                }, {
                    headerText: "名前", key: "FirstName", width: "130px"
                }, {
                    headerText: "名字", key: "LastName", width: "100px"
                }, {
                    headerText: "役職", key: "Title", width: "150px"
                }, {
                    headerText: "生年月日", key: "BirthDate", width: "120px", dataType: "date"
                }, {
                    headerText: "郵便番号", key: "PostalCode", width: "150px", dataType: "number"
                }, {
                    headerText: "国", key: "Country", width: "150px", dataType: "string"
                }
                ],
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                height: "700px",
                tabIndex: 1,
                features: [
                    {
                        name: "Selection",
                        mode: "row",
                        multipleSelection: true
                    },
                    {
                        name: "Paging"
                    },
                    {
                        name: "Filtering"
                    }
                ]
            });

            var gridPageSize = $('#grid').igGridPaging('pageSize');
            AddPageOptions(gridPageSize);
            AddOptions();
            SetFilterConditions();
        });

        function AddOptions() {
            $("#rows").empty();
            $("#columns").empty();

            var rows = $("#grid").igGrid("rows");
            for (var i = 0; i < rows.length; i++) {
                $('#RowSelect').append('<option>' + i + '</option>');
                $("#rows").append("<option>" + (i + 1) + "</option>");
            }

            var columns = $("#grid").igGrid("option", "columns");
            for (var i = 0; i < columns.length; i++) {
                $("#columns").append("<option>" + (i + 1) + "</option>");
                $("#filterColumn").append("<option>" + columns[i].key + "</option>");
            }
        }

        function AddPageOptions(pageSize) {
            var pageSelect = $('#PageIndexSelect');
            $(pageSelect).empty();
            for (var i = 0; i < northwind.results.length / pageSize; i++) {
                $(pageSelect).append('<option>' + i + '</option>');
            }
        }

        function SetFilterConditions() {
            var filterColumn = $("#filterColumn").val();
            $("#cond_list option:selected").removeAttr("selected");
            if (filterColumn === "EmployeeID" || filterColumn === "PostalCode") {
                $("#cond_list .stringCondition").attr("disabled", "disabled");
                $("#cond_list .numberCondition").removeAttr("disabled").eq(0).attr("selected", "selected");
            }
            else {
                $("#cond_list .stringCondition").removeAttr("disabled").eq(0).attr("selected", "selected");
                $("#cond_list .numberCondition").attr("disabled", "disabled");
            }
        }