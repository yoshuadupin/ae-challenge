const ParkingPage = require('../pageobjects/parking.page');
const parkingLot = {
    VALETPARKING: 1
    , SHORTTERM: 2
    , ECONOMY: 3
    , LONGTEMGARAGE: 4
    , LONGTEMSURFACE: 5
}


describe('Basic elements interact', () => {
    before(() => {
        ParkingPage.open();
        //browser.pause(3000);
    })

    it('should allow make a simple calculate', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/9/2020');
        ParkingPage.inputStartingTime().setValue('10:00');
        ParkingPage.radioButtonStartingPM().click()
        browser.pause(1000);
        ParkingPage.radioButtonStartingAM().click();
        browser.pause(1000);
        ParkingPage.inputLeavingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingTime().setValue('11:00');
        ParkingPage.radioButtonLeavingPM().click()
        browser.pause(1000);
        ParkingPage.radioButtonLeavingAM().click();
        browser.pause(1000);
        ParkingPage.buttonCalculate().click();
        browser.pause(4000);
    });
});