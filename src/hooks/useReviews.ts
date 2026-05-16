import { useState, useEffect } from "react";

export interface Review {
  id: string;
  name: string;
  initials: string;
  date: string;
  rating: number;
  comment: string;
  phone: string;
}

const SEED_REVIEWS: Review[] = [
  { id: "s1", name: "Anwar Khan", initials: "JR", date: "Apr 2026", rating: 5, phone: "", comment: "Purity was exactly as advertised. Lab results matched the CoA provided. Shipping was fast and discreet — will order again." },
  { id: "s2", name: "Siddharth", initials: "ML", date: "Mar 2026", rating: 4, phone: "", comment: "Good product, Janoshik certificate was spot on. Docked one star because the call took a day longer, but the team was professional." },
  { id: "s3", name: "Somnath", initials: "AK", date: "Feb 2026", rating: 5, phone: "", comment: "Third time ordering and quality never drops. The Janoshik testing gives me confidence. Highly recommended." },
];

const STORAGE_KEY = "product_reviews";

function getInitials(name: string) {
  return name.split(" ").slice(0, 2).map(w => w[0] ?? "").join("").toUpperCase() || "?";
}

export function useReviews() {
  const [userReviews, setUserReviews] = useState<Review[]>([]);

  useEffect(() => {
    try {
      const stored = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "[]");
      setUserReviews(stored);
    } catch {}
  }, []);

  const allReviews = [...userReviews, ...SEED_REVIEWS];

  function addReview(data: { name: string; phone: string; rating: number; comment: string }) {
    const now = new Date();
    const review: Review = {
      id: "u" + Date.now(),
      name: data.name,
      initials: getInitials(data.name),
      date: now.toLocaleString("en-US", { month: "short", year: "numeric" }),
      rating: data.rating,
      comment: data.comment,
      phone: data.phone,
    };
    const updated = [review, ...userReviews];
    setUserReviews(updated);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(updated)); } catch {}
    return review;
  }

  return { allReviews, addReview };
}