import axios from 'axios';

//const url = 'https://covid19.mathdro.id/api';
const url = "https://api.quarantine.country/api/v1/summary/latest";
const url_summary = "https://api.quarantine.country/api/v1/spots/summary";

export const fetchData = async (country) => {
    //let newUrl = country ? `${url}/countries/${country}` : url;
    try {
        const {data: {data}} = await axios.get(url);

        return data;
    } catch (e) {
        return e;
    }
};

export const fetchDailyData = async () => {
    try {
        //destructuring the data object from the url response.data
        const {data: {data}} = await axios.get(url_summary);

        //console.log(data);

        const modifiedResponse = Object.keys(data).map((key) => ({
            date: key,
            total_cases: data[key].total_cases,
            active_cases: data[key].active_cases,
            deaths: data[key].deaths,
            recovered: data[key].recovered

        }));

        //console.log(modifiedResponse.slice(0).reverse());
        return modifiedResponse.slice(0).reverse();

    } catch (e) {
        return e;
    }
};