class Message < ApplicationRecord
  # Assosiation
  belongs_to :user
  belongs_to :group

  # Validate
  validates :text, presence: true, unless: :image?
  ## textを保存は絶対にしなければいけない（もしも、imageがなければ）
  ## つまり、imageがあればtextがなくても保存できる。textがなくてもimageがあれば保存できる。どちらもなければ。保存はできない。どちらかあれば保存できる。
end
