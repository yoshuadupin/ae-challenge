const ParkingPage = require('../pageobjects/parking.page');


const parkingLot = {VALETPARKING:1 , SHORTTERM:2 , ECONOMY:3 , LONGTEMGARAGE:4 , LONGTEMSURFAC:5};



describe('Basic elements interact', () => {
    before(() => {
        ParkingPage.open();
    })
    // DONE
    xit('should throw an error if the start time is lower than leave time', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/9/2020');
        ParkingPage.inputStartingTime().setValue('10:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingTime().setValue('9:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });

    xit('should throw an error if the start date is greater than leave date', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/10/2020');
        ParkingPage.inputStartingTime().setValue('11:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingTime().setValue('11:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });

    xit('should throw an error if the start date and time is greater than leave date and time', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/10/2020');
        ParkingPage.inputStartingTime().setValue('11:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingTime().setValue('10:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });
    xit('should throw an error with a incorrect date', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('14/32/2020');
        ParkingPage.inputStartingTime().setValue('10:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('14/33/2020');
        ParkingPage.inputLeavingTime().setValue('11:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });
    xit('should throw an error with no valid input in date', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('MM/DD/DDD');
        ParkingPage.inputStartingTime().setValue('10:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('MM/DD/DD');
        ParkingPage.inputLeavingTime().setValue('11:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });

    it('should throw an error with invalid time in start time input', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/10/2020');
        ParkingPage.inputStartingTime().setValue('50:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('9/11/2020');
        ParkingPage.inputLeavingTime().setValue('12:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });

    it('should throw an error with invalid time in leave time input', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/10/2020');
        ParkingPage.inputStartingTime().setValue('12:00');
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputLeavingDate().setValue('9/11/2020');
        ParkingPage.inputLeavingTime().setValue('50:00');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.buttonCalculate().click();
        expect(ParkingPage.errorMessage()).toBeDisplayed();
    });

});