$(function() {
	var user_list = $("#user-search-result") //idもhtmlに加えるための処理

	function appendUsers(user) {
		var html = `<div class="chat-group-user clearfix">
		              <p class="chat-group-user__name">${user.name}</p>
                      <a class="user_search_add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                      </a>
		            </div>`
		user_list.append(html);
	}
	// function buildHTML(id, name) { //chat memberに追加するhtml
	// 	var html = `<div class='chat-group-user clearfix js-chat-member' id='${id}'>
 //  			<input name='group[user_ids][]' type='hidden' value='${id}'>
 //  			<p class='chat-group-user__name'>${name}</p>
 //  			<a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
	// 		</div>`
	// 	user_list.append();

	// }

	function appendNoUsers(fail) {
		var html =`<div class="chat-group-user clearfix">
					<p class="chat-group-user__name">${fail}</p>
		           </div>`
		user_list.append(html);
	}
	$("#user-search-field").on("keyup", function() {
		var input = $("#user-search-field").val();
		if(input.length !== 0) {
		$.ajax( {
			type: 'GET',
			url: '/users',
			data: {keyword: input},
			dataType: 'json',
		    contentType: false
		})
		.done(function(users,input) {
			user_list.empty();
			if (users.length !== 0) {
				users.forEach(function(user) {
				appendUsers(user);
				});
		    }else{
		    	appendNoUsers('一致しません');
		    }
		})
		.fail(function(){
		alert('通信失敗')
	    })
	    }else{
	    	user_list.empty();
	    }
	})
//追加を押されたときに。イベントが発火。
	$("#user-search-result").on('click', '.user_search_add',function() {
		var id = $(this).data('user_id')
		var name =$(this).data('user-name')
		var buildhtml = buildHTML(id,name)
		//thisは<a class="user_search_add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加</a>
		$("#chat-group-users").append(buildhtml)
		console.log(this)
	})
})
