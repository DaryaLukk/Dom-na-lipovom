const TelegramBot = require('node-telegram-bot-api');
const express = require('express')
const cors = require('cors')
require("dotenv").config()

const app = express();

app.use(express.json());
app.use(cors());

if (proccess.env.NODE_ENV === 'production') {
    app.use('/', express.static(path.join(_dirname, 'dom-na-lipovom', '.next')))

    app.get('*', (req, res) => {
        res.sendFile(path.res(_dirname, 'dom-na-lipovom', '.next'))
    })
}

app.post('/', async (req, res) => {
    const { name, number, date, cottage } = req.body;
    try {
        const bot = new TelegramBot(process.env.TELEGRAM_TOKEN, { polling: true });
        await bot.sendMessage(
            process.env.CHAT_ID,
            `Новая заявка: 
        Имя - ${name} 
        Телефон - ${number} 
        Желаемая дата - ${date} 
        Желаемый дом - ${cottage}`
        );
        await bot.stopPolling();
        return res.status(200).json({ status: true })
    }
    catch (e) {
        return res.status(500).json({ status: false, message: e })
    }
})

const PORT = process.env.PORT;

app.listen(PORT, () => console.log('ПОРТ ПАШЕТ!'))