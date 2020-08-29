Rails.application.routes.draw do
  # For details on the DSL available within this file, see https://guides.rubyonrails.org/routing.html
# [HTTPメソッド] '[URIパターン(≒URL)]', to: '[コントローラー名]#[アクション名]'
  root to: 'posts#index'

  post 'posts', to: 'posts#create'
end
