FactoryBot.define do
  factory :message do
    text {Faker::Lorem.sentence}
    # Fakerでダミーを作成している。
    content {Faker::Lorem.sentence}
    image {File.open("#{Rails.root}/public/uploads/message/image/38/あか時計.jpg")}
    # image File.open("#{Rails.root}/public/images/no_image.jpg")

    #これは、何をやっているのか？f
  end
end
