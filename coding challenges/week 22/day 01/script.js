var MinStack = function() {
    this.stack = []
    this.min = []
};

MinStack.prototype.push = function(x) {
    if(this.stack.length == 0){
        this.min.push(x)
    } else {
        let minimum = Math.min(x, this.min[this.min.length - 1])
        this.min.push(minimum)
    }
    this.stack.push(x)
};

MinStack.prototype.pop = function() {
    this.stack.pop()
    this.min.pop()
};

MinStack.prototype.top = function() {
    return this.stack[this.stack.length - 1]
};

MinStack.prototype.getMin = function() {
    return this.min[this.min.length - 1]
};