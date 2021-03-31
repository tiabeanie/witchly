class Product < ApplicationRecord
    belongs_to :category, optional: true


    def category_name
        self.category ? self.category.name : "Not assigned" 
    end
end