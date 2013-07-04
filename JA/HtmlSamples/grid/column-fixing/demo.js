$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "顧客 ID", key: "ID", dataType: "string", width: "150px" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string", width: "130px" },
                    { headerText: "名前", key: "ContactName", dataType: "string", width: "100px" },
                    { headerText: "連絡先", key: "ContactTitle", dataType: "string", width: "160px" },
                    { headerText: "住所", key: "Address", dataType: "string", width: "180px" },
                    { headerText: "市", key: "City", dataType: "string", width: "110px" },
                    { headerText: "国名", key: "Country", dataType: "string", width: "100px" }
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