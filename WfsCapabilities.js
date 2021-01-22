"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WfsCapabilities = void 0;
const xmljs = require("xml-js");
const xmlUtil_1 = require("./xmlUtil");
class WfsCapabilities {
    constructor(xmlString) {
        this.xmlString = xmlString;
        this.document = JSON.parse(xmljs.xml2json(xmlString));
    }
    getBoundingBox() {
        // NOTE: This works only with the capabilities document of a single layer
        // TODO: Find out how exactly the bounding box which is return here is defined.
        // Is it  the total min/max coordinates of all layers?
        let elems_featureTypeList = xmlUtil_1.getElementsByTagName(this.document.elements[0].elements[3], "FeatureType");
        for (let elem_featureTypeList of elems_featureTypeList) {
            let elem_bbox = xmlUtil_1.getFirstElementByTagName(elem_featureTypeList, "ows:WGS84BoundingBox");
            if (elem_bbox == null) {
                continue;
            }
            let elem_lowerCorner = xmlUtil_1.getFirstElementByTagName(elem_bbox, "ows:LowerCorner");
            let lowerCorner_string = elem_lowerCorner.elements[0].text;
            let elem_upperCorner = xmlUtil_1.getFirstElementByTagName(elem_bbox, "ows:UpperCorner");
            let upperCorner_string = elem_upperCorner.elements[0].text;
            let lowerCorner = lowerCorner_string.split(" ");
            let upperCorner = upperCorner_string.split(" ");
            let result = [parseFloat(lowerCorner[0]), parseFloat(lowerCorner[1]), parseFloat(upperCorner[0]), parseFloat(upperCorner[1])];
            return result;
        }
        //  let bbox = [parseFloat(west_string), parseFloat(south_string), parseFloat(east_string), parseFloat(north_string)]
        let bbox = null;
        return bbox;
    }
    getVersion() {
        return this.document.elements[0].attributes.version;
    }
}
exports.WfsCapabilities = WfsCapabilities;
