import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import { Carousel } from 'react-responsive-carousel';
import { BUSINESS_MODE } from '../../../../redux/constants/actionTypes';
import Gmap from '../../../fragments/inputs/gmap';
import './style.css';
class Preview extends Component {
    componentWillMount(){
		this.props.onLoad();
    }
    render() {
        return (
            <div className="preview container">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="row title mt-3">
                            <div className="col-3 col-sm-3 col-md-2">
                            </div>
                            <div className="col-6 col-sm-6 col-md-8">
                                <h1 className="text-center name">
                                    <span style={{
                                        borderBottom: "2px solid #888888"
                                    }}>{this.props.detail.name}</span>
                                </h1>
                            </div>
                            <div className="col-3 col-sm-3 col-md-2 d-none d-sm-none d-md-block">
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-sm-6">
                                <div className="slider d-show d-sm-none mt-3">
                                    <Carousel infiniteLoop={true} autoPlay={true}>
                                        {this.props.detail.face.map((item, index) => {
                                            return <div key={index}><img src={item} alt="Company face"/></div>
                                        })}
                                    </Carousel>
                                </div>
                                <h4>Age Range</h4>
                                <div className="age_range mt-3" style={{
                                    paddingBottom: "10px",
                                    borderBottom: "1px solid #bbbbbb",
                                    textAlign: "center"
                                }}>
                                    {this.props.detail.age_range.map((age, index) => {
                                        return <span className="age" key={index}>{
                                            age === "A" ? "0 - 3" : (age === "B" ? "4 - 7" : (age === "C" ? "8 - 11" : "12 - 15"))
                                        }</span>
                                    })}
                                </div>
                                <h4 className="mt-1" style={{marginBottom: "0"}}>Facilities</h4>
                                <div className="facilities" style={{
                                    paddingBottom: "10px",
                                    borderBottom: "1px solid #bbbbbb",
                                    textAlign: "center"
                                }}>
                                    {this.props.facilities.map((facility, index) => {
                                        return <div className="facility" key={index}>
                                            <i className={"fa fa-" + facility} style={{
                                                color: (this.props.detail.facilities.indexOf(facility) !== -1) ? "green" : "black",
                                                fontSize: "25px"
                                            }}></i>
                                        </div>
                                    })}
                                </div>
                                <h4 className="mt-1" style={{marginBottom: "0"}}>Distance</h4>
                                <div style={{paddingBottom: "10px", borderBottom: "1px solid #bbbbbb", marginTop: "10px"}}>
                                    <span>{this.props.detail.distance}</span>
                                </div>
                                <div className="row">
                                    <div className="col-md-6 col-6 col-sm-12">
                                        <h4 className="mt-1 text-left" style={{marginBottom: "10px"}}>Opening Hours</h4>
                                        <div>
                                            {this.props.detail.hours.map((item, index) => {
                                                return <div className="row working-time" key={index}>
                                                    <div className="col-3"><span>{item.day}</span></div>
                                                    <div className="col-1"><span>-</span></div>
                                                    <div className="col-7">{(item.open !== "-") ? <span>{item.open + "-" + item.close}</span> : "Closed"}</div>
                                                </div>
                                            })}
                                        </div>
                                    </div>
                                    <div className="col-md-6 col-6 col-sm-12">
                                        <h4 className="mt-1 text-left" style={{marginBottom: "10px"}}>Location</h4>
                                        <div style={{
                                            borderBottom: "1px solid #bbbbbb",
                                            paddingBottom: "10px"
                                        }}>
                                            <p>{this.props.detail.location.address}</p>
                                            <p>{this.props.detail.location.address2}</p>
                                            <p>{this.props.detail.location.city}</p>
                                            <p>{this.props.detail.location.postal_code}</p>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-sm-6">
                                <h4>Description</h4>
                                <div>
                                    <p>{this.props.detail.description}</p>
                                </div>
                            </div>
                        </div>
                        <div className="row mt-1">
                            <div className="col-md-6 d-none d-sm-none d-md-block">
                                <Link to="/business/home" className="btn bg-blue w-100 mt-3" style={{color: "white", fontSize: "20px", fontWeight: "700"}}>Submit</Link>
                            </div>
                            <div className="col-md-6 d-none d-sm-none d-md-block">
                                <Link to="/business/home" className="btn bg-blue w-100 mt-3" style={{color: "white", fontSize: "20px", fontWeight: "700"}}>Back</Link>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 mt-3">
                        <div className="slider d-none d-sm-block">
                            <Carousel infiniteLoop={true} autoPlay={true}>
                                {this.props.detail.face.map((item, index) => {
                                    return <div key={index}><img src={item} alt="Company face"/></div>
                                })}
                            </Carousel>
                        </div>
                        <div className="row contact">
                            <div className="col-12 col-sm-10 mt-1"><Gmap height="220px"/></div>
                            <div className="col-sm-2 d-none d-sm-block" style={{paddingLeft: "0"}}>
                                <button className="btn mt-1" style={{
                                    width: "100%",
                                    background: "darkorange",
                                    color: "white"
                                }}><i className="fa fa-star" style={{fontSize: "20px"}}></i></button>
                            </div>
                        </div>
                        <h4 style={{margin: "0"}}>Contact</h4>
                        <div style={{borderBottom: "1px solid #bbbbbb", paddingBottom: "20px"}}>
                            <p>{this.props.detail.contact.phone}</p>
                            <p>{this.props.detail.contact.email}</p>
                            <p>{this.props.detail.contact.site}</p>
                        </div>
                    </div>
                </div>
                <div className="row d-sm-block d-md-none">
                    <div className="col-12">
                        <Link to="/business/home" className="btn bg-blue w-100 mt-3" style={{color: "white", fontSize: "20px", fontWeight: "700"}}>Submit</Link>
                        <Link to="/business/home" className="btn bg-blue w-100 mt-3" style={{color: "white", fontSize: "20px", fontWeight: "700"}}>Back</Link>
                    </div>
                </div>
            </div>
        );
    }
}
const mapStateToProps = state => ({
    ...state.detail
});

const mapDispatchToProps = dispatch => ({
    onLoad: () => dispatch({ type: BUSINESS_MODE }),
});
export default connect(mapStateToProps, mapDispatchToProps)(Preview);