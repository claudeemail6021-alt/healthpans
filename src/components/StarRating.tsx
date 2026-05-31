import { Star } from "lucide-react";
interface Props { rating: number; reviewCount?: number; size?: "sm"|"md"|"lg"; showNumber?: boolean; }
export default function StarRating({ rating, reviewCount, size="md", showNumber=true }: Props) {
  const full=Math.floor(rating); const half=rating-full>=0.5; const empty=5-full-(half?1:0);
  const s=size==="sm"?"h-3.5 w-3.5":size==="lg"?"h-5 w-5":"h-4 w-4";
  const t=size==="sm"?"text-xs":size==="lg"?"text-base":"text-sm";
  return (
    <div className={`flex items-center gap-1 ${t}`}>
      {Array.from({length:full}).map((_,i)=><Star key={`f${i}`} className={`${s} fill-yellow-400 text-yellow-400`}/>)}
      {half&&<Star className={`${s} text-neutral-300`}/>}
      {Array.from({length:empty}).map((_,i)=><Star key={`e${i}`} className={`${s} text-neutral-300`}/>)}
      {showNumber&&<span className="ml-1 font-semibold text-neutral-700">{rating.toFixed(1)}</span>}
      {reviewCount!==undefined&&<span className="text-neutral-400">({reviewCount.toLocaleString()} reviews)</span>}
    </div>
  );
}
