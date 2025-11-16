"use client";

interface FlightCardProps {
  title: string;
  subtitle?: string;
  price?: string;
  buttonText?: string;
  category?: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
  variant?: 'large' | 'medium' | 'default';
  showTitle?: boolean;
  imageFit?: 'cover' | 'contain';
}

export const FlightCard = ({
  title,
  subtitle,
  price,
  buttonText = "Learn more",
  category,
  imageUrl = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  imageAlt = "Card image",
  href,
  variant = 'default',
  showTitle = true,
  imageFit = 'cover'
}: FlightCardProps) => {

  const handleButtonClick = () => {
    if (href) {
      window.location.href = href;
    }
  };

  const isLarge = variant === 'large';
  const isMedium = variant === 'medium';

  return (
    <div 
      className="bg-white overflow-hidden relative cursor-pointer group"
      style={{
        width: isLarge ? '1028px' : isMedium ? '679px' : '329px',
        height: '563px',
        borderRadius: '40px'
      }}
      onClick={handleButtonClick}
    >
      {/* Background Image */}
      <img
        src={imageUrl}
        alt={imageAlt}
        className={`w-full h-full object-${imageFit} absolute inset-0`}
      />

      {/* Content */}
      {showTitle && (
        <div className={`absolute inset-0 flex p-8 z-10 ${
          isLarge ? 'items-start justify-end' : 'items-center justify-center'
        }`}>
          <h2 className={`font-normal text-white ${
            isLarge ? 'text-5xl' : 'text-4xl'
          }`}>
            {title}
          </h2>
        </div>
      )}

      {/* Hover Button */}
      <div className="absolute bottom-8 right-8 z-20 opacity-0 group-hover:opacity-100 transition-opacity">
        <div className="bg-white rounded-full flex items-center justify-center" style={{width: '167px', height: '50px'}}>
          <span className="text-sm font-medium text-black">{buttonText}</span>
        </div>
      </div>
    </div>
  );
};
