$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'    
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='cellMergingInitialState']").click(function () {
                $("#grid").igGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/

            $("#grid").on("iggridcellmergingcellsmerged", function (evt, ui) {
                var message = "cellsMerged イベントのログ有効";
                apiViewer.log(message);
                message = "結合グループの開始行インデックス: " + ui.rowIndex;
                apiViewer.log(message);
                message = "結合グループの開始行キー: " + ui.rowKey;
                apiViewer.log(message);
                message = "結合グループを作成し、繰り返されたセル値: " + ui.value;
                apiViewer.log(message);
                message = "結合セルの合計数: " + ui.count;
                apiViewer.log(message);
                apiViewer.log('<br/>');
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();

        });

        function createGrid() {
            var initialState = $('input:radio[name=cellMergingInitialState]:checked').val();

            $("#grid").igGrid({
                height: "100%",
                width: "100%",
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "100px" },
                   { key: "LastName", headerText: "名前", dataType: "string", width: "100px" },
                   { key: "FirstName", headerText: "名字", dataType: "string", width: "100px" },
                   { key: "Title", headerText: "役職", dataType: "string", width: "150px" },
                   { key: "Address", headerText: "住所", dataType: "string", width: "150px" },
                   { key: "City", headerText: "市", dataType: "string", width: "100px" },
                   { key: "Region", headerText: "州", dataType: "string", width: "80px" },
                   { key: "Country", headerText: "国名", dataType: "string", width: "100px" }
                ],
                features: [
                    {
                        name: 'CellMerging',
                        initialState: initialState
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        applySortedColumnCss: false
                    }
                ]
            });
        }