import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChartColumnIncreasing } from "lucide-react"
import { Separator } from "@/components/ui/separator"

export function AppSidebar() {
  return (
    <Sidebar className="border-r border-zinc-800">
      <SidebarHeader className="bg-zinc-950">
        <SidebarMenu className="flex justify-center">
            <SidebarMenuItem className="flex items-center" >
                <div className="p-3 rounded-lg">
                    <ChartColumnIncreasing size={28} color="#6366f1"/>
                </div>
                <span className="font-bold text-lg text-zinc-100">Coinlytics Insights</span>
            </SidebarMenuItem>
            <div className="mx-2">
              <Separator className="bg-zinc-800" />
            </div>
          </SidebarMenu>
      </SidebarHeader>    
      <SidebarContent className="bg-zinc-950">
        <SidebarGroup>
          <SidebarMenu>
            <SidebarMenuItem>   
              <nav>
                Dashboard 
              </nav>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
        <SidebarGroup />
      </SidebarContent>
      <SidebarFooter /> 
    </Sidebar>
  )
}