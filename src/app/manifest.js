export default function manifest() {
  return {
    name: "Your Bazaar - Unique Shopping Experience",
    short_name: "Bazaar Shop",
    description:
      "Welcome to Your Bazaar, your one-stop destination for a wide range of unique and handcrafted products. Explore our diverse collection of items and find something special just for you.",
    keywords: [
      "Your Bazaar",
      "unique products",
      "handcrafted items",
      "online shopping",
      "explore",
      "discover",
      "e-commerce",
      "shopping online",
      "best deals",
      "discounted items",
      "exclusive offers",
      "free shipping",
      "secure checkout",
      "customer reviews",
      "product comparisons",
      "trendy products",
      "new arrivals",
      "sale items",
      "fashion accessories",
    ],
    start_url: "/",
    display: "standalone",
    background_color: "#ffffff",
    theme_color: "#3498db",
    lang: "en-US",
    icons: [
      {
        src: "/favicon-32x32.png",
        sizes: "32x32",
        type: "image/png",
      },
      {
        src: "/favicon-16x16.png",
        sizes: "16x16",
        type: "image/png",
      },
      {
        src: "/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        src: "/android-chrome-512x512",
        sizes: "512x512",
        type: "image/png",
      },
    ],
  };
}
