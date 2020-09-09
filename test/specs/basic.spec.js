const ParkingPage = require('../pageobjects/parking.page');



describe('Basic elements interact', () => {
    it('should allow interact with the elements', () => {
        ParkingPage.open();
        console.log(ParkingPage.buttonCalculate().getTagName());
        console.log(ParkingPage.comboBoxParkingLot().getTagName());
        console.log(ParkingPage.estimatedParkingCost().getTagName());
        console.log(ParkingPage.estimatedParkingTime().getTagName());
        console.log(ParkingPage.inputLeavingDate().getTagName());
        console.log(ParkingPage.inputLeavingTime().getTagName());
        console.log(ParkingPage.inputStartingDate().getTagName());
        console.log(ParkingPage.inputStartingTime().getTagName());
        console.log(ParkingPage.radioButtonLeavingAM().getTagName());
        console.log(ParkingPage.radioButtonLeavingPM().getTagName());
        console.log(ParkingPage.radioButtonStartingAM().getTagName());
        console.log(ParkingPage.radioButtonStartingPM().getTagName());


    });
});