export const invoice = {
    id: 1,
    name: 'E-Shop',
    client: {
        name: 'Andres',
        lastname: 'Adriazola',
        address: {
            country: 'Chile',
            city: 'Rancagua',
            street: 'Independencia',
            number: '470'
        },
        company: {
            name: 'Humble Builds',
            fiscalNumber: 191288902
        }
    },
    items: [
        {
            id:1,
            product: 'MSI GTX 1660 Super',
            price: 120,
            quantity: 1
        },
        {
            id:2,
            product: 'Ryzen 7 2700',
            price: 90,
            quantity: 1
        }, {
            id:3,
            product: 'Ram HyperX 8GB 3600mhz',
            price: 20,
            quantity: 2
        },]

}