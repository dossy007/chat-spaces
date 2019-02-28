FactoryBot.define do
  factory :message do
    text {Faker::Lorem.sentence}
    # Fakerでダミーを作成している。
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/images/1.png")}
    # image File.open("#{Rails.root}/public/images/no_image.jpg")

    #これは、何をやっているのか？f
  end
end
