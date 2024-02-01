import Header from "../components/ProjectsComponents/Header";
import SectionProject from "../components/ProjectsComponents/SectionProject";
import projectMain from "../assets/ProjectsMain/1.jpg";
import HC1 from "../assets/HouseComplex/HC1.jpg";
import HC2 from "../assets/HouseComplex/HC2.jpg";
import HC3 from "../assets/HouseComplex/HC3.jpg";
import HC4 from "../assets/HouseComplex/HC4.jpg";
import HC5 from "../assets/HouseComplex/HC5.jpg";
import HC6 from "../assets/HouseComplex/HC6.jpg";
// import P1 from "../assets/Ports/port1.jpg";
// import P2 from "../assets/Ports/port2.jpg";
// import P3 from "../assets/Ports/port3.jpg";
// import P4 from "../assets/Ports/port4.jpg";
// import P5 from "../assets/Ports/port5.jpg";
// import P6 from "../assets/Ports/port6.jpg";
// import P7 from "../assets/Ports/port7.jpg";
import OON1 from "../assets/OON/OON1.jpg";
import OON2 from "../assets/OON/OON2.jpg";
import OON3 from "../assets/OON/OON3.jpg";
import OON4 from "../assets/OON/OON4.jpg";
import OON5 from "../assets/OON/OON5.jpg";
import OON6 from "../assets/OON/OON6.jpg";
import R1 from "../assets/Railway/Railway1.jpg";
import R2 from "../assets/Railway/Railway2.jpg";
import R3 from "../assets/Railway/Railway3.jpg";
import R4 from "../assets/Railway/Railway4.jpg";
import R5 from "../assets/Railway/Railway5.jpg";
import R6 from "../assets/Railway/Railway6.jpg";
import R7 from "../assets/Railway/Railway7.jpg";
import PO1 from "../assets/PromObject/PO1.jpg";
import PO2 from "../assets/PromObject/PO2.jpg";
import PO3 from "../assets/PromObject/PO3.jpg";
import PO4 from "../assets/PromObject/PO4.jpg";
import PO5 from "../assets/PromObject/PO5.jpg";
import PO6 from "../assets/PromObject/PO6.jpg";
import PO7 from "../assets/PromObject/PO7.jpg";
import PO8 from "../assets/PromObject/PO8.jpg";
import Oil1 from "../assets/Oil/Oil1.jpg";
import Oil2 from "../assets/Oil/Oil2.jpg";
import Oil3 from "../assets/Oil/Oil3.jpg";
import Oil4 from "../assets/Oil/Oil4.jpg";
import Oil5 from "../assets/Oil/Oil5.jpg";
import Oil6 from "../assets/Oil/Oil6.jpg";
import Oil7 from "../assets/Oil/Oil7.jpg";
import Oil8 from "../assets/Oil/Oil8.jpg";
import Oil9 from "../assets/Oil/Oil9.jpg";
import Oil10 from "../assets/Oil/Oil10.jpg";
import En1 from "../assets/EnergyObjects/En1.jpg";
import En2 from "../assets/EnergyObjects/En2.jpg";
import En3 from "../assets/EnergyObjects/En3.jpg";
import En4 from "../assets/EnergyObjects/En4.jpg";
import Rocket1 from "../assets/Rocket/Rocket1.jpg";
import { Project } from "../models/Project";

