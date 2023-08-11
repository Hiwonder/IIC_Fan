/*
 iicfan package
*/
//% weight=10 icon="\uf140" color=#2896ff
namespace iicfan {

    const I2C_ADDR = 0x39

    const SET_MODE = 0

    function i2cwrite(adress: number, reg: number, value: number) {
        let buf = pins.createBuffer(2);
        buf[0] = reg;
        buf[1] = value;
        pins.i2cWriteBuffer(adress, buf);
    }

    /**
    * Set the fan speed
    */
    //% weight=98 blockId=fanSpeed block="Set the iic_fan speed %speed"
    //% speed.min=-100 speed.max=100
    export function fanSpeed(speed: number) {
        i2cwrite(I2C_ADDR, SET_MODE, speed)
    }
}
