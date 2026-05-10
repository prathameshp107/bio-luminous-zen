"use client"

import { useState, useEffect, useCallback, useRef } from "react"
import { motion, AnimatePresence } from "framer-motion"
import PageHero from "@/components/PageHero";
import SectionHeader from "@/components/SectionHeader";
import AnimatedSection from "@/components/AnimatedSection";
import RevealText from "@/components/RevealText";
import FloatingText from "@/components/FloatingText";
import { Card } from "@/components/ui/card";
import {
  Building2,
  PawPrint,
  Scissors,
  X,
  ChevronLeft,
  ChevronRight,
  ZoomIn,
  Grid3X3,
  Microscope,
  TestTube,
  Heart,
  Search,
  Download,
  Maximize2,
  RotateCcw,
  ZoomOut,
  Move,
  ExternalLink,
  Check,
  Square,
  Play,
  Pause,
  Copy,
  Share2,
  Info,
  Settings,
  Grid,
  List,
  Eye,
  EyeOff,
  Keyboard,
  RefreshCw,
  Filter
} from "lucide-react";

// Import all images
const imageModules = import.meta.glob("../assets/*.{png,jpg,jpeg,webp,avif}", {
  eager: true,
  import: "default",
}) as Record<string, string>;

// Categories with icons
const categories = [
  { id: "all", label: "All Images", icon: Grid3X3 },
  { id: "facilities", label: "Facilities", icon: Building2 },
  { id: "animals", label: "Animals", icon: PawPrint },
  { id: "services", label: "Services", icon: Scissors },
  { id: "equipment", label: "Equipment", icon: Microscope },
  { id: "research", label: "Research", icon: TestTube },
  { id: "certifications", label: "Certifications", icon: Heart },
];

// Categorize images based on filename
const categorizeImage = (filename: string): string => {
  const name = filename.toLowerCase();
  
  if (name.includes("cert-") || name.includes("logo-")) return "certifications";
  if (name.includes("animal-") || name.includes("strain-")) return "animals";
  if (name.includes("service-") || name.includes("sub-")) return "services";
  if (name.includes("advanced") || name.includes("equipment") || name.includes("hvac") || 
      name.includes("climate") || name.includes("water") || name.includes("biosafety")) return "equipment";
  if (name.includes("lab") || name.includes("research") || name.includes("facilities")) return "facilities";
  if (name.includes("res-") || name.includes("tox-") || name.includes("bio-") || 
      name.includes("micro-") || name.includes("histo-") || name.includes("agro-")) return "research";
  
  return "facilities"; // default category
};

// Process images with categories
const allImages = Object.entries(imageModules)
  .map(([path, src]) => {
    const fileName = path.split("/").pop() ?? "image";
    const name = fileName.replace(/\.[^.]+$/, "");
    const label = name.replace(/[-_]+/g, " ").replace(/\s+/g, " ").trim();
    const category = categorizeImage(name);
    
    return { src, label, category, name };
  })
  .filter((item) => {
    // Filter out certification logos but keep certification images
    const normalized = item.name.toLowerCase();
    const isCertificationLogo = normalized.startsWith("logo-");
    return !isCertificationLogo;
  })
  .sort((a, b) => a.name.localeCompare(b.name));

