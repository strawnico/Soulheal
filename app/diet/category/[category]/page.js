'use client';

import Link from 'next/link';
import { IoIosArrowBack } from 'react-icons/io';
import Input from '../../../../components/CompInput';
import Meal from '../../../../components/diet/Meal';
import { useEffect, useState } from 'react';

export default function Page({ params }) {
  const [meelsList, setMeelsList] = useState([
    {
      name: 'Cafés da manhã',
      id: 1,
      image:
        'https://images.unsplash.com/photo-1646830167722-5146f8cb4532?auto=format&fit=crop&q=80&w=2802&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Omelete de Espinafre',
          image: 'https://www.anamariareceitas.com.br/wp-content/uploads/2022/10/Omelete-de-espinafre-e-queijo.jpg ',
        },
        {
          name: 'Iogurte com Aveia e Frutas',
          image: 'https://img.cybercook.com.br/receitas/963/iogurte-natural-mel-com-aveia-e-morango-no-potinho.jpeg',
        },
        {
          name: 'Smoothie de Proteína',
          image: 'https://www.feitodeiridium.com.br/wp-content/uploads/2018/12/shutterstock_523854742.jpg ',
        },
        {
          name: 'Tofu Scramble',
          image: 'https://chocolatecoveredkatie.com/wp-content/uploads/2020/07/Easy-Vegan-Tofu-Scramble-Recipe.jpg ',
        },
        {
          name: 'Panquecas de Proteína',
          image:
            'https://www.hipertrofia.org/blog/wp-content/uploads/2019/12/panqueca-de-proteína-simples.jpg           ',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Omelete de Bacon e Queijo',
          image: 'https://softpig.com.br/wp-content/uploads/2022/12/Omelete-com-Bacon-defumado-softpig.jpg           ',
        },
        {
          name: 'Peito de Frango Grelhado',
          image: 'https://img.cybercook.com.br/imagens/receitas/340/file-de-frango-grelhado-2.jpeg ',
        },
        {
          name: 'Salsichas com Abacate',
          image:
            'https://thumbs.dreamstime.com/z/cocktail-de-salsichas-com-abacate-e-ketchup-sobre-fundo-madeira-comida-mexicana-tradicional-212104378.jpg ',
        },
        {
          name: 'Salsichas de Frango',
          image:
            'https://img.freepik.com/fotos-premium/salsichas-de-frango-grelhado-com-alecrim-e-especiarias-churrasco-em-um-fundo-de-pedra-preta_187166-59526.jpg ',
        },
        {
          name: 'Salada de Atum',
          image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/Salada-atum.jpg ',
        },
      ],
    },
    {
      name: 'Almoços',
      id: 2,
      image:
        'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Quinoa com Legumes',
          image: 'https://www.plantte.com/wp-content/uploads/2020/09/refogado-de-quinoa-com-legumes-2.jpg',
        },
        {
          name: 'Salada de Lentilhas com Abacate',
          image: 'https://tribunademinas.com.br/wp-content/uploads/2022/01/WhatsApp-Image-2021-12-21-at-16.00.56.jpeg',
        },
        {
          name: 'Espaguete de Abobrinha com Molho de Tomate',
          image: 'https://static.itdg.com.br/images/1200-675/fc68fb0d87fdb005523d07d5fc33d918/320760-original.jpg',
        },
        {
          name: 'Hambúrguer Vegetariano de Grão-de-Bico',
          image: 'https://receitinhas.com.br/wp-content/uploads/2017/10/Depositphotos_40368143_l-2015-1.jpg',
        },
        {
          name: 'Risoto de Cogumelos',
          image: 'https://i.panelinha.com.br/i1/228-q-6483-risoto-de-cogumelos-com-salsinha.webp',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Bife de Fraldinha',
          image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-fraldinha-1.jpg',
        },
        {
          name: 'Peito de Frango Grelhado',
          image: 'https://img.cybercook.com.br/imagens/receitas/340/file-de-frango-grelhado-2.jpeg',
        },
        {
          name: 'Costeletas de Porco Assadas',
          image: 'https://www.pingodoce.pt/wp-content/uploads/2019/10/costeletas-porco-molho-berbecue.jpg',
        },
        {
          name: 'Salmão Grelhado',
          image: 'https://naminhapanela.com/wp-content/uploads/2023/03/Como-fazer-salmao-grelhado-4-720x720.jpg',
        },
        {
          name: 'Hambúrguer de Carne',
          image: 'https://boomi.b-cdn.net/wp-content/uploads/2021/09/CA035.jpg',
        },
      ],
    },
    {
      name: 'Lanches',
      id: 3,
      image:
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=2865&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Smoothie de Banana e Amendoim',
          image: 'https://www.famintas.com.br/wp-content/uploads/2017/08/1-1.png',
        },
        {
          name: 'Tigelas de Aveia com Frutas',
          image:
            'https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-two-bowls-of-oatmeal-with-berries-and-oats-image_2696380.jpg',
        },
        {
          name: 'Hummus com Vegetais',
          image:
            'https://www.fula.pt/media/filer_public/79/87/7987ebad-ec37-40d9-b84d-d513d891ebd1/fula_hummusvegetais_2.jpg',
        },
        {
          name: 'Sanduíche de Abacate e Queijo Cottage',
          image:
            'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=78616&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)',
        },
        {
          name: 'Salada de Quinoa com Feijão Preto',
          image:
            'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3A0D8C77-5138-46F9-B7C1-3A8DA3059067/Derivates/45e58b63-b3d7-4874-bc5a-d67c961bfcd6.jpg',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Sanduíche de Frango Grelhado',
          image: 'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_173394518.jpg',
        },
        {
          name: 'Wrap de Carne Moída',
          image: 'https://www.receiteria.com.br/wp-content/uploads/wrap-de-carne.jpg',
        },
        {
          name: 'Omelete de Presunto e Queijo',
          image:
            'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=2152&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)',
        },
        {
          name: 'Salada de Atum com Feijão',
          image: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/feijao-branco-salada-atum.jpg',
        },
        {
          name: 'Coxas de Frango Assadas',
          image:
            'https://marolacomcarambola.com.br/wp-content/uploads/2020/03/receita-de-coxa-de-frango-assada-com-paprica-17.jpg',
        },
      ],
    },
    {
      name: 'Jantas',
      id: 4,
      image:
        'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Omelete de Espinafre',
          image: 'https://img.cybercook.com.br/receitas/85/omelete-de-espinafre-2.jpeg',
        },
        {
          name: 'Hamburguer de Quinoa',
          image:
            'https://d1uz88p17r663j.cloudfront.net/original/25164c9eb491fc857e12b50c4fd8a765_hamburguer-vegetariano-aveia-quinoa-receitas-nestle.jpg',
        },
        {
          name: 'Salada de Quinoa com Abacate',
          image: 'https://dietamais.com/wp-content/uploads/2019/10/salada-quinoa.png',
        },
        {
          name: 'Massa Integral com Pesto de Manjericão',
          image: 'https://f.i.uol.com.br/livraria/capas/images/11088145.jpeg',
        },
        {
          name: 'Tofu Grelhado com Vegetais',
          image: 'https://i.panelinha.com.br/i1/228-bk-1028-tofu-salteado-com-cogumelos-e-vegetais.webp',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Bife de Filé Mignon com Batata Doce',
          image:
            'https://swiftbr.vteximg.com.br/arquivos/bife-de-file-mignon-com-batata-doce-assada.png?v=637757121590900000',
        },
        {
          name: 'Frango Grelhado com Quinoa',
          image: 'https://assets.unileversolutions.com/recipes-v2/36176.jpg',
        },
        {
          name: 'Salmão Assado com Brócolis',
          image:
            'https://octoshop.sfo2.digitaloceanspaces.com/lojas/clubfitlife/uploads_produto/posta-salmao-com-brocolis-ao-vapor-e-pure-de-mandioquinha-1-60fb0fdf40ccb.jpg',
        },
        {
          name: 'Costeletas de Porco com Purê de Batata',
          image:
            'https://s2.glbimg.com/rr95Ea4oFTz8Tbkawece8FfBNhk=/620x455/e.glbimg.com/og/ed/f/original/2020/08/03/bistrot_de_paris_costela_suina_wellington_nemeth_4.jpg.jpg',
        },
        {
          name: 'Hambúrguer de Carne com Abacate',
          image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/hamburguer-com-pasta-de-abacate.jpg',
        },
      ],
    },
  ]);
  const [originalMeelsList, setOriginalMeelsList] = useState([
    {
      name: 'Cafés da manhã',
      id: 1,
      image:
        'https://images.unsplash.com/photo-1646830167722-5146f8cb4532?auto=format&fit=crop&q=80&w=2802&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Omelete de Espinafre',
          image: 'https://www.anamariareceitas.com.br/wp-content/uploads/2022/10/Omelete-de-espinafre-e-queijo.jpg ',
        },
        {
          name: 'Iogurte com Aveia e Frutas',
          image: 'https://img.cybercook.com.br/receitas/963/iogurte-natural-mel-com-aveia-e-morango-no-potinho.jpeg',
        },
        {
          name: 'Smoothie de Proteína',
          image: 'https://www.feitodeiridium.com.br/wp-content/uploads/2018/12/shutterstock_523854742.jpg ',
        },
        {
          name: 'Tofu Scramble',
          image: 'https://chocolatecoveredkatie.com/wp-content/uploads/2020/07/Easy-Vegan-Tofu-Scramble-Recipe.jpg ',
        },
        {
          name: 'Panquecas de Proteína',
          image:
            'https://www.hipertrofia.org/blog/wp-content/uploads/2019/12/panqueca-de-proteína-simples.jpg           ',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Omelete de Bacon e Queijo',
          image: 'https://softpig.com.br/wp-content/uploads/2022/12/Omelete-com-Bacon-defumado-softpig.jpg           ',
        },
        {
          name: 'Peito de Frango Grelhado',
          image: 'https://img.cybercook.com.br/imagens/receitas/340/file-de-frango-grelhado-2.jpeg ',
        },
        {
          name: 'Salsichas com Abacate',
          image:
            'https://thumbs.dreamstime.com/z/cocktail-de-salsichas-com-abacate-e-ketchup-sobre-fundo-madeira-comida-mexicana-tradicional-212104378.jpg ',
        },
        {
          name: 'Salsichas de Frango',
          image:
            'https://img.freepik.com/fotos-premium/salsichas-de-frango-grelhado-com-alecrim-e-especiarias-churrasco-em-um-fundo-de-pedra-preta_187166-59526.jpg ',
        },
        {
          name: 'Salada de Atum',
          image: 'https://www.mundoboaforma.com.br/wp-content/uploads/2021/06/Salada-atum.jpg ',
        },
      ],
    },
    {
      name: 'Almoços',
      id: 2,
      image:
        'https://images.unsplash.com/photo-1565895405138-6c3a1555da6a?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Quinoa com Legumes',
          image: 'https://www.plantte.com/wp-content/uploads/2020/09/refogado-de-quinoa-com-legumes-2.jpg',
        },
        {
          name: 'Salada de Lentilhas com Abacate',
          image: 'https://tribunademinas.com.br/wp-content/uploads/2022/01/WhatsApp-Image-2021-12-21-at-16.00.56.jpeg',
        },
        {
          name: 'Espaguete de Abobrinha com Molho de Tomate',
          image: 'https://static.itdg.com.br/images/1200-675/fc68fb0d87fdb005523d07d5fc33d918/320760-original.jpg',
        },
        {
          name: 'Hambúrguer Vegetariano de Grão-de-Bico',
          image: 'https://receitinhas.com.br/wp-content/uploads/2017/10/Depositphotos_40368143_l-2015-1.jpg',
        },
        {
          name: 'Risoto de Cogumelos',
          image: 'https://i.panelinha.com.br/i1/228-q-6483-risoto-de-cogumelos-com-salsinha.webp',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Bife de Fraldinha',
          image: 'https://www.receiteria.com.br/wp-content/uploads/receitas-de-fraldinha-1.jpg',
        },
        {
          name: 'Peito de Frango Grelhado',
          image: 'https://img.cybercook.com.br/imagens/receitas/340/file-de-frango-grelhado-2.jpeg',
        },
        {
          name: 'Costeletas de Porco Assadas',
          image: 'https://www.pingodoce.pt/wp-content/uploads/2019/10/costeletas-porco-molho-berbecue.jpg',
        },
        {
          name: 'Salmão Grelhado',
          image: 'https://naminhapanela.com/wp-content/uploads/2023/03/Como-fazer-salmao-grelhado-4-720x720.jpg',
        },
        {
          name: 'Hambúrguer de Carne',
          image: 'https://boomi.b-cdn.net/wp-content/uploads/2021/09/CA035.jpg',
        },
      ],
    },
    {
      name: 'Lanches',
      id: 3,
      image:
        'https://images.unsplash.com/photo-1565958011703-44f9829ba187?auto=format&fit=crop&q=80&w=2865&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Smoothie de Banana e Amendoim',
          image: 'https://www.famintas.com.br/wp-content/uploads/2017/08/1-1.png',
        },
        {
          name: 'Tigelas de Aveia com Frutas',
          image:
            'https://png.pngtree.com/thumb_back/fw800/background/20230527/pngtree-two-bowls-of-oatmeal-with-berries-and-oats-image_2696380.jpg',
        },
        {
          name: 'Hummus com Vegetais',
          image:
            'https://www.fula.pt/media/filer_public/79/87/7987ebad-ec37-40d9-b84d-d513d891ebd1/fula_hummusvegetais_2.jpg',
        },
        {
          name: 'Sanduíche de Abacate e Queijo Cottage',
          image:
            'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=78616&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)',
        },
        {
          name: 'Salada de Quinoa com Feijão Preto',
          image:
            'https://assets.tmecosys.com/image/upload/t_web767x639/img/recipe/ras/Assets/3A0D8C77-5138-46F9-B7C1-3A8DA3059067/Derivates/45e58b63-b3d7-4874-bc5a-d67c961bfcd6.jpg',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Sanduíche de Frango Grelhado',
          image: 'https://www.hojetemfrango.com.br/wp-content/uploads/2019/01/shutterstock_173394518.jpg',
        },
        {
          name: 'Wrap de Carne Moída',
          image: 'https://www.receiteria.com.br/wp-content/uploads/wrap-de-carne.jpg',
        },
        {
          name: 'Omelete de Presunto e Queijo',
          image:
            'https://vitat.com.br/receitas/images/recipeshandler.jpg?id=2152&tipo=r&default=s&ims=fit-in/414x275/filters:quality(60)',
        },
        {
          name: 'Salada de Atum com Feijão',
          image: 'https://guiadacozinha.com.br/wp-content/uploads/2019/10/feijao-branco-salada-atum.jpg',
        },
        {
          name: 'Coxas de Frango Assadas',
          image:
            'https://marolacomcarambola.com.br/wp-content/uploads/2020/03/receita-de-coxa-de-frango-assada-com-paprica-17.jpg',
        },
      ],
    },
    {
      name: 'Jantas',
      id: 4,
      image:
        'https://images.unsplash.com/photo-1536392706976-e486e2ba97af?auto=format&fit=crop&q=80&w=2940&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      vegeterianMeals: [
        {
          name: 'Omelete de Espinafre',
          image: 'https://img.cybercook.com.br/receitas/85/omelete-de-espinafre-2.jpeg',
        },
        {
          name: 'Hamburguer de Quinoa',
          image:
            'https://d1uz88p17r663j.cloudfront.net/original/25164c9eb491fc857e12b50c4fd8a765_hamburguer-vegetariano-aveia-quinoa-receitas-nestle.jpg',
        },
        {
          name: 'Salada de Quinoa com Abacate',
          image: 'https://dietamais.com/wp-content/uploads/2019/10/salada-quinoa.png',
        },
        {
          name: 'Massa Integral com Pesto de Manjericão',
          image: 'https://f.i.uol.com.br/livraria/capas/images/11088145.jpeg',
        },
        {
          name: 'Tofu Grelhado com Vegetais',
          image: 'https://i.panelinha.com.br/i1/228-bk-1028-tofu-salteado-com-cogumelos-e-vegetais.webp',
        },
      ],
      carnivoroMeals: [
        {
          name: 'Bife de Filé Mignon com Batata Doce',
          image:
            'https://swiftbr.vteximg.com.br/arquivos/bife-de-file-mignon-com-batata-doce-assada.png?v=637757121590900000',
        },
        {
          name: 'Frango Grelhado com Quinoa',
          image: 'https://assets.unileversolutions.com/recipes-v2/36176.jpg',
        },
        {
          name: 'Salmão Assado com Brócolis',
          image:
            'https://octoshop.sfo2.digitaloceanspaces.com/lojas/clubfitlife/uploads_produto/posta-salmao-com-brocolis-ao-vapor-e-pure-de-mandioquinha-1-60fb0fdf40ccb.jpg',
        },
        {
          name: 'Costeletas de Porco com Purê de Batata',
          image:
            'https://s2.glbimg.com/rr95Ea4oFTz8Tbkawece8FfBNhk=/620x455/e.glbimg.com/og/ed/f/original/2020/08/03/bistrot_de_paris_costela_suina_wellington_nemeth_4.jpg.jpg',
        },
        {
          name: 'Hambúrguer de Carne com Abacate',
          image: 'https://www.saboresajinomoto.com.br/uploads/images/recipes/hamburguer-com-pasta-de-abacate.jpg',
        },
      ],
    },
  ]);
  const [searchValue, setSearchValue] = useState('');
  const [meelsListToShow, setMeelsListToShow] = useState([]);

  const handleInputChange = (value) => {
    setSearchValue(value);
  };

  const getMeelsToShow = () => {
    const handleList = originalMeelsList.filter((item) => item.id == params.category);
    if (JSON.parse(localStorage.getItem('formValue')).dietType == 'vegetariano') {
      setMeelsListToShow(handleList[0].vegeterianMeals);
    } else {
      setMeelsListToShow(handleList[0].carnivoroMeals);
    }
  };

  useEffect(() => {
    setOriginalMeelsList(meelsList);
    getMeelsToShow();
  }, []);

  useEffect(() => {
    const newList = originalMeelsList.filter((meel) => meel.name.toLowerCase().includes(searchValue.toLowerCase()));
    setMeelsList(newList);
  }, [searchValue, originalMeelsList]);

  return (
    <main className="font-works flex flex-col p-6">
      <div className="flex items-center gap-4">
        <Link href={'../../diet'}>
          <IoIosArrowBack className="text-2xl"></IoIosArrowBack>
        </Link>
        <p className="text-2xl font-semibold">
          {originalMeelsList.filter((meel) => meel.id == params.category)[0].name}
        </p>
      </div>
      <Input placeholder="Buscar" value={searchValue} onChange={handleInputChange}></Input>
      <div className="mt-4 gap-5 grid grid-cols-2 justify-between overflow-y-scroll max-h-screen">
        {meelsListToShow.map((meal) => {
          return <Meal key={meal.name} id={meal.name} name={meal.name} image={meal.image}></Meal>;
        })}
      </div>
    </main>
  );
}
