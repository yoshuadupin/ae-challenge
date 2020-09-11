const ParkingPage = require('../pageobjects/parking.page');
const economy = require('../utilities').ECONOMY;

describe('Economy Functional Tests', () => {
    before(() => {
        ParkingPage.open();
    })

    it('should calculate per hour parking ', () => {
        const startHour = 0;
        const dailyMax = 9;
        const actualCost = ParkingPage.estimatedParkingCost();
        const parkingLot = ParkingPage.comboBoxParkingLot().$(`//option[${economy}]`);

        ParkingPage.inputStartingDate().setValue("9/9/2020");
        ParkingPage.inputLeavingDate().setValue("9/9/2020");
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`${startHour}:00`);

        for (let i = 1; i < 12; i++) {
            const expectedCost = 2 * i;

            parkingLot.click();
            ParkingPage.inputLeavingTime().setValue(`${startHour + i}:00`);
            ParkingPage.radioButtonLeavingAM().click();
            ParkingPage.buttonCalculate().click();

            if (expectedCost <= dailyMax) {
                expect(actualCost.getText()).toEqual(`$ ${expectedCost}.00`);
            } else {
                expect(actualCost.getText()).toEqual(`$ ${dailyMax}.00`);
            }
        }
    });

    it('should calculate per day parking ', () => {
        const startDay = 9;
        const dailyMax = 9;
        const actualCost = ParkingPage.estimatedParkingCost();
        const parkingLot = ParkingPage.comboBoxParkingLot().$(`//option[${economy}]`);

        ParkingPage.inputStartingDate().setValue(`9/${startDay}/2020`);
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`12:00`);
        ParkingPage.inputLeavingTime().setValue(`12:00`);

        for (let i = 1; i <= 6; i++) {
            parkingLot.click();
            ParkingPage.inputLeavingDate().setValue(`9/${startDay + i}/2020`);
            ParkingPage.buttonCalculate().click();
            expect(actualCost.getText()).toEqual(`$ ${dailyMax * i}.00`);
        }
    });

    it('should calculate per week parking ', () => {
        const startDay = 0;
        const weekCost = 54;
        const actualCost = ParkingPage.estimatedParkingCost();
        const parkingLot = ParkingPage.comboBoxParkingLot().$(`//option[${economy}]`);

        ParkingPage.inputStartingDate().setValue(`9/${startDay}/2020`);
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`12:00`);
        ParkingPage.inputLeavingTime().setValue(`12:00`);

        for (let i = 1; i <= 3; i++) {
            const nextWeek = startDay + 7 * i;
            parkingLot.click();
            ParkingPage.inputLeavingDate().setValue(`9/${nextWeek}/2020`);
            ParkingPage.buttonCalculate().click();
            expect(actualCost.getText()).toEqual(`$ ${weekCost * i}.00`);
        }
    });

})