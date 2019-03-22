class UsersController < ApplicationController
  def index
    @users = User.where('name LIKE(?) and id NOT IN (?)',"%#{params[:name]}%",edit_params)
    respond_to do |format|
      format.html
      format.json
    end
  end

  def edit
  end

  def update
  	if current_user.update(user_params)
  		redirect_to root_path
  	else
  		render :edit
  	end
  end

  private

  def user_params
  	params.require(:user).permit(:name,:email)
  end

  def edit_params
    ids = [current_user.id]
    if params[:group_ids]!= nil
      params[:group_ids].each do |id|
          ids << id.to_i
      end
    end
    return ids
  end

end
