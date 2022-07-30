import { useFetch } from '../hooks/useFetch';
import { QuotesResponse } from '../interface/quotesResponse';

export const MultipleCustomHooks = () => {

    const { data, isLoading, hasError } = useFetch('quotes/1');
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

            <button className='btn btn-primary'>
                Next quote
            </button>

        </>
    );

}
