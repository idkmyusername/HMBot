/*CMD
  command: /info
  help: Информация о боте
  need_reply: 
  auto_retry_time: 
  folder: 
  answer: Спасибо за пользование!
  keyboard: Домой
  aliases: информация о боте
CMD*/

var buttons = [
    {title: "При поддержке...", url: "t.me/hackintoshru"},
    {title: "Автор", url: "t.me/cummet"},
    {title: "Поддержать бота", url: "qiwi.com/p/375292844765"},
    {title: "Идеи", command: "/ideas"}
];

Bot.sendInlineKeyboard(buttons, "Бот-помощник по Хакинтошу\n Автор: Commet, 2020.\nПоддержи бота, заплати любую сумму для развития!\nТекущая версия: 0.2.0\n*Что нового?*\n1) Добавлены процессоры Intel Xeon E3\n2) Исправлен баг с Intel Core i5-7300HQ\nНаходите баги и пишите создателю бота!")
