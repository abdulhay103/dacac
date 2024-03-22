import { v2 as cloudinary } from "cloudinary";
import { NextResponse } from "next/server";

cloudinary.config({
  cloud_name: process.env.NEXT_PUBLIC_CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const removeImage = async (publicId) => {
  try {
    const res = await cloudinary.v2.uploader.destroy(publicId, {
      invalidate: true,
      resource_type: "image",
    });
  } catch (e) {
    throw new Error(e.toString());
  }
};
export async function POST(req) {
  BigInt.prototype.toJSON = function () {
    return this.toString();
  };
  const { publicId } = await req.json();
  await removeImage(publicId);
  return NextResponse.json({
    status: "Successfully Remove Image",
  });
}
