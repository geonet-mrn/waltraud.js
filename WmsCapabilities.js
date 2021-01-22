"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsCapabilities = void 0;
const xmljs = require("xml-js");
const xmlUtil_1 = require("./xmlUtil");
class WmsCapabilities {
    constructor(xmlString) {
        this.xmlString = xmlString;
        this.document = JSON.parse(xmljs.xml2json(xmlString));
    }
    getBoundingBox() {
        // NOTE: This works only with the capabilities document of a single layer
        // TODO: Find out how exactly the bounding box which is return here is defined.
        // Is it  the total min/max coordinates of all layers?
        let elem_bbox = xmlUtil_1.getFirstElementByTagName(this.document.elements[0].elements[1].elements[2], "EX_GeographicBoundingBox");
        if (elem_bbox == null) {
            return null;
        }
        // TODO: 3 Properly check for null here
        let west_string = xmlUtil_1.getFirstElementByTagName(elem_bbox, "westBoundLongitude").elements[0].text;
        let east_string = xmlUtil_1.getFirstElementByTagName(elem_bbox, "eastBoundLongitude").elements[0].text;
        let south_string = xmlUtil_1.getFirstElementByTagName(elem_bbox, "southBoundLatitude").elements[0].text;
        let north_string = xmlUtil_1.getFirstElementByTagName(elem_bbox, "northBoundLatitude").elements[0].text;
        let bbox = [parseFloat(west_string), parseFloat(south_string), parseFloat(east_string), parseFloat(north_string)];
        return bbox;
    }
    getVersion() {
        return this.document.elements[0].attributes.version;
    }
}
exports.WmsCapabilities = WmsCapabilities;
