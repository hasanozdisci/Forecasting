// const getBtcData = async () => {
//     // get real time bitcoin price with websocket
  
//     };
    const socket = new WebSocket('wss://stream.binance.com:9443/ws/btcusdt@trade');
    let lastPrice = 0;
    let btcPrice = document.getElementById('btc-price');
    let btcExhange = document.getElementById('btc-exchange');
    let btcMarketCap = document.getElementById('btc-volume');
    let ethPrice = document.getElementById('eth-price');
    let etcExhange = document.getElementById('eth-exchange');

    //BTC
    socket.onmessage = function (event) {
        const stockObject = JSON.parse(event.data);
        btcPrice.innerHTML = parseFloat(stockObject.p).toFixed(2);
        btcExhange.innerHTML = '<b>+' + parseFloat(stockObject.q).toFixed(2)+ '%';
        btcExhange.style.color = lastPrice > stockObject.q ? 'red' : 'green';
        btcPrice.style.color = lastPrice > stockObject.p ? 'red' : 'green';
        lastPrice = stockObject.p;
    };
   
    //ETH
    const socketForEth = new WebSocket('wss://stream.binance.com:9443/ws/ethusdt@trade');
    let lastPriceForEth = 0;
    socketForEth.onmessage = function (event) {
        const stockObject = JSON.parse(event.data);
        ethPrice.innerHTML = parseFloat(stockObject.p).toFixed(2);
        etcExhange.innerHTML = '<b>+' + parseFloat(stockObject.q).toFixed(2)+ '%';
        etcExhange.style.color = lastPrice > stockObject.q ? 'red' : 'green';
        ethPrice.style.color = lastPrice > stockObject.p ? 'red' : 'green';
        lastPrice = stockObject.p;
    };  

    // bnb coin price
    const socketForBnb = new WebSocket('wss://stream.binance.com:9443/ws/bnbusdt@trade');
    let lastPriceForBnb = 0;
    const bnbPrice = document.getElementById('bnb-price');
    const bnbExhange = document.getElementById('bnb-exchange');
    socketForBnb.onmessage = function (event) {
        const stockObject = JSON.parse(event.data);
        bnbPrice.innerHTML =  parseFloat(stockObject.p).toFixed(2);
        bnbExhange.innerHTML = '<b>+' + parseFloat(stockObject.q).toFixed(2)+ '%';
        bnbExhange.style.color = lastPrice > stockObject.q ? 'red' : 'green';
        bnbPrice.style.color = lastPrice > stockObject.p ? 'red' : 'green';
        lastPrice = stockObject.p;
    };

    // doge coin price
    const socketForDoge = new WebSocket('wss://stream.binance.com:9443/ws/dogeusdt@trade');
    let lastPriceForDoge = 0;
    const dogePrice = document.getElementById('doge-price');
    const dogeExhange = document.getElementById('doge-exchange');
    socketForDoge.onmessage = function (event) {
        const stockObject = JSON.parse(event.data);
        dogePrice.innerHTML =  parseFloat(stockObject.p).toFixed(6);
        // doge coin exchange rate maybe wrong fix it
        dogeExhange.innerHTML = '<b>+' + parseFloat(stockObject.q).toFixed(2)+ '%';
        dogeExhange.style.color = lastPrice > stockObject.q ? 'red' : 'green';
        dogePrice.style.color = lastPrice > stockObject.p ? 'red' : 'green';
        lastPrice = stockObject.p;
    }
// tether coin price
    const socketForTether = new WebSocket('wss://stream.binance.com:9443/ws/tusdusdt@trade');
    let lastPriceForTether = 0;
    const tetherPrice = document.getElementById('tether-price');
    const tetherExhange = document.getElementById('tether-exchange');
    socketForTether.onmessage = function (event) {
        const stockObject = JSON.parse(event.data);
        tetherPrice.innerHTML =  parseFloat(stockObject.p).toFixed(6);
        tetherExhange.innerHTML = '<b>+' + parseFloat(stockObject.q).toFixed(2)+ '%';
        tetherExhange.style.color = lastPrice > stockObject.q ? 'red' : 'green';
        tetherPrice.style.color = lastPrice > stockObject.p ? 'red' : 'green';
        lastPrice = stockObject.p;
    }
    











