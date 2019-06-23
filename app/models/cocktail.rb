require 'rest-client'

class Cocktail

def get_random_cocktail

  RestClient.get('http://www.thecocktaildb.com/api/json/v1/1/random.php', {accept: :json})
end


end