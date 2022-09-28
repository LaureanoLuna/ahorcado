
create database Ahorcado;

use Ahorcado;

create table Jugador(
id int not null,
nombre varchar (10),
primary key (id));

create table Puntos(
puntaje int,
idJugador int,
idDetalle int,
primary key (idJugador),
foreign key (idJugador) references Jugador (id)
on delete cascade on update cascade,
foreign key (idDetalle) references DetallesJuego (id)
on delete cascade on update cascade);

create table DetallesJuego(
id int,
idJuego int,
idJugador int,
tiempoJuego time,
fallos int,
primary key (id),
foreign key (idJugador) references Jugador (id)
on delete cascade on update cascade,
foreign key (idJuego) references Juego (id)
on delete cascade on update cascade);


create table Juego(
id int not null auto_increment,
idPalabra int,
primary key (id),
foreign key (idPalabra)  references Palabra (id)
on delete restrict on update restrict);

create table Palabra(
id int,
palabra varchar (50) not null,
primary key (id));