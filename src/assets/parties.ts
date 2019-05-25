export interface PartyItem {
  party: string;
  partyShort: string;
  partyTwitter: string;
  headOfParty: string;
  headOfPartyTwitter: string;
  spectrum: number;
  country: string;
}

export let partiesData: PartyItem[] = [
  {
    party: 'Österreichische Volkspartei',
    partyShort: 'ÖVP',
    partyTwitter: '@volkspartei',
    headOfParty: 'Sebastian Kurz',
    headOfPartyTwitter: '@sebastiankurz',
    spectrum: 4,
    country: 'at'
  },
  {
    party: 'Sozialdemokratische Partei Österreichs',
    partyShort: 'SPÖ',
    partyTwitter: '@SPOE_at',
    headOfParty: 'Pamela Rendi-Wagner',
    headOfPartyTwitter: '@rendiwagner',
    spectrum: 2,
    country: 'at'
  },
  {
    party: 'Freiheitliche Partei Österreichs',
    partyShort: 'FPÖ',
    partyTwitter: '',
    headOfParty: 'Heinz-Christian Strache',
    headOfPartyTwitter: '@HCStracheFP',
    spectrum: 5,
    country: 'at'
  },
  {
    party: 'Das Neue Österreich und Liberales Forum',
    partyShort: 'NEOS',
    partyTwitter: '@neos_eu',
    headOfParty: 'Beate Meinl-Reisinger',
    headOfPartyTwitter: '@BMeinl',
    spectrum: 3,
    country: 'at'
  },
  {
    party: 'Liste Peter Pilz',
    partyShort: 'PILZ',
    partyTwitter: '#Jetzt',
    headOfParty: 'Maria Stern',
    headOfPartyTwitter: '@Maria__Stern',
    spectrum: 1,
    country: 'at'
  },
  {
    party: 'Die Grünen – Die Grüne Alternative',
    partyShort: 'GRÜNE',
    partyTwitter: '@Gruene_Austria',
    headOfParty: 'Werner Kogler ',
    headOfPartyTwitter: '@WKogler ‏',
    spectrum: 2,
    country: 'at'
  },
  {
    party: 'Bürgerforum Österreich',
    partyShort: 'FRITZ',
    partyTwitter: '#ListeFirtz',
    headOfParty: 'Frits Dinkhauser ',
    headOfPartyTwitter: '#Dinkhauser',
    spectrum: 2,
    country: 'at'
  },
  {
    party: 'Kommunistische Partei Österreichs',
    partyShort: 'KPÖ',
    partyTwitter: '@KPOE_EL',
    headOfParty: 'Mirko Messner',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'at'
  },

  {
    party: 'Nieuw-Vlaamse Alliantie',
    partyShort: 'N-VA',
    partyTwitter: '@de_nva',
    headOfParty: 'Bart de Wever',
    headOfPartyTwitter: '@bart_dewever',
    spectrum: 4,
    country: 'be'
  },
  {
    party: 'Christen-Democratisch en Vlaams',
    partyShort: 'CD&V',
    partyTwitter: '@cdenv',
    headOfParty: 'Wouter Beke',
    headOfPartyTwitter: '@wbeke',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'Open Vlaamse Liberalen en Democraten',
    partyShort: 'Open Vld',
    partyTwitter: '@openvld',
    headOfParty: 'Gwendolyn Rutten',
    headOfPartyTwitter: '@ruttengwendolyn',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'Socialistische Partij Anders',
    partyShort: 'sp.a',
    partyTwitter: '@sp_a',
    headOfParty: 'John Crombez',
    headOfPartyTwitter: '@johncrombez',
    spectrum: 2,
    country: 'be'
  },
  {
    party: 'Groen',
    partyShort: 'Groen',
    partyTwitter: '@groen',
    headOfParty: 'Meyrem Almaci ',
    headOfPartyTwitter: '@meyremalmaci',
    spectrum: 2,
    country: 'be'
  },
  {
    party: 'Vlaams Belang',
    partyShort: 'Vlaams Belang',
    partyTwitter: '@vlbelang',
    headOfParty: 'Tom van Grieken ',
    headOfPartyTwitter: '@tomvangrieken',
    spectrum: 5,
    country: 'be'
  },
  {
    party: 'Parti Socialiste',
    partyShort: 'PS',
    partyTwitter: '@partisocialiste',
    headOfParty: 'Elio di Rupo',
    headOfPartyTwitter: '@eliodirupo',
    spectrum: 2,
    country: 'be'
  },
  {
    party: 'Mouvement Réformateur',
    partyShort: 'MR',
    partyTwitter: '@mr_officiel',
    headOfParty: 'Oliver Chastel ',
    headOfPartyTwitter: '@ochastel',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'Centre Démocrate Humaniste',
    partyShort: 'cdH',
    partyTwitter: '@lecdh',
    headOfParty: 'Maxime Prevot',
    headOfPartyTwitter: '@prevotmaxime',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'Ecolo',
    partyShort: 'Ecolo',
    partyTwitter: '@ecolo',
    headOfParty: 'Zakia Khattabi',
    headOfPartyTwitter: '@zakiakhattabi',
    spectrum: 2,
    country: 'be'
  },
  {
    party: 'Démocrate Fédéraliste Indépendant',
    partyShort: 'DéFI',
    partyTwitter: '@defi_eu',
    headOfParty: 'Olivier Maingain',
    headOfPartyTwitter: '@oliviermaingain',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'Parti Populaire',
    partyShort: 'PP',
    partyTwitter: '@ppofficiel',
    headOfParty: 'Mischael Modrikamen ',
    headOfPartyTwitter: '@modrikamen',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'Partij van de Arbeid van België',
    partyShort: 'PVDA',
    partyTwitter: '@pvdabelgie',
    headOfParty: 'Peter Mertens ',
    headOfPartyTwitter: '@peter_mertens',
    spectrum: 1,
    country: 'be'
  },
  {
    party: 'Christlich Soziale Partei',
    partyShort: 'CSP',
    partyTwitter: '@CSPOstbelgien',
    headOfParty: 'Luc Frank',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'ProDG',
    partyShort: 'ProDG',
    partyTwitter: '',
    headOfParty: 'Oliver Paasch',
    headOfPartyTwitter: '@OliverPaasch',
    spectrum: 4,
    country: 'be'
  },
  {
    party: 'Partei für Freiheit und Fortschritt',
    partyShort: 'PFF',
    partyTwitter: '',
    headOfParty: 'Kattrin Jadin',
    headOfPartyTwitter: '@KattrinJadin',
    spectrum: 3,
    country: 'be'
  },
  {
    party: 'GERB',
    partyShort: 'GERB',
    partyTwitter: '@PPGERB',
    headOfParty: 'Boyko Borisov',
    headOfPartyTwitter: '@BoykoBorissov',
    spectrum: 4,
    country: 'bg'
  },
  {
    party: 'Bǎlgarska sotsialisticheska partiya',
    partyShort: 'BSP',
    partyTwitter: '@BSP_Bulgaria',
    headOfParty: 'Korneliya Ninova',
    headOfPartyTwitter: '#KorneliyaNinova',
    spectrum: 2,
    country: 'bg'
  },
  {
    party: 'Dvizhenie za prava i svobodi',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Mustafa Karadayi',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'bg'
  },
  {
    party: 'Obedineni patrioti',
    partyShort: '',
    partyTwitter: '@PatriotiBG',
    headOfParty: 'Krasimir Karakachanov',
    headOfPartyTwitter: '@KKarakachanov',
    spectrum: 5,
    country: 'bg'
  },
  {
    party: 'Bǎlgarsko natsionalno dvizhenie',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Krasimir Karakachanov',
    headOfPartyTwitter: '@KKarakachanov',
    spectrum: 4,
    country: 'bg'
  },
  {
    party: 'Natsionalen front za spasenie na Bǎlgariya',
    partyShort: 'NFSB',
    partyTwitter: '',
    headOfParty: 'Valeri Simeonov',
    headOfPartyTwitter: '@valeri_simeonov',
    spectrum: 5,
    country: 'bg'
  },
  {
    party: 'Ataka',
    partyShort: '',
    partyTwitter: '@atakaBG',
    headOfParty: 'Volen Siderov ',
    headOfPartyTwitter: '@volensiderov',
    spectrum: 5,
    country: 'bg'
  },
  {
    party: 'Volya',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Veselin Mareshki',
    headOfPartyTwitter: '@MareshkiVeselin',
    spectrum: 4,
    country: 'bg'
  },

  {
    party: 'Croatian Democratic Union',
    partyShort: 'HDZ',
    partyTwitter: '@HDZ001',
    headOfParty: 'Andrej Plenković',
    headOfPartyTwitter: '@AndrejPlenkovic',
    spectrum: 4,
    country: 'hr'
  },
  {
    party: 'Social Democratic Party of Croatia',
    partyShort: 'SDP',
    partyTwitter: '@SDPHrvatske',
    headOfParty: 'Davor Bernardić',
    headOfPartyTwitter: '@davor_bernardic',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Bridge of Independent Lists',
    partyShort: 'Most',
    partyTwitter: '@NLMost',
    headOfParty: 'Božo Petrov',
    headOfPartyTwitter: '@BozoPetrov',
    spectrum: 3,
    country: 'hr'
  },
  {
    party: 'Croatian Peasant Party',
    partyShort: 'HSS',
    partyTwitter: '@HSSHrvatska',
    headOfParty: 'Krešo Beljak',
    headOfPartyTwitter: '@KBeljak',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Croatian People\'s Party - Liberal Democrats',
    partyShort: 'HNS',
    partyTwitter: '@HaeNeS_',
    headOfParty: 'Ivan Vrdoljak',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'hr'
  },
  {
    party: 'Civic Liberal Alliance',
    partyShort: 'GLAS',
    partyTwitter: '@StrankaGLAS',
    headOfParty: 'Anka Mrak-Taritaš',
    headOfPartyTwitter: '@anka_mrak',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Human Blockade',
    partyShort: 'ZZ',
    partyTwitter: '@zivizidhr',
    headOfParty: 'Ivan Pernar (Speaker)',
    headOfPartyTwitter: '@Ivan_Pernar',
    spectrum: 5,
    country: 'hr'
  },
  {
    party: 'Independent Democratic Serb Party',
    partyShort: 'SDSS',
    partyTwitter: '',
    headOfParty: 'Milorad Pupovac',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Istrian Democratic Assembly',
    partyShort: 'IDS-DDI',
    partyTwitter: '@IDSDDI',
    headOfParty: 'Boris Miletić',
    headOfPartyTwitter: '@_BorisMiletic',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Bandić Milan 365 - Labour and Solidarity Party',
    partyShort: 'BM 365',
    partyTwitter: '@BM365_stranka',
    headOfParty: 'Milan Bandić',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Independents for Croatia',
    partyShort: 'NHR',
    partyTwitter: '@NHRvatsku',
    headOfParty: 'Bruna Esih',
    headOfPartyTwitter: '@BrunaEsih',
    spectrum: 5,
    country: 'hr'
  },
  {
    party: 'Croatian Christian Democratic Party',
    partyShort: 'HDS',
    partyTwitter: '@HdsHrvatska',
    headOfParty: 'Goran Dodig',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hr'
  },
  {
    party: 'Croatian Party of Pensioners',
    partyShort: 'HSU',
    partyTwitter: '',
    headOfParty: 'Silvano Hrelja',
    headOfPartyTwitter: '@SilvanoHSU',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'Democrats',
    partyShort: 'Demokrati',
    partyTwitter: '@demokrati_hr',
    headOfParty: 'Mirando Mrsić',
    headOfPartyTwitter: '@drMrsic',
    spectrum: 2,
    country: 'hr'
  },
  {
    party: 'People\'s Party - Reformists',
    partyShort: 'NS-R',
    partyTwitter: '@NS_reformisti',
    headOfParty: 'Radimir Čačić',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'hr'
  },
  {
    party: 'Croatian Social Liberal Party',
    partyShort: 'HSLS',
    partyTwitter: '@HSLShr',
    headOfParty: 'Darinko Kosor',
    headOfPartyTwitter: '@DarinkoKosor',
    spectrum: 3,
    country: 'hr'
  },
  {
    party: 'Independent Youth List',
    partyShort: 'NLM',
    partyTwitter: '',
    headOfParty: 'Ante Pranić',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hr'
  },
  {
    party: 'Let\'s Change Croatia',
    partyShort: 'PH',
    partyTwitter: '@PromijenimoHR',
    headOfParty: 'Ivan Lovrinović',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hr'
  },
  {
    party: 'POWER - People\'s and Civic Engagement Party',
    partyShort: 'SNAGA',
    partyTwitter: '',
    headOfParty: 'Goran Aleksić',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hr'
  },
  {
    party: 'Croatian Democratic Alliance of Slavonia and Baranja',
    partyShort: 'HDSSB',
    partyTwitter: '@HDSSBhr',
    headOfParty: 'Branimir Glavaš',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'hr'
  },
  {
    party: 'HRAST - Movement for Successful Croatia',
    partyShort: 'HRAST',
    partyTwitter: '',
    headOfParty: 'Ladislav Ilčić',
    headOfPartyTwitter: '@ladislav_ilcic',
    spectrum: 4,
    country: 'hr'
  },

  {
    party: 'Democratic Rally',
    partyShort: 'DISY',
    partyTwitter: '@DISY',
    headOfParty: 'Averof Neofytou',
    headOfPartyTwitter: '@AverofCY',
    spectrum: 4,
    country: 'cy'
  },
  {
    party: 'Progressive Party of Working People',
    partyShort: 'AKEL',
    partyTwitter: '@AKEL1926',
    headOfParty: 'Andros Kyprianou',
    headOfPartyTwitter: '@GenSecAKEL',
    spectrum: 1,
    country: 'cy'
  },
  {
    party: 'Democratic Party',
    partyShort: 'DIKO',
    partyTwitter: '@DIKO1976',
    headOfParty: 'Nikolas Papadopoulos',
    headOfPartyTwitter: '@NicholasPapadop',
    spectrum: 3,
    country: 'cy'
  },
  {
    party: 'Movement for Social Democracy',
    partyShort: 'EDEK',
    partyTwitter: '@KiSos2020',
    headOfParty: 'Marinos Sizopoulos',
    headOfPartyTwitter: '@sizopoulos',
    spectrum: 2,
    country: 'cy'
  },
  {
    party: 'Citizens\' Alliance',
    partyShort: 'SYPOL',
    partyTwitter: '@SymmaxiaPoliton',
    headOfParty: 'Giorgos Lillikas',
    headOfPartyTwitter: '@yiorgoslillikas',
    spectrum: 5,
    country: 'cy'
  },
  {
    party: 'Solidarity Movement',
    partyShort: 'KA',
    partyTwitter: '@allileggii2015',
    headOfParty: 'Eleni Theocharous',
    headOfPartyTwitter: '@THEOCHAROUSE',
    spectrum: 4,
    country: 'cy'
  },
  {
    party: 'Movement of Ecologists - Citizens\' Cooperation',
    partyShort: 'KOSP',
    partyTwitter: '@cygreens',
    headOfParty: 'George Perdikes',
    headOfPartyTwitter: '@gperdikes',
    spectrum: 2,
    country: 'cy'
  },
  {
    party: 'National Popular Front',
    partyShort: 'ELAM',
    partyTwitter: '@ELAMcy',
    headOfParty: '',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'cy'
  },

  {
    party: 'ANO',
    partyShort: 'ANO',
    partyTwitter: '@matosmysl',
    headOfParty: 'Andrej Babiš',
    headOfPartyTwitter: '@AndrejBabis',
    spectrum: 4,
    country: 'cz'
  },
  {
    party: 'Civic Democratic Party',
    partyShort: 'ODS',
    partyTwitter: '@ODScz',
    headOfParty: 'Petr Fiala',
    headOfPartyTwitter: '@P_Fiala',
    spectrum: 4,
    country: 'cz'
  },
  {
    party: 'Czech Pirate Party',
    partyShort: 'Piráti',
    partyTwitter: '@PiratskaStrana',
    headOfParty: 'Ivan Bartoš',
    headOfPartyTwitter: '@PiratIvanBartos',
    spectrum: 2,
    country: 'cz'
  },
  {
    party: 'Freedom and Direct Democracy',
    partyShort: 'SPD',
    partyTwitter: '@SPD_oficialni',
    headOfParty: 'Tomio Okamura',
    headOfPartyTwitter: '@tomio_cz',
    spectrum: 5,
    country: 'cz'
  },
  {
    party: 'Communist Party of Bohemia and Moravia',
    partyShort: 'KSČM',
    partyTwitter: '@czKSCM',
    headOfParty: 'Vojtěch Filip',
    headOfPartyTwitter: '@vojtafilip',
    spectrum: 1,
    country: 'cz'
  },
  {
    party: 'Czech Social Democratic Party',
    partyShort: 'ČSSD',
    partyTwitter: '@CSSD',
    headOfParty: 'Jan Hamáček',
    headOfPartyTwitter: '@jhamacek',
    spectrum: 2,
    country: 'cz'
  },
  {
    party: 'Christian and Democratic Union – Czechoslovak People\'s Party',
    partyShort: 'KDU-ČSL',
    partyTwitter: '@kducsl',
    headOfParty: 'Marek Výborný',
    headOfPartyTwitter: '@MarekVyborny',
    spectrum: 3,
    country: 'cz'
  },
  {
    party: 'TOP 09',
    partyShort: 'TOP 09',
    partyTwitter: '@TOP09cz',
    headOfParty: 'Jiří Pospíšil',
    headOfPartyTwitter: '@Pospisil_Jiri',
    spectrum: 4,
    country: 'cz'
  },
  {
    party: 'Mayors and Independents',
    partyShort: 'STAN',
    partyTwitter: '@STANcz',
    headOfParty: 'Jan Farský',
    headOfPartyTwitter: '@JanFar_sky',
    spectrum: 4,
    country: 'cz'
  },
  {
    party: 'Party of Free Citizens',
    partyShort: 'Svobodní',
    partyTwitter: '@svobodni',
    headOfParty: 'Jiří Payne',
    headOfPartyTwitter: '@JTP07',
    spectrum: 5,
    country: 'cz'
  },
  {
    party: 'Green Party',
    partyShort: 'Zelení',
    partyTwitter: '@zeleni_cz',
    headOfParty: 'Petr Štěpánek',
    headOfPartyTwitter: '@stepanekpraha',
    spectrum: 2,
    country: 'cz'
  },

  {
    party: 'Social Democrats',
    partyShort: '',
    partyTwitter: '@Spolitik',
    headOfParty: 'Mette Frederiksen',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'dk'
  },
  {
    party: 'Danish People\'s Party',
    partyShort: '',
    partyTwitter: '@DanskDf1995',
    headOfParty: 'Kristian Thulesen Dahl',
    headOfPartyTwitter: '@Kristianthdahl',
    spectrum: 5,
    country: 'dk'
  },
  {
    party: 'Venstre ',
    partyShort: '',
    partyTwitter: '@venstredk',
    headOfParty: 'Lars Løkke Rasmussen',
    headOfPartyTwitter: '@larsloekke ‏',
    spectrum: 4,
    country: 'dk'
  },
  {
    party: 'Socialist People\'s Party ',
    partyShort: '',
    partyTwitter: '@SFpolitik',
    headOfParty: 'Pia Olsen Dyhr',
    headOfPartyTwitter: '@PiaOlsen',
    spectrum: 2,
    country: 'dk'
  },
  {
    party: 'Conservative People\'s Party',
    partyShort: '',
    partyTwitter: '@KonservativeDK',
    headOfParty: 'Søren Pape Poulsen',
    headOfPartyTwitter: '@SorenPape',
    spectrum: 4,
    country: 'dk'
  },
  {
    party: 'Danish Social Liberal Party',
    partyShort: '',
    partyTwitter: '@Radikale',
    headOfParty: 'Morten Østergaard',
    headOfPartyTwitter: '@oestergaard',
    spectrum: 3,
    country: 'dk'
  },
  {
    party: 'Red-Green Alliance',
    partyShort: '',
    partyTwitter: '@Enhedslisten',
    headOfParty: 'Pernille Skipper',
    headOfPartyTwitter: '@PSkipperEL',
    spectrum: 1,
    country: 'dk'
  },
  {
    party: 'Liberal Alliance',
    partyShort: '',
    partyTwitter: '@LiberalAlliance',
    headOfParty: 'Anders Samuelsen',
    headOfPartyTwitter: '@anderssamuelsen',
    spectrum: 4,
    country: 'dk'
  },
  {
    party: 'People\'s Movement against the EU',
    partyShort: '',
    partyTwitter: '@ep14dk',
    headOfParty: '',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'dk'
  },
  {
    party: 'The Alternative',
    partyShort: '',
    partyTwitter: '@alternativet_',
    headOfParty: 'Uffe Elbæk',
    headOfPartyTwitter: '@uffeelbaek',
    spectrum: 2,
    country: 'dk'
  },

  {
    party: 'Estonian Reform Party',
    partyShort: 'RE',
    partyTwitter: '@reformikad',
    headOfParty: 'Kaja Kallas',
    headOfPartyTwitter: '@kajakallas',
    spectrum: 3,
    country: 'ee'
  },
  {
    party: 'Estonian Centre Party',
    partyShort: 'K',
    partyTwitter: '@keskerakondlane',
    headOfParty: 'Jüri Ratas',
    headOfPartyTwitter: '@ratasjuri',
    spectrum: 3,
    country: 'ee'
  },
  {
    party: 'Conservative People\'s Party of Estonia',
    partyShort: 'EKRE',
    partyTwitter: '',
    headOfParty: 'Mart Helme',
    headOfPartyTwitter: '@Mart_Helme',
    spectrum: 5,
    country: 'ee'
  },
  {
    party: 'Pro Patria',
    partyShort: 'I',
    partyTwitter: '@aurorapropatria',
    headOfParty: 'Helir-Valdor Seeder',
    headOfPartyTwitter: '@HelirSeeder',
    spectrum: 4,
    country: 'ee'
  },
  {
    party: 'Social Democratic Party',
    partyShort: 'SDE',
    partyTwitter: '@sotsdem',
    headOfParty: 'Jevgeni Ossinovski',
    headOfPartyTwitter: '@JevgeniO',
    spectrum: 2,
    country: 'ee'
  },

  {
    party: 'Social Democratic Party',
    partyShort: 'SDP',
    partyTwitter: '@Demarit',
    headOfParty: 'Antti Rinne',
    headOfPartyTwitter: '@AnttiRinnepj',
    spectrum: 2,
    country: 'fi'
  },
  {
    party: 'Finns Party',
    partyShort: 'Perus',
    partyTwitter: '@persut',
    headOfParty: 'Jussi Halla-aho',
    headOfPartyTwitter: '@Halla_aho',
    spectrum: 5,
    country: 'fi'
  },
  {
    party: 'National Coalition Party',
    partyShort: 'NCP',
    partyTwitter: '@kokoomus',
    headOfParty: 'Petteri Orpo',
    headOfPartyTwitter: '@PetteriOrpo',
    spectrum: 4,
    country: 'fi'
  },
  {
    party: 'Centre Party',
    partyShort: '',
    partyTwitter: '@keskusta',
    headOfParty: 'Juha Sipilä',
    headOfPartyTwitter: '@juhasipila',
    spectrum: 3,
    country: 'fi'
  },
  {
    party: 'Green League',
    partyShort: 'VIHR',
    partyTwitter: '@vihreat',
    headOfParty: 'Pekka Haavisto',
    headOfPartyTwitter: '@Haavisto',
    spectrum: 2,
    country: 'fi'
  },
  {
    party: 'Left Alliance',
    partyShort: 'vas',
    partyTwitter: '@vasemmisto',
    headOfParty: 'Li Andersson',
    headOfPartyTwitter: '@liandersson',
    spectrum: 1,
    country: 'fi'
  },
  {
    party: 'Swedish People\'s Party',
    partyShort: 'SFP',
    partyTwitter: '@sfprkp',
    headOfParty: 'Anna-Maja Henriksson',
    headOfPartyTwitter: '@anna_maja',
    spectrum: 3,
    country: 'fi'
  },
  {
    party: 'Christian Democrats',
    partyShort: 'KD',
    partyTwitter: '@KDpuolue',
    headOfParty: 'Sari Essayah',
    headOfPartyTwitter: '@SariEssayah',
    spectrum: 4,
    country: 'fi'
  },
  {
    party: 'La République En Marche!',
    partyShort: 'REM',
    partyTwitter: '@enmarchefr',
    headOfParty: 'Stanislas Guerini',
    headOfPartyTwitter: '@StanGuerini',
    spectrum: 3,
    country: 'fr'
  },
  {
    party: 'The Republicans',
    partyShort: 'LR',
    partyTwitter: '@lesRepublicains',
    headOfParty: 'Laurent Wauquiez',
    headOfPartyTwitter: '@laurentwauquiez',
    spectrum: 4,
    country: 'fr'
  },
  {
    party: 'Socialist Party',
    partyShort: 'PS',
    partyTwitter: '@partisocialiste',
    headOfParty: 'Olivier Faure',
    headOfPartyTwitter: '@faureolivier',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'Democratic Movement',
    partyShort: 'MoDem',
    partyTwitter: '@MoDem',
    headOfParty: 'François Bayrou',
    headOfPartyTwitter: '@bayrou',
    spectrum: 4,
    country: 'fr'
  },
  {
    party: 'La France Insoumise',
    partyShort: 'FI',
    partyTwitter: '@FranceInsoumise',
    headOfParty: 'Jean-Luc Mélenchon',
    headOfPartyTwitter: '@JLMelenchon',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'French Communist Party',
    partyShort: 'PCF',
    partyTwitter: '@PCF',
    headOfParty: 'Fabien Roussel',
    headOfPartyTwitter: '@Fabien_Rssl',
    spectrum: 1,
    country: 'fr'
  },
  {
    party: 'National Rally',
    partyShort: 'RN',
    partyTwitter: '@RNational_off',
    headOfParty: 'Marine Le Pen ',
    headOfPartyTwitter: '@MLP_officiel',
    spectrum: 5,
    country: 'fr'
  },
  {
    party: 'Radical Movement',
    partyShort: 'MR',
    partyTwitter: '@MvtRadical',
    headOfParty: 'Laurent Hénart',
    headOfPartyTwitter: '@LaurentHenart',
    spectrum: 3,
    country: 'fr'
  },
  {
    party: 'The Centrists',
    partyShort: 'LC',
    partyTwitter: '@LesCentristes_',
    headOfParty: 'Hervé Morin',
    headOfPartyTwitter: '@Herve_Morin',
    spectrum: 4,
    country: 'fr'
  },
  {
    party: 'Democratic European Force',
    partyShort: 'FED',
    partyTwitter: '@FED_info',
    headOfParty: 'Hervé Marseille',
    headOfPartyTwitter: '@HerveMarseille',
    spectrum: 4,
    country: 'fr'
  },
  {
    party: 'Modern Left',
    partyShort: 'LGM',
    partyTwitter: '@LGM_67',
    headOfParty: 'Jean-Marie Bockel',
    headOfPartyTwitter: '@BockelJeanMarie',
    spectrum: 3,
    country: 'fr'
  },
  {
    party: 'Movement of Progressives',
    partyShort: 'MdP',
    partyTwitter: '@mdPMidiPyrenees',
    headOfParty: 'Tobert Hue',
    headOfPartyTwitter: '@RobertHueOff',
    spectrum: 1,
    country: 'fr'
  },
  {
    party: 'Debout la France',
    partyShort: 'DLF',
    partyTwitter: '@DLF_Officiel',
    headOfParty: 'Nicolas Dupont-Aignan',
    headOfPartyTwitter: '@dupontaignan',
    spectrum: 5,
    country: 'fr'
  },
  {
    party: 'Centrist Alliance',
    partyShort: 'AC',
    partyTwitter: '@AllianceC',
    headOfParty: 'Philippe Folliot',
    headOfPartyTwitter: '@philippefolliot ‏',
    spectrum: 3,
    country: 'fr'
  },
  {
    party: 'Citizen and Republican Movement',
    partyShort: 'MRC',
    partyTwitter: '@MRC_France ‏',
    headOfParty: 'Jean-Luc Laurent',
    headOfPartyTwitter: '@jluc_laurent',
    spectrum: 1,
    country: 'fr'
  },
  {
    party: 'Citizenship, Action, Participation for the 21st Century',
    partyShort: 'LRC-Cap21',
    partyTwitter: '@CAP21_Tweets',
    headOfParty: 'Corinne Lepage',
    headOfPartyTwitter: '@corinnelepage',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'Europe Ecology – The Greens',
    partyShort: 'EELV',
    partyTwitter: '@EELV38',
    headOfParty: 'David Cormand',
    headOfPartyTwitter: '@DavidCormand',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'Left Party',
    partyShort: 'PG',
    partyTwitter: '@LePG',
    headOfParty: 'Eric Coquerel ',
    headOfPartyTwitter: '@ericcoquerel',
    spectrum: 1,
    country: 'fr'
  },
  {
    party: 'Génération.S',
    partyShort: '',
    partyTwitter: '@GenerationsMvt',
    headOfParty: 'Benoît Hamon',
    headOfPartyTwitter: '@benoithamon',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'Ecologist Party',
    partyShort: 'PE',
    partyTwitter: '@ecologistes_92',
    headOfParty: 'François de Rugy',
    headOfPartyTwitter: '@FdeRugy',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'Resistons!',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Jean Lassalle',
    headOfPartyTwitter: '@jeanlassalle',
    spectrum: 3,
    country: 'fr'
  },
  {
    party: 'Agir',
    partyShort: '',
    partyTwitter: '@agir_officiel',
    headOfParty: 'Franck Riester',
    headOfPartyTwitter: '@franckriester',
    spectrum: 4,
    country: 'fr'
  },
  {
    party: 'Comités Jeanne',
    partyShort: '',
    partyTwitter: '@ComitesJeanne',
    headOfParty: 'Jean-Marie Le Pen',
    headOfPartyTwitter: '@lepenjm',
    spectrum: 5,
    country: 'fr'
  },
  {
    party: 'La Force du 13',
    partyShort: 'LFD13',
    partyTwitter: '@ForceDu13',
    headOfParty: 'Jean-Noël Guérini',
    headOfPartyTwitter: '@jnguerini',
    spectrum: 1,
    country: 'fr'
  },
  {
    party: 'Génération citoyens',
    partyShort: 'GC',
    partyTwitter: '@GenCitoyens',
    headOfParty: 'Jean-Marie Cavada',
    headOfPartyTwitter: '@JeanMarieCAVADA',
    spectrum: 4,
    country: 'fr'
  },
  {
    party: 'Ligue du Sud',
    partyShort: 'LS',
    partyTwitter: '@Liguedusud',
    headOfParty: 'Jacques Bompard',
    headOfPartyTwitter: '@JacquesBompard',
    spectrum: 5,
    country: 'fr'
  },
  {
    party: 'The Patriots',
    partyShort: 'LP',
    partyTwitter: '@_LesPatriotes',
    headOfParty: 'Florian Philippot',
    headOfPartyTwitter: '@f_philippot',
    spectrum: 5,
    country: 'fr'
  },
  {
    party: 'Gauche républicaine et socialiste',
    partyShort: 'GRS',
    partyTwitter: '@Gauche_RS',
    headOfParty: 'Marie-Noëlle Lienemann',
    headOfPartyTwitter: '@mnlienemann',
    spectrum: 1,
    country: 'fr'
  },
  {
    party: 'Les Radicaux de gauche',
    partyShort: 'RDG',
    partyTwitter: '@Radicaux2Gauche',
    headOfParty: 'Virginie Rozière',
    headOfPartyTwitter: '@VRoziere',
    spectrum: 2,
    country: 'fr'
  },
  {
    party: 'Pè a Corsica',
    partyShort: '',
    partyTwitter: '@Pe_A_Corsica',
    headOfParty: 'Gilles Simeoni',
    headOfPartyTwitter: '@Gilles_Simeoni',
    spectrum: 0,
    country: 'fr'
  },
  {
    party: 'Picardie debout',
    partyShort: '',
    partyTwitter: '@PicardieDebout',
    headOfParty: 'François Ruffin',
    headOfPartyTwitter: '@Francois_Ruffin',
    spectrum: 0,
    country: 'fr'
  },

  {
    party: 'Christian Democratic Union of Germany',
    partyShort: 'CDU',
    partyTwitter: '@cdu',
    headOfParty: 'Annegret Kramp-Karrenbauer',
    headOfPartyTwitter: '@akk',
    spectrum: 4,
    country: 'de'
  },
  {
    party: 'Social Democratic Party of Germany',
    partyShort: 'SPD',
    partyTwitter: '@spdde',
    headOfParty: 'Andrea Nahles',
    headOfPartyTwitter: '@AndreaNahlesSPD',
    spectrum: 2,
    country: 'de'
  },
  {
    party: 'Alternative for Germany',
    partyShort: 'AfD',
    partyTwitter: '@afd',
    headOfParty: 'Jörg Meuthen',
    headOfPartyTwitter: '@Joerg_Meuthen',
    spectrum: 5,
    country: 'de'
  },
  {
    party: 'Free Democratic Party',
    partyShort: 'FDP',
    partyTwitter: '@fdp',
    headOfParty: 'Christian Lindner',
    headOfPartyTwitter: '@c_lindner',
    spectrum: 3,
    country: 'de'
  },
  {
    party: 'The Left',
    partyShort: 'LINKE',
    partyTwitter: '@dielinke',
    headOfParty: 'Katja Kipping',
    headOfPartyTwitter: '@katjakipping',
    spectrum: 1,
    country: 'de'
  },
  {
    party: 'Alliance 90/The Greens',
    partyShort: 'GRUNE',
    partyTwitter: '@die_gruenen',
    headOfParty: 'Annalena Baerbock',
    headOfPartyTwitter: '@ABaerbock',
    spectrum: 2,
    country: 'de'
  },
  {
    party: 'Christian Social Union in Bavaria',
    partyShort: 'CSU',
    partyTwitter: '@csu',
    headOfParty: 'Markus Söder',
    headOfPartyTwitter: '@Markus_Soeder',
    spectrum: 4,
    country: 'de'
  },
  {
    party: 'The Blue Party',
    partyShort: 'B',
    partyTwitter: '@BlaueWende',
    headOfParty: 'Frauke Petry',
    headOfPartyTwitter: '@FraukePetry',
    spectrum: 5,
    country: 'de'
  },
  {
    party: 'Liberal Conservative Reformers',
    partyShort: 'LKR',
    partyTwitter: '@LKR_Partei_Bund',
    headOfParty: 'Bernd Kölmel',
    headOfPartyTwitter: '@Bernd_Koelmel',
    spectrum: 4,
    country: 'de'
  },
  {
    party: 'Free Voters',
    partyShort: 'FREIE WHLER',
    partyTwitter: '@fwlandtag',
    headOfParty: 'Hubert Aiwanger',
    headOfPartyTwitter: '@HubertAiwanger',
    spectrum: 4,
    country: 'de'
  },
  {
    party: 'Ecological Democratic Party',
    partyShort: 'ODP',
    partyTwitter: '@oedppresse',
    headOfParty: 'Christoph Raabs',
    headOfPartyTwitter: '@ChristophRaabs',
    spectrum: 4,
    country: 'de'
  },
  {
    party: 'Die PARTEI',
    partyShort: 'Die PARTEI',
    partyTwitter: '@diepartei',
    headOfParty: 'Martin Sonneborn',
    headOfPartyTwitter: '@MartinSonneborn',
    spectrum: 0,
    country: 'de'
  },
  {
    party: 'Pirate Party Germany',
    partyShort: 'PIRATEN',
    partyTwitter: '@piratenpartei',
    headOfParty: 'Sebastian Alscher ',
    headOfPartyTwitter: '@sebulino',
    spectrum: 3,
    country: 'de'
  },
  {
    party: 'National Democratic Party of Germany ',
    partyShort: 'NDP',
    partyTwitter: '@npdde',
    headOfParty: 'Frank Franz',
    headOfPartyTwitter: '@FrankFranz',
    spectrum: 5,
    country: 'de'
  },

  {
    party: 'Coalition of the Radical Left – Unitary Social Front',
    partyShort: 'SYRIZA',
    partyTwitter: ' @syriza_gr',
    headOfParty: 'Alexis Tsipras',
    headOfPartyTwitter: '@atsipras',
    spectrum: 1,
    country: 'gr'
  },
  {
    party: 'New Democracy',
    partyShort: 'ND',
    partyTwitter: '@neademokratia',
    headOfParty: 'Kyriakos Mitsotakis',
    headOfPartyTwitter: '@kmitsotakis',
    spectrum: 4,
    country: 'gr'
  },
  {
    party: 'Golden Dawn',
    partyShort: 'XA',
    partyTwitter: '',
    headOfParty: 'Ilias Kasidiaris (spokes person)',
    headOfPartyTwitter: '@IliasKasidiaris',
    spectrum: 5,
    country: 'gr'
  },
  {
    party: 'Movement for Change',
    partyShort: 'KINAL',
    partyTwitter: '@kinimallagis',
    headOfParty: 'Fofi Gennimata',
    headOfPartyTwitter: '@FofiGennimata',
    spectrum: 2,
    country: 'gr'
  },
  {
    party: 'Communist Party of Greece',
    partyShort: 'KKE',
    partyTwitter: '',
    headOfParty: 'Dimitris Koutsoumpas',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'gr'
  },
  {
    party: 'The River',
    partyShort: 'POTAMI',
    partyTwitter: '@ToPotami',
    headOfParty: 'Stavros Theodorakis',
    headOfPartyTwitter: '@St_Theodorakis',
    spectrum: 3,
    country: 'gr'
  },
  {
    party: 'Independent Greeks',
    partyShort: 'ANEL',
    partyTwitter: '@anexartitoi',
    headOfParty: 'Panos Kammenos',
    headOfPartyTwitter: '@PanosKammenos',
    spectrum: 4,
    country: 'gr'
  },
  {
    party: 'Union of Centrists',
    partyShort: 'EK',
    partyTwitter: '@enosi_kentroon',
    headOfParty: 'Vassilis Leventis',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'gr'
  },

  {
    party: 'Fidesz – Hungarian Civic Alliance',
    partyShort: 'Fidesz',
    partyTwitter: '@FideszEP',
    headOfParty: 'Viktor Orbán',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hu'
  },
  {
    party: 'Movement for a Better Hungary',
    partyShort: 'Jobbik',
    partyTwitter: '@JobbikMM',
    headOfParty: 'Tamás Sneider',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hu'
  },
  {
    party: 'Christian Democratic People\'s Party',
    partyShort: 'KDNP',
    partyTwitter: '@kdnp',
    headOfParty: 'Semjén Zsolt',
    headOfPartyTwitter: '@semjen',
    spectrum: 4,
    country: 'hu'
  },
  {
    party: 'Hungarian Socialist Party',
    partyShort: 'MSZP',
    partyTwitter: '@mszptweet',
    headOfParty: 'Bertalan Tóth ',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'hu'
  },
  {
    party: 'Democratic Coalition',
    partyShort: 'DK',
    partyTwitter: '',
    headOfParty: 'Ferenc Gyurcsany ',
    headOfPartyTwitter: '@GyurcsanyMES',
    spectrum: 3,
    country: 'hu'
  },
  {
    party: 'Politics Can Be Different',
    partyShort: 'LMP',
    partyTwitter: '@lehet_mas',
    headOfParty: 'Márta Demeter',
    headOfPartyTwitter: '@marta_demeter',
    spectrum: 2,
    country: 'hu'
  },
  {
    party: 'Our Homeland Movement',
    partyShort: 'Mi Hazánk',
    partyTwitter: '',
    headOfParty: 'László Toroczkai',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'hu'
  },
  {
    party: 'Dialogue for Hungary',
    partyShort: 'Párbeszéd',
    partyTwitter: '',
    headOfParty: 'Gergely Karácsony',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'hu'
  },
  {
    party: 'Together - Party for a New Era',
    partyShort: 'Együtt',
    partyTwitter: '',
    headOfParty: 'Gordon Bajnai',
    headOfPartyTwitter: '@Bajnai_Gordon',
    spectrum: 3,
    country: 'hu'
  },
  {
    party: 'Hungarian Liberal Party',
    partyShort: 'MLP',
    partyTwitter: '@MLPLiberalisok',
    headOfParty: 'Gábor Fodor',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'hu'
  },
  {
    party: 'National Self-Government of Germans in Hungary',
    partyShort: 'MNOÖ',
    partyTwitter: '',
    headOfParty: 'Olivia Schubert',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'hu'
  },

  {
    party: 'Fine Gael',
    partyShort: '',
    partyTwitter: '@FineGael',
    headOfParty: 'Leo Varadkar',
    headOfPartyTwitter: '@LeoVaradkar',
    spectrum: 4,
    country: 'ie'
  },
  {
    party: 'Fianna Fáil',
    partyShort: '',
    partyTwitter: '@fiannafailparty',
    headOfParty: 'Micheál Martin',
    headOfPartyTwitter: '@MichealMartinTD',
    spectrum: 4,
    country: 'ie'
  },
  {
    party: 'Sinn Féin',
    partyShort: '',
    partyTwitter: '@sinnfeinireland',
    headOfParty: 'Mary Lou McDonald',
    headOfPartyTwitter: '@MaryLouMcDonald',
    spectrum: 1,
    country: 'ie'
  },
  {
    party: 'Labour Party',
    partyShort: '',
    partyTwitter: '@labour',
    headOfParty: 'Brendan Howlin ',
    headOfPartyTwitter: '@BrendanHowlin',
    spectrum: 2,
    country: 'ie'
  },
  {
    party: 'Solidarity–People Before Profit',
    partyShort: '',
    partyTwitter: '@solidarityie',
    headOfParty: '',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'ie'
  },
  {
    party: 'Independents 4 Change',
    partyShort: '',
    partyTwitter: '@independents4_C',
    headOfParty: '',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'ie'
  },
  {
    party: 'Green Party',
    partyShort: '',
    partyTwitter: '@greenparty_ie',
    headOfParty: 'Eamon Ryan',
    headOfPartyTwitter: '@EamonRyan',
    spectrum: 2,
    country: 'ie'
  },
  {
    party: 'Social Democrats',
    partyShort: '',
    partyTwitter: '@SocDems',
    headOfParty: 'Catherine Murphy ',
    headOfPartyTwitter: '@CathMurphyTD',
    spectrum: 2,
    country: 'ie'
  },
  {
    party: 'Aontú',
    partyShort: '',
    partyTwitter: '@AontuIE',
    headOfParty: 'Peadar Tóibín',
    headOfPartyTwitter: '@Toibin1',
    spectrum: 1,
    country: 'ie'
  },
  {
    party: 'Workers and Unemployed Action',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Séamus Healy',
    headOfPartyTwitter: '@SeamusHealyTD',
    spectrum: 1,
    country: 'ie'
  },
  {
    party: 'Human Dignity Alliance',
    partyShort: '',
    partyTwitter: '@HumanDignityIre',
    headOfParty: 'Rónán Mullen',
    headOfPartyTwitter: '@RonanMullen',
    spectrum: 5,
    country: 'ie'
  },
  {
    party: 'Renua',
    partyShort: '',
    partyTwitter: '@RENUAIreland',
    headOfParty: 'John Leahy',
    headOfPartyTwitter: '@johnleahyRENUA',
    spectrum: 5,
    country: 'ie'
  },
  {
    party: 'Workers\' Party',
    partyShort: '',
    partyTwitter: '@workersparty',
    headOfParty: 'Michael Donnelly',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'ie'
  },
  {
    party: 'Housing Rights and Reform Alliance',
    partyShort: '',
    partyTwitter: '@Vote4Homes',
    headOfParty: 'Diarmaid Ó Cadhla',
    headOfPartyTwitter: '@GraTire',
    spectrum: 3,
    country: 'ie'
  },
  {
    party: 'Republican Sinn Féin',
    partyShort: '',
    partyTwitter: '@RepublicanSF',
    headOfParty: 'Seosamh Ó Mhaoileoin',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'ie'
  },

  {
    party: 'MoVimento 5 Stelle',
    partyShort: 'M5S',
    partyTwitter: '@Mov5Stelle',
    headOfParty: 'Luigi Di Maio',
    headOfPartyTwitter: '@luigidimaio',
    spectrum: 3,
    country: 'it'
  },
  {
    party: 'Partito Democratico',
    partyShort: 'PD',
    partyTwitter: '@pdnetwork',
    headOfParty: 'Nicola Zingaretti',
    headOfPartyTwitter: '@nzingaretti',
    spectrum: 2,
    country: 'it'
  },
  {
    party: 'Lega (Nord)',
    partyShort: 'LN',
    partyTwitter: '@LegaSalvini',
    headOfParty: 'Matteo Salvini',
    headOfPartyTwitter: '@matteosalvinimi',
    spectrum: 5,
    country: 'it'
  },
  {
    party: 'Forza Italia',
    partyShort: 'FI',
    partyTwitter: '@forza_italia',
    headOfParty: 'Silvio Berlusconi',
    headOfPartyTwitter: '@berlusconi',
    spectrum: 4,
    country: 'it'
  },
  {
    party: 'Fratelli d\'Italia',
    partyShort: 'FdI',
    partyTwitter: '@FratellidItaIia',
    headOfParty: 'Giorgia Meloni',
    headOfPartyTwitter: '@GiorgiaMeloni',
    spectrum: 5,
    country: 'it'
  },
  {
    party: 'Liberi e Uguali',
    partyShort: 'LeU',
    partyTwitter: '@liberi_uguali',
    headOfParty: 'Pietro Grasso',
    headOfPartyTwitter: '@PietroGrasso',
    spectrum: 1,
    country: 'it'
  },
  {
    party: 'Più Europa',
    partyShort: '+E',
    partyTwitter: '@Piu_Europa',
    headOfParty: 'Emma Bonino',
    headOfPartyTwitter: '@emmabonino',
    spectrum: 3,
    country: 'it'
  },
  {
    party: 'CasaPound',
    partyShort: 'CPI',
    partyTwitter: '@CasaPoundItalia',
    headOfParty: 'Simone Di Stefano',
    headOfPartyTwitter: '@distefanoTW',
    spectrum: 5,
    country: 'it'
  },

  {
    party: 'Harmony',
    partyShort: 'SDPS',
    partyTwitter: '@SaskanaOnline',
    headOfParty: 'Nils Ušakovs',
    headOfPartyTwitter: '@nilsusakovs',
    spectrum: 2,
    country: 'lv'
  },
  {
    party: 'Who owns the state?',
    partyShort: 'KPV',
    partyTwitter: '@KamPiederValsts',
    headOfParty: 'Artuss Kaimiņš',
    headOfPartyTwitter: '@artuss',
    spectrum: 5,
    country: 'lv'
  },
  {
    party: 'New Conservative Party',
    partyShort: 'JKP',
    partyTwitter: '@konservativie',
    headOfParty: 'Jānis Bordāns',
    headOfPartyTwitter: '@Bordans',
    spectrum: 4,
    country: 'lv'
  },
  {
    party: 'Development/For!',
    partyShort: 'AP!',
    partyTwitter: '@AttistibaiPar',
    headOfParty: 'Daniels Pavļuts',
    headOfPartyTwitter: '@pavluts',
    spectrum: 3,
    country: 'lv'
  },
  {
    party: 'National Alliance',
    partyShort: 'NA',
    partyTwitter: '@VL_TBLNNK',
    headOfParty: 'Raivis Dzintars',
    headOfPartyTwitter: '@RaivisDzintars',
    spectrum: 5,
    country: 'lv'
  },
  {
    party: 'Union of Greens and Farmers',
    partyShort: 'ZZS',
    partyTwitter: '@ZZS_',
    headOfParty: 'Armands Krauze',
    headOfPartyTwitter: '@ArmandsKrauze',
    spectrum: 3,
    country: 'lv'
  },
  {
    party: 'New Unity',
    partyShort: 'V',
    partyTwitter: '@Jauna_Vienotiba',
    headOfParty: 'Arvils Ašeradens',
    headOfPartyTwitter: '@aseradens',
    spectrum: 4,
    country: 'lv'
  },
  {
    party: 'Latvian Russian Union',
    partyShort: 'LKS',
    partyTwitter: '',
    headOfParty: 'Miroslav Mitrofanov',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'lv'
  },

  {
    party: 'Lithuanian Farmers and Greens Union',
    partyShort: 'LVŽS',
    partyTwitter: '#LVZS',
    headOfParty: 'Ramūnas Karbauskis',
    headOfPartyTwitter: '@RamunasLVZS',
    spectrum: 3,
    country: 'lt'
  },
  {
    party: 'Homeland Union – Lithuanian Christian Democrats',
    partyShort: 'TS-LKD',
    partyTwitter: '@tslkd',
    headOfParty: 'Gabrielius Landsbergis',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'lt'
  },
  {
    party: 'Social Democratic Party of Lithuania',
    partyShort: 'LSDP',
    partyTwitter: '@lsdp_vilnius',
    headOfParty: 'Gintautas Paluckas',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'lt'
  },
  {
    party: 'Liberal Movement',
    partyShort: 'LRLS',
    partyTwitter: '',
    headOfParty: 'Eugenijus Gentvilas',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'lt'
  },
  {
    party: 'Order and Justice',
    partyShort: 'TT',
    partyTwitter: '',
    headOfParty: 'Remigijus Žemaitaitis',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'lt'
  },
  {
    party: 'Electoral Action of Poles in Lithuania',
    partyShort: 'LLRA',
    partyTwitter: '',
    headOfParty: 'Valdemar Tomaševski',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'lt'
  },
  {
    party: 'Labour Party',
    partyShort: 'DP',
    partyTwitter: '@darbopartija',
    headOfParty: 'Viktor Uspaskich',
    headOfPartyTwitter: '@UspaskichV',
    spectrum: 3,
    country: 'lt'
  },
  {
    party: 'Lithuanian Green Party',
    partyShort: 'LŽP',
    partyTwitter: '',
    headOfParty: 'Linas Balsys',
    headOfPartyTwitter: '@Linas_Balsys',
    spectrum: 2,
    country: 'lt'
  },
  {
    party: 'Lithuanian Centre Party',
    partyShort: 'LCP',
    partyTwitter: '',
    headOfParty: 'Naglis Puteikis',
    headOfPartyTwitter: '@puteikis',
    spectrum: 4,
    country: 'lt'
  },
  {
    party: 'Lithuanian List',
    partyShort: 'LS',
    partyTwitter: '',
    headOfParty: 'Darius Kuolys',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'lt'
  },

  {
    party: 'Alternative Democratic Reform Party',
    partyShort: 'ADR',
    partyTwitter: '@adr_lu',
    headOfParty: 'Jean Schoos',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'lu'
  },
  {
    party: 'Christian Social People\'s Party',
    partyShort: 'CSV',
    partyTwitter: '@CSV_news',
    headOfParty: 'Frank Engel',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'lu'
  },
  {
    party: 'Democratic Party',
    partyShort: 'DP',
    partyTwitter: '@dp_lu',
    headOfParty: 'Corinne Cahen',
    headOfPartyTwitter: '@CorinneCahen',
    spectrum: 3,
    country: 'lu'
  },
  {
    party: 'The Greens',
    partyShort: '',
    partyTwitter: '@deigreng',
    headOfParty: 'Christian Kmiotek',
    headOfPartyTwitter: '@KmiotekC',
    spectrum: 2,
    country: 'lu'
  },
  {
    party: 'The Left',
    partyShort: '',
    partyTwitter: '@dei_lenk',
    headOfParty: ' Serge Urbany',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'lu'
  },
  {
    party: 'Luxembourg Socialist Workers\' Party',
    partyShort: 'LSAP',
    partyTwitter: '@lsap_lu',
    headOfParty: 'Franz Fayot',
    headOfPartyTwitter: '@FranzFayot',
    spectrum: 1,
    country: 'lu'
  },
  {
    party: 'Pirate Party Luxembourg',
    partyShort: '',
    partyTwitter: '@Piratepartei',
    headOfParty: 'Starsky Flor',
    headOfPartyTwitter: 'Starsky Flor',
    spectrum: 3,
    country: 'lu'
  },

  {
    party: 'Labour Party',
    partyShort: 'PL',
    partyTwitter: '@PL_Malta',
    headOfParty: 'Joseph Muscat',
    headOfPartyTwitter: '@JosephMuscat_JM',
    spectrum: 2,
    country: 'mt'
  },
  {
    party: 'Nationalist Party',
    partyShort: 'PN',
    partyTwitter: '@PNmalta',
    headOfParty: 'Adrian Delia',
    headOfPartyTwitter: '@adriandeliapn',
    spectrum: 4,
    country: 'mt'
  },
  {
    party: 'Democratic Party',
    partyShort: 'PD',
    partyTwitter: '@Demokratiku',
    headOfParty: 'Godfrey Farrugia',
    headOfPartyTwitter: '@GodfreyFarrugia',
    spectrum: 2,
    country: 'mt'
  },

  {
    party: 'People\'s Party for Freedom and Democracy ',
    partyShort: 'VVD',
    partyTwitter: '@vvd',
    headOfParty: 'Mark Rutte',
    headOfPartyTwitter: '@markrutte',
    spectrum: 4,
    country: 'nl'
  },
  {
    party: 'Party for Freedom ',
    partyShort: 'PVV',
    partyTwitter: '',
    headOfParty: 'Geert Wilders',
    headOfPartyTwitter: '@geertwilderspvv ‏',
    spectrum: 5,
    country: 'nl'
  },
  {
    party: 'Christian Democratic Appeal ',
    partyShort: 'CDA',
    partyTwitter: '@cdavandaag',
    headOfParty: 'Sybrand van Haersma Buma',
    headOfPartyTwitter: '@sybrandbuma',
    spectrum: 4,
    country: 'nl'
  },
  {
    party: 'Democrats 66 ',
    partyShort: 'D66',
    partyTwitter: '@d66',
    headOfParty: 'Anne-Marie Spierings',
    headOfPartyTwitter: '@AMSpierings',
    spectrum: 3,
    country: 'nl'
  },
  {
    party: 'GreenLeft ',
    partyShort: 'GL',
    partyTwitter: '@groenlinks',
    headOfParty: 'Jesse Klaver',
    headOfPartyTwitter: '@jesseklaver',
    spectrum: 2,
    country: 'nl'
  },
  {
    party: 'Socialist Party ',
    partyShort: 'SP',
    partyTwitter: '@spnl',
    headOfParty: 'Lilian Marijnissen',
    headOfPartyTwitter: '@MarijnissenL',
    spectrum: 1,
    country: 'nl'
  },
  {
    party: 'Labour Party',
    partyShort: 'PvdA',
    partyTwitter: '@pvda',
    headOfParty: 'Lodewijk Asscher',
    headOfPartyTwitter: '@LodewijkA',
    spectrum: 2,
    country: 'nl'
  },
  {
    party: 'Christian Union',
    partyShort: 'CU',
    partyTwitter: '@christenunie',
    headOfParty: 'Gert-Jan Segers',
    headOfPartyTwitter: '@gertjansegers',
    spectrum: 3,
    country: 'nl'
  },
  {
    party: 'Party for the Animals ',
    partyShort: 'PvdD',
    partyTwitter: '@partijvddieren',
    headOfParty: 'Marianne Thieme',
    headOfPartyTwitter: '@mariannethieme',
    spectrum: 2,
    country: 'nl'
  },
  {
    party: '50PLUS ',
    partyShort: '50+',
    partyTwitter: '@50pluspartij',
    headOfParty: 'Henk Krol',
    headOfPartyTwitter: '@HenkKrol',
    spectrum: 3,
    country: 'nl'
  },
  {
    party: 'Reformed Political Party ',
    partyShort: 'SGP',
    partyTwitter: '@sgpnieuws',
    headOfParty: 'Kees van der Staaij',
    headOfPartyTwitter: '@keesvdstaaij',
    spectrum: 5,
    country: 'nl'
  },
  {
    party: 'Denk ',
    partyShort: 'DENK',
    partyTwitter: '@denknl',
    headOfParty: 'Tunahan Kuzu',
    headOfPartyTwitter: '@tunahankuzu',
    spectrum: 2,
    country: 'nl'
  },
  {
    party: 'Forum for Democracy ',
    partyShort: 'FvD',
    partyTwitter: '@fvdemocratie',
    headOfParty: 'Thierry Baudet',
    headOfPartyTwitter: '@thierrybaudet',
    spectrum: 5,
    country: 'nl'
  },

  {
    party: 'Law and Justice',
    partyShort: 'PiS',
    partyTwitter: '@pisorgpl',
    headOfParty: 'Jarosław Kaczyński',
    headOfPartyTwitter: '@KaczynskiJaro',
    spectrum: 4,
    country: 'pl'
  },
  {
    party: 'Civic Platform',
    partyShort: 'PO',
    partyTwitter: '@Platforma_org',
    headOfParty: 'Grzegorz Schetyna',
    headOfPartyTwitter: '@SchetynadlaPO',
    spectrum: 3,
    country: 'pl'
  },
  {
    party: 'Kukiz\'15',
    partyShort: 'K\'15',
    partyTwitter: '@KUKIZ15',
    headOfParty: 'Paweł Kukiz',
    headOfPartyTwitter: '@pkukiz',
    spectrum: 5,
    country: 'pl'
  },
  {
    party: 'Polish People\'s Party',
    partyShort: 'PSL',
    partyTwitter: '@nowePSL',
    headOfParty: 'Władysław Kosiniak-Kamysz',
    headOfPartyTwitter: '@KosiniakKamysz',
    spectrum: 3,
    country: 'pl'
  },
  {
    party: 'Modern',
    partyShort: '.N',
    partyTwitter: '@Nowoczesna',
    headOfParty: 'Katarzyna Lubnauer',
    headOfPartyTwitter: '@KLubnauer',
    spectrum: 3,
    country: 'pl'
  },
  {
    party: 'Agreement',
    partyShort: 'n/a',
    partyTwitter: '@Porozumienie__',
    headOfParty: 'Jarosław Gowin',
    headOfPartyTwitter: '@Jaroslaw_Gowin',
    spectrum: 4,
    country: 'pl'
  },
  {
    party: 'United Poland',
    partyShort: 'SP',
    partyTwitter: '@SolidarnaPL',
    headOfParty: 'Zbigniew Ziobro',
    headOfPartyTwitter: '@ZiobroPL',
    spectrum: 2,
    country: 'pl'
  },
  {
    party: 'Free and Solidary',
    partyShort: 'WiS',
    partyTwitter: '@WolniSolidarni',
    headOfParty: 'Kornel Morawiecki',
    headOfPartyTwitter: '@KornelMorawiec1',
    spectrum: 5,
    country: 'pl'
  },
  {
    party: 'Now!',
    partyShort: 'T!',
    partyTwitter: '@wybierz_TERAZ',
    headOfParty: 'Ryszard Petru',
    headOfPartyTwitter: '@RyszardPetru',
    spectrum: 3,
    country: 'pl'
  },
  {
    party: 'Union of European Democrats',
    partyShort: 'UED',
    partyTwitter: '@Unia_Euro_Dem',
    headOfParty: 'Elżbieta Bińczycka',
    headOfPartyTwitter: '@EBinczycka',
    spectrum: 3,
    country: 'pl'
  },
  {
    party: 'Real Politics Union',
    partyShort: 'UPR',
    partyTwitter: '@UPR_org',
    headOfParty: 'Bartosz Józwiak',
    headOfPartyTwitter: '@BJozwiakUPR',
    spectrum: 4,
    country: 'pl'
  },
  {
    party: 'Liberty',
    partyShort: 'n/a',
    partyTwitter: '@PoZdroj',
    headOfParty: 'Janusz Korwin-Mikke',
    headOfPartyTwitter: '@JkmMikke',
    spectrum: 4,
    country: 'pl'
  },
  {
    party: 'Republican Party',
    partyShort: 'n/a',
    partyTwitter: '@republikanieorg',
    headOfParty: 'Anna Siarkowska',
    headOfPartyTwitter: '@AnnaSiarkowska',
    spectrum: 4,
    country: 'pl'
  },
  {
    party: 'Right Wing of the Republic',
    partyShort: 'PR',
    partyTwitter: '@Prawica_Rz',
    headOfParty: 'Krzysztof Kawęcki',
    headOfPartyTwitter: '@PrawicaKawecki',
    spectrum: 3,
    country: 'pl'
  },
  {
    party: 'National Movement',
    partyShort: 'RN',
    partyTwitter: '@RuchNarodowy',
    headOfParty: 'Robert Winnicki',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'pl'
  },
  {
    party: 'The White and Reds',
    partyShort: 'BC',
    partyTwitter: '@Bialo__Czerwoni',
    headOfParty: 'Aleksandra Popławska',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'pl'
  },
  {
    party: 'Democratic Left Alliance',
    partyShort: 'SLD',
    partyTwitter: '@sldpoland',
    headOfParty: 'Włodzimierz Czarzasty',
    headOfPartyTwitter: '@wlodekczarzasty',
    spectrum: 1,
    country: 'pl'
  },
  {
    party: 'Congress of the New Right',
    partyShort: 'KNP',
    partyTwitter: '@NowaPrawica',
    headOfParty: 'Stanisław Żółtek',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'pl'
  },

  {
    party: 'Portuguese Workers\' Communist Party',
    partyShort: 'PCTP/MRPP',
    partyTwitter: '',
    headOfParty: '',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'pt'
  },
  {
    party: 'Workers Party of Socialist Unity ',
    partyShort: 'POUS',
    partyTwitter: '',
    headOfParty: 'Pierre Lambert',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'pt'
  },
  {
    party: 'Socialist Alternative Movement ',
    partyShort: 'MAS',
    partyTwitter: '',
    headOfParty: 'Gil Garcia',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'pt'
  },
  {
    party: 'Portuguese Communist Party ',
    partyShort: 'PCP',
    partyTwitter: '',
    headOfParty: 'Jerónimo de Sousa',
    headOfPartyTwitter: '',
    spectrum: 1,
    country: 'pt'
  },
  {
    party: 'Ecologist Party The Greens',
    partyShort: 'PEV',
    partyTwitter: '@OsVerdes ‏',
    headOfParty: 'Heloísa Apolónia',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'pt'
  },
  {
    party: 'Left Bloc ',
    partyShort: 'BE',
    partyTwitter: '@BlocoMadeira',
    headOfParty: 'Catarina Martins',
    headOfPartyTwitter: '@catarina_mart',
    spectrum: 1,
    country: 'pt'
  },
  {
    party: 'Socialist Party ',
    partyShort: 'PS',
    partyTwitter: '@psocialista',
    headOfParty: 'Carlos César',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'pt'
  },
  {
    party: 'People-Animals-Nature ',
    partyShort: 'PAN',
    partyTwitter: '@Partido_PAN',
    headOfParty: 'André Silva',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'pt'
  },
  {
    party: 'Portuguese Labour Party ',
    partyShort: 'PTP',
    partyTwitter: '',
    headOfParty: 'Amândio Madaleno',
    headOfPartyTwitter: '@MadalenoPTP',
    spectrum: 2,
    country: 'pt'
  },
  {
    party: 'FREE ',
    partyShort: 'L',
    partyTwitter: '@LIVREpt',
    headOfParty: 'Rui Tavares',
    headOfPartyTwitter: '@ruitavares',
    spectrum: 2,
    country: 'pt'
  },
  {
    party: 'Liberal Democratic Party ',
    partyShort: 'PLD',
    partyTwitter: '',
    headOfParty: 'Francisco Oliveira',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'pt'
  },
  {
    party: 'Democratic Republican Party ',
    partyShort: 'PDR',
    partyTwitter: '@pdr_coimbra',
    headOfParty: 'António Marinho e Pinto',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'pt'
  },
  {
    party: 'Together for the People ',
    partyShort: 'JPP',
    partyTwitter: '@MovimentoJPP',
    headOfParty: 'Élvio Sousa',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'pt'
  },
  {
    party: 'Liberal Initiative ',
    partyShort: 'IL',
    partyTwitter: '@LiberalPT',
    headOfParty: 'Carlos Guimarães Pinto',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'pt'
  },
  {
    party: 'Social Democratic Party ',
    partyShort: 'PPD/PSD',
    partyTwitter: '@ppdpsd',
    headOfParty: 'Rui Rio',
    headOfPartyTwitter: '@RuiRioPSD',
    spectrum: 4,
    country: 'pt'
  },
  {
    party: 'CDS – People\'s Party ',
    partyShort: 'CDS-PP',
    partyTwitter: '@_CDSPP',
    headOfParty: 'Assunção Cristas',
    headOfPartyTwitter: '@CristasAssuncao',
    spectrum: 4,
    country: 'pt'
  },
  {
    party: 'Earth Party ',
    partyShort: 'MPT',
    partyTwitter: '',
    headOfParty: 'Luís Vicente',
    headOfPartyTwitter: '',
    spectrum: 4,
    country: 'pt'
  },
  {
    party: 'Alliance ',
    partyShort: 'A',
    partyTwitter: '@Partido_Alianca',
    headOfParty: 'Pedro Santana Lopes',
    headOfPartyTwitter: '@PSantanaLopes',
    spectrum: 4,
    country: 'pt'
  },

  {
    party: 'Social Democratic Party',
    partyShort: 'PSD',
    partyTwitter: '@psdct',
    headOfParty: 'Liviu Dragnea',
    headOfPartyTwitter: '@_LiviuDragnea',
    spectrum: 2,
    country: 'ro'
  },
  {
    party: 'National Liberal Party ',
    partyShort: 'PNL',
    partyTwitter: '@PnlRomania',
    headOfParty: 'Ludovic Orban',
    headOfPartyTwitter: '@Ludovic_Orban',
    spectrum: 4,
    country: 'ro'
  },
  {
    party: 'Save Romania Union',
    partyShort: 'USR',
    partyTwitter: '@usr_romania',
    headOfParty: 'Dan Barna',
    headOfPartyTwitter: '',
    spectrum: 5,
    country: 'ro'
  },
  {
    party: 'Democratic Alliance of Hungarians in Romania',
    partyShort: 'UDMR',
    partyTwitter: '@RMDSZ_UDMR',
    headOfParty: 'Hunor Kelemen',
    headOfPartyTwitter: '@kelemenhunor',
    spectrum: 4,
    country: 'ro'
  },
  {
    party: 'Alliance of Liberals and Democrats ',
    partyShort: 'ALDE',
    partyTwitter: '@alde_romania',
    headOfParty: 'Călin Popescu-Tăriceanu',
    headOfPartyTwitter: '',
    spectrum: 3,
    country: 'ro'
  },
  {
    party: 'People\'s Movement Party',
    partyShort: 'PMP',
    partyTwitter: '',
    headOfParty: 'Eugen Tomac',
    headOfPartyTwitter: '@eugen_tomac',
    spectrum: 4,
    country: 'ro'
  },

  {
    party: 'SMER – sociálna demokracia',
    partyShort: 'Smer - SD',
    partyTwitter: '@smersd',
    headOfParty: 'Monika Benova',
    headOfPartyTwitter: '@MonikaFlaBenova',
    spectrum: 2,
    country: 'sk'
  },
  {
    party: 'Sloboda a Solidarita',
    partyShort: '',
    partyTwitter: '@stranasas',
    headOfParty: 'Richard Sulík',
    headOfPartyTwitter: '@SulikRichard',
    spectrum: 4,
    country: 'sk'
  },
  {
    party: 'OBYČAJNÍ ĽUDIA a nezávislé osobnosti – NOVA',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Igor Matovič',
    headOfPartyTwitter: '@igor_matovic',
    spectrum: 4,
    country: 'sk'
  },
  {
    party: 'Kotleba – Ľudová strana Naše Slovensko',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Marian Kotleba',
    headOfPartyTwitter: '@MarianKotleba',
    spectrum: 5,
    country: 'sk'
  },
  {
    party: 'Slovenian Democratic Party',
    partyShort: 'SDS',
    partyTwitter: '@strankaSDS',
    headOfParty: 'Janez Janša',
    headOfPartyTwitter: '@JJansaSDS',
    spectrum: 4,
    country: 'sl'
  },
  {
    party: 'List of Marjan Šarec',
    partyShort: 'LMS',
    partyTwitter: '@strankaSDS',
    headOfParty: 'Marjan Šarec',
    headOfPartyTwitter: '@sarecmarjan',
    spectrum: 2,
    country: 'sl'
  },
  {
    party: 'Social Democrats',
    partyShort: 'SD',
    partyTwitter: '@strankaSD',
    headOfParty: 'Dejan Židan',
    headOfPartyTwitter: '@ZidanDejan',
    spectrum: 2,
    country: 'sl'
  },
  {
    party: 'Modern Centre Party',
    partyShort: 'SMC',
    partyTwitter: '@StrankaSMC',
    headOfParty: 'Miro Cerar',
    headOfPartyTwitter: '@MiroCerar',
    spectrum: 2,
    country: 'sl'
  },
  {
    party: 'The Left',
    partyShort: 'Levica',
    partyTwitter: '@strankalevica',
    headOfParty: 'Luka Mesec',
    headOfPartyTwitter: '@LukaMesec',
    spectrum: 1,
    country: 'sl'
  },
  {
    party: 'New Slovenia - Christian Democrats',
    partyShort: 'Nsi',
    partyTwitter: '@NovaSlovenija',
    headOfParty: 'Matej Tonin',
    headOfPartyTwitter: '@MatejTonin',
    spectrum: 4,
    country: 'sl'
  },
  {
    party: 'Democratic Party of Pensioners of Slovenia',
    partyShort: 'DeSUS',
    partyTwitter: '@PS_DeSUS',
    headOfParty: 'Karl Erjavec',
    headOfPartyTwitter: '@ErjavecKarl',
    spectrum: 4,
    country: 'sl'
  },
  {
    party: 'Party of Alenka Bratušek',
    partyShort: 'SAB',
    partyTwitter: '@StrankaSAB',
    headOfParty: 'Alenka Bratušek',
    headOfPartyTwitter: '@ABratusek',
    spectrum: 3,
    country: 'sl'
  },
  {
    party: 'Slovenian National Party',
    partyShort: 'SNS',
    partyTwitter: '@SnsStranka',
    headOfParty: 'Zmago Jelinčič Plemeniti',
    headOfPartyTwitter: '@ZmagoPlemeniti',
    spectrum: 5,
    country: 'sl'
  },

  {
    party: 'People\'s Party',
    partyShort: 'PP',
    partyTwitter: '@populares',
    headOfParty: 'Pablo Casado',
    headOfPartyTwitter: '@pablocasado_',
    spectrum: 4,
    country: 'es'
  },
  {
    party: 'Spanish Socialist Workers\' Party',
    partyShort: 'PSOE',
    partyTwitter: '@PSOE',
    headOfParty: 'Cristina Narbona',
    headOfPartyTwitter: '@CristinaNarbona',
    spectrum: 2,
    country: 'es'
  },
  {
    party: 'United We Can',
    partyShort: 'Unidos Podemos ',
    partyTwitter: '@ABUnidasPodemos',
    headOfParty: 'Pablo Iglesias',
    headOfPartyTwitter: '@Pablo_Iglesias_',
    spectrum: 1,
    country: 'es'
  },
  {
    party: 'Citizens',
    partyShort: 'Cs',
    partyTwitter: '@CiudadanosCs',
    headOfParty: 'Albert Rivera',
    headOfPartyTwitter: '@Albert_Rivera',
    spectrum: 4,
    country: 'es'
  },
  {
    party: 'Republican Left of Catalonia–Catalonia Yes ',
    partyShort: 'ERC-CatSi',
    partyTwitter: '@Esquerra_ERC',
    headOfParty: 'Oriol Junqueras',
    headOfPartyTwitter: '@junqueras',
    spectrum: 2,
    country: 'es'
  },
  {
    party: 'Catalan European Democratic Party',
    partyShort: 'PDeCAT',
    partyTwitter: '@Pdemocratacat',
    headOfParty: 'David Bonvehí',
    headOfPartyTwitter: '@davidbonvehi',
    spectrum: 4,
    country: 'es'
  },
  {
    party: 'Basque Nationalist Party (',
    partyShort: 'PNV',
    partyTwitter: '@eajpnv',
    headOfParty: 'Andoni Ortuzar',
    headOfPartyTwitter: '@andoniortuzar',
    spectrum: 4,
    country: 'es'
  },
  {
    party: 'Animalist Party Against Mistreatment of Animals',
    partyShort: 'PACMA',
    partyTwitter: '@PartidoPACMA',
    headOfParty: '',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'es'
  },
  {
    party: 'Basque Country Unite ',
    partyShort: 'EHB',
    partyTwitter: '@ehbildu',
    headOfParty: 'Arnaldo Otegi',
    headOfPartyTwitter: '@ArnaldoOtegi',
    spectrum: 1,
    country: 'es'
  },
  {
    party: 'Canarian Coalition',
    partyShort: 'CC-PNC',
    partyTwitter: '@coalicion',
    headOfParty: 'Ana Oramas',
    headOfPartyTwitter: '@anioramas',
    spectrum: 4,
    country: 'es'
  },

  {
    party: 'Swedish Social Democratic Party',
    partyShort: 'S',
    partyTwitter: '@socialdemokrat',
    headOfParty: 'Stefan Löfven',
    headOfPartyTwitter: '@SwedishPM',
    spectrum: 2,
    country: 'se'
  },
  {
    party: 'Moderate Party',
    partyShort: 'MP',
    partyTwitter: '@moderaterna',
    headOfParty: 'Ulf Kristersson',
    headOfPartyTwitter: '@ulfgooglar',
    spectrum: 4,
    country: 'se'
  },
  {
    party: 'Sweden Democrats',
    partyShort: 'SD',
    partyTwitter: '@sdriks',
    headOfParty: 'Jimmie Åkesson',
    headOfPartyTwitter: '@jimmieakesson',
    spectrum: 4,
    country: 'se'
  },
  {
    party: 'Green Party',
    partyShort: 'MP',
    partyTwitter: '@miljopartiet',
    headOfParty: 'Per Bolund',
    headOfPartyTwitter: '@bolund',
    spectrum: 2,
    country: 'se'
  },
  {
    party: 'Centre Party',
    partyShort: 'C',
    partyTwitter: '@Centerpartiet',
    headOfParty: 'Annie Lööf',
    headOfPartyTwitter: '@annieloof',
    spectrum: 3,
    country: 'se'
  },
  {
    party: 'Left Party',
    partyShort: 'V',
    partyTwitter: '@vansterpartiet',
    headOfParty: 'Jonas Sjöstedt',
    headOfPartyTwitter: '@jsjostedt',
    spectrum: 1,
    country: 'se'
  },
  {
    party: 'Liberals',
    partyShort: 'L',
    partyTwitter: '@liberalerna',
    headOfParty: 'Jan Björklund',
    headOfPartyTwitter: '@bjorklundjan',
    spectrum: 3,
    country: 'se'
  },
  {
    party: 'Christian Democrats',
    partyShort: 'KD',
    partyTwitter: '@kdriks',
    headOfParty: 'Ebba Busch Thor',
    headOfPartyTwitter: '@BuschEbba',
    spectrum: 4,
    country: 'se'
  },
  {
    party: 'Feminist Initiative',
    partyShort: 'FI',
    partyTwitter: '@Feministerna',
    headOfParty: 'Gudrun Schyman',
    headOfPartyTwitter: '@gudschy',
    spectrum: 2,
    country: 'se'
  },

  {
    party: 'Conservative and Unionist Party',
    partyShort: '',
    partyTwitter: '@Conservatives',
    headOfParty: 'Theresa May',
    headOfPartyTwitter: '@theresa_may',
    spectrum: 4,
    country: 'gb'
  },
  {
    party: 'Labour Party',
    partyShort: '',
    partyTwitter: '@UKLabour',
    headOfParty: 'Jeremy Corbyn',
    headOfPartyTwitter: '@jeremycorbyn',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Scottish National Party',
    partyShort: '',
    partyTwitter: '@theSNP',
    headOfParty: 'Nicola Sturgeon',
    headOfPartyTwitter: '@NicolaSturgeon',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Liberal Democrats',
    partyShort: '',
    partyTwitter: '@LibDems',
    headOfParty: 'Jo Swinson',
    headOfPartyTwitter: '@joswinson',
    spectrum: 3,
    country: 'gb'
  },
  {
    party: 'Change UK – The Independent Group',
    partyShort: '',
    partyTwitter: '@ForChange_Now',
    headOfParty: 'Heidi Allen',
    headOfPartyTwitter: '@heidiallen75',
    spectrum: 3,
    country: 'gb'
  },
  {
    party: 'Democratic Unionist Party',
    partyShort: '',
    partyTwitter: '@duponline',
    headOfParty: 'Arlene Foster',
    headOfPartyTwitter: '@DUPleader',
    spectrum: 4,
    country: 'gb'
  },
  {
    party: 'Sinn Féin',
    partyShort: '',
    partyTwitter: '@sinnfeinireland',
    headOfParty: 'Mary Lou McDonald',
    headOfPartyTwitter: '@MaryLouMcDonald',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Plaid Cymru',
    partyShort: '',
    partyTwitter: '@Plaid_Cymru',
    headOfParty: 'Adam Price',
    headOfPartyTwitter: '@Adamprice',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Green Party of England and Wales',
    partyShort: '',
    partyTwitter: '@TheGreenParty',
    headOfParty: 'Jonathan Bartley',
    headOfPartyTwitter: '@jon_bartley',
    spectrum: 1,
    country: 'gb'
  },
  {
    party: 'Scottish Green Party',
    partyShort: '',
    partyTwitter: '@scotgp',
    headOfParty: 'Patrick Harvie',
    headOfPartyTwitter: '@patrickharvie',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Brexit Party',
    partyShort: '',
    partyTwitter: '@brexitparty_uk',
    headOfParty: 'Nigel Farage',
    headOfPartyTwitter: '@Nigel_Farage',
    spectrum: 5,
    country: 'gb'
  },
  {
    party: 'UK Independence Party',
    partyShort: '',
    partyTwitter: '@UKIP',
    headOfParty: 'Gerard Batten',
    headOfPartyTwitter: '@GerardBattenMEP',
    spectrum: 5,
    country: 'gb'
  },
  {
    party: 'Social Democratic and Labour Party',
    partyShort: '',
    partyTwitter: '@SDLPlive',
    headOfParty: 'Colum Eastwood',
    headOfPartyTwitter: '@columeastwood',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Ulster Unionist Party',
    partyShort: '',
    partyTwitter: '@uuponline',
    headOfParty: 'Robin Swann',
    headOfPartyTwitter: '@RobinSwannUUP',
    spectrum: 4,
    country: 'gb'
  },
  {
    party: 'Alliance Party of Northern Ireland',
    partyShort: '',
    partyTwitter: '@allianceparty',
    headOfParty: 'Naomi Long',
    headOfPartyTwitter: '@naomi_long',
    spectrum: 3,
    country: 'gb'
  },
  {
    party: 'Green Party in Northern Ireland',
    partyShort: '',
    partyTwitter: '@GreenPartyNI',
    headOfParty: 'Clare Bailey',
    headOfPartyTwitter: '@ClareBaileyGPNI',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Traditional Unionist Voice',
    partyShort: '',
    partyTwitter: '',
    headOfParty: 'Jim Allister',
    headOfPartyTwitter: '@JimAllister',
    spectrum: 5,
    country: 'gb'
  },
  {
    party: 'People Before Profit',
    partyShort: '',
    partyTwitter: '@pb4p',
    headOfParty: 'Eamonn McCann',
    headOfPartyTwitter: '',
    spectrum: 2,
    country: 'gb'
  },
  {
    party: 'Social Democratic Party',
    partyShort: '',
    partyTwitter: '@TheSDPUK',
    headOfParty: 'William Clouston',
    headOfPartyTwitter: '@WilliamClouston',
    spectrum: 3,
    country: 'gb'
  }
];
