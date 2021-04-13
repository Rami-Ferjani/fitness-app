import React from 'react'
import { connect,useSelector } from 'react-redux'

export const Dashboard = (props) => {
    const state=useSelector(state=>state)
    return (
        <div>
            <h1>Welcom {state.auth.person.name}</h1>
            <h2>Applogies but the dashboard is under construction</h2>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
