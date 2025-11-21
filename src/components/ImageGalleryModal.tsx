import React, { useState, useEffect, useRef } from "react";
import { Dialog, DialogContent } from "@/components/ui/dialog";
import { X, ChevronLeft, ChevronRight, ZoomIn, ZoomOut } from "lucide-react";
import { cn } from "@/lib/utils";

interface GalleryImage {
    src: string;
    alt: string;
    title: string;
}

interface ImageGalleryModalProps {
    isOpen: boolean;
    onClose: () => void;
    images: GalleryImage[];
    initialIndex?: number;
}

export const ImageGalleryModal: React.FC<ImageGalleryModalProps> = ({
    isOpen,
    onClose,
    images,
    initialIndex = 0,
}) => {
    const [currentIndex, setCurrentIndex] = useState(initialIndex);
    const [scale, setScale] = useState(1);
    const [position, setPosition] = useState({ x: 0, y: 0 });
    const [isDragging, setIsDragging] = useState(false);
    const [dragStart, setDragStart] = useState({ x: 0, y: 0 });
    const imageRef = useRef<HTMLImageElement>(null);
    const containerRef = useRef<HTMLDivElement>(null);

    // Reset when modal opens/closes or initialIndex changes
    useEffect(() => {
        if (isOpen) {
            setCurrentIndex(initialIndex);
            setScale(1);
            setPosition({ x: 0, y: 0 });
        }
    }, [isOpen, initialIndex]);

    // Reset zoom when image changes
    useEffect(() => {
        setScale(1);
        setPosition({ x: 0, y: 0 });
    }, [currentIndex]);

    const handlePrevious = () => {
        setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
    };

    const handleNext = () => {
        setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    };

    const handleZoomIn = () => {
        setScale((prev) => Math.min(prev + 0.5, 3));
    };

    const handleZoomOut = () => {
        setScale((prev) => {
            const newScale = Math.max(prev - 0.5, 1);
            if (newScale === 1) {
                setPosition({ x: 0, y: 0 });
            }
            return newScale;
        });
    };

    const handleWheel = (e: React.WheelEvent) => {
        if (e.ctrlKey || e.metaKey) {
            e.preventDefault();
            const delta = e.deltaY > 0 ? -0.1 : 0.1;
            setScale((prev) => {
                const newScale = Math.max(1, Math.min(3, prev + delta));
                if (newScale === 1) {
                    setPosition({ x: 0, y: 0 });
                }
                return newScale;
            });
        }
    };

    const handleMouseDown = (e: React.MouseEvent) => {
        if (scale > 1) {
            setIsDragging(true);
            setDragStart({
                x: e.clientX - position.x,
                y: e.clientY - position.y,
            });
        }
    };

    const handleMouseMove = (e: React.MouseEvent) => {
        if (isDragging && scale > 1) {
            setPosition({
                x: e.clientX - dragStart.x,
                y: e.clientY - dragStart.y,
            });
        }
    };

    const handleMouseUp = () => {
        setIsDragging(false);
    };

    // Touch events for mobile
    const touchStartRef = useRef<{ x: number; y: number; distance: number } | null>(null);

    const handleTouchStart = (e: React.TouchEvent) => {
        if (e.touches.length === 1) {
            // Single touch - prepare for drag
            if (scale > 1) {
                setIsDragging(true);
                setDragStart({
                    x: e.touches[0].clientX - position.x,
                    y: e.touches[0].clientY - position.y,
                });
            }
        } else if (e.touches.length === 2) {
            // Pinch zoom
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const distance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            touchStartRef.current = {
                x: (touch1.clientX + touch2.clientX) / 2,
                y: (touch1.clientY + touch2.clientY) / 2,
                distance,
            };
        }
    };

    const handleTouchMove = (e: React.TouchEvent) => {
        if (e.touches.length === 1 && isDragging && scale > 1) {
            // Single touch drag
            setPosition({
                x: e.touches[0].clientX - dragStart.x,
                y: e.touches[0].clientY - dragStart.y,
            });
        } else if (e.touches.length === 2 && touchStartRef.current) {
            // Pinch zoom
            e.preventDefault();
            const touch1 = e.touches[0];
            const touch2 = e.touches[1];
            const distance = Math.hypot(
                touch2.clientX - touch1.clientX,
                touch2.clientY - touch1.clientY
            );
            const scaleChange = distance / touchStartRef.current.distance;
            setScale((prev) => {
                const newScale = Math.max(1, Math.min(3, prev * scaleChange));
                if (newScale === 1) {
                    setPosition({ x: 0, y: 0 });
                }
                return newScale;
            });
            touchStartRef.current.distance = distance;
        }
    };

    const handleTouchEnd = () => {
        setIsDragging(false);
        touchStartRef.current = null;
    };

    // Keyboard navigation
    useEffect(() => {
        if (!isOpen) return;

        const handleKeyDown = (e: KeyboardEvent) => {
            if (e.key === "ArrowLeft") {
                setCurrentIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
            } else if (e.key === "ArrowRight") {
                setCurrentIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
            } else if (e.key === "Escape") {
                onClose();
            }
        };

        window.addEventListener("keydown", handleKeyDown);
        return () => window.removeEventListener("keydown", handleKeyDown);
    }, [isOpen, images.length, onClose]);

    const currentImage = images[currentIndex];

    if (!currentImage) return null;

    return (
        <Dialog open={isOpen} onOpenChange={onClose}>
            <DialogContent
                className="max-w-[95vw] max-h-[95vh] w-full h-full p-0 bg-black/95 border-none overflow-hidden"
                onInteractOutside={(e) => {
                    if (scale > 1) {
                        e.preventDefault();
                    }
                }}
            >
                {/* Header with title and controls */}
                <div className="absolute top-0 left-0 right-0 z-50 bg-gradient-to-b from-black/95 via-black/90 to-transparent p-3 sm:p-4 flex items-center justify-between backdrop-blur-sm">
                    <div className="flex-1 min-w-0 pr-3 sm:pr-4">
                        <h3 className="text-white font-bold text-base sm:text-lg md:text-xl lg:text-2xl line-clamp-2 sm:truncate leading-tight">
                            {currentImage.title}
                        </h3>
                        <p className="text-white/80 text-xs sm:text-sm md:text-base mt-1 font-medium">
                            {currentIndex + 1} / {images.length}
                        </p>
                    </div>
                    <div className="flex items-center gap-2 flex-shrink-0">
                        {/* Zoom controls - visible on mobile too */}
                        <div className="flex items-center gap-1 bg-black/60 sm:bg-black/50 rounded-lg p-1 border border-white/20">
                            <button
                                onClick={handleZoomOut}
                                disabled={scale <= 1}
                                className={cn(
                                    "p-1.5 sm:p-2 rounded text-white hover:bg-white/20 active:bg-white/30 transition-colors",
                                    scale <= 1 && "opacity-50 cursor-not-allowed"
                                )}
                                aria-label="Zoom out"
                            >
                                <ZoomOut className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                            <span className="text-white text-xs sm:text-sm px-1.5 sm:px-2 min-w-[2.5rem] sm:min-w-[3rem] text-center font-medium">
                                {Math.round(scale * 100)}%
                            </span>
                            <button
                                onClick={handleZoomIn}
                                disabled={scale >= 3}
                                className={cn(
                                    "p-1.5 sm:p-2 rounded text-white hover:bg-white/20 active:bg-white/30 transition-colors",
                                    scale >= 3 && "opacity-50 cursor-not-allowed"
                                )}
                                aria-label="Zoom in"
                            >
                                <ZoomIn className="w-4 h-4 sm:w-5 sm:h-5" />
                            </button>
                        </div>
                        <button
                            onClick={onClose}
                            className="p-2 sm:p-2.5 rounded-full bg-black/60 sm:bg-black/50 hover:bg-black/70 active:bg-black/80 text-white transition-colors border border-white/20"
                            aria-label="Cerrar"
                        >
                            <X className="w-5 h-5 sm:w-6 sm:h-6" />
                        </button>
                    </div>
                </div>

                {/* Image container */}
                <div
                    ref={containerRef}
                    className="w-full h-full flex items-center justify-center overflow-hidden relative"
                    onWheel={handleWheel}
                    onMouseDown={handleMouseDown}
                    onMouseMove={handleMouseMove}
                    onMouseUp={handleMouseUp}
                    onMouseLeave={handleMouseUp}
                    onTouchStart={handleTouchStart}
                    onTouchMove={handleTouchMove}
                    onTouchEnd={handleTouchEnd}
                    style={{ cursor: scale > 1 ? (isDragging ? "grabbing" : "grab") : "default" }}
                >
                    <img
                        ref={imageRef}
                        src={currentImage.src}
                        alt={currentImage.alt}
                        className="max-w-full max-h-full object-contain select-none"
                        style={{
                            transform: `scale(${scale}) translate(${position.x / scale}px, ${position.y / scale}px)`,
                            transition: isDragging ? "none" : "transform 0.2s ease-out",
                        }}
                        draggable={false}
                    />
                </div>

                {/* Navigation buttons */}
                {images.length > 1 && (
                    <>
                        <button
                            onClick={handlePrevious}
                            className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all hover:scale-110 border border-white/20"
                            aria-label="Imagen anterior"
                        >
                            <ChevronLeft className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>
                        <button
                            onClick={handleNext}
                            className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-50 p-2 sm:p-3 rounded-full bg-black/70 hover:bg-black/90 text-white transition-all hover:scale-110 border border-white/20"
                            aria-label="Imagen siguiente"
                        >
                            <ChevronRight className="w-6 h-6 sm:w-8 sm:h-8" />
                        </button>
                    </>
                )}

                {/* Thumbnail strip at bottom */}
                <div className="absolute bottom-0 left-0 right-0 z-50 bg-gradient-to-t from-black/95 via-black/90 to-transparent p-3 sm:p-4 backdrop-blur-sm">
                    <div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide">
                        {images.map((image, index) => (
                            <button
                                key={index}
                                onClick={() => setCurrentIndex(index)}
                                className={cn(
                                    "flex-shrink-0 w-14 h-14 sm:w-18 sm:h-18 md:w-20 md:h-20 rounded-lg overflow-hidden border-2 transition-all relative group",
                                    currentIndex === index
                                        ? "border-accent ring-2 ring-accent/50 scale-110 shadow-lg shadow-accent/30"
                                        : "border-white/30 hover:border-white/50 active:border-white/60 opacity-70 hover:opacity-100 active:opacity-100"
                                )}
                            >
                                <img
                                    src={image.src}
                                    alt={image.alt}
                                    className="w-full h-full object-cover"
                                />
                                {currentIndex === index && (
                                    <div className="absolute inset-0 bg-accent/10" />
                                )}
                            </button>
                        ))}
                    </div>
                    {/* Image title in thumbnails area for mobile */}
                    <div className="lg:hidden mt-2 px-2">
                        <p className="text-white/90 text-xs sm:text-sm font-medium text-center line-clamp-2">
                            {currentImage.title}
                        </p>
                    </div>
                </div>
            </DialogContent>
        </Dialog>
    );
};

