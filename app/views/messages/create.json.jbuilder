
	json.id @message.id
	json.text  @message.text
	json.image_url @message.image.url
	json.user_name @message.user.name
	json.created_at @message.created_at.strftime('%Y年%m月%d日 %H:%M:%S')
	json.user_id  @message.user_id
	json.group_id @message.group_id
# json.array! @message do |message|
# 	json.id message.id
# 	json.text message.text
# 	json.image message.image
# 	json.user.name message.user.name
# 	json.created_at message.created_at
# 	json.user_id message.user_id
# 	json.group_id message.group_id
# end
