import { v4 as uuidv4 } from 'uuid';

function chillHop() {
    return [
        {
            name: "Far From Home",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Toonorth",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=812",
            color: ["#1C174D", "#A15C61"],
            id: uuidv4(),
            active: true
        },
        {
            name: "Cloud Dance",
            cover: "https://chillhop.com/wp-content/uploads/2020/12/7e98d3028a22ee7f16f6a9bfcdc2089f089777a5-1024x1024.jpg",
            artist: "Blue Wednesday, Ian Ewing",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=8930",
            color: ["#1C174D", "#A15C61"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Loving Someone You Lost",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Tapes, tender spring, Nuum",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11247",
            color: ["#729057", "#E2EDE6"],
            id: uuidv4(),
            active: false
        },
        {
            name: "Cloud Carpet",
            cover: "https://chillhop.com/wp-content/uploads/2020/11/8a0c857ddad531279d0757f5362380a6837b1b69-1024x1024.jpg",
            artist: "The Field Tapes, Ezzy, Wowflower",
            audio: "https://mp3.chillhop.com/serve.php/?mp3=11248",
            color: ["#729057", "#E2EDE6"],
            id: uuidv4(),
            active: false
        }
    ];
}

export default chillHop;