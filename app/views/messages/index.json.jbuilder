json.array! @new_messages do |message|
 json.id message.id
 json.name message.name
 json.text message.text
 json.image_url message.image_url
 json.date message.created_at.to_s(:default)
end
