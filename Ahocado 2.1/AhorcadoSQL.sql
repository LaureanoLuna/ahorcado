create database Ahorcado;

use Ahorcado;

create table Jugador(
id int auto_increment,
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
id int auto_increment,
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
id int auto_increment,
primary key (id));

create table Palabra(
id int auto_increment,
palabra varchar (30),
primary key (id));


drop table Palabra;