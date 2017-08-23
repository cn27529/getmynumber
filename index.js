var helloworldInstance = (function() {
    var name = 'Node';
    return {
        sayHi: function(theName) {
            return 'Hi! ' + (theName || name);
        }
    };
})();


exports = module.exports = helloworldInstance;