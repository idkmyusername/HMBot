/*CMD
  command: /start
  help: Начать заново, если бот завис и т.д
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Посмотрели? Отлично. Можем начинать: выберите ваш элемент внизу.
  keyboard: Выбрать SMBIOS\n Информация о боте
  aliases: домой
CMD*/

var buttons = [
  {
    title: "Список обновлений",
    url: "https://github.com/idkmyusername/HMBot/releases"
  }
]

Bot.sendInlineKeyboard(
  buttons,
  "Добро пожаловать. Я помогу Вам выбрать SMBIOS с учетом вашего процессора и видеокарты. Посмотрите на список обновлений в боте. Для большей информации загляните в раздел «Информация»."
)

