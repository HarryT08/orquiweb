-- phpMyAdmin SQL Dump
-- version 5.1.1
-- https://www.phpmyadmin.net/
--
-- Servidor: 127.0.0.1
-- Tiempo de generación: 23-06-2022 a las 23:33:45
-- Versión del servidor: 10.5.12-MariaDB-cll-lve
-- Versión de PHP: 7.2.34

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Base de datos: `u173148296_bd_orquiweb`
--

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `comanda`
--

CREATE TABLE `comanda` (
  `idComanda` int(11) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `totalComanda` float NOT NULL,
  `idUsuario` int(11) NOT NULL,
  `idMesa` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL,
  `mensaje` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `comanda`
--

INSERT INTO `comanda` (`idComanda`, `fecha`, `totalComanda`, `idUsuario`, `idMesa`, `estado`, `mensaje`) VALUES
(1, '06/22/2022', 135000, 8, 18, 'Aceptado', 'Quite pegucha, perro, hamburguesa'),
(2, '06/22/2022', 25000, 8, 11, 'Aceptado', 'hola'),
(3, '06/22/2022', 12000, 8, 18, 'Rechazado', ''),
(5, '06/22/2022', 15000, 8, 1, 'Aceptado', ''),
(6, '06/23/2022', 12000, 8, 1, 'Rechazado', ''),
(7, '06/23/2022', 45000, 8, 10, 'Aceptado', ''),
(8, '06/23/2022', 12000, 8, 7, 'Aceptado', ''),
(9, '06/23/2022', 25000, 8, 20, 'Aceptado', ''),
(10, '06/23/2022', 36000, 8, 11, 'Aceptado', ''),
(11, '06/23/2022', 33000, 8, 3, 'Rechazado', 'No hay costillas'),
(12, '06/23/2022', 28000, 8, 1, 'Aceptado', ''),
(13, '06/23/2022', 31000, 8, 1, 'Aceptado', ''),
(14, '06/23/2022', 24000, 8, 20, 'Aceptado', ''),
(15, '06/23/2022', 33000, 8, 20, 'Aceptado', ''),
(16, '06/23/2022', 24000, 8, 15, 'Aceptado', ''),
(17, '06/23/2022', 28000, 8, 4, 'Aceptado', ''),
(18, '06/23/2022', 20000, 8, 20, 'Pendiente', ''),
(19, '06/23/2022', 15000, 8, 2, 'Rechazado', 'No hay arepas'),
(20, '06/23/2022', 20000, 8, 17, 'Aceptado', ''),
(21, '06/23/2022', 25000, 8, 9, 'Aceptado', ''),
(22, '06/23/2022', 43000, 8, 3, 'Pendiente', ''),
(23, '06/23/2022', 8000, 8, 8, 'Aceptado', ''),
(24, '06/23/2022', 47000, 8, 19, 'Rechazado', 'No hay perros ni hamburguesas'),
(25, '06/23/2022', 66000, 8, 14, 'Pendiente', ''),
(26, '06/23/2022', 36000, 8, 1, 'Aceptado', ''),
(27, '06/23/2022', 12000, 8, 4, 'Pendiente', ''),
(28, '06/23/2022', 37000, 8, 4, 'Rechazado', 'no hay costillas\n');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `detallecomanda`
--

CREATE TABLE `detallecomanda` (
  `idDetalleComanda` int(11) NOT NULL,
  `idComanda` int(11) NOT NULL,
  `idProducto` int(11) NOT NULL,
  `cantidad` int(11) NOT NULL,
  `totalProducto` float NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `detallecomanda`
--

INSERT INTO `detallecomanda` (`idDetalleComanda`, `idComanda`, `idProducto`, `cantidad`, `totalProducto`, `estado`) VALUES
(1, 1, 7, 3, 60000, 'Rechazado'),
(2, 1, 2, 4, 48000, 'Rechazado'),
(3, 1, 4, 1, 8000, 'Rechazado'),
(4, 1, 6, 2, 6000, ''),
(5, 1, 3, 1, 13000, ''),
(6, 2, 2, 1, 12000, ''),
(7, 2, 3, 1, 13000, ''),
(8, 3, 2, 1, 12000, ''),
(11, 5, 2, 1, 12000, ''),
(12, 5, 6, 1, 3000, ''),
(13, 6, 2, 1, 12000, ''),
(14, 7, 7, 1, 20000, ''),
(15, 7, 2, 1, 12000, ''),
(16, 7, 3, 1, 13000, ''),
(17, 8, 2, 1, 12000, ''),
(18, 9, 3, 1, 13000, ''),
(19, 9, 2, 1, 12000, ''),
(20, 10, 2, 3, 36000, ''),
(21, 11, 3, 1, 13000, 'Rechazado'),
(22, 11, 7, 1, 20000, ''),
(23, 12, 7, 1, 20000, ''),
(24, 12, 4, 1, 8000, ''),
(25, 14, 2, 2, 24000, ''),
(26, 15, 3, 1, 13000, ''),
(27, 15, 7, 1, 20000, ''),
(28, 16, 4, 3, 24000, ''),
(29, 17, 7, 1, 20000, ''),
(30, 17, 4, 1, 8000, ''),
(31, 18, 4, 1, 8000, ''),
(32, 18, 2, 1, 12000, ''),
(33, 19, 2, 1, 12000, ''),
(34, 19, 6, 1, 3000, 'Rechazado'),
(35, 20, 2, 1, 12000, ''),
(36, 20, 4, 1, 8000, ''),
(37, 21, 2, 1, 12000, ''),
(38, 21, 3, 1, 13000, ''),
(39, 22, 4, 3, 24000, ''),
(40, 22, 6, 2, 6000, ''),
(41, 22, 3, 1, 13000, ''),
(42, 23, 4, 1, 8000, ''),
(43, 24, 2, 3, 36000, 'Rechazado'),
(44, 24, 6, 1, 3000, ''),
(45, 24, 4, 1, 8000, 'Rechazado'),
(46, 25, 7, 2, 40000, ''),
(47, 25, 3, 2, 26000, ''),
(48, 26, 2, 3, 36000, ''),
(49, 27, 2, 1, 12000, ''),
(50, 28, 3, 1, 13000, 'Rechazado'),
(51, 28, 2, 2, 24000, '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `mesa`
--

CREATE TABLE `mesa` (
  `idMesa` int(11) NOT NULL,
  `estado` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `mesa`
--

INSERT INTO `mesa` (`idMesa`, `estado`) VALUES
(1, 'Ocupado'),
(2, 'disponible'),
(3, 'disponible'),
(4, 'disponible'),
(5, 'disponible'),
(6, 'disponible'),
(7, 'disponible'),
(8, 'Ocupado'),
(9, 'Ocupado'),
(10, 'disponible'),
(11, 'disponible'),
(12, 'disponible'),
(13, 'disponible'),
(14, 'disponible'),
(15, 'disponible'),
(16, 'disponible'),
(17, 'disponible'),
(18, 'disponible'),
(19, 'disponible'),
(20, 'disponible');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `producto`
--

CREATE TABLE `producto` (
  `idProducto` int(11) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `descripcion` varchar(200) NOT NULL,
  `costoUnidad` float NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `producto`
--

INSERT INTO `producto` (`idProducto`, `nombre`, `descripcion`, `costoUnidad`) VALUES
(2, 'hamburguesa', 'una hamburguesa', 12000),
(3, 'costillas', 'unas costillas de las goods', 13000),
(4, 'perro', 'un perro caliente', 8000),
(6, 'arepas de queso', 'arepitas melass', 3000),
(7, 'pechuga', 'pechugirris xd', 20000);

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `reserva`
--

CREATE TABLE `reserva` (
  `idReserva` int(11) NOT NULL,
  `idMesa` int(11) NOT NULL,
  `fecha` varchar(50) NOT NULL,
  `hora` varchar(50) NOT NULL,
  `nombreCliente` varchar(50) NOT NULL,
  `apellidoCliente` varchar(50) NOT NULL,
  `notas` varchar(200) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `reserva`
--

INSERT INTO `reserva` (`idReserva`, `idMesa`, `fecha`, `hora`, `nombreCliente`, `apellidoCliente`, `notas`) VALUES
(2, 1, '06/22/2022', '20:00', 'Chato', 'Botia', ''),
(4, 1, '06/21/2022', '19:00', 'Harold', 'Rueda', 'dasfda'),
(7, 2, '06/23/2022', '17:00', 'Felipe', 'Alferez', ''),
(8, 18, '06/23/2022', '19:00', 'Gitssy', 'Medina', 'Cita Romantica\n'),
(9, 20, '06/23/2022', '20:00', 'Reynaldo', 'Rueda', '');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `usuario`
--

CREATE TABLE `usuario` (
  `idUsuario` int(11) NOT NULL,
  `username` varchar(30) NOT NULL,
  `password` varchar(100) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `apellido` varchar(50) NOT NULL,
  `rol` varchar(30) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Volcado de datos para la tabla `usuario`
--

INSERT INTO `usuario` (`idUsuario`, `username`, `password`, `nombre`, `apellido`, `rol`) VALUES
(1, 'harryt', '$2a$10$GOUyqXqp0e1gpEe9G6Y3z.0KA8TJJ2ycqCxUJ49htCFzlgKE992k2', 'Harold', 'Rueda', 'admin'),
(2, 'chozkar', '$2a$10$E12hZXtWvEOQbLp/ZOb0/uxhYQupknRATbzX/KycAed.EOozD7bdC', 'Oscar', 'Bayona', 'admin'),
(3, 'quasi', '', 'Felipe', 'Alferez', 'admin'),
(4, 'admin', '$2a$10$0prisSx6Kt1AuBsTcZCK4.69fenYwNAY4BnGWwubaBpPD0AuXCgha', 'Carlos', 'Mendoza', 'admin'),
(8, 'mesero', '$2a$10$qd0ZRkCGZ6MGvwvaK3BeUeQOUFNzIGm.KOYYE/BincEZqbwol2pjK', 'Mesero', 'Numero1', 'mesero'),
(9, 'pase', '$2a$10$p.FnwpjxFqZmvLOogmXU7.kpJC/iwaejDwdjUOxLbtYovrIo8rt2W', 'Prueba', 'Pase', 'pase'),
(26, 'gitda', '', 'talia', 'medina', 'admin');

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `comanda`
--
ALTER TABLE `comanda`
  ADD PRIMARY KEY (`idComanda`),
  ADD KEY `FK_MESA_COMANDA` (`idMesa`),
  ADD KEY `FK_MESERO_COMANDA` (`idUsuario`);

--
-- Indices de la tabla `detallecomanda`
--
ALTER TABLE `detallecomanda`
  ADD PRIMARY KEY (`idDetalleComanda`,`idComanda`,`idProducto`),
  ADD KEY `FK_COMANDA_DETALLE` (`idComanda`),
  ADD KEY `FK_PRODUCTO_DETALLE` (`idProducto`);

--
-- Indices de la tabla `mesa`
--
ALTER TABLE `mesa`
  ADD PRIMARY KEY (`idMesa`);

--
-- Indices de la tabla `producto`
--
ALTER TABLE `producto`
  ADD PRIMARY KEY (`idProducto`);

--
-- Indices de la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD PRIMARY KEY (`idReserva`),
  ADD KEY `FK_MESA_RESERVA` (`idMesa`);

--
-- Indices de la tabla `usuario`
--
ALTER TABLE `usuario`
  ADD PRIMARY KEY (`idUsuario`),
  ADD UNIQUE KEY `username` (`username`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `comanda`
--
ALTER TABLE `comanda`
  MODIFY `idComanda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de la tabla `detallecomanda`
--
ALTER TABLE `detallecomanda`
  MODIFY `idDetalleComanda` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=52;

--
-- AUTO_INCREMENT de la tabla `producto`
--
ALTER TABLE `producto`
  MODIFY `idProducto` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=12;

--
-- AUTO_INCREMENT de la tabla `reserva`
--
ALTER TABLE `reserva`
  MODIFY `idReserva` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=10;

--
-- AUTO_INCREMENT de la tabla `usuario`
--
ALTER TABLE `usuario`
  MODIFY `idUsuario` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=28;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `comanda`
--
ALTER TABLE `comanda`
  ADD CONSTRAINT `FK_MESA_COMANDA` FOREIGN KEY (`idMesa`) REFERENCES `mesa` (`idMesa`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_MESERO_COMANDA` FOREIGN KEY (`idUsuario`) REFERENCES `usuario` (`idUsuario`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `detallecomanda`
--
ALTER TABLE `detallecomanda`
  ADD CONSTRAINT `FK_COMANDA_DETALLE` FOREIGN KEY (`idComanda`) REFERENCES `comanda` (`idComanda`) ON UPDATE CASCADE,
  ADD CONSTRAINT `FK_PRODUCTO_DETALLE` FOREIGN KEY (`idProducto`) REFERENCES `producto` (`idProducto`) ON UPDATE CASCADE;

--
-- Filtros para la tabla `reserva`
--
ALTER TABLE `reserva`
  ADD CONSTRAINT `FK_MESA_RESERVA` FOREIGN KEY (`idMesa`) REFERENCES `mesa` (`idMesa`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
