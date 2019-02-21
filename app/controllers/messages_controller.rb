class MessagesController < ApplicationController
	before_action :set_group
	#beforeにgroupをクリックした時、そのgroup_idを渡してあげる。
	def index
		@message = Message.new
		@messages = @group.messages.includes(:user)
		respond_to do |format|
			format.html
			format.json{ @new_messages = Message.where('id > ?', params[:message][:id]) }
		end
	end

	def new
	end

	def create
		@message = @group.messages.new(message_params)
		if @message.save
			respond_to do |format|
				format.json
		    end
		else
			@messages = @group.messages.includes(:user)
			flash.now[:alert] = 'messagesを入力してください'
			render :index
		end
	end

	def delete
	end

	private

	def message_params
		params.require(:message).permit(:text,:image).merge(user_id: current_user.id)
	end

	def set_group
		@group = Group.find(params[:group_id])
	end
end
