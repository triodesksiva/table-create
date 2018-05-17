$(document).ready(function() {
	$("#button").click(function() {
		var students = {
			name: $("#name").val(),
			age: $("#age").val(),
			school: $("#school").val()
		}
		$.post("http://59d87150b28c460012b38952.mockapi.io/students",students)
		
	});
});