```javascript
const TelegramBot = require('node-telegram-bot-api');

// আপনার বটের আসল সিক্রেট টোকেন
const token = '8635592879:AAEV7BUjGhY5zRvTZ_lK93jzVb8RhkNBevM';

// আপনার মিনি অ্যাপের আসল লিংক
const MINI_APP_URL = 'https://my-new-task-app.firebaseapp.com';

// অফিসিয়াল টেলিগ্রাম চ্যানেল লিংক
const CHANNEL_URL = 'https://t.me/earnivoe';

// বট পোলিং চালু করা
const bot = new TelegramBot(token, { polling: true });

bot.onText(/\/start/, (msg) => {
  const chatId = msg.chat.id;

  // আপনার নির্ধারিত আসল ক্যাপশন
  const welcomeCaption = `👋 WELCOME!\n\nআমাদের Earning Bot-এ আপনাকে স্বাগতম। 💙\n\nএখানে পাবেন—\n\n💼 Online Work\n💰 Earning Opportunities\n📚 Useful Guides & Resources\n🔥 নতুন নতুন Updates\n\n✨ শুরু করতে নিচের Get Started অথবা Open-এ ক্লিক করুন।`;

  // দুটি ইনলাইন বাটন: Get Started (মিনি অ্যাপ) এবং Official Channel (চ্যানেল লিংক)
  const keyboard = {
    inline_keyboard: [
      [
        {
          text: '🚀 Get Started',
          web_app: { url: MINI_APP_URL }
        }
      ],
      [
        {
          text: '📢 Official Channel',
          url: CHANNEL_URL
        }
      ]
    ]
  };

  bot.sendMessage(chatId, welcomeCaption, {
    reply_markup: keyboard
  });
});

console.log('Earnivo Bot is active and running 24/7!');
```
