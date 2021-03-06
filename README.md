# README

This README would normally document whatever steps are necessary to get the
application up and running.

Things you may want to cover:

* Ruby version

* System dependencies

* Configuration

* Database creation

* Database initialization

* How to run the test suite

* Services (job queues, cache servers, search engines, etc.)

* Deployment instructions

* ...

## users table
|Column|Type|Option|
|------|----|------|
|name|string|index: true,null: false|


## Assosiation
- has_many :members
- has_many :messages
- has_many :groups, through: :members

## groups table
|Column|Type|Option|
|------|----|------|
|name|string|null: false, unique: true|

## Assosiation
- has_many :members
- has_many :messages
- has_many :users, through: :members
  validates :name, presence: true

## messages table
|Column|Type|Option|
|------|----|------|
|text|text||
|image|string||
|user_id|references|foreign_key: true|
|group_id|references|foreign_key: true|

## Assosiation
- belongs_to :user
- belongs_to :group

## validation
- :content, presence: true, unless: :image?


## members table
|Column|Type|Option|
|------|----|------|
|group_id|references|foreign_key: true
|user_id|references|foreign_key: true|
<!-- 確か、references（外部キー制約)を使う時、_idはいらんかった記憶がある。 -->
## Assosiation
- belongs_to user
- belongs_to :group
