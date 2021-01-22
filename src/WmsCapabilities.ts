import * as xmljs from 'xml-js'

export class WmsCapabilities {

    document! : any

    constructor(private xmlString : string) {        

        this.document = JSON.parse(xmljs.xml2json(xmlString))
    }


    getElementsByTagname(parent : any, tagName : string) : Array<any> {

        let result = []

        for(let element of parent.elements) {
            if (element.type == "element" && element.name == tagName) {
                result.push(element)
            }
        }

        return result
    }
   

    getBoundingBox() : any {

        // TODO: Find out how exactly the bounding box which is return here is defined.
        // Is it  the total min/max coordinates of all layers?
        let elem_bbox = this.getElementsByTagname(this.document.elements[0].elements[1].elements[2], "EX_GeographicBoundingBox")[0]

        let west_string = this.getElementsByTagname(elem_bbox, "westBoundLongitude")[0].elements[0].text
        let east_string = this.getElementsByTagname(elem_bbox, "eastBoundLongitude")[0].elements[0].text
        let south_string = this.getElementsByTagname(elem_bbox, "southBoundLatitude")[0].elements[0].text
        let north_string = this.getElementsByTagname(elem_bbox, "northBoundLatitude")[0].elements[0].text


        let bbox = [parseFloat(west_string), parseFloat(south_string), parseFloat(east_string), parseFloat(north_string)]
       
        return bbox
    }


    getVersion() : string {
        return this.document.elements[0].attributes.version
    }
}