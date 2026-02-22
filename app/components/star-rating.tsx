import { StarIcon } from "./icons";

interface StarRatingProps {
  count?: number;
  size?: string;
  color?: string;
}

export function StarRating({
  count = 5,
  size = "w-5 h-5",
  color = "text-star-500",
}: StarRatingProps) {
  return (
    <div className="flex items-center gap-1">
      {[...Array(count)].map((_, i) => (
        <StarIcon key={i} className={`${size} ${color}`} />
      ))}
    </div>
  );
}
