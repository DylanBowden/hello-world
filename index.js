var message = require('./message.js');

module.exports = function (world) {
    var day = new Date().getDate()

    var conf = [
        {
            name: {
                val: day
            },
            world: {
                type: function () {
                    switch (world) {
                        case 'world' :
                            return '1'
                        case 'universe' :
                            return '2'
                        case "planet" :
                            return "3"
                        default:
                            return world;
                    }
                }
            }
        },
        {
            default : "hello world"
        }
    ]

    if (world == undefined) {
        return conf[1].default;

    } else {
        return message.message(conf)
    }
}

