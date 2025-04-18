import { useEffect, useState, useRef } from 'react';
import { motion } from 'framer-motion';
import { Star, ChevronLeft, ChevronRight } from 'lucide-react';
import { Badge } from '@/components/ui/badge';

interface Review {
  author_name: string;
  profile_photo_url: string;
  rating: number;
  relative_time_description: string;
  text: string;
}

interface GoogleReviewsProps {
  placeId?: string;
  maxReviews?: number;
}

const GoogleReviews = ({ placeId = "ChIJSTfU8MdqK4gRNFdLqRo7L5k", maxReviews = 5 }: GoogleReviewsProps) => {
  const [reviews, setReviews] = useState<Review[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const sliderRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    // In a real implementation, you would fetch reviews from Google API using the placeId
    // For demo purposes, we'll load some sample reviews from a JSON file or hardcode them
    // The real implementation would require a Google Places API key

    // Simulated reviews based on real Endorphins Health and Wellness Centre reviews
    const sampleReviews: Review[] = [
      {
        author_name: "Jessica McGlynn",
        profile_photo_url: "https://ui-avatars.com/api/?name=JM&background=random",
        rating: 5,
        relative_time_description: "2 months ago",
        text: "This clinic is absolutely amazing. All of the staff are super friendly and knowledgeable. Dr. Morgan fixed my back when I couldn't even stand up straight and I am forever thankful. I have been seeing him for years now for various issues that pop up and he always makes me feel better. I've also had massages from various RMTs and they are all great. Would 100% recommend this clinic!"
      },
      {
        author_name: "Marissa Schilthuis",
        profile_photo_url: "https://ui-avatars.com/api/?name=MS&background=random",
        rating: 5,
        relative_time_description: "3 months ago",
        text: "I've been a patient at Endorphins for 5 years now and it's my go-to place for treatment. The front desk staff have always been super friendly and helpful! I've seen Dr. Morgan for chiropractic care and several of the massage therapists over the years, and always leave feeling much better!"
      },
      {
        author_name: "Nicole Thomas",
        profile_photo_url: "https://ui-avatars.com/api/?name=NT&background=random",
        rating: 5,
        relative_time_description: "4 months ago",
        text: "I've been coming to Endorphins for several years now and have seen many of their practitioners. They are all so knowledgeable, helpful and friendly. Dr. Morgan is the best chiropractor I've ever seen. If you're looking for wonderful healthcare practitioners who truly care about their patients, look no further."
      },
      {
        author_name: "Leila Rouhfar",
        profile_photo_url: "https://ui-avatars.com/api/?name=LR&background=random",
        rating: 5,
        relative_time_description: "6 months ago",
        text: "The entire team at Endorphins has been nothing short of amazing. From the front desk staff to the practitioners, they are all friendly, knowledgeable and professional. Julie (massage therapist) is excellent. Her confidence, thoroughness and skill are truly fantastic. And Dr. Morgan (chiropractor) truly works magic!"
      },
      {
        author_name: "Carolyn Ware",
        profile_photo_url: "https://ui-avatars.com/api/?name=CW&background=random",
        rating: 5,
        relative_time_description: "7 months ago",
        text: "The staff at endorphins are exceptional! The massage therapists are amazing at what they do, tailoring each massage to meet your needs. The chiropractor Dr. Morgan is highly skilled and knowledgeable. He explains what he's doing and why, and I always leave feeling better than when I arrived! Highly recommend Endorphins."
      }
    ];

    // Simulate API fetch with a timeout
    const timer = setTimeout(() => {
      setReviews(sampleReviews.slice(0, maxReviews));
      setLoading(false);
    }, 500);

    return () => clearTimeout(timer);
  }, [maxReviews, placeId]);

  const nextSlide = () => {
    setActiveSlide((prev) => (prev + 1) % reviews.length);
  };

  const prevSlide = () => {
    setActiveSlide((prev) => (prev - 1 + reviews.length) % reviews.length);
  };

  // Render stars based on rating
  const renderStars = (rating: number) => {
    return Array.from({ length: 5 }).map((_, i) => (
      <Star
        key={i}
        className={`h-4 w-4 ${
          i < rating ? 'text-yellow-400 fill-yellow-400' : 'text-gray-300'
        }`}
      />
    ));
  };

  if (loading) {
    return (
      <div className="flex justify-center items-center py-12">
        <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-primary"></div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-10">
        <p className="text-red-500">Error loading reviews: {error}</p>
      </div>
    );
  }

  if (reviews.length === 0) {
    return (
      <div className="text-center py-10">
        <p className="text-muted-foreground">No reviews available.</p>
      </div>
    );
  }

  return (
    <div className="w-full">
      <div className="flex items-center justify-between mb-6">
        <div>
          <Badge className="bg-primary/20 text-primary mb-3">Patient Experiences</Badge>
          <h2 className="text-2xl md:text-3xl font-bold text-foreground">
            What Our <span className="text-primary">Patients Say</span>
          </h2>
        </div>
        <div className="flex items-center space-x-2">
          <button
            onClick={prevSlide}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Previous review"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
          <button
            onClick={nextSlide}
            className="p-2 rounded-full bg-muted hover:bg-muted/80 transition-colors"
            aria-label="Next review"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        </div>
      </div>

      <div className="relative overflow-hidden" ref={sliderRef}>
        <div 
          className="flex transition-transform duration-500 ease-out"
          style={{ transform: `translateX(-${activeSlide * 100}%)` }}
        >
          {reviews.map((review, index) => (
            <motion.div
              key={index}
              className="w-full flex-shrink-0 px-4"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.5 }}
            >
              <div className="bg-card rounded-xl p-6 sm:p-8 shadow-md border border-border h-full">
                <div className="flex items-center mb-4">
                  <div className="h-12 w-12 rounded-full overflow-hidden mr-4 bg-muted">
                    <img
                      src={review.profile_photo_url}
                      alt={review.author_name}
                      className="h-full w-full object-cover"
                      onError={(e) => {
                        (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${review.author_name.split(' ').join('+')}&background=random`;
                      }}
                    />
                  </div>
                  <div>
                    <h3 className="font-semibold text-foreground">{review.author_name}</h3>
                    <div className="flex items-center">
                      <div className="flex mr-2">
                        {renderStars(review.rating)}
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {review.relative_time_description}
                      </span>
                    </div>
                  </div>
                </div>
                <p className="text-muted-foreground line-clamp-5 sm:line-clamp-none">
                  "{review.text}"
                </p>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Navigation dots */}
        <div className="flex justify-center mt-4">
          {reviews.map((_, index) => (
            <button
              key={index}
              onClick={() => setActiveSlide(index)}
              className={`h-2 w-2 rounded-full mx-1 transition-colors ${
                activeSlide === index ? 'bg-primary' : 'bg-muted'
              }`}
              aria-label={`Go to review ${index + 1}`}
            />
          ))}
        </div>
      </div>

      <div className="mt-6 text-center">
        <a 
          href="https://g.co/kgs/fj84k2S" 
          target="_blank" 
          rel="noopener noreferrer"
          className="text-primary hover:text-primary/80 font-medium inline-flex items-center"
        >
          Read more reviews on Google
          <ChevronRight className="ml-1 h-4 w-4" />
        </a>
      </div>
    </div>
  );
};

export default GoogleReviews;