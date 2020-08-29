class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
  end


  def create
    Post.create(content: params[:content])
    # 新規投稿後、index画面にリダイレクト(create→ルーティング→index)
    redirect_to action: :index
  end

end
