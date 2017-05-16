function colors(level) {
	if(level == "Kindergarten"){
		$(".acm").attr("src", "pics/acm-color.png")
	}
	else if(level == "High School") {
		$(".afe").attr("src", "pics/AFE-color.png")
	}
	else if(level == "Search All") {
		$(".acm").attr("src", "pics/acm-color.png")
		$(".afe").attr("src", "pics/AFE-color.png")
	}
}

$(function() {
	$(".search").click(function (e) {
		e.preventDefault()
		var program = $("#program-type").val()
		var level = $("#education-level").val()
		$(".afe").attr("src", "pics/AFE-fade.png")
		$(".acm").attr("src", "pics/acm-fade copy 2.png")
		$(".aci").attr("src", "pics/aci.png")
		if(program == "Search All") {
			$(".aci").attr("src", "pics/aci-color.png")
			colors(level)
		}
		else if(program == "Scholarship") {
			$(".aci").attr("src", "pics/aci-color.png")
			colors(level)
		}
		else if(program == "Loan Program") {
			$(".aci").attr("src", "pics/aci-color.png")
			colors(level)
		}
	})
})