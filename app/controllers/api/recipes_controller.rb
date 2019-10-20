class Api::RecipesController < ApplicationController

  require 'pry'

  def index
    render json: Recipe.all
  end
 
  def show
    @parameter = params[:id]
    @recipe = Recipe.where(email: @parameter)
    render json: @recipe
  end

  def create
    @recipe = Recipe.new(recipe_params)
      if @recipe.save
        render json: @recipe
      else
        render json: { errors: @recipe.errors }, status: :unprocessable_entity
      end
  end

  def edit
  end

  def destroy
    @parameter = params[:id]
    @recipe = Recipe.where(drinkid: @parameter)
    Recipe.delete(@recipe.ids)
    render json: {message: "Favorite Deleted"}
  end

  private

  def recipe_params
    params.require(:recipe).permit(:email,:drinkid)
  end
end
