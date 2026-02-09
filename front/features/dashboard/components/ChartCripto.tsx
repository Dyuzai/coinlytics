"use client";

import { ArrowDownRight, ArrowUpRight, RefreshCw, Search } from 'lucide-react';
import {
    Tooltip, ResponsiveContainer, AreaChart, Area, XAxis, YAxis, CartesianGrid
} from 'recharts';
import { useMarketData, CoinMarketData } from '@/features/dashboard/hooks/useMarketData';
import { useState, useEffect, useMemo } from 'react';

export default function ChartCripto() {
    const { data: marketData, loading, error } = useMarketData();
    const [selectedCoin, setSelectedCoin] = useState<CoinMarketData | null>(null);
    const [searchTerm, setSearchTerm] = useState('');

    // Transform sparkline data for Recharts
    const chartData = useMemo(() => {
        if (!selectedCoin?.sparkline_in_7d?.price) return [];

        return selectedCoin.sparkline_in_7d.price.map((price, index) => ({
            time: index,
            price: parseFloat(price.toFixed(2))
        }));
    }, [selectedCoin]);

    // Auto-select first coin when data loads
    useEffect(() => {
        if (marketData.length > 0 && !selectedCoin) {
            setSelectedCoin(marketData[0]);
        }
    }, [marketData, selectedCoin]);

    const filteredData = marketData.filter(coin =>
        coin.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        coin.symbol.toLowerCase().includes(searchTerm.toLowerCase())
    );

    if (error) {
        return (
            <div className="flex items-center justify-center p-12 bg-zinc-900/50 border border-zinc-800 rounded-2xl">
                <p className="text-zinc-400">Erro ao carregar dados do mercado.</p>
            </div>
        );
    }

    return (
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 px-6 py-6">
            <div className="lg:col-span-2 bg-zinc-900/50 border border-zinc-800 rounded-2xl p-6 backdrop-blur-sm shadow-xl">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-8">
                    <div className="flex items-center gap-4">
                        {selectedCoin ? (
                            <>
                                <img src={selectedCoin.image} alt="" className="w-12 h-12 rounded-full shadow-lg border border-zinc-800" />
                                <div>
                                    <div className="flex items-center gap-2">
                                        <h2 className="font-bold text-xl text-white">{selectedCoin.name}</h2>
                                        <span className="text-zinc-500 text-sm font-medium uppercase px-2 py-0.5 bg-zinc-800 rounded">{selectedCoin.symbol}</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <p className="text-2xl font-bold tracking-tight text-white">${selectedCoin.current_price.toLocaleString()}</p>
                                        <span className={`text-sm font-semibold flex items-center gap-0.5 ${selectedCoin.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                            {selectedCoin.price_change_percentage_24h >= 0 ? <ArrowUpRight size={14} /> : <ArrowDownRight size={14} />}
                                            {Math.abs(selectedCoin.price_change_percentage_24h).toFixed(2)}%
                                        </span>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <div className="h-12 w-48 bg-zinc-800 animate-pulse rounded-lg" />
                        )}
                    </div>
                    <div className="flex gap-2">
                        {['1H', '24H', '7D', '1M'].map((p) => (
                            <button
                                key={p}
                                className={`px-4 py-1.5 rounded-xl text-xs font-bold transition-all ${p === '7D' ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-500/20' : 'bg-zinc-800 text-zinc-400 hover:text-white hover:bg-zinc-700'}`}
                            >
                                {p}
                            </button>
                        ))}
                    </div>
                </div>

                <div className="h-[350px] w-full">
                    {loading ? (
                        <div className="w-full h-full flex items-center justify-center bg-zinc-800/20 rounded-xl border border-dashed border-zinc-800">
                            <RefreshCw className="animate-spin text-indigo-500" size={32} />
                        </div>
                    ) : (
                        <ResponsiveContainer width="100%" height="100%">
                            <AreaChart data={chartData}>
                                <defs>
                                    <linearGradient id="colorPrice" x1="0" y1="0" x2="0" y2="1">
                                        <stop offset="5%" stopColor="#6366f1" stopOpacity={0.3} />
                                        <stop offset="95%" stopColor="#6366f1" stopOpacity={0} />
                                    </linearGradient>
                                </defs>
                                <CartesianGrid strokeDasharray="3 3" stroke="#27272a" vertical={false} />
                                <XAxis dataKey="time" hide />
                                <YAxis hide domain={['auto', 'auto']} />
                                <Tooltip
                                    contentStyle={{
                                        backgroundColor: 'rgba(24, 24, 27, 0.95)',
                                        borderColor: '#3f3f46',
                                        borderRadius: '12px',
                                        backdropFilter: 'blur(8px)',
                                        border: '1px solid #3f3f46',
                                        boxShadow: '0 10px 15px -3px rgba(0, 0, 0, 0.5)'
                                    }}
                                    itemStyle={{ color: '#fff', fontSize: '14px', fontWeight: 'bold' }}
                                    labelStyle={{ display: 'none' }}
                                    formatter={(value: any) => [`$${value}`, 'Preço']}
                                />
                                <Area
                                    type="monotone"
                                    dataKey="price"
                                    stroke="#6366f1"
                                    strokeWidth={3}
                                    fillOpacity={1}
                                    fill="url(#colorPrice)"
                                    animationDuration={1500}
                                />
                            </AreaChart>
                        </ResponsiveContainer>
                    )}
                </div>
            </div>

            {/* List Section */}
            <div className="bg-zinc-900/50 border border-zinc-800 rounded-xl flex flex-col overflow-hidden backdrop-blur-sm shadow-xl h-[530px]">
                <div className="p-6 border-b border-zinc-800 flex flex-col gap-4">
                    <div className="flex justify-between items-center">
                        <h3 className="font-bold text-lg">Principais Ativos</h3>
                        <RefreshCw size={16} className={`text-zinc-500 hover:text-white cursor-pointer transition-colors ${loading ? 'animate-spin' : ''}`} />
                    </div>
                    <div className="relative">
                        <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500" size={16} />
                        <input
                            type="text"
                            placeholder="Buscar cripto..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full bg-zinc-800/50 border border-zinc-700 rounded-xl py-2 pl-10 pr-4 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50 transition-all placeholder:text-zinc-600"
                        />
                    </div>
                </div>
                <div className="flex-1 overflow-y-auto scrollbar-hide">
                    {loading ? (
                        Array(6).fill(0).map((_, i) => (
                            <div key={i} className="p-4 flex items-center justify-between border-b border-zinc-800/50">
                                <div className="flex items-center gap-3">
                                    <div className="w-8 h-8 rounded-full bg-zinc-800 animate-pulse" />
                                    <div className="space-y-2">
                                        <div className="w-20 h-3 bg-zinc-800 animate-pulse rounded" />
                                        <div className="w-10 h-2 bg-zinc-800 animate-pulse rounded" />
                                    </div>
                                </div>
                                <div className="space-y-2 text-right">
                                    <div className="w-16 h-3 bg-zinc-800 animate-pulse rounded ml-auto" />
                                    <div className="w-10 h-2 bg-zinc-800 animate-pulse rounded ml-auto" />
                                </div>
                            </div>
                        ))
                    ) : filteredData.length === 0 ? (
                        <div className="p-12 text-center text-zinc-500 text-sm">Nenhum ativo encontrado.</div>
                    ) : (
                        filteredData.map((coin) => (
                            <button
                                key={coin.id}
                                onClick={() => setSelectedCoin(coin)}
                                className={`w-full p-4 flex items-center justify-between hover:bg-zinc-800/30 transition-all border-b border-zinc-800/50 last:border-0 group ${selectedCoin?.id === coin.id ? 'bg-indigo-500/10 border-l-4 border-l-indigo-500' : 'border-l-4 border-l-transparent'}`}
                            >
                                <div className="flex items-center gap-3">
                                    <img src={coin.image} alt={coin.name} className="w-8 h-8 rounded-full transition-transform group-hover:scale-110" />
                                    <div className="text-left">
                                        <p className="text-sm font-semibold text-zinc-200">{coin.name}</p>
                                        <p className="text-xs text-zinc-500 uppercase font-medium">{coin.symbol}</p>
                                    </div>
                                </div>
                                <div className="text-right">
                                    <p className="text-sm font-bold text-white">${coin.current_price.toLocaleString()}</p>
                                    <p className={`text-xs flex items-center justify-end gap-0.5 font-medium ${coin.price_change_percentage_24h >= 0 ? 'text-emerald-500' : 'text-rose-500'}`}>
                                        {coin.price_change_percentage_24h >= 0 ? <ArrowUpRight size={12} /> : <ArrowDownRight size={12} />}
                                        {Math.abs(coin.price_change_percentage_24h).toFixed(2)}%
                                    </p>
                                </div>
                            </button>
                        ))
                    )}
                </div>
            </div>
        </div>
    );
}