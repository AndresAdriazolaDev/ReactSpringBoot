import { invoice } from "../data/invoice"

export const getInvoice = () => {
    /*let total = 0
     foreach method
    invoice.client.items.forEach(item => {
        total = total + item.price * item.quantity
    });*/
    //reduce tene 2 argumentos una expresion callback o lambda q va haciendo la sumatoria y el segundo argumento es el valor q va iterando y rescatando datos
    const total = invoice.items
        .map(item => item.price * item.quantity)
        .reduce((accumulator, currentValue) => accumulator + currentValue, 0)
    return { ...invoice, total }
}