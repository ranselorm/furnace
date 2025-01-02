// File: components/ProductCard.tsx
import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface ProductCardProps {
  key: number;
  image: string;
  title: string;
  description: string;
}

const ProductCard: React.FC<ProductCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg">
      <img
        src={image}
        alt={title}
        className="w-full h-48 object-cover rounded"
      />
      <div className="p-6">
        <h3 className="text-lg font-bold mt-4">{title}</h3>
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 ">
              View Details
            </button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none max-w-[60%]">
            <div className="bg-white border-none max-w-full w-full h-auto p-10 rounded-xl overflow-hidden">
              <DialogHeader>
                <DialogTitle>{title}</DialogTitle>
                <DialogDescription>{description}</DialogDescription>
              </DialogHeader>
              <img src={image} width={50} height={50} />
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default ProductCard;
