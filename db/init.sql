create table shelfie (
id serial primary key,
name varchar(25),
price integer,
img text);

insert into shelfie (name, price, img)
values
('antique writing desk', 250, 'https://imageresizer.furnituredealer.net/img/remote/images.furnituredealer.net/img/products%2Ftheodore_alexander%2Fcolor%2Fcampaign%206_7105-014bd-b1.jpg?width=878&height=600&scale=both&trim.threshold=80'),
('leather journal', 30, 'https://images-na.ssl-images-amazon.com/images/I/91KNwuvtHyL._AC_SL1500_.jpg'),
('fountain pen', 25, 'https://shop.r10s.jp/hunnyhunt/cabinet/sailor/s117new_2.jpg'),
('inkwell', 15, 'https://cdn.shopify.com/s/files/1/0130/8502/products/clm39_600x.jpg?v=1571438566'),
('inpirational quote board', 10, 'https://images-na.ssl-images-amazon.com/images/I/813BlK8k%2BUL._AC_SL1500_.jpg');