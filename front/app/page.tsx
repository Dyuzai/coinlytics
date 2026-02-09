import Header from "@/shared/components/Header";
import OverViewComponent from "@/features/dashboard/components/OverViewComponent";
import ChartCripto from "@/features/dashboard/components/ChartCripto";


export default function DashboardHome() {
  return (
    <>
      <Header />
      <OverViewComponent />
      <ChartCripto />
    </>
  )
}