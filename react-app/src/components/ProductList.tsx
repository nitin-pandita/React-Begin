import { useEffect, useState } from "react";
interface Props {
  category: string;
}
const ProductList = ({ category }: Props) => {
  const [product, setProduct] = useState<string[]>([]);
  useEffect(() => {
    console.log("Fetching Products is", category);
    setProduct(["Clothing", "Groceries"]);
  }, [category]);
  return <div>ProductList</div>;
};

export default ProductList;
