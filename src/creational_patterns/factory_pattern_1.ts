
class Food { }

class WhiteRice extends Food { }
class JeeraRice extends Food { }
class ChickenBiryani extends Food { }
class MuttonBiryani extends Food { }
class ShrimpBiryani extends Food { }

class Drink { }

class OrangeJuice extends Drink { }
class BananaMilkShake extends Drink { }
class Lassi extends Drink { }
class ButterMilk extends Drink { }

type foodOrder =
    | 'white-rice'
    | 'jeera-rice'
    | 'chicken-biryani'
    | 'mutton-biryani'
    | 'shrimp-biryani'

type drinkOrder =
    | 'orange-juice'
    | 'banana-milkshake'
    | 'buttermilk'
    | 'lassi'

type Order = foodOrder | drinkOrder

// Type guarding
const foodList = ['white-rice', 'jeera-rice', 'chicken-biryani', 'mutton-biryani', 'shrimp-biryani'] as const;
type typeFood = (typeof foodList)[number];
const isFood = (x: foodOrder): x is typeFood => foodList.includes(x)

// Type guarding
const drinkList = ['orange-juice', 'banana-milkshake', 'buttermilk', 'lassi'] as const
type typeDrink = (typeof drinkList)[number]
const isDrink = (x: any ): x is  typeDrink => drinkList.includes(x)

class FoodFactory {
    createFood(order: foodOrder): Food {
        if (order === 'jeera-rice') {
            return new JeeraRice;
        } else if (order === 'chicken-biryani') {
            return new ChickenBiryani;
        } else if (order === 'mutton-biryani') {
            return new MuttonBiryani;
        } else if (order === 'shrimp-biryani') {
            return new ShrimpBiryani;
        } else {
            return new WhiteRice;
        }
    }

}

class DrinkFactory {
    createJuice(order: drinkOrder){
        if(order === 'orange-juice'){
            return new OrangeJuice;
        }else if(order === 'banana-milkshake'){
            return new BananaMilkShake;
        }else if(order === 'lassi'){
            return new Lassi;
        }else{
            return new ButterMilk;
        }
    }
}

const order1: Order[] = ['mutton-biryani','jeera-rice','orange-juice','lassi'];

const foodFactory = new FoodFactory();
const drinkFactory = new DrinkFactory();

for (let item of order1){
    if(isFood(item as foodOrder)){
        const foodItem = foodFactory.createFood(item as foodOrder);
        console.log(foodItem)
    }
    if(isDrink(item as drinkOrder)){
        const drinkItem = drinkFactory.createJuice(item as drinkOrder);
        console.log(drinkItem)
    }
}