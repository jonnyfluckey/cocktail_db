require 'rest-client'

class Cocktail

def get_random_cocktail

  RestClient.get('http://www.thecocktaildb.com/api/json/v1/1/random.php', {accept: :json})
end

def search_cocktail(search)
  
  RestClient.get('https://www.thecocktaildb.com/api/json/v1/1/search.php', {params: {s: search}})
end

def search_cocktail_by_id(search)
  
  RestClient.get('https://www.thecocktaildb.com/api/json/v1/1/lookup.php', {params: {i: search}})
end

end

