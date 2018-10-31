class Message < ApplicationRecord
  # Assosiation
  belongs_to :user
  belongs_to :group

  # Validate
  validates :text, presence: true, unless: :image?
  ## textを保存は絶対にしなければいけない（もしも、imageがなければ）
  ## つまり、imageがあればtextがなくても保存できる。textがなくてもimageがあれば保存できる。どちらもなければ。保存はできない。どちらかあれば保存できる。


  mount_uploader :image, ImageUploader
  # image_columnをmount_uploaderに指定する。
  # これで投稿した画像データをテーブルに保存できるようになりました
end
