class Api::RecipesController < ApplicationController
 
  def show

    render json: Recipe.find(params[:email])
  end

  def add
  end

  def edit
  end

  def delete
  end

  private

  def recipe_params
    params.require(:recipe).permit(:email,:drinkid)
  end
end
