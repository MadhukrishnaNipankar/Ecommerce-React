import React from "react";
import { Box, Flex } from "@chakra-ui/react";

import ProductCard from "../Components/ProductCard";

const ProductlListPage = () => {
  const products = [
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },
    {
      imageUrl:
        "https://tse3.mm.bing.net/th?id=OIP.OAkWA5DC2qd4yRA7altWmwHaGS&pid=Api&P=0&h=180",
      title: "HP Victus 16-e0097nr",
      description:
        "Powerful gaming laptop with high-performance hardware, perfect for gaming enthusiasts.",
      price: 1299.99,
      rating: 4.5,
      positiveFeedbackCount: 250,
      salesCount: 500,
      sellerName: "Best Electronics Store",
    },
    {
      imageUrl:
        "https://tse2.mm.bing.net/th?id=OIP.WEfhNDMnuy4w38JdCEyHWQHaFd&pid=Api&P=0&h=180",
      title: "Dell Inspiron 15 7000",
      description:
        "Sleek and stylish laptop with a powerful processor and vibrant display, suitable for both work and entertainment.",
      price: 999.99,
      rating: 4.2,
      positiveFeedbackCount: 200,
      salesCount: 400,
      sellerName: "Tech MegaStore",
    },

    // Add more products here with the same structure
  ];
  return (
    <Box h="99vh" p={4}>
      <Flex color="white" flexWrap="wrap">
        {products.map((product, index) => (
          <ProductCard
            key={index}
            imageUrl={product.imageUrl}
            title={product.title}
            description={product.description}
            price={product.price}
            rating={product.rating}
            positiveFeedbackCount={product.positiveFeedbackCount}
            salesCount={product.salesCount}
            sellerName={product.sellerName}
          />
        ))}
      </Flex>
    </Box>
  );
};

export default ProductlListPage;
