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

## members tabel
|Column|Type|Option|
|------|----|------|
|group_id|references|foreign_key :true
|user_id|references|foreign_key :true|

## Assosiation
- belongs_to user
- belongs_to :group
