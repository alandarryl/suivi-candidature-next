import React from 'react'

function StatCard({stat}) {
    return (
        <div className="stat-card" >
            <p>Text : {stat} </p>
        </div>
    )
}


const StatGrid = ({stat1, stat2, stat3, stat4}) =>{

    return(
        <div className='stat-grid' >
            <StatCard stat={stat1} />
            <StatCard stat={stat2} />
            <StatCard stat={stat3} />
            <StatCard stat={stat4} />
        </div>
    )
}

export default StatGrid;