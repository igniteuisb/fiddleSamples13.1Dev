$(function () {

            // Used to show output in the API Viewer at runtime, 
            // defined in external script 'apiviewer.js'           
            var apiViewer = new $.ig.apiViewer(); 

            
            /*----------------- Method & Option Examples -------------------------*/

            // Remove Selected Node button click handler
            $("#btnRemoveNode").click(function (e) {
                var node = $("#tree").igTree("selectedNode");

                if (node.path != null) {

                    if (node.data.Text === "テクノロジー") {
                        apiViewer.log("「テクノロジー」ノードを削除できません。");
                    }
                    else {
                        // Remove selected node using path
                        $("#tree").igTree("removeAt", node.path);

                        apiViewer.log("ノードが削除されました: " + node.data.Text);

                        $("#tree").igTree("clearSelection");
                    }
                } else {
                    apiViewer.log("ノードを選択して、もう一度試しください。");
                }
            });

            // Select "Tech" Node button click handler
            $("#btnSelectNode").click(function (e) {

                var nodes = $("#tree").igTree("findNodesByText", "テクノロジー");

                if (nodes.length > 0) {
                    $("#tree").igTree("select", nodes[0].element);
                }
            });
            
            // {Button Label} button click handler
            $("#btnAddNode").click(function (e) {
                var parentNode = $("#tree").igTree("selectedNode").element;                

                if (parentNode == null) {
                    $("#tree").igTree("addNode", { Text: "新しいノード" });
                }
                else {
                    $("#tree").igTree("addNode", { Text: "新しいノード" }, parentNode);
                    $("#tree").igTree("expand", parentNode);
                }

            });

            /*----------------- Event Examples -------------------------*/

            $("#tree").on("igtreeselectionchanged", function (e, ui) {
                apiViewer.log("igtreeselectionchanged: [ " + "選択が変更されました: " + ui.newNodes[0].data.Text + "]");
            });

            $("#tree").on("igtreenodeclick", function (evt, ui) {
                apiViewer.log("igtreenodeclick: [ " + "ノードがクリックされました: " + ui.node.data.Text + "]");
            });

            $("#tree").on("igtreedragstart", function (evt, ui) {
                apiViewer.log("igtreedragstart: [ " + "ノードのドラッグ開始: " + ui.data.Text + "]");
            });

            $("#tree").on("igtreedragstop", function (evt, ui) {
                apiViewer.log("igtreedragstop");
            });

            $("#tree").on("igtreenodedropped", function (evt, ui) {
                apiViewer.log("igtreenodedropped");
            });

            /*----------------- Instantiation -------------------------*/

            $("#tree").igTree({
                singleBranchExpand: true,
                dataSourceType: "json",
                dataSource: products, //defined in external script
                dragAndDrop: true,
                bindings: {
                    textKey: "Text",
                    valueKey: "Text",
                    childDataProperty: "Nodes"
                }
            });

        });