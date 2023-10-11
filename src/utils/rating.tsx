import { Badge } from "@/components/ui/badge"

export const ratingBadge = (rating: number): JSX.Element => {
  if (rating >= 7) {
    return <Badge className="border-transparent bg-green-600 text-[#fafafa] font-normal hover:bg-green-600">{rating}</Badge>;
  } else if (rating >= 5) {
    return <Badge className="border-transparent bg-yellow-500 text-[#0a0a0a] font-normal hover:bg-yellow-500">{rating}</Badge>;
  } else {
    return <Badge className="border-transparent bg-red-600 text-[#fafafa] font-normal hover:bg-red-600">{rating}</Badge>;
  }
}