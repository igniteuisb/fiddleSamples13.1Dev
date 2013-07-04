$(function () {

            var data = [
                      { "Name": "John Smith", "Age": 45 },
                      { "Name": "Mary Johnson", "Age": 32 },
                      { "Name": "Bob Ferguson", "Age": 27 }
                ];
            
            // temporary use id="grid" instead of id="grid7": wait/undo if igGrid will fix its bug
				$("#grid").igGrid({
                width: 400,
                dataSource: data //JSON Array defined above                          
            });
        });