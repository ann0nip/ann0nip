import React, { useEffect, useState } from 'react';

import axios from 'axios';
import useSWR from 'swr';

import { BTC_EXCHANGES } from '../../utils/constants';

const fetcher = (...args) => axios.get(...args, { mode: 'cors' });

const arrayFetcher = (URLs) => {
    return Promise.allSettled(URLs.map((url) => fetcher(url)));
};

export const formatPrice = (price) => {
    if (!price) return;

    const value = price.toFixed(2);
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(value);
};

const CriptoCalc = () => {
    const URL_ARR = BTC_EXCHANGES.map(
        (exchange) => `https://criptoya.com/api/${exchange.ticker}/btc/ars`,
    );

    const [exchanges, setExchanges] = useState([]);

    const { data, error } = useSWR(URL_ARR, arrayFetcher);

    useEffect(() => {
        if (data && data.length > 0) {
            const dataExchanges = data.reduce((acc, exchange) => {
                if (exchange.status === 'fulfilled') {
                    const {
                        data,
                        request: { responseURL },
                    } = exchange.value;
                    const ticker = responseURL.split('/')[4];
                    acc.push({ ticker, data });
                }
                return acc;
            }, []);

            setExchanges(dataExchanges);
        }
    }, [data]);

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    const getExchangeName = (exchange) => {
        const exchangeObj = BTC_EXCHANGES.find(
            (el) => el.ticker === exchange.ticker,
        );

        return exchangeObj.label;
    };
    return (
        <>
            <h1>Cotizaciones de VENTA Bitcoin/ARS</h1>
            <ul>
                {exchanges.map((exchange) => {
                    return (
                        <li>
                            {getExchangeName(exchange)} |
                            {formatPrice(exchange.data.totalBid)}
                        </li>
                    );
                })}
            </ul>
        </>
    );
};

export default CriptoCalc;
