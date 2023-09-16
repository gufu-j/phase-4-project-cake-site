class CakeSerializer < ActiveModel::Serializer
  attributes :id, :name, :type_of_cake, :image, :price, :location
end
