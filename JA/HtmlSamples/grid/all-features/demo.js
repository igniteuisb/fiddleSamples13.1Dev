$(function () {
            $("#grid").igGrid({
                primaryKey: "EmployeeID",
                height: 600,
                width: 700,
                columns: [
                    { headerText: "従業員 ID", key: "EmployeeID", dataType: "number" },
                    {
                        headerText: "従業員名",
                        group: [
                        { headerText: "名前", key: "FirstName", dataType: "string" },
                        { headerText: "名字", key: "LastName", dataType: "string" },
                        { headerText: "役職", key: "Title", dataType: "string" }
                    ]
                    }
                ],
                autoGenerateColumns: false,
                dataSource: northwind,
                responseDataKey: "results",
                features: [
                    {
                        name: "Paging",
                        type: "local",
                        pageSize: 5
                    },
                    {
                        name: "Sorting",
                        type: "local"
                    },
                    {
                        name: "Selection"
                    },
                    {
                        name: "Filtering",
                        type: "local",
                        filterDropDownItemIcons: false,
                        filterDropDownWidth: 200
                    },
                    {
                        name: "Updating",
                        enableDataDirtyException: false
                    },
                    {
                        name: "Tooltips"
                    },
                    {
                        name: "RowSelectors",
                        enableCheckBoxes: Modernizr.touch
                    },
                    {
                        name: "Resizing"
                    },
                    {
                        name: "Summaries"
                    },
                    {
                        name: "Hiding"
                    },
                    {
                        name: "GroupBy"
                    },
                    {
                        name: "MultiColumnHeaders"
                    },
                    {
                        name: "ColumnMoving"
                    },
                    {
                        name: "CellMerging",
                        initialState: "merged"
                    }
                ]
            });
        });