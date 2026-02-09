import { LucideIcon } from "lucide-react";

interface OverViewCardProps {
    icon: LucideIcon;
    iconColor: string;
    variation: number;
    value: string;
    description: string;
}

export default function OverViewCard({ icon: Icon, iconColor, variation, value, description }: OverViewCardProps) {
    return (
        <div className="flex flex-col bg-zinc-900 rounded-xl mx-5">
            <div className="flex justify-between p-4">
                <div className="p-2 bg-zinc-800 rounded-lg">
                    <Icon className={iconColor}/>
                </div>
                <p
                 className={`flex items-center gap-1 p-2 text-sm ${variation > 0 ? "rounded-lg text-emerald-500 bg-emerald-500/10" : "rounded-lg text-rose-500 bg-rose-500/10"}`}    
                > 
                    <span>{variation > 0 ? "+" : ""}</span>
                    {variation}%
                </p>
            </div>
            <div className="flex flex-col p-4 gap-2">
                <p className="text-zinc-500">{description}</p>
                <p className="text-xl font-bold text-zinc-100">{value}</p>
            </div>
        </div>
    )
}