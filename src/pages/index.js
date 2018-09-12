import React from "react";
import Helmet from "react-helmet";

class Homepage extends React.Component {
    render() {
        const siteTitle = this.props.data.site.siteMetadata.title;

        return (
            <div>
                <Helmet title={siteTitle} />

                <section id="one" className="main style1">
                    <div className="grid-wrapper">
                        <div className="col-6">
                            <header className="major">
                                <h2>Inaugural Meetup</h2>
                                <h2>Sunday September 16, 2018</h2>
                            </header>
                            <p>Our inaugural meetup will be held on Sunday September 16 at 8:00pm. The meetup location will be
                                in the Tim Hortons parking lot at 1277 York Mills Road (just east of the DVP).
                                <br/><br/>
                                Thanks to all who participated in the poll!</p>
                        </div>
                        <div className="col-6">
                            <span className="image fit">
                                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d681.0016355382528!2d-79.32629850000002!3d43.760533399999986!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89d4d265ad7b012b%3A0xeb64f68c474240ab!2sTim+Hortons!5e1!3m2!1sen!2sca!4v1536785975946" frameBorder="0" style={{border: 0, width: "100%", height: "350px"}} allowFullScreen></iframe>
                            </span>
                        </div>
                    </div>
                </section>
                
            </div>
        );
    }
}

Homepage.propTypes = {
    route: React.PropTypes.object
};

export default Homepage;

export const pageQuery = graphql`
    query IndexQuery {
        site {
            siteMetadata {
                title
            }
        }
    }
`;