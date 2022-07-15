// Подключение из node_modules
import * as noUiSlider from "nouislider";

// Подключение стилей из scss/base/forms/range.scss
// в файле scss/forms/forms.scss

// Подключение cтилей из node_modules
// import 'nouislider/dist/nouislider.css';

import '../../libs/wNumb.min.js'

export function rangeInit() {
    const rangeItems = document.querySelectorAll("[data-range]");
    if (rangeItems.length) {
        rangeItems.forEach((rangeItem) => {


            const fromValue = rangeItem.querySelector("[data-range-from]");
            const toValue = rangeItem.querySelector("[data-range-to]");
            const inputs = [fromValue, toValue];
            const item = rangeItem.querySelector("[data-range-item]");

            noUiSlider.create(item, {
                start: [Number(fromValue.value), Number(toValue.value)], // [0,200000]
                // tooltips: [true, true],
                connect: true,
                range: {
                    min: [Number(fromValue.dataset.rangeFrom)],
                    max: [Number(toValue.dataset.rangeTo)],
                },
				format: wNumb({
					decimals: 0,
					thousand: ' ',
					suffix: ' руб.'
				})
            });
            item.noUiSlider.on("update", function (values, handle) {
                inputs[handle].value = values[handle];
				// inputs[handle].value = values[handle]  + ' руб.';
            });

            // Listen to keydown events on the input field.
            inputs.forEach(function (input, handle) {
                input.addEventListener("change", function () {
                    item.noUiSlider.setHandle(handle, this.value);
                });

                input.addEventListener("keydown", function (e) {
                    var values = item.noUiSlider.get();
                    var value = Number(values[handle]);

                    // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                    var steps = item.noUiSlider.steps();

                    // [down, up]
                    var step = steps[handle];

                    var position;

                    // 13 is enter,
                    // 38 is key up,
                    // 40 is key down.
                    switch (e.which) {
                        case 13:
                            item.noUiSlider.setHandle(handle, this.value);
                            break;

                        case 38:
                            // Get step to go increase slider value (up)
                            position = step[1];

                            // false = no step is set
                            if (position === false) {
                                position = 1;
                            }

                            // null = edge of slider
                            if (position !== null) {
                                item.noUiSlider.setHandle(handle, value + position);
                            }

                            break;

                        case 40:
                            position = step[0];

                            if (position === false) {
                                position = 1;
                            }

                            if (position !== null) {
                                item.noUiSlider.setHandle(handle, value - position);
                            }

                            break;
                    }
                });
            });
        });
    }

    // const priceSlider = document.querySelector('#range');
    // if (priceSlider) {
    // 	let textFrom = priceSlider.getAttribute('data-from');
    // 	let textTo = priceSlider.getAttribute('data-to');
    // 	noUiSlider.create(priceSlider, {
    // 		start: 0, // [0,200000]
    // 		connect: [true, false],
    // 		range: {
    // 			'min': [0],
    // 			'max': [200000]
    // 		}
    // 	});
    // 	/*
    // 	const priceStart = document.getElementById('price-start');
    // 	const priceEnd = document.getElementById('price-end');
    // 	priceStart.addEventListener('change', setPriceValues);
    // 	priceEnd.addEventListener('change', setPriceValues);
    // 	*/
    // 	function setPriceValues() {
    // 		let priceStartValue;
    // 		let priceEndValue;
    // 		if (priceStart.value != '') {
    // 			priceStartValue = priceStart.value;
    // 		}
    // 		if (priceEnd.value != '') {
    // 			priceEndValue = priceEnd.value;
    // 		}
    // 		priceSlider.noUiSlider.set([priceStartValue, priceEndValue]);
    // 	}
    // }
}

rangeInit();

export function rangeInitAll() {
    const rangeItemsAll = document.querySelectorAll("[data-range-all]");
    if (rangeItemsAll.length) {
        rangeItemsAll.forEach((rangeItemAll) => {


            const fromValueAll = rangeItemAll.querySelector("[data-range-from-all]");
            const toValueAll = rangeItemAll.querySelector("[data-range-to-all]");
            const inputsAll = [fromValueAll, toValueAll];
            const itemAll = rangeItemAll.querySelector("[data-range-item-all]");

            noUiSlider.create(itemAll, {
                start: [Number(fromValueAll.value), Number(toValueAll.value)], // [0,200000]
                // tooltips: [true, true],
                connect: true,
                range: {
                    min: [Number(fromValueAll.dataset.rangeFromAll)],
                    max: [Number(toValueAll.dataset.rangeToAll)],
                },
				format: wNumb({
					decimals: 0,
					thousand: ' ',
					// suffix: ' мм'
				})
            });
            itemAll.noUiSlider.on("update", function (values, handle) {
                inputsAll[handle].value = values[handle];
				// inputs[handle].value = values[handle]  + ' руб.';
            });

            // Listen to keydown events on the input field.
            inputsAll.forEach(function (inputAll, handle) {
                inputAll.addEventListener("change", function () {
                    itemAll.noUiSlider.setHandle(handle, this.value);
                });

                inputAll.addEventListener("keydown", function (e) {
                    var values = itemAll.noUiSlider.get();
                    var value = Number(values[handle]);

                    // [[handle0_down, handle0_up], [handle1_down, handle1_up]]
                    var steps = item.noUiSlider.steps();

                    // [down, up]
                    var step = steps[handle];

                    var position;

                    // 13 is enter,
                    // 38 is key up,
                    // 40 is key down.
                    switch (e.which) {
                        case 13:
                            itemAll.noUiSlider.setHandle(handle, this.value);
                            break;

                        case 38:
                            // Get step to go increase slider value (up)
                            position = step[1];

                            // false = no step is set
                            if (position === false) {
                                position = 1;
                            }

                            // null = edge of slider
                            if (position !== null) {
                                itemAll.noUiSlider.setHandle(handle, value + position);
                            }

                            break;

                        case 40:
                            position = step[0];

                            if (position === false) {
                                position = 1;
                            }

                            if (position !== null) {
                                itemAll.noUiSlider.setHandle(handle, value - position);
                            }

                            break;
                    }
                });
            });
        });
    }
}
rangeInitAll();