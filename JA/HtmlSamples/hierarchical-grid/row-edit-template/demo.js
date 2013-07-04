$(function () {
            /*----------------- Instantiation -------------------------*/
            $("#grid2").igHierarchicalGrid({
                features: [
                    {
                        name: "Updating",
                        enableAddRow: true,
                        inherit: true,
                        editMode: "rowedittemplate",
                        rowEditDialogContainment: "window",
                        showReadonlyEditors: false,
                        enableDeleteRow: true,
                        enableDataDirtyException: false,
                        rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                        rowEditDialogWidth: 600,
                        rowEditDialogHeight: 400,
                        columnSettings:
                            [{
                                columnKey: "EmployeeID",
                                readOnly: true
                            },
                            {
                                columnKey: "LastName",
                                validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                            }]
                    }
                ],
                width: "100%",
                height: "500px",
                initialDataBindDepth: -1,
                dataSource: northwind,
                dataSourceType: "json",
                responseDataKey: "results",
                autoGenerateColumns: false,
                primaryKey: "EmployeeID",
                columns: [
                    { key: "EmployeeID", headerText: "社員 ID", dataType: "number", width: "100px" },
                    { key: "LastName", headerText: "名字", dataType: "string", width: "100px" },
                    { key: "FirstName", headerText: "名前", dataType: "string", width: "100px" },
                    { key: "Title", headerText: "役職", dataType: "string", width: "150px" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "150px" },
                    { headerText: "市", key: "City", dataType: "string", width: "100px" },
                    { headerText: "郵便番号", key: "PostalCode", dataType: "string", width: "100px", hidden: true },
                    { headerText: "領域", key: "Region", dataType: "string", width: "80px", hidden: true },
                    { headerText: "国名", key: "Country", dataType: "string", width: "100px", hidden: true },
                    { headerText: "電話", key: "HomePhone", dataType: "string", width: "150px", hidden: true },
                    { headerText: "内線", key: "Extension", dataType: "string", width: "150px", hidden: true }
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
                            { key: "OrderID", headerText: "注文 ID", dataType: "number", width: "100px" },
                            { key: "CustomerID", headerText: "顧客 ID", dataType: "string", width: "100px", hidden: true },
                            { key: "Freight", headerText: "輸送", dataType: "string", width: "100px" },
                            { key: "ShipName", headerText: "出荷名", dataType: "string", width: "200px" },
                            { key: "ShipAddress", headerText: "配送先住所", dataType: "string", width: "200px" },
                            { key: "ShipCity", headerText: "配送先市町村", dataType: "string", width: "100px" },
                            { key: "ShipCountry", headerText: "配送先の国", dataType: "string", width: "100px" }
                        ],
                        features: [
                            {
                                name: "Paging",
                                pageSize: 10
                            },
                            {
                                name: "Updating",
                                enableAddRow: true,
                                rowEditDialogContainment: "owner",
                                editMode: "rowedittemplate",
                                showReadonlyEditors: false,
                                enableDeleteRow: true,
                                enableDataDirtyException: false,
                                rowEditDialogRowTemplateID: "rowEditDialogRowTemplate1",
                                rowEditDialogWidth: 600,
                                rowEditDialogHeight: 400,
                                columnSettings:
                                [
                                    {
                                        columnKey: "OrderID",
                                        readOnly: true
                                    },
                                    {
                                        columnKey: "ShipAddress",
                                        validatorOptions: { bodyAsParent: false, required: true, showIcon: true }
                                    }
                                ]
                            }
                        ]
                    }
                ]
            });
        });