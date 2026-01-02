-- phpMyAdmin SQL Dump
-- version 5.2.1
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Tempo de geração: 02/01/2026 às 13:53
-- Versão do servidor: 10.4.32-MariaDB
-- Versão do PHP: 8.2.12

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `app_vendas`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `carts`
--

CREATE TABLE `carts` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `user_id` bigint(20) UNSIGNED NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `carts`
--

INSERT INTO `carts` (`id`, `user_id`, `created_at`, `updated_at`) VALUES
(1, 1, '2026-01-01 21:45:16', '2026-01-01 21:45:16'),
(2, 2, '2026-01-01 21:45:16', '2026-01-01 21:45:16'),
(3, 3, '2026-01-01 21:45:16', '2026-01-01 21:45:16'),
(4, 4, '2026-01-01 21:45:16', '2026-01-01 21:45:16'),
(5, 5, '2026-01-01 21:45:16', '2026-01-01 21:45:16');

-- --------------------------------------------------------

--
-- Estrutura para tabela `cart_items`
--

CREATE TABLE `cart_items` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `cart_id` bigint(20) UNSIGNED NOT NULL,
  `product_id` bigint(20) UNSIGNED NOT NULL,
  `quantity` int(11) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp()
) ;

--
-- Despejando dados para a tabela `cart_items`
--

INSERT INTO `cart_items` (`id`, `cart_id`, `product_id`, `quantity`, `created_at`, `updated_at`) VALUES
(1, 1, 9, 11, '2026-01-02 09:40:37', '2026-01-02 09:41:13'),
(3, 1, 15, 2, '2026-01-02 09:41:09', '2026-01-02 09:41:11'),
(15, 2, 9, 1, '2026-01-02 09:42:27', '2026-01-02 09:42:27'),
(16, 2, 10, 1, '2026-01-02 09:42:28', '2026-01-02 09:42:28');

-- --------------------------------------------------------

--
-- Estrutura para tabela `products`
--

CREATE TABLE `products` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `product_name` varchar(180) NOT NULL,
  `product_stock_quantity` int(11) NOT NULL,
  `product_price` decimal(10,2) NOT NULL,
  `product_description` text NOT NULL,
  `product_is_active` tinyint(1) NOT NULL DEFAULT 1,
  `created_at` datetime NOT NULL DEFAULT current_timestamp(),
  `updated_at` datetime NOT NULL DEFAULT current_timestamp() ON UPDATE current_timestamp(),
  `deleted_at` datetime DEFAULT NULL,
  `image_url` varchar(500) NOT NULL,
  `thumb_url` varchar(500) NOT NULL
) ;

--
-- Despejando dados para a tabela `products`
--

INSERT INTO `products` (`id`, `product_name`, `product_stock_quantity`, `product_price`, `product_description`, `product_is_active`, `created_at`, `updated_at`, `deleted_at`, `image_url`, `thumb_url`) VALUES
(9, 'Mouse Gamer RGB', 50, 149.90, 'Mouse gamer com 6 botões e iluminação RGB', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7', 'https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?w=300'),
(10, 'Teclado Mecânico', 30, 349.90, 'Teclado mecânico switch blue', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300'),
(11, 'Headset Gamer', 40, 299.90, 'Headset com som surround 7.1', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1585298723682-711556b1cfd5', 'https://images.unsplash.com/photo-1585298723682-711556b1cfd5?w=300'),
(12, 'Monitor 24 Full HD', 20, 899.90, 'Monitor IPS 24 polegadas Full HD', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04', 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300'),
(13, 'Mousepad XXL', 100, 79.90, 'Mousepad extra grande antiderrapante', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1621263764928-df1444c5e859', 'https://images.unsplash.com/photo-1621263764928-df1444c5e859?w=300'),
(14, 'Webcam Full HD', 15, 259.90, 'Webcam Full HD com microfone embutido', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04', 'https://images.unsplash.com/photo-1587825140708-dfaf72ae4b04?w=300'),
(15, 'Cadeira Gamer', 10, 1299.90, 'Cadeira gamer ergonômica', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1616627982592-9c8e2e1c8b4d', 'https://images.unsplash.com/photo-1616627982592-9c8e2e1c8b4d?w=300'),
(16, 'Notebook i5', 8, 4599.90, 'Notebook Intel i5 16GB RAM SSD 512GB', 1, '2026-01-02 09:21:16', '2026-01-02 09:21:16', NULL, 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8', 'https://images.unsplash.com/photo-1517336714731-489689fd1ca8?w=300');

-- --------------------------------------------------------

--
-- Estrutura para tabela `users`
--

CREATE TABLE `users` (
  `id` bigint(20) UNSIGNED NOT NULL,
  `name` varchar(150) NOT NULL,
  `username` varchar(60) NOT NULL,
  `password_hash` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Despejando dados para a tabela `users`
--

INSERT INTO `users` (`id`, `name`, `username`, `password_hash`, `created_at`) VALUES
(1, 'Luis Felipe', 'luis', 'hash_luis_123', '2026-01-01 21:45:10'),
(2, 'Ana Souza', 'ana', 'hash_ana_456', '2026-01-01 21:45:10'),
(3, 'Carlos Silva', 'carlos', 'hash_carlos_789', '2026-01-01 21:45:10'),
(4, 'Mariana Lima', 'mariana', 'hash_mariana_321', '2026-01-01 21:45:10'),
(5, 'João Pedro', 'joao', 'hash_joao_654', '2026-01-01 21:45:10');

--
-- Índices para tabelas despejadas
--

--
-- Índices de tabela `carts`
--
ALTER TABLE `carts`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_carts_user_id` (`user_id`);

--
-- Índices de tabela `cart_items`
--
ALTER TABLE `cart_items`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_cart_items_cart_product` (`cart_id`,`product_id`),
  ADD KEY `idx_cart_items_cart_id` (`cart_id`),
  ADD KEY `idx_cart_items_product_id` (`product_id`);

--
-- Índices de tabela `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Índices de tabela `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `uq_users_username` (`username`);

--
-- AUTO_INCREMENT para tabelas despejadas
--

--
-- AUTO_INCREMENT de tabela `carts`
--
ALTER TABLE `carts`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=29;

--
-- AUTO_INCREMENT de tabela `cart_items`
--
ALTER TABLE `cart_items`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `products`
--
ALTER TABLE `products`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT;

--
-- AUTO_INCREMENT de tabela `users`
--
ALTER TABLE `users`
  MODIFY `id` bigint(20) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;

--
-- Restrições para tabelas despejadas
--

--
-- Restrições para tabelas `carts`
--
ALTER TABLE `carts`
  ADD CONSTRAINT `fk_carts_user` FOREIGN KEY (`user_id`) REFERENCES `users` (`id`) ON DELETE CASCADE ON UPDATE CASCADE;

--
-- Restrições para tabelas `cart_items`
--
ALTER TABLE `cart_items`
  ADD CONSTRAINT `fk_cart_items_cart` FOREIGN KEY (`cart_id`) REFERENCES `carts` (`id`) ON DELETE CASCADE ON UPDATE CASCADE,
  ADD CONSTRAINT `fk_cart_items_product` FOREIGN KEY (`product_id`) REFERENCES `products` (`id`) ON UPDATE CASCADE;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
