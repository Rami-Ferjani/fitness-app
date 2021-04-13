import React from 'react'
import { connect,useSelector } from 'react-redux'

export const Dashboard = (props) => {
    const state=useSelector(state=>state)
    return (
        <div>
            <h1>{state.auth.person.name}</h1>
        </div>
    )
}

const mapStateToProps = (state) => ({
    
})

const mapDispatchToProps = {
    
}

export default connect(mapStateToProps, mapDispatchToProps)(Dashboard)
