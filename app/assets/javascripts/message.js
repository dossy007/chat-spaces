// formが送信された時にイベントが動くようにしよう。

// $(function() {
// 	function buildHTML(message) {
// 		var html = `<%= render :partial => "chat-main__body--message" %>`
// 	// 	var html = `%div.chat-main__body--message
// 	// 			   - messages.each do |message|
// 	// 	            %ul
// 	// 	              %li.chat-main__body--message-name
// 	// 		            = message.user.name
// 	// 		          %li.chat-main__body--message-date
// 	// 		            = message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
// 	// 		          %li.chat-main__body--message-text
// 	// 		            - if message.text.present?
// 	// 		              = message.text
// 	// 		            = image_tag message.image.url, class: 'lower' if message.image.present?`

// 		return html;
// 	}
// 	$('#new_comment').on('submit',function(e) {
// 		e.preventDefault();  //リンク推移を無効に
// 		var formData = new FormData(this);  //thisはid=submit
// 		var url = $(this).attr('action');
// 		$.ajax({
// 			url: url,
// 			type: "POST",
// 			data: formData,
// 			dataType: 'json',
// 			contentType: false
// 		})
// 	});
// });


$(function() {
	function buildHTML(message) {
	// 	var html = `<%= render :partilal => "chat-main__body--message"%>`
	// 	var html =`.chat-main__body--message
 //  - messages.each do |message|
	// %ul
	//   %li.chat-main__body--message-name
	//     = message.user.name
	//   %li.chat-main__body--message-date
	//     = message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
	//   %li.chat-main__body--message-text
	//     - if message.text.present?
	//       = message.text
	//     = image_tag message.image.url, class: 'lower' if message.image.present?`
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
			// $('.chat-main__body').animate({scrollTop: $('.chat-main__body').height()},1500);
			//submitすると、スクロールする処理。
			$('.chat-main__body').animate({ scrollTop: $('.chat-main__body')[0].scrollHeight}, 'swing')
			$('.submit').prop("disabled", false);
		})

		.fail(function() {
			alert('error')
		})
	})
});
