import { api } from "@/lib/api";
import { useEffect, useState } from "react";

export interface CoinMarketData {
    id: string;
    symbol: string;
    name: string;
    image: string;
    current_price: number;
    price_change_percentage_24h: number;
    sparkline_in_7d: {
        price: number[];
    };
}

export function useMarketData() {
    const [data, setData] = useState<CoinMarketData[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<any>(null);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await api.get("/coins/markets", {
                    params: {
                        vs_currency: 'usd',
                        order: 'market_cap_desc',
                        per_page: 20,
                        page: 1,
                        sparkline: true,
                        price_change_percentage: '24h'
                    }
                });
                setData(response.data);
            } catch (error) {
                console.error("Error fetching market data:", error);
                setError(error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();

        const interval = setInterval(fetchData, 60000);
        return () => clearInterval(interval);
    }, []);

    return { data, loading, error };
}