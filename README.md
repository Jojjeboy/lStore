# lStore #

Simple wrapper for localStorage in browser.
Handles adding, removing, checking if id exists, getting, clearing and emptying javascript objects in localstorage.


#### Example ####
```
var lStore = new lStore('myAwesomeApp'),
             objects = [{
                      'id': 1,
                      'name': 'First',
                      'isValid': true,
                      'somOtherKey': 'somOtherValue'
                 },
                 {
                    'id': 2,
                    'name': 'Second',
                    'isValid': false,
                    'somOtherKey': 'somOtherValue'
                 },
                 {
                    'id': 3,
                    'name': 'Third',
                    'isValid': false,
                    'somOtherKey': 'somOtherValue'
                }
            ];
```


#### Adding above items item: ####
```
	 for (var i = 0; i < objects.length; i++) {
		  LS.add(objects[i]);
	 };
```


#### Remove item: ####

```
	 LS.removeEntry(2);
```

#### Get all: ####
    
```
    LS.getAll('myAwesomeApp')); 
```

#### Check if item with id 2 exists: ####
```
    LS.itemExists(2); // false
```

#### Check if item with id 3 exists: ####
```
    LS.itemExists(3); // true
```

#### Empty key and remove all items: ####

```
    LS.empty();
```

#### Remove key completely: ####
```
    LS.clear();
```