const data: Project[] = [
	{
		id: 7,
		title: "Объекты энергохозяйства",
		imgAndInfo: [
			{ img: En2, title: "ПС 330кВ Василеостровская" },
			{ img: En1, title: "ПС 750кВ Ленинградская (здание ОПУ)" },
			{
				img: En3,
				title:
					"Подключение СТЦ «Мега-Парнас» к улично-дорожной сети Ленинградской области и КАД вокруг Санкт-Петербурга",
			},
			{
				img: En4,
				title:
					"Комплексная реконструкция и техническое перевооружение ПС 330кВ Южная. Здание КРУЭ 220кВ",
			},
		],
		bodyText: [
			"ПС 750кВ Ленинградская (здание ОПУ)",
			"ПС № 1 110/10/6кВ г.Петрозаводск",
			"Подключение СТЦ «Мега-Парнас» к улично-дорожной сети Ленинградской области и КАД вокруг Санкт-Петербурга",
			"Комплексная реконструкция и техническое перевооружение ПС 330кВ Южная. Здание КРУЭ 220кВ",
			"ПС 330кВ Василеостровская",
			"Объекты АО «ЦЭК»",
			"Строительство ГТУ-ТЭЦ на площадке ЭС-1 Центральной ТЭЦ",
			"Строительство КВЛ-35кВ ПС Гранит-Кузнечное - ПС «Лейпясуо»",
			"Объекты ПАО «Россети Ленэнерго» - «Южные электрические сети»",
			"ЗАО «Лентеплоснаб»",
			"ОАО «КарелЭнерго»",
			"ОАО «ЛОЭСК»",
		],
	},
	{
		id: 5,
		title: "Промышленные объекты",
		imgAndInfo: [
			{ img: PO1, title: "Горно-обогатительный комбинат ГОК Неболчи" },
			{ img: PO2, title: "Силовые Машины" },
			{ img: PO3, title: "ФГУП Крыловский государственный научный центр" },
			{ img: PO4, title: "Плодоовощной комбинат Купчино" },
			{ img: PO5, title: "Силовые Машины" },
			{ img: PO6, title: "Силовые Машины" },
			{ img: PO7, title: "Трансформаторная подстанция Купчино ПК" },
			{ img: PO8, title: "Ледовый бассейн ФГУП Крыловский" },
		],
		bodyText: [
			"ПАО «Силовые машины»",
			"Горно-обогатительный комбинат ГОК Неболчи",
			"ФГУП «Средне-Невский Судостроительный завод»",
			"Завод «Кнауфф Гипс»",
			"ООО «ЧУПА-ЧУПС» цех по производству карамели",
			"ОАО «Хенкель-Эра»",
			"Завод «Пепси-Кола»",
			"Завод пластиковой упаковки «Алпла»",
			"ФГУП Крыловский государственный научный центр",
			"ЗАО «ПК Купчино»",
			"Автоцентр «Маршал»",
			"ОАО «Совавто-С.-Петербург»",
			"ООО «Рубеж-Плюс Регион» комплекс по хранению и переработке продовольственных товаров",
			"ОАО «ТСК»",
			"Кирпичный завод «Победа Кнауфф»",
			"АО «Будимекс» завод по производству фаянсовой сантехники",
			"ЗАО «БСК-22» цеха по изготовлению кондиционеров г. Пушкин",
			"Очистные сооружения ЛПДС «Красный Бор»",
			"Электросила",
			"АО «Морской порт Санкт-Петербург»",
			"ЗАО «Контейнерный терминал Санкт-Петербург»",
			"АО «Петербургский нефтяной терминал»",
		],
	},
	{
		id: 6,
		title: "Нефтяная промышленность",
		imgAndInfo: [
			{ img: Oil1, title: "Транснефть" },
			{ img: Oil2, title: "НПС Невская" },
			{ img: Oil3, title: "НПС Правдино" },
			{ img: Oil4, title: "Завод глубокой переработки нефти ООО Кинеф" },
			{ img: Oil5, title: "МТП Приморск" },
			{ img: Oil6, title: "МТП Приморск" },
			{ img: Oil7, title: "МТП Приморск" },
			{ img: Oil8, title: "Морской торговый порт Приморск" },
			{ img: Oil9, title: "Причальные сооружения Приморск" },
			{ img: Oil10, title: "Транснефть" },
		],
		bodyText: [
			"Реконструкция НПС «Песь» (ООО «Балтнефтепровод»)",
			"Реконструкция НПС «Правдино» (ООО «Балтнефтепровод»)",
			"Строительство объектов морского терминала по перегрузке светлых нефтепродуктов в МТП «Приморск». Припортовая нефтебаза",
			"Завод прямогонных топлив ЗПТ-450",
			"ООО «КИНЕФ» Завод глубокой переработки нефти об. 430-10- Комбинированная установка глубокой переработки мазута, включая очистку конденсата",
			"НПС Горьковского РНУ, ЛЧ НПС Горьковского РНУ, НПС Марийского РНУ, ЛЧ НПС Марийского РНУ, НПС Рязанского РНУ, ЛЧ НПС Рязанского РНУ",
			"НПС «Кириши», НПС «Невская», ППС «Невская», НПС «Сестрорецкая», ЛПДС «Красный бор»",
		],
	},
	{
		id: 1,
		title: "Жилые комплексы",
		imgAndInfo: [
			{ img: HC1, title: "ЖК Морской" },
			{ img: HC2, title: "ЖК на Ленинском" },
			{ img: HC3, title: "ЖК в Рыбацком" },
			{ img: HC4, title: "ЖК на Поликарпова" },
			{ img: HC5, title: "ЖК в Отрадном" },
			{ img: HC6, title: "ЖК на Фучика" },
		],
		bodyText: [
			"ЖК в Никольском",
			"ЖК в Отрадном",
			"ЖК в Рыбацком",
			"ЖК на Морском",
			"ЖК на Ленинском",
			"ЖК на Поликарпова",
			"ЖК на Фучика",
			"ЖСК-1492",
			"п. Металлострой Дом у озера",
		],
	},

	// {
	// 	id: 2,
	// 	title: "Морской порт и контейнерный терминал Санкт Петербурга",
	// 	imgAndInfo: [
	// 		{ img: P1, title: "Подстанция" },
	// 		{ img: P2, title: "Подстанция" },
	// 		{ img: P3, title: "Подстанция" },
	// 		{ img: P4, title: "Подключение кранов" },
	// 		{ img: P5, title: "Подключение кранов" },
	// 		{ img: P6, title: "Кабельная трасса" },
	// 		{ img: P7, title: "Кабельная трасса" },
	// 	],
	// 	bodyText: [
	// 		"Строительство КТПН причалов № 102, 102А, 103",
	// 		"Реконструкция трансформаторных подстанций № 47, КТП-630 ЦРП-4",
	// 		"Устройство площадки складирования металлоконструкций на территории ЗАО 'КТСП'",
	// 		"Монтаж сетей электроснабжения 0,4кВ и 10кВ причал №102, 102А, 103, монтаж электрооборудования и электроосвещения, наружное электроосвещение, монтаж прожекторных мачт, измерения, испытания и наладка электрооборудования",
	// 		"Монтаж оборудования ТП-20, кабельных муфт",
	// 		"Строительство и ремонт кабельных линий 0,4кВ и 6кВ, монтаж наружного освещения",
	// 	],
	// },
	{
		id: 3,
		title: "Объекты общественного назначения",
		imgAndInfo: [
			{ img: OON1, title: "Школа Мурино" },
			{ img: OON2, title: "'Лента' Петрозаводск" },
			{ img: OON3, title: "Психиатрическая больница Лодейное поле" },
			{ img: OON4, title: "ТК ОКА»" },
			{ img: OON5, title: "Дом культуры в Тосно" },
			{ img: OON6, title: "Бассейн в Тосно" },
		],
		bodyText: [
			"ГБДОУ Детский сад №19 (Яхтенная 1, к2)",
			"Бассейн в Тосно",
			"Дом Культуры в Тосно",
			"Свирская психиатрическая больница",
			"Торговый комплекс Ока",
			"ГБОУ Средняя общеобразовательная школа №478 ",
			"ФГУ «ФЦСКЭ им. В. А. Алмазова Росмедтехнологий», Клинико-поликлинические корпуса 1, 1А, 1Б  с энергетическим комплексом",
			"Здание городского суда г.Кировск",
			"Здание ЗАО «Телекомбанк»",
			"Здание БЦ «Невский»",
			"Объекты вневедомственной охраны ГУВД СПБ",
			"Зал пенсионного фонда г. Тосно",
			"Центральная больница г. Тосно",
		],
	},
	{
		id: 4,
		title: "Объекты железной дороги",
		imgAndInfo: [
			{ img: R1, title: "Сортировочная-Московская" },
			{ img: R2, title: "Тяговая подстанция Крюково" },
			{ img: R3, title: "Тяговая подстанция Тында" },
			{ img: R4, title: "Тяговая подстанция Гатчина" },
			{ img: R5, title: "Тяговая подстанция Лужайка" },
			{ img: R6, title: "Тяговая подстанция Рябово" },
			{ img: R7, title: "" },
		],
		bodyText: [
			"Тепловозное депо п. Металлострой, База по ремонту тяжелой путевой техники г. Тосно, ТП Подсолнечная, ТП Клин, ТП Бологое, ТП Поплавенец, ТП Алешинка, ТП Оксочи, ТП Рябово, ТП Крюково, ТП Сходня, техническое перевооружение ТП Леонтьево, ТП Лужайка, ТП Ушково, ТП Мга, ТП Гатчина, ТП Новолисино, ТП Малукса, СПб-Товарный-Московский, Реконструкция трансформаторной подстанции «Опорная» Дальневосточной ж/д.",
		],
	},
	{
		id: 8,
		title: "Космодром Плесецк",
		imgAndInfo: [
			{ img: Rocket1, title: "Монтаж электрооборудования стартовой площадки" },
		],
		bodyText: ["Монтаж электрооборудования стартовой площадки"],
	},
];

const Projects = () => {
	return (
		<>
			<div
				style={{
					backgroundColor: "#f0f8ff",
					overflow: "hidden",
				}}
			>
				<div className="row">
					<div className="col-lg-6 col-12">
						<h1
							className="text-center"
							style={{
								margin: "200px 0",
								fontWeight: "900",
							}}
						>
							Объекты
						</h1>
					</div>
					<div
						className="col-lg-6 col-12"
						style={{
							backgroundImage: `url(${projectMain})`,
							backgroundSize: "cover",
							backgroundPosition: "center",
						}}
					></div>
				</div>
			</div>
			<Header />
			{data.map((item) => (
				<SectionProject data={item} key={item.id} />
			))}
		</>
	);
};

export default Projects;
