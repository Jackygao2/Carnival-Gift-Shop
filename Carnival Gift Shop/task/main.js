const input = require('sync-input');
let ticketCount = 0
let play = 1

function welcome() {
    console.log("WELCOME TO THE CARNIVAL GIFT SHOP!")
    console.log("Hello friend! Thank you for visiting the carnival!")
    listGifts()
}

function Gift(id, item, cost) {
    this.id = id
    this.item = item
    this.cost = cost
    this.list = function() {
        console.log(`${id}- ${item}, Cost: ${cost} tickets`)
    }
}
let gifts = [
    new Gift(1, 'Teddy Bear', 10),
    new Gift(2, 'Big Red Ball', 5),
    new Gift(3, 'Huge Bear', 50),
    new Gift(4, 'Candy', 8),
    new Gift(5, 'Stuffed Tiger', 15),
    new Gift(6, 'Stuffed Dragon', 30),
    new Gift(7, 'Skateboard', 100),
    new Gift(8, 'Toy Car', 25),
    new Gift(9, 'Basketball', 20),
    new Gift(10, 'Scary Mask', 75)
]

function listGifts() {
    console.log("Here's the list of gifts:" +"\n")
    gifts.forEach((gift) => gift.list())
    console.log("\n")
}

function menu() {
    console.log("What do you want to do?")
    let option = Number(input("1-Buy a gift 2-Add tickets 3-Check tickets 4-Show gifts 5-Exit the shop\n"))
     // handle option input validation only 1-5 is valid, without non number input
    if (Number.isNaN(option)|| option < 1 || option > 5) {
        console.log("Please enter a valid number!")
        return
    }
    // handle buy gift option
    if (option === 1) {
        if (!gifts.length) {
            console.log("Wow! There are no gifts to buy.")
            return
        }
        buyGift()
    } else if (option === 2) {
        addTickets()
    } else if (option === 3) {
        displayTicketCount()
    } else if (option === 4) {
        listGifts()
    } else if (option === 5) {
        end()
    }
}

function buyGift() {
    let giftId = Number(input("Enter the number of the gift you want to get:\n"));
    // in giftId is Nan
    let gift = gifts.find(gift => gift.id === giftId)
    if (Number.isNaN(giftId)) {
        console.log("Please enter a valid number!")
        return;
    }

    if (gift) {
        if (ticketCount >= gift.cost) {
            ticketCount = ticketCount - gift.cost
            console.log(`Here you go, one ${gift.item}!`)
            gifts.splice(gifts.indexOf(gift), 1);
            displayTicketCount()
        } else if (ticketCount < gift.cost) {
            console.log("You don't have enough tickets to buy this gift.")
        }
    }
    if ( !gift) {
            console.log("There is no gift with that number!")
    }
}

function addTickets() {
    let addTickets = Number(input("Enter the ticket amount:\n"));

    if (Number.isNaN(addTickets) || Number(addTickets) >1000 || Number(addTickets) < 0) {
        console.log("Please enter a valid number between 0 and 1000.")
    }
    ticketCount = ticketCount + Number(addTickets);
    displayTicketCount();
}

function displayTicketCount() {
        console.log(`Total tickets: ${ticketCount}`)
}

function end() {
    play = 0
    console.log("Have a nice day!")
}

welcome()
while (play === 1) {
    menu()
}