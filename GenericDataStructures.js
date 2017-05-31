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

// let LinkedList = function () {
//     return function (type) {
//         this.node = function (item) {
//             if (typeof (item) == type) {
//                 this.data = item;
//                 this.next = null;
//             } else {
//                 throw "item provided does not match " + type + " data type";
//             }
//         }

//         this.List = function () {
//             this.head = null;
//             this.Size = 0;
//             this.add = (item) => {
//                 let _node = new this.node(),
//                     currentNode = this.head;

//                 if (this.currentNode) {
//                     this.head = _node;
//                     this.size++;
//                     return _node;
//                 }

//                 while (currentNode.next) {
//                     currentNode = currentNode.next;
//                 }

//                 currentNode.next = item;
//                 this.Size++;
//             }
//         }

//         this.searchNodeAt = function (position) {
//             let count = 1,
//                 length = this._size,
//                 currentNode = this.head;

//             if (length === 0 || position < 1 || position > length) {
//                 return "No item in the list"
//             }

//             while (count <= position) {
//                 currentNode = currentNode.next;
//                 count++;
//             }

//             return currentNode;
//         };

//         this.remove = function (position) {
//             var currentNode = this.head,
//                 length = this._size,
//                 beforeNodeToDelete = null,
//                 nodeToDelete = null,
//                 deletedNode = null;

//             // Invalid position
//             if (position < 0 || position > length) {
//                 throw 'Node does not exists in this list.';
//             }

//             // First node is removed
//             if (position === 1) {
//                 this.head = currentNode.next;
//                 deletedNode = currentNode;
//                 currentNode = null;
//                 this._size--;

//                 return deletedNode;
//             }

//             // Other node is removed
//             beforeNodeToDelete = this.searchNodeAt(position - 1);
//             nodeToDelete = this.searchNodeAt(position);

//             beforeNodeToDelete.next = nodeToDelete.next;
//             deletedNode = nodeToDelete;
//             nodeToDelete = null;
//             this._size--;

//             return "Node Deleted";
//         };
//         return this.List();
//     }
// }
