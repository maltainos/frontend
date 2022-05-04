export interface HttpTrace{

    traces : [
        {
            timestamp : Date;
            principal : any;
            session : any;
            request : {
                method : string;
                uri : string;
                headers : {
                    secFetchMode : string[];
                    secFetchSite : string[];
                    acceptLanguage : string[];
                    secFetchUser : string[],
                    accept : string[],
                    secChUa : string[],
                    secChUaMobile : string[],
                    secChUaPlatform : [],
                    host : string[],
                    upgradeInsecureRequests : string[],
                    connection : string[],
                    acceptEncoding : string[],
                    userAgent : string[],
                    secFetchSest : []
                },
                remoteAddress : any
            },
            response : {
                status : number,
                headers : {
                    xFrameOptions : string[],
                    transferEncoding : string[],
                    keepLive : string[],
                    xContentTypeOptions : string[],
                    connection : string[],
                    vary : string[],
                    pragma : string[],
                    expires : string[],
                    xXSSProtection : string[],
                    date : Date[],
                    contentType : string[]
                }
            }
            timeTaken : number
        }
    ]
}
