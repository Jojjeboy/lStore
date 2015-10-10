var lStore = function (key) {
    this.key = key;
    this.init();
}

lStore.prototype.getAll = function () {
    return JSON.parse(localStorage.getItem(this.key));
};

lStore.prototype.add = function (obj) {
    var lsItems = this.getAll();
    lsItems.push(obj);
    this.writeLS(lsItems);
};

lStore.prototype.clear = function () {
    localStorage.removeItem(this.key);
};

lStore.prototype.removeEntry = function (key) {
    var lsItems = this.getAll(),
        newData = [],
        iter = 0;
    while (iter < lsItems.length) {
        if (key !== lsItems[iter].id) {
            newData.push(lsItems[iter]);
        }
        iter++;
    }
    this.writeLS(newData);
};

lStore.prototype.writeLS = function (array) {
    localStorage.setItem(this.key, JSON.stringify(array));
};

lStore.prototype.itemExists = function(key){
    var lsItems = this.getAll(),
            iter = 0;
    while (iter < lsItems.length) {
        if (key === lsItems[iter].id) {
            return true;
        }
        iter++;
    }
    return false;
};


lStore.prototype.getItem = function(key){
    var lsItems = this.getAll(),
            iter = 0;
    while (iter < lsItems.length) {
        if (key === lsItems[iter].id) {
            return lsItems[iter];
        }
        iter++;
    }
    return false;
};

lStore.prototype.getNrOfItems = function () {
    return this.getAll().length;
};

lStore.prototype.empty = function () {
    localStorage.setItem(this.key, JSON.stringify([]));
};

lStore.prototype.init = function () {
    if (window.hasOwnProperty("localStorage")) {
        if (localStorage.getItem(this.key) === null) {
            this.empty();
        }
    } else {
        window.alert('Please considering upgrading browser to be able to use lStore Plugin');
    }
};