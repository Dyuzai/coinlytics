import { LucideIcon } from "lucide-react";

interface NavItemProps {
    href: string;
    icon: LucideIcon;
    onClick?: () => void;
    selected?: boolean;
    label: string;
}

export default function NavItem({href, icon: Icon, onClick, selected = false, label}: NavItemProps) { 
    return (
        <a href={href}>
            <div 
             className={`flex gap-2 p-3 rounded-lg
                ${selected ? "bg-indigo-600" : "text-zinc-600"}`}
             onClick={onClick}
            >
                <Icon size={20} color="#fff"/>
                <span className="font-semibold text-base text-zinc-100">{label}</span>
            </div>
        </a>
    )
}