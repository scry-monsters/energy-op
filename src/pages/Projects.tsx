import Header from "../components/ProjectsComponents/Header";
import SectionProject from "../components/ProjectsComponents/SectionProject";
import HC1 from "../assets/HouseComplex/HC1.jpg";
import HC2 from "../assets/HouseComplex/HC2.jpg";
import HC3 from "../assets/HouseComplex/HC3.jpg";
import HC4 from "../assets/HouseComplex/HC4.jpg";
import HC5 from "../assets/HouseComplex/HC5.jpg";
import HC6 from "../assets/HouseComplex/HC6.jpg";
import P1 from "../assets/Ports/port1.jpg";
import P2 from "../assets/Ports/port2.jpg";
import P3 from "../assets/Ports/port3.jpg";
import P4 from "../assets/Ports/port4.jpg";
import P5 from "../assets/Ports/port5.jpg";
import P6 from "../assets/Ports/port6.jpg";
import OON1 from "../assets/OON/OON1.jpg";
import OON2 from "../assets/OON/OON2.jpg";
import OON3 from "../assets/OON/OON3.jpg";
import R1 from "../assets/Railway/Railway1.jpg";
import R2 from "../assets/Railway/Railway2.jpg";
import R3 from "../assets/Railway/Railway3.jpg";
import R4 from "../assets/Railway/Railway4.jpg";
import R5 from "../assets/Railway/Railway5.jpg";
import R6 from "../assets/Railway/Railway6.jpg";
import PO1 from "../assets/PromObject/PO1.jpg";
import PO2 from "../assets/PromObject/PO2.jpg";
import PO3 from "../assets/PromObject/PO3.jpg";
import PO4 from "../assets/PromObject/PO4.jpg";
import PO5 from "../assets/PromObject/PO5.jpg";
import PO6 from "../assets/PromObject/PO6.jpg";
import PO7 from "../assets/PromObject/PO7.jpg";
import Oil1 from "../assets/Oil/Oil1.jpg";
import Oil2 from "../assets/Oil/Oil2.jpg";
import Oil3 from "../assets/Oil/Oil3.jpg";
import Oil4 from "../assets/Oil/Oil4.jpg";
import Oil5 from "../assets/Oil/Oil5.jpg";
import Oil6 from "../assets/Oil/Oil6.jpg";
import Oil7 from "../assets/Oil/Oil7.jpg";
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
		images: [En2, En1, En3, En4],
		bodyText: [
			"ПС 750кВ эЛенинградскаяэ (здание ОПУ)",
			"ПС № 1 110/10/6кВ г.Петрозаводск",
			"Подключение СТЦ 'Мега-Парнас' к улично-дорожной сети Ленинградской области и КАД вокруг Санкт-Петербурга",
			"Комплексная реконструкция и техническое перевооружение ПС 330кВ Южная. Здание КРУЭ 220кВ",
			"ПС 330кВ Василеостровская",
			"Объекты АО «ЦЭК»",
			"Строительство ГТУ-ТЭЦ на площадке ЭС-1 Центральной ТЭЦ",
			"Строительство КВЛ-35кВ ПС Гранит-Кузнечное - ПС 'Лейпясуо'",
			"Объекты ПАО «Россети Ленэнерго» - 'Южные электрические сети'",
		],
	},
	{
		id: 5,
		title: "Промышленные объекты",
		images: [PO5, PO2, PO3, PO4, PO1, PO6, PO7],
		bodyText: [
			"ТП Подсолнечная, ТП Клин, ТП Бологое, ТП Поплавенец, ТП Алешинка, ТП Оксочи, ТП Рябово, ТП Крюково, ТП Сходня, техническое перевооружение ТП Леонтьево, ТП Лужайка, ТП Ушково, ТП Мга, ТП Гатчина, ТП Новолисино, ТП Малукса, СПб-Товарный-Московский, Реконструкция трансформаторной подстанции 'Опорная' Дальневосточной ж/д.",
		],
	},
	{
		id: 6,
		title: "Нефтяная промышленность",
		images: [Oil2, Oil1, Oil3, Oil4, Oil5, Oil6, Oil7],
		bodyText: [
			"Реконструкция НПС 'Песь' (ООО 'Балтнефтепровод')",
			"Реконструкция НПС 'Правдино' (ООО 'Балтнефтепровод')",
			"Строительство объектов морского терминала по перегрузке светлых нефтепродуктов в МТП 'Приморск'. Припортовая нефтебаза",
			"Завод прямогонных топлив ЗПТ-450",
			"ООО 'КИНЕФ' Завод глубокой переработки нефти об. 430-10- Комбинированная установка глубокой переработки мазута, включая очистку конденсата",
			"НПС Горьковского РНУ, ЛЧ НПС Горьковского РНУ, НПС Марийского РНУ, ЛЧ НПС Марийского РНУ, НПС Рязанского РНУ, ЛЧ НПС Рязанского РНУ",
			"НПС 'Кириши', НПС 'Невская', ППС 'Невская', НПС 'Сестрорецкая', ЛПДС 'Красный бор'",
		],
	},
	{
		id: 1,
		title: "Жилые комплексы",
		images: [HC1, HC2, HC3, HC4, HC5, HC6],
		bodyText: [
			"ЖК в Никольском",
			"ЖК в Отрадном",
			"ЖК в Рыбацком",
			"ЖК на Морском",
			"ЖК на Ленинском",
			"ЖК на Поликарпова",
			"ЖК на Фучика",
		],
	},

	{
		id: 2,
		title: "Морской порт и контейнерный терминал Санкт Петербурга",
		images: [P1, P2, P3, P4, P5, P6],
		bodyText: [
			"Строительство КТПН причалов № 102, 102А, 103",
			"Реконструкция трансформаторных подстанций № 47, КТП-630 ЦРП-4",
			"Устройство площадки складирования металлоконструкций на территории ЗАО 'КТСП'",
			"Монтаж сетей электроснабжения 0,4кВ и 10кВ причал №102, 102А, 103, монтаж электрооборудования и электроосвещения, наружное электроосвещение, монтаж прожекторных мачт, измерения, испытания и наладка электрооборудования",
		],
	},
	{
		id: 3,
		title: "Объекты общественного назначения",
		images: [OON1, OON2, OON3],
		bodyText: [
			"ГБДОУ Детский сад №19 (Яхтенная 1, к2)",
			"Бассейн в Тосно",
			"Дом Культуры в Тосно",
			"Свирская психиатрическая больница",
			"Торговый комплекс Ока",
			"ГБОУ Средняя общеобразовательная школа №478 ",
			"ФГУ «ФЦСКЭ им. В. А. Алмазова Росмедтехнологий», Клинико-поликлинические корпуса 1, 1А, 1Б  с энергетическим комплексом",
			"Здание городского суда г.Кировск",
		],
	},
	{
		id: 4,
		title: "Объекты железной дороги",
		images: [R1, R2, R3, R4, R5, R6],
		bodyText: [
			"ТП Подсолнечная, ТП Клин, ТП Бологое, ТП Поплавенец, ТП Алешинка, ТП Оксочи, ТП Рябово, ТП Крюково, ТП Сходня, техническое перевооружение ТП Леонтьево, ТП Лужайка, ТП Ушково, ТП Мга, ТП Гатчина, ТП Новолисино, ТП Малукса, СПб-Товарный-Московский, Реконструкция трансформаторной подстанции 'Опорная' Дальневосточной ж/д.",
		],
	},
	{
		id: 8,
		title: "Космодром Плесецк",
		images: [Rocket1],
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
							Проекты
						</h1>
					</div>
					<div
						className="col-lg-6 col-12"
						style={{
							backgroundImage:
								"url('https://proest.com/wp-content/uploads/2022/11/Building-Construction-Process-From-Start-To-Finish.jpg')",
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
