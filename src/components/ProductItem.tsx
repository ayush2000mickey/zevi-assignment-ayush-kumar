import { useState } from "react";
import "./ProductItem.scss";
import { ProductType } from "../FakerData/FakerData";
import { ratingBox } from "../Utilities/utilities";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";

import { useNavigate } from "react-router-dom";

interface ProductItemType {
  product: ProductType;
}

const ProductItem = ({ product }: ProductItemType) => {
  const [isInWishlist, setIsInWishlist] = useState(false);
  const [showViewProduct, setShowViewProduct] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="product_item">
      <div className="product_img_container">
        <div className="wishlist_icon_container">
          {isInWishlist ? (
            <AiFillHeart
              color="red"
              onClick={() => setIsInWishlist((prev) => !prev)}
            />
          ) : (
            <AiOutlineHeart
              color="red"
              onClick={() => setIsInWishlist((prev) => !prev)}
            />
          )}
        </div>
        <img
          className="product_img"
          src={product.productImg}
          alt=""
          onMouseOver={() => setShowViewProduct(true)}
          onMouseOut={() => setShowViewProduct(false)}
        />
        {showViewProduct && (
          <div
            onMouseOver={() => setShowViewProduct(true)}
            onMouseOut={() => setShowViewProduct(false)}
            className="view_product"
            onClick={() => navigate("/")}
          >
            View Product
          </div>
        )}
      </div>
      <div>{product.productName}</div>
      <div>
        <span className="org_price">Rs. {product.productOrgPrice} </span>
        <span className="dis_price">Rs. {product.productDisPrice} </span>
      </div>
      <div className="rating_and_reviews_container">
        {ratingBox(product.productRating)} ({product.productsReviews})
      </div>
    </div>
  );
};

export default ProductItem;
