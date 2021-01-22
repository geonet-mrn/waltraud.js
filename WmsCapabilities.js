"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.WmsCapabilities = void 0;
const xmljs = require("xml-js");
class WmsCapabilities {
    constructor(xmlString) {
        this.xmlString = xmlString;
        this.document = JSON.parse(xmljs.xml2json(xmlString));
    }
    getElementsByTagname(parent, tagName) {
        if (parent == undefined || parent.elements == undefined || parent.elements.length == 0) {
            return null;
        }
        let result = [];
        for (let element of parent.elements) {
            if (element.type == "element" && element.name == tagName) {
                result.push(element);
            }
        }
        return result;
    }
    getBoundingBox() {
        // TODO: Find out how exactly the bounding box which is return here is defined.
        // Is it  the total min/max coordinates of all layers?
        let elems_bbox = this.getElementsByTagname(this.document.elements[0].elements[1].elements[2], "EX_GeographicBoundingBox");
        if (elems_bbox == null) {
            return null;
        }
        let elem_bbox = elems_bbox[0];
        // TODO: 3 Properly check for null here
        let west_string = this.getElementsByTagname(elem_bbox, "westBoundLongitude")[0].elements[0].text;
        let east_string = this.getElementsByTagname(elem_bbox, "eastBoundLongitude")[0].elements[0].text;
        let south_string = this.getElementsByTagname(elem_bbox, "southBoundLatitude")[0].elements[0].text;
        let north_string = this.getElementsByTagname(elem_bbox, "northBoundLatitude")[0].elements[0].text;
        let bbox = [parseFloat(west_string), parseFloat(south_string), parseFloat(east_string), parseFloat(north_string)];
        return bbox;
    }
    getVersion() {
        return this.document.elements[0].attributes.version;
    }
}
exports.WmsCapabilities = WmsCapabilities;