// Lightbox Component with zoom, download, fullscreen
function Lightbox({
  image,
  onClose,
  onPrev,
  onNext,
  hasPrev,
  hasNext,
  currentIndex,
  totalImages
}: {
  image: typeof allImages[0]
  onClose: () => void
  onPrev: () => void
  onNext: () => void
  hasPrev: boolean
  hasNext: boolean
  currentIndex: number
  totalImages: number
}) {
  const [zoom, setZoom] = useState(1)
  const [position, setPosition] = useState({ x: 0, y: 0 })
  const [isDragging, setIsDragging] = useState(false)
  const [dragStart, setDragStart] = useState({ x: 0, y: 0 })

  const handleZoomIn = () => setZoom(prev => Math.min(prev + 0.5, 4))
  const handleZoomOut = () => setZoom(prev => Math.max(prev - 0.5, 1))
  const handleReset = () => {
    setZoom(1)
    setPosition({ x: 0, y: 0 })
  }

  const handleDownload = async () => {
    try {
      const response = await fetch(image.src)
      const blob = await response.blob()
      const url = URL.createObjectURL(blob)
      const link = document.createElement('a')
      link.href = url
      link.download = `${image.label}.jpg`
      document.body.appendChild(link)
      link.click()
      document.body.removeChild(link)
      URL.revokeObjectURL(url)
    } catch (error) {
      console.error('Download failed:', error)
    }
  }

  const handleMouseDown = (e: React.MouseEvent) => {
    if (zoom > 1) {
      setIsDragging(true)
      setDragStart({ x: e.clientX - position.x, y: e.clientY - position.y })
    }
  }

  const handleMouseMove = (e: React.MouseEvent) => {
    if (isDragging && zoom > 1) {
      setPosition({
        x: e.clientX - dragStart.x,
        y: e.clientY - dragStart.y
      })
    }
  }

  const handleMouseUp = () => setIsDragging(false)

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center"
      onClick={onClose}
    >
      {/* Top toolbar */}
      <motion.div
        initial={{ y: -20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-4 bg-gradient-to-b from-black/60 to-transparent"
      >
        <div className="flex items-center gap-4">
          <button
            onClick={handleDownload}
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 hover:bg-white/20 text-white text-sm font-medium transition-all hover:scale-105"
          >
            <Download className="w-4 h-4" />
            Download
          </button>
        </div>

        <div className="flex items-center gap-2 px-4 py-2 rounded-full bg-black/40 backdrop-blur-sm text-white text-sm">
          <span className="font-medium">{currentIndex + 1}</span>
          <span className="text-white/50">/</span>
          <span className="text-white/70">{totalImages}</span>
        </div>

        <button
          onClick={onClose}
          className="p-2 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110"
        >
          <X className="w-6 h-6" />
        </button>
      </motion.div>

      {/* Navigation buttons */}
      {hasPrev && (
        <button
          onClick={(e) => { e.stopPropagation(); onPrev(); handleReset(); }}
          className="absolute left-4 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
        >
          <ChevronLeft className="w-10 h-10" />
        </button>
      )}

      {hasNext && (
        <button
          onClick={(e) => { e.stopPropagation(); onNext(); handleReset(); }}
          className="absolute right-4 z-50 p-4 rounded-full bg-white/10 hover:bg-white/20 text-white transition-all hover:scale-110 backdrop-blur-sm"
        >
          <ChevronRight className="w-10 h-10" />
        </button>
      )}

      {/* Main image with zoom */}
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.8, opacity: 0 }}
        transition={{ type: "spring", damping: 25 }}
        className="relative max-w-[90vw] max-h-[85vh] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        style={{ cursor: zoom > 1 ? (isDragging ? 'grabbing' : 'grab') : 'zoom-in' }}
      >
        <motion.img
          src={image.src}
          alt={image.label}
          className="max-w-full max-h-[85vh] object-contain select-none"
          style={{
            transform: `scale(${zoom}) translate(${position.x / zoom}px, ${position.y / zoom}px)`,
            transition: isDragging ? 'none' : 'transform 0.2s ease-out'
          }}
          draggable={false}
        />
      </motion.div>


      {/* Image info */}
      <motion.div
        initial={{ y: 20, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        className="absolute bottom-4 left-1/2 -translate-x-1/2 flex items-center gap-4 px-6 py-3 rounded-full bg-black/50 backdrop-blur-sm"
      >
        <p className="text-white font-medium">{image.label}</p>
        <span className="text-white/50">•</span>
        <span className="text-white/70 text-sm">Arrow keys to navigate • ESC to close</span>
      </motion.div>
    </motion.div>
  )
}

// Enhanced Gallery Card Component
function GalleryCard({
  image,
  index,
  onClick,
  isSelectionMode,
  isSelected,
  onToggleSelection,
  viewMode,
  onAddToComparison,
  comparisonMode
}: {
  image: typeof allImages[0]
  index: number
  onClick: () => void
  isSelectionMode: boolean
  isSelected: boolean
  onToggleSelection: (imageId: string) => void
  viewMode: "grid" | "list"
  onAddToComparison?: (image: typeof allImages[0]) => void
  comparisonMode?: boolean
}) {
  const categoryInfo = categories.find(c => c.id === image.category)

  const handleCardClick = () => {
    if (isSelectionMode) {
      onToggleSelection(image.name)
    } else {
      onClick()
    }
  }

  if (viewMode === "list") {
    return (
      <motion.div
        layout
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        exit={{ opacity: 0, x: 20 }}
        transition={{ duration: 0.3, delay: index * 0.02 }}
        className={`
          group cursor-pointer rounded-lg border transition-all duration-300
          ${isSelected ? "border-primary bg-primary/5" : "border-border hover:border-primary/30 bg-card"}
        `}
        onClick={handleCardClick}
      >
        <div className="flex items-center gap-4 p-4">
          {/* Selection Checkbox */}
          {isSelectionMode && (
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleSelection(image.name)
              }}
              className="flex-shrink-0"
            >
              <div className={`w-5 h-5 rounded border-2 transition-colors flex items-center justify-center ${
                isSelected ? "bg-primary border-primary" : "border-muted-foreground"
              }`}>
                {isSelected && <Check className="w-3 h-3 text-primary-foreground" />}
              </div>
            </button>
          )}

          {/* Thumbnail */}
          <div className="relative w-20 h-20 flex-shrink-0 overflow-hidden rounded-lg">
            <img
              src={image.src}
              alt={image.label}
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
            
            {/* Category Badge */}
            <div className="absolute top-1 left-1">
              <span className="px-2 py-0.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1">
                {categoryInfo && <categoryInfo.icon className="w-3 h-3" />}
              </span>
            </div>
          </div>

          {/* Content */}
          <div className="flex-1 min-w-0">
            <h3 className="font-medium text-foreground truncate mb-1">{image.label}</h3>
            <p className="text-sm text-muted-foreground flex items-center gap-2">
              {categoryInfo && (
                <>
                  <categoryInfo.icon className="w-3 h-3" />
                  {categoryInfo.label}
                </>
              )}
            </p>
          </div>

          {/* Actions */}
          <div className="flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
            {comparisonMode && onAddToComparison && (
              <button
                onClick={(e) => {
                  e.stopPropagation()
                  onAddToComparison(image)
                }}
                className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                title="Add to comparison"
              >
                <ExternalLink className="w-4 h-4" />
              </button>
            )}
          </div>
        </div>
      </motion.div>
    )
  }

  return (
    <motion.div
      layout
      initial={{ opacity: 0, scale: 0.9 }}
      animate={{ opacity: 1, scale: 1 }}
      exit={{ opacity: 0, scale: 0.9 }}
      transition={{ duration: 0.3, delay: index * 0.02 }}
      className={`
        group cursor-pointer relative
        ${isSelectionMode ? "select-none" : ""}
      `}
      onClick={handleCardClick}
    >
      <Card className={`overflow-hidden border-0 shadow-lg group-hover:shadow-2xl transition-all duration-500 relative ${
        isSelected ? "ring-2 ring-primary ring-offset-2" : ""
      }`}>
        {/* Selection Overlay */}
        {isSelectionMode && (
          <div className="absolute top-3 left-3 z-10">
            <button
              onClick={(e) => {
                e.stopPropagation()
                onToggleSelection(image.name)
              }}
              className={`w-6 h-6 rounded-full border-2 transition-all flex items-center justify-center backdrop-blur-sm ${
                isSelected 
                  ? "bg-primary border-primary text-primary-foreground" 
                  : "bg-white/80 border-white hover:bg-white"
              }`}>
              {isSelected && <Check className="w-3.5 h-3.5" />}
            </button>
          </div>
        )}

        {/* Image */}
        <div className="relative overflow-hidden">
          <img
            src={image.src}
            alt={image.label}
            loading="lazy"
            className="w-full h-56 md:h-64 lg:h-72 object-cover transition-transform duration-700 group-hover:scale-110"
          />

          {/* Category Badge */}
          <div className="absolute top-3 left-3">
            <span className="px-3 py-1.5 rounded-full bg-black/50 backdrop-blur-sm text-white text-xs font-medium flex items-center gap-1.5">
              {categoryInfo && <categoryInfo.icon className="w-3.5 h-3.5" />}
              {categoryInfo?.label}
            </span>
          </div>

          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

          {/* Action Icons */}
          <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
            <div className="flex items-center gap-2">
              {!isSelectionMode && (
                <div className="w-14 h-14 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300">
                  <ZoomIn className="w-6 h-6 text-white" />
                </div>
              )}
              
              {comparisonMode && onAddToComparison && (
                <button
                  onClick={(e) => {
                    e.stopPropagation()
                    onAddToComparison(image)
                  }}
                  className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center transform scale-50 group-hover:scale-100 transition-transform duration-300 hover:bg-white/30"
                >
                  <ExternalLink className="w-5 h-5 text-white" />
                </button>
              )}
            </div>
          </div>

        </div>

        {/* Hover border effect */}
        <div className="absolute inset-0 border-2 border-transparent group-hover:border-primary/30 rounded-lg transition-colors duration-300 pointer-events-none" />
      </Card>
    </motion.div>
  )
}

