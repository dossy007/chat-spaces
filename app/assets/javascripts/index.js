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

	function appendNoUsers(user) {
		var html =`<div class='chat-group-form__field--right'>
		           </div>`
		user_list.append();
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
			user_list.empty();
			if (users.length !== 0) {
				users.forEach(function(user) {
				appendUsers(user);
				});
		    }else {
		    	console.log('一致しません')
		    	appendNoUsers('一致するものはありません');
		    }
		})
		.fail(function(){
		alert('通信失敗')
	    })
	})
})
