const ParkingPage = require('../pageobjects/parking.page');
const shortTerm = require ('../utilities').SHORTTERM;
describe('Short-Term Functional Tests', () => {
    before(() => {
        ParkingPage.open();
    })

    it('should calculate per hour parking', () => {
        const startHour = 0;
        const clickShortTerm = () =>ParkingPage.comboBoxParkingLot().$(`//option[${shortTerm}]`).click();

        clickShortTerm();
        ParkingPage.inputStartingDate().setValue("9/9/2020");
        ParkingPage.inputLeavingDate().setValue("9/9/2020");
        ParkingPage.radioButtonLeavingAM().click();
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`${startHour}:00`);
        ParkingPage.inputLeavingTime().setValue(`${startHour + 1}:00`);
        ParkingPage.buttonCalculate().click();
        const actualCost = ParkingPage.estimatedParkingCost().getText();
        expect(actualCost).toEqual("$ 2.00");
        //Ciclo para calcular una hora
        for (let i = 1; i < 24; i += 0.5) {
            const hours = Math.floor(startHour + i) % 12;
            const mins = (60 * i) % 60

            if (i < 12) {
                ParkingPage.inputLeavingTime().setValue(`${hours}:${mins}`);
            } else {
                ParkingPage.radioButtonLeavingPM().click();
                ParkingPage.inputLeavingTime().setValue(`${hours}:${mins}`);
            }
            ParkingPage.buttonCalculate().click();
            const actualCost = ParkingPage.estimatedParkingCost().getText();
            expect(actualCost).toEqual(`$ ${2+i*2}.00`);
        }
    })
})