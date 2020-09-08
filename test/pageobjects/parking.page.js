const Page = require('./page');

class ParkingPage extends Page {

    get comboBoxParkingLot() { return $('[id="ParkingLot"]') }
    get inputStartingDate() { return  $('[id="StartingDate"]')}
    get inputLeavingDate() { return  $('[id="LeavingDate"]')}
    get inputStartingTime() { return  $('[id="StartingTime"]')}
    get inputLeavingTime() { return  $('[id="LeavingTime"]')}
    get radioButoomStartingAM() { return  $('[id="StartingTime"]')}
    get radioButtomStartingPM() { return  $('[id="LeavingTime"]')}
    

    open() {
        return browser.url(`http://www.shino.de/parkcalc/`)
    }
}