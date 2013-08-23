$(function () {
$.ig.loader({
            scriptPath: "http://igniteuisamples.dev.infragistics.local/13-1/IgniteUI/js/",
            cssPath: "http://igniteuisamples.dev.infragistics.local/13-1/IgniteUI/css/",
            resources: "igHierarchicalGrid.*"
        });

        $.ig.loader(function () {
            $("#grid").igHierarchicalGrid({
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 4
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Filtering",
                        type: "local"
                    },
                    {
                        name: "Updating",
                        enableDataDirtyException: false
                    },
                    // new featrues
                    {
                        name: "Resizing",
                        allowDoubleClickToResize: true
                    },
                    {
                        name: "Tooltips",
                        visibility: "always"
                    },
                    {
                        name: "Hiding"
                    },
                    {
                        name: "Summaries"
                    }
                ],

                initialDataBindDepth: -1,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",

                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "ID", dataType: "number", width: "100px" },
                    { key: "LastName", headerText: "名字", dataType: "string", width: "150px" },
                    { key: "FirstName", headerText: "名前", dataType: "string", width: "150px" },
                    { key: "HomePhone", headerText: "電話", dataType: "string", width: "150px" }
                ],
                childrenDataProperty: "Orders",
                autoGenerateLayouts: false,
                columnLayouts: [
                    {
                        key: "Orders",
                        responseDataKey: "results",
                        autoGenerateColumns: false,
                        primaryKey: "OrderID",
                        columns: [
                            { key: "OrderID", headerText: "ID", dataType: "number", width: "50px" },
                            { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "60px" },
                            { key: "Freight", headerText: "発送", dataType: "string", width: "70px" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "100px" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "90px" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "90px" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "80px" }
                        ],
                        features: [
                            {
                                name: "Paging",
                                type: "local",
                                pageSize: 10
                            },
                            {
                                name: "Sorting",
                                type: "local"
                            },
                            {
                                name: "Filtering",
                                type: "local"
                            },
                            {
                                name: "Updating"
                            },
                            // new featrues
                            {
                                name: "Resizing",
                                allowDoubleClickToResize: true
                            },
                            {
                                name: "Tooltips",
                                visibility: "always"
                            },
                            {
                                name: "Hiding"
                            },
                            {
                                name: "Summaries"
                            }
                        ]
                    }
                ]
            });
        });
});