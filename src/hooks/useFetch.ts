import { useEffect, useState } from 'react';

import breakingBadApi from '../apis/breakingBadApi';
import { QuotesResponse } from '../interface/quotesResponse';

interface UseFetchState {
    data: QuotesResponse[] | null,
    isLoading: boolean,
    hasError: any,
}

export const useFetch = ( url: string ) => {

    const [ state, setState ] = useState<UseFetchState>({
        data: null,
        isLoading: true,
        hasError: null,
    });

    const getFetch = async (): Promise<void> => {

        setState({
            ...state,
            isLoading: true,
        });

        const { data } = await breakingBadApi.get<QuotesResponse[]>( url );
        
        setState({
            data,
            isLoading: false,
            hasError: null,
        });

    }

    useEffect(() => {
      getFetch();
    }, [url]);
    
    return {
        data: state.data,
        isLoading: state.isLoading,
        hasError: state.hasError,
    };
}