
class IOSButton {}
class AndroidButton {}

type OperationgSystem = 'android' | 'ios'

// Without Factory
const button1 = (os: OperationgSystem) => {
    return os === 'ios' ? new IOSButton() : new AndroidButton();
}
const button2 = (os: OperationgSystem) => {
    return os === 'ios' ? new IOSButton() : new AndroidButton();
}

console.log(button1("android"))
console.log(button2("ios"))



// With Factory Pattern
class ButtonFactory {
    createButton(os: OperationgSystem): IOSButton | AndroidButton {
        if(os == 'ios'){
            return new IOSButton;
        }else{
            return new AndroidButton;
        }
    }
}

const buttonFactory = new ButtonFactory();
const btn1 = buttonFactory.createButton("ios");
const btn2 = buttonFactory.createButton("android");

console.log(btn1)
console.log(btn2)