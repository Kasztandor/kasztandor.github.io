let ogQuestions = [ { "question": "Wielowątkowość polega na:", "answers": [ "Umożliwieniu procesorowi utrzymania stanu różnych wątków oraz przełączania pomiędzy nimi w czasie rzędu nanosekund", "wykonywaniu procesów równolegle", "zastosowaniu wielu rdzeni procesora", "jednoczesnym wykonywaniu tej samej instrukcji w kilku jedn. funkcjonalnych procesora"], "correct": "a" }, { "question": "Który numer portu jest używany w protokole HTTP?", "answer": "80" }, { "question": "Który numer portu jest używany w protokole HTTPS?", "answer": "443" }, { "question": "Ile jest bitów w adresie IPv4?", "answers": [ "32", "16", "48", "8"], "correct": "a" }, { "question": "Architektura trójszynowa komputera zawiera:", "answers": [ "dwa mosty", "szynę środkową", "trzy szyny", "mosty wschodni i zachodni"], "correct": "abc" }, { "question": "Minimalna liczba dysków w RAID4?", "answers": [ "1", "4", "2", "3"], "correct": "d" }, { "question": "RAID 0 umożliwia:", "answers": [ "przyspieszenie operacji odczytu i zapisu", "niezakłóconą pracę przy awarii jednego dysku", "powiększenie przestrzeni dostępnej jako jedna calość", "zwiększenie odporności na awarie"], "correct": "ac" }, { "question": "Które stwierdzenia dot. architektury dwuszynowej są prawdziwe:", "answers": [ "Obie szyny są poł. układem tzw. mostu", "Zawiera tylko poł. dwupunktowe", "Logicznie dwie szyny są widziane przez procesor jako jedna szyna", "Zawiera dwa mosty: północny i południowy"], "correct": "acb" }, { "question": "Które pole w nagłówku IP zapewnia, że pakiety nie będą w nieskończoność zapętlać się w sieci?", "answers": [ "TTL", "Suma kontrolna", "CRC", "TOS"], "correct": "a" }, { "question": "Ile jest bitów w adresie MAC?", "answers": [ "32", "16", "48", "8"], "correct": "c" }, { "question": "Które z następujących stwierdzeń opisujących metodę MAC opartą na rywalizacji jest prawdziwe?", "answers": [ "Jest używana w nośniku niewspółdzielonym", "Węzły rywalizują o dostęp do nośnika", "Przekazuje kontrolę do warstwy górnej", "Każdy węzeł ma określony czas, w którym może korzystać z nośnika"], "correct": "b" }, { "question": "Które z następujących stwierdzeń odnoszących się do protokołu TCP/IP są prawdziwe(wybrać dwie odpowiedzi)", "answers": [ "TCP - jest protokołem bezpołączeniowych, a IP - połączeniowym", "TCP - jest niezawodny, a IP - zawodny", "IP - jest protokołem bezpołączeniowym, a TCP - połączeniowym", "IP działa na poziomie warstwy transportu"], "correct": "bc" }, { "question": "Rozwiązania typu RAID używane są w nast. celach:", "answers": [ "zwiększanie niezawodności (odporność na awarie)", "ograniczenie nadmiarowości", "zwiększenie wydajności transmisji danych", "wyeliminowanie redundacji", ], "correct": "ac" }, { "question": "Dzięki czemu jest eliminowany przesłuch w kablu UTP?", "answers": [ "Ekranowaniu kabla", "Skręcaniu przewodów w pary", "Uziemieniu punktów końcowych", "Otoczeniu przewodów płaszczem", ], "correct": "b" }, { "question": "Jeśli węzeł odbierze ramkę i obliczoną wartość CRC będzie różnić od wartości CRC z pola FCS, to jakie podejmie działanie?", "answers": [ "Odrzuci ramkę", "Zrekonstruuje ramkę na podstawie wartości CRC", "Przekaże ramkę w takim stanie do następnego hosta", "Wyłączy interfejs przez który odebrał ramkę", ], "correct": "a" }, { "question": "Jakie jest główne zadanie warstwy fizycznej?", "answers": [ "Zapewnia niezawodną transmisję danych przez łącze fizyczne", "Zapewnia łączność oraz wybór trasy łączącej dwa systemy końcowe", "Zajmuje się adresowaniem fizycznym, topologią sieci i dostępem do nośnika", "Definiuje specyfikacje funkcjonalne łączy między systemami końcowymi oraz specyfikacje sygnałów elektrycznych, optycznych i radiowych", ], "correct": "d" }, { "question": "Które z następujących stwierdzeń odnoszących się do procesu enkapsulacji na poziomie warstwy sieci są prawdziwe?", "answers": [ "Dodaje nagłówek do segmentu", "Jest wykonywany przez ostatni router na drodze do miejsca docelowego", "W procesie tym są dodawane źródłowy adres IP i docelowy adres IP", "Przekształca informacje z warstwy transportu w ramkę", ], "correct": "ac" }, { "question": "Warstwa fizyczna jest ___ warstwą modelu osi.", "answers": [ "warstwą 1", "warstwą 4", "warstwą 3", "warstwą 7", ], "correct": "a" }, { "question": "Z którego portu korzysta protokół POP3.", "answers": [ "Portu TCP/UDP 53", "Portu TCP 25", "Portu TCP 80", "Portu UDP 110", ], "correct": "d" }, { "question": "Co stanowi niedogodność stosowania koncentratorów?", "answers": [ "Koncentrator nie może zwiększyć zasięgu sieci", "Koncentrator nie moze przesyłać osłabionych sygnałów w sieci", "Koncentrator nie może filtrować ruchu", "Koncentrator nie może wzmacniać osłabionych sygnałow", ], "correct": "c" }, { "question": "Którym terminem jest określany PROCES PRZEPLATANIA WIELU STRUMIENI DANYCH w jednym współużytkowanym kanale komunikacyjnym lub w nośniku sieciowym?", "answers": [ "Rozgłaszanie grupowe", "Multipleksowanie", "Inkapsulacja", "Routing", ], "correct": "b" }, { "question": "Za co jest odpowiedzialny host odbierający podczas transferu danych?", "answers": [ "Enkapsulacja", "Potwierdzanie", "Segmentacja", "Ponowne zestawienie (resekwencjonowanie) segmentów", ], "correct": "bd" }, { "question": "Co się może stać kiedy wartość TTL będzie równa 1 ?", "answers": [ "Pakiet może zostać poprawnie dostarczony, jeśli miejscem docelowym jest bezpośrednio podłączona sieć", "Mechanizmy kontrolne TCP dodadzą do wartości TTL dalsze skoki", "Pakiet zostanie odrzucony przez następny router, chyba, że do jego interfejsu jest podłączona sieć docelowa", "Pakiet zostanie zwrócony do hosta źródłowego", ], "correct": "ac" }, { "question": "Program (polecenie) służący do badania trasy pakietów w sieci IP w systemach linux i IOS ma nazwę", "answers": [ "traceroute", "tracert", "netstat", "route", ], "correct": "a" }, { "question": "które z urządzeń mogą rozwiązać problem nadmiernego ruchu rozgłoszeniowego?", "answers": [ "przełącznik", "router", "koncentrator", "most", ], "correct": "b" }, { "question": "które z urządzeń mogą rozwiązać problem nadmiernej liczby kolizji w sieci:", "answers": [ "przełącznik", "router", "koncentrator", "most", ], "correct": "ab" }, { "question": "W której warstwie modelu OSI działa koncentrator?", "answers": [ "sesji", "aplikacji", "fizycznej", "łącza danych", ], "correct": "c" }, { "question": "Wolumin:", "answers": [ "Przedstawia wiele dysków jako jeden wirtualny dysk", "tworzony jest za pomocą interfejsu WMF", "na jego podstawie następuje tworzenie systemu plików", "składa się z wielu dysków na podstawie których można utworzyć wiele wirtualnych dysków", ], "correct": "ac" }, { "question": "Główne elementy strukturalne procesora to:", "answers": [ "jednostka sterująca", "wątki", "rejestry", "jednostka arytmetyczno-logiczna (ALU)", ], "correct": "acd" }, { "question": "Potok jest to:", "answers": [ "taki sposób przetwarzania instrukcji gdy procesor uruchamia instrukcję n, może w tym czasie dekodować instrukcję n+1 i pobierać instrukcję n+2", "system przepływu danych do pamięci operacyjnej", "system komunikacji międzyprocesowej polegający na przekazywaniu danych wyjściowych jednego procesu na wejście kolejnego procesu", "szeregowe wykonywanie kolejnych procesów", ], "correct": "a" }, { "question": "Do kroków wykonywania instrukcji przez jednostkę funkcjonalną procesora należą:", "answers": [ "Pobranie instrukcji", "Skasowanie zawartości rejestru programu", "Dekodowanie instrukcji", "Wykonanie instrukcji", ], "correct": "acd" }, { "question": "RAID 1 umożliwia:", "answers": [ "A) przyśpieszenie operacji odczytu i zapisu", "B) niezakłóconą pracę przy awarii jednego dysku", "C) powiększenie przestrzeni dostępnej jako jedna całość", "D) zwiększenie odporności na awarie", ], "correct": "bd" }, { " question": "Instrukcje procesora można podzielić na cztery kategorie:", "answers": [ "arytmetyczne", "rekurencyjne", "działania na bitach", "sterujące", ], "correct": "acd" }, { "question": "Język (kod) maszynowy charakteryzuje:", "answers": [ "zestaw rozkazów procesora, w którym zapis programu wyrażony jest w postaci liczb binarnych", "jest to język wysokiego poziomu", "może być generowany w procesie kompilacji (w przypadku języków wysokiego poziomu) lub asemblacji (w przypadku języków niskiego poziomu)", "przenośność między różnymi architekturami procesorów.", ], "correct": "ac" }, { "question": "Wieloprocesory symetryczne cechują się następującymi wlasnościami:", "answers": [ "są zaopatrzone w co najmniej dwa procesory o porównywalnych możliwościach", "każdy procesor ma swoje dedykowane układy wejścia - wyjścia", "wsyzstkie procesory mogą wykonywać te same funkcje", "każdy procesor ma własną pamięc główną", ], "correct": "ac" }, { "question": "Główne elementry strukturalne komputera to:", "answers": [ "Jednostka centralna (CPU)", "płyta główna", "pamięć główna", "Układy wejścia/wyjścia", ], "correct": "acd" }, { "question": "Do rejestrów procesora należą:", "answers": [ "potoki", "Program Status Word", "wskaźnik stosu", "wskaźnik programu", ], "correct": "cdb" }, { "question": "Do warstw systemu komputerowego należą:", "answers": [ "warstwa dostępu", "sprzęt", "warstwa dystrybucji", "oprogramowanie użytkowe", ], "correct": "bd" }, { "question": "Które z następujących stwierdzeń odnoszących się do protokołu IP jest prawdziwe?", "answers": [ "Jest protokołem połączeniowym", "Do ustalania optymalnej trasy wykorzystuje dane aplikacji", "Jest używany zarówno przez routery, jak i hosty", "Jest niezawodny", ], "correct": "c" }, { "question": "host nie odebrał wszystkich przesłanych do niego segmentów. Co może on zrobić w celu poprawienia niezawodności komunikacji", "answers": [ "zmienić port źródłowy", "zmniejszyć numer sekwencyjny", "restartować połączenie", "zmniejszyć rozmiar okna", ], "correct": "d" }, { "question": "Wątki procesora są to:", "answers": [ "miniprocesy działające quasi-rownolegle we współdzielonej przestrzeni pamięci", "fragmenty kodu programu dysponujące własną wyłączną pamięcią operacyjną", "części kodu wykonywane w osobnych rdzeniach", "procesy wykonywane w pamięci podręcznej", ], "correct": "a" }, { "question": "Architektura superskalarna procesora polega na:", "answers": [ "zwielokrotnianiu jednostek funkcjonalnych procesora", "dodaniu wielu poziomów pamięci podręcznej procesora", "możliwości dodawania równolegle wielu rdzeni procesórów", "możliwości przyśpieszenia częstotliwości taktowania procesora", ], "correct": "a" }, { "question": "Segmentacja pamięci operacyjnej umożliwia:", "answers": [ "posiadanie większej przestrzeni adresowej niż pamięć fizyczna", "zabezpieczenie obszarów danych i kodu programu", "osobne przestrzenie adresowe dla danych, kodu programu, stosu itp.", "dynamiczną zmianę wielkości każdej strony pamięci", ], "correct": "bc" }, { "question": "Na płycie głównej komputera w pamięci ROM zawarty może być program:", "answers": [ "BIOS", "LILO", "UEFI", "GRUB", ], "correct": "ac" }, { "question": "Segmentacja pamięci polega na:", "answers": [ "podziale na logiczne części, odpowiadające poszczególnym sekcjom programu - sekcji kodu, danych, kodu programu stosu itp.", "podział pamięci na mniejsze fragmenty, determinowane logiczną przestrzenią adresową procesora", "podziale pamięci na równe obszary", "podziale pamięci na podstawie jej prędkości", ], "correct": "ab" }, { "question": "Fizyczna przestrzeń adresowa jest to:", "answers": [ "zbiór adresów przekazywanych do układów pamięci głównej (fizycznej)", "zbiór adresów widzianych przez procesy procesora", "maksymalna liczba dostępnych adresów rejestrów procesora", "suma pojemności wszystkich zainstalowanych pamięci w komputerze", ], "correct": "a" }, { "question": "Do funkcji zarządzania pamięcią należą:", "answers": [ "sprzętowa alokacja", "koordynacja", "ochrona", "wizualizacja", ], "correct": "ac" }, { "question": "Logiczna przestrzeń adresowa:", "answers": [ "zbiór adresów przekazywanych do układów pamięci głównej (fizycznej)", "zbiór adresów generowanych przez procesor w kontekście aktualnie wykonywanego procesu", "maksymalna liczba dost. adresów rejestrów procesora", "suma pojemności wszystkich zainst. pamięci w komputerze", ], "correct": "b" }, { "question": "Wymiana pamięci (swapping) jest to:", "answers": [ "przenoszenie całego procesu pomiędzy pamięcia operacyjną i fizycznym urządzeniem przestrzeni wymiany lub plikiem wymiany", "przenoszenie danych z pamięci operacyjnej do rejestrów procesora", "przenoszenie danych pomiędzy pamięcia operacyjną i pamięcia podręczną", "przenoszenie strony pamięci pomiędzy pamięcia operacyjną i fizycznym urządzeniem przestrzeni wymiany lub plikiem wymiany", ], "correct": "d" }, { "question": "licznik programu:", "answers": [ "zawierają adres pamięci następnej instrukcji do pobrania", "zawiera liczbę aktualnie używanych wątków", "zawiera liczbę aktualnie wykonywanych programów", "zawiera identyfikator aktualnie wykonywanego procesu", ], "correct": "a" }, { "question": "W sieci znajduje się 10 komputerów połączonych do koncentratora 10Mbps half-duplex. Do tego koncentratora podłączony jest również serwer na takim samym łączu. Jaką szerokość pasma ma połączenie każdego komputera z serwerem?", "answers": [ "100kbps", "10Mbps", "1Mbps", "2Mbps", ], "correct": "b" }, { "question": "Która kolejność wg. kryterium największej szybkości jest właściwa:", "answers": [ "rejestry, pamięc podręczna, pamięć główna", "rejestry, dysk magnetyczny, pamięć podręczna", "pamięć główna, dysk magnetyczny, pamięć podręczna", "dysk SSD, dysk magnetyczny, pamięć główna", ], "correct": "a" }, { "question": "która zasada routingu jest prawidłowa?", "answers": [ "Jeśli w tablicy routingu jednego routera znajdują się pewne informacje, wszystkie przyległe routery mają te same informacje", "każdy router podejmuje decyzje samodzielnie, na podstawie informacji znajdującej się w jego tablicy routingu", "Informacje o trasie jednej sieci implikują informacje o trasie w drugą strone, czyli powrotnej", "Każdy router podejmuje decyzje związanie z routingiem na podstawie informacji znajdujących się w jego tablicy routingu oraz tablicach routingu jego sąsiadów,", ], "correct": "b" }];
let questions = ogQuestions;
let letters = ["a", "b", "c", "d"];

