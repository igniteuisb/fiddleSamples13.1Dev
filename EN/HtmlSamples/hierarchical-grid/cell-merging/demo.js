$(function () {
            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer();

            /*----------------- Method & Option Examples -------------------------*/

            $("input[name='cellMergingInitialState']").click(function () {
                $("#grid1").igHierarchicalGrid("destroy");
                createGrid();
            });

            /*----------------- Event Examples -------------------------*/

            $(document).on("iggridcellmergingcellsmerged", "#grid1", function (evt, ui) {
                var message = "Logging cellsMerged event";
                apiViewer.log(message);
                message = "The index of the row the merged group starts in is: " + ui.rowIndex;
                apiViewer.log(message);
                message = "The key of the row the merged group starts in is: " + ui.rowKey;
                apiViewer.log(message);
                message = "The cells value which is repeated and caused the merged group to be created is: " + ui.value;
                apiViewer.log(message);
                message = "The total count of cells that were merged is: " + ui.count;
                apiViewer.log(message);
                apiViewer.log('<br/>');
                return;
            });

            /*----------------- Instantiation -------------------------*/
            createGrid();
        });
       

        function createGrid() {
            var initialState = $('input:radio[name=cellMergingInitialState]:checked').val();
            $("#grid1").remove();
            $("<table id='grid1'></table>").appendTo("#gridContainer").igHierarchicalGrid({
                height: "100%",
                width: "100%",
                autoCommit: true,
                autoGenerateColumns: false,
                dataSource: northwind,
                initialDataBindDepth: -1,
                responseDataKey: "results",
                dataSourceType: "json",
                columns: [
                   { key: "EmployeeID", headerText: "Employee ID", dataType: "number", width: "100px" },
                   { key: "LastName", headerText: "First Name", dataType: "string", width: "100px" },
                   { key: "FirstName", headerText: "Last Name", dataType: "string", width: "100px" },
                   { key: "Title", headerText: "Title", dataType: "string", width: "150px" },
                   { key: "Address", headerText: "Address", dataType: "string", width: "150px" },
                   { key: "City", headerText: "City", dataType: "string", width: "100px" },
                   { key: "Region", headerText: "Region", dataType: "string", width: "80px" },
                   { key: "Country", headerText: "Country", dataType: "string", width: "100px" }
                ],
                features: [
                    {
                        name: 'CellMerging',
                        inherit: true,
                        initialState: initialState
                    },
                    {
                        name: 'Sorting',
                        type: 'local',
                        inherit: true,
                        applySortedColumnCss: false
                    }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        autoCommit: true,
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "Order ID", dataType: "number", width: "100px" },
                            { key: "Freight", headerText: "Freight", dataType: "string", width: "100px" },
                            { key: "ShipName", headerText: "Ship Name", dataType: "string", width: "200px" },
                            { key: "ShipAddress", headerText: "Ship Address", dataType: "string", width: "200px" },
                            { key: "ShipCity", headerText: "Ship City", dataType: "string", width: "100px" },
                            { key: "ShipCountry", headerText: "Ship Country", dataType: "string", width: "100px" }
                        ],
                        features: [
                            {
                                name: "Paging",
                                pageSize: 10
                            }
                        ]
                    }
                ]
            });
        }