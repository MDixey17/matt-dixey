import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

interface CarouselProps<T> {
  items: T[];
  renderItem: (item: T, index: number) => React.ReactNode;
  className?: string;
  itemsPerView?: number;
  autoplay?: boolean;
  autoplayInterval?: number;
}

function Carousel<T>({
  items,
  renderItem,
  className = '',
  itemsPerView = 1,
  autoplay = false,
  autoplayInterval = 5000
}: CarouselProps<T>) {
  const [currentIndex, setCurrentIndex] = useState(0);

  const totalSlides = Math.ceil(items.length / itemsPerView);

  useEffect(() => {
    if (autoplay && totalSlides > 1) {
      const interval = setInterval(() => {
        setCurrentIndex((prev) => (prev + 1) % totalSlides);
      }, autoplayInterval);

      return () => clearInterval(interval);
    }
  }, [autoplay, autoplayInterval, totalSlides]);

  const goToPrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + totalSlides) % totalSlides);
  };

  const goToNext = () => {
    setCurrentIndex((prev) => (prev + 1) % totalSlides);
  };

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  if (items.length === 0) return null;

  return (
    <div className={`relative ${className}`}>
      <div className="overflow-hidden rounded-2xl">
        <div
          className="flex transition-transform duration-500 ease-in-out"
          style={{
            transform: `translateX(-${currentIndex * (100 / totalSlides)}%)`,
            width: `${totalSlides * 100}%`
          }}
        >
          {Array.from({ length: totalSlides }).map((_, slideIndex) => {
            const startIndex = slideIndex * itemsPerView;
            const endIndex = Math.min(startIndex + itemsPerView, items.length);
            const slideItems = items.slice(startIndex, endIndex);

            return (
              <div
                key={slideIndex}
                className="flex-shrink-0 w-full flex justify-center"
                style={{ width: `${100 / totalSlides}%` }}
              >
                <div className="w-full max-w-4xl">
                  {slideItems.length === 1 ? (
                    // Single item - render directly
                    renderItem(slideItems[0], startIndex)
                  ) : (
                    // Multiple items - render in a flex container
                    <div className="flex space-x-6">
                      {slideItems.map((item, itemIndex) => (
                        <div
                          key={startIndex + itemIndex}
                          style={{ width: `${100 / itemsPerView}%` }}
                        >
                          {renderItem(item, startIndex + itemIndex)}
                        </div>
                      ))}
                    </div>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Navigation Buttons */}
      {totalSlides > 1 && (
        <>
          <button
            onClick={goToPrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background-primary/90 hover:bg-background-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border-primary"
          >
            <ChevronLeft className="w-5 h-5 text-text-secondary" />
          </button>
          <button
            onClick={goToNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-background-primary/90 hover:bg-background-primary rounded-full shadow-lg flex items-center justify-center transition-all duration-300 hover:scale-110 border border-border-primary"
          >
            <ChevronRight className="w-5 h-5 text-text-secondary" />
          </button>
        </>
      )}

      {/* Dots Indicator */}
      {totalSlides > 1 && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalSlides }).map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex
                  ? 'bg-primary-500 scale-125'
                  : 'bg-background-tertiary hover:bg-text-tertiary border border-border-primary'
              }`}
            />
          ))}
        </div>
      )}
    </div>
  );
}

export default Carousel;