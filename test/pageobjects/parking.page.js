
module.exports = class ParkingPage {
    open() {
        return browser.url(`http://www.shino.de/parkcalc/`)
    }

    get comboBoxParkingLot() { return $('[name="ParkingLot"]') }

    get inputStartingDate() { return $('[name="StartingDate"]') }
    get inputLeavingDate() { return $('[name="LeavingDate"]') }

    get inputStartingTime() { return $('[name="StartingTime"]') }
    get inputLeavingTime() { return $('[name="LeavingTime"]') }

    get radioButtonStartingAM() { return $('//body/form/table/tbody/tr[2]/td[2]/input[3]') }
    get radioButtonStartingPM() { return $('///body/form/table/tbody/tr[2]/td[2]/input[4]') }

    get radiButtonLeavingAM() { return $('//body/form/table/tbody/tr[3]/td[2]/input[3]') }
    get radioButtonLeavingPM() { return $('//body/form/table/tbody/tr[3]/td[2]/input[4]') }

    get estimatedParkingCost() { return $('//body/form/table/tbody/tr[4]/td[2]/span[1]/b') }
    get estimatedParkingTime() { return $('//body/form/table/tbody/tr[4]/td[2]/span[2]/b') }

    get buttonCalculate() { return $('input[name=Calculte]') }

   
}