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

Bot.sendInlineKeyboard(buttons, "Бот-помощник по Хакинтошу\n Автор: Commet, 2020.\n Поддержи бота, заплати любую сумму для развития!")
