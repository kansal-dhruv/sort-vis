export function mergeSort(array) {
    const animations = [];
    if (array.length <= 1) return array;
    const auxiliaryArray = array.slice();
    mergeSortHelper(array, 0, array.length - 1, auxiliaryArray, animations);
    return animations;
}

function mergeSortHelper(mainArray,start,end,aux,animations){
    if (start === end) return;
    const middleIdx = Math.floor((start + end) / 2);
    mergeSortHelper(aux, start, middleIdx, mainArray, animations);
    mergeSortHelper(aux, middleIdx + 1, end, mainArray, animations);
    doMerge(mainArray, start, middleIdx, end, aux, animations);
}

function doMerge(array,start,middle,end,aux,animations) {
    let k = start;
    let i = start;
    let j = middle + 1;
    while (i <= middle && j <= end) {
        animations.push([i, j]);
        animations.push([i, j]);
        if (aux[i] <= aux[j]) {
            animations.push([k, aux[i]]);
            array[k++] = aux[i++];
        } else {
            animations.push([k, aux[j]]);
            array[k++] = aux[j++];
        }
    }
    while (i <= middle) {
        animations.push([i, i]);
        animations.push([i, i]);
        animations.push([k, aux[i]]);
        array[k++] = aux[i++];
    }
    while (j <= end) {
        animations.push([j, j]);
        animations.push([j, j]);
        animations.push([k, aux[j]]);
        array[k++] = aux[j++];
    }
}