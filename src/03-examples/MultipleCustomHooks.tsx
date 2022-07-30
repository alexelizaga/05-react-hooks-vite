import { useFetch } from '../hooks/useFetch';
import { QuotesResponse } from '../interface/quotesResponse';
import { useCounter } from '../hooks/useCounter';

export const MultipleCustomHooks = () => {

    const { counter, increment } = useCounter(1);
    const { data, isLoading, hasError } = useFetch(`quotes/${counter}`);
    const { author, quote }: any = !!data && data[0];


    return (
        <>
            <h1>Breaking Bad Quotes</h1>
            <hr />

            {
                isLoading
                    ? (
                        <div className="alert alert-info text-center">
                            Loading...
                        </div>
                    )
                    : (
                        <blockquote className="blockquote text-end">
                            <p className="mb-1">{ quote }</p>
                            <footer className="blockquote-footer mt-1">{ author }</footer>
                        </blockquote>
                    )
            }

            <button
                className='btn btn-primary'
                onClick={() => increment()}
                disabled={isLoading}
            >
                Next quote
            </button>

        </>
    );

}
