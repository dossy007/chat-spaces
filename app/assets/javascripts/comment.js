// formが送信された時にイベントが動くようにしよう。

$(function() {
	function() {
		// htmlとか
	}

	$('#submit').on('submit',function(e) {
		e.preventDefault();  //リンク推移を無効に
		var formData = new FormData(this);  //thisはid=submit
		console.log(this);
	})
});
