import type { Metadata } from "next"
import { AioProductPage } from "@/components/aio-product-page"
import { getAioProduct, metadataFor } from "@/lib/aio-products"
const product = getAioProduct("thai-blaze-aio-dual-pack")!
export const metadata: Metadata = metadataFor(product)
export default function Page() { return <AioProductPage product={product} /> }
