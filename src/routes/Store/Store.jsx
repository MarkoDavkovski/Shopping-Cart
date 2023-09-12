import "./store.css";
import { useLoaderData } from "react-router-dom";
import ProductCard from "../../components/ProductCard/ProductCard.jsx";
const Store = () => {
  const products = useLoaderData();

  return (
    <section id="store">
      {products &&
        products.map((p) => {
          let discountedPrice = p.price;
          let discPercentage = p.discountPercentage;
          let originalPrice = p.price / (1 - discPercentage / 100);
          originalPrice = parseFloat(originalPrice).toFixed(2);

          return (
            <ProductCard
              key={p.id}
              title={p.title}
              brand={p.brand}
              category={p.category}
              id={p.id}
              description={p.description}
              imgUrl={p.thumbnail}
              discountedPrice={discountedPrice}
              stock={p.stock}
              discount={discPercentage}
              originalPrice={originalPrice}
            />
          );
        })}
    </section>
  );
};

export default Store;
