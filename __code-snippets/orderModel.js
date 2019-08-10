const orders = []

const orderModel = {
    all: function () {
        return orders
    },
    byId: function (id) {
        return orders[id]
    },
    save: function (order) {
        orders.push(order)
        return orders.length - 1
    },
    update: function (id, order) {
        if (orders.length > id) {
            orders[id] = order
            return true
        }
        return false
    },
    delete: function (id, order) {
        if (orders.length > id) {
            orders.splice(id, 1)
            return true
        }
        return false
    }
}

module.exports = orderModel
