import { BTC_EXCHANGES } from './constants';

export const formatPrice = (price, maximumFractionDigits = 2) => {
    if (!price) return;

    const value = price.toFixed(2);
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
        maximumFractionDigits,
    }).format(value);
};

export const getExchangeName = (exchange) => {
    console.log(exchange);
    const exchangeObj = BTC_EXCHANGES.find(
        (el) => el.ticker === exchange.ticker,
    );

    return exchangeObj.label;
};
