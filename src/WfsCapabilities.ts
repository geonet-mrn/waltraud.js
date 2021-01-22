import * as xmljs from 'xml-js'
import { getElementsByTagName, getFirstElementByTagName } from './xmlUtil'

export class WfsCapabilities {

    document!: any

    constructor(private xmlString: string) {
        this.document = JSON.parse(xmljs.xml2json(xmlString))
    }



    getBoundingBox(): any {

        // NOTE: This works only with the capabilities document of a single layer


        // TODO: Find out how exactly the bounding box which is return here is defined.
        // Is it  the total min/max coordinates of all layers?
        let elems_featureTypeList = getElementsByTagName(this.document.elements[0].elements[3], "FeatureType")

        for (let elem_featureTypeList of elems_featureTypeList) {

            let elem_bbox = getFirstElementByTagName(elem_featureTypeList, "ows:WGS84BoundingBox")

            if (elem_bbox == null) {
                continue
            }

            
            let elem_lowerCorner = getFirstElementByTagName(elem_bbox, "ows:LowerCorner")
            let lowerCorner_string = elem_lowerCorner.elements[0].text as string

            let elem_upperCorner = getFirstElementByTagName(elem_bbox, "ows:UpperCorner")
            let upperCorner_string = elem_upperCorner.elements[0].text as string

            
            let lowerCorner = lowerCorner_string.split(" ")
            let upperCorner = upperCorner_string.split(" ")


            let result = [parseFloat(lowerCorner[0]), parseFloat(lowerCorner[1]), parseFloat(upperCorner[0]),parseFloat(upperCorner[1])]

            return result
        }

        //  let bbox = [parseFloat(west_string), parseFloat(south_string), parseFloat(east_string), parseFloat(north_string)]
        let bbox = null
        return bbox

    }


    getVersion(): string {
        return this.document.elements[0].attributes.version
    }
}