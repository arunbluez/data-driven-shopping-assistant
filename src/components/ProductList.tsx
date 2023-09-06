import { fetchProducts } from "../product/fetchProducts"
import { Product } from "../product/product"
import ProductItem from "./ProductItem"

export default function ProductList() {
  const products = fetchProducts()
  return (
    <div className="flex flex-col gap-4">
      {products.slice(0, 5).map((product: Product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  )
}
