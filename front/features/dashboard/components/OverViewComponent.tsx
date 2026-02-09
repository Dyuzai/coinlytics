"use client";

import { ChartArea, Globe, TrendingUp } from "lucide-react";
import OverViewCard from "./OverViewCard";
import { useMarketData } from "../hooks/useMarketData";

export default function OverViewComponent() {
    const { data, loading, error } = useMarketData();
    console.log(data)

    return (
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full px-6">
            <OverViewCard icon={Globe} iconColor="text-blue-500" variation={10} value="$100.000" description="Market Cap Global" />
            <OverViewCard icon={TrendingUp} iconColor="text-purple-500" variation={- 5.4} value="$100.000" description="Volume 24h" />
            <OverViewCard icon={ChartArea} iconColor="text-blue-500" variation={0.3} value="123" description="Bitcoin Dominance" />
        </div>
    )
}