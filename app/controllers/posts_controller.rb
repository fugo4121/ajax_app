class PostsController < ApplicationController

  def index
    @posts = Post.all.order(id: "DESC")
  end


  def create
    post = Post.create(content: params[:content], checked: false)
    render json:{ post: post }
  end

  def checked
    # クリックしたメモの情報取得
    post = Post.find(params[:id])
    # メモにチェックが入っていたら、チェックを外す
    # メモにチェックが入っていなかったら、チェックをつける
    if post.checked 
      post.update(checked: false)
    else
      post.update(checked: true)
    end
    # 更新したデータをitemに代入し、ビューに受けわたす
    # javascript使用のため、JSON形式で渡す
    item = Post.find(params[:id])
    render json: { post: item }
  end

end
