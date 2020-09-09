const ParkingPage = require('../pageobjects/parking.page');
const VALETPARKING = 1;
const SHORTTERM = 2;
const ECONOMY = 3;
const LONGTEMGARAGE = 4;
const LONGTEMSURFACE = 5;



describe('Basic elements interact', () => {
    before(() => {
        ParkingPage.open();
        //browser.pause(3000);
    })

    it('should allow make a simple calculate with Valet Parking', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${VALETPARKING}]`).click();
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
        browser.pause(3000);
        expect(ParkingPage.estimatedParkingCost()).toBeDisplayed();
        expect(ParkingPage.estimatedParkingTime()).toBeDisplayed();
        browser.deleteCookies();
        browser.pause(2000);
    });

    it('should allow make Valet Parking calculate', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${VALETPARKING}]`).click();
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
        browser.pause(3000);
        expect(ParkingPage.estimatedParkingCost()).toBeDisplayed();
        expect(ParkingPage.estimatedParkingTime()).toBeDisplayed();
        browser.deleteCookies();
        browser.pause(2000);
    });

});