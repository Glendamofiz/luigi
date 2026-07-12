export async function GET() {
  const baseUrl = "https://luigiofficialbrand.com"

  // Product data for Google Merchant Center feed
  const products = [
    // Fattones
    {
      id: "fattone-blackberry-dream",
      title: "Luigi Fattone Blackberry Dream Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll joint with Blackberry Dream strain. Solventless cannabis extract.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLACKBERRY-DREAM-2400x2400-pe085AZelET8AuGO0fti7o4giOhjqR.jpg",
      category: "Prerolls",
      strain: "Indica",
      url: `${baseUrl}/products/fattones#blackberry-dream`,
    },
    {
      id: "fattone-blue-razz-lime",
      title: "Luigi Fattone Blue Razz Lime Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Blue Razz Lime strain. Solventless extract quality.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-RAZZ-LIME-2400x2400-mHTd6AsUJBSJi5QvC4chUDdw1wdgTw.jpg",
      category: "Prerolls",
      strain: "Sativa",
      url: `${baseUrl}/products/fattones#blue-razz-lime`,
    },
    {
      id: "fattone-banana-gelato",
      title: "Luigi Fattone Banana Gelato Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Banana Gelato strain. Hybrid cannabis flower.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BANANA-GELATO-96QjZctz3PJvwgS0dHym2Ii9CWMh7B.jpg",
      category: "Prerolls",
      strain: "Hybrid",
      url: `${baseUrl}/products/fattones#banana-gelato`,
    },
    {
      id: "fattone-blue-mist",
      title: "Luigi Fattone Blue Mist Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Blue Mist strain. High potency solventless extract.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLUE-MIST-2400x2400-HqzTJqYDxmItWpPSOctoUV0TIrGSoA.jpg",
      category: "Prerolls",
      strain: "Hybrid",
      url: `${baseUrl}/products/fattones#blue-mist`,
    },
    {
      id: "fattone-blood-orange",
      title: "Luigi Fattone Blood Orange Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Blood Orange strain. Full spectrum cannabis.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_BLOOD-ORANGE-2400x2400-Ge320FdF3tfMngmcRUoDznapHawPmy.jpg",
      category: "Prerolls",
      strain: "Indica",
      url: `${baseUrl}/products/fattones#blood-orange`,
    },
    {
      id: "fattone-strawberry-og",
      title: "Luigi Fattone Strawberry OG Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Strawberry OG strain. Potent sativa effects.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_STRAWBERRY-OG-2400x2400-f6qwDECQdaLlFJPtemDOkGOol5oppC.jpg",
      category: "Prerolls",
      strain: "Sativa",
      url: `${baseUrl}/products/fattones#strawberry-og`,
    },
    {
      id: "fattone-watermelon",
      title: "Luigi Fattone Watermelon Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Watermelon strain. Relaxing indica effects.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_WATERMELON-2400x2400-YwD3UzumetnOcZXM4IpeTnQF3cVRZF.jpg",
      category: "Prerolls",
      strain: "Indica",
      url: `${baseUrl}/products/fattones#watermelon`,
    },
    {
      id: "fattone-pineapple-diesel",
      title: "Luigi Fattone Pineapple Diesel Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Pineapple Diesel strain. Energizing hybrid.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_PINEAPPLE-DIESEL-2400x2400-V93LYixkxVS2GEZn7nTtSEKhoVEkxD.jpg",
      category: "Prerolls",
      strain: "Hybrid",
      url: `${baseUrl}/products/fattones#pineapple-diesel`,
    },
    {
      id: "fattone-honeydew-melon",
      title: "Luigi Fattone Honeydew Melon Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Honeydew Melon strain. Sweet hybrid blend.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_HONEYDEW-MELON-2400x2400-1dWnoszRkZeG4Lq6gzSRszHLS5oS4G.jpg",
      category: "Prerolls",
      strain: "Hybrid",
      url: `${baseUrl}/products/fattones#honeydew-melon`,
    },
    {
      id: "fattone-cherry-pie",
      title: "Luigi Fattone Cherry Pie Hash Rosin Infused Preroll",
      description: "Premium hash rosin infused preroll with Cherry Pie strain. Balanced hybrid effects.",
      price: "12.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/FATTONE_CHERRY-PIE-2400x2400-ZvPqetaSFwUGGKzjjbTTQbPzbdu4gs.jpg",
      category: "Prerolls",
      strain: "Hybrid",
      url: `${baseUrl}/products/fattones#cherry-pie`,
    },
    // Series 6
    {
      id: "series6-black-diesel-milk",
      title: "Luigi Series 6 Black Diesel Milk Liquid Diamond Disposable Vape",
      description: "High potency liquid diamond extract vape with Black Diesel Milk strain. THCA crystalline concentrate.",
      price: "24.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/BLACK-DIESEL-MILK-2400x2400-6AmnPCBMqrOG9jGbKep4wfmljguOef.jpg",
      category: "Disposable Vapes",
      strain: "Indica",
      url: `${baseUrl}/products/series-6#black-diesel-milk`,
    },
    {
      id: "series6-candy-corn-chaos",
      title: "Luigi Series 6 Candy Corn Chaos Liquid Diamond Disposable Vape",
      description: "Premium liquid diamond vape with Candy Corn Chaos strain. Maximum potency THCA extract.",
      price: "24.99",
      image: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/CANDY-CORN-CHAOS-2400x2400-7tUL3R44MqJibQwLdB3WKgjp7hEC2C.jpg",
      category: "Disposable Vapes",
      strain: "Hybrid",
      url: `${baseUrl}/products/series-6#candy-corn-chaos`,
    },
  ]

  // Generate XML feed
  const xmlFeed = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:g="http://base.google.com/ns/1.0">
  <channel>
    <title>Luigi Official Brand Products</title>
    <link>${baseUrl}</link>
    <description>Premium cannabis products including prerolls and liquid diamonds</description>
    ${products
      .map(
        (product) => `
    <item>
      <g:id>${product.id}</g:id>
      <g:title>${escapeXml(product.title)}</g:title>
      <g:description>${escapeXml(product.description)}</g:description>
      <g:link>${product.url}</g:link>
      <g:image_link>${product.image}</g:image_link>
      <g:price>${product.price} USD</g:price>
      <g:availability>in_stock</g:availability>
      <g:product_type>${product.category}</g:product_type>
      <g:brand>Luigi Official Brand</g:brand>
      <g:mpn>${product.id}</g:mpn>
      <g:custom_label_0>${product.strain}</g:custom_label_0>
    </item>
    `
      )
      .join("")}
  </channel>
</rss>`

  return new Response(xmlFeed, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
      "Cache-Control": "public, max-age=3600",
    },
  })
}

// Helper function to escape XML special characters
function escapeXml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&apos;")
}
