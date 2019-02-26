var request = require('request');
var gitlab_private_token = process.env.token;


module.exports = {
    // cstor_pipeline:function() {
    //     var cstor = {  
    //         url: 'https://gitlab.openebs100.io/api/v4/projects/26/pipelines?ref=master',
    //         headers: {'PRIVATE-TOKEN': gitlab_private_token}
    //     };
    //     return new Promise(function(resolve, reject){
    //         request(cstor, function(err, response, body) {
    //             if (err  || response.statusCode != 200) {
    //                 reject(err);
    //             } else {
    //                 body = JSON.parse(body);
    //                 resolve(body);
    //             }
    //         });
    //     });
    // },
    // cstor_jobs:function(id) {
    //     var cstor_job = {  
    //         url: "https://gitlab.openebs100.io/api/v4/projects/26/pipelines/+"+id+"/jobs?per_page=50",
    //         headers: {'PRIVATE-TOKEN': gitlab_private_token}
    //     };
    //     return new Promise(function(resolve, reject){
    //         request(cstor_job, function(err, response, body) {
    //             if (err  || response.statusCode != 200) {
    //                 reject(err);
    //             } else {
    //                 body = JSON.parse(body);
    //                 resolve(body);
    //             }
    //         });
    //     });
    // },

    maya_pipeline:function() {
        var maya = {
            url: "https://gitlab.openebs100.io/api/v4/projects/7/pipelines?ref=master",
            headers: {'PRIVATE-TOKEN': gitlab_private_token}
        };
        return new Promise(function(resolve, reject){
            request(maya, function(err, response, body) {
                if (err  || response.statusCode != 200) {
                    reject(err);
                } else {
                    data = JSON.parse(body)
                    // if(data != "") {
                        resolve(data);
                    // }
                }
            });
        });
    },

    maya_jobs:function(id) {
        var maya_job = {
            url: "https://gitlab.openebs100.io/api/v4/projects/7/pipelines/+"+id+"/jobs?per_page=50",
            headers: {'PRIVATE-TOKEN': gitlab_private_token}
        };
        return new Promise(function(resolve, reject){
            request(maya_job, function(err, response, body) {
                if (err  || response.statusCode != 200) {
                    reject(err);
                } else {
                    data = JSON.parse(body)
                    // if(data != "") {
                        resolve(data);
                    // }
                }
            });
        });
    },

    jiva_pipeline:function() {
        var jiva = {
            url: "https://gitlab.openebs100.io/api/v4/projects/6/pipelines?ref=master",
            headers: {'PRIVATE-TOKEN': gitlab_private_token}
        };
        return new Promise(function(resolve, reject){
            request(jiva, function(err, response, body) {
                if (err  || response.statusCode != 200) {
                    reject(err);
                } else {
                    data = JSON.parse(body)
                    // if(data != "") {
                        resolve(data);
                    // }
                }
            });
        });
    },
    jiva_jobs:function(id) {
        var jiva = {
            url: "https://gitlab.openebs100.io/api/v4/projects/6/pipelines/+"+id+"/jobs?per_page=50",
            headers: {'PRIVATE-TOKEN': gitlab_private_token}
        };
        return new Promise(function(resolve, reject){
            request(jiva, function(err, response, body) {
                if (err  || response.statusCode != 200) {
                    reject(err);
                } else {
                    data = JSON.parse(body)
                    // if(data != "") {
                        resolve(data);
                    // }
                }
            });
        });
    },
};