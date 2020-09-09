const ParkingPage = require('../pageobjects/parking.page');
const parkingLot = {
    VALETPARKING: 1
    , SHORTTERM: 2
    , ECONOMY: 3
    , LONGTEMGARAGE: 4
    , LONGTEMSURFAC: 5
};
let calculateDays =(startDate , endDate)=> {
    return startDate.getDay() - endDate.getDay();
}

describe('Valet Parking Test', () => {
    before(() => {
        ParkingPage.open();
    })
    // DONE
    //TODO: test de debe mantenerse en el mismo estado  
    it('should calculate cost of less five hour Valet Parking', () => {
        const inputStartHour = 10;
        const expectCost = "$ 12.00";

        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingDate().setValue('9/9/2020');

        for (let i = 1; i <= 5; i++) {
            ParkingPage.inputStartingTime().setValue(`${inputStartHour}:00`);
            ParkingPage.inputLeavingTime().setValue(`${(inputStartHour + i) % 12}:00`);

            ParkingPage.radioButtonLeavingAM().click();

            if (inputStartHour + i >= 12) {
                ParkingPage.radioButtonLeavingPM().click();
            }

            ParkingPage.buttonCalculate().click();
            expect(ParkingPage.estimatedParkingCost()).toBeDisplayed();
            expect(ParkingPage.estimatedParkingTime()).toBeDisplayed();
            const actualCost = ParkingPage.estimatedParkingCost().getText();
            // const actualTime = ParkingPage.estimatedParkingTime().getText();
            //   console.log(actualTime.match(/\d+/g));

            expect(actualCost).toEqual(expectCost);
        }


        for (let i = 1; i <= 5; i++) {
            ParkingPage.inputStartingTime().setValue(`${inputStartHour}:00`);
            ParkingPage.inputLeavingTime().setValue(`${(inputStartHour + i) % 12}:00`);

            ParkingPage.radioButtonLeavingPM().click();
            ParkingPage.radioButtonStartingPM().click();


            if (inputStartHour + i >= 12) {
                ParkingPage.radioButtonLeavingAM().click();
                ParkingPage.inputLeavingDate().setValue('9/10/2020');
            }

            ParkingPage.buttonCalculate().click();
            expect(ParkingPage.estimatedParkingCost()).toBeDisplayed();
            expect(ParkingPage.estimatedParkingTime()).toBeDisplayed();
            const actualCost = ParkingPage.estimatedParkingCost().getText();
            expect(actualCost).toEqual(expectCost);
        }

    });

    it('should calculate time of less five hour Valet Parking', () => {
        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('9/9/2020');
        ParkingPage.inputLeavingDate().setValue('9/9/2020');

       

    });


});