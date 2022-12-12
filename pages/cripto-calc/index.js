import React, { useEffect, useState } from 'react';

import { Grid, Typography } from '@mui/material';
import axios from 'axios';
import useSWR from 'swr';

import { Container } from '..';
import CryptoInput from '../../components/crypto-input/crypto-input.component';
import CryptoTable from '../../components/crypto-table/crypto-table.component';
import Header from '../../components/header/header.component';
import { BTC_EXCHANGES } from '../../utils/constants';

const fetcher = (...args) => axios.get(...args, { mode: 'cors' });

const arrayFetcher = (URLs) => {
    return Promise.allSettled(URLs.map((url) => fetcher(url)));
};

const TABLE_HEADERS = ['Exchange', 'Precio de venta', 'Mejor cotización'];
const CriptoCalc = () => {
    const URL_ARR = BTC_EXCHANGES.map(
        (exchange) => `https://criptoya.com/api/${exchange.ticker}/btc/ars`,
    );
    const { data, error } = useSWR(URL_ARR, arrayFetcher);

    const [amount, setAmount] = useState(0);
    const [exchanges, setExchanges] = useState([]);

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

            const sortedByTotalBid = dataExchanges.sort(sortByTotalBid);

            setExchanges(sortedByTotalBid);
        }
    }, [data]);

    const sortByTotalBid = (p1, p2) =>
        p1.data.totalBid < p2.data.totalBid
            ? 1
            : p1.data.totalBid > p2.data.totalBid
            ? -1
            : 0;

    if (error) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <Container>
            <Header />
            <Container sx={{ paddingX: { xs: '0rem', md: '6rem' } }}>
                <Grid container>
                    <Grid
                        item
                        sx={{ padding: '1rem' }}
                        xs={12}
                        md={6}
                        textAlign="center"
                    >
                        <Typography
                            color="secondary.light"
                            variant="h3"
                            gutterBottom
                        >
                            VENDER Bitcoin x ARS
                        </Typography>
                        <CryptoInput
                            value={amount}
                            handleChange={(e) => setAmount(e.target.value)}
                        />
                        <CryptoTable
                            data={exchanges}
                            headers={TABLE_HEADERS}
                            amount={amount}
                        />
                    </Grid>
                </Grid>
            </Container>
        </Container>
    );
};

export default CriptoCalc;
