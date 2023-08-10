
// https://ap-south-1.aws.data.mongodb-api.com/app/data-gitlv/endpoint/data/v1

// EQLgBEreWKotGINSf1FcTErqkcR9A3FR9KDJVuktIn3CcwjMDid7a5pwTRdJixDJ

var axios = require('axios');
var data = JSON.stringify({
    "collection": "rooms",
    "database": "test",
    "dataSource": "Cluster0",
    "projection": {
        "_id": 1
    }
});
            
var config = {
    method: 'post',
    url: 'https://ap-south-1.aws.data.mongodb-api.com/app/data-gitlv/endpoint/data/v1/action/insertOne',
    headers: {
      'Content-Type': 'application/json',
      'Access-Control-Request-Headers': '*',
      'api-key': 'EQLgBEreWKotGINSf1FcTErqkcR9A3FR9KDJVuktIn3CcwjMDid7a5pwTRdJixDJ',
    },
    data: data
};
            
axios(config , document:{})
    .then(function (response:any) {
        console.log(JSON.stringify(response.data));
    })
    .catch(function (error:any) {
        console.log(error);
    });
