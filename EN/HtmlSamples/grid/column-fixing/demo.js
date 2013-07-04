$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "Customer ID", key: "ID", dataType: "string", width: "150px" },
                    { headerText: "Company Name", key: "CompanyName", dataType: "string", width: "130px" },
                    { headerText: "Contact Name", key: "ContactName", dataType: "string", width: "100px" },
                    { headerText: "Contact Title", key: "ContactTitle", dataType: "string", width: "160px" },
                    { headerText: "Address", key: "Address", dataType: "string", width: "180px" },
                    { headerText: "City", key: "City", dataType: "string", width: "110px" },
                    { headerText: "Country", key: "Country", dataType: "string", width: "100px" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "700px",
                height: "400px",
                features: [
                    {
                        name: "ColumnFixing",
                        columnSettings: [
                            {
                                columnKey: "CompanyName",
                                isFixed: true
                            }
                        ]
                    }
                ]
            });
        });