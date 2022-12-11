import { BTC_EXCHANGES } from './constants';

export const formatPrice = (price) => {
    if (!price) return;

    const value = price.toFixed(2);
    return new Intl.NumberFormat('es-AR', {
        style: 'currency',
        currency: 'ARS',
    }).format(value);
};

export const getExchangeName = (exchange) => {
    const exchangeObj = BTC_EXCHANGES.find(
        (el) => el.ticker === exchange.ticker,
    );

    return exchangeObj.label;
};
