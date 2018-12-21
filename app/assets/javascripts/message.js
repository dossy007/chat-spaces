$(function() {
	function buildHTML(message) {

	var set_image = message.image_url ? `<img src= "${message.image_url}">` : '' ;

	var html = `
    <ul>
      <li class="chat-main__body--message-name">
        ${message.user_name}
      </li>
      <li class="chat-main__body--message-date">
        ${message.created_at}
      </li>
      <li class="chat-main__body--message-text">
	        ${message.text}
	        ${set_image}
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
			$('.submit').prop("disabled", false);
		})

		.fail(function() {
			alert('error')
		})
	})
});
