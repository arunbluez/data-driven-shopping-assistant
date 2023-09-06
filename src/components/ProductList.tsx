import ProductItem from "./ProductItem"

export default function ProductList() {
  const list = [0, 1, 2, 3, 4]
  return (
    <div className="flex flex-col gap-4">
      {list.map((x: number) => (
        <ProductItem key={x} />
      ))}
    </div>
  )
}
