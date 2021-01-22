import * as xmljs from 'xml-js'
import { getElementsByTagName, getFirstElementByTagName } from './xmlUtil'

export class WmsCapabilities {

    document!: any

    constructor(private xmlString: string) {

        this.document = JSON.parse(xmljs.xml2json(xmlString))
    }


    getBoundingBox(): any {

        // NOTE: This works only with the capabilities document of a single layer


        // TODO: Find out how exactly the bounding box which is return here is defined.
        // Is it  the total min/max coordinates of all layers?
        let elem_bbox = getFirstElementByTagName(this.document.elements[0].elements[1].elements[2], "EX_GeographicBoundingBox")

        if (elem_bbox == null) {
            return null
        }

        // TODO: 3 Properly check for null here
        let west_string = getFirstElementByTagName(elem_bbox, "westBoundLongitude")!.elements[0].text
        let east_string = getFirstElementByTagName(elem_bbox, "eastBoundLongitude")!.elements[0].text
        let south_string = getFirstElementByTagName(elem_bbox, "southBoundLatitude")!.elements[0].text
        let north_string = getFirstElementByTagName(elem_bbox, "northBoundLatitude")!.elements[0].text


        let bbox = [parseFloat(west_string), parseFloat(south_string), parseFloat(east_string), parseFloat(north_string)]

        return bbox

    }


    getVersion(): string {
        return this.document.elements[0].attributes.version
    }
}