"use client";

interface FlightCardProps {
  title: string;
  subtitle?: string;
  category?: string;
  date?: string;
  imageUrl?: string;
  imageAlt?: string;
  href?: string;
  variant?: 'large' | 'default';
  layout?: 'vertical' | 'horizontal' | 'featured';
  showTitle?: boolean;
  imageFit?: 'cover' | 'contain';
  className?: string;
}

export const FlightCard = ({
  title,
  subtitle,
  category,
  date,
  imageUrl = "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?q=80&w=2070&auto=format&fit=crop",
  imageAlt = "Card image",
  href,
  variant = 'default',
  layout = 'vertical',
  showTitle = true,
  imageFit = 'cover',
  className = ""
}: FlightCardProps) => {

  const handleButtonClick = (e: React.MouseEvent) => {
    if (href) {
      e.preventDefault();
      window.open(href, '_blank');
    }
  };

  const isLarge = variant === 'large';
  const isHorizontal = layout === 'horizontal';
  const isFeatured = layout === 'featured';

  return (
    <div
      className={cn(
        "group cursor-pointer transition-all duration-300 h-full",
        isHorizontal ? "flex flex-row gap-6 items-stretch rounded-[24px] bg-gray-50 overflow-hidden" : "flex flex-col",
        isFeatured ? "w-full" : "w-full",
        className
      )}
      onClick={handleButtonClick}
    >
      {/* Image Container */}
      <div className={cn(
        "relative overflow-hidden flex-shrink-0 transition-transform duration-500",
        isHorizontal ? "w-40 md:w-52 h-full" : "w-full rounded-[24px] bg-gray-50",
        !isFeatured && !isHorizontal && (isLarge ? "aspect-video" : "aspect-[4/3]"),
        isFeatured && "aspect-[2/1] md:aspect-[21/9]",
        "group-hover:opacity-90"
      )}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className={cn(
            "w-full h-full transition-transform duration-700 group-hover:scale-105",
            imageFit === 'contain' ? "object-contain p-8" : "object-cover"
          )}
        />
      </div>

      {/* Content Area */}
      <div className={cn(
        "flex flex-col transition-all duration-300 min-w-0",
        isHorizontal ? "flex-grow gap-1 justify-center py-6 pr-6" : "mt-4 gap-2 px-1"
      )}>
        <div className="flex items-center gap-3">
          {category && (
            <span className="inline-flex items-center rounded-full bg-gray-50 px-2 py-0.5 text-[10px] font-normal uppercase tracking-wider text-gray-500 border border-gray-100">
              {category}
            </span>
          )}
          {date && (
            <span className="text-[11px] text-gray-400">
              {date}
            </span>
          )}
        </div>

        {showTitle && (
          <h2 className={cn(
            "text-black leading-tight tracking-tight items-center flex group-hover:text-gray-600 transition-colors",
            isFeatured ? "text-3xl md:text-4xl" : (isLarge ? "text-2xl md:text-3xl" : "text-xl md:text-2xl")
          )}>
            {title}
            {isHorizontal && (
              <span className="ml-2 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
                →
              </span>
            )}
          </h2>
        )}

        {subtitle && (
          <p className={cn(
            "text-gray-500 leading-relaxed",
            isFeatured ? "text-lg max-w-3xl" : (isLarge ? "text-base max-w-2xl" : "text-sm line-clamp-2"),
            isHorizontal && "mt-1 truncate"
          )}>
            {subtitle}
          </p>
        )}
      </div>
    </div>
  );
};

// Helper for classes
function cn(...inputs: any[]) { return inputs.filter(Boolean).join(" "); }
