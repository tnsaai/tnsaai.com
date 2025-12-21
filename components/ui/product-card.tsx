"use client";

import { Tag, Cpu } from "lucide-react";

interface ProductCardProps {
    title: string;
    subtitle: string;
    price?: string;
    buttonText?: string;
    category?: string;
    imageUrl?: string;
    imageAlt?: string;
    href?: string;
}

export const ProductCard = ({
    title,
    subtitle,
    price,
    buttonText = "Learn more",
    category,
    imageUrl = "https://images.unsplash.com/photo-1501594907352-04cda38ebc29?q=80&w=2832&auto=format&fit=crop",
    imageAlt = "Model preview",
    href
}: ProductCardProps) => {

    const handleButtonClick = () => {
        if (href) {
            window.location.href = href;
        }
    };

    return (
        <div className="w-full max-w-[390px] bg-white rounded-[2.5rem] shadow-2xl p-4 group cursor-pointer transition-all duration-300">
            {/* Image Container */}
            <div className="relative w-full aspect-square rounded-[2rem] overflow-hidden mb-4">
                <img
                    src={imageUrl}
                    alt={imageAlt}
                    className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                />
            </div>

            {/* Title and Subtitle */}
            <div className="mb-3">
                <h2 className="text-[2rem] font-bold text-gray-900 mb-0.5 leading-none">
                    {title}
                </h2>
                <p className="text-gray-400 text-[15px]">{subtitle}</p>
            </div>

            {/* Price and Category Info */}
            <div className="flex items-center gap-5 mb-4">
                {price && (
                    <div className="flex items-center gap-2 text-gray-700">
                        <Tag className="w-[17px] h-[17px] text-gray-400" />
                        <span className="text-[15px] font-normal">
                            from <span className="font-bold text-gray-900">{price}</span>
                        </span>
                    </div>
                )}
                {category && (
                    <div className="flex items-center gap-2 text-gray-700">
                        <Cpu className="w-[17px] h-[17px] text-gray-400" />
                        <span className="text-[15px] font-semibold text-gray-900">{category}</span>
                    </div>
                )}
            </div>

            {/* CTA Button */}
            <div>
                <button
                    onClick={handleButtonClick}
                    className="w-full bg-[#1a1a1a] hover:bg-gray-800 text-white font-medium text-[15px] py-[15px] px-8 rounded-full transition-all"
                >
                    {buttonText}
                </button>
            </div>
        </div>
    );
};