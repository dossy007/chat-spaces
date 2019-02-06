$(function() {
	function buildHTML(message) {
	var insert_content = message.image_url ? `<li class="chat-main__body--message-text"> ${message.text}
	    <img src= "${message.image_url}">` : `<li class="chat-main__body--message-text">${message.text}`

	var html = `
    <ul>
      <li class="chat-main__body--message-name">
        ${message.user_name}
      </li>
      <li class="chat-main__body--message-date">
        ${message.date}
      </li>
	        ${insert_content}
      </li>
    </ul>`
		return html;
	};

	$('#new_message').on('submit',function(e) {
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action');
		$.ajax( {
			url: url,
			type: 'POST',
		    data: formData,
		    datatype: 'json',
		    processData: false,
		    contentType: false
		})

		.done(function(data) {
			var html = buildHTML(data);
			$('.chat-main__body--message').append(html);
			$('.chat-main__body').animate({ scrollTop: $('.chat-main__body')[0].scrollHeight}, 'swing')
		})
		.fail(function() {
			alert('error')
		})
	})
	$(function() {
		var interval = setInterval(update,3000); //10秒ごとにupdate機能を実行
		});
	function update() { //update機能 自動更新
		// var  current_url = window.location.href
		var last_message_id = $("ul").data('id');
		if(window.location.href.match(/\/groups\/\d+\/messages/)) {
			$.ajax( {
			url: location.href,
			type: 'GET',
			data: {
				message: {id: last_message_id}
			},
			datatype: 'json'
		　　})

		.done(function(data) { //dataは、htmlの塊
			// message.forEach(function(message) {
				//eachを使って、messageを全て回す
			console.log(ul)
			// });
		})
		.fail(function(message) {
			alert('自動更新失敗')
		});
	    }
	    else {
	    	console.log('大失敗')
	    };
	};


	// 	// var message_id = $("'message:last").data('id');
	// 	.always(function(data) {
	// 		$.each(data,function(i,data) {
	// 			buildHTML(data);
	// 		});
	// 	});
	// 	//多分、htmlを追加、idも追加する処理が必要
	// }
});
