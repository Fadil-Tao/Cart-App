const ErrorPage = ({error}) =>{
    return (
        <div className="min-h-screen flex justify-center items-center">
            <h1 className="font-bold text-lg">Error something went wrong</h1>
            <h2>{error}</h2>
        </div>
    )
}

export default ErrorPage;