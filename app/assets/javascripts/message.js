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
});
