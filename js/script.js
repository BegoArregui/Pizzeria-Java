
function pizzeria() {
    var tam_pizza = document.getElementById("tam").value;
    var tipo_pizza = document.getElementById("tipo").value;
    var num_pizza = document.getElementById("num").value;
    var t_entrega = document.getElementById("entrega").value;
    var precio, descuento;

    if (num_pizza > 5) {
        alert("Lo sentimos, el número de pizzas no puede ser superior a 5, nuestros trabajadores están al límite y cobran el mínimo. Gracias.");
    } else {
        if (tipo_pizza == "c_quesos") { /*Hago if por cada tipo de pizza, y dentro de cada tipo, calculo con otro if el tamaño y cantidad*/
            if (tam_pizza == "peque") {
                precio = 10 * num_pizza;
            }
            if (tam_pizza == "mediana") {
                precio = 12 * num_pizza;
            }
            if (tam_pizza == "familiar") {
                precio = 16 * num_pizza;
            }
        }

        if (tipo_pizza == "bacon_queso") {
            if (tam_pizza == "peque") {
                precio = 9 * num_pizza;
            }
            if (tam_pizza == "mediana") {
                precio = 11 * num_pizza;
            }
            if (tam_pizza == "familiar") {
                precio = 14 * num_pizza;
            }
        }

        if (tipo_pizza == "hawaiana") {
            if (tam_pizza == "peque") {
                precio = 12 * num_pizza;
            }
            if (tam_pizza == "mediana") {
                precio = 18 * num_pizza;
            }
            if (tam_pizza == "familiar") {
                precio = 24 * num_pizza;
            }
        }

        if (tipo_pizza == "delicias_mar") {
            if (tam_pizza == "peque") {
                precio = 14 * num_pizza;
            }
            if (tam_pizza == "mediana") {
                precio = 20 * num_pizza;
            }
            if (tam_pizza == "familiar") {
                precio = 26 * num_pizza;
            }
        }

        if (tipo_pizza == "personalizada") {
            if (tam_pizza == "peque") {
                precio = 8 * num_pizza;
                if (document.getElementById("pollo").checked) {
                    precio = precio + (1 * num_pizza);
                }
                if (document.getElementById("jamon").checked) {
                    precio = precio + (1 * num_pizza);
                }
                if (document.getElementById("chorizo").checked) {
                    precio = precio + (1 * num_pizza);
                }
                if (document.getElementById("morcilla").checked) {
                    precio = precio + (1 * num_pizza);
                }
            }
            if (tam_pizza == "mediana") {
                precio = 10 * num_pizza;
                if (document.getElementById("pollo").checked) {
                    precio = precio + (2 * num_pizza);
                }
                if (document.getElementById("jamon").checked) {
                    precio = precio + (2 * num_pizza);
                }
                if (document.getElementById("chorizo").checked) {
                    precio = precio + (2 * num_pizza);
                }
                if (document.getElementById("morcilla").checked) {
                    precio = precio + (2 * num_pizza);
                }
            }
            if (tam_pizza == "familiar") {
                precio = 12 * num_pizza;
                if (document.getElementById("pollo").checked) {
                    precio = precio + (2 * num_pizza);
                }
                if (document.getElementById("jamon").checked) {
                    precio = precio + (2 * num_pizza);
                }
                if (document.getElementById("chorizo").checked) {
                    precio = precio + (2 * num_pizza);
                }
                if (document.getElementById("morcilla").checked) {
                    precio = precio + (2 * num_pizza);
                }
            }
        }

        document.getElementById("txttotal").value = precio + "€";

        if (precio >= 30) {
            if (precio >= 50) {
                document.getElementById("txtdescuento").value = "¡Un refresco y un postre gratis!";
            } else {
                document.getElementById("txtdescuento").value = "¡Un refresco gratis!";
            }
        }
        else {
            document.getElementById("txtdescuento").value = "Lo siento, necesitas un mínimo de 30€ para obtener un regalo";
        }

        if (precio < 30 && t_entrega == "domicilio") {
            alert("Lo sentimos, necesitas al menos 30€ de compra para poder mandar a domicilio");
            document.getElementById("txttotal").disabled = true;
        }

    }
}
