const ParkingPage = require('../pageobjects/parking.page');


describe('Basic elements interact', () => {
    before(() => {
        ParkingPage.open();
        browser.pause(3000);
    })

    it('should allow interact with the elements', () => {
        const optionParkingRate = ParkingPage.comboBoxParkingLot().$('option').getText();
        console.log(optionParkingRate)

    });
});