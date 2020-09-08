const Page = require('./page');

class ParkingPage extends Page {

    get comboBoxParkingLot() { return $('[name="ParkingLot"]') }

    get inputStartingDate() { return  $('[name="StartingDate"]')}
    get inputLeavingDate() { return  $('[name="LeavingDate"]')}
    
    get inputStartingTime() { return  $('[name="StartingTime"]')}
    get inputLeavingTime() { return  $('[name="LeavingTime"]')}
    
    get radioButtonStartingAM() { return  $('[name="StartingTimeAMPM"]').$('[value="AM"]')}
    get radioButtonStartingPM() { return  $('[name="StartingTimeAMPM"]').$('[value="PM"]')}
    
    get radiButtonLeavingAM() { return  $('[name="LeavingTimeAMPM"]').$('[value="AM"]')}
    get radioButtonLeavingPM() { return  $('[name="LeavingTimeAMPM"]').$('[value="PM"]')}

    get estimatedParkingCost(){return $('//body/form/table/tbody/tr[4]/td[2]/span[1]/b')}
    get estimatedParkingTime(){return $('//body/form/table/tbody/tr[4]/td[2]/span[2]/b')}

    get buttonCalculate(){return $('input[name=Calculte]')}

    open() {
        return browser.url(`http://www.shino.de/parkcalc/`)
    }
}