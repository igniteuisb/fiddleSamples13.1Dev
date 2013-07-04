$(function () {
            $("#grid").igGrid({
                columns: [
                    { headerText: "Customer ID", key: "ID", dataType: "string" },
                    { headerText: "Company Name", key: "CompanyName", dataType: "string" },
                    { headerText: "Contact Name", key: "ContactName", dataType: "string" },
                    { headerText: "Contact Title", key: "ContactTitle", dataType: "string" },
                    { headerText: "Address", key: "Address", dataType: "string" },
                    { headerText: "City", key: "City", dataType: "string" },
                    { headerText: "Country", key: "Country", dataType: "string" }
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