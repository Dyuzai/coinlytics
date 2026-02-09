import { LucideIcon } from "lucide-react";

interface NavItemProps {
    href: string;
    icon: LucideIcon;
    label: string;
}

export default function NavItem({href, icon: Icon, label}: NavItemProps) { 
    return (
        <a href={href}>
            <div className="flex items-center gap-2 p-3 rounded-lg bg-indigo-600">
                <Icon size={24} color="#fff"/>
                <span className="font-semibold text-base text-zinc-100">{label}</span>
            </div>
        </a>
    )
}