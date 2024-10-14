/**
 * **Static თვისებები და მეთოდები**: შექმენი კლასი `Counter`, რომელსაც
 *  ექნება სტატიკური თვისება `count` და სტატიკური მეთოდი `increment()`, რომელიც `count`-ს 1-ით გაზრდის.
 */


class Counter{
    static count = 0;

    static increment(){
        Counter.count += 1
    }

    
}

Counter.increment()

console.log(Counter.count)


