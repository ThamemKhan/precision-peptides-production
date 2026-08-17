import { useState } from "react";
import { Star, Send, CheckCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { useReviews, type Review } from "@/hooks/useReviews";
import { getStoredSiteLocation, getWhatsAppUrl } from "@/lib/siteLocation";

const AVATAR_COLORS = ["bg-blue-500/10 text-blue-400", "bg-green-500/10 text-green-400", "bg-amber-500/10 text-amber-400", "bg-purple-500/10 text-purple-400"];

function avatarColor(name: string) {
  return AVATAR_COLORS[name.charCodeAt(0) % AVATAR_COLORS.length];
}

function RatingStars({ rating, max = 5, interactive = false, onSelect }: {
  rating: number; max?: number; interactive?: boolean; onSelect?: (r: number) => void;
}) {
  const [hovered, setHovered] = useState(0);
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: max }).map((_, i) => (
        <Star
          key={i}
          className={`w-5 h-5 transition-colors ${
            i < (interactive ? (hovered || rating) : rating)
              ? "text-amber-400 fill-amber-400"
              : "text-muted-foreground"
          } ${interactive ? "cursor-pointer" : ""}`}
          onClick={() => interactive && onSelect?.(i + 1)}
          onMouseEnter={() => interactive && setHovered(i + 1)}
          onMouseLeave={() => interactive && setHovered(0)}
        />
      ))}
    </div>
  );
}

function ReviewCard({ review }: { review: Review }) {
  return (
    <div className="glass-card p-5 hover:border-primary/30 transition-all">
      <div className="flex items-center gap-3 mb-3">
        <div className={`w-9 h-9 rounded-full flex items-center justify-center text-sm font-semibold font-display flex-shrink-0 ${avatarColor(review.name)}`}>
          {review.initials}
        </div>
        <div className="flex-1 min-w-0">
          <p className="text-sm font-medium text-foreground truncate">{review.name}</p>
          <p className="text-xs text-muted-foreground">Verified · {review.date}</p>
        </div>
        <RatingStars rating={review.rating} />
      </div>
      <p className="text-sm text-muted-foreground leading-relaxed">{review.comment}</p>
    </div>
  );
}

function RatingSummary({ reviews }: { reviews: Review[] }) {
  const total = reviews.length;
  const avg = total ? reviews.reduce((s, r) => s + r.rating, 0) / total : 0;
  const pct = (n: number) => total ? Math.round(reviews.filter(r => r.rating === n).length / total * 100) : 0;

  return (
    <div className="glass-card p-6 mb-6 flex flex-col sm:flex-row items-start sm:items-center gap-6">
      <div className="flex flex-col items-center min-w-[64px]">
        <span className="text-4xl font-display font-bold text-foreground">{avg.toFixed(1)}</span>
        <RatingStars rating={Math.round(avg)} />
        <span className="text-xs text-muted-foreground mt-1">{total} reviews</span>
      </div>
      <div className="flex-1 w-full">
        {[5, 4, 3, 2, 1].map(n => (
          <div key={n} className="flex items-center gap-2 mb-1.5">
            <span className="text-xs text-muted-foreground w-8">{n} ★</span>
            <div className="flex-1 h-1.5 rounded-full bg-secondary/40 overflow-hidden">
              <div className="h-full bg-amber-400 rounded-full transition-all" style={{ width: `${pct(n)}%` }} />
            </div>
            <span className="text-xs text-muted-foreground w-8">{pct(n)}%</span>
          </div>
        ))}
      </div>
    </div>
  );
}

export function ProductReviews({ productTitle }: { productTitle: string }) {
  const { allReviews, addReview } = useReviews();
  const phonePlaceholder = getStoredSiteLocation() === "dubai" ? "e.g. +971 50 123 4567" : "e.g. +91 9876543210";
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [comment, setComment] = useState("");
  const [rating, setRating] = useState(0);
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = () => {
    if (!name.trim() || !phone.trim() || !comment.trim() || rating === 0) {
      toast.error("Please fill in all fields and select a rating.");
      return;
    }
    addReview({ name, phone, rating, comment });

    const msg = `New review for ${productTitle}!\n\nName: ${name}\nMobile: ${phone}\nRating: ${"★".repeat(rating)}\nReview: ${comment}\n\nDate: ${new Date().toLocaleDateString()}`;
    const waUrl = getWhatsAppUrl(encodeURIComponent(msg));

    setSubmitted(true);
    toast.success("Review submitted! Opening WhatsApp...");

    setTimeout(() => {
      window.open(waUrl, "_blank");
      setName(""); setPhone(""); setComment(""); setRating(0); setSubmitted(false);
    }, 1200);
  };

  return (
    <div className="container mx-auto px-4 mt-16 mb-8">
      <div className="flex items-baseline justify-between mb-6">
        <h2 className="font-display text-2xl font-bold text-foreground">Client feedback</h2>
        <span className="text-sm text-muted-foreground">{allReviews.length} reviews</span>
      </div>

      <RatingSummary reviews={allReviews} />

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-10">
        {allReviews.map(r => <ReviewCard key={r.id} review={r} />)}
      </div>

      {/* Submit form */}
      <div className="glass-card p-6">
        <h3 className="font-display text-lg font-bold text-foreground mb-5">Leave your feedback</h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Your name</label>
            <input
              type="text"
              className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              placeholder="e.g. James R."
              value={name}
              onChange={e => setName(e.target.value)}
            />
          </div>
          <div>
            <label className="text-xs text-muted-foreground mb-1.5 block">Mobile number</label>
            <input
              type="tel"
              className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors"
              placeholder={phonePlaceholder}
              value={phone}
              onChange={e => setPhone(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-4">
          <label className="text-xs text-muted-foreground mb-1.5 block">Your rating</label>
          <RatingStars rating={rating} interactive onSelect={setRating} />
        </div>

        <div className="mb-5">
          <label className="text-xs text-muted-foreground mb-1.5 block">Your review</label>
          <textarea
            className="w-full bg-secondary/30 border border-border rounded-xl px-4 py-2.5 text-sm text-foreground focus:outline-none focus:border-primary/50 transition-colors resize-none"
            rows={4}
            placeholder="Tell future buyers about your experience..."
            value={comment}
            onChange={e => setComment(e.target.value)}
          />
        </div>

        {submitted ? (
          <div className="flex items-center gap-2 text-sm text-primary py-3">
            <CheckCircle className="w-4 h-4" />
            Review submitted! Opening WhatsApp...
          </div>
        ) : (
          <Button
            size="lg"
            className="w-full bg-[#25D366] hover:bg-[#1ebe5d] text-white font-display py-6"
            onClick={handleSubmit}
          >
            <Send className="w-4 h-4 mr-2" />
            Submit & Send via WhatsApp
          </Button>
        )}
        <p className="text-xs text-center text-muted-foreground mt-3">
          Your review will be visible to future visitors immediately.
        </p>
      </div>
    </div>
  );
}
