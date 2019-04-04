import * as React from "react";
import IProduct from "types/IProduct";

import ProductItem from "./ProductItem";
import ProductModal from "./ProductModal";
import "./showcase.scss";

interface IShowcaseProps {
  products: IProduct[];
}

const Showcase = (props: IShowcaseProps) => {
  const [isModalOpen, setModal] = React.useState(false);
  const [selectedProduct, setSelectedProduct] = React.useState(null);

  const handleProductClick = (product) => {
    setModal(true);
    setSelectedProduct(product);
  };

  return (
    <React.Fragment>
      {isModalOpen ? <ProductModal onClose={() => setModal(false)} product={selectedProduct} /> : null}
      <ul className="showcase">
        {
          props.products && props.products.map((product) => (
            <ProductItem
              key={product.id}
              product={product}
              onClick={() => handleProductClick(product)}
            />
          ))
        }
      </ul>
    </React.Fragment>
  );
};

export default Showcase;