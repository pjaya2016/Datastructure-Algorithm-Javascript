/**
 * 
 * @param {*} Size 
 */
let Queue = function (Size) {
    let _queue = [],
        front = 0, rear = 0;

    this.enqueue = function (item) {
        if (this.isFull()) throw "Queue is full";
        _queue[rear] = item;
        rear++;
        return true;
    }

    this.dequeue = function () {
        if (this.isEmpty()) throw "Queue is empty";
        let data = _queue[front];
        front++;
        return data;
    }

    this.isFull = function () {
        return _queue.length === Size;
    }

    this.isEmpty = function () {
        if (front < 0 || front > rear) {
            return true;
        } else {
            return false;
        }
    }

    this.peek = function () {
        return _queue[front];
    }
}
/**
 * 
 * @param {*} Size 
 */
let Stack = function (Size) {
    let _stack = [],
        top = 0;

    this.push = function (item) {
        if (isFull()) throw "Stack is full";
        _stack[top] = item;
        top++;
        return true;
    }

    this.pop = function () {
        if (isEmpty()) throw "Stack is Empty";
        let data = _stack[top];
        top--;
        return data;
    }

    this.isFull = function () {
        return _stack.length === Size;
    }

    this.isEmpty = function () {
        if (top < 0) {
            return true;
        } else {
            return false;
        }
    }

    this.peek = function () {
        return _stack[top];
    }
}
/**
 * 
 */
let Dictionary = function () {
    let _dictionary = [];

    this.add = function (key, value) {
        let str = '{"' + key + '":"' + value + '"}'
        let Key = JSON.parse(str);
        _dictionary.push(Key);
    }

    this.getItem = function (key) {
        let itemFound = "";
        var found = _dictionary.filter(items => {
            for (property in items) {
                if (property.toString() === key) {
                    itemFound = (items[key]);
                }
            }
        })
        return itemFound;
    }

    this.clearItem = function () {
        _dictionary = [];
        return true;
    }

    this.containsKey = function (key) {
        var found = _dictionary.filter(item => {
            return item.key === key;
        })
        return found.length === 1;
    }

    this.ContainsValue = function (value) {
        var found = _dictionary.filter(item => {
            return item.value === value;
        })
        return found.length === 1;
    }

    this.Remove = function (key, i) {
        var index = _dictionary.filter(item => {
            if (item.key === key) return i;
        })
        let data = _dictionary[index];
        _dictionary.splice(index, 1);
        return data;
    }
}

/**
 * Linked List
 */
let LinkedList = function () {
    this.Node = function (data) {
        this.data = data;
        this.next = null;
    }

    this.List = function () {
        this._size = 0;
        this.head = null;

        this.add = function (value) {
            let node = new this.Node(value),
                currentNode = this.head;

            // When list is empty
            if (!currentNode) {
                this.head = node;
                this._size++;

                return node;
            }

            // When list is not empty
            while (currentNode.next) {
                currentNode = currentNode.next;
            }

            currentNode.next = node;

            this._size++;

            return node;
        };

        this.searchNodeAt = function (position) {
            var currentNode = this.head,
                length = this._size,
                count = 1;

            // check position is invalid
            if (length === 0 || position < 1 || position > length) {
                throw 'Node does not exists in this list.';
            }

            // if position valid position 
            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            return currentNode;
        };

        this.remove = function (position) {
            var currentNode = this.head,
                length = this._size,
                beforeNodeToDelete = null,
                nodeToDelete = null,
                deletedNode = null;

            // Invalid position
            if (position < 0 || position > length) {
                throw 'Node does not exists in this list.';
            }

            // First node is removed
            if (position === 1) {
                this.head = currentNode.next;
                deletedNode = currentNode;
                currentNode = null;
                this._size--;

                return deletedNode;
            }

            // Other node is removed
            beforeNodeToDelete = this.searchNodeAt(position - 1);
            nodeToDelete = this.searchNodeAt(position);

            beforeNodeToDelete.next = nodeToDelete.next;
            deletedNode = nodeToDelete;
            nodeToDelete = null;
            this._size--;

            return "Node Deleted";
        };
    }

    return this.List();

}

/**
 * Doubly Linked List
 */
let DoublyLinkedList = function () {
    this.node = function (value) {
        this.data = value;
        this.previous = null;
        this.next = null;
    }

    this.DoublyList = function () {
        this._size = 0;
        this.head = null;
        this.tail = null;

        this.add = function (value) {
            var node = new this.node(value);

            if (this._size) {
                this.tail.next = node;
                node.previous = this.tail;
                this.tail = node;
            } else {
                this.head = node;
                this.tail = node;
            }

            this._size++;

            return node;
        };

        this.searchNodeAt = function (position) {
            var currentNode = this.head,
                length = this._size,
                count = 1;

            if (length === 0 || position < 1 || position > length) {
                throw 'Node does not exists in this list.';
            }

            while (count < position) {
                currentNode = currentNode.next;
                count++;
            }

            return currentNode;
        };

        this.remove = function (position) {
            let currentNode = this.head,
                length = this._length,
                count = 1,
                beforeNodeToDelete = null,
                nodeToDelete = null,
                deletedNode = null;

            if (length === 0 || position < 1 || position > length) {
                throw 'Node does not exists in this list.';
            }


            if (position === 1) {
                this.head = currentNode.next;


                if (!this.head) {
                    this.head.previous = null;

                } else {
                    this.tail = null;
                }


            } else if (position === this._length) {
                this.tail = this.tail.previous;
                this.tail.next = null;

            } else {
                while (count < position) {
                    currentNode = currentNode.next;
                    count++;
                }

                beforeNodeToDelete = currentNode.previous;
                nodeToDelete = currentNode;
                afterNodeToDelete = currentNode.next;

                beforeNodeToDelete.next = afterNodeToDelete;
                afterNodeToDelete.previous = beforeNodeToDelete;
                deletedNode = nodeToDelete;
                nodeToDelete = null;
            }

            this._size--;
        }
        return "Node deleted";
    }
    return this.DoublyList();
}


/**
 * Hash Table -------warining 
 */

function HashTable(obj) {
    this.length = 0;
    this.items = {};
    for (var p in obj) {
        if (obj.hasOwnProperty(p)) {
            this.items[p] = obj[p];
            this.length++;
        }
    }

    this.setItem = function (key, value) {
        var previous = undefined;
        if (this.hasItem(key)) {
            previous = this.items[key];
        }
        else {
            this.length++;
        }
        this.items[key] = value;
        return previous;
    }

    this.getItem = function (key) {
        return this.hasItem(key) ? this.items[key] : undefined;
    }

    this.hasItem = function (key) {
        return this.items.hasOwnProperty(key);
    }

    this.removeItem = function (key) {
        if (this.hasItem(key)) {
            previous = this.items[key];
            this.length--;
            delete this.items[key];
            return previous;
        }
        else {
            return undefined;
        }
    }

    this.keys = function () {
        var keys = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                keys.push(k);
            }
        }
        return keys;
    }

    this.values = function () {
        var values = [];
        for (var k in this.items) {
            if (this.hasItem(k)) {
                values.push(this.items[k]);
            }
        }
        return values;
    }

    this.each = function (fn) {
        for (var k in this.items) {
            if (this.hasItem(k)) {
                fn(k, this.items[k]);
            }
        }
    }

    this.clear = function () {
        this.items = {}
        this.length = 0;
    }
}
