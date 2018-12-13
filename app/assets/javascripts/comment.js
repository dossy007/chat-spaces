// formが送信された時にイベントが動くようにしよう。

$(function() {
	function buildHTML(message) {
		var html = `render 'chat-main__body--message'`
		return html;
	}
	$('#new_comment').on('submit',function(e) {
		e.preventDefault();  //リンク推移を無効に
		var formData = new FormData(this);  //thisはid=submit
		var url = $(this).attr('action');

		$ajax({
			url: url,
			type: "POST",
			data: formData,
			dataType: 'json',
			processData: false,
			contentType: false,
		})
		.done(function(data) {
			var html = buildHTML(data);
		})
		.fail(function() {
			alert('error');
			console.log(this)
		    console.log(html);

		})
	});
});


