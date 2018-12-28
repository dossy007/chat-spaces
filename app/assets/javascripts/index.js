$(function) { //大枠

	function appendUsers(user) { //htmlを加える処理
		var html = `<div class='chat-group-form__field--right'>
					  <div class='chat-group-form__search clearfix'>
					    <input class='chat-group-form__input' id='user-search-field' placeholder='追加したいユーザー名を入力してください' type='text'>
					  </div>
					  <div id='user-search-result'></div>
					</div>`
	};

	
	$(".chat-group-form__input").on("keyup")
}
