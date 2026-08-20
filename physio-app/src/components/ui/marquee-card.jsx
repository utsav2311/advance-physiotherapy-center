import { Star } from "lucide-react"
import { LiquidCard, CardContent } from "@/components/ui/liquid-glass-card"
import { Marquee } from "@/components/ui/marquee"
import { reviews as defaultReviews } from "@/data/reviews"

export const MarqueeCard = ({ reviews = defaultReviews, speed = "normal", reverse = false, pauseOnHover = true }) => {
  return (
    <div className="marquee-reviews-wrapper w-full overflow-hidden py-4">
      <Marquee pauseOnHover={pauseOnHover} speed={speed} reverse={reverse}>
        {reviews.map((testimonial, index) => (
          <LiquidCard key={index} className="mx-2 rounded-3xl w-84 sm:w-96 h-full shadow-lg border border-white/40 dark:border-white/10">
            <CardContent className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <div className="flex items-center space-x-3">
                  <div
                    className="h-10 w-10 min-w-10 rounded-full flex items-center justify-center text-white font-bold text-sm shadow-md"
                    style={{ background: testimonial.avatarGradient || 'linear-gradient(135deg, #0284c7, #0369a1)' }}
                  >
                    {testimonial.initials || testimonial.name?.slice(0, 2).toUpperCase()}
                  </div>
                  <div>
                    <h4 className="font-bold text-gray-900 text-sm leading-tight">
                      {testimonial.name}
                    </h4>
                    <p className="text-xs text-primary-700 font-semibold mt-0.5">{testimonial.label || testimonial.role}</p>
                  </div>
                </div>

                <div className="flex space-x-0.5 text-amber-500">
                  {[...Array(testimonial.rating || 5)].map((_, i) => (
                    <Star
                      key={i}
                      className="h-4 w-4 fill-amber-400 text-amber-400"
                    />
                  ))}
                </div>
              </div>

              {testimonial.highlight && (
                <div className="mb-2.5 inline-flex items-center gap-1.5 px-2 py-0.5 rounded-md bg-emerald-50 text-emerald-700 text-xs font-bold border border-emerald-100">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span>
                  <span>{testimonial.highlight}</span>
                </div>
              )}

              <p className="text-gray-700 text-xs sm:text-sm leading-relaxed line-clamp-3">
                "{testimonial.content || testimonial.text}"
              </p>
            </CardContent>
          </LiquidCard>
        ))}
      </Marquee>
    </div>
  );
};

export const Component = MarqueeCard;
export default MarqueeCard;
