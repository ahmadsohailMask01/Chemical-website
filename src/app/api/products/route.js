import { NextResponse } from "next/server";
import connectMongoDB from "../../../../libs/mongodb";
import Product from "../../../../models/productSchema";

// export async function POST(request) {
//   const { product_title, product_price, product_description } =
//     await request.json();
//   await connectMongoDB();
//   await Product.create({ product_title, product_price, product_description });
//   return NextResponse.json({ message: "Product Created" }, { status: 201 });
// }

export async function POST(request) {
  const formData = await request.formData();

  const file = formData.get("image"); // 👈 the file input
  const product_title = formData.get("product_title");
  const product_price = formData.get("product_price");
  const product_description = formData.get("product_description");

  if (!file || typeof file === "string") {
    return NextResponse.json(
      { error: "Image file is required" },
      { status: 400 }
    );
  }

  const bytes = await file.arrayBuffer();
  const buffer = Buffer.from(bytes);

  await connectMongoDB();

  await Product.create({
    product_title,
    product_price,
    product_description,
    image: {
      data: buffer,
      contentType: file.type,
    },
  });

  return NextResponse.json({ message: "Product Created" }, { status: 201 });
}

export async function GET() {
  await connectMongoDB();
  const products = await Product.find();
  // return NextResponse.json({ products });

  const serialized = products.map((p) => ({
    _id: p._id,
    product_title: p.product_title,
    product_price: p.product_price,
    product_description: p.product_description,
    image: p.image?.data
      ? `data:${p.image.contentType};base64,${p.image.data.toString("base64")}`
      : null,
  }));

  return NextResponse.json(serialized, { status: 200 });
}

export async function DELETE(request) {
  const id = request.nextUrl.searchParams.get("id");
  await connectMongoDB();
  await Product.findByIdAndDelete(id);
  return NextResponse.json({ message: "Product Deleted" }, { status: 200 });
}
