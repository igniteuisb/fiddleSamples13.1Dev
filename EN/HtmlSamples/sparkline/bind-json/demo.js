$(function () {
$.ig.loader({
            scriptPath: "http://dev.igniteui.local/13-1/IgniteUI/js/",
            cssPath: "http://dev.igniteui.local/13-1/IgniteUI/css/",
            resources: "igSparkline"
        });

        $.ig.loader(function () {

            $("#sparkline").igSparkline({
                dataSource: northwindInvoices,
                height: "100px",
                width: "300px",
                valueMemberPath: 'ExtendedPrice',
                labelMemberPath: 'OrderDate'
            });

        });
});