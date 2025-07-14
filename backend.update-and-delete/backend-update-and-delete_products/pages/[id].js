import useSWR from "swr";
import styled from "styled-components";
import { useRouter } from "next/router";
import StyledLink from "@/components/Link";
import { useState } from "react";
import ProductForm from "@/components/ProductForm.js";
export default function Product() {
  const router = useRouter();
  const { id } = router.query;

  const { data, isLoading, mutate } = useSWR(id ? `/api/products/${id}` : null);

  const [isEditMode, setIsEditMode] = useState(false);

  async function handleEditProduct(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    const updatedProduct = Object.fromEntries(formData);

    const response = await fetch(`/api/products/${id}`, {
      method: "PUT",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(updatedProduct),
    });
    if (response.ok) {
      mutate();
    }
  }

  async function handleDeleteProduct() {
    const response = await fetch(`/api/products/${id}`, {
      method: "DELETE",
    });

    if (response.ok) {
      router.push("/");
    }
  }
  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  if (!data) {
    return <p>Loading product data...</p>;
  }

  return (
    <ProductCard>
      <h2>{data.name}</h2>
      <p>Description: {data.description}</p>
      <p>
        Price: {data.price} {data.currency}
      </p>
      <StyledLink href="/">Back to all</StyledLink>

      <div>
        <button type="button" onClick={handleDeleteProduct}>
          Delete
        </button>
        <button type="button" onClick={() => setIsEditMode(!isEditMode)}>
          {isEditMode ? "Cancel Editing" : "Edit Product"}
        </button>
      </div>

      {isEditMode && (
        <ProductForm
          onSubmit={handleEditProduct}
          heading="Edit Fish"
          defaultData={data}
        />
      )}
    </ProductCard>
  );
}

const ProductCard = styled.article`
  padding: 0.5rem 1rem;
  box-shadow: 0px 1px 5px -2px var(--color-granite);
`;
