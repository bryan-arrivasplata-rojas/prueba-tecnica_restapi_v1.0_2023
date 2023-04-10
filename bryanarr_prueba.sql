CREATE TABLE `category` (
  `idCategory` int(10) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `category`
--

INSERT INTO `category` (`idCategory`, `name`, `description`) VALUES
(1, 'mobile', 'Teléfonos inteligentes'),
(2, 'earphones', 'Audífonos'),
(3, 'tv', 'Televisores de todo tipo');

-- --------------------------------------------------------

--
-- Estructura de tabla para la tabla `product`
--

CREATE TABLE `product` (
  `idProduct` int(10) NOT NULL,
  `name` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `description` varchar(200) COLLATE utf8_unicode_ci NOT NULL,
  `price` float(10,2) NOT NULL,
  `cost` float(10,2) NOT NULL,
  `stock` int(4) NOT NULL,
  `idCategory` int(10) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Volcado de datos para la tabla `product`
--

INSERT INTO `product` (`idProduct`, `name`, `description`, `price`, `cost`, `stock`, `idCategory`) VALUES
(1, 'iPhone 13', 'El iPhone 13 es el último modelo de teléfono inteligente de Apple.', 3200.00, 1660.00, 10, 1),
(2, 'Samsung Galaxy S21', 'El Samsung Galaxy S21 es un teléfono inteligente Android de alta gama con una pantalla AMOLED de 6.2 pulgadas', 3800.00, 2700.00, 15, 1),
(3, 'Google Pixel 6', 'El Google Pixel 6 es el último modelo de teléfono inteligente de Google, lanzado en octubre de 2021.', 3799.00, 1600.00, 5, 1),
(4, 'Apple AirPods Pro', 'Earphones inalámbricos con cancelación activa de ruido, diseño ergonómico y resistencia al agua y al sudor. Además, cuentan con tecnología de sonido envolvente y control táctil.', 1029.00, 750.00, 20, 2),
(5, 'Sony WF-1000XM4', 'Earphones inalámbricos con cancelación activa de ruido, duración de batería de hasta 8 horas y un estuche que ofrece hasta 24 horas adicionales de carga.', 1379.00, 1000.00, 5, 2);

--
-- Índices para tablas volcadas
--

--
-- Indices de la tabla `category`
--
ALTER TABLE `category`
  ADD PRIMARY KEY (`idCategory`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Indices de la tabla `product`
--
ALTER TABLE `product`
  ADD PRIMARY KEY (`idProduct`),
  ADD UNIQUE KEY `name` (`name`),
  ADD KEY `product_category` (`idCategory`);

--
-- AUTO_INCREMENT de las tablas volcadas
--

--
-- AUTO_INCREMENT de la tabla `category`
--
ALTER TABLE `category`
  MODIFY `idCategory` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=4;

--
-- AUTO_INCREMENT de la tabla `product`
--
ALTER TABLE `product`
  MODIFY `idProduct` int(10) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=9;

--
-- Restricciones para tablas volcadas
--

--
-- Filtros para la tabla `product`
--
ALTER TABLE `product`
  ADD CONSTRAINT `product_category` FOREIGN KEY (`idCategory`) REFERENCES `category` (`idCategory`);
COMMIT;