const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState("all")
  const [lightboxImage, setLightboxImage] = useState<typeof allImages[0] | null>(null)
  const [lightboxIndex, setLightboxIndex] = useState(0)
  const [searchQuery, setSearchQuery] = useState("")
  const [isSearchFocused, setIsSearchFocused] = useState(false)
  
  // New features state
  const [selectedImages, setSelectedImages] = useState<Set<string>>(new Set())
  const [isSelectionMode, setIsSelectionMode] = useState(false)
  const [viewMode, setViewMode] = useState<"grid" | "list">("grid")
  const [isSlideshow, setIsSlideshow] = useState(false)
  const [slideshowSpeed, setSlideshowSpeed] = useState(3000)
  const [showKeyboardShortcuts, setShowKeyboardShortcuts] = useState(false)
  const [showImageInfo, setShowImageInfo] = useState(false)
  const [comparisonMode, setComparisonMode] = useState(false)
  const [comparisonImages, setComparisonImages] = useState<typeof allImages[0][]>([])
  const slideshowInterval = useRef<NodeJS.Timeout | null>(null)

  // Filter images by category and search
  const filteredImages = allImages.filter(img => {
    const matchesCategory = activeCategory === "all" || img.category === activeCategory
    const matchesSearch = searchQuery === "" || 
      img.label.toLowerCase().includes(searchQuery.toLowerCase()) ||
      img.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchesCategory && matchesSearch
  })

  // Get category count
  const getCategoryCount = (categoryId: string) => {
    if (categoryId === "all") return allImages.length
    return allImages.filter(img => img.category === categoryId).length
  }

  // Lightbox handlers
  const openLightbox = (image: typeof allImages[0], index: number) => {
    setLightboxImage(image)
    setLightboxIndex(index)
  }

  const closeLightbox = () => {
    setLightboxImage(null)
  }

  const showPrev = () => {
    if (lightboxIndex > 0) {
      const newIndex = lightboxIndex - 1
      setLightboxIndex(newIndex)
      setLightboxImage(filteredImages[newIndex])
    }
  }

  const showNext = () => {
    if (lightboxIndex < filteredImages.length - 1) {
      const newIndex = lightboxIndex + 1
      setLightboxIndex(newIndex)
      setLightboxImage(filteredImages[newIndex])
    }
  }

  // Enhanced handlers for new features
  const toggleImageSelection = useCallback((imageId: string) => {
    setSelectedImages(prev => {
      const newSet = new Set(prev)
      if (newSet.has(imageId)) {
        newSet.delete(imageId)
      } else {
        newSet.add(imageId)
      }
      return newSet
    })
  }, [])

  const selectAllImages = useCallback(() => {
    const allIds = filteredImages.map(img => img.name)
    setSelectedImages(new Set(allIds))
  }, [filteredImages])

  const clearSelection = useCallback(() => {
    setSelectedImages(new Set())
  }, [])

  const downloadSelectedImages = useCallback(async () => {
    const selected = filteredImages.filter(img => selectedImages.has(img.name))
    for (const image of selected) {
      try {
        const response = await fetch(image.src)
        const blob = await response.blob()
        const url = URL.createObjectURL(blob)
        const link = document.createElement('a')
        link.href = url
        link.download = `${image.label}.jpg`
        document.body.appendChild(link)
        link.click()
        document.body.removeChild(link)
        URL.revokeObjectURL(url)
      } catch (error) {
        console.error('Download failed:', error)
      }
    }
  }, [filteredImages, selectedImages])

  const startSlideshow = useCallback(() => {
    setIsSlideshow(true)
    if (filteredImages.length === 0) return
    
    let index = 0
    slideshowInterval.current = setInterval(() => {
      index = (index + 1) % filteredImages.length
      setLightboxIndex(index)
      setLightboxImage(filteredImages[index])
    }, slideshowSpeed)
  }, [filteredImages, slideshowSpeed])

  const stopSlideshow = useCallback(() => {
    setIsSlideshow(false)
    if (slideshowInterval.current) {
      clearInterval(slideshowInterval.current)
      slideshowInterval.current = null
    }
  }, [])

  const toggleSlideshow = useCallback(() => {
    if (isSlideshow) {
      stopSlideshow()
    } else {
      if (!lightboxImage && filteredImages.length > 0) {
        openLightbox(filteredImages[0], 0)
      }
      startSlideshow()
    }
  }, [isSlideshow, stopSlideshow, startSlideshow, lightboxImage, filteredImages])

  const addToComparison = useCallback((image: typeof allImages[0]) => {
    if (comparisonImages.length < 2) {
      setComparisonImages(prev => [...prev, image])
    }
  }, [comparisonImages.length])

  const clearComparison = useCallback(() => {
    setComparisonImages([])
    setComparisonMode(false)
  }, [])

  const shareImage = useCallback(async (image: typeof allImages[0]) => {
    if (navigator.share) {
      try {
        await navigator.share({
          title: image.label,
          text: `Check out this image: ${image.label}`,
          url: window.location.origin + '/gallery'
        })
      } catch (error) {
        console.log('Share cancelled')
      }
    } else {
      // Fallback: copy to clipboard
      navigator.clipboard.writeText(window.location.origin + '/gallery')
    }
  }, [])

  // Enhanced keyboard navigation
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (showKeyboardShortcuts) {
      if (e.key === "Escape") setShowKeyboardShortcuts(false)
      return
    }

    if (lightboxImage) {
      if (e.key === "ArrowLeft") showPrev()
      if (e.key === "ArrowRight") showNext()
      if (e.key === "Escape") {
        closeLightbox()
        stopSlideshow()
      }
      if (e.key === " " && !e.shiftKey) {
        e.preventDefault()
        toggleSlideshow()
      }
      if (e.key === "i" || e.key === "I") {
        setShowImageInfo(prev => !prev)
      }
    }

    // Global shortcuts
    if (e.key === "?" && e.shiftKey) {
      e.preventDefault()
      setShowKeyboardShortcuts(prev => !prev)
    }
    if (e.key === "a" && e.ctrlKey) {
      e.preventDefault()
      selectAllImages()
    }
  }, [lightboxImage, showKeyboardShortcuts, toggleSlideshow, stopSlideshow, selectAllImages])

  // Add keyboard listener and cleanup
  useEffect(() => {
    if (typeof window !== "undefined") {
      window.addEventListener("keydown", handleKeyDown)
      return () => {
        window.removeEventListener("keydown", handleKeyDown)
        if (slideshowInterval.current) {
          clearInterval(slideshowInterval.current)
        }
      }
    }
  }, [handleKeyDown])

  // Cleanup slideshow on unmount
  useEffect(() => {
    return () => {
      if (slideshowInterval.current) {
        clearInterval(slideshowInterval.current)
      }
    }
  }, [])

  return (
    <div>
      <PageHero
        title="Image Gallery"
        subtitle="Browse our complete collection of laboratory, facility, certification, and service visuals."
        breadcrumb="Gallery"
      />

      {/* Search and Category Filters */}
      <section className="sticky top-0 z-40 bg-background/95 backdrop-blur-md border-b py-4">
        <div className="container mx-auto px-4 space-y-4">
          {/* Search Bar */}
          <div className="relative max-w-md mx-auto">
            <div className={`
              relative flex items-center gap-3 px-4 py-3 rounded-2xl border-2 transition-all duration-300
              ${isSearchFocused 
                ? "border-primary bg-primary/5 shadow-lg shadow-primary/10" 
                : "border-border bg-background"
              }
            `}>
              <Search className={`w-5 h-5 transition-colors ${isSearchFocused ? "text-primary" : "text-muted-foreground"}`} />
              <input
                type="text"
                placeholder="Search images..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                onFocus={() => setIsSearchFocused(true)}
                onBlur={() => setIsSearchFocused(false)}
                className="flex-1 bg-transparent outline-none text-foreground placeholder:text-muted-foreground"
              />
              {searchQuery && (
                <button
                  onClick={() => setSearchQuery("")}
                  className="p-1 rounded-full hover:bg-muted transition-colors"
                >
                  <X className="w-4 h-4 text-muted-foreground" />
                </button>
              )}
            </div>
            {searchQuery && (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="absolute top-full left-0 right-0 mt-2 px-4 py-2 bg-card rounded-xl border shadow-lg text-sm text-muted-foreground"
              >
                Found <span className="text-primary font-medium">{filteredImages.length}</span> result{filteredImages.length !== 1 ? 's' : ''}
              </motion.div>
            )}
          </div>

          {/* Enhanced Controls */}
          <div className="space-y-3">
            {/* Action Bar */}
            <div className="flex items-center justify-between gap-4">
              <div className="flex items-center gap-2">
                {/* View Mode Toggle */}
                <div className="flex items-center gap-1 p-1 rounded-lg bg-muted">
                  <button
                    onClick={() => setViewMode("grid")}
                    className={`p-2 rounded transition-colors ${viewMode === "grid" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                  >
                    <Grid className="w-4 h-4" />
                  </button>
                  <button
                    onClick={() => setViewMode("list")}
                    className={`p-2 rounded transition-colors ${viewMode === "list" ? "bg-background shadow-sm" : "hover:bg-background/50"}`}
                  >
                    <List className="w-4 h-4" />
                  </button>
                </div>

                {/* Selection Mode Toggle */}
                <button
                  onClick={() => {
                    setIsSelectionMode(!isSelectionMode)
                    clearSelection()
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    isSelectionMode 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isSelectionMode ? <Check className="w-4 h-4" /> : <Square className="w-4 h-4" />}
                  {isSelectionMode ? `${selectedImages.size} Selected` : "Select"}
                </button>

                {/* Batch Actions */}
                {isSelectionMode && selectedImages.size > 0 && (
                  <div className="flex items-center gap-1">
                    <button
                      onClick={downloadSelectedImages}
                      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      title="Download selected"
                    >
                      <Download className="w-4 h-4" />
                    </button>
                    <button
                      onClick={clearSelection}
                      className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                      title="Clear selection"
                    >
                      <X className="w-4 h-4" />
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center gap-2">
                {/* Slideshow Button */}
                <button
                  onClick={toggleSlideshow}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    isSlideshow 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {isSlideshow ? <Pause className="w-4 h-4" /> : <Play className="w-4 h-4" />}
                  {isSlideshow ? "Stop" : "Slideshow"}
                </button>

                {/* Comparison Mode */}
                <button
                  onClick={() => {
                    setComparisonMode(!comparisonMode)
                    if (!comparisonMode) {
                      setComparisonImages([])
                    }
                  }}
                  className={`flex items-center gap-2 px-3 py-2 rounded-lg font-medium transition-all ${
                    comparisonMode 
                      ? "bg-primary text-primary-foreground" 
                      : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                  }`}
                  title="Compare images side-by-side"
                >
                  <ExternalLink className="w-4 h-4" />
                  {comparisonMode ? "Comparing" : "Compare"}
                </button>

                {/* Keyboard Shortcuts */}
                <button
                  onClick={() => setShowKeyboardShortcuts(true)}
                  className="p-2 rounded-lg bg-muted hover:bg-muted/80 transition-colors"
                  title="Keyboard shortcuts (Shift+?)"
                >
                  <Keyboard className="w-4 h-4" />
                </button>
              </div>
            </div>

            {/* Category Pills */}
            <div className="flex flex-wrap justify-center gap-2">
              {categories.map((category) => {
                const Icon = category.icon
                const isActive = activeCategory === category.id
                const count = category.id === "all" 
                  ? allImages.length 
                  : allImages.filter(img => img.category === category.id).length
                return (
                  <button
                    key={category.id}
                    onClick={() => setActiveCategory(category.id)}
                    className={`
                      relative flex items-center gap-2 px-5 py-2.5 rounded-full font-medium transition-all duration-300
                      ${isActive
                        ? "bg-primary text-primary-foreground shadow-lg shadow-primary/25"
                        : "bg-muted hover:bg-muted/80 text-muted-foreground hover:text-foreground"
                      }
                    `}
                  >
                    <Icon className="w-4 h-4" />
                    {category.label}
                    <span className={`
                      ml-1 px-2 py-0.5 text-xs rounded-full
                      ${isActive ? "bg-white/20" : "bg-primary/10"}
                    `}>
                      {count}
                    </span>

                    {/* Active indicator */}
                    {isActive && (
                      <motion.div
                        layoutId="activeTab"
                        className="absolute inset-0 bg-primary rounded-full -z-10"
                        transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                      />
                    )}
                  </button>
                )
              })}
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Grid */}
      <section className="container mx-auto px-4 py-16">
        {filteredImages.length > 0 ? (
          <motion.div
            layout
            className={viewMode === "grid" 
              ? "grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6"
              : "space-y-4"
            }
          >
            <AnimatePresence mode="popLayout">
              {filteredImages.map((image, index) => (
                <GalleryCard
                  key={`${image.category}-${image.name}`}
                  image={image}
                  index={index}
                  onClick={() => openLightbox(image, index)}
                  isSelectionMode={isSelectionMode}
                  isSelected={selectedImages.has(image.name)}
                  onToggleSelection={toggleImageSelection}
                  viewMode={viewMode}
                  onAddToComparison={comparisonMode ? addToComparison : undefined}
                  comparisonMode={comparisonMode}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-center py-20"
          >
            <div className="w-20 h-20 mx-auto mb-6 rounded-full bg-muted flex items-center justify-center">
              {searchQuery ? <Search className="w-10 h-10 text-muted-foreground/40" /> : <Grid3X3 className="w-10 h-10 text-muted-foreground/40" />}
            </div>
            <h3 className="text-xl font-semibold mb-2">
              {searchQuery ? 'No images found' : 'No images in this category'}
            </h3>
            <p className="text-muted-foreground mb-4">
              {searchQuery 
                ? `No results for "${searchQuery}". Try different keywords.`
                : 'Check back later for new images.'
              }
            </p>
            {(searchQuery || activeCategory !== "all") && (
              <button
                onClick={() => { setSearchQuery(""); setActiveCategory("all"); }}
                className="px-6 py-2.5 rounded-full bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                Clear filters
              </button>
            )}
          </motion.div>
        )}
      </section>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxImage && (
          <Lightbox
            image={lightboxImage}
            onClose={closeLightbox}
            onPrev={showPrev}
            onNext={showNext}
            hasPrev={lightboxIndex > 0}
            hasNext={lightboxIndex < filteredImages.length - 1}
            currentIndex={lightboxIndex}
            totalImages={filteredImages.length}
          />
        )}
      </AnimatePresence>

      {/* Keyboard Shortcuts Modal */}
      <AnimatePresence>
        {showKeyboardShortcuts && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/80 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setShowKeyboardShortcuts(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl border shadow-2xl max-w-2xl w-full max-h-[80vh] overflow-hidden"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <Keyboard className="w-6 h-6 text-primary" />
                    Keyboard Shortcuts
                  </h2>
                  <button
                    onClick={() => setShowKeyboardShortcuts(false)}
                    className="p-2 rounded-full hover:bg-muted transition-colors"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>
              </div>
              
              <div className="p-6 overflow-y-auto max-h-[60vh]">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {[
                    { keys: "← →", description: "Navigate between images" },
                    { keys: "Space", description: "Toggle slideshow" },
                    { keys: "I", description: "Toggle image info" },
                    { keys: "Esc", description: "Close lightbox/modal" },
                    { keys: "Shift+?", description: "Show this help" },
                    { keys: "Ctrl+A", description: "Select all images" },
                  ].map((shortcut, index) => (
                    <motion.div
                      key={index}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: index * 0.05 }}
                      className="flex items-center gap-3 p-3 rounded-lg bg-muted/50"
                    >
                      <kbd className="px-3 py-1.5 bg-background border rounded-md text-sm font-mono">
                        {shortcut.keys}
                      </kbd>
                      <span className="text-sm text-muted-foreground">
                        {shortcut.description}
                      </span>
                    </motion.div>
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Comparison Mode */}
      <AnimatePresence>
        {comparisonMode && comparisonImages.length > 0 && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 bg-black/90 backdrop-blur-sm flex items-center justify-center p-4"
            onClick={() => setComparisonMode(false)}
          >
            <motion.div
              initial={{ scale: 0.9, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.9, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
              className="bg-card rounded-2xl border shadow-2xl max-w-6xl w-full"
            >
              <div className="p-6 border-b">
                <div className="flex items-center justify-between">
                  <h2 className="text-2xl font-bold flex items-center gap-2">
                    <ExternalLink className="w-6 h-6 text-primary" />
                    Image Comparison ({comparisonImages.length}/2)
                  </h2>
                  <div className="flex items-center gap-2">
                    {comparisonImages.length === 2 && (
                      <button
                        onClick={clearComparison}
                        className="px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                      >
                        Clear
                      </button>
                    )}
                    <button
                      onClick={() => setComparisonMode(false)}
                      className="p-2 rounded-full hover:bg-muted transition-colors"
                    >
                      <X className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              </div>
              
              <div className="p-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  {comparisonImages.map((image, index) => (
                    <motion.div
                      key={image.name}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: index * 0.1 }}
                      className="space-y-3"
                    >
                      <div className="relative overflow-hidden rounded-lg border">
                        <img
                          src={image.src}
                          alt={image.label}
                          className="w-full h-64 object-cover"
                        />
                        <div className="absolute bottom-0 left-0 right-0 p-3 bg-gradient-to-t from-black/80 to-transparent">
                          <p className="text-white font-medium">{image.label}</p>
                        </div>
                      </div>
                      <button
                        onClick={() => {
                          setComparisonImages(prev => prev.filter(img => image.name !== img.name))
                        }}
                        className="w-full px-4 py-2 bg-muted hover:bg-muted/80 rounded-lg transition-colors"
                      >
                        Remove
                      </button>
                    </motion.div>
                  ))}
                  
                  {comparisonImages.length === 1 && (
                    <div className="flex items-center justify-center border-2 border-dashed border-muted-foreground/30 rounded-lg">
                      <div className="text-center p-8">
                        <ExternalLink className="w-12 h-12 mx-auto mb-4 text-muted-foreground/40" />
                        <p className="text-muted-foreground">Select another image to compare</p>
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Stats Section */}
      <section className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 py-16">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { label: "Photos", value: allImages.length },
              { label: "Categories", value: categories.length - 1 },
              { label: "Years Experience", value: "10+" },
              { label: "Services", value: "8+" },
            ].map((stat, index) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="text-4xl md:text-5xl font-bold text-primary mb-2">
                  {stat.value}
                </div>
                <div className="text-muted-foreground">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}

export default Gallery
