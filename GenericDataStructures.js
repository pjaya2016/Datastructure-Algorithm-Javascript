/**
 * 
 */

let List = function(){
    return (type)=>{
        this.array = [];
        
        this.add = (item) =>{
             if (typeof (item) == type) {
                 this.array.push(item);
            } else {
                throw "item provided does not match " + type + " data type";
            }
        }

        this.removeLast = () =>{
            return this.array.pop();
        }

        this.removeFront = () =>{
            return this.array.unshift();
        }

        this.removeFromIndex = (index) =>{
           return this.array.splice(index, 1);
        }

        this.getArray = () =>{
            return this.array;
        }
        return this;
    }
}

/**
 * 
 * @param {*} Size 
 */
let Queue = function (Size) {
    return function (type) {
        this._queue = [],
            this.front = 0,
            this.rear = 0;
        this.enqueue = (item) => {
            if (!this.isFull()) {
                if (typeof item != type.toLowerCase()) {
                    throw "item provided does not match " + type + " data type";
                } else {
                    this._queue[rear] = item;
                }
            } else {
                throw "Array is Full";
            }
            this.rear++;
            return true;
        }
        this.dequeue = (item) => {
            if (this.isEmpty()) throw "Queue is empty";
            let data = _queue[front];
            front++;
            return true;
        }

        this.isFull = () => {
            return this._queue.length === Size;
        }

        this.isEmpty = () => {
            if (front < 0 || front > rear) {
                return true;
            } else {
                return false;
            }
        }
        this.peek = () => {
            return _queue[front];
        }
        return this;
    }
}

/**
 * 
 * @param {*} Size 
 */
let Stack = function (Size) {
    return function (type) {
        this._stack = [];
        this.top = 0;

        this.push = function (item) {
            if (this.isfull()) {
                throw "Array is full";
            }
            _stack[top] = item;
            top++;
            return true;
        }

        this.isEmpty = function () {
            if (top < 0)
                return true;
            else
                return false;
        }

        this.isFull = function () {
            if (_stack.length === Size)
                return true;
            else
                return false;
        }

        this.pop = function (item) {
            if (this.isEmpty()) {
                throw "Array is Empty";
            }
            let data = _stack[top];
            top--;
            return data;
        }

        this.peek = function () {
            return _stack[top];
        }
    }

}

/**
 * Generic LinkedList
 */
let LinkedList = function () {
    return (type) => {
        this.node = function (item) {
            if (typeof (item) == type) {
                this.data = item;
                this.next = null;
            } else {
                throw "item provided does not match " + type + " data type";
            }
        }

        this.List = () => {
            this.head = null;
            this._size = 0;

            this.add = (item) => {
                this._node = new this.node(item);
                this.currentNode = this.head;
                if (!this.currentNode) {
                    this.head = _node;
                    this._size++;
                    return _node;
                }
                while (this.currentNode.next) {
                    this.currentNode = this.currentNode.next;

                }
                this.currentNode.next = this._node;
                this._size++;
            }


            this.searchNodeAt = (position) => {
                this.currentNode = this.head,
                    this.length = this._size,
                    this.count = 1;

                // check position is invalid
                if (this.length === 0 || position < 1 || position > this.length) {
                    throw 'Node does not exists in this list.';
                }

                // if position valid position 
                while (this.count < position) {
                    this.currentNode = this.currentNode.next;
                    this.count++;
                }

                return this.currentNode;
            };

            this.remove = (position) => {
                this.currentNode = this.head,
                    this.length = this._size,
                    this.beforeNodeToDelete = null,
                    this.nodeToDelete = null,
                    this.deletedNode = null;

                // Invalid position
                if (position < 0 || position > this.length) {
                    throw 'Node does not exists in this list.';
                }

                // First node is removed
                if (position === 1) {
                    this.head = this.currentNode.next;
                    this.deletedNode = this.currentNode;
                    this.currentNode = null;
                    this._size--;

                    return deletedNode;
                }

                // Other node is removed
                this.beforeNodeToDelete = this.searchNodeAt(position - 1);
                this.nodeToDelete = this.searchNodeAt(position);

                this.beforeNodeToDelete.next = this.nodeToDelete.next;
                this.deletedNode = this.nodeToDelete;
                this.nodeToDelete = null;
                this._size--;

                return "Node Deleted";
            };


            return this;
        };
        return this.List();
    }
}







