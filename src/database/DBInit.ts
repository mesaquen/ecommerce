import db from './DBConnection'
const SQL = [
  'DROP TABLE IF EXISTS product;',
  'DROP TABLE IF EXISTS image;',
  'DROP TABLE IF EXISTS rating;',

  'create table if not exists product (id text, title text, description text, price number, discount number);',
  'create table if not exists image (id text, url text, product_id text);',
  'create table if not exists rating (id text, score number, comment text, product_id text);',

  `insert into product (id, title, description, price, discount) values ('2c00db3f-5619-4ca2-bd73-eb0026e90922', 'Cadeado', 'desc', 25.5, 0)`,
  `insert into product (id, title, description, price, discount) values ('852f4dd4-dfb1-46d0-abe3-5e37fb0876b3', 'Chave de fenda', 'desc', 16.5, 0)`,
  `insert into product (id, title, description, price, discount) values ('b186d83e-4e05-4464-9e43-8aae4c1b215f', 'Chave inglesa', 'desc', 28.5, 15)`,
  `insert into product (id, title, description, price, discount) values ('0dfce32f-63cc-4802-a3fb-2093590d6511', 'Transistor BC547', 'desc', 1.5, 0)`,
  `insert into product (id, title, description, price, discount) values ('3ae9b624-e8fc-4825-9ecb-585b6c75a03d', 'Luva plástica', 'desc', 2.5, 0)`,
  `insert into product (id, title, description, price, discount) values ('0c804ca9-4819-46cc-a78e-2082ff6a28a0', 'Escova de dentes', 'desc', 3.75, 0)`,
  `insert into product (id, title, description, price, discount) values ('d77fd380-2fb1-4d93-9d2a-c036e6e00a94', 'Desodorante', 'desc', 7.5, 0)`,
  `insert into product (id, title, description, price, discount) values ('edf059e3-39ed-4035-b624-fe386dc0a5a8', 'Vinho tinto', 'desc', 25.5, 30)`,
  `insert into product (id, title, description, price, discount) values ('e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Milho enlatado', 'desc', 1.5, 0)`,
  `insert into product (id, title, description, price, discount) values ('49461ee8-0608-483b-b97c-d205b1610d14', 'Arroz', 'desc', 25.5, 40)`,
  `insert into product (id, title, description, price, discount) values ('18461c45-ba89-4356-9294-3b17bd5d4524', 'Feijão', 'desc', 10, 12)`,
  `insert into product (id, title, description, price, discount) values ('ee2cb700-70e5-4815-bd23-8c98836ac514', 'Sabão em pó', 'desc', 17, 10)`,
  `insert into product (id, title, description, price, discount) values ('f7ce7d5a-1b06-4f1e-ba69-adbe7969b105', 'Detergente', 'desc', 3, 12)`,
  `insert into product (id, title, description, price, discount) values ('6c68483f-9444-4b3c-baaf-be09319f8c47', 'Vassoura', 'desc', 14, 0)`,
  `insert into product (id, title, description, price, discount) values ('10379628-b89f-4120-a275-cd087bf54d61', 'Rodo', 'desc', 12, 10)`,

  `insert into image (id, url, product_id) values ('da8979ee-1d10-41ff-93d5-5882d298a1cc', 'https://io.convertiez.com.br/m/amegaloja/shop/products/images/11457/large/cadeado-de-latao-macico-g-45mm-gold_4616.jpg', '2c00db3f-5619-4ca2-bd73-eb0026e90922')`,
  `insert into image (id, url, product_id) values ('e7f00881-3127-48a5-a169-a284f1b9d83e', 'https://img.lojadomecanico.com.br/IMAGENS/2/121/87206/Chave-de-Fenda-14-x-5-Pol-tramontina-415000311.JPG', '852f4dd4-dfb1-46d0-abe3-5e37fb0876b3')`,
  `insert into image (id, url, product_id) values ('eb1eaf57-8e1f-435d-b39e-8af6ba0752bc', 'https://img.lojadomecanico.com.br/IMAGENS/2/121/90703/Kit-de-Chaves-de-Fenda-e-Phillips-com-6--tramontina-415165071.JPG', '852f4dd4-dfb1-46d0-abe3-5e37fb0876b3')`,
  `insert into image (id, url, product_id) values ('40d30da3-dd94-4ccc-8f10-4a5d1949b9cb', 'http://i.mlcdn.com.br/1500x1500/chave-inglesa-8-200-mmforce-line-5752-208924000.jpg', 'b186d83e-4e05-4464-9e43-8aae4c1b215f')`,
  `insert into image (id, url, product_id) values ('b159233e-6229-47d4-b92c-76d23085648d', 'https://potentiallabs.com/cart/image/cache/catalog/Oct-2018%20components/bc5471-800x800.png', '0dfce32f-63cc-4802-a3fb-2093590d6511')`,
  `insert into image (id, url, product_id) values ('bade3bce-61f9-42fe-97f1-ba4abacb3f51', 'https://potentiallabs.com/cart/image/cache/catalog/BC547-600x315.jpg', '0dfce32f-63cc-4802-a3fb-2093590d6511')`,
  `insert into image (id, url, product_id) values ('39ff5984-93f1-4e2a-915c-402d9237413e', 'https://pghorticulture.co.uk/media/catalog/product/cache/1/image/1200x1200/9df78eab33525d08d6e5fb8d27136e95/7/1/712208a_39.jpg', '3ae9b624-e8fc-4825-9ecb-585b6c75a03d')`,
  `insert into image (id, url, product_id) values ('3eff6897-deb3-4e13-bd3e-b3ede5abe410', 'http://www.superdentalstore.com/wp-content/uploads/2006/10/GUM-Soft-Compact-Angle-Toothbrush-12-Pack-Value.jpg', '0c804ca9-4819-46cc-a78e-2082ff6a28a0')`,
  `insert into image (id, url, product_id) values ('3fc9c60f-861a-4e09-914d-77fcc7f24ae7', 'https://www.ortodontiasergiocasarim.com/wp-content/uploads/2017/08/Dicas-para-escolha-e-conserva%C3%A7%C3%A3o-da-sua-escova-de-dentes.jpg', '0c804ca9-4819-46cc-a78e-2082ff6a28a0')`,
  `insert into image (id, url, product_id) values ('0332ddf2-e582-491c-b561-38b92b4c4a1e', 'https://www.drogariaminasbrasil.com.br/media/product/85f/desodorante-aerosol-nivea-for-men-sport-150ml-2ea.jpg', 'd77fd380-2fb1-4d93-9d2a-c036e6e00a94')`,
  `insert into image (id, url, product_id) values ('c6cacc33-0f2b-45e2-a2bc-a48d04f8abb4', 'http://static.wine-searcher.net/images/labels/77/31/caves-primavera-casal-mor-reserva-dao-portugal-10537731.jpg', 'edf059e3-39ed-4035-b624-fe386dc0a5a8')`,
  `insert into image (id, url, product_id) values ('72b77711-f50b-47ba-ab7f-6943c8070801', 'https://delicias-uk.com/10220-large_default/milho-verde-ole-em-conserva-lata-300gr.jpg', 'e92a004b-45b0-4176-9fc0-1d1a26242cfb')`,
  `insert into image (id, url, product_id) values ('188a1f49-3e37-41d8-90c7-fc7d1bd03bee', 'https://brasileiroonline.co.uk/wp-content/uploads/2018/09/510679.jpg', '49461ee8-0608-483b-b97c-d205b1610d14')`,
  `insert into image (id, url, product_id) values ('d9aef3ad-0daa-4a09-9505-d9a8c338a55e', 'http://paodeacucar.com.br/img/uploads/1/42/530042.jpg  ', '18461c45-ba89-4356-9294-3b17bd5d4524')`,
  `insert into image (id, url, product_id) values ('2e787fc0-399a-401a-9806-5cc053fcde9c', 'https://carrinho.extra.com.br/ProdutosdeLimpeza/LimpezadeRoupa/SabaoemPoouPedra/3757588/67617611/Sabao-em-Po-Ariel-1kg-3757588.jpg', 'ee2cb700-70e5-4815-bd23-8c98836ac514')`,
  `insert into image (id, url, product_id) values ('a299099a-deb7-4f7d-a49f-ff76e559b360', 'http://www.extra-imagens.com.br/ProdutosdeLimpeza/LimpezadeRoupa/SabaoemPoouPedra/3991742/85758837/Sabao-em-Po-Ariel-Com-Microesferas-1-kg-3991742.jpg', 'ee2cb700-70e5-4815-bd23-8c98836ac514')`,
  `insert into image (id, url, product_id) values ('1de50ef6-f79f-4c52-b702-e148febbb103', 'https://domuscatore.com/wp-content/uploads/2016/06/Detergente-Liquido-MINUANO-Neutro-500ml.jpg', 'f7ce7d5a-1b06-4f1e-ba69-adbe7969b105')`,
  `insert into image (id, url, product_id) values ('40620762-bc17-4a50-8cda-90b3a7e0e6ef', 'https://images.tcdn.com.br/img/img_prod/694926/detergente_minuano_lava_loucas_liquido_500_ml_360173_1_20191115133340.jpg', 'f7ce7d5a-1b06-4f1e-ba69-adbe7969b105')`,
  `insert into image (id, url, product_id) values ('d1082ebf-d5de-4db8-8df5-bcaa24f12360', 'https://www.extra-imagens.com.br/ProdutosdeLimpeza/AcessoriosdeLimpeza/vassouras/11336250/805454466/Vassoura-Tipo-Gari-Cepa-Plastica-7-Fileiras-80cm---Vonder-11336250.jpg', '6c68483f-9444-4b3c-baaf-be09319f8c47')`,
  `insert into image (id, url, product_id) values ('7e811792-3877-4878-9478-32988340356a', 'https://www.pontofrio-imagens.com.br/ProdutosdeLimpeza/AcessoriosdeLimpeza/rodos/1500297137/1144818726/rodo-limpa-vidros-cabo-50-cm-limpador-1500297137.jpg', '10379628-b89f-4120-a275-cd087bf54d61')`,
  `insert into image (id, url, product_id) values ('56955aa3-386b-4888-9e91-ab16aecf299e', 'https://http2.mlstatic.com/rodo-sem-cabo-para-limpa-vidros-telescopico-D_NQ_NP_743857-MLB31138327111_062019-O.jpg', '10379628-b89f-4120-a275-cd087bf54d61')`,

  `insert into rating (id, score, product_id, comment) values ('46d8e966-5071-4aea-8c58-e31fe002bdfa', 5, '2c00db3f-5619-4ca2-bd73-eb0026e90922', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('5307dce6-a81b-4a4b-b461-7027ea413deb', 3, '2c00db3f-5619-4ca2-bd73-eb0026e90922', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('bc541744-e52e-43f7-a273-dc8247b28346', 4, '2c00db3f-5619-4ca2-bd73-eb0026e90922', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('9d349021-d842-4965-801f-4a5ef797dbdc', 5, '2c00db3f-5619-4ca2-bd73-eb0026e90922', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('c50c0cbb-773a-4e80-8fd3-c604aa6553ab', 5, '852f4dd4-dfb1-46d0-abe3-5e37fb0876b3', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('a61df199-51b0-4f0b-a77d-7110c8960dd1', 3, '852f4dd4-dfb1-46d0-abe3-5e37fb0876b3', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('fce223b1-84e0-4ec3-9203-c2125792a150', 5, 'b186d83e-4e05-4464-9e43-8aae4c1b215f', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('1c2a0eba-991f-4c6d-a34e-835294b4ed09', 4, '0dfce32f-63cc-4802-a3fb-2093590d6511', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('c0c651e0-5569-4f0c-b4b2-96c6ef0a5c03', 4, '3ae9b624-e8fc-4825-9ecb-585b6c75a03d', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('e9fe32bf-457d-486e-b7c2-831e46ee0235', 4, '3ae9b624-e8fc-4825-9ecb-585b6c75a03d', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('84cbe26c-a822-42c3-b5cf-72264e7570c8', 5, '3ae9b624-e8fc-4825-9ecb-585b6c75a03d', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('b462a4f8-06f9-44e6-8977-8e3c890a9fd9', 1, '0c804ca9-4819-46cc-a78e-2082ff6a28a0', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('98745d19-2869-4a18-8ef5-0d8e0a52deb8', 4, '0c804ca9-4819-46cc-a78e-2082ff6a28a0', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('0bc54ac5-463c-4023-a5d3-405470dc20e7', 4, 'd77fd380-2fb1-4d93-9d2a-c036e6e00a94', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('628c8cb0-0605-4f62-94b5-aad772806300', 5, 'd77fd380-2fb1-4d93-9d2a-c036e6e00a94', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('d82200bb-a817-4a0d-aeb7-10ba6e7f2a11', 3, 'd77fd380-2fb1-4d93-9d2a-c036e6e00a94', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('e2044f33-2611-4f80-8362-cdb62494bd1c', 4, 'd77fd380-2fb1-4d93-9d2a-c036e6e00a94', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('f204410b-f9f8-4052-86ba-94f67b11f5a6', 5, 'edf059e3-39ed-4035-b624-fe386dc0a5a8', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('b9997919-f2cf-45e4-ac8b-f24a4e930dc6', 5, 'edf059e3-39ed-4035-b624-fe386dc0a5a8', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('2e2021e6-90ea-430a-bdd9-2450272ed0ba', 4, 'e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('cd4f3d11-9a1a-4746-a0f6-4b5ed85185d1', 4, 'e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('e049d8b5-ce92-4286-9c1f-b0023a5e0059', 3, 'e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('05370301-34a6-42b4-9aa9-7c67afa5f8c1', 2, 'e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('02a8355b-34b8-44f0-99f2-91a741f6367d', 3, '49461ee8-0608-483b-b97c-d205b1610d14', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('892796cf-2904-4b0c-afc5-700ba28adcea', 5, '49461ee8-0608-483b-b97c-d205b1610d14', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('caeff1dd-7308-4bb9-8777-4a56d642551e', 1, 'e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('bf07e2c0-00cc-47b9-be7f-e5c2cb396ccc', 2, 'e92a004b-45b0-4176-9fc0-1d1a26242cfb', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('8cf2884c-ef72-4aee-804d-bbd3be2682d0', 4, 'f7ce7d5a-1b06-4f1e-ba69-adbe7969b105', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('ad268650-4712-4058-a5e0-30b7ed2b8f29', 5, 'f7ce7d5a-1b06-4f1e-ba69-adbe7969b105', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('743b77a5-4295-4d89-8c2a-618f9eae478d', 5, '6c68483f-9444-4b3c-baaf-be09319f8c47', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('7cbc184c-281a-4d0d-a778-10c036fe4c52', 5, '6c68483f-9444-4b3c-baaf-be09319f8c47', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('13c45840-3a21-452a-88a8-08a03c6133d9', 5, '6c68483f-9444-4b3c-baaf-be09319f8c47', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('94bc4a3b-ea00-4785-8029-a6a091bccbb7', 3, '10379628-b89f-4120-a275-cd087bf54d61', 'Lorem ipsum dolor sit amet')`,
  `insert into rating (id, score, product_id, comment) values ('110fb039-8dd2-4131-958e-fd6322becaea', 2, '10379628-b89f-4120-a275-cd087bf54d61', 'Lorem ipsum dolor sit amet')`,
]

const DbInit = (): Promise<unknown> => {
  return new Promise((resolve, reject) =>
    db.transaction(
      transaction => {
        for (const sql of SQL) {
          transaction.executeSql(sql)
        }
      },
      error => {
        console.log('Error while running migrations', JSON.stringify(error))
        reject(error)
      },
      resolve,
    ),
  )
}

export default DbInit
