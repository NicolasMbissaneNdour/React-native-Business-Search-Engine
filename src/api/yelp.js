import axios from "axios";

export default axios.create({
  baseURL: 'https://api.yelp.com/v3/businesses',
  headers: {
    Authorization: 'Bearer Gt8VuH_jtJd3I3yHxvA7aF-Irao9OGyZe35xvkE4pr81sg1GkrMKka7SEspiBSaUACPjn_F3CH49eGE5ShsU49tjf4l_lEdclvRL9oDkWUdm0AbgaozwgEfbaRA2YXYx'
  }
});