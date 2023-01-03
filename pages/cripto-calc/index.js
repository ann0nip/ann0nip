import React, { useEffect, useState } from 'react';

import { Grid, Paper, Typography } from '@mui/material';
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

const TABLE_HEADERS = ['Exchange', 'Mejor precio de venta', 'Total en Pesos'];
const CriptoCalc = () => {
    const URL_ARR = BTC_EXCHANGES.map(
        (exchange) => `https://criptoya.com/api/${exchange.ticker}/btc/ars`,
    );
    const URL_FIAT_ARR = BTC_EXCHANGES.map(
        (exchange) => `https://criptoya.com/api/${exchange.ticker}/busd/ars`,
    );
    const { data, errorBitcoinArs } = useSWR(URL_ARR, arrayFetcher);
    const { data: dataStableArs = [], error: errorStableArs } = useSWR(
        URL_FIAT_ARR,
        arrayFetcher,
    );

    const [amountBTC, setAmountBTC] = useState(0);
    const [amountBUSD, setAmountBUSD] = useState(0);

    const [exchanges, setExchanges] = useState([]);
    const [stableArs, setStableArs] = useState([]);

    useEffect(() => {
        if (data && data.length > 0) {
            const dataExchanges = data.reduce((acc, value) => {
                if (value.status === 'fulfilled') {
                    const {
                        data,
                        request: { responseURL },
                    } = value.value;
                    const ticker = responseURL.split('/')[4];

                    acc.push({ ticker, data });
                }
                return acc;
            }, []);

            const sortedByTotalBid = dataExchanges.sort(sortByTotalBid);

            setExchanges(sortedByTotalBid);
        }
    }, [data]);

    useEffect(() => {
        if (dataStableArs && dataStableArs.length > 0) {
            const validData = dataStableArs.reduce((acc, value) => {
                if (value.status === 'fulfilled') {
                    const {
                        data,
                        request: { responseURL },
                    } = value.value;
                    const ticker = responseURL.split('/')[4];

                    acc.push({ ticker, data });
                }
                return acc;
            }, []);

            const sortedByTotalBid = validData.sort(sortByTotalBid);

            setStableArs(sortedByTotalBid);
        }
    }, [dataStableArs]);

    const sortByTotalBid = (p1, p2) =>
        p1.data.totalBid < p2.data.totalBid
            ? 1
            : p1.data.totalBid > p2.data.totalBid
            ? -1
            : 0;

    if (errorBitcoinArs || errorStableArs) return <div>Failed to load</div>;
    if (!data) return <div>Loading...</div>;

    return (
        <Container>
            <Header />
            <Container
                sx={{ paddingX: { xs: '0rem', md: '6rem' }, marginTop: '5rem' }}
            >
                <Typography
                    variant="h4"
                    gutterBottom
                    textAlign="center"
                    fontWeight="800"
                >
                    Encuentra el mejor precio de <u>VENTA</u> para Bitcoin o
                    BUSD por pesos Argentinos.
                </Typography>
                <Grid container>
                    <Grid
                        item
                        sx={{ padding: '1rem', marginTop: '1rem' }}
                        xs={12}
                        md={6}
                        textAlign="center"
                    >
                        <Typography
                            color="secondary.light"
                            variant="h4"
                            gutterBottom
                        >
                            Bitcoin x ARS
                        </Typography>
                        <CryptoInput
                            isBtc={true}
                            value={amountBTC}
                            handleChange={(e) => setAmountBTC(e.target.value)}
                        />
                        <CryptoTable
                            dataType="BTC"
                            data={exchanges}
                            headers={TABLE_HEADERS}
                            amount={amountBTC}
                        />
                    </Grid>
                    <Grid
                        item
                        sx={{ padding: '1rem', marginTop: '1rem' }}
                        xs={12}
                        md={6}
                        textAlign="center"
                    >
                        <Typography
                            variant="h4"
                            gutterBottom
                            color="secondary.light"
                        >
                            BUSD x ARS
                        </Typography>
                        <CryptoInput
                            value={amountBUSD}
                            handleChange={(e) => setAmountBUSD(e.target.value)}
                        />
                        <CryptoTable
                            dataType="BUSD"
                            data={stableArs}
                            headers={TABLE_HEADERS}
                            amount={amountBUSD}
                        />
                    </Grid>
                </Grid>
            </Container>
            <Paper
                sx={{
                    paddingX: { xs: '0rem', md: '6rem' },
                    textAlign: 'center',
                }}
            >
                <Typography variant="overline">
                    Made with ☕️ by @Ann0nip - 2023
                </Typography>
                <br />
                <Typography variant="caption">
                    All the data is pulled from the public CriptoYa API
                </Typography>
            </Paper>
        </Container>
    );
};

export default CriptoCalc;
