	function adjustStyle(width) {
        width = parseInt(width);
        console.log(width);
        if ((width >1280) && (width <= 1360)) {
			
            $("#size-stylesheet").attr("href", "css/your_file1.css");			
        }
		else if ((width <= 1280)) {
			alert("1280");
            $("#size-stylesheet").attr("href", "css/your_file2.css");			
		}
    }


    $(function() {
		
        adjustStyle($(window).width());

        $(window).resize(function() {
            adjustStyle($(this).width());
        });
    });