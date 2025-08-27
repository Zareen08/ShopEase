import connectDB from "@/lib/mongodb";
import Product from "@/models/Product";
import { getServerSession } from "next-auth";
import { authOptions } from "../auth/[...nextauth]/route";

export async function POST(req) {
  try {
    const session = await getServerSession(authOptions);

    if (!session) {
      return new Response(JSON.stringify({ message: "Unauthorized" }), { status: 401 });
    }

    const { name, description, price, image } = await req.json();
    await connectDB();

    const product = await Product.create({
      name,
      description,
      price,
      image,
      createdBy: session.user.email,
    });

    return new Response(JSON.stringify({ message: "Product added successfully", product }), { status: 201 });
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }), { status: 500 });
  }
}
