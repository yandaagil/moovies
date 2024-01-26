import { Badge } from "@/components/ui/badge"

export const ratingBadge = (rating: number): JSX.Element => {
  const formattedRating = Math.round(rating * 10) / 10;

  if (formattedRating >= 7) {
    return <Badge className="border-transparent bg-green-600 text-[#fafafa] font-normal hover:bg-green-600">{formattedRating}</Badge>;
  } else if (formattedRating >= 5) {
    return <Badge className="border-transparent bg-yellow-500 text-[#0a0a0a] font-normal hover:bg-yellow-500">{formattedRating}</Badge>;
  } else if (formattedRating >= 3) {
    return <Badge className="border-transparent bg-red-600 text-[#fafafa] font-normal hover:bg-red-600">{formattedRating}</Badge>;
  } else {
    return <Badge className="border-transparent bg-gray-800 text-[#fafafa] font-normal hover:bg-gray-800">{formattedRating}</Badge>;
  }
}