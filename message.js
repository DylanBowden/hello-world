var ld = require('lodash');

//this class allows anyone to create a nice welcome message
// it's more flexible than 'hello world'
module.exports = function (objects) {

    return {
        message: function () {
            var string = "hello"

            if (objects[0].name.val) {
                string += '! Today is' + this.dayName(objects[0].name.val)
            }

            string += ' and the time is ' + Date.now();
            string += "welcome to the" + objects[0].world.type;
        },

        dayName: function (number) {
            switch (number) {
                case 0 :
                    return 'Monday'
                case 1 :
                    return 'Tuesday'
                case 2 :
                    return "Wednesday"
                case 3:
                    return 'thursday'
                case 4 :
                    return "Friday"
                case 5 :
                    return 'saturday'
                case 6 :
                    return 'sunday'
            }
        },

        world : function(type) {
            switch (type) {
                case 0 :
                    return 'world'
                case 1 :
                    return 'universe'
                case 2 :
                    return "planet"
                default:
                    // allowing for further possible cases
                    return type
            }
        }

    };
}
