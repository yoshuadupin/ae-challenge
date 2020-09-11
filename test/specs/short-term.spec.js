const ParkingPage = require('../pageobjects/parking.page');
const shortTerm = require('../utilities').SHORTTERM;
describe('Short-Term Functional Tests', () => {
    before(() => {
        ParkingPage.open();
    })

    it('should calculate per hour parking', () => {
        const startHour = 0;
        const dailyMax = 24;
        const actualCost = ParkingPage.estimatedParkingCost();
        const parkingLot = ParkingPage.comboBoxParkingLot().$(`//option[${shortTerm}]`);

        parkingLot.click();
        ParkingPage.inputStartingDate().setValue("9/9/2020");
        ParkingPage.inputLeavingDate().setValue("9/9/2020");
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`${startHour}:00`);
        ParkingPage.inputLeavingTime().setValue(`${startHour + 1}:00`);
        ParkingPage.buttonCalculate().click();
        expect(actualCost.getText()).toEqual("$ 2.00");

        let acumulateCost = 0;
        //loop in every half an hour 
        for (let i = 1; i < 24; i += 0.5) {
            const hours = Math.floor(startHour + i) % 12;
            const mins = (60 * i) % 60;
            const expectedCost = 2 + acumulateCost;

            parkingLot.click();

            if (i < 12) {
                ParkingPage.inputLeavingTime().setValue(`${hours}:${mins}`);
            } else {
                ParkingPage.radioButtonLeavingPM().click();
                ParkingPage.inputLeavingTime().setValue(`${hours}:${mins}`);
            }

            ParkingPage.buttonCalculate().click();

            if (expectedCost < dailyMax) {
                expect(actualCost.getText()).toEqual(`$ ${expectedCost}.00`);
            } else {
                expect(actualCost.getText()).toEqual(`$ 24.00`);
            }
            acumulateCost += 1;
        }
    });

    it('should calculate daily maximun parking', () => {
        const startDay = 9;
        const dailyMax = 24;
        const actualCost = ParkingPage.estimatedParkingCost();
        const parkingLot = ParkingPage.comboBoxParkingLot().$(`//option[${shortTerm}]`);

        parkingLot.click();
        ParkingPage.inputStartingDate().setValue(`9/${startDay}/2020`);
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`12:00`);
        ParkingPage.inputLeavingTime().setValue(`12:00`);
        //Ciclo para calcular una hora
        //Revisa solo hasta 12 horas por que ese el
        // daily maximun que se maneja en la pagina pero no lo dice
        for (let i = 1; i <= 3; i++) {
            parkingLot.click();
            ParkingPage.inputLeavingDate().setValue(`9/${startDay + i}/2020`);
            ParkingPage.buttonCalculate().click();
            expect(actualCost.getText()).toEqual(`$ ${dailyMax * i}.00`);
        }
    });
})