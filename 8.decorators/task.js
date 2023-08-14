// Задача № 1

// Первый способ, еще до прочтения условий.
// function cachingDecoratorNew(func) { 
//     let cache = {};

//     return (...args) => {
//         const hash = md5(args);
//         if(hash in cache) {
//             return `Из кэша: ${cache[hash]}`;
//         }

//         const result = func(...args);
//         cache[hash] = result;
//         let arrKeys = Object.keys(cache);
//         if(arrKeys.length > 5) {
//             delete cache[arrKeys[0]];
//         }
//         return `Вычисляем: ${result}`;
//     }
// }

// Второй способ, после прочтения условий.
// function cachingDecoratorNew(func) {
//     let cache = [];

//     return (...args) => {
//         const hash = md5(args);
//         let valueInCache = cache.find(element => element.hash === hash)?.value;
//         if(valueInCache) {
//             return `Из кэша: ${valueInCache}`;
//         }

//         let result = func(...args);
//         cache.push({
//             hash: hash,
//             value: result
//         });
//         if(cache.length > 5) {
//             cache.shift()
//         }
//         return `Вычисляем: ${result}`;
//     }
// }

//Третий способ, после прочтения подсказок. Мне не совсем понятно зачем сдесь делать обертку wrapper?!
function cachingDecoratorNew(func) {
    let cache = [];
    
    function wrapper(...args) {
        const hash = md5(args); 
        let objectInCache = cache.find((item) => item.hash === hash); 
        if (objectInCache) { 
            console.log("Из кэша: " + objectInCache.value); 
            return "Из кэша: " + objectInCache.value;
        }
    
        let result = func(...args); 
        cache.push({
            hash,
            value: result
        }) ; 
        if (cache.length > 5) { 
          cache.shift() 
        }
        console.log("Вычисляем: " + result);
        return "Вычисляем: " + result;  
    }
    return wrapper;
    }



//Задача № 2
function debounceDecoratorNew(func, delay) {
	let timeoutId = null;

	function wrapper(...args) {
		wrapper.allCount++;

		if (!timeoutId) {
			wrapper.count++;
			func(...args);
			timeoutId = true;
			return;
		} else {
			clearTimeout(timeoutId);
		}

		timeoutId = setTimeout(() => {
			wrapper.count++;
			console.log(func(...args));
		}, delay);
	}

	wrapper.count = 0;
	wrapper.allCount = 0;
	return wrapper;
}
