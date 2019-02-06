json.array! @new_messages do |new_message|
 json.id new_message.id
 json.name new_message.name
 json.text  new_message.text
 json.image_url new_message.image_url
 json.date new_message.created_at.to_s(:default)
end
