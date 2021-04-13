class ProductsController < ApplicationController
    def index
        products = Product.all
        render json: products
    end

    def show
        product = Product.find(params[:id])
        render json: product
    end

    def create
        product = Product.new(product_params)
        if product.save
          render json: product
        else
          
        end
      end
    
      def destroy
        product = Product.find(params[:id])
    
        if product.destroy
          render json: { id: product.id }
        end
      end
    
      private
      def product_params
        params.require(:product).permit(:name, :description, :price, :category_id)
      end
    end