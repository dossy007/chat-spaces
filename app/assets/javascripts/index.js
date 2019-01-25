$(document).on('turbolinks:load', function() {

$(function() {
	var user_list = $("#user-search-result") //idもhtmlに加えるための処理

	function appendUsers(user) {  //追加ボタン
		var html = `<div class="chat-group-user clearfix">
		              <p class="chat-group-user__name">${user.name}</p>
                      <a class="user_search_add chat-group-user__btn chat-group-user__btn--add" data-user-id="${user.id}" data-user-name="${user.name}">追加
                      </a>
		            </div>`
		user_list.append(html);
	}
	function deleteHTML(id,name) {  //削除ボタン
		var html = `<div class='chat-group-user clearfix js-chat-member' id='${id}'>
  			<input name='group[user_ids][]' type='hidden' value='${id}'>
  			<p class='chat-group-user__name'>${name}</p>
  			<a class='user-search-remove chat-group-user__btn chat-group-user__btn--remove js-remove-btn'>削除</a>
			</div>`
		return html;
	}

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
			data: {name: input},
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
		var id = $(this).data('user-id')
		var name =$(this).data('user-name')
		// var deletehtml = deleteHTML(id,name)
 		console.log(this)
		 ////returnがないので、varには何にも入らない！？
		// $(`#chat-group-users-${id}`).append(deletehtml)
		  //追加を押すと他のidも一緒にいってしまう。では、クリックしたものだけを移動させよう。
		$("#chat-group-users").append(deleteHTML(id,name)) //rightにnameが追加される
		$(this).parent().remove();  //thisの親要素を取得し、削除
	})
	//id user-search-resultのremoveをクリックすると発火。
	$("#chat-group-users").on('click','.user-search-remove',function() {
		// $(`#chat-group-user-${id}`).remove();
		$(this).parent().remove();  //削除ボタンを削除
	})
})
});
