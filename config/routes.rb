Rails.application.routes.draw do
  get '/', to: 'top#index'

  get 'game/1', to: 'games#game_1'
  get 'game/win', to: 'games#win'
  get 'game/lose', to: 'games#lose'
end
