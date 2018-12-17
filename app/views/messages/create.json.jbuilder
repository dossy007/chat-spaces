json.array! @messages do |message|

	json.id message.id
	json.text  message.text
	json.image message.image
	json.user_id  message.user_id
	json.group_id message.group_id
end
# json.id @message.id
# json.user_id @message.user_id
# json.text @message.text
# json.user.name @message.user.name
# json.created_at @message.created_at

# @messagesは配列で渡してあげないとダメ。
