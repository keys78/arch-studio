// import { useState } from "react";
import { Link } from "react-router-dom";

const Data = ({ portfolios }) => {

    return ( 
        <Link to="/portfolio" className="featured-display flex-between my-20">
            {(portfolios.map((portfolio) => (
                <div key={ portfolio.id }>
                    <img src={process.env.PUBLIC_URL + portfolio.img} alt="photos"/>
                    <p> { portfolio.id }</p>
                    <h1>{ portfolio.name }</h1>

                </div>
            )))}
        </Link>
     );
}
 
export default Data;