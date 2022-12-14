const json = [
  {
      "id": 0,
      "sigla": "ARG",
      "pais": "Argentina",
      "grupo": "C",
      "jogadores": {
          "tecnico": "Lionel Scaloni",
          "goleiros": ["Franco Armani", "Geronimo Rulli", "Damian Martinez"],
          "zagueiros": ["Juan Foyth", "Nicolas Tagliafico", "Gonzalo Montiel", "German Pezzella", "Cristian Romero", "Nicolas Otamendi", "Lisandro Martinez", "Nahuel Molina"],
          "meioscampos": ["Leandro Paredes", "Rodrigo De Paul", "Marcos Acuna", "Exequiel Palacios", "Thiago Almada", "Alejandro Gomez", "Rodriguez Guido", "Alexis Mac Allister", "Enzo Fernandez"],
          "atacantes": ["Julian Alvarez", "Lionel Messi", "Angel Di Maria", "Angel Correa", "Paulo Dybala", "Lautaro Martinez"]
      }
  },
  {
      "id": 1,
      "sigla": "AUS",
      "pais": "Austrália",
      "grupo": "D",
      "jogadores": {
          "tecnico": "Graham James Arnold",
          "goleiros": ["Mathew Ryan", "Andrew Redmayne", "Danny Vukovic"],
          "zagueiros": ["Milos Degenek", "Nathaniel Atkinson", "Kye Rowles", "Fran Karacic", "Bailey Wright", "Aziz Behich", "Harry Souttar", "Thomas Deng", "Joel Bruce King"],
          "meioscampos": ["Ajdin Hrustic", "Aaron Mooy", "Riley McGree", "Cameron Devlin", "Jackson Irvine", "Keanu Baccus"],
          "atacantes": ["Marco Tilio", "Mathew Leckie", "Jamie MacLaren", "Awer Mabil", "Mitch Duke", "Garang Kuol", "Craig Goodwin", "Jason Cummings"]
      }
  },
  {
      "id": 2,
      "sigla": "BEL",
      "pais": "Bélgica",
      "grupo": "F",
      "jogadores": {
          "tecnico": "Roberto Martínez Montoliu",
          "goleiros": ["Thibaut Courtois", "Simon Mignolet", "Koen Casteels"],
          "zagueiros": ["Toby Alderweireld", "Arthur Theate", "Wout Faes", "Jan Vertonghen", "Leander Dendoncker", "Zeno Debast"],
          "meioscampos": ["Axel Witsel", "Kevin De Bruyne", "Youri Tielemans", "Thomas Meunier", "Thorgan Hazard", "Amadou Onana", "Hans Vanaken", "Timothy Castagne"],
          "atacantes": ["Romelu Lukaku", "Eden Hazard", "Yannick Carrasco", "Dries Mertens", "Leandro Trossard", "De Ketelaere", "Michy Batshuayi", "Lois Openda", "Jeremy Doku"]
      }
  },
  {
      "id": 3,
      "sigla": "BRA",
      "pais": "Brasil",
      "grupo": "G",
      "jogadores": {
          "tecnico": "Tite",
          "goleiros": ["Alisson", "Ederson", "Weverton"],
          "zagueiros": ["Danilo", "Alex Sandro", "Daniel Alves", "Alex Telles", "Militão", "Marquinhos", "Thiago Silva", "Bremer"],
          "meioscampos": ["Bruno Guimarães", "Casemiro", "Fabinho", "Fred", "Paquetá", "Everton Ribeiro"],
          "atacantes": ["Neymar", "Vinicius Júnior", "Antony", "Rodrygo", "Raphinha", "Richarlison", "Pedro", "Gabriel Jesus", "Gabriel Martinelli"]
      }
  },
  {
      "id": 4,
      "sigla": "CMR",
      "pais": "Camarões",
      "grupo": "G",
      "jogadores": {
          "tecnico": "Rigobert Song Bahanag",
          "goleiros": ["Brady Ngapandouetnbu", "Devis Epassy", "Andre Onana"],
          "zagueiros": ["Jerome Ngom Mbekeli", "Nicolas Nkoulou", "Christopher Wooh", " Olivier Mbaizo", "Collins Fai", " Jean Charles Castelletto", "Enzo Ebosse", "Nouhou Tolo"],
          "meioscampos": ["Gael Ondoua", "Georges Kevin Nkoudou", "Andre Frank Zambo", "Samuel Gouet", "Pierre Kunde", "Martin Hongla", "Olivier Ntcham", "Souaibou Marou"],
          "atacantes": ["Nicolas Ngameleu", "Jean Pierre Nsame", "Vincent Aboubakar", "Christian Bassogog", "Karl Toko Ekambi", "Choupo Moting Eric", "Bryan Mbeumo"]
      }
  },
  {
      "id": 5,
      "sigla": "CAN",
      "pais": "Canadá",
      "grupo": "F",
      "jogadores": {
          "tecnico": "John Herdman",
          "goleiros": ["Dayne St Clair", "James Pantemis", "Milan Borjan"],
          "zagueiros": ["Alistair Johnston", "Sam Adekugbe", "Kamal Miller", "Steven Vitoria", "Richie Laryea", "Derek Cornelius", "Joel Waterman"],
          "meioscampos": ["Samuel Piette", "Stephen Eustaquio", "Liam Fraser", "Junior Hoilett", "Atiba Hutchinson", "Mark Anthony Kaye", "Ismael Kone", "Jonathan Osorio", "Liam Millar", "David Wotherspoon"],
          "atacantes": ["Lucas Cavallini", "Tajon Buchanan", "Ike Ugbo", "Cyle Larin", "Davies Alphonso", "Jonathan David"]
      }
  },
  {
      "id": 6,
      "sigla": "CRC",
      "pais": "Costa Rica",
      "grupo": "E",
      "jogadores": {
          "tecnico": "Fernando Suárez",
          "goleiros": ["Keylor Navas", "Esteban Alvarado", "Patrick Sequeira"],
          "zagueiros": ["Juan Vargas", "Keysher Fuller", "Oscar Duarte", "Bryan Oviedo", "Francisco Calvo", "Carlos Martinez", "Kendall Waston", "Ronald Matarrita"],
          "meioscampos": ["Daniel Chacon", "Celso Borges", "Jewison Bennette", "Bryan Ruiz", "Gerson Torres", "Youstin Salas", "Yeltsin Tejeda", "Brandon Aguilera", "Douglas Lopez", "Roan Wilson", "Anthony Hernandez", "Alvaro Zamora"],
          "atacantes": ["Anthony Contreras", "Johan Venegas", "Joel Campbell"]
      }
  },
  {
      "id": 7,
      "sigla": "CRO",
      "pais": "Croácia",
      "grupo": "F",
      "jogadores": {
          "tecnico": "Zlatko Dalić",
          "goleiros": ["Dominik Livakovic", "Ivo Grbic", "Ivica Ivusic"],
          "zagueiros": ["Josip Stanisic", "Borna Barisic", "Martin Erlic", "Dejan Lovren", "Borna Sosa", "Josko Gvardiol", "Domagoj Vida", "Josip Juranovic", "Josip Sutalo"],
          "meioscampos": ["Lovro Majer", "Mateo Kovacic", "Luka Modric", "Marcelo Brozovic", "Nikola Vlasic", "Mario Pasalic", "Luka Sucic", "Kristijan Jakic"],
          "atacantes": ["Ivan Persic", "Andrej Kramaric", "Marko Livaja", "Bruno Petkovic", "Ante Budimir", "Mislav Orsic"]
      }
  },
  {
      "id": 8,
      "sigla": "DEN",
      "pais": "Dinamarca",
      "grupo": "D",
      "jogadores": {
          "tecnico": "Kasper Hjulmand",
          "goleiros": ["Kasper Schmeichel", "Oliver Christensen", "Frederik Ronnow"],
          "zagueiros": ["Joachim Anderson", "Victor Nelsson", "Simon Kjaer", "Joakim Maehle", "Andreas Christensen", "Rasmus Kristensen", "Jens Stryger Larsen", "Daniel Wass", "Alexander Bah"],
          "meioscampos": ["Mathias Jensen", "Thomas Delaney", "Christian Eriksen", "Andreas Skov Olsen", "Mikkel Damsgaard", "Christian Norgaard", "Pierre Emile Hojbjerg", "Robert Skov", "Jesper Lindstrom"],
          "atacantes": ["Martin Braithwaite", "Kasper Dolberg", "Jonas Wind", "Yussuf Yurary Poulsen", "Andreas Cornelius"]
      }
  },
  {
      "id": 9,
      "sigla": "ECU",
      "pais": "Equador",
      "grupo": "A",
      "jogadores": {
          "tecnico": "Gustavo Alfaro",
          "goleiros": ["Hernan Galindez", "Moises Ramirez", "Alexander Dominguez"],
          "zagueiros": ["Felix Torres", "Piero Hincapie", "Robert Arboleda", "William Pacho", "Pervis Estupinan", "Xavier Arreaga", "Angelo Preciado", "Diego Jose Palacios Espinoza", "Jackson Porozo"],
          "meioscampos": ["Jose Cifuentes", "Carlos Gruezo", "Eduar Preciado", "Romario Ibarra", "Angel Mena", "Jeremy Sarmiento", "Gonzalo Plata", "Jhegson Mendez", "Alan Franco", "Moises Caicedo"],
          "atacantes": ["Michael Estrada", "Enner Valencia", "Djorkaeff Reasco", "Kevin Rodriguez"]
      }
  },
  {
      "id": 10,
      "sigla": "ENG",
      "pais": "Inglaterra",
      "grupo": "B",
      "jogadores": {
          "tecnico": "Gareth Southgate",
          "goleiros": ["Jordan Pickford", "Nick Pope", "Aaron Ramsdale"],
          "zagueiros": ["Kyle Walker", "Luke Shaw", "John Stones", "Harry Maguire", "Kieran Trippier", "Eric Dier", "Conor Coady", "Trent Alexander-Arnold", "Ben White"],
          "meioscampos": ["Declan Rice", "Jordan Henderson", "Kalvin Phillips", "Mason Mount", "Philip Foden", "Jude Bellingham", "James Maddison", "Conor Gallagher"],
          "atacantes": ["Jack Grealish", "Harry Kane", "Raheem Sterling", "Marcus Rashford", "Bukayo Saka", "Callum Wilson"]
      }
  },
  {
      "id": 11,
      "sigla": "FRA",
      "pais": "França",
      "grupo": "D",
      "jogadores": {
          "tecnico": "Didier Deschamps",
          "goleiros": ["Hugo Lloris", "Steve Mandanda", "Alphonse Areola"],
          "zagueiros": ["Pavard Benjamin", "Axel Arthur Disasi", "Raphael Varane", "Jules Kounde", "Youssouf Fofana", "William Saliba", "Dayotchanculle Upamecano", "Hernandez Lucas", "Theo Hernandez", "Ibrahima Konate"],
          "meioscampos": ["Matteo Guendouzi", "Aurelien Tchouameni", "Adrien Rabiot", "Jordan Veretout", "Eduardo Celmi Camavinga"],
          "atacantes": ["Antoine Griezmann", "Olivier Giroud", "Kylian Mbappe", "Ousmane Dembele", "Randal Kolo Muani", "Karim Benzema", "Coman Kingsley", "Marcus Thuram"]
      }
  },
  {
      "id": 12,
      "sigla": "GER",
      "pais": "Alemanha",
      "grupo": "E",
      "jogadores": {
          "tecnico": "Hans Dieter Flick",
          "goleiros": ["Neuer Manuel", "Kevin Trapp", "Marc Andre Ter Stegen"],
          "zagueiros": ["Antonio Ruediger", "David Raum", "Matthias Ginter", "Thilo Kehrer", "Suele Niklas", "Lukas Klostermann", "Christian Günter", "Nico Schlotterbeck", "Armel Bella Kotchap"],
          "meioscampos": ["Kimmich Joshua", "Goretzka Leon", "Mario Goetze", "Mueller Thomas", "Musiala Jamal", "Julian Brandt", "Jonas Hofmann", "Sane Leroy", "Ilkay Guendogan"],
          "atacantes": ["Kai Havertz", "Niclas Füllkrug", "Gnabry Serge", "Karim David Adeyemi", "Youssoufa Moukoko"]
      }
  },
  {
      "id": 13,
      "sigla": "GHA",
      "pais": "Gana",
      "grupo": "H",
      "jogadores": {
          "tecnico": "Otto Addo",
          "goleiros": ["Lawrence Ati", "Danlad Ibrahim", "Abdul Manaf Nurudeen"],
          "zagueiros": ["Tariq Lamptey", "Denis Odoi", "Mohammed Salisu", "Gideon Mensah", "Joseph Aidoo", "Abdul Rahman Baba", "Daniel Amartey", "Alexander Djiku", "Seidu Alidu"],
          "meioscampos": ["Thomas Partey", "Elisha Owusu", "Abdul Fatawu Issahaku", "Daniel Kofi Kyereh", "Osman Bukari", "Daniel Afriyie", "Kodus Mohammed", "Salis Abdul Samed", "Kamaldeen Sulemana", "Kamal Sowah"],
          "atacantes": ["Jordan Ayew", "Andre Ayew", "Inaki Williams", "Antoine Semenyo"]
      }
  },
  {
      "id": 14,
      "sigla": "IRN",
      "pais": "Irã",
      "grupo": "B",
      "jogadores": {
          "tecnico": "Carlos Queiroz",
          "goleiros": ["Alireza Beiranvand", "Payam Niazmand", "Amir Abedzadeh", "Hossein Hosseini"],
          "zagueiros": ["Sadegh Moharrami", "Ehsan Haji Safi", "Shojae Khalilzadeh", "Milad Mohammadi", "Morteza Pouraliganji", "Mohammad Kanaani", "Roozbeh Cheshmi", "Majid Hosseini", "Ramin Rezaeian", "Abolfazl Jalali"],
          "meioscampos": ["Saeid Ezatolahi", "Alireza Jahanbakhsh", "Vahid Amiri", "Saman Ghoddos", "Mahdi Torabi", "Ali Gholizadeh", "Karimi Ali", "Ahmad Noorollahi", ""],
          "atacantes": ["Mehdi Taremi", "Karim Ansarifard", "Sardar Azmoun"]
      }
  },
  {
      "id": 15,
      "sigla": "JPN",
      "pais": "Japão",
      "grupo": "E",
      "jogadores": {
          "tecnico": "Hajime Moriyasu",
          "goleiros": ["Eiji Kawashima", "Shuichi Gonda", "Daniel Schmidt"],
          "zagueiros": ["Miki Yamane", "Shogo Taniguchi", "Kou Itakura", "Yuto Nagatomo", "Takehiro Tomiyasu", "Hiroki Sakai", "Maya Yoshida", "Hiroki Ito"],
          "meioscampos": ["Wataru Endo", "Gaku Shibasaki", "Ritsu Doan", "Kaoru Mitoma", "Takumi Minamino", "Takefusa Kubo", "Hidemasa Morita", "Junya Ito", "Daichi Kamada", "Ao Tanaka", "Yuki Soma"],
          "atacantes": ["Takuma Asano", "Shuto Machino", "Ayase Ueda", "Daizen Maeda"]
      }
  },
  {
      "id": 16,
      "sigla": "KOR",
      "pais": "Coreia do Sul",
      "grupo": "H",
      "jogadores": {
          "tecnico": "Paulo Jorge Gomes",
          "goleiros": ["Kim Seunggyu", "Song Bumkeun", "Jo Hyeonwoo"],
          "zagueiros": ["Yoon Jonggyu", "Kim Jinsu", "Kim Minjae", "Hong Chul", "Kim Moonhwan", "Kim Younggwon", "Kwon Kyungwon", "Kim Taehwan", "Cho Yumin"],
          "meioscampos": ["Jung Wooyoung", "Hwang Inbeom", "Son Heungmin", "Paik Seungho", "Lee Jaesung", "Hwang Heechan", "Son Junho", "Na Sangho", "Lee Kangin", "Kwon Changhoon", "Jeong Wooyeong", "Song Minkyu"],
          "atacantes": ["Cho Guesung", "Hwang Uijo"]
      }
  },
  {
      "id": 17,
      "sigla": "MEX",
      "pais": "México",
      "grupo": "C",
      "jogadores": {
          "tecnico": "Gerardo Daniel Martino",
          "goleiros": ["Alfredo Talavera", "Rodolfo Cota", "Guillermo Ochoa"],
          "zagueiros": ["Nestor Araujo", "Cesar Montes", "Edson Alvarez", "Johan Vasquez", "Gerardo Arteaga", "Hector Moreno", "Jorge Sanchez", "Jesus Gallardo", "Kevin Alvarez"],
          "meioscampos": ["Luis Romo", "Carlos Rodriguez", "Erick Gutierrez", "Hector Herrera", "Andres Guardado", "Luis Chavez"],
          "atacantes": ["Raul Jimenez", "Alexis Vega", "Gogelio Gabriel Funes", "Orbelin Pineda", "Henry Martin", "Uriel Antuna", "Hirving Lozando", "Roberto Alvarado"]
      }
  },
  {
      "id": 18,
      "sigla": "MAR",
      "pais": "Marrocos",
      "grupo": "F",
      "jogadores": {
          "tecnico": "Hoalid Regragui",
          "goleiros": ["Yassine Bounou", "Monir El Kajoui", "Ahmed Tagnaouti"],
          "zagueiros": ["Achraf Hakimi", "Noussair Mazraoui", "Nayef Aguerd", "Ghanem Saiss", "Jawad El Yamiq", "Dari Achraf", "Benoun Badr", "Yahya Attiat-Allah"],
          "meioscampos": ["Sofyan Amrabat", "Hakim Ziyech", "Azzedine Ounahi", "Anass Zaroury", "Ilias Chair", "Zakaria Aboukhlal", "Selim Amallah", "Sofiane Boufal", "Bilal El Khannouss", "Jabrane Yahya"],
          "atacantes": ["Abd Al Razke Hamdalah", "Abdelhamid Sabiri", "Abde Ezzalzouli", "Youssef En Nesyri", "Walid Cheddira"]
      }
  },
  {
      "id": 19,
      "sigla": "HOL",
      "pais": "Holanda",
      "grupo": "A",
      "jogadores": {
          "tecnico": "Louis Van Gaal",
          "goleiros": ["Remko Pasveer", "Justin Bijlow", "Andries Noppert"],
          "zagueiros": ["Jurrien Timber", "Matthijs De Ligt", "Virgil Van Dijk", "Nathan Ake", "Stefan De Vrij", "Tyrell Malacia", "Daley Blind", "Denzel Dumfries", "Jeremie Frimpong"],
          "meioscampos": ["Steven Berghuis", "Davy Klaassen", "Marten De Roon", "Teun Koopmeiners", "Frenkie De Jong", "Kenneth Taylor", "Xavi Simons"],
          "atacantes": ["Steven Bergwijn", "Cody Gakpo", "Luuk De Jong", "Memphis Depay", "Noa Lang", "Vincent Janssen", "Wout Weghorst"]
      }
  },
  {
      "id": 20,
      "sigla": "POL",
      "pais": "Polônia",
      "grupo": "C",
      "jogadores": {
          "tecnico": "Czes ław Michniewicz",
          "goleiros": ["Wojciech Szczesny", "Lukasz Skorupski", "Kamil Grabara"],
          "zagueiros": ["Matty Cash", "Artur Jedrzejczyk", "Mateusz Wieteska", "Jan Bednarek", "Jakub Kiwior", "Kamil Glik", "Bartosz Bereszynski", "Robert Gumny"],
          "meioscampos": ["Krystian Bielik", "Damian Szymanski", "Grzegorz Krychowiak", "Kamil Grosicki", "Jakub Kaminski", "Szyman Zurkowski", "Sebastian Szymanski", "Piotr Zielinski", "Nicola Zalewski", "Przemyslaw Frankowski", "Michal Skoras"],
          "atacantes": ["Arkadiusz Milik", "Lewandowski Robert", "Karol Swiderski", "Krzysztof Piatek"]
      }
  },
  {
      "id": 21,
      "sigla": "POR",
      "pais": "Portugal",
      "grupo": "H",
      "jogadores": {
          "tecnico": "Fernando Manuel Fernandes",
          "goleiros": ["Rui Patricio", "Jose Sa", "Diogo Costa"],
          "zagueiros": ["Diogo Dalot", "Pepe", "Ruben Dias", "Raphael Guerreiro", "Danilo", "Nuno Mendes", "Joao Cancelo", "Antonio Silva"],
          "meioscampos": ["Joao Palhinha", "Bruno Fernandes", "William", "Vitinha", "Joao Mario", "Rúben Neves", "Matheus Nunes", "Otavio"],
          "atacantes": ["Cristiano Ronaldo", "Andre Silva", "Bernardo Silva", "Joao Felix", "Rafael Leao", "Ricardo Horta", "Goncalo Ramos"]
      }
  },
  {
      "id": 22,
      "sigla": "QAT",
      "pais": "Catar",
      "grupo": "A",
      "jogadores": {
          "tecnico": "Féliz Sánchez Bas",
          "goleiros": ["Saad Alsheeb", "Yousof Hassan", "Meshaal Barsham"],
          "zagueiros": ["Pedro Miguel", "Mohammed Waad", "Tarek Salman", "Musaab Khidir", "Homam Ahmed", "Bassam Hisham", "Boualem Khoukhi", "Ismail Mohamad"],
          "meioscampos": ["Abdelkarim Hassan", "Abdulaziz Hatem", "Ali Assadalla", "Hassan Alhaydos", "Karim Boudiaf", "Salem Al Hajri", "Assim Madibo", "Naif Abdulraheem", "Jassem Gaber", "Mostafa Tarek Meshaal"],
          "atacantes": ["Ahmed Alaaeldin", "Mohammed Muntari", "Akram Afif", "Khalid Muneer", "Almoez Ali"]
      }
  },
  {
      "id": 23,
      "sigla": "KSA",
      "pais": "Arábia Saudita",
      "grupo": "C",
      "jogadores": {
          "tecnico": "Hervé Renard",
          "goleiros": ["Mohammed Alyami", "Mohammed Alowais", "Nawaf Alaqidi"],
          "zagueiros": ["Sultan Alghannam", "Abdullah Madu", "Abdulelah Alamri", "Ali Albulathi", "Mohammed Alburayk", "Saud Abdulhamid", "Yasser Alshahrani", "Hassan Altambakti"],
          "meioscampos": ["Salman Alfaraj", "Abdulelah Almalki", "Abdullah Otayf", "Ali Alhassan", "Sami Alnaji", "Nawaf Al Abid", "Mohamed Kanno", "Nasser Aldawsari", "Riyadh Sharahili"],
          "atacantes": ["Feras Albrikan", "Salem Aldawsari", "Saleh Alshehri", "Hatam Bahbri", "Abdulrahman Alobud", "Haitham Asiri"]
      }
  },
  {
      "id": 24,
      "sigla": "SEN",
      "pais": "Senegal",
      "grupo": "A",
      "jogadores": {
          "tecnico": "Aliou Cissé",
          "goleiros": ["Seny Dieng", "Edouard Mendy", "Alfred Gomis"],
          "zagueiros": ["Formose Mendy", "Kalidou Koulibaly", "Pape Abou Cisse", "Cheikhou Kouyate", "Moussa Ndiaye", "Fode Ballo", "Ismail Jakobs", "Youssouf Sabaly", "Abdou Diallo", "Moustapha Name"],
          "meioscampos": ["Idrissa Gana Gueye", "Nampalys Mendy", "Pathe Ciss", "Krepin Diatta", "Pape Sarr", "Mamadou Ndiaye", "Pape Gueye"],
          "atacantes": ["Nicolas Jackson", "Boulaye Dia", "Iliman Ndiaye", "Ismaila Sarr", "Famara Diedhiou", "Cheikh Dieng"]
      }
  },
  {
      "id": 25,
      "sigla": "SRB",
      "pais": "Sérvia",
      "grupo": "G",
      "jogadores": {
          "tecnico": "Dragan Stojković",
          "goleiros": ["Marko Dmitrovic", "Predrag Rajkovic", "Vanja Milinkovic"],
          "zagueiros": ["Strahinja Pavlovic", "Strahinja Erakovic", "Nikola Milenkovic", "Milos Veljkovic", "Stefan Mitrovic", "Srdan Babic", "Filip Mladenovic"],
          "meioscampos": ["Nemanja Maksimovic", "Nemanja Gudelj", "Andrija Zivkovic", "Sasa Lukic", "Filip Kostic", "Uros Racic", "Sergej Milinkovic-Savic", "Darko Lazovic", "Ivan Ilic", "Marko Grujic"],
          "atacantes": ["Nemanja Radonjic", "Aleksandar Mitrovic", "Dusan Tajic", "Luka Jovic", "Dusan Vlahovic", "Filip Djuricic"]
      }
  },
  {
      "id": 26,
      "sigla": "ESP",
      "pais": "Espanha",
      "grupo": "E",
      "jogadores": {
          "tecnico": "Luis Enrique Martínez",
          "goleiros": ["Robert Lynch Sánchez", "David Raya", "Unai Simon"],
          "zagueiros": ["Cesar Azpilicueta", "Eric Garcia", "Pau Torres", "Alejandro Balde", "Hugo Guillamon", "Jordi Alba", "Dani Carvajal", "Aymeric Laporte"],
          "meioscampos": ["Sergio Busquets", "Marcos Llorente", "Koke", "Gavi", "Rodri", "Carlos Soler", "Pedri Gonzalez"],
          "atacantes": ["Alvaro Morata", "Marco Asensio", "Ferran Torres", "Nico Williams", "Yeremy Pino", "Dani Olmo", "Pablo Sarabia", "Anssumane Fati"]
      }
  },
  {
      "id": 27,
      "sigla": "SUI",
      "pais": "Suíça",
      "grupo": "G",
      "jogadores": {
          "tecnico": "Murat Yakin",
          "goleiros": ["Yann Sommer", "Jonas Omlin", "Gregor Kobel", "Philipp Koehn"],
          "zagueiros": ["Edimilson Fernandes", "Silvan Widmer", "Nico Elvedi", "Manuel Akanji", "Renato Steffen", "Ricardo Rodriguez", "Eray Comert", "Fabian Schaer"],
          "meioscampos": ["Denis Zakaria", "Remo Freuler", "Granit Xhaka", "Michel Aebischer", "Mohameth Sow", "Christian Fassnacht", "Fabian Frei", "Xherdan Shaqiri", "Fabian Rieder", "Ardon Jashari"],
          "atacantes": ["Breel Embolo", "Haris Seferovic", "Ruben Vargas", "Noah Okafor"]
      }
  },
  {
      "id": 28,
      "sigla": "TUN",
      "pais": "Tunísia",
      "grupo": "D",
      "jogadores": {
          "tecnico": "Jalel Kadri",
          "goleiros": ["Aymen Mathlouthi", "Aymen Dahmen", "Ben Said Bechir", "Hassen Mouez"],
          "zagueiros": ["Ifa Bilel", "Talbi Montassar", "Meriah Yassine", "Dylan Bronn", "Maaloul Ali", "Drager Mohamed", "Wajdi Kechrida", "Ali Abdi"],
          "meioscampos": ["Nader Ghandri", "Mejbri Hannibal", "Sassi Ferjani", "Aissa Laidouni", "Ben Romdhane Ali", "Ellyes Skhiri", "Chaaleli Ghaylen"],
          "atacantes": ["Msakni Youssef", "Issam Jebali", "Wahbi Khazri", "Taha Khenissi", "Jaziri Seifeddine", "Sliti Naim", "Ben Slimane Anis"]
      }
  },
  {
      "id": 29,
      "sigla": "USA",
      "pais": "Estados Unidos",
      "grupo": "B",
      "jogadores": {
          "tecnico": "Gregg Berhalter",
          "goleiros": ["Matt Turner", "Ethan Horvath", "Sean Johnson"],
          "zagueiros": ["Sergino Dest", "Walker Zimmerman", "Antonee Robinson", "Tim Ream", "Aaron Long", "Shaquell Moore", "Cameron Carter-Vickers", "DeAndre Yedlin", "Joseph Scally"],
          "meioscampos": ["Tyler Adams", "Yunus Musah", "Weston James Earl Mc Kennie", "Luca De La Torre", "Cristian Roldan", "Kellyn Perry-Acosta"],
          "atacantes": ["Giovanni Reyna", "Jesus Ferreira", "Christian Pulisic", "Branden Aaronson", "Jordan Morris", "Haji Wright", "Tim Weah", "Josh Sargent"]
      }
  },
  {
      "id": 30,
      "sigla": "URU",
      "pais": "Uruguai",
      "grupo": "H",
      "jogadores": {
          "tecnico": "Diego Alonso",
          "goleiros": ["Fernando Muslera", "Sebastian Sosa", "Sergio Rochet"],
          "zagueiros": ["Jose Gimenez", "Diego Godin", "Ronald Araujo", "Guillermo Varela", "Mathias Olivera", "Vina Matias", "Sebastian Coates", "Martin Caceres", "Jose Luis Rodriguez"],
          "meioscampos": ["Matias Vecino", "Rodrigo Bentancur", "Nicolas De La Cruz", "Giorgian De Arrascaeta", "Lucas Torreira", "Federico Valverde", "Agustin Canobbio", "Manuel Ugarte"],
          "atacantes": ["Facundo Pellistri", "Luis Suarez", "Darwin Nunez", "Maximiliano Gomez", "Facundo Torres", "Edinson Cavani"]
      }
  },
  {
      "id": 31,
      "sigla": "WAL",
      "pais": "Gales",
      "grupo": "B",
      "jogadores": {
          "tecnico": "Robert John Page",
          "goleiros": ["Wayne Hennessey", "Danny Ward", "Adam Davies"],
          "zagueiros": ["Chris Gunter", "Neco Shay Williams", "Ben Davies", "Chris Mepham", "Joe Rodon", "Connor Roberts", "Ethan Ampadu", "Tom Lockyer", "Ben Cabango", "Rubin Colwill"],
          "meioscampos": ["Joe Allen", "Harry Wilson", "Aaron Ramsey", "Joseff Morrell", "Jonathan Williams", "Sorba Thomas", "Dylan Levitt", "Matt Smith", ""],
          "atacantes": ["Brennan Johnson", "Gareth Bale", "Kieffer Moore", "Mark Harris", "Daniel James"]
      }
  }
]