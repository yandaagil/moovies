import { Badge } from "@/components/ui/badge"
import { cn } from "@/lib/utils";

export const ratingBadge = (rating: number): JSX.Element => {
  const formattedRating = Math.round(rating * 10) / 10;

  const badge =
    <Badge className={cn("border-transparent font-normal",
      {
        "bg-green-600 text-[#fafafa] hover:bg-green-600": formattedRating >= 7,
        "bg-yellow-500 text-[#0a0a0a] hover:bg-yellow-500": formattedRating >= 5 && formattedRating < 7,
        "bg-red-600 text-[#fafafa] hover:bg-red-600": formattedRating >= 3 && formattedRating < 5,
        "bg-gray-800 text-[#fafafa] hover:bg-gray-800": formattedRating < 3
      }
    )}
    >
      {formattedRating}
    </Badge>

  return badge
}