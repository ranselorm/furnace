import { GetStaticPaths, GetStaticProps, NextPage } from "next";
import { NextSeo, ProductJsonLd } from "next-seo";
import Image from "next/image";
import { products, Product } from "@/data";

// Ensure Product type includes slug
// interface Product {
//   image: string;
//   title: string;
//   description: string;
//   slug: string;
// }

interface Props {
  product: Product;
}

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = products.map((p) => ({
    params: { slug: p.slug },
  }));
  return { paths, fallback: false };
};

export const getStaticProps: GetStaticProps<Props> = async ({ params }) => {
  const slug = params?.slug as string;
  const product = products.find((p) => p.slug === slug)!;
  return { props: { product } };
};

const ProductPage: NextPage<Props> = ({ product }) => {
  const url = `https://www.caesarfurnacegh.com/products/${product.slug}`;
  const imageUrl = `https://yourdomain.com${product.image}`;

  return (
    <>
      <NextSeo
        title={`${product.title} – Caesar Furnace Ghana`}
        description={product.description}
        canonical={url}
        openGraph={{
          url,
          title: product.title,
          description: product.description,
          images: [{ url: imageUrl, alt: product.title }],
        }}
      />

      <ProductJsonLd
        productName={product.title}
        images={[imageUrl]}
        description={product.description}
        brand="Caesar Furnace"
        offers={{
          price: "Contact us",
          priceCurrency: "GHS",
          availability: "InStock",
          url,
        }}
      />

      <main className="container mx-auto px-4 md:px-20 py-16">
        <h1 className="text-4xl font-bold mb-4">{product.title}</h1>
        <div className="mb-6">
          <Image
            src={product.image}
            alt={`${product.title} installation in Ghana`}
            width={800}
            height={500}
            layout="responsive"
          />
        </div>
        <p className="mb-8">{product.description}</p>
      </main>
    </>
  );
};

export default ProductPage;
