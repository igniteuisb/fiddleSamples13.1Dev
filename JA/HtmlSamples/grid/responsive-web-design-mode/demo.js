$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "顧客 ID", key: "ID", dataType: "string" },
                    { headerText: "会社名", key: "CompanyName", dataType: "string" },
                    { headerText: "名前", key: "ContactName", dataType: "string" },
                    { headerText: "連絡先", key: "ContactTitle", dataType: "string" },
                    { headerText: "住所", key: "Address", dataType: "string" },
                    { headerText: "市", key: "City", dataType: "string" },
                    { headerText: "国名", key: "Country", dataType: "string" }
                ],
                autoGenerateColumns: false,
                dataSource: nwCustomersWithOrders,
                width: "100%",
                height: "100%",
                features: [
                    {
                        name: "Responsive",
                        columnSettings: [
                            {
                                columnKey: "ID",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "ContactName",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "ContactTitle",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "Address",
                                configuration: {
                                    customPhone: {
                                        template: "${Address}, ${City}, ${Country}"
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "City",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            },
                            {
                                columnKey: "Country",
                                configuration: {
                                    customPhone: {
                                        hidden: true
                                    },
                                    customAlt: {
                                        hidden: false
                                    }
                                }
                            }
                        ],
                        responsiveModes: {
                            customPhone: {
                                minWidth: 0,
                                maxWidth: 500
                            },
                            // alternative mode
                            customAlt: {
                                minWidth: 501,
                                maxWidth: Number.MAX_VALUE
                            }
                        }
                    }
                ]
            });
        });