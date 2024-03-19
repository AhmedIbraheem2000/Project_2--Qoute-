let Qoute = [
    {
        'quote': "So many books, so little time.",
        'author':"― Frank Zappa"
    },
    {
        'quote': "Be the change that you wish to see in the world.”",
        'author':"― Mahatma Gandhi"
    },
    {
        'quote': "Always forgive your enemies; nothing annoys them so much.”",
        'author':"― Oscar Wilde"
    },
    {
        'quote': "Always forgive your enemies; nothing annoys them so much.”",
        'author':"― Oscar Wilde"
    }
]
function getQoutes(){
    let numQoute = Math.floor(Math.random()*Qoute.length)
    document.getElementById("qoute").innerHTML = Qoute[numQoute].quote
    document.getElementById("Author").innerHTML = Qoute[numQoute].author
}