
	json.id @message.id
	json.text  @message.text
	json.image_url @message.image_url
	json.user_name @message.user.name
	json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
