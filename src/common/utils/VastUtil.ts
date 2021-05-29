var XMLParser = require('react-xml-parser');
var parser = require('fast-xml-parser');
export interface IVast{
    "impression":{
        value:string,
        fetched?:boolean
    }[],
    "tracking":{
        value:string,
        attributes: {event: "complete"|"firstQuartile"|"midpoint"|"thirdQuartile"}
        fetched?:boolean
    }[],
    "mediaFile":{
        value:string,
        attributes:{
            bitrate: string
            delivery: string
            height: string
            maintainAspectRatio:string
            scalable: string
            type: "video/mp4"
            width: string
        }
    },
    duration:string
}
export enum TrackingEvent{
    COMPLETE="complete",
    MIDPOINT="midpoint",
    FIRSTQUARTILE="firstQuartile",
    THIRDQUARTILE="thirdQuartile"
}
export  function parseVastUrl(url:string): Promise<IVast|undefined>|undefined{
    
    return fetch(url)
    .then(response => response.text())
    .then(text => {
        if(parser.validate(text)!==true){
            return
        }
        var xml = new XMLParser().parseFromString(text);   
       
        const version=xml.attributes.version
        var child:any
        child=xml.children[0].children[0]
        if(child.name==="Wrapper"){
            var he = require('he');
            var options = {
                attributeNamePrefix : "@_",
                attrNodeName: "attr", 
                textNodeName : "#text",
                ignoreAttributes : true,
                ignoreNameSpace : false,
                allowBooleanAttributes : false,
                parseNodeValue : true,
                parseAttributeValue : false,
                trimValues: true,
                cdataTagName: "__cdata",
                cdataPositionChar: "\\c",
                parseTrueNumberOnly: false,
                arrayMode: false, 
                attrValueProcessor: (val:any) => he.decode(val, {isAttributeValue: true}),
                tagValueProcessor : (val:any, tagName:any) => he.decode(val), 
                stopNodes: ["parse-me-as-string"]
            };
            
            if( parser.validate(text) === true) { 
                var wrapper = parser.parse(text,options);
                let url=wrapper.VAST.Ad.Wrapper.VASTAdTagURI.__cdata
                return parseVastUrl(url)
            }
        }
        else{
            let impression=xml.getElementsByTagName('Impression')
            let tracking=xml.getElementsByTagName('Tracking')
            let mediaFiles:{
                value:string,
                attributes:{
                    bitrate: string
                    delivery: string
                    height: string
                    maintainAspectRatio:string
                    scalable: string
                    type: "video/mp4"
                    width: string
                }
            }[]=xml.getElementsByTagName('MediaFile')
            let mediaFile=mediaFiles.filter((index)=>(index.attributes.type==="video/mp4"))[0]
            mediaFile.value= mediaFile.value.split("mp4")[0]+"mp4"
            let duration=xml.getElementsByTagName("Duration")[0].value
            let data={"impression":impression,"tracking":tracking,"mediaFile":mediaFile,"duration":duration}
           return data
        }
       
    });
   
}


export  function parseVastXml(text:string): IVast|any{
        if(parser.validate(text)!==true){
            return
        }
        var xml = new XMLParser().parseFromString(text);    
        var child:any
        child=xml.children[0].children[0]
        if(child.name==="Wrapper"){
            var he = require('he');
            var options = {
                attributeNamePrefix : "@_",
                attrNodeName: "attr", 
                textNodeName : "#text",
                ignoreAttributes : true,
                ignoreNameSpace : false,
                allowBooleanAttributes : false,
                parseNodeValue : true,
                parseAttributeValue : false,
                trimValues: true,
                cdataTagName: "__cdata",
                cdataPositionChar: "\\c",
                parseTrueNumberOnly: false,
                arrayMode: false, 
                attrValueProcessor: (val:any) => he.decode(val, {isAttributeValue: true}),
                tagValueProcessor : (val:any, tagName:any) => he.decode(val), 
                stopNodes: ["parse-me-as-string"]
            };
            
            if( parser.validate(text) === true) { 
                var wrapper = parser.parse(text,options);
                let url=wrapper.VAST.Ad.Wrapper.VASTAdTagURI.__cdata
                return parseVastUrl(url)
            }
        }
        else{
            let impression=xml.getElementsByTagName('Impression')
            let tracking=xml.getElementsByTagName('Tracking')
            let mediaFiles:{
                value:string,
                attributes:{
                    bitrate: string
                    delivery: string
                    height: string
                    maintainAspectRatio:string
                    scalable: string
                    type: "video/mp4"
                    width: string
                }
            }[]=xml.getElementsByTagName('MediaFile')
            let mediaFile=mediaFiles.filter((index)=>(index.attributes.type==="video/mp4"))[0]
            mediaFile.value= mediaFile.value.split("mp4")[0]+"mp4"
            let duration=xml.getElementsByTagName("Duration")[0].value
            let data={"impression":impression,"tracking":tracking,"mediaFile":mediaFile,"duration":duration}
            return data
        }
   
}


