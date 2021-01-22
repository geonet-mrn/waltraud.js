import { expect } from "chai";
import * as fs from 'fs'
import {WmsCapabilities} from '../src/WmsCapabilities'

describe('waltraud-tests', function () {
    
    it('works', function () {

        // Read WMS 1.3.0 capabilities string from file:
        let capsString = fs.readFileSync("test-resources/wms-130-capabilities.xml").toString()
       
        let caps = new WmsCapabilities(capsString)      

        expect(caps.getVersion()).equal("1.3.0")

        caps.getBoundingBox()
    });
});