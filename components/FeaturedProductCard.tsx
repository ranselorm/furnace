import React from "react";
import {
  Dialog,
  DialogTrigger,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";

interface FeaturedProductCardProps {
  key: number;
  image: string;
  title: string;
  description: string;
  onClick: () => void;
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="max-w-xs bg-white shadow-md rounded-lg flex flex-col justify-between">
      {/* Image Section */}
      <div className="relative h-64 bg-gray-300 flex items-center justify-center">
        <img
          src={image}
          alt={title}
          className="w-full h-[80%] object-contain rounded"
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center justify-between flex-1">
        <h3 className="text-lg text-center">{title}</h3>
        <Dialog>
          <DialogTrigger asChild>
            <button className="mt-4 text-secondary self-center font-bold uppercase">
              See Details
            </button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none max-w-[90%] md:max-w-[60%] rounded-lg">
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-auto flex items-center justify-center bg-gray-100">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-auto object-contain p-4"
                />
              </div>
              {/* Details Section */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-gray-600">
                    {description}
                  </DialogDescription>
                </DialogHeader>
              </div>
            </div>
          </DialogContent>
        </Dialog>
      </div>
    </div>
  );
};

export default FeaturedProductCard;
