import dbConnect from "@/db/connect";
import Product from "../../../db/models/Product.js";

export default async function handler(request, response) {
  //API route handler function to process incoming requests and send responses

  await dbConnect(); //connect with MondoDB
  if (request.method === "GET") {
    // Check if method is GET
    const products = await Product.find(); // Fetch all products from DB (find();)

    return response.status(200).json(products); // Return products as JSON
  } else {
    return response.status(405).json({ message: "Method not allowed" });
  }
}
