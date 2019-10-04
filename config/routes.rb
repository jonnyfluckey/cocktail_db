Rails.application.routes.draw do
  namespace :api do
    resources :cocktails
    resources :recipes
  end
end
