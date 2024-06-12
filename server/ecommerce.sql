-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Máy chủ: 127.0.0.1
-- Thời gian đã tạo: Th6 12, 2024 lúc 01:19 PM
-- Phiên bản máy phục vụ: 10.4.27-MariaDB
-- Phiên bản PHP: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Cơ sở dữ liệu: `ecommerce`
--

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `orders`
--

CREATE TABLE `orders` (
  `id` int(11) NOT NULL,
  `userID` int(11) NOT NULL,
  `address` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `publishedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `name` varchar(255) NOT NULL,
  `orderTotal` varchar(255) NOT NULL,
  `numItemsInCart` int(11) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `orders`
--

INSERT INTO `orders` (`id`, `userID`, `address`, `createdAt`, `updatedAt`, `publishedAt`, `name`, `orderTotal`, `numItemsInCart`) VALUES
(3, 5, 'Hội đồng Highland, Vương quốc Anh', '2024-06-09 11:00:05', '2024-06-09 11:00:05', '2024-06-09 11:00:05', 'nguyen quan', '59896.7', 3),
(4, 5, 'Hội đồng Highland, Vương quốc Anh', '2024-06-10 10:16:49', '2024-06-10 10:16:49', '2024-06-10 10:16:49', 'nguyen quan', '20298.9', 1),
(5, 5, '14/12/6 đường số 7, phường 7, gò vấp, hồ chí minh', '2024-06-10 10:17:05', '2024-06-10 10:17:05', '2024-06-10 10:17:05', 'nguyen quan', '40097.8', 2),
(6, 5, 'Hội đồng Highland, Vương quốc Anh', '2024-06-10 10:17:31', '2024-06-10 10:17:31', '2024-06-10 10:17:31', 'nguyen quan', '18098.9', 1),
(7, 5, 'Hội đồng Highland, Vương quốc Anh', '2024-06-10 10:17:44', '2024-06-10 10:17:44', '2024-06-10 10:17:44', 'nguyen quan', '125893.4', 6),
(8, 5, 'ha noi', '2024-06-10 10:17:57', '2024-06-10 10:17:57', '2024-06-10 10:17:57', 'nguyen quan', '10948.9', 1),
(9, 5, 'test address', '2024-06-10 10:18:17', '2024-06-10 10:18:17', '2024-06-10 10:18:17', 'nguyen quan', '18098.9', 1),
(10, 5, '14/12/6 đường số 7, phường 7, gò vấp, hồ chí minh', '2024-06-10 10:18:29', '2024-06-10 10:18:29', '2024-06-10 10:18:29', 'nguyen quan', '9848.9', 1),
(11, 5, 'ha noi', '2024-06-10 10:18:45', '2024-06-10 10:18:45', '2024-06-10 10:18:45', 'nguyen quan', '14798.9', 1),
(12, 5, 'Hội đồng Highland, Vương quốc Anh', '2024-06-10 10:18:59', '2024-06-10 10:18:59', '2024-06-10 10:18:59', 'adu vjp', '10948.9', 1),
(13, 5, 'Hội đồng Highland, Vương quốc Anh', '2024-06-10 10:19:11', '2024-06-10 10:19:11', '2024-06-10 10:19:11', 'nguyen quan', '18098.9', 1),
(14, 5, '14/12/6 đường số 7, phường 7, gò vấp, hồ chí minh', '2024-06-10 10:21:46', '2024-06-10 10:21:46', '2024-06-10 10:21:46', 'nguyen quan', '18098.9', 1);

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `order_items`
--

CREATE TABLE `order_items` (
  `id` int(11) NOT NULL,
  `orderID` int(11) NOT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` varchar(255) NOT NULL,
  `title` varchar(255) NOT NULL,
  `amount` int(11) NOT NULL,
  `company` varchar(255) NOT NULL,
  `productID` int(11) NOT NULL,
  `productColor` varchar(255) NOT NULL,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `order_items`
--

INSERT INTO `order_items` (`id`, `orderID`, `image`, `price`, `title`, `amount`, `company`, `productID`, `productColor`, `createdAt`, `updatedAt`) VALUES
(1, 3, 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600', '17999.00', 'avant-garde lamp', 1, 'Modenza', 19, '#33FF57', '2024-06-09 11:00:06', '2024-06-09 11:00:06'),
(2, 3, 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '17999.00', 'coffee table', 2, 'Modenza', 6, '#FFFF00', '2024-06-09 11:00:06', '2024-06-09 11:00:06'),
(3, 4, 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600', '17999.00', 'avant-garde lamp', 1, 'Modenza', 19, '#33FF57', '2024-06-10 10:16:49', '2024-06-10 10:16:49'),
(4, 5, 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '17999.00', 'coffee table', 2, 'Modenza', 6, '#FF5733', '2024-06-10 10:17:05', '2024-06-10 10:17:05'),
(5, 6, 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600', '15999.00', 'contemporary sofa', 1, 'Comfora', 13, '#FFFF00', '2024-06-10 10:17:31', '2024-06-10 10:17:31'),
(6, 7, 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600', '18999.00', 'King Bed', 6, 'Homestead', 22, '#FF5733', '2024-06-10 10:17:44', '2024-06-10 10:17:44'),
(7, 8, 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600', '9499.00', 'futuristic shelves', 1, 'Luxora', 16, '#33FF57', '2024-06-10 10:17:57', '2024-06-10 10:17:57'),
(8, 9, 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600', '15999.00', 'glass table', 1, 'Modenza', 21, '#FF5733', '2024-06-10 10:18:17', '2024-06-10 10:18:17'),
(9, 10, 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600', '8499.00', 'cutting-edge bed', 1, 'Homestead', 20, '#FFFF00', '2024-06-10 10:18:29', '2024-06-10 10:18:29'),
(10, 11, 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600', '12999.00', 'comfy bed', 1, 'Homestead', 7, '#FF5733', '2024-06-10 10:18:46', '2024-06-10 10:18:46'),
(11, 12, 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600', '9499.00', 'futuristic shelves', 1, 'Luxora', 16, '#33FF57', '2024-06-10 10:18:59', '2024-06-10 10:18:59'),
(12, 13, 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600', '15999.00', 'contemporary sofa', 1, 'Comfora', 13, '#FFFF00', '2024-06-10 10:19:11', '2024-06-10 10:19:11'),
(13, 14, 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600', '15999.00', 'glass table', 1, 'Modenza', 21, '#FF5733', '2024-06-10 10:21:46', '2024-06-10 10:21:46');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `products`
--

CREATE TABLE `products` (
  `id` int(11) NOT NULL,
  `title` varchar(255) NOT NULL,
  `company` varchar(255) DEFAULT NULL,
  `description` text DEFAULT NULL,
  `featured` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `publishedAt` datetime NOT NULL DEFAULT current_timestamp(),
  `category` varchar(255) DEFAULT NULL,
  `image` varchar(255) DEFAULT NULL,
  `price` decimal(10,2) NOT NULL,
  `shipping` tinyint(1) DEFAULT 0,
  `colors` longtext CHARACTER SET utf8mb4 COLLATE utf8mb4_bin DEFAULT NULL CHECK (json_valid(`colors`))
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `products`
--

INSERT INTO `products` (`id`, `title`, `company`, `description`, `featured`, `createdAt`, `updatedAt`, `publishedAt`, `category`, `image`, `price`, `shipping`, `colors`) VALUES
(4, 'sleek chair', 'Luxora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-01 11:14:57', '2023-08-10 10:17:13', '2023-08-01 11:15:39', 'Chairs', 'https://images.pexels.com/photos/116910/pexels-photo-116910.jpeg?auto=compress&cs=tinysrgb&w=1600', '19999.00', 0, '[\"#FF5733\",\"#33FF57\",\"#3366FF\",\"#FFFF00\"]'),
(5, 'modern sofa', 'Comfora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-02 14:25:10', '2023-08-08 14:04:21', '2023-08-02 14:25:28', 'Sofas', 'https://images.pexels.com/photos/6480707/pexels-photo-6480707.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '29999.00', 0, '[\"#FF5733\",\"#33FF57\",\"#FFFF00\"]'),
(6, 'coffee table', 'Modenza', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 1, '2023-08-02 14:32:02', '2023-08-04 07:35:16', '2023-08-02 14:32:05', 'Tables', 'https://images.pexels.com/photos/3679601/pexels-photo-3679601.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '17999.00', 0, '[\"#FF5733\",\"#FFFF00\"]'),
(7, 'comfy bed', 'Homestead', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 1, '2023-08-02 14:34:10', '2023-08-08 14:06:28', '2023-08-02 14:34:13', 'Beds', 'https://images.pexels.com/photos/1034584/pexels-photo-1034584.jpeg?auto=compress&cs=tinysrgb&w=1600', '12999.00', 0, '[\"#FF5733\"]'),
(8, 'wooden shelves', 'Artifex', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-02 14:36:43', '2023-08-04 07:35:59', '2023-08-02 14:36:46', 'Kids', 'https://images.pexels.com/photos/3932930/pexels-photo-3932930.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2', '11999.00', 1, '[\"#33FF57\",\"#3366FF\"]'),
(9, 'modern table', 'Modenza', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-08 14:02:24', '2023-08-08 14:53:24', '2023-08-08 14:02:33', 'Tables', 'https://images.pexels.com/photos/447592/pexels-photo-447592.jpeg?auto=compress&cs=tinysrgb&w=1600', '38999.00', 1, '[\"#33FF57\",\"#3366FF\"]'),
(10, 'sleek bed', 'Homestead', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 09:30:26', '2023-08-10 09:30:28', '2023-08-10 09:30:28', 'Beds', 'https://images.pexels.com/photos/16869701/pexels-photo-16869701/free-photo-of-modern-luxury-real-estate-property-interior-bedroom.jpeg?auto=compress&cs=tinysrgb&w=1600', '53999.00', 1, '[\"#FFFF00\",\"#3366FF\"]'),
(11, 'Minimalist Shelves', 'Artifex', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 09:31:43', '2023-08-10 09:31:46', '2023-08-10 09:31:45', 'Kids', 'https://images.pexels.com/photos/439227/pexels-photo-439227.jpeg?auto=compress&cs=tinysrgb&w=1600', '43999.00', 0, '[\"#FF5733\",\"#FFFF00\"]'),
(12, 'chic chair', 'Luxora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 09:32:58', '2023-08-10 09:33:03', '2023-08-10 09:33:03', 'Chairs', 'https://images.pexels.com/photos/5705090/pexels-photo-5705090.jpeg?auto=compress&cs=tinysrgb&w=1600', '33999.00', 1, '[\"#FF5733\",\"#33FF57\",\"#3366FF\"]'),
(13, 'contemporary sofa', 'Comfora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 09:34:24', '2023-08-10 09:34:27', '2023-08-10 09:34:26', 'Sofas', 'https://images.pexels.com/photos/1571459/pexels-photo-1571459.jpeg?auto=compress&cs=tinysrgb&w=1600', '15999.00', 0, '[\"#FFFF00\"]'),
(14, 'streamlined table', 'Modenza', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 09:36:07', '2023-08-10 09:36:09', '2023-08-10 09:36:09', 'Tables', 'https://images.pexels.com/photos/890669/pexels-photo-890669.jpeg?auto=compress&cs=tinysrgb&w=1600', '20999.00', 1, '[\"#FF5733\",\"#3366FF\"]'),
(15, 'stylish bed', 'Homestead', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:01:20', '2023-08-10 10:01:24', '2023-08-10 10:01:23', 'Beds', 'https://images.pexels.com/photos/6758398/pexels-photo-6758398.jpeg?auto=compress&cs=tinysrgb&w=1600', '16999.00', 1, '[\"#FF5733\"]'),
(16, 'futuristic shelves', 'Luxora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:02:51', '2023-08-10 10:02:53', '2023-08-10 10:02:53', 'Kids', 'https://images.pexels.com/photos/2177482/pexels-photo-2177482.jpeg?auto=compress&cs=tinysrgb&w=1600', '9499.00', 1, '[\"#33FF57\",\"#FFFF00\"]'),
(17, 'velvet sofa', 'Luxora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:04:26', '2023-08-10 10:04:29', '2023-08-10 10:04:28', 'Chairs', 'https://images.pexels.com/photos/4916510/pexels-photo-4916510.jpeg?auto=compress&cs=tinysrgb&w=1600', '28999.00', 1, '[\"#FF5733\",\"#33FF57\",\"#FFFF00\"]'),
(18, 'reclining sofa', 'Comfora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:05:57', '2023-08-10 10:06:01', '2023-08-10 10:06:01', 'Sofas', 'https://images.pexels.com/photos/4316737/pexels-photo-4316737.jpeg?auto=compress&cs=tinysrgb&w=1600', '32999.00', 0, '[\"#FF5733\",\"#33FF57\",\"#3366FF\",\"#FFFF00\"]'),
(19, 'avant-garde lamp', 'Modenza', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 1, '2023-08-10 10:07:41', '2023-08-10 10:16:43', '2023-08-10 10:07:44', 'Kids', 'https://images.pexels.com/photos/943150/pexels-photo-943150.jpeg?auto=compress&cs=tinysrgb&w=1600', '17999.00', 0, '[\"#33FF57\",\"#3366FF\"]'),
(20, 'cutting-edge bed', 'Homestead', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:08:58', '2023-08-10 10:09:01', '2023-08-10 10:09:01', 'Beds', 'https://images.pexels.com/photos/2029694/pexels-photo-2029694.jpeg?auto=compress&cs=tinysrgb&w=1600', '8499.00', 1, '[\"#FFFF00\",\"#3366FF\"]'),
(21, 'glass table', 'Modenza', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:10:46', '2023-08-10 10:10:48', '2023-08-10 10:10:48', 'Tables', 'https://images.pexels.com/photos/1571452/pexels-photo-1571452.jpeg?auto=compress&cs=tinysrgb&w=1600', '15999.00', 0, '[\"#FF5733\",\"#3366FF\"]'),
(22, 'King Bed', 'Homestead', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:11:38', '2023-08-10 10:11:40', '2023-08-10 10:11:40', 'Beds', 'https://images.pexels.com/photos/6489083/pexels-photo-6489083.jpeg?auto=compress&cs=tinysrgb&w=1600', '18999.00', 1, '[\"#FF5733\"]'),
(23, 'Toy Shelf', 'Luxora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:12:28', '2023-08-10 10:12:30', '2023-08-10 10:12:30', 'Kids', 'https://images.pexels.com/photos/3932929/pexels-photo-3932929.jpeg?auto=compress&cs=tinysrgb&w=1600', '7999.00', 0, '[\"#33FF57\",\"#FFFF00\"]'),
(24, 'Lounge Chair', 'Luxora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:13:29', '2023-08-10 10:15:29', '2023-08-10 10:13:31', 'Chairs', 'https://images.pexels.com/photos/2082090/pexels-photo-2082090.jpeg?auto=compress&cs=tinysrgb&w=1600', '25999.00', 0, '[\"#FF5733\",\"#33FF57\",\"#3366FF\"]'),
(25, 'Sectional Sofa', 'Comfora', 'Cloud bread VHS hell of banjo bicycle rights jianbing umami mumblecore etsy 8-bit pok pok +1 wolf. Vexillologist yr dreamcatcher waistcoat, authentic chillwave trust fund. Viral typewriter fingerstache pinterest pork belly narwhal. Schlitz venmo everyday carry kitsch pitchfork chillwave iPhone taiyaki trust fund hashtag kinfolk microdosing gochujang live-edge', 0, '2023-08-10 10:14:14', '2023-08-10 10:14:17', '2023-08-10 10:14:16', 'Sofas', 'https://images.pexels.com/photos/4857775/pexels-photo-4857775.jpeg?auto=compress&cs=tinysrgb&w=1600', '35999.00', 1, '[\"#FF5733\",\"#33FF57\",\"#3366FF\",\"#FFFF00\"]');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `sequelizemeta`
--

CREATE TABLE `sequelizemeta` (
  `name` varchar(255) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8 COLLATE=utf8_unicode_ci;

--
-- Đang đổ dữ liệu cho bảng `sequelizemeta`
--

INSERT INTO `sequelizemeta` (`name`) VALUES
('create-order-item.js'),
('create-order.js'),
('create-product.js'),
('create-user.js');

-- --------------------------------------------------------

--
-- Cấu trúc bảng cho bảng `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `username` varchar(255) NOT NULL,
  `email` varchar(255) NOT NULL,
  `password` varchar(255) NOT NULL,
  `provider` varchar(255) NOT NULL DEFAULT 'local',
  `confirmed` tinyint(1) DEFAULT 1,
  `blocked` tinyint(1) DEFAULT 0,
  `createdAt` datetime NOT NULL DEFAULT current_timestamp(),
  `updatedAt` datetime NOT NULL DEFAULT current_timestamp()
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Đang đổ dữ liệu cho bảng `users`
--

INSERT INTO `users` (`id`, `username`, `email`, `password`, `provider`, `confirmed`, `blocked`, `createdAt`, `updatedAt`) VALUES
(1, 'kendy star', 'kendystar149@gmail.com', '$2a$12$qNdkcAFXLlCvFRzRQM1puuosMMsvhviNsfnBwlW9y.Fixvo3h5n.e', 'local', 1, 0, '2024-06-05 07:53:25', '2024-06-05 07:53:25'),
(2, 'kendy star', 'kendystar148@gmail.com', '$2a$12$oA/n9g8SwzEz.hPVWgFUGO32nNqUyJpRJKG8wxbAdgE1zyuJgK7YW', 'local', 1, 0, '2024-06-05 07:54:16', '2024-06-05 07:54:16'),
(3, 'kendy star', 'kendystar147@gmail.com', '$2a$12$l9.0ZYl9RaeCatSBl8nexep6OpkXw5wy2aaxV89knhCMgQFymGAye', 'local', 1, 0, '2024-06-05 07:58:13', '2024-06-05 07:58:13'),
(4, 'kimochiee', 'kendystar150@gmail.com', '$2a$12$ybxJZRXsosWhf.OFz/OYwu5v6S/rqhPplVfXNR9O/gqQ84uQBvLUy', 'local', 1, 0, '2024-06-06 06:18:17', '2024-06-06 06:18:17'),
(5, 'guest user', 'test@test.com', '$2a$12$/Ng2OTYMJBLzc6zrW1CdzOKzmzYyCmcBbrNmhwKdrAy/6srWBlLd6', 'local', 1, 0, '2024-06-08 07:29:10', '2024-06-08 07:29:10');

--
-- Chỉ mục cho các bảng đã đổ
--

--
-- Chỉ mục cho bảng `orders`
--
ALTER TABLE `orders`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `order_items`
--
ALTER TABLE `order_items`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `products`
--
ALTER TABLE `products`
  ADD PRIMARY KEY (`id`);

--
-- Chỉ mục cho bảng `sequelizemeta`
--
ALTER TABLE `sequelizemeta`
  ADD PRIMARY KEY (`name`),
  ADD UNIQUE KEY `name` (`name`);

--
-- Chỉ mục cho bảng `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`),
  ADD UNIQUE KEY `email` (`email`);

--
-- AUTO_INCREMENT cho các bảng đã đổ
--

--
-- AUTO_INCREMENT cho bảng `orders`
--
ALTER TABLE `orders`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=15;

--
-- AUTO_INCREMENT cho bảng `order_items`
--
ALTER TABLE `order_items`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=14;

--
-- AUTO_INCREMENT cho bảng `products`
--
ALTER TABLE `products`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=26;

--
-- AUTO_INCREMENT cho bảng `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=6;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
