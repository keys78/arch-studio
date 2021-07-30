import { Link } from "react-router-dom";

const Data = ({ portfolios, view }) => {

    return ( 
        <Link to="/portfolio" className="featured-display grid grid-cols-3 gap-8">
            {(portfolios.map((portfolio) => (
                <div className="relative overflow-x-hidden" key={ portfolio.id }>
                    <img className="w-full" src={process.env.PUBLIC_URL + portfolio.img} alt="photos"/>

                    <div className="bg-black w-full h-full opacity-30 absolute top-0"></div>
                    <div className="absolute bottom-10 left-5 w-full">
                            <h1 className="color font-semibold text-2xl">{ portfolio.name }</h1>
                            <p className={portfolio.no_date ? 'no-date' : "date"} >{ portfolio.date }</p>
                            <p className="color pt-3">{ view }</p>
                    </div>

                    <div className="absolute top-1 xl:-right-72 -right-40 w-full">
                        <p className="number-count"> { portfolio.numb }</p>
                    </div>
                   
                   
                </div>
            )))}
        </Link>
     );
}
 
export default Data;