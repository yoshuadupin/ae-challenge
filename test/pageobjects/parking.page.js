
class ParkingPage {
   

     comboBoxParkingLot() { return $('[name="ParkingLot"]') }

     inputStartingDate() { return $('[name="StartingDate"]') }
     inputLeavingDate() { return $('[name="LeavingDate"]') }

     inputStartingTime() { return $('[name="StartingTime"]') }
     inputLeavingTime() { return $('[name="LeavingTime"]') }

     radioButtonStartingAM() { return $('/html/body/form/table/tbody/tr[2]/td[2]/input[3]') }
     radioButtonStartingPM() { return $('/html/body/form/table/tbody/tr[2]/td[2]/input[4]') }

     radioButtonLeavingAM() { return $('/html/body/form/table/tbody/tr[3]/td[2]/input[3]') }
     radioButtonLeavingPM() { return $('/html/body/form/table/tbody/tr[3]/td[2]/input[4]') }

     
     buttonCalculate() { return $('/html/body/form/input[2]') }
    //Es necesario verificar antes 
     estimatedParkingCost() { return $('/html/body/form/table/tbody/tr[4]/td[2]/span[1]/b') }
     estimatedParkingTime() { return $('/html/body/form/table/tbody/tr[4]/td[2]/span[2]/b') }
     errorMessage(){return $('/html/body/form/table/tbody/tr[4]/td[2]/b')}
     
    open() {
        return browser.url(`http://www.shino.de/parkcalc/`)
    }


}

module.exports = new ParkingPage();