import { PayloadAction, createSlice } from "@reduxjs/toolkit";

export interface IWeb3Slice {
    address: string;
    connected: boolean;
    installed: boolean;
    loading: boolean;
    network: number;
    walletBalance: number;
}

const initialState: IWeb3Slice = {
    address: '',
    connected: false,
    installed: false,
    loading: true,
    network: 0,
    walletBalance: 0
}

export const web3Slice = createSlice({
    name: 'web3',
    initialState,
    reducers: {
        setAddress: (state: IWeb3Slice, action: PayloadAction<string>) => {
            state.address = action.payload;
            state.loading = false;
            state.installed = true;
        },
        setConnected: (state: IWeb3Slice, action: PayloadAction<boolean>) => {
            state.connected = action.payload;
            state.loading = false;
            state.installed = true;
        },
        setInstalled: (state: IWeb3Slice, action: PayloadAction<boolean>) => {
            state.installed = action.payload;
            state.loading = false;
        },
        setLoading: (state: IWeb3Slice, action: PayloadAction<boolean>) => {
            state.loading = action.payload;
            state.loading = false;
        },
        setNetwork: (state: IWeb3Slice, action: PayloadAction<number>) => {
            state.network = action.payload;
            state.loading = false;
            state.installed = true;
        },
        setWalletBalance: (state: IWeb3Slice, action: PayloadAction<number>) => {
            state.walletBalance = action.payload;
        }
    }
});

export const { setAddress, setConnected, setInstalled,
    setLoading, setNetwork, setWalletBalance } = web3Slice.actions;
export const web3Reducer = web3Slice.reducer;
