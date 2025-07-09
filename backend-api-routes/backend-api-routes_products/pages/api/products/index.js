import { getAllProducts } from "@/services/productServices.js";
const products = getAllProducts();
export default function handler(request, response) {
  if (!products) {
    response.status(500);
  }
  response.status(200).json(products);
}
