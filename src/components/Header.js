import React from 'react'

class Header extends React.Component {
    render() {
        return (
            <section id="header">
                <div className="inner">
                    <span className="icon major fa-send roundboi"></span>
                    <h1>Toronto Citywide Notification Network</h1>
                    <p>An invite-only alerting service for breaking news</p>
                </div>
            </section>
        )
    }
}

export default Header
