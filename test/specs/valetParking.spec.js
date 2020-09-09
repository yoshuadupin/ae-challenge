const ParkingPage = require('../pageobjects/parking.page');
const { start } = require('chromedriver');
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
    //TODO: test de debe mantenerse en el mismo estado  
    xit('should calculate cost of less five hour Valet Parking', () => {
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
        const expectDateStart = new Date(2020, 9, 10, 6, 30, 0);
        const expectDateLeave = new Date(2020, 9, 10, 10, 0, 0);
        const expectTimeInMinutes = (expectDateLeave - expectDateStart) / (1000 * 60);

        ParkingPage.comboBoxParkingLot().$(`//option[${parkingLot.VALETPARKING}]`).click();
        ParkingPage.inputStartingDate().setValue('10/9/2020');
        ParkingPage.inputLeavingDate().setValue('10/9/2020');

        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();

        ParkingPage.inputStartingTime().setValue(`6:30`);
        ParkingPage.inputLeavingTime().setValue(`10:00`);

        ParkingPage.buttonCalculate().click();

        const actualTime = ParkingPage.estimatedParkingTime().getText();
        console.log(actualTime.match(/\d+/g));

        const actualDay = actualTime[0];
        const actualHour = actualTime[1]
        const actualMin = actualTime[2]

        const expectDay = Math.floor(expectTimeInMinutes / (60 * 24));
        const expectHour = Math.floor(expectTimeInMinutes / 60);

        //console.log(expectDay)
        //console.log(expectHour)
        //console.log(expectTimeInMinutes % 60)

        expect(`${expectDay}`).toEqual(actualDay);
        expect(`${expectHour}`).toEqual(actualHour);
        expect(`${expectTimeInMinutes}`).toEqual(actualMin);



    });


});