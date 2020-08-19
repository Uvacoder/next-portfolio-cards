import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon as Icon } from '@fortawesome/react-fontawesome';
import { IconDefinition, IconLookup } from '@fortawesome/fontawesome-svg-core';
import { ReactElement } from 'react';

export const faCustomHerokuIcon: IconDefinition & IconLookup = {
	prefix: 'fad',
	iconName: 'heroku-icon',
	icon: [
		64,
		64,
		[],
		'#000000',
		'M18 8C14.71 8 12 10.71 12 14V50C12 53.29 14.71 56 18 56H46C49.29 56 52 53.29 52 50V14C52 10.71 49.29 8 46 8H18ZM18 12H46C47.126 12 48 12.876 48 14V50C48 51.126 47.124 52 46 52H18C16.874 52 16 51.124 16 50V14C16 12.874 16.876 12 18 12ZM26 16L22 16.062C22 16.062 21.968 34.08 22 34C37.296 26.812 38 31.624 38 31.624V48H42V31.688C42 21.632 26 28 26 28V16ZM38.562 16C38.562 16 35.89 19.688 34 22H39.25C42.102 18.312 44 16 44 16H38.562ZM22 38V47.938L28 43L22 38Z'
	]
};

export const faCustomVercelIcon: IconDefinition & IconLookup = {
	prefix: 'fab',
	iconName: 'vercel-icon',
	icon: [24, 24, [], '#626262', 'M24 22.525H0l12-21.05l12 21.05z']
};

library.add(faCustomHerokuIcon, faCustomVercelIcon);

/*

<svg
	width={width}
	height={height}
	viewBox={`0 0 1748 1157`}
	fill={fillColor}
	xmlns='https://www.w3.org/2000/svg'
	className={`stroke-current ${strokeColor}`}
	transform={`rotate(${rotateCenter}, 1748, 1157)`}
>
	<path
		d='M0 116.709V218.584H325V1143.58H555.625V218.584H880.625V118.584C880.625 62.3344 880.625 16.7094 878.125 15.4594C878.125 13.5844 680 12.9594 439.375 12.9594L1.87502 14.8344V117.334L0 116.709V116.709ZM1460.62 12.3344C1524.37 27.3344 1573.13 56.0844 1616.88 101.709C1640 126.709 1674.37 170.459 1676.87 181.709C1676.87 185.459 1568.75 258.584 1503.13 299.209C1500.63 301.084 1490.63 290.459 1480.63 274.209C1448.13 227.959 1415 207.959 1363.12 204.209C1288.12 199.209 1238.12 238.584 1238.12 304.209C1238.12 324.209 1241.88 335.459 1249.38 351.709C1266.25 386.084 1297.5 406.709 1394.37 449.209C1573.12 526.084 1650.62 576.709 1697.5 649.209C1750.62 730.459 1762.5 857.959 1726.87 953.584C1686.87 1057.96 1589.38 1128.58 1450 1151.71C1406.25 1159.21 1306.25 1157.96 1259.38 1149.83C1159.38 1131.08 1063.75 1081.08 1005 1016.71C981.875 991.71 937.5 924.834 940 920.459L963.75 905.459L1057.5 851.085L1128.13 809.834L1144.37 831.709C1165 864.209 1211.25 907.96 1238.12 922.96C1319.37 964.835 1428.12 959.21 1481.87 910.46C1505 889.21 1515 866.71 1515 835.46C1515 806.71 1510.63 793.584 1496.25 771.709C1476.25 744.209 1436.25 721.709 1323.75 671.709C1194.38 616.709 1139.37 581.709 1088.12 527.959C1058.75 495.459 1031.88 444.834 1019.38 402.959C1010 366.709 1006.88 277.959 1015.62 242.334C1042.5 117.334 1136.88 29.8344 1271.88 4.83442C1315.63 -3.91558 1418.75 -0.165585 1461.88 11.0844L1460.62 12.3344V12.3344Z'
		fill='#007ACC'
	/>
</svg>

*/