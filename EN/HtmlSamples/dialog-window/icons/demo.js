$(function () {
            // Initialize the open button with igButton
            $("#openDialog").igButton({ labelText: "Open Dialog" });

            $("#dialog").igDialog({
                imageClass: "ui-icon ui-icon-flag",
                closeButtonTitle: "Close Dialog Window",
                minimizeButtonTitle: "Minimize Dialog Window",
                maximizeButtonTitle: "Maximize Dialog Window",
                pinButtonTitle: "Pin Dialog Window",
                unpinButtonTitle: "Unpin Dialog Window",
                restoreButtonTitle: "Restore Dialog Window",
                showMinimizeButton: true,
                showMaximizeButton: true,
                showPinButton: true,
                height: "460px",
                width: "460px"
            });

            $('#openDialog').on({
                click: function () {
                    // Open the igDialog
                    $("#dialog").igDialog("open");
                }
            });

        });