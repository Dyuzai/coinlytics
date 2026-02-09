import { ChartArea, Globe, TrendingUp } from "lucide-react";
import OverViewCard from "./OverViewCard";

export default function OverViewComponent() {
    return (
      <div className="flex flex-col gap-6">
        <div className="grid grid-cols-4 gap-6 w-full">
          <OverViewCard icon={Globe} iconColor="text-blue-500" variation={10} value="$100.000" description="Market Cap Global" />
          <OverViewCard icon={TrendingUp} iconColor="text-purple-500" variation={- 5.4} value="$100.000" description="Volume 24h" />
          <OverViewCard icon={ChartArea} iconColor="text-blue-500" variation={0.3} value="$100.000" description="Bitcoin Dominance" />
        </div>  
      </div>
    )
}