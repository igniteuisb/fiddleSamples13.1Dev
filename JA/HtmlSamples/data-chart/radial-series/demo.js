$(function () {
            var data = [
                { "Label": "事務", "Budget": 60, "Spending": 20 },
                { "Label": "セールス", "Budget": 40, "Spending": 80 },
                { "Label": "IT", "Budget": 60, "Spending": 20 },
                { "Label": "マーケティング", "Budget": 40, "Spending": 80 },
                { "Label": "開発", "Budget": 60, "Spending": 20 },
                { "Label": "サポート", "Budget": 20, "Spending": 60 }
            ];

            function createChart(selector, seriesType, data) {
                $(selector).igDataChart({
                    width: "400px",
                    height: "400px",
                    dataSource: data,
                    axes: [{
                        name: "angleAxis",
                        type: "categoryAngle",
                        label: "Label",
                        interval: 1
                    }, {
                        name: "radiusAxis",
                        type: "numericRadius",
                        innerRadiusExtentScale: .1,
                        maximumValue: 100,
                        minimumValue: 0,
                        interval: 25,
                        radiusExtentScale: .6
                    }],
                    series: [{
                        name: "series1",
                        title: '$$(Chart_lbl_budget)',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Budget",
                        thickness: 5,
                        markerType: "circle"
                    }, {
                        name: "series2",
                        title: '$$(Chart_lbl_spending)',
                        type: seriesType,
                        angleAxis: "angleAxis",
                        valueAxis: "radiusAxis",
                        valueMemberPath: "Spending",
                        thickness: 5,
                        markerType: "circle"
                    }],
                    horizontalZoomable: true,
                    verticalZoomable: true,
                    windowResponse: "immediate"
                });
            }

            createChart("#chartRadialLine", "radialLine", data);
            createChart("#chartRadialColumn", "radialColumn", data);
            createChart("#chartRadialPie", "radialPie", data);
            createChart("#chartRadialArea", "radialArea", data);
        });