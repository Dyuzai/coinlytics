'use client'

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
} from "@/components/ui/sidebar"
import { ChartColumnIncreasing, ChartPie, Globe, LayoutDashboard, Settings, TrendingUp } from "lucide-react"
import { Separator } from "@/components/ui/separator"
import NavItem from "@/shared/components/NavItem"
import { useState } from "react"

export function AppSidebar() {
  // Verificar futuramente erro de estado desse State
  const [currentPage, setCurrentPage] = useState("dashboard")

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
              <nav className="flex flex-col px-2 gap-4 ">
                <NavItem href="/" selected={currentPage === "dashboard"} onClick={() => setCurrentPage("dashboard")} icon={LayoutDashboard} label="Dashboard" />
                <NavItem href="/" selected={currentPage === "mercado"} onClick={() => setCurrentPage("mercado")} icon={TrendingUp} label="Mercado" />
                <NavItem href="/" selected={currentPage === "analise"} onClick={() => setCurrentPage("analise")} icon={ChartPie} label="Análises" />
                <NavItem href="/" selected={currentPage === "globe"} onClick={() => setCurrentPage("globe")} icon={Globe} label="Notícias" />
              </nav>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter className="bg-zinc-950">
        <SidebarGroup>
          <SidebarMenu>
            <div className="mx-2">
              <Separator className="bg-zinc-800" />
            </div>
            <SidebarMenuItem>
              <nav className="flex flex-col px-2 gap-4 ">
                <NavItem href="/" selected={currentPage === "config"} onClick={() => setCurrentPage("config")} icon={Settings} label="Configurações" />
              </nav>
            </SidebarMenuItem>
            <SidebarMenuItem>
              <div className="flex flex-col gap-2 bg-zinc-800 rounded-lg p-4">
                <div>
                  <span className="text-sm text-zinc-400">Plano Pro</span>
                </div>
                
                <div className="flex flex-col gap-3">
                  <span className="text-base text-zinc-200">Acesso ilimitado</span>
                  <button className="bg-indigo-600 hover:bg-indigo-700 cursor-pointer text-zinc-100 px-4 py-2 font-semibold text-sm rounded-lg">Upgrade</button>
                </div>
              </div>
            </SidebarMenuItem>
          </SidebarMenu>
        </SidebarGroup>
      </SidebarFooter> 
    </Sidebar>
  )
}