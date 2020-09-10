const ParkingPage = require('../pageobjects/parking.page');
const valetParking =require('../utilities').VALETPARKING;

describe('Valet Parking Functional Tests', () => {
    before(() => {
        ParkingPage.open();
    })
    // DONE
    //TODO: test de debe mantenerse en el mismo estado 
    it('should calculate cost of less five hour Valet Parking', () => {
        const inputStartHour = 10;
        const expectCost = "$ 12.00";

        ParkingPage.comboBoxParkingLot().$(`//option[${valetParking}]`).click();
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

    it('should calculate cost per day valet parking', () => {
        const inputStartDay = 9;

        ParkingPage.comboBoxParkingLot().$(`//option[${valetParking}]`).click();
        ParkingPage.inputStartingDate().setValue(`9/${inputStartDay}/2020`);
        ParkingPage.inputLeavingDate().setValue(`9/${inputStartDay}/2020`);
        ParkingPage.inputStartingTime().setValue(`1:00`);
        ParkingPage.inputLeavingTime().setValue(`7:00`);
        ParkingPage.buttonCalculate().click();
 
        const actualCost = ParkingPage.estimatedParkingCost();

        expect(actualCost.getText()).toEqual(`$ 18.00`);
        ParkingPage.inputLeavingTime().setValue(`1:00`);

        for (let i = 1; i <= 5; i++) {
            const expectCost = 18 * i;
            
            ParkingPage.inputLeavingDate().setValue(`9/${inputStartDay + i}/2020`);
            ParkingPage.buttonCalculate().click();   
            expect(actualCost.getText()).toEqual(`$ ${expectCost}.00`);
        }
    });

    it('should calculate time of  valet parking', () => {
        const expectDateStart = new Date(2020, 9, 10, 6, 30, 0);
        const expectDateLeave = new Date(2020, 9, 10, 10, 0, 0);

        ParkingPage.comboBoxParkingLot().$(`//option[${valetParking}]`).click();
        ParkingPage.inputStartingDate().setValue('10/9/2020');
        ParkingPage.inputLeavingDate().setValue('10/9/2020');
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`6:30`);
        ParkingPage.inputLeavingTime().setValue(`10:00`);
        ParkingPage.buttonCalculate().click();

        const actualTime = ParkingPage.estimatedParkingTime().getText().match(/\d+/g);
        const actualDay = actualTime[0];
        const actualHour = actualTime[1];
        const actualMin = actualTime[2];

        const expectTimeInMinutes = (expectDateLeave - expectDateStart) / (1000 * 60);
        const expectDay = Math.floor(expectTimeInMinutes / (60 * 24));
        const expectHour = Math.floor(expectTimeInMinutes / 60);
        const expectMin = expectTimeInMinutes % 60;

        expect(actualDay).toEqual(expectDay.toString());
        expect(actualHour).toEqual(expectHour.toString());
        expect(actualMin).toEqual(expectMin.toString());

    });



});