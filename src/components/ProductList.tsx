import { Product } from '../product/product';
import ProductItem from './ProductItem';

interface ProductListProps {
  products: readonly Product[];
}

export default function ProductList({ products }: ProductListProps) {
  return (
    <div className='flex flex-col gap-4'>
      {products.map((product: Product) => (
        <ProductItem key={product.name} product={product} />
      ))}
    </div>
  );
}
