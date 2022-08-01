interface QuoteProps {
    quote: string;
    author: string;
}

export const Quote = ( { quote, author }: QuoteProps ) => {
  return (
    <blockquote className="blockquote text-end">
        <p className="mb-1">{ quote }</p>
        <footer className="blockquote-footer mt-1">{ author }</footer>
    </blockquote>
  )
}
