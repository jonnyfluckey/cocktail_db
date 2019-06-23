class Api::CocktailsController < ApplicationController
  def index

  random = Cocktail.new
  @cocktail = random.get_random_cocktail()
  render json: @cocktail

  
  end
end
