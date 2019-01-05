$(function() {
	var user_list = $("#user-search-result")

	function appendUsers(user) { //htmlを加える処理
		var html = `<div class="chat-group-user clearfix">
		              <p class="chat-group-user__name">${user.name}</p>
                      <a class="user_search_add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                      </a>
		            </div>`
		user_list.append(html);
	}

	function appendNoUsers(user) { //htmlをなくす処理
		var html =`<div class='chat-group-form__field--right'>
		           </div>`
		           user_list.append(html);
	}
	$("#user-search-field").on("keyup", function() {
		var input = $("#user-search-field").val();
		$.ajax( {
			type: 'GET',
			url: '/users',
			data: {keyword: input},
			dataType: 'json',
		    contentType: false
		})
		.done(function(users) {
			if (users.length !== 0) {//usersの要素が０ではない時(ある時
				users.forEach(function(user) {//forEachは、要素を一つづつ呼び出す。この時、検索済みにしたい。
				appendUsers(user);
				console.log(user)
				});
		    }else {
		    	appendNoUsers("一致しません。")
		    	console.log('できてへん')
		    }
		})
		.fail(function(){
		alert('取得失敗')
	    })
	})
})
