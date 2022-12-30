import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import CurrencyBitcoinIcon from '@mui/icons-material/CurrencyBitcoin';
import {
    FormControl,
    Input,
    InputAdornment,
    InputLabel,
    styled,
} from '@mui/material';

const BitcoinIcon = styled(CurrencyBitcoinIcon)((props) => {
    return {
        color: props.theme.palette.primary.dark,
    };
});
const CryptoInput = ({ value, handleChange, isBtc }) => (
    <FormControl
        sx={{ paddingX: '0rem', marginBottom: '1rem' }}
        fullWidth
        variant="standard"
    >
        <InputLabel htmlFor="standard-adornment-amount">
            Cantidad a vender
        </InputLabel>
        <Input
            value={value}
            onChange={handleChange}
            startAdornment={
                <InputAdornment position="start">
                    {isBtc ? <BitcoinIcon /> : <AttachMoneyIcon />}
                </InputAdornment>
            }
        />
    </FormControl>
);

export default CryptoInput;
