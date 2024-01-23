export const questionsData = [
    {
        id: 1,
        theme: 'Литература',
        questions: [
            {
                id: 1,
                questionText: 'Кто является автором произведения "Преступление и наказание"',
                answers: [
                    { id: 'answer1', text: 'Федор Достоевский', isCorrect: true },
                    { id: 'answer2', text: 'Лев Толстой', isCorrect: false },
                    { id: 'answer3', text: 'Иван Тургенев', isCorrect: false },
                    { id: 'answer4', text: 'Александр Пушкин', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'В каком году было написано произведение "Война и мир"',
                answers: [
                    { id: 'answer1', text: '1805', isCorrect: false },
                    { id: 'answer2', text: '1869', isCorrect: false },
                    { id: 'answer3', text: '1865', isCorrect: true },
                    { id: 'answer4', text: '1873', isCorrect: false },
                ],
            },
            {
                id: 3,
                questionText: 'Какое произведение считается шедевром английской литературы и начинается фразой "Все счастливые семьи похожи друг на друга; каждая несчастливая семья несчастлива по-своему"',
                answers: [
                    { id: 'answer1', text: 'Преступление и наказание', isCorrect: false },
                    { id: 'answer2', text: 'Анна Каренина', isCorrect: false },
                    { id: 'answer3', text: 'Грозовой перевал', isCorrect: true },
                    { id: 'answer4', text: 'Братья Карамазовы', isCorrect: false },
                ],
            },
            {
                id: 4,
                questionText: 'Кто из персонажей "Romeo and Juliet" Уильяма Шекспира сказал: "Будь или не быть: вот' +
                    ' в чем вопрос"?',
                answers: [
                    { id: 'answer1', text: 'Гамлет', isCorrect: true },
                    { id: 'answer2', text: 'Ромео', isCorrect: false },
                    { id: 'answer3', text: 'Джульетта', isCorrect: false },
                    { id: 'answer4', text: 'Меркуцио', isCorrect: false },
                ],
            },
            {
                id: 5,
                questionText: 'Какому жанру литературы соответствует произведение "Мастер и Маргарита"?',
                answers: [
                    { id: 'answer1', text: 'Фантастика', isCorrect: false },
                    { id: 'answer2', text: 'Сатира', isCorrect: true },
                    { id: 'answer3', text: 'Романтика', isCorrect: false },
                    { id: 'answer4', text: 'Детектив', isCorrect: false },
                ],
            },
        ],
    },
    {
        id: 2,
        theme: 'Кино',
        questions: [
            {
                id: 1,
                questionText: 'Кто является режиссером фильма "Властелин колец: Братство кольца"?',
                answers: [
                    { id: 'answer1', text: 'Питер Джексон', isCorrect: true },
                    { id: 'answer2', text: 'Кристофер Нолан', isCorrect: false },
                    { id: 'answer3', text: 'Стивен Спилберг', isCorrect: false },
                    { id: 'answer4', text: 'Джеймс Кэмерон', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'Какой фильм считается первым полнометражным цветным фильмом в истории кинематографа?',
                answers: [
                    { id: 'answer1', text: 'Золотой гербарий', isCorrect: false },
                    { id: 'answer2', text: 'Паровоз Бэрнса', isCorrect: false },
                    { id: 'answer3', text: 'Весельчаки', isCorrect: false },
                    { id: 'answer4', text: 'Красный сад', isCorrect: true },
                ],
            },
            {
                id: 3,
                questionText: 'Кто исполнил главную роль в фильме "Титаник"?',
                answers: [
                    { id: 'answer1', text: 'Брэд Питт', isCorrect: false },
                    { id: 'answer2', text: 'Джонни Депп', isCorrect: false },
                    { id: 'answer3', text: 'Леонардо ДиКаприо', isCorrect: true },
                    { id: 'answer4', text: 'Том Хэнкс', isCorrect: false },
                ],
            },
            {
                id: 4,
                questionText: 'Как называется главный антагонист в фильме "Звездные войны: Эпизод IV - Новая надежда"?',
                answers: [
                    { id: 'answer1', text: 'Дарт Вейдер', isCorrect: true },
                    { id: 'answer2', text: 'Император Палпатин', isCorrect: false },
                    { id: 'answer3', text: 'Дарт Мол', isCorrect: false },
                    { id: 'answer4', text: 'Генерал Гривус', isCorrect: false },
                ],
            },
            {
                id: 5,
                questionText: 'Какой фильм стал обладателем 11 премий Оскар, включая лучший фильм?',
                answers: [
                    { id: 'answer1', text: 'Бен-Гур', isCorrect: true },
                    { id: 'answer2', text: 'Титаник', isCorrect: false },
                    { id: 'answer3', text: 'Властелин колец: Возвращение короля', isCorrect: false },
                    { id: 'answer4', text: 'Ла-Ла Ленд', isCorrect: false },
                ],
            },
        ],
    },

    {
        id: 3,
        theme: 'Искусство',
        questions: [
            {
                id: 1,
                questionText: 'Кто написал картину "Мона Лиза"?',
                answers: [
                    { id: 'answer1', text: 'Винсент ван Гог', isCorrect: false },
                    { id: 'answer2', text: 'Леонардо да Винчи', isCorrect: true },
                    { id: 'answer3', text: 'Пабло Пикассо', isCorrect: false },
                    { id: 'answer4', text: 'Микеланджело', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'Какое искусство представлено в скульптуре "Давид" Микеланджело?',
                answers: [
                    { id: 'answer1', text: 'Живопись', isCorrect: false },
                    { id: 'answer2', text: 'Музыка', isCorrect: false },
                    { id: 'answer3', text: 'Скульптура', isCorrect: true },
                    { id: 'answer4', text: 'Театр', isCorrect: false },
                ],
            },
            {
                id: 3,
                questionText: 'Как называется стиль искусства, который развивался в Европе в XVI-XVII веках и характеризуется роскошью, эмоциональностью и изобилием декора?',
                answers: [
                    { id: 'answer1', text: 'Барокко', isCorrect: true },
                    { id: 'answer2', text: 'Ренессанс', isCorrect: false },
                    { id: 'answer3', text: 'Готика', isCorrect: false },
                    { id: 'answer4', text: 'Романтизм', isCorrect: false },
                ],
            },
            {
                id: 4,
                questionText: 'Кто известен своими сюрреалистическими работами, включая "Постоянство памяти" с мягкими часами?',
                answers: [
                    { id: 'answer1', text: 'Пабло Пикассо', isCorrect: false },
                    { id: 'answer2', text: 'Сальвадор Дали', isCorrect: true },
                    { id: 'answer3', text: 'Рембрандт', isCorrect: false },
                    { id: 'answer4', text: 'Анри Матисс', isCorrect: false },
                ],
            },
            {
                id: 5,
                questionText: 'Кто из художников является представителем кубизма и создателем картины "Демоизель д\'Авиньон"?',
                answers: [
                    { id: 'answer1', text: 'Анри Матисс', isCorrect: false },
                    { id: 'answer2', text: 'Пабло Пикассо', isCorrect: true },
                    { id: 'answer3', text: 'Винсент ван Гог', isCorrect: false },
                    { id: 'answer4', text: 'Эдвард Мунк', isCorrect: false },
                ],
            },
            {
                id: 6,
                questionText: 'Как называется стиль искусства, возникший во второй половине XIX века в реакции на промышленную революцию, характеризующийся стремлением к отображению реальности и повседневной жизни?',
                answers: [
                    { id: 'answer1', text: 'Барокко', isCorrect: false },
                    { id: 'answer2', text: 'Романтизм', isCorrect: false },
                    { id: 'answer3', text: 'Реализм', isCorrect: true },
                    { id: 'answer4', text: 'Импрессионизм', isCorrect: false },
                ],
            },
        ],
    },

    {
        id: 4,
        theme: 'Психология',
        questions: [
            {
                id: 1,
                questionText: 'Что представляет собой фрейдистская структура личности, ответственная за подавление инстинктов и социальное поведение?',
                answers: [
                    { id: 'answer1', text: 'Ид', isCorrect: false },
                    { id: 'answer2', text: 'Сверх-эго', isCorrect: true },
                    { id: 'answer3', text: 'Эго', isCorrect: false },
                    { id: 'answer4', text: 'Либидо', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'Как называется явление, при котором люди склонны воспринимать и запоминать информацию, которая подтверждает их существующие убеждения?',
                answers: [
                    { id: 'answer1', text: 'Стереотип', isCorrect: false },
                    { id: 'answer2', text: 'Подтверждение биас', isCorrect: true },
                    { id: 'answer3', text: 'Когнитивное искажение', isCorrect: false },
                    { id: 'answer4', text: 'Дефенсивные механизмы', isCorrect: false },
                ],
            },
            {
                id: 3,
                questionText: 'Какой фактор в теории архетипов Карла Юнга представляет собой коллективное бессознательное и включает универсальные символы и мотивы?',
                answers: [
                    { id: 'answer1', text: 'Анима', isCorrect: false },
                    { id: 'answer2', text: 'Архетип', isCorrect: true },
                    { id: 'answer3', text: 'Синхроничность', isCorrect: false },
                    { id: 'answer4', text: 'Интроверсия', isCorrect: false },
                ],
            },
            {
                id: 4,
                questionText: 'Что представляет собой явление, когда люди проявляют положительные чувства к близким родственникам, особенно к младшим, и испытывают к ним заботу и защитнические инстинкты?',
                answers: [
                    { id: 'answer1', text: 'Когнитивная диссонанс', isCorrect: false },
                    { id: 'answer2', text: 'Эффект Зигарника', isCorrect: false },
                    { id: 'answer3', text: 'Опыт обучения', isCorrect: false },
                    { id: 'answer4', text: 'Эффект Годальцова', isCorrect: true },
                ],
            },
            {
                id: 5,
                questionText: 'Как называется явление, при котором люди склонны видеть свои положительные черты в более благоприятном свете, чем у других?',
                answers: [
                    { id: 'answer1', text: 'Нарциссизм', isCorrect: false },
                    { id: 'answer2', text: 'Самооценка', isCorrect: true },
                    { id: 'answer3', text: 'Когнитивное искажение', isCorrect: false },
                    { id: 'answer4', text: 'Комплекс меньшенства', isCorrect: false },
                ],
            },
            {
                id: 6,
                questionText: 'Кто разработал и предложил теорию о двух типах интеллекта: кристаллическом и жидком?',
                answers: [
                    { id: 'answer1', text: 'Альфред Адлер', isCorrect: false },
                    { id: 'answer2', text: 'Роберт Штернберг', isCorrect: true },
                    { id: 'answer3', text: 'Эрик Эриксон', isCorrect: false },
                    { id: 'answer4', text: 'Абрахам Маслоу', isCorrect: false },
                ],
            },
            {
                id: 7,
                questionText: 'Какой термин используется для описания тенденции людей заниматься самоанализом и саморазвитием с целью достижения лучшей версии себя?',
                answers: [
                    { id: 'answer1', text: 'Сенсорная дефенса', isCorrect: false },
                    { id: 'answer2', text: 'Самореализация', isCorrect: true },
                    { id: 'answer3', text: 'Комплекс Эдипа', isCorrect: false },
                    { id: 'answer4', text: 'Интроверсия', isCorrect: false },
                ],
            },
        ],
    },

    {
        id: 5,
        theme: 'Музыка',
        questions: [
            {
                id: 1,
                questionText: 'Кто является автором "Весны" из четырех времен года?',
                answers: [
                    { id: 'answer1', text: 'Людвиг ван Бетховен', isCorrect: false },
                    { id: 'answer2', text: 'Петр Ильич Чайковский', isCorrect: true },
                    { id: 'answer3', text: 'Вольфганг Амадей Моцарт', isCorrect: false },
                    { id: 'answer4', text: 'Иоганн Себастьян Бах', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'Какой инструмент является основным в оркестре в структуре симфонии?',
                answers: [
                    { id: 'answer1', text: 'Скрипка', isCorrect: true },
                    { id: 'answer2', text: 'Флейта', isCorrect: false },
                    { id: 'answer3', text: 'Труба', isCorrect: false },
                    { id: 'answer4', text: 'Фортепиано', isCorrect: false },
                ],
            },
            {
                id: 3,
                questionText: 'Какой стиль музыки характерен для композитора Вольфганга Амадея Моцарта?',
                answers: [
                    { id: 'answer1', text: 'Рок', isCorrect: false },
                    { id: 'answer2', text: 'Классика', isCorrect: true },
                    { id: 'answer3', text: 'Джаз', isCorrect: false },
                    { id: 'answer4', text: 'Блюз', isCorrect: false },
                ],
            },
            {
                id: 4,
                questionText: 'Из какой страны происходит певица Lana Del Rey?',
                answers: [
                    { id: 'answer1', text: 'США', isCorrect: true },
                    { id: 'answer2', text: 'Великобритания', isCorrect: false },
                    { id: 'answer3', text: 'Франция', isCorrect: false },
                    { id: 'answer4', text: 'Швеция', isCorrect: false },
                ],
            },
        ],
    },

    {
        id: 6,
        theme: 'Философия',
        questions: [
            {
                id: 1,
                questionText: 'Кто из философов сформулировал категорический императив?',
                answers: [
                    { id: 'answer1', text: 'Жан-Жак Руссо', isCorrect: false },
                    { id: 'answer2', text: 'Иммануил Кант', isCorrect: true },
                    { id: 'answer3', text: 'Фридрих Ницше', isCorrect: false },
                    { id: 'answer4', text: 'Карл Маркс', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'Что такое "картезианское сомнение"?',
                answers: [
                    { id: 'answer1', text: 'Сомнение в существовании Бога', isCorrect: false },
                    { id: 'answer2', text: 'Сомнение в существовании внешнего мира', isCorrect: true },
                    { id: 'answer3', text: 'Сомнение в существовании зла', isCorrect: false },
                    { id: 'answer4', text: 'Сомнение в существовании морали', isCorrect: false },
                ],
            },
            {
                id: 3,
                questionText: 'Какой из принципов философии Ницше стал известным под названием "воля к власти"?',
                answers: [
                    { id: 'answer1', text: 'Этернальное возвращение', isCorrect: false },
                    { id: 'answer2', text: 'Преобразование молекул', isCorrect: false },
                    { id: 'answer3', text: 'Воля к власти', isCorrect: true },
                    { id: 'answer4', text: 'Принцип аморальности', isCorrect: false },
                ],
            },
        ],
    },

    {
        id: 7,
        theme: 'История',
        questions: [
            {
                id: 1,
                questionText: 'Когда произошла Великая Октябрьская социалистическая революция в России?',
                answers: [
                    { id: 'answer1', text: '1915', isCorrect: false },
                    { id: 'answer2', text: '1917', isCorrect: true },
                    { id: 'answer3', text: '1920', isCorrect: false },
                    { id: 'answer4', text: '1912', isCorrect: false },
                ],
            },
            {
                id: 2,
                questionText: 'В каком году Кыргызстан получил независимость от СССР?',
                answers: [
                    { id: 'answer1', text: '1991', isCorrect: true },
                    { id: 'answer2', text: '1985', isCorrect: false },
                    { id: 'answer3', text: '2000', isCorrect: false },
                    { id: 'answer4', text: '1975', isCorrect: false },
                ],
            },
            {
                id: 3,
                questionText: 'Какое событие стало началом Первой мировой войны?',
                answers: [
                    { id: 'answer1', text: 'Атака на Перл Харбор', isCorrect: false },
                    { id: 'answer2', text: 'Убийство архидукаФранца Фердинанда', isCorrect: true },
                    { id: 'answer3', text: 'Подписание Договора о ненападении между Германией и СССР', isCorrect: false },
                    { id: 'answer4', text: 'Завоевание Багдада', isCorrect: false },
                ],
            },
            {
                id: 4,
                questionText: 'Какую страну СССР атаковал 22 июня 1941 года, начав Великую Отечественную войну?',
                answers: [
                    { id: 'answer1', text: 'Германия', isCorrect: true },
                    { id: 'answer2', text: 'Япония', isCorrect: false },
                    { id: 'answer3', text: 'Италия', isCorrect: false },
                    { id: 'answer4', text: 'Финляндия', isCorrect: false },
                ],
            },
            {
                id: 5,
                questionText: 'Какое событие стало началом Второй мировой войны?',
                answers: [
                    { id: 'answer1', text: 'Бомбардировка Перл Харбор', isCorrect: false },
                    { id: 'answer2', text: 'Вторжение Германии в Польшу', isCorrect: true },
                    { id: 'answer3', text: 'Битва при Сталинграде', isCorrect: false },
                    { id: 'answer4', text: 'Завоевание Берлина', isCorrect: false },
                ],
            },
        ],
    }
];
