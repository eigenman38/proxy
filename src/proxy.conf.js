const PROXY_CONFIG = {
    "/entries": {
        "target": "https://api.publicapis.org",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
        "cookieDomainRewrite": "localhost",
        "autoRewrite": "true",
        "protocolRewrite": "http",


        // "onProxyReq": function (proxyReq, req, res) {
        //     proxyReq.setHeader('x-added', 'foobar');
        //     proxyReq.setHeader('sec-ch-ua', 'changed');
        //     //delete proxyReq.headers['x-removed']; // remove header from response

        //     console.dir(proxyReq);
        //     console.log(`onProxyReq: req: ${JSON.stringify(req.headers)}`);
        // },

        "onProxyRes": function (proxyRes, req, res) {
            // proxyRes.headers['x-added'] = 'foobar'; 
            // proxyRes.headers['server'] = 'changed'; 
            //delete proxyRes.headers['x-removed']; // remove header from response

            // proxyRes.statusCode = 404;
            // proxyRes.statusMessage = 'Not Found'
            //console.dir(proxyRes);
            console.log(`onProxyRes: proxyRes: statusCode: ${JSON.stringify(proxyRes.statusCode)}`);
            console.log(`onProxyRes: proxyRes: headers ${JSON.stringify(proxyRes.headers)}`);
        }



    },

    "/api": {
        "target": "https://some.com",
        "secure": false,
        "changeOrigin": true,
        "logLevel": "debug",
        "cookieDomainRewrite": "localhost",
        "autoRewrite": "true",
        "protocolRewrite": "http",


        // "onProxyReq": function (proxyReq, req, res) {
        //     proxyReq.setHeader('x-added', 'foobar');
        //     proxyReq.setHeader('sec-ch-ua', 'changed');
        //     //delete proxyReq.headers['x-removed']; // remove header from response

        //     console.dir(proxyReq);
        //     console.log(`onProxyReq: req: ${JSON.stringify(req.headers)}`);
        // },

        "onProxyRes": function (proxyRes, req, res) {
            // proxyRes.headers['x-added'] = 'foobar'; 
            // proxyRes.headers['server'] = 'changed'; 
            proxyRes.headers['location'] = '/changed';
            //delete proxyRes.headers['x-removed']; // remove header from response

            // proxyRes.statusCode = 404;
            // proxyRes.statusMessage = 'Not Found'
            //console.dir(proxyRes);
            console.log(`onProxyRes: proxyRes: statusCode: ${JSON.stringify(proxyRes.statusCode)}`);
            console.log(`onProxyRes: proxyRes: headers ${JSON.stringify(proxyRes.headers)}`);
        }



    }
}


module.exports = PROXY_CONFIG;