
$(document).on('turbolinks:load', function() {
	function buildHTML(message) {
	var insert_content = message.image_url ? `<li class="chat-main__body--message-text">${message.text}<p><img src= "${message.image_url}"></p>`
	: `<li class="chat-main__body--message-text">${message.text}`
      // 上はtextのみ、下はimageあるとき
	var html = `
    <ul class = data_box data-message_id="${message.id}">
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
    //非同期メッセージ送信
	$('#new_message').on('submit',function(e) {
		e.preventDefault();
		var formData = new FormData(this);
		var url = $(this).attr('action');
		$(this)[0].reset();
		$.ajax( {
			url: url,
			type: 'POST',
		    data: formData,
		    dataType: 'json',
		    processData: false,
		    contentType: false
		})

		.done(function(data) {
			if(data.length == undefined) {
			var html = buildHTML(data);
			$('.chat-main__body--message').append(html);
			$('.chat-main__body').animate({ scrollTop: $('.chat-main__body')[0].scrollHeight}, 'swing')
			$('#submit').prop("disabled",false);
		    }else {
		    	alert('メッセージを投稿してください')
			$('#submit').prop("disabled",false);
		    }
		})
		.fail(function() {
			alert('error')
		})
	})
    //update機能 自動更新
	$(function() {
		var interval = setInterval(update,5000);
	})
		function update() {
			var message_id = $('.data_box:last').data('message_id');
			if (message_id === undefined){
					message_id = 0;
				}
			if(window.location.href.match(/\/groups\/\d+\/messages/)) {
				$.ajax( {
				url: location.href,
				type: 'GET',
				data: {
					message: {id: message_id}
				},
				dataType: 'json'
			　　})
			.done(function(data) {
				data.forEach(function(message){
					var html = buildHTML(message)
					$('.chat-main__body--message').append(html)
					$('.chat-main__body').animate({ scrollTop: $('.chat-main__body')[0].scrollHeight}, 'swing')
				})
			})
			.fail(function(message) {
			})
		    }
		};
});
