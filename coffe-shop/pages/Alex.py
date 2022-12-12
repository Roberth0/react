import turtle

# Crea una instancia de turtle
t = turtle.Turtle()

# Configura el tamaño de la ventana
t.screensize(800, 600)

# Configura el color del lapiz
t.pencolor("white")

# Crea una función para dibujar una rosa blanca
def dibujar_rosa_blanca():
    # Mueve el lapiz hacia abajo y hacia la derecha
    t.penup()
    t.forward(100)
    t.right(90)
    t.forward(100)
    t.right(180)
    t.pendown()

    # Dibuja la rosa blanca
    t.begin_fill()
    for i in range(200):
        t.forward(2)
        t.right(1)
    t.end_fill()

# Ejecuta la función para dibujar la rosa blanca
dibujar_rosa_blanca()