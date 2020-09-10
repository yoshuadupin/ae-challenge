const ParkingPage = require('../pageobjects/parking.page');
const longTermGarage = require('../utilities').LONGTEMGARAGE;


describe('Long-Term Functional Tests' , ()=>{
    before(() => {
        ParkingPage.open();
    })

    it('should calculate per hour parking ' , ()=>{
        const startHour = 0;
        const actualCost = ParkingPage.estimatedParkingCost();
        const parkingLot = ParkingPage.comboBoxParkingLot().$(`//option[${longTermGarage}]`);

        ParkingPage.inputStartingDate().setValue("9/9/2020");
        ParkingPage.inputLeavingDate().setValue("9/9/2020");
        ParkingPage.radioButtonStartingAM().click();
        ParkingPage.inputStartingTime().setValue(`${startHour}:00`);
        //Ciclo para calcular una hora
        //Revisa solo hasta 12 horas por que ese el
        // daily maximun que se maneja en la pagina pero no lo dice
        for (let i = 1; i < 12; i ++) {
            parkingLot.click();
            ParkingPage.inputLeavingTime().setValue(`${startHour+i}:00`);
            ParkingPage.radioButtonLeavingAM().click();
            ParkingPage.buttonCalculate().click();
            expect(actualCost.getText()).toEqual(`$ ${2 * i}.00`);
            browser.pause(2000);
        }
    });
})