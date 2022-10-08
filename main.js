let ADMIN = {
    login: 'admin',
    password: '0000'
}

$('#signIn').click(function () {

    let login = $('#userLogin').val();
    let password = $('#userPassword').val();

    if (login === ADMIN.login && password === ADMIN.password) {
        $('#loginPage').css('display', 'none');
        $('#mainPage').css('display', 'flex');
        $('#userName').text(login);
    } else {
        alert('Користувача не знайдено');
    }

    $('#userLogin').val('');
    $('#userPassword').val('');

});

$('#logOut').click(function () {
    $('#loginPage').css('display', 'flex');
    $('#mainPage').css('display', 'none');
});

$('#Home').click(function () {
    $('#homePage').css('display', 'flex');
    $('#StudentPage').css('display', 'none');
    $('#tichersPage').css('display', 'none');
    $('#ClasesPage').css('display', 'none');
});
$('#Student').click(function () {
    $('#homePage').css('display', 'none');
    $('#StudentPage').css('display', 'flex');
    $('#tichersPage').css('display', 'none');
    $('#ClasesPage').css('display', 'none');
});
$('#tichers').click(function () {
    $('#homePage').css('display', 'none');
    $('#StudentPage').css('display', 'none');
    $('#tichersPage').css('display', 'flex');
    $('#ClasesPage').css('display', 'none');
});
$('#Clases').click(function () {
    $('#homePage').css('display', 'none');
    $('#StudentPage').css('display', 'none');
    $('#tichersPage').css('display', 'none');
    $('#ClasesPage').css('display', 'flex');
});

let students = [{
    name: 'Юля',
    code: 1601416,
    class:11,
    age: 16,
    mark:12,
},
   {
        name: 'Дмитро',
        code: 1601416,
        class:11,
        age: 17,
        mark:10,
    },
    {
    name: 'Віктор',
    code: 1601416,
    class:10,
    age: 14,
    mark:10,
},
{
    name: 'Тарас',
    code: 1423243,
    class:10,
    age: 15,
    mark:12,
},
{
    name: 'Олексій',
    code: 4533333,
    class:9,
    age: 13,
    mark:10,
},
{
    name: 'Анастасія',
    code: 89878789,
    class:9,
    age: 14,
    mark:11,
},
{
    name: 'Олег',
    code: 66787998,
    class:8,
    age:12,
    mark:9,
},
{
    name: 'Валерій',
    code: 76787876,
    class:8,
    age: 13,
    mark:11,
},
{
    name: 'Дмитро',
    code: 34343422,
    class:7,
    age: 11,
    mark:8,
},
{
    name: 'Юра',
    code: 7888765,
    class:7,
    age: 12,
    mark:9,
},
{
    name: 'Андрій',
    code: 8898788,
    class:6,
    age: 11,
    mark:10,
},
{
    name: 'Юлія',
    class:6,
    age: 10,
    mark:7
}
];
let teachers = [{
    name: 'Юлія Михайлівна',
    age: 41,
    schoolSubject: 'Математика',
},
   {
    name: 'Ольга Степанівна',
    age: 43,
    schoolSubject: 'Математика',
    },
    {
        name: 'Світлана Володимирівна',
        age: 52,
        schoolSubject: 'Українська мова',
},
{
    name: 'Людмила Миколаївна',
    age: 62,
    schoolSubject: 'Українська мова',
},
{
    name: 'Наталя Петрівна',
        age: 42,
        schoolSubject: 'Українська література',
},
{
    name: 'Наталя Дмитрівна',
        age: 52,
        schoolSubject: 'Зарубіжна література',
},
{
    name: 'Надія Владеславівна',
    age: 32,
    schoolSubject: 'Англійська мова',
},
{
    name: 'Ольга Олександрівна',
    age: 38,
    schoolSubject: 'Англійська мова',
},
{
    name: 'Надія Іванівна',
    age: 53,
    schoolSubject: 'Фізика',
},
{
    name: 'Сергій Сергійович',
    age: 62,
    schoolSubject: 'Фізкультура',
},
{
    name: 'Світлана Степанівна',
    age:46,
    schoolSubject: 'Історія України',
},
{
    name: 'Світлана Степанівна',
    age: 32,
    schoolSubject: 'Всесвітня історія',
},
{
    name: 'Іванна Василівна',
    age: 57,
    schoolSubject: 'Географія',
},
{
    name: 'Ольга Андріївна',
    age: 30,
    schoolSubject: 'Біологія',
},
{
    name: 'Володимер Михайлович',
    age: 38,
    schoolSubject: 'Захист України',
},
{
    name: 'Ольга Ярославівна',
    age: 47,
    schoolSubject: 'Мистецтво',
},

];
let Clases = [{
    class:'11-A',
},
   {
    class:'11-B',
    },
    {
        class:'11-C',
},
{
    class:'11-D',
},
{
    class:'10-A',
},
{
    class:'10-B',
},
{
    class:'10-C',
},
{
    class:'10-D',
},
{
    class:'9-A',
},
{
    class:'9-B',
},
{
    class:'9-C',
},
{
    class:'9-D',
},
{
    class:'8-A',
},
{
    class:'8-B',
},
{
    class:'8-C',
},
{
    class:'8-D',
},
{
    class:'7-A',
},
{
    class:'7-B',
},
{
    class:'7-C',
},
{
    class:'7-D',
},
{
    class:'6-A',
},
{
    class:'6-B',
},
{
    class:'6-C',
},
{
    class:'6-D',
},
{
    class:'5-A',
},
{
    class:'5-B',
},
{
    class:'5-C',
},
{
    class:'5-D',
},
];
function showAllStudent(students) {
    for (let i = 0; i < students.length; i++) {
        $('.StudentContainer').append(`<div class='user' id="c${students[i].code}">
        <span>${students[i].name}</span>
        <span>${students[i].age}</span>
        <span>${students[i].class}</span>
        <span>${students[i].mark}</span>
            </div>`);
    }
}
showAllStudent(students);

function showAllTichers(teachers) {
    for (let i = 0; i < teachers.length; i++) {
        $('.tichersContainer').append(`<div class='user' id="c${teachers[i].code}">
        <span>${teachers[i].name}</span>
        <span>${teachers[i].age}</span>
        <span>${teachers[i].schoolSubject}</span>
            </div>`);
    }
}
showAllTichers(teachers);
showAllClases(Clases);
function showAllClases(Clases) {
    for (let i = 0; i < Clases.length; i++) {
        $('.ClasesContainer').append(`<div class='user' id="c${Clases[i].code}">
        <span>${Clases[i].class}</span>
            </div>`);
    }
}
showAllClases(Clases);