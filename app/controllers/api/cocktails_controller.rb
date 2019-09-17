class Api::CocktailsController < ApplicationController
  def index

  random = Cocktail.new
  @cocktail = random.get_random_cocktail()
  render json: @cocktail

  
  end

  def show
   
  search = Cocktail.new
  @cocktail = search.search_cocktail(params[:id])
  render json: @cocktail

  end

end
