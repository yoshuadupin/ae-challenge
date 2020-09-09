const ParkingPage = require('../pageobjects/parking.page');


const parkingLot = {
    VALETPARKING: 1
    , SHORTTERM: 2
    , ECONOMY: 3
    , LONGTEMGARAGE: 4
    , LONGTEMSURFAC: 5
};

describe('Valet Parking Test', () => {
    before(() => {
        ParkingPage.open();
    })
    // DONE

    it('should allow make different rate Valet Parking', () => {
        const startHour = 1;
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingDate().setValue('9/9/2020');



        ParkingPage.inputStartingTime().setValue(`${startHour}:00`);
        ParkingPage.inputLeavingTime().setValue(`${startHour+5}:00`);


        ParkingPage.buttonCalculate().click();
        browser.pause(3000);
        expect(ParkingPage.estimatedParkingCost()).toBeDisplayed();
        expect(ParkingPage.estimatedParkingTime()).toBeDisplayed();
        browser.deleteCookies();
        browser.pause(2000);
    });

});