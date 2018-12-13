class MessagesController < ApplicationController
	before_action :set_group
	#beforeにgroupをクリックした時、そのgroup_idを渡してあげる。
	def index
		@message = Message.new
		@messages = @group.messages.includes(:user)
	end

	def new
	end

	def create
		@message = @group.messages.new(message_params)
		if @message.save
			redirect_to group_messages_path(@group), notice: 'messageが送信'
			# redirect_toの第二引数にnoticeのキーを取れる flash[:notice]と同義
			# respond_to do |format|
			# 	format.json {
			# 		render json
			# 	}
			# end
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
