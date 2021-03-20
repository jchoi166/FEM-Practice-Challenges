console.log("hello there")


// - 10K pageviews / $8 per month
// - 50K pageviews / $12 per month
// - 100K pageviews / $16 per month
// - 500k pageviews / $24 per month
// - 1M pageviews / $36 per month

const rangeSlider = document.querySelector(".range-slider")
const sliderPrice = document.querySelector('.slider__price span')
const sliderViews = document.querySelector('.slider__views span')
const toggleSwitch = document.querySelector('.toggle-switch input')

let priceArray = [8, 12, 16, 24, 36]

const displayPrice = (value) => {
    switch(value) {
        case '1': 
            sliderPrice.innerHTML = `$${priceArray[0].toFixed(2)}`
            sliderViews.innerHTML = '10k'
        break
        case '2': 
            sliderPrice.innerHTML = `$${priceArray[1].toFixed(2)}`
            sliderViews.innerHTML = '50k'
        break
        case '3': 
            sliderPrice.innerHTML = `$${priceArray[2].toFixed(2)}`
            sliderViews.innerHTML = '100k'
        break
        case '4': 
            sliderPrice.innerHTML = `$${priceArray[3].toFixed(2)}`
            sliderViews.innerHTML = '500k'
        break
        case '5': 
            sliderPrice.innerHTML = `$${priceArray[4].toFixed(2)}`
            sliderViews.innerHTML = '1M'
        break
    }
}

const discountPrice = () => {
    if (toggleSwitch.checked === true) {
        priceArray = priceArray.map(x => .75 * x)
    } else {
        priceArray = priceArray.map(x => x / .75)
    }
    console.log(priceArray)
}

rangeSlider.oninput = function() {    
    displayPrice(this.value)    
} 

toggleSwitch.oninput = function() {
    discountPrice()
    displayPrice(rangeSlider.value)
} 