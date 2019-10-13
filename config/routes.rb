Rails.application.routes.draw do
  namespace :api do
    resources :cocktails
    resources :recipes, :constraints  => { :id => /[0-z\.]+/ }

    get 'cocktails/showbyid/:id', to: 'cocktails#showbyid'
  end
end
