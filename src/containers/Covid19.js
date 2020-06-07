import React from 'react';
import {MDBCol, MDBContainer, MDBRow} from "mdbreact";

import {fetchData, fetchDailyData} from "../api";

import UpdateCard from "../components/Card/Card";
import Chart from "../components/Chart/Chart";
import WorldMap from "../components/WorldMap/WorldMap";

class Covid19 extends React.Component {

    state = {
        country: '',
        summary: {},
        change: {},
        regions: {},
        dailyData: {}
    };

    async componentDidMount() {
        const data = await fetchData();
        const dailyData = await fetchDailyData();
        this.setState({
            change: data.change,
            summary: data.summary,
            regions: data.regions,
            dailyData: dailyData
        });
    }

    render() {
        return (
            <MDBContainer fluid>
                <br/><br/>
                <MDBRow className="pt-4">
                    {/* Covid Summary */}
                    <MDBCol md="6" sm="12">
                        <MDBRow>
                            <div className="col-12 col-md-6 pb-3">
                                <UpdateCard
                                    title="Total cases"
                                    value={this.state.summary.total_cases ? this.state.summary.total_cases.toLocaleString() : null}
                                    icon="fa fa-users"
                                    background="red" />
                            </div>

                            <div className="col-12 col-md-6 pb-3">
                                <UpdateCard
                                    title="Active cases"
                                    value={this.state.summary.active_cases ? this.state.summary.active_cases.toLocaleString() : null}
                                    icon="fa fa-exclamation-triangle"
                                    background="yellow" />
                            </div>

                            <div className="col-12 col-md-6 pb-3">
                                <UpdateCard
                                    title="Recovered"
                                    value={this.state.summary.recovered ? this.state.summary.recovered.toLocaleString() : null}
                                    icon="fa fa-child"
                                    background="green" />
                            </div>

                            <div className="col-12 col-md-6 pb-3">
                                <UpdateCard
                                    title="Deceased"
                                    value={this.state.summary.deaths ? this.state.summary.deaths.toLocaleString() : null}
                                    icon="fa fa-heart-broken"
                                    background="grey" />
                            </div>

                            <div className="col-12 col-md-6 pb-3">
                                <UpdateCard
                                    title="Tested"
                                    value={this.state.summary.tested ? this.state.summary.tested.toLocaleString() : null}
                                    icon="fa fa-vial"
                                    background="blue" />
                            </div>

                            <div className="col-12 col-md-6 pb-3">
                                <UpdateCard
                                    title="Critical"
                                    value={this.state.summary.critical ? this.state.summary.critical.toLocaleString() : null}
                                    icon="fa fa-procedures"
                                    background="pink" />
                            </div>
                        </MDBRow>
                        <MDBRow>
                            <MDBCol md="6" sm="12">
                                <div className="pb-3">
                                    <UpdateCard
                                        title="Today cases"
                                        value={this.state.change.total_cases ? this.state.change.total_cases.toLocaleString() : null}
                                        icon="fa fa-users"
                                        background="red" />
                                </div>

                                <div className="pb-3">
                                <UpdateCard
                                    title="Today recovered"
                                    value={this.state.change.recovered ? this.state.change.recovered.toLocaleString()  : null}
                                    icon="fa fa-child"
                                    background="green" />
                                </div>

                                <div className="pb-3">
                                <UpdateCard
                                    title="Today deceased"
                                    value={this.state.change.deaths ? this.state.change.deaths.toLocaleString()  : null}
                                    icon="fa fa-heart-broken"
                                    background="grey" />
                                </div>
                            </MDBCol>
                            <MDBCol md="6" sm="12" className="pb-3">
                                <UpdateCard>
                                    <Chart dailyData={this.state.dailyData}/>
                                </UpdateCard>
                            </MDBCol>
                        </MDBRow>
                    </MDBCol>
                    {/* Covid Summary */}

                    {/* Covid Map */}
                    <MDBCol md="6" sm="12">
                        <WorldMap summary={this.state.summary} regions={this.state.regions} />
                    </MDBCol>
                    {/* Covid Map */}
                </MDBRow>
            </MDBContainer>
        )
    }
}


export default Covid19;