class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def show
        product = Item.find(params[:id])
        render json: product
    end
end