Rails.application.routes.draw do
  devise_for :users
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html

  namespace :api, defaults: { format: :json } do
    namespace :v1 do
      resources :organisations, only: [ :index, :create ] do
        resources :shifts, only: [ :index, :create ]
      end
    end
  end

  resources :organisations, only: [ :show, :index, :create ]
  root to: 'organisations#show'
end
