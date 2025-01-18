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
  onClick?: () => void;
}

const FeaturedProductCard: React.FC<FeaturedProductCardProps> = ({
  image,
  title,
  description,
}) => {
  return (
    <div className="max-w-xs shadow-md flex flex-col justify-between self-center h-96">
      {/* Image Section */}
      <div className="relative h-48 bg-gray-300 flex items-center justify-center hover:scale-105 transition-all duration-300">
        <img
          src={image}
          alt={title}
          className={`w-full ${
            title === "BOILERS" ||
            title === "INCINERATORS" ||
            title === "DRYERS"
              ? "object-cover h-full"
              : "object-cover h-full"
          } rounded`}
        />
      </div>

      {/* Content Section */}
      <div className="p-6 flex flex-col items-center justify-between flex-1 pt-20">
        <Dialog>
          <h3 className="text-base text-center">{title}</h3>
          <DialogTrigger asChild>
            <button className="mt-4 text-secondary self-center font-bold uppercase text-sm">
              See Details
            </button>
          </DialogTrigger>
          <DialogContent className="p-0 border-none max-w-[90%] md:max-w-[60%] h-[400px] rounded-lg">
            <div className="flex flex-col md:flex-row bg-white rounded-lg overflow-hidden">
              {/* Image Section */}
              <div className="w-full md:w-1/2 h-64 md:h-full flex items-center justify-center bg-gray-100">
                <img
                  src={image}
                  alt={title}
                  className="w-full h-full object-co p-4"
                />
              </div>
              {/* Details Section */}
              <div className="p-6 flex flex-col justify-center w-full md:w-1/2">
                <DialogHeader>
                  <DialogTitle className="text-xl font-bold">
                    {title}
                  </DialogTitle>
                  <DialogDescription className="mt-2 text-dark capitalize leading-loose text-lg">
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
