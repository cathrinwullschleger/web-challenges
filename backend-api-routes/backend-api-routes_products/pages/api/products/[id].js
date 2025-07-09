import { getProductById } from "@/services/productServices.js";

export default function handler(request, response) {
  const { id } = request.query;
  console.log(request.query);
  const product = getProductById(id);
  if (!product) {
    return response.status(404).json({ status: "Product not found" });
  }
  response.status(200).json(product);
}
