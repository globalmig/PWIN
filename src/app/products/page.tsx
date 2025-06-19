// app/products/page.tsx
import { Suspense } from "react";
import ProductClient from "../components/products/ProductClient";

export default function ProductsPage() {
  return (
    <Suspense fallback={<div>로딩 중...</div>}>
      <ProductClient />
    </Suspense>
  );
}
