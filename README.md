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

## Users table
|Column|Type|Option|
|------|----|------|
|name|string|index:true,null:false|

## Assosiation
- has_many :members
- has_many :messages
- has_many :groups, through: :members


