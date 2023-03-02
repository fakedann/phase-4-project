class ReviewSerializer < ActiveModel::Serializer
  # 
  include Rails.application.routes.url_helpers
  attributes :id, :employee_id, :restaurant_id, :comments, :rate, :image, :image_url

  def image_url
    img = Rails.application.routes.url_helpers.rails_blob_path(self.object.image, only_path: true)
  end
 
  
end