let mixQuestions = true
let mixAnswers = true

if (mixQuestions){
    questions = questions.sort(() => Math.random() - 0.5);
}
if (mixAnswers){
    questions.forEach(function(question) {
        if(question.answers){
            let newAnswers = []
            question.answers.forEach(function(answer, index) {
                newAnswers.push([answer, question.correct.includes(letters[index])]);
            })
            newAnswers = newAnswers.sort(() => Math.random() - 0.5);
            question.answers = []
            question.correct = ""
            newAnswers.forEach(function(answer, index) {
                question.answers.push(answer[0]);
                if(answer[1]){
                    question.correct += letters[index];
                }
            })
        }
    });
}

let inner = "<h1> Questions </h1>"
questions.forEach(function(question, index) {
    try{
        inner += '<span id="q'+index+'" class="question"><h2>' + question.question + "</h2>";
        inner += "<ul>";
        //is question.answers exist
        if(question.answers){
            question.answers.forEach(function(answer, index) {
                inner += '<li class="'+letters[index]+'"><input type="checkbox">' + answer + "</li>";
            });
        }
        else{
            inner += '<li><input type="text"></li>';
        }
        inner += "</ul></span>";
    }catch{}
});
document.querySelector("main").innerHTML += inner;

function check(){
    let score = 0;
    document.querySelectorAll(".question").forEach(function(q, id) {
        let correct = true
        if(q.querySelectorAll("input")[0].type == "checkbox"){
            q.querySelectorAll("input").forEach(function(answer, index) {
                if(answer.checked != questions[id].correct.includes(letters[index])){
                    if(answer.checked != questions[id].correct.includes(letters[index])){
                        correct = false;
                    }
                }
            })
        }
        else{
            if(q.querySelectorAll("input")[0].value != questions[id].answer){
                correct = false;
            }
        }
        if(correct){
            q.querySelectorAll("h2")[0].style.color = "green";
            score++;
        }
        else{
            q.querySelectorAll("h2")[0].style.color = "red";
        }
    });
    document.querySelector("#score").innerHTML = "Score: " + score + "/" + questions.length;
}
function reset(){
    document.querySelectorAll(".question").forEach(function(q) {
        q.querySelectorAll("h2")[0].style.color = "";
        q.querySelectorAll("input").forEach(function(input) {
            input.checked = false;
            input.value = "";
        })
    });
    document.querySelector("#score").innerHTML = "Score: 0/" + questions.length;
}