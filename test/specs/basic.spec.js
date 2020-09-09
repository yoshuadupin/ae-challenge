const ParkingPage = require('../pageobjects/parking.page');



describe('Basic elements interact', () => {
    it('should allow interact with the elements', () => {
        ParkingPage.open();
        let array  =[];
        array.push(ParkingPage.buttonCalculate().getTagName());
        array.push(ParkingPage.comboBoxParkingLot().getTagName());
       
        array.push(ParkingPage.inputLeavingDate().getTagName());
        array.push(ParkingPage.inputLeavingTime().getTagName());
        array.push(ParkingPage.inputStartingDate().getTagName());
        array.push(ParkingPage.inputStartingTime().getTagName());
        array.push(ParkingPage.radioButtonLeavingAM().getTagName());
        array.push(ParkingPage.radioButtonLeavingPM().getTagName());
        array.push(ParkingPage.radioButtonStartingAM().getTagName());
        array.push(ParkingPage.radioButtonStartingPM().getTagName());
        
        const exitCost =  ParkingPage.estimatedParkingCost().isExisting();
        const exitTime =  ParkingPage.estimatedParkingTime().isExisting();

        exitCost ? array.push(ParkingPage.estimatedParkingCost().getTagName()):console.log("No existe");
        exitTime ? array.push(ParkingPage.estimatedParkingTime().getTagName()):console.log("No existe");

        
        console.log(array)

    });
});