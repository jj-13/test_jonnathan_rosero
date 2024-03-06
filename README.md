# Models Documentation

This document provides an overview of the models used in our Django project.

## Categoria Model

### Fields

- `nombre`: CharField with a maximum length of 50 characters.

### Description

Represents a category.

## Producto Model

### Fields

- `codigo`: CharField with a maximum length of 20 characters.
- `nombre`: CharField with a maximum length of 100 characters.
- `caracteristicas`: TextField.
- `precio_en_moneda`: DecimalField with a maximum of 10 digits and 2 decimal places.
- `empresa`: ForeignKey to the `Empresa` model with the `on_delete=models.CASCADE` option.
- `categorias`: ManyToManyField to the `Categoria` model.

### Description

Represents a product with details like code, name, characteristics, price, associated company, and categories.

## Orden Model

### Fields

- `cliente`: ForeignKey to the `Cliente` model with the `on_delete=models.CASCADE` option.
- `fecha`: DateField.
- `productos`: ManyToManyField to the `Producto` model through the `OrdenProducto` intermediary model.

### Description

Represents an order made by a customer, containing information about the client, order date, and associated products.

## OrdenProducto Model

### Fields

- `orden`: ForeignKey to the `Orden` model with the `on_delete=models.CASCADE` option.
- `producto`: ForeignKey to the `Producto` model with the `on_delete=models.CASCADE` option.
- `cantidad`: IntegerField.
- `tipo`: CharField with a maximum length of 10 characters, representing 'compra' or 'venta'.

### Description

An intermediary model to represent the relationship between orders and products, including the quantity and type of transaction.

## Cliente Model

### Fields

- `nombre`: CharField with a maximum length of 100 characters.
- `email`: EmailField.

### Description

Represents a customer with a name and email address.
