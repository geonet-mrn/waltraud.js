import { expect } from "chai";
import * as fs from 'fs'
import { WmsCapabilities } from '../src/WmsCapabilities'
import { WfsCapabilities } from '../src/WfsCapabilities'

describe('WmsCapabilities', function () {

   describe('#getBoundingBox()', function () {

        it('should return the bounding box', function () {

            // Read WMS 1.3.0 capabilities string from file:
            let capsString = fs.readFileSync("test-resources/wms-130-capabilities.xml").toString()

            let caps = new WmsCapabilities(capsString)
           
            expect(JSON.stringify(caps.getBoundingBox())).equals("[7.55770778015359,47.5539293646838,10.2894888860614,49.56687574910429]")
        });
    });


    describe('#getVersion()', function () {

        it('should return the WMS version', function () {

            // Read WMS 1.3.0 capabilities string from file:
            let capsString = fs.readFileSync("test-resources/wms-130-capabilities.xml").toString()

            let caps = new WmsCapabilities(capsString)

            expect(caps.getVersion()).equal("1.3.0")

            caps.getBoundingBox()
        });
    });
});


describe('WfsCapabilities', function () {

    describe('#getBoundingBox()', function () {

        it('should return the bounding box', function () {

            // Read WMS 1.3.0 capabilities string from file:
            let capsString = fs.readFileSync("test-resources/wfs-200-capabilities.xml").toString()

            let caps = new WfsCapabilities(capsString)
           
            expect(JSON.stringify(caps.getBoundingBox())).equals("[7.55770778015359,47.5539293646838,10.2894888860614,49.56687574910429]")
        });
    });


    describe('#getVersion()', function () {

        it('should return the WFS version', function () {

            // Read WFS 2.0.0 capabilities string from file:
            let capsString = fs.readFileSync("test-resources/wfs-200-capabilities.xml").toString()

          
            let caps = new WfsCapabilities(capsString)

            fs.writeFileSync("wfs.json", JSON.stringify(caps.document))


            expect(caps.getVersion()).equal("2.0.0")

            caps.getBoundingBox()
        });
    });
});
