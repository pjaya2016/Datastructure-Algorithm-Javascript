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
                    throw "item provided does not match " + type + "data type";
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
