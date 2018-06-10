import axios from 'axios';

export function getPondTemps() {
    const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
    };
    // return axios.get('api/temps', config)
    //     .then((response) => {
    //         this.setState({
    //             chartData: {
    //                 labels: response.data.map((temps) => {
    //                     let tempDate = (temps.tzts);
    //                     return tempDate;
    //                 }),
    //                 datasets: [
    //                     {
    //                         label: 'Pond Temps',
    //                         data: response.data.map(temps => temps.temp),
    //                         backgroundColor: 'rgba(230, 126, 34, 0.6)'
    //                     }
    //                 ]
    //             }
    //         });
    //     })
    //     // .then(response => response.data)
    //     .catch((error) => { throw error; });

}

