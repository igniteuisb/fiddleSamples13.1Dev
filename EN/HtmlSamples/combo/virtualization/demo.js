$(function () {

            $("#comboIG").igCombo({
                virtualization: true,
                filteringType: "remote",
                renderMatchItems: "contains",
                responseDataKey: "d.results",
                valueKey: "ProductName",
                width: "200px",
                dataSource: 'http://labs.infragistics.com/igniteui/api/invoices?&$top=1500&callback=?'
            });

        });