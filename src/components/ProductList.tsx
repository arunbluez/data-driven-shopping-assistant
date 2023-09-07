import { Product } from "../product/product"
import ProductItem from "./ProductItem"

interface ProductListProps {
  products: readonly Product[]
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className="flex flex-col gap-4">
      {products && products.length > 0 ? (
        products.map((product: Product) => (
          <ProductItem key={product.name} product={product} />
        ))
      ) : (
        <div className="w-full border border-gray-400 rounded-xl p-4 min-h-[240px] flex items-center justify-center">
          <p className="font-bold">
            We didnt find any television based on your preferences, try modifing
            your answers!
          </p>
        </div>
      )}
    </div>
  )
}
