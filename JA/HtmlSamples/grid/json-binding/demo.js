$(function () {

            var data = [
                      { "名前": "John Smith", "年齢": 45 },
                      { "名前": "Mary Johnson", "年齢": 32 },
                      { "名前": "Bob Ferguson", "年齢": 27 }
                ];
            
            // temporary use id="grid" instead of id="grid7": wait/undo if igGrid will fix its bug
				$("#grid").igGrid({
                width: 400,
                dataSource: data //JSON Array defined above                          
            });
        });