function factory (library, orders) {
    return orders.map(compose);

    function compose(order) {
        // Create empty object
        // Copy properties from template
        // Compose methods from library for every item in parts
        // Return result

        const result = Object.assign({}, order.template);

        for (let part of order.parts) {
            result[part] = library[part];
        }

        return result;
    }
}