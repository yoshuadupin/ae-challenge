const ParkingPage = require('../pageobjects/parking.page');


const parkingLot = {VALETPARKING:1 , SHORTTERM:2 , ECONOMY:3 , LONGTEMGARAGE:4 , LONGTEMSURFAC:5};



describe('Basic elements interact', () => {
    before(() => {
        ParkingPage.open();
    })
    // DONE
    it('should allow make a simple calculate', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/9/2020');
        ParkingPage.inputStartingTime().setValue('10:00');
        ParkingPage.radioButtonStartingPM().click()
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingTime().setValue('11:00');
        ParkingPage.radioButtonLeavingPM().click()
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.estimatedParkingCost()).toBeDisplayed();
        expect(ParkingPage.estimatedParkingTime()).toBeDisplayed();
    });

});