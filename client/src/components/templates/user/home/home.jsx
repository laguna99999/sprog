import React, { Component } from 'react';
import { connect } from 'react-redux';
import windowSize from 'react-window-size';
import { Link } from "react-router-dom";

import OwlCarousel from 'react-owl-carousel';
import 'owl.carousel/dist/assets/owl.carousel.css';
import 'owl.carousel/dist/assets/owl.theme.default.css';

import Counter from '../../../fragments/inputs/counter';
import Position from '../../../fragments/inputs/position';
import Business from '../../../fragments/business/business';

import './style.css';
import { USER_MODE } from '../../../../redux/constants/actionTypes';
class Home extends Component {
    componentWillMount(){
		this.props.onLoad();
    }
    componentWillUnmount(){
        
    }
    render() {
        return (
            <React.Fragment>
                <div className="container home">
                    <div className="row">
                        <div className="col-md-6 mt-4">
                            <Counter placeholder="How much would you like to spend?" interval='5' type='currency' width={(this.props.windowWidth > 992) ? "70%": "100%"} marginBottom="10px"/>
                            <Counter placeholder="How many children do you have?" interval='1' type='integer' width={(this.props.windowWidth > 992) ? "70%": "100%"} marginBottom="10px"/>
                            <Position placeholder="Enter location/Geotag" width={(this.props.windowWidth > 992) ? "70%": "100%"} marginBottom="10px"/>
                            <div className="button-group">
                                <Link to="/user/result" className="sprog-btn bg-blue">Sprog it</Link>
                            </div>
                        </div>
                        <div className="col-md-6 text-center">
                            <iframe width="400" height="250" title="Our service" src="https://www.youtube-nocookie.com/embed/A55YtAKsQW8?rel=1&amp;controls=1&amp;showinfo=0&amp;autoplay=1" frameBorder="0" allow="autoplay; encrypted-media" allowFullScreen></iframe>
                        </div>
                    </div>
                </div>
                <div className="businesses-landscape">
                    <OwlCarousel
                        className="owl-theme"
                        loop
                        autoplay={true}
                        autoplayTimeout={4000}
                        autoplayHoverPause
                        margin={10}
                        nav={true}
                        items={ (this.props.windowWidth > 992) ? 4 : ((this.props.windowWidth < 768) ? 2 : 3) }
                    >
                        { this.props.home.businesses.map((business, index) => {
                            return <Business key={ index } business={ business }/>
                        }) }
                    </OwlCarousel>
                </div>
                <div className="businesses-portrait container">
                    <p className="result c-blue">Top picks</p>
                    { this.props.home.businesses.map((business, index) => {
                        return <Business key={ index } business={ business }/>
                    }) }
                </div>
            </React.Fragment>
        );
    }
}

const mapStateToProps = state => ({
    ...state
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => 
		dispatch({ type: USER_MODE })
});

export default connect(mapStateToProps, mapDispatchToProps)(windowSize(Home));