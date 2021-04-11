import React, { Component } from "react";
import SeriesList from "../../components/SeriesList";
import Loader from "../../components/Loader";
import Intro from "../../components/Intro";


class Series extends Component {

    state = {
        series: [],
        seriesName: "",
        isFetching: false
    }

    onChangeListItem = (e) => {
        this.setState({seriesName: e.target.value, isFetching: true})

        fetch(`http://api.tvmaze.com/search/shows?q=${e.target.value}`)
        .then(response => response.json())
        .then(json => this.setState({ series: json, isFetching: false }))

    }


    render() {
        const{series, seriesName, isFetching} = this.state;
        return (
            <div>
                <Intro message="Here you can find your loved series"/>
             <div>
                 <input value={seriesName} type="text" onChange={this.onChangeListItem}/>
             </div>
             {
              series.length === 0 && seriesName.trim() === ''
              &&
              <p>please enter series name </p>
             }
             {
                 series.length === 0 && seriesName.trim() !== ''
                 &&
                 <p>No Tv series have been found with name</p>
             }
             {
                 isFetching && <Loader />
             }
             {
                 isFetching && <SeriesList list={this.state.series} />
             }
             { <SeriesList list={this.state.series}/>  }
            </div>
        )
    }


}

export default Series